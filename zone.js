import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, collection, onSnapshot,
  serverTimestamp, query, orderBy, limit, Timestamp, runTransaction
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { firebaseConfig, ADMIN_UID } from "./firebase-config.js?v=4.9.4";
import { REWARD_ITEMS, LEGACY_REWARD_ITEMS, GM_EXCLUSIVE_ITEMS, GM_DEFAULT_INVENTORY, ALL_REWARD_ITEMS, rewardItemById, RARITY_META, INVENTORY_LIMIT, sellBackValue, ITEM_STAT_KEYS, ITEM_STAT_LABELS, itemStats, itemPower, SHOP_GRADE_ORDER, SHOP_EXPECTED_COUNTS, shopCatalogSummary, shopCatalogComplete } from "./reward-data.js?v=4.9.4";
import { ITEM_ART_DATA, itemArtSrc } from "./item-assets.js?v=4.9.4";
import { DEFAULT_CHARACTER } from "./character-system.js?v=4.9.4";
import { ZONE_ART_DATA } from "./zone-assets.js?v=4.9.4";
import {
  QUEST_CONFIG, DEFAULT_TEACHER_QUESTS, localDayKey, activeQuestLimit,
  canAccessQuest, clampQuestReward, questDifficultyName, questObjectiveLabel
} from "./quest-system.js?v=4.9.4";
import { startUsageTracker, stopUsageTracker } from "./usage-tracker.js?v=4.9.4";

const firebaseApp=initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
const db=getFirestore(firebaseApp);
const $=id=>document.getElementById(id);

const ZONE_ID="thai_social_zone_v4_1";
const WORLD={width:3000,height:1000};
const WALK_Y=835;
const WALK_LEFT=150;
const WALK_RIGHT=2850;
const PLAYER_MAX_SPEED=410;
const ACCELERATION=1900;
const DECELERATION=2400;
const POSITION_SEND_MS=150;
const PRESENCE_HEARTBEAT_MS=30000;
const ONLINE_STALE_MS=95000;
const USER_CHAT_TTL_MS=24*60*60*1000;
const BUBBLE_MS=9000;
const DAY_NIGHT_MS=3*60*60*1000;
const WIZARD_X=1180;
const SHOP_X=2600;
const INTERACT_DISTANCE=210;

const canvas=$("zoneCanvas"),ctx=canvas.getContext("2d",{alpha:false});

// ===== V4.9.4 REAL ART ASSETS =====
const ZONE_ART_PATH={
  world:"./assets/zone/zone-world-day.png",
  maleIdle:"./assets/zone/male-idle-right.png",
  maleWalk1:"./assets/zone/male-walk-right-1.png",
  maleWalk2:"./assets/zone/male-walk-right-2.png",
  femaleIdle:"./assets/zone/female-idle-right.png",
  femaleWalk1:"./assets/zone/female-walk-right-1.png",
  femaleWalk2:"./assets/zone/female-walk-right-2.png",
  wizardIdle:"./assets/zone/wizard-idle-right.png",
  merchantIdle:"./assets/zone/merchant-idle-right.png",
  token:"./assets/zone/item-token.png",
  gem:"./assets/zone/item-gem.png",
  chest:"./assets/zone/item-chest.png",
  scroll:"./assets/zone/item-scroll.png",
  potionRed:"./assets/zone/item-potion-red.png",
  potionBlue:"./assets/zone/item-potion-blue.png",
  potionGreen:"./assets/zone/item-potion-green.png"
};
const REQUIRED_ZONE_ART=["world","maleIdle","femaleIdle","wizardIdle","merchantIdle"];

const zoneArt={};
const zoneArtStatus={loaded:0,failed:0,embedded:0,external:0};

function loadZoneImageSource(key,src,sourceType){
  return new Promise(resolve=>{
    const img=new Image();
    img.decoding="async";
    img.onload=()=>{
      zoneArt[key]=img;
      zoneArtStatus.loaded++;
      zoneArtStatus[sourceType]++;
      resolve(true);
    };
    img.onerror=()=>resolve(false);
    img.src=src;
  });
}

async function loadZoneImage(key,externalSrc){
  // 1) Embedded Data URI is the primary source.
  const embedded=ZONE_ART_DATA[key];
  if(embedded){
    const ok=await loadZoneImageSource(key,embedded,"embedded");
    if(ok)return true;
  }

  // 2) Normal file path is retained as a backup.
  const externalOk=await loadZoneImageSource(key,externalSrc,"external");
  if(!externalOk){
    zoneArtStatus.failed++;
    console.error("Zone art failed from both embedded and external sources:",key,externalSrc);
  }
  return externalOk;
}

async function loadZoneArt(){
  const rows=await Promise.all(
    Object.entries(ZONE_ART_PATH).map(([k,v])=>loadZoneImage(k,v))
  );
  const missing=REQUIRED_ZONE_ART.filter(k=>!zoneArt[k]?.naturalWidth);
  console.info("ZONE ART V4.9.4",{
    loaded:zoneArtStatus.loaded,
    embedded:zoneArtStatus.embedded,
    external:zoneArtStatus.external,
    failed:zoneArtStatus.failed,
    missing
  });
  return {ok:missing.length===0,missing};
}
function shopArtForItem(item){ return itemArtSrc(item?.id); }

const itemArtImages={};
const itemArtBounds={};

function detectMainArtBounds(img){
  // Find real object pixels and ignore decorative sparkles / empty canvas.
  // Returned values are normalized to the original image.
  const S=160,cv=document.createElement("canvas");cv.width=S;cv.height=S;
  const cx=cv.getContext("2d",{willReadFrequently:true});
  cx.clearRect(0,0,S,S);cx.drawImage(img,0,0,S,S);
  let data;
  try{data=cx.getImageData(0,0,S,S).data}catch{return {x:0,y:0,w:1,h:1}}
  const on=new Uint8Array(S*S);
  for(let i=0;i<S*S;i++)on[i]=data[i*4+3]>=48?1:0;

  const seen=new Uint8Array(S*S),components=[];
  const dirs=[-1,1,-S,S,-S-1,-S+1,S-1,S+1];
  for(let p=0;p<on.length;p++){
    if(!on[p]||seen[p])continue;
    const stack=[p];seen[p]=1;let area=0,minX=S,minY=S,maxX=0,maxY=0;
    while(stack.length){
      const q=stack.pop(),y=Math.floor(q/S),x=q-y*S;
      area++;minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);
      for(const d of dirs){
        const n=q+d;if(n<0||n>=on.length||seen[n]||!on[n])continue;
        const ny=Math.floor(n/S),nx=n-ny*S;
        if(Math.abs(nx-x)>1||Math.abs(ny-y)>1)continue;
        seen[n]=1;stack.push(n);
      }
    }
    if(area>=5)components.push({area,minX,minY,maxX,maxY});
  }
  if(!components.length)return {x:0,y:0,w:1,h:1};
  const maxArea=Math.max(...components.map(x=>x.area));
  // Keep significant components (e.g. both wings / both shoes), drop tiny stars.
  const keep=components.filter(x=>x.area>=Math.max(10,maxArea*.075));
  let minX=S,minY=S,maxX=0,maxY=0;
  keep.forEach(b=>{minX=Math.min(minX,b.minX);minY=Math.min(minY,b.minY);maxX=Math.max(maxX,b.maxX);maxY=Math.max(maxY,b.maxY)});
  const pad=3;minX=Math.max(0,minX-pad);minY=Math.max(0,minY-pad);maxX=Math.min(S-1,maxX+pad);maxY=Math.min(S-1,maxY+pad);
  return {x:minX/S,y:minY/S,w:(maxX-minX+1)/S,h:(maxY-minY+1)/S};
}

async function loadItemArtImages(){
  const jobs=ALL_REWARD_ITEMS.map(item=>new Promise(resolve=>{
    const img=new Image();img.decoding='async';
    img.onload=()=>{
      itemArtImages[item.id]=img;
      itemArtBounds[item.id]=detectMainArtBounds(img);
      resolve(true)
    };
    img.onerror=()=>resolve(false);
    img.src=itemArtSrc(item.id);
  }));
  await Promise.all(jobs);
}

function drawEquippedArt(c,item,x,y,w,h,flip=false,alpha=1,rotation=0){
  const img=itemArtImages[item?.id];if(!img?.naturalWidth)return false;
  const b=itemArtBounds[item.id]||{x:0,y:0,w:1,h:1};
  const sx=b.x*img.naturalWidth,sy=b.y*img.naturalHeight,sw=b.w*img.naturalWidth,sh=b.h*img.naturalHeight;
  c.save();c.globalAlpha=alpha;c.translate(x,y);if(flip)c.scale(-1,1);if(rotation)c.rotate(rotation);
  c.drawImage(img,sx,sy,sw,sh,-w/2,-h,w,h);c.restore();return true;
}

// All sellable + legacy + GM exclusive items resolve to a body anchor.
// x is mirrored automatically for direction-aware slots.
const ITEM_EQUIP_ANCHORS={
  cap_blue:{slot:"head",x:0,y:-116,w:57,h:43},
  shirt_blue:{slot:"top",x:0,y:-35,w:61,h:78},
  sneaker_white:{slot:"shoes",x:0,y:1,w:51,h:25},
  thai_sash:{slot:"top",x:0,y:-36,w:62,h:77},
  round_glasses:{slot:"face",x:0,y:-89,w:42,h:21},
  student_bag:{slot:"back",x:-12,y:-31,w:62,h:76},
  code_tablet:{slot:"hand",x:39,y:-35,w:48,h:57},
  neon_headset:{slot:"head",x:0,y:-109,w:64,h:61},
  set2_cat_pet:{slot:"pet",x:-69,y:1,w:60,h:59},
  coder_jacket:{slot:"top",x:0,y:-34,w:66,h:80},

  set2_katana:{slot:"hand",x:43,y:-15,w:48,h:112},
  code_blade:{slot:"hand",x:43,y:-15,w:48,h:112},
  set2_mystic_staff:{slot:"hand",x:45,y:-8,w:50,h:123},
  spell_tome:{slot:"hand",x:40,y:-40,w:52,h:52},
  gold_crown:{slot:"head",x:0,y:-119,w:58,h:47},
  guardian_armor:{slot:"top",x:0,y:-33,w:69,h:82},
  royal_cape:{slot:"back",x:0,y:-23,w:77,h:104},
  monkey_pet:{slot:"pet",x:-70,y:1,w:62,h:61},
  gold_aura:{slot:"aura",x:0,y:-60,w:118,h:142},
  set2_wolf_pet:{slot:"pet",x:-72,y:1,w:67,h:64},

  set2_cyber_spear:{slot:"hand",x:45,y:-5,w:50,h:128},
  purple_sword:{slot:"hand",x:44,y:-12,w:49,h:116},
  gold_sword:{slot:"hand",x:44,y:-12,w:49,h:116},
  arcane_crown:{slot:"head",x:0,y:-120,w:61,h:49},
  dragon_wings:{slot:"back",x:0,y:-17,w:112,h:116},
  master_halo:{slot:"aura",x:0,y:-129,w:70,h:32},
  set2_tiger_pet:{slot:"pet",x:-74,y:1,w:71,h:66},
  phoenix_pet:{slot:"pet",x:-73,y:0,w:69,h:72},
  golden_dragon_pet:{slot:"pet",x:-76,y:0,w:76,h:72},
  throne_effect:{slot:"aura",x:0,y:5,w:122,h:137},

  set2_samurai_armor:{slot:"top",x:0,y:-32,w:70,h:83},
  set2_mage_robe:{slot:"top",x:0,y:-31,w:69,h:84},
  set2_dragon_armor:{slot:"top",x:0,y:-31,w:72,h:85},
  set2_mini_dragon:{slot:"pet",x:-74,y:0,w:72,h:69},
  set2_spirit_wings:{slot:"back",x:0,y:-17,w:111,h:116},
  set2_storm_aura:{slot:"aura",x:0,y:-59,w:119,h:143},

  gm_excalibur:{slot:"hand",x:44,y:-12,w:50,h:119},
  gm_little_ghost:{slot:"pet",x:-70,y:0,w:64,h:64}
};

function equipAnchor(item,direction="right"){
  const base=ITEM_EQUIP_ANCHORS[item?.id]||{slot:item?.slot||"",x:0,y:-35,w:58,h:65};
  const dir=direction==="left"?-1:1;
  let x=Number(base.x||0);
  if(["hand"].includes(base.slot))x=Math.abs(x)*dir;
  if(["pet"].includes(base.slot))x=-Math.abs(x)*dir;
  if(base.slot==="back"&&x)x=Math.abs(x)*(direction==="left"?1:-1);
  return {...base,x,flip:direction==="left"};
}
function drawAnchoredEquipment(c,item,direction,alpha=1){
  const a=equipAnchor(item,direction);
  return drawEquippedArt(c,item,a.x,a.y,a.w,a.h,a.flip,alpha,a.rotation||0);
}



let cssW=1,cssH=1,dpr=1,zoom=1;
let uid=null,profile=null,blocked=true;
let players=new Map(),messages=[],messagesByUid=new Map();
let teacherQuests=[...DEFAULT_TEACHER_QUESTS],questProgress={};
let positionsUnsub=null,messagesUnsub=null,moderationUnsub=null,rankingUnsub=null,questUnsub=null;
let heartbeat=null,clockTimer=null,expiryTimer=null;
let lastFrame=performance.now(),lastPositionSend=0,lastChatAt=0;
let cameraX=0,velocityX=0;
const me={x:450,y:WALK_Y,direction:"right",moving:false};
const keys=new Set();
const touch={left:false,right:false};
let nearbyAction=null;
let zoneShopGrade="all";

const GM_RANK={tierId:"master",tierName:"GAME MASTER",rating:999999};
const GM_ITEMS=GM_EXCLUSIVE_ITEMS;

const esc=v=>String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
function isGM(){return uid===ADMIN_UID}
function isGMPlayer(p){return p?.uid===ADMIN_UID||p?.isAdmin===true}
function isTouchOnly(){return window.matchMedia("(pointer: coarse)").matches&&window.innerWidth<=1180}
function equipped(character){return {...DEFAULT_CHARACTER.equipped,...(character?.equipped||{})}}
function itemById(id){return rewardItemById(id)}
function equippedItems(character){return Object.entries(equipped(character)).map(([slot,id])=>({slot,item:itemById(id)})).filter(x=>x.item)}
function rankMeta(rank={}){
  const id=String(rank.tierId||"bronze").toLowerCase();
  const map={bronze:{letter:"B",color:"#9a6b46"},silver:{letter:"S",color:"#84919c"},gold:{letter:"G",color:"#d5a21d"},platinum:{letter:"P",color:"#3b9c98"},diamond:{letter:"D",color:"#537bd2"},master:{letter:"M",color:"#7749b7"}};
  return {id,...(map[id]||map.bronze)};
}
function rankShieldHTML(rank){const r=rankMeta(rank);return `<span class="rank-shield rank-${r.id}"><span class="rank-shield-letter">${r.letter}</span></span>`}
function rr(c,x,y,w,h,r){c.beginPath();c.roundRect(x,y,w,h,r)}

function showGate(title,text,help=""){
  blocked=true;$("zoneApp").classList.add("hidden");$("zoneGate").classList.remove("hidden");
  $("zoneGateTitle").textContent=title;$("zoneGateText").textContent=text;
  if(help){$("zoneGateHelp").innerHTML=help;$("zoneGateHelp").classList.remove("hidden")}else $("zoneGateHelp").classList.add("hidden");
}
function hideGate(){blocked=false;$("zoneGate").classList.add("hidden");$("zoneApp").classList.remove("hidden")}
function chatStatus(text,error=false){$("zoneChatStatus").textContent=text;$("zoneChatStatus").classList.toggle("error",error)}
function connectionState(state,text){$("zoneConnectionBadge").dataset.state=state;$("zoneConnectionBadge").querySelector("strong").textContent=text}

function moderationState(m){
  const now=Date.now(),ban=m?.bannedUntil?.toDate?.(),kick=m?.kickedUntil?.toDate?.();
  return {banned:!!ban&&ban.getTime()>now,bannedUntil:ban,kicked:!!kick&&kick.getTime()>now,kickedUntil:kick};
}
async function checkModeration(){
  if(isGM())return true;
  try{
    const snap=await getDoc(doc(db,"zone_moderation",uid));
    if(!snap.exists())return true;
    const m=snap.data(),s=moderationState(m);
    if(s.banned){showGate("ถูกระงับการเข้า 2D Zone",`แบนถึง ${s.bannedUntil.toLocaleString("th-TH")}`);return false}
    if(s.kicked){showGate("ถูก GM เตะออกจาก 2D Zone",`กลับเข้าได้หลัง ${s.kickedUntil.toLocaleTimeString("th-TH")}`);return false}
    return true;
  }catch(error){showGate("ตรวจสอบสิทธิ์ Zone ไม่สำเร็จ",error.message||String(error),"กรุณา Publish firestore.rules V4.9.4");return false}
}
function listenModeration(){
  if(isGM())return;
  moderationUnsub?.();
  moderationUnsub=onSnapshot(doc(db,"zone_moderation",uid),snap=>{
    if(!snap.exists())return;
    const s=moderationState(snap.data());
    if(s.banned||s.kicked){stopRealtime();showGate(s.banned?"คุณถูก GM แบน":"คุณถูก GM เตะออก",s.banned?`แบนถึง ${s.bannedUntil.toLocaleString("th-TH")}`:`กลับเข้าได้หลัง ${s.kickedUntil.toLocaleTimeString("th-TH")}`)}
  });
}

async function loadProfile(){
  if(isGM()){
    const gmRef=doc(db,"gm_profiles",uid),snap=await getDoc(gmRef);
    const saved=snap.exists()?snap.data():{};
    const inv=[...new Set([...(Array.isArray(saved.inventory)?saved.inventory:[]),...GM_DEFAULT_INVENTORY])];
    profile={uid,studentId:"GM",fullName:"GM",rank:null,tokenBalance:Infinity,inventory:inv,
      character:{...DEFAULT_CHARACTER,...(saved.character||{}),gender:["male","female"].includes(saved.character?.gender)?saved.character.gender:"male",equipped:equipped(saved.character||{})},
      zone:saved.zone||{}};
    me.x=Math.max(WALK_LEFT,Math.min(WALK_RIGHT,Number(profile.zone?.x)||450));
    me.direction=profile.zone?.direction==="left"?"left":"right";
    await setDoc(gmRef,{uid,studentId:"GM",fullName:"GM",inventory:inv,character:profile.character,zone:profile.zone,updatedAt:serverTimestamp()},{merge:true});
    return true;
  }
  try{
    const snap=await getDoc(doc(db,"users",uid));if(!snap.exists()){showGate("ไม่พบ User","กรุณาลงทะเบียนใหม่");return false}
    profile={uid,...snap.data()};
    if(!["male","female"].includes(profile.character?.gender)){showGate("กรุณาเลือกตัวละครก่อน","กลับหน้า User แล้วเลือกชายหรือหญิง");return false}
    me.x=Math.max(WALK_LEFT,Math.min(WALK_RIGHT,Number(profile.zone?.x)||450));
    me.direction=profile.zone?.direction==="left"?"left":"right";
    return true;
  }catch(error){showGate("โหลดข้อมูล User ไม่สำเร็จ",error.message||String(error));return false}
}

async function saveGmProfile(){
  if(!isGM()||!profile)return;
  await setDoc(doc(db,"gm_profiles",uid),{
    uid,studentId:"GM",fullName:"GM",
    inventory:[...new Set(profile.inventory||[])],
    character:{...DEFAULT_CHARACTER,...profile.character,equipped:equipped(profile.character)},
    zone:profile.zone||{},
    updatedAt:serverTimestamp()
  },{merge:true});
}

async function syncPublicProfile(){
  try{
    const gm=isGM();
    await setDoc(doc(db,"public_profiles",uid),{
      uid,studentId:gm?"GM":profile.studentId,fullName:gm?"GM":profile.fullName,isAdmin:gm,role:gm?"GM":"USER",
      rank:gm?null:(profile.rank||null),
      character:{gender:profile.character?.gender||"male",equipped:equipped(profile.character)},
      updatedAt:serverTimestamp()
    },{merge:true});
  }catch(error){console.warn("profile sync",error)}
}
async function publishPresence(){
  try{
    await setDoc(doc(db,"presence",uid),{
      uid,studentId:isGM()?"GM":profile.studentId,isAdmin:isGM(),rank:isGM()?null:(profile.rank||null),
      area:"zone",online:true,lastSeenAt:serverTimestamp()
    },{merge:true});
  }catch(error){console.warn("presence",error)}
}
async function publishPosition(force=false){
  if(blocked||!profile)return;
  const now=performance.now();if(!force&&now-lastPositionSend<POSITION_SEND_MS)return;lastPositionSend=now;
  try{
    await setDoc(doc(db,"zone_positions",uid),{
      uid,studentId:isGM()?"GM":profile.studentId,isAdmin:isGM(),role:isGM()?"GM":"USER",
      rank:isGM()?null:(profile.rank||null),
      character:{gender:profile.character?.gender||"male",equipped:equipped(profile.character)},
      zoneId:ZONE_ID,x:Math.round(me.x*10)/10,y:WALK_Y,direction:me.direction,moving:me.moving,online:true,updatedAt:serverTimestamp()
    },{merge:true});
    connectionState("online","REALTIME");
  }catch(error){connectionState("error","SYNC ERROR");console.warn("position",error)}
}
function listenPositions(){
  positionsUnsub?.();
  positionsUnsub=onSnapshot(collection(db,"zone_positions"),snap=>{
    const now=Date.now(),seen=new Set();
    snap.docs.forEach(d=>{
      const p={uid:d.id,...d.data()};if(p.zoneId!==ZONE_ID||!p.online)return;
      const dt=p.updatedAt?.toDate?.();if(dt&&now-dt.getTime()>ONLINE_STALE_MS)return;
      seen.add(d.id);if(d.id===uid)return;
      const x=Number(p.x)||450,old=players.get(d.id);
      if(old)Object.assign(old,p,{targetX:x});
      else players.set(d.id,{...p,currentX:x,targetX:x});
    });
    for(const id of [...players.keys()])if(!seen.has(id))players.delete(id);
    $("zoneOnlineCount").textContent=players.size+1;
  },error=>{connectionState("error","FIREBASE ERROR");console.warn(error)});
}

function isChatVisible(m,now=Date.now()){
  if(m?.isGM===true||m?.uid===ADMIN_UID)return true;
  const dt=m?.createdAt?.toDate?.();return !!dt&&now-dt.getTime()<USER_CHAT_TTL_MS;
}
function refreshMessages(){
  const visible=messages.filter(m=>m.zoneId===ZONE_ID&&isChatVisible(m));
  const latest=new Map();for(const m of visible)if(!latest.has(m.uid))latest.set(m.uid,m);
  messagesByUid=latest;renderChatHistory(visible);
}
function listenMessages(){
  messagesUnsub?.();
  messagesUnsub=onSnapshot(query(collection(db,"zone_messages"),orderBy("createdAt","desc"),limit(120)),snap=>{
    messages=snap.docs.map(d=>({id:d.id,...d.data()}));refreshMessages();chatStatus("พร้อมพูดคุย");
  },error=>{chatStatus("โหลดแชตไม่สำเร็จ",true);console.warn(error)});
}
function renderChatHistory(rows=messages.filter(m=>m.zoneId===ZONE_ID&&isChatVisible(m))){
  $("zoneChatHistoryList").innerHTML=rows.slice(0,80).map(m=>{
    const gm=m.isGM||m.uid===ADMIN_UID,dt=m.createdAt?.toDate?.();
    return `<article class="zone47-chat-message ${gm?"gm":""}"><div class="zone47-chat-avatar">${gm?"GM":esc(String(m.studentId||"?").slice(-2))}</div><div><div class="zone47-chat-meta"><strong>${gm?"GM":esc(m.studentId||"USER")}</strong><time>${dt?dt.toLocaleString("th-TH"):"-"}</time></div><p>${esc(m.text||"")}</p></div></article>`;
  }).join("")||`<div class="empty">ยังไม่มีข้อความ</div>`;
}
async function archiveMessage(id,data){
  try{await setDoc(doc(db,"zone_chat_archive",id),{...data,messageId:id,createdAt:serverTimestamp(),archivedAt:serverTimestamp()})}catch(error){console.warn("archive",error)}
}
async function sendMessage(text){
  const clean=String(text||"").trim().slice(0,120);if(blocked||!clean)return;
  if(Date.now()-lastChatAt<700){chatStatus("ส่งเร็วเกินไป");return}lastChatAt=Date.now();
  const gm=isGM(),payload={uid,studentId:gm?"GM":profile.studentId,text:clean,zoneId:ZONE_ID,isGM:gm,createdAt:serverTimestamp()};
  if(!gm)payload.expiresAt=Timestamp.fromMillis(Date.now()+USER_CHAT_TTL_MS);
  try{
    const ref=doc(collection(db,"zone_messages"));await setDoc(ref,payload);
    archiveMessage(ref.id,{uid,studentId:gm?"GM":profile.studentId,text:clean,zoneId:ZONE_ID,isGM:gm});
    chatStatus("ส่งแล้ว");setTimeout(()=>chatStatus("พร้อมพูดคุย"),1000);
  }catch(error){chatStatus("ส่งไม่ได้ · ตรวจ Rules",true);console.warn(error)}
}
$("zoneChatForm").onsubmit=async e=>{e.preventDefault();const input=$("zoneChatInput"),text=input.value;if(!text.trim())return;input.value="";await sendMessage(text);input.focus({preventScroll:true})};
$("openZoneChatHistory").onclick=()=>{$("zoneChatHistoryModal").classList.remove("hidden");renderChatHistory()};
$("closeZoneChatHistory").onclick=()=>$("zoneChatHistoryModal").classList.add("hidden");

function questProgressRef(){return doc(db,"quest_progress",uid,"days",localDayKey())}
async function loadQuestProgress(){
  if(isGM()){questProgress={};return}
  try{const snap=await getDoc(questProgressRef());questProgress=snap.exists()?snap.data():{}}catch(error){console.warn("quest progress",error);questProgress={}}
}
function listenTeacherQuests(){
  questUnsub?.();
  questUnsub=onSnapshot(collection(db,"teacher_quests"),snap=>{
    teacherQuests=snap.empty?[...DEFAULT_TEACHER_QUESTS]:snap.docs.map(d=>({id:d.id,...d.data()})).filter(q=>q.active!==false);
    renderQuestModal();
  },error=>{console.warn("teacher quests",error);teacherQuests=[...DEFAULT_TEACHER_QUESTS];renderQuestModal()});
}
function acceptedMap(){return questProgress.accepted||{}}
function completedMap(){return questProgress.completed||{}}
function activeAcceptedCount(){return Object.values(acceptedMap()).filter(x=>x?.status==="accepted").length}
function acceptedTodayCount(){return Object.keys(acceptedMap()).length}
function renderQuestModal(){
  if(!profile||!$("zoneQuestList"))return;
  const rank=isGM()?GM_RANK:(profile.rank||{}),daily=acceptedTodayCount(),activeNow=activeAcceptedCount(),activeLimit=activeQuestLimit(rank);
  $("questRankLabel").textContent=isGM()?"GM":(rank.tierName||"Bronze");
  $("questDailyCount").textContent=`${daily} / ${QUEST_CONFIG.dailyLimit}`;
  $("questActiveLimit").textContent=activeLimit;
  $("zoneQuestList").innerHTML=teacherQuests.map(q=>{
    const accepted=acceptedMap()[q.id],completed=completedMap()[q.id]||accepted?.status==="completed";
    const rankOk=isGM()||canAccessQuest(rank,q),reward=clampQuestReward(q.difficulty,q.rewardToken);
    let action="";
    if(isGM())action=`<button class="btn ghost" disabled>GM ดูภารกิจ</button>`;
    else if(completed)action=`<button class="btn ghost" disabled>สำเร็จแล้ว ✓</button>`;
    else if(accepted)action=isTouchOnly()
      ?`<button class="btn secondary" disabled>รับแล้ว · ทำบนคอม</button>`
      :`<button class="btn primary" data-start-quest="${esc(q.id)}">เริ่มทำภารกิจ</button>`;
    else if(!rankOk)action=`<button class="btn ghost" disabled>ต้อง Rank ${esc(q.minRank||"สูงกว่า")}</button>`;
    else if(daily>=QUEST_CONFIG.dailyLimit)action=`<button class="btn ghost" disabled>ครบ 3 ภารกิจวันนี้</button>`;
    else if(activeNow>=activeLimit)action=`<button class="btn ghost" disabled>ทำภารกิจที่รับไว้ก่อน</button>`;
    else action=`<button class="btn primary" data-accept-quest="${esc(q.id)}">รับภารกิจ</button>`;
    return `<article class="zone47-quest-item difficulty-${esc(q.difficulty)} ${completed?"completed":!rankOk?"locked":""}">
      <div class="zone47-quest-icon">${q.languageId==="python"?"🐍":"🌐"}</div>
      <div class="zone47-quest-main">
        <div class="zone47-quest-title"><strong>${esc(q.title)}</strong><span>${questDifficultyName(q.difficulty)}</span></div>
        <p>${esc(q.description||"")}</p>
        <div class="zone47-quest-tags"><span>${esc(String(q.languageId).toUpperCase())} Stage ${Number(q.stage)}</span><span>${esc(questObjectiveLabel(q))}</span><span>Rank ≥ ${esc(q.minRank||"bronze")}</span></div>
      </div>
      <div class="zone47-quest-reward"><strong>+${reward}</strong><span>Token</span>${action}</div>
    </article>`;
  }).join("")||`<div class="empty">ยังไม่มีภารกิจ</div>`;
  document.querySelectorAll("[data-accept-quest]").forEach(btn=>btn.onclick=()=>acceptQuest(btn.dataset.acceptQuest));
  document.querySelectorAll("[data-start-quest]").forEach(btn=>btn.onclick=()=>startQuest(btn.dataset.startQuest));
}
async function acceptQuest(id){
  if(isGM())return;
  const q=teacherQuests.find(x=>x.id===id);if(!q)return;
  if(!canAccessQuest(profile.rank,q))return;
  try{
    await runTransaction(db,async tx=>{
      const ref=questProgressRef(),snap=await tx.get(ref),data=snap.exists()?snap.data():{};
      const accepted={...(data.accepted||{})},completed={...(data.completed||{})};
      if(accepted[id]||completed[id])return;
      if(Object.keys(accepted).length>=QUEST_CONFIG.dailyLimit)throw new Error("วันนี้รับครบ 3 ภารกิจแล้ว");
      const activeNow=Object.values(accepted).filter(x=>x?.status==="accepted").length;
      if(activeNow>=activeQuestLimit(profile.rank))throw new Error("ทำภารกิจที่รับอยู่ให้เสร็จก่อน");
      accepted[id]={status:"accepted",acceptedAt:new Date().toISOString(),questTitle:q.title};
      tx.set(ref,{uid,studentId:profile.studentId,dateKey:localDayKey(),accepted,completed,updatedAt:serverTimestamp()},{merge:true});
    });
    await loadQuestProgress();renderQuestModal();
    if(!isTouchOnly())startQuest(id);
  }catch(error){alert(error.message||String(error))}
}
function startQuest(id){
  const q=teacherQuests.find(x=>x.id===id)||DEFAULT_TEACHER_QUESTS.find(x=>x.id===id);if(!q)return;
  if(isTouchOnly()){alert("รับภารกิจแล้ว กรุณาเปิดบัญชีนี้บนคอมพิวเตอร์เพื่อทำภารกิจ");return}
  location.href=`./index.html?quest=${encodeURIComponent(id)}&v=4.9.4`;
}
$("openWizardQuests").onclick=async()=>{await loadQuestProgress();renderQuestModal();$("zoneQuestModal").classList.remove("hidden")};
$("closeWizardQuests").onclick=()=>$("zoneQuestModal").classList.add("hidden");

function zoneItemStatsMarkup(item,compact=false){
  const s=itemStats(item);
  const chips=ITEM_STAT_KEYS.filter(k=>s[k]>0).map(k=>`<span><b>+${s[k]}</b> ${esc(ITEM_STAT_LABELS[k])}</span>`).join("");
  return `<div class="zone47-item-stats ${compact?"compact":""}">${chips}</div><div class="zone47-item-power"><span>POWER</span><strong>${itemPower(item)}</strong></div>`;
}
function zoneShopItemCard(item,owned,wearing,balance){
  const own=owned.has(item.id),on=wearing.has(item.id),sell=sellBackValue(item);
  const full=!isGM()&&!own&&owned.size>=INVENTORY_LIMIT;
  const art=shopArtForItem(item);
  return `<article class="zone47-shop-item rarity-${esc(item.rarity)} ${on?'wearing':''}" data-shop-catalog-id="${esc(item.id)}">
    <div class="zone47-shop-rarity">${esc(RARITY_META[item.rarity]?.name||item.rarity)} · ${esc(RARITY_META[item.rarity]?.short||"")}</div>
    <div class="zone47-shop-icon zone47-shop-real-art">
      <img src="${art}" alt="${esc(item.name)}" loading="lazy">
      <span>${item.icon}</span>
    </div>
    <strong>${esc(item.name)}</strong>
    <small>${esc(item.description)}</small>
    <div class="zone47-shop-slot">SLOT · ${esc(item.slot.toUpperCase())}</div>
    ${zoneItemStatsMarkup(item)}
    <em>${Number(item.cost).toLocaleString()} Token</em>
    <div class="zone47-shop-actions">
      <button class="btn ${on?'ghost':own?'secondary':'primary'}" data-shop-item="${esc(item.id)}" ${!own&&(balance<item.cost||full)?'disabled':''}>${on?'ถอด':own?'สวมใส่':isGM()?'รับเข้ากระเป๋า GM':full?'กระเป๋าเต็ม':balance<item.cost?'Token ไม่พอ':'แลกไอเท็ม'}</button>
      ${own&&!isGM()?`<button class="btn danger-soft" data-zone-sell-item="${esc(item.id)}" type="button">ขายคืน ${sell.toLocaleString()}</button>`:''}
    </div>
  </article>`;
}
function zoneShopGradeSection(grade,items,owned,wearing,balance){
  const meta=RARITY_META[grade]||{name:grade,short:""};
  const expected=Number(SHOP_EXPECTED_COUNTS[grade]||items.length);
  return `<section class="zone47-shop-grade-section grade-${esc(grade)}">
    <div class="zone47-shop-grade-head">
      <div><span>${esc(meta.short||grade.toUpperCase())}</span><strong>${esc(meta.name||grade)}</strong></div>
      <b>${items.length}/${expected} ไอเท็ม</b>
    </div>
    <div class="zone47-shop-grade-grid">
      ${items.map(item=>zoneShopItemCard(item,owned,wearing,balance)).join("")}
    </div>
  </section>`;
}
function renderShop(){
  if(!profile)return;
  const owned=new Set(profile.inventory||[]);
  const eq=equipped(profile.character);
  const wearing=new Set(Object.values(eq).filter(Boolean));
  const balance=isGM()?Infinity:Number(profile.tokenBalance||0);

  $('zoneTokenBalance').textContent=isGM()?'∞':balance.toLocaleString();
  $('zoneShopBalance').textContent=isGM()?'∞':balance.toLocaleString();
  if($('zoneShopInventory'))$('zoneShopInventory').textContent=isGM()?`กระเป๋า ${owned.size}/∞`:`กระเป๋า ${owned.size}/${INVENTORY_LIMIT}`;
  if($('zoneBackpackMini'))$('zoneBackpackMini').textContent=isGM()?`${owned.size}/∞`:`${owned.size}/${INVENTORY_LIMIT}`;

  const summary=shopCatalogSummary();
  const complete=shopCatalogComplete()
    && REWARD_ITEMS.every(item=>!!shopArtForItem(item))
    && new Set(REWARD_ITEMS.map(item=>item.id)).size===SHOP_EXPECTED_COUNTS.total;

  if($("zoneShopCatalogStatus")){
    $("zoneShopCatalogStatus").textContent=complete
      ?`✅ พร้อมขายครบ ${summary.total}/${SHOP_EXPECTED_COUNTS.total} ชิ้น`
      :`⚠️ Catalog ไม่ครบ (${summary.total}/${SHOP_EXPECTED_COUNTS.total})`;
    $("zoneShopCatalogStatus").classList.toggle("ok",complete);
    $("zoneShopCatalogStatus").classList.toggle("bad",!complete);
  }

  const sorted=[...REWARD_ITEMS].sort((a,b)=>
    (RARITY_META[a.rarity]?.order||0)-(RARITY_META[b.rarity]?.order||0)
    || a.cost-b.cost
    || String(a.name).localeCompare(String(b.name),"th")
  );

  if(zoneShopGrade==="all"){
    $("zoneShopGrid").innerHTML=SHOP_GRADE_ORDER.map(grade=>{
      const group=sorted.filter(item=>item.rarity===grade);
      return zoneShopGradeSection(grade,group,owned,wearing,balance);
    }).join("");
  }else{
    const group=sorted.filter(item=>item.rarity===zoneShopGrade);
    $("zoneShopGrid").innerHTML=zoneShopGradeSection(zoneShopGrade,group,owned,wearing,balance);
  }

  document.querySelectorAll('[data-shop-item]:not([disabled])').forEach(btn=>btn.onclick=()=>handleShopItem(btn.dataset.shopItem));
  document.querySelectorAll('[data-zone-sell-item]').forEach(btn=>btn.onclick=()=>sellZoneItem(btn.dataset.zoneSellItem));
  renderBackpack();
}
async function refreshProfile(){
  if(isGM()){await loadProfile();renderShop();renderBackpack();await syncPublicProfile();await publishPosition(true);return;}
  const snap=await getDoc(doc(db,"users",uid));if(snap.exists())profile={uid,...snap.data()};
  renderShop();await syncPublicProfile();await publishPosition(true);
}
async function handleShopItem(id){
  const item=itemById(id);if(!item)return;
  if(isGM()){
    const inv=Array.isArray(profile.inventory)?[...profile.inventory]:[];
    if(!inv.includes(id)){profile.inventory=[...inv,id];await saveGmProfile();await refreshProfile();return;}
    const current=equipped(profile.character);current[item.slot]=current[item.slot]===id?null:id;
    profile.character={...DEFAULT_CHARACTER,...profile.character,equipped:current};
    await saveGmProfile();await refreshProfile();return;
  }
  const userRef=doc(db,"users",uid),owned=(profile.inventory||[]).includes(id);
  if(!owned){
    try{
      await runTransaction(db,async tx=>{
        const snap=await tx.get(userRef);if(!snap.exists())throw new Error("ไม่พบ User");
        const d=snap.data(),balance=Number(d.tokenBalance||0),inv=Array.isArray(d.inventory)?d.inventory:[];
        if(inv.includes(id))return;if(inv.length>=INVENTORY_LIMIT)throw new Error(`กระเป๋าเต็ม ${INVENTORY_LIMIT} ไอเท็ม`);if(balance<item.cost)throw new Error("Token ไม่พอ");
        tx.update(userRef,{tokenBalance:balance-item.cost,inventory:[...inv,id],updatedAt:serverTimestamp()});
      });await refreshProfile();
    }catch(error){alert(error.message)}return;
  }
  const current=equipped(profile.character);current[item.slot]=current[item.slot]===id?null:id;
  await updateDoc(userRef,{character:{...DEFAULT_CHARACTER,...profile.character,equipped:current},updatedAt:serverTimestamp()});
  await refreshProfile();
}
async function sellZoneItem(id){
  if(isGM())return;const item=itemById(id);if(!item)return;
  if(!confirm(`ขาย ${item.name} คืนร้าน ${sellBackValue(item).toLocaleString()} Token?`))return;
  const userRef=doc(db,'users',uid);
  try{
    await runTransaction(db,async tx=>{
      const snap=await tx.get(userRef);if(!snap.exists())throw new Error('ไม่พบ User');
      const d=snap.data(),inv=Array.isArray(d.inventory)?d.inventory:[];if(!inv.includes(id))return;
      const eq={...DEFAULT_CHARACTER.equipped,...(d.character?.equipped||{})};Object.keys(eq).forEach(slot=>{if(eq[slot]===id)eq[slot]=null});
      tx.update(userRef,{tokenBalance:Number(d.tokenBalance||0)+sellBackValue(item),inventory:inv.filter(x=>x!==id),character:{...DEFAULT_CHARACTER,...(d.character||{}),equipped:eq},updatedAt:serverTimestamp()});
    });await refreshProfile();
  }catch(error){alert(error.message||String(error))}
}


function renderBackpack(){
  if(!profile||!$("zoneBackpackGrid"))return;
  const inv=Array.isArray(profile.inventory)?profile.inventory:[];
  const eq=equipped(profile.character),wearing=new Set(Object.values(eq).filter(Boolean));
  const ownedItems=inv.map(id=>itemById(id)).filter(Boolean);
  const over=!isGM()&&inv.length>INVENTORY_LIMIT;

  $("zoneBackpackCapacity").textContent=isGM()?`${inv.length}/∞`:`${inv.length}/${INVENTORY_LIMIT}`;
  $("zoneBackpackState").textContent=isGM()?"GM · กระเป๋าไม่จำกัด":over
    ?`เกินความจุจากข้อมูลเวอร์ชันเดิม ${inv.length-INVENTORY_LIMIT} ชิ้น · ขายออกก่อนซื้อเพิ่ม`
    :inv.length>=INVENTORY_LIMIT?"กระเป๋าเต็ม":"เหลือ "+(INVENTORY_LIMIT-inv.length)+" ช่อง";
  if($("zoneBackpackMini"))$("zoneBackpackMini").textContent=isGM()?`${inv.length}/∞`:`${inv.length}/${INVENTORY_LIMIT}`;

  const html=ownedItems.map((item,index)=>{
    const on=wearing.has(item.id);
    const legacy=LEGACY_REWARD_ITEMS.some(x=>x.id===item.id),gmOnly=GM_EXCLUSIVE_ITEMS.some(x=>x.id===item.id);
    return `<article class="zone47-backpack-slot filled rarity-${esc(item.rarity)}">
      <div class="zone47-backpack-no">${String(index+1).padStart(2,"0")}</div>
      <div class="zone47-backpack-art"><img src="${shopArtForItem(item)}" alt="${esc(item.name)}"></div>
      <div class="zone47-backpack-info">
        <span>${gmOnly?"GM EXCLUSIVE · ":legacy?"LEGACY · ":""}${esc(RARITY_META[item.rarity]?.name||item.rarity)} · ${esc(item.slot.toUpperCase())}</span>
        <strong>${esc(item.name)}</strong>
        ${zoneItemStatsMarkup(item,true)}
      </div>
      <div class="zone47-backpack-actions">
        <button class="btn ${on?'ghost':'secondary'}" data-bag-equip="${esc(item.id)}" type="button">${on?'ถอด':'สวมใส่'}</button>
        ${!isGM()?`<button class="btn danger-soft" data-bag-sell="${esc(item.id)}" type="button">ขาย ${sellBackValue(item).toLocaleString()}</button>`:""}
      </div>
      ${on?'<b class="zone47-wearing-badge">กำลังสวม</b>':''}
    </article>`;
  }).join("");

  const emptyCount=isGM()?0:Math.max(0,INVENTORY_LIMIT-inv.length);
  const empties=Array.from({length:emptyCount},(_,i)=>`<article class="zone47-backpack-slot empty">
    <div class="zone47-backpack-no">${String(inv.length+i+1).padStart(2,"0")}</div>
    <div class="zone47-backpack-empty">＋<small>EMPTY SLOT</small></div>
  </article>`).join("");

  $("zoneBackpackGrid").innerHTML=html+empties;
  document.querySelectorAll("[data-bag-equip]").forEach(btn=>btn.onclick=async()=>{await handleShopItem(btn.dataset.bagEquip);renderBackpack();});
  document.querySelectorAll("[data-bag-sell]").forEach(btn=>btn.onclick=async()=>{await sellZoneItem(btn.dataset.bagSell);renderBackpack();});
}
document.querySelectorAll("[data-zone-grade]").forEach(btn=>{
  btn.onclick=()=>{
    zoneShopGrade=btn.dataset.zoneGrade||"all";
    document.querySelectorAll("[data-zone-grade]").forEach(x=>x.classList.toggle("active",x===btn));
    renderShop();
  };
});
$("openZoneBackpack").onclick=()=>{
  renderBackpack();$("zoneBackpackModal").classList.remove("hidden");
};
$("closeZoneBackpack").onclick=()=>$("zoneBackpackModal").classList.add("hidden");

$("openZoneShop").onclick=()=>{renderShop();$("zoneShopModal").classList.remove("hidden")};
$("closeZoneShop").onclick=()=>$("zoneShopModal").classList.add("hidden");

function targetDirection(){
  const left=touch.left||keys.has("a")||keys.has("arrowleft"),right=touch.right||keys.has("d")||keys.has("arrowright");
  return (right?1:0)-(left?1:0);
}
function updateMovement(dt){
  if(blocked)return;
  const dir=targetDirection(),target=dir*PLAYER_MAX_SPEED;
  const rate=dir===0?DECELERATION:ACCELERATION;
  if(velocityX<target)velocityX=Math.min(target,velocityX+rate*dt);
  else if(velocityX>target)velocityX=Math.max(target,velocityX-rate*dt);
  if(Math.abs(velocityX)<2&&dir===0)velocityX=0;
  me.moving=Math.abs(velocityX)>5;
  if(dir<0)me.direction="left";else if(dir>0)me.direction="right";
  me.x=Math.max(WALK_LEFT,Math.min(WALK_RIGHT,me.x+velocityX*dt));
  if(me.x===WALK_LEFT||me.x===WALK_RIGHT)velocityX=0;
  if(me.moving)publishPosition(false);
  updateNearbyAction();
}
function smoothRemote(dt){
  const f=1-Math.pow(0.0007,dt);
  for(const p of players.values())p.currentX+=(p.targetX-p.currentX)*f;
}
function bindHold(id,dir){
  const el=$(id);el.style.touchAction="none";
  el.onpointerdown=e=>{e.preventDefault();touch[dir]=true;el.setPointerCapture?.(e.pointerId)};
  const stop=()=>{touch[dir]=false;publishPosition(true)};
  ["pointerup","pointercancel","pointerleave","lostpointercapture"].forEach(ev=>el.addEventListener(ev,stop));
}
bindHold("moveLeftButton","left");bindHold("moveRightButton","right");
window.addEventListener("keydown",e=>{
  if(document.activeElement===$("zoneChatInput"))return;
  const k=e.key.toLowerCase();
  if(["a","d","arrowleft","arrowright"].includes(k)){e.preventDefault();keys.add(k)}
  if(k==="enter")$("zoneChatInput").focus({preventScroll:true});
  if(k==="e"&&nearbyAction){e.preventDefault();triggerNearbyAction()}
});
window.addEventListener("keyup",e=>{const k=e.key.toLowerCase();keys.delete(k);if(["a","d","arrowleft","arrowright"].includes(k))publishPosition(true)});

function updateNearbyAction(){
  const dw=Math.abs(me.x-WIZARD_X),ds=Math.abs(me.x-SHOP_X);
  nearbyAction=dw<INTERACT_DISTANCE?"wizard":ds<INTERACT_DISTANCE?"shop":null;
  const btn=$("zoneNearbyAction");
  if(!nearbyAction){btn.classList.add("hidden");return}
  btn.classList.remove("hidden");
  btn.textContent=nearbyAction==="wizard"?"E · 🧙 รับภารกิจ":"E · 🛒 เปิดร้านค้า";
}
function triggerNearbyAction(){nearbyAction==="wizard"?$("openWizardQuests").click():nearbyAction==="shop"?$("openZoneShop").click():null}
$("zoneNearbyAction").onclick=triggerNearbyAction;

function resizeCanvas(){
  const r=canvas.getBoundingClientRect();cssW=Math.max(1,r.width);cssH=Math.max(1,r.height);dpr=Math.min(2.5,window.devicePixelRatio||1);
  canvas.width=Math.round(cssW*dpr);canvas.height=Math.round(cssH*dpr);zoom=Math.max(.7,Math.min(1.18,cssH/850));ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";
}
function updateCamera(dt){
  const viewW=cssW/zoom,target=Math.max(0,Math.min(WORLD.width-viewW,me.x-viewW/2));
  const f=1-Math.pow(0.00025,dt);cameraX+=(target-cameraX)*f;
}
function screenToWorld(clientX,clientY){const r=canvas.getBoundingClientRect();return {x:(clientX-r.left)/zoom+cameraX,y:(clientY-r.top)/zoom}}

function worldTimeState(now=Date.now()){
  const block=Math.floor(now/DAY_NIGHT_MS),day=block%2===0,next=(block+1)*DAY_NIGHT_MS;
  return {day,label:day?"กลางวัน":"กลางคืน",icon:day?"☀️":"🌙",remaining:next-now};
}
function countdown(ms){const s=Math.max(0,Math.floor(ms/1000));return `${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s%3600/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
function updateClock(){const t=worldTimeState();$("zoneWorldPeriod").textContent=t.label;$("zoneWorldCountdown").textContent=`เปลี่ยนใน ${countdown(t.remaining)}`;$("zoneWorldIcon").textContent=t.icon}

function drawTree(x,y,day){
  ctx.fillStyle=day?"#684927":"#3e3023";ctx.fillRect(x-9,y,18,70);ctx.fillStyle=day?"#3f8d4f":"#194b39";
  for(const [ox,oy,r] of [[0,-15,45],[-28,8,34],[29,10,36],[0,26,38]]){ctx.beginPath();ctx.arc(x+ox,y+oy,r,0,Math.PI*2);ctx.fill()}
}
function drawHouse(x,y,w,h,roof,wall,day,label=""){
  ctx.fillStyle="rgba(0,0,0,.16)";rr(ctx,x+10,y+h-4,w,16,8);ctx.fill();ctx.fillStyle=wall;rr(ctx,x,y+65,w,h-65,10);ctx.fill();
  ctx.fillStyle=roof;ctx.beginPath();ctx.moveTo(x-22,y+80);ctx.lineTo(x+w/2,y);ctx.lineTo(x+w+22,y+80);ctx.lineTo(x+w,y+105);ctx.lineTo(x,y+105);ctx.closePath();ctx.fill();
  ctx.fillStyle=day?"#9bd2e9":"#ffd16f";for(let i=0;i<3;i++){rr(ctx,x+35+i*(w-105)/2,y+122,44,46,4);ctx.fill()}
  ctx.fillStyle="#4c3426";rr(ctx,x+w/2-26,y+h-67,52,67,4);ctx.fill();
  if(label){ctx.fillStyle="rgba(14,33,43,.85)";rr(ctx,x+w/2-80,y+h-105,160,28,8);ctx.fill();ctx.fillStyle="#fff2b4";ctx.font="800 14px system-ui";ctx.textAlign="center";ctx.fillText(label,x+w/2,y+h-86)}
}
function drawWizard(x,y,now){
  const bob=Math.sin(now/350)*3;ctx.save();ctx.translate(x,y+bob);
  ctx.fillStyle="rgba(125,76,190,.18)";ctx.beginPath();ctx.arc(0,-32,64,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="#49306c";ctx.beginPath();ctx.moveTo(-42,28);ctx.lineTo(-25,-58);ctx.lineTo(25,-58);ctx.lineTo(44,28);ctx.closePath();ctx.fill();
  ctx.fillStyle="#efd0ac";ctx.beginPath();ctx.arc(0,-70,22,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="#5f3c89";ctx.beginPath();ctx.moveTo(-33,-86);ctx.lineTo(4,-132);ctx.lineTo(31,-86);ctx.closePath();ctx.fill();ctx.fillRect(-36,-91,72,9);
  ctx.strokeStyle="#9c713b";ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(38,-47);ctx.lineTo(58,35);ctx.stroke();ctx.fillStyle="#70ddff";ctx.beginPath();ctx.arc(36,-51,10,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="rgba(31,23,47,.88)";rr(ctx,-76,-165,152,29,8);ctx.fill();ctx.fillStyle="#fff";ctx.font="800 13px system-ui";ctx.textAlign="center";ctx.fillText("🧙 พ่อมดภารกิจ",0,-146);
  ctx.restore();
}
function drawShop(x,y,day){
  ctx.save();ctx.translate(x,y);ctx.fillStyle="#5a3d29";rr(ctx,-155,-120,310,145,10);ctx.fill();
  ctx.fillStyle="#d65443";ctx.beginPath();ctx.moveTo(-175,-118);ctx.lineTo(-145,-160);ctx.lineTo(145,-160);ctx.lineTo(175,-118);ctx.closePath();ctx.fill();
  ctx.fillStyle="#f5e6c3";for(let i=0;i<6;i++)ctx.fillRect(-135+i*48,-155,24,35);
  ctx.fillStyle="#b87931";ctx.fillRect(-135,-45,270,25);
  ["#e0ae3c","#67a95a","#b75fb5","#54a6c7"].forEach((c,i)=>{ctx.fillStyle=c;ctx.beginPath();ctx.arc(-90+i*60,-58,18,0,Math.PI*2);ctx.fill()});
  ctx.fillStyle=day?"#173b4e":"#fff0a5";ctx.font="900 17px system-ui";ctx.textAlign="center";ctx.fillText("TOKEN SHOP",0,-88);
  ctx.restore();
}
function drawArtSprite(c,img,x,y,w,h,flip=false,alpha=1){
  if(!img?.complete||!img.naturalWidth)return false;
  c.save();c.globalAlpha=alpha;c.translate(x,y);if(flip)c.scale(-1,1);
  c.drawImage(img,-w/2,-h,w,h);c.restore();return true;
}
function drawNpcLabel(c,x,y,label,accent="#2f6f98"){
  c.save();c.font="800 13px system-ui";c.textAlign="center";
  const w=Math.max(126,c.measureText(label).width+28);
  c.fillStyle="rgba(12,31,43,.90)";rr(c,x-w/2,y,w,30,9);c.fill();
  c.strokeStyle=accent;c.lineWidth=2;c.stroke();c.fillStyle="#fff5cc";c.fillText(label,x,y+20);c.restore();
}
function drawZoneNpc(now){
  const bob=Math.sin(now/330)*2.3;
  const wiz=zoneArt.wizardIdle;
  drawArtSprite(ctx,wiz,WIZARD_X,WALK_Y+bob,135,153,false,1);
  drawNpcLabel(ctx,WIZARD_X,WALK_Y-184,"พ่อมดภารกิจ","#7b5ab6");

  const merchant=zoneArt.merchantIdle;
  drawArtSprite(ctx,merchant,SHOP_X-85,WALK_Y,128,145,false,1);
  drawNpcLabel(ctx,SHOP_X-85,WALK_Y-171,"พ่อค้า Token","#c59835");
}
function drawWorld(now){
  const t=worldTimeState(),day=t.day;
  if(zoneArt.world?.complete&&zoneArt.world.naturalWidth){
    ctx.drawImage(zoneArt.world,0,0,WORLD.width,WORLD.height);
  }else{
    // V4.9.4 intentionally does not draw the old primitive scene.
    ctx.fillStyle="#102c3d";
    ctx.fillRect(0,0,WORLD.width,WORLD.height);
  }
  if(!day){
    ctx.fillStyle="rgba(5,20,45,.48)";ctx.fillRect(0,0,WORLD.width,WORLD.height);
    ctx.fillStyle="rgba(235,245,255,.9)";ctx.beginPath();ctx.arc(2450,120,42,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="rgba(255,255,255,.65)";for(let i=0;i<42;i++)ctx.fillRect((i*211)%WORLD.width,40+(i*91)%280,2,2);
  }
  // Walk-lane highlight stays subtle so the illustrated environment remains visible.
  const lane=ctx.createLinearGradient(0,710,0,950);lane.addColorStop(0,"rgba(255,255,255,0)");lane.addColorStop(1,day?"rgba(255,238,196,.08)":"rgba(89,133,160,.08)");ctx.fillStyle=lane;ctx.fillRect(0,690,WORLD.width,280);
  drawZoneNpc(now);
}
function itemColor(item){const key=String(item?.visual||item?.id||"");let h=0;for(const ch of key)h=(h*31+ch.charCodeAt(0))%360;return `hsl(${h} 48% 45%)`}
function drawRankShield(c,x,y,rank){const r=rankMeta(rank);c.save();c.translate(x,y);c.fillStyle=r.color;c.beginPath();c.moveTo(-10,-8);c.lineTo(10,-8);c.lineTo(8,7);c.lineTo(0,14);c.lineTo(-8,7);c.closePath();c.fill();c.fillStyle="#fff";c.font="900 9px system-ui";c.textAlign="center";c.fillText(r.letter,0,3);c.restore()}
function drawName(c,p,gm){
  const label=gm?"GM":String(p.studentId||"USER");c.font="800 14px system-ui";const w=Math.max(gm?76:105,c.measureText(label).width+45);
  const barY=-188;
  c.fillStyle="rgba(9,28,39,.90)";rr(c,-w/2,barY,w,29,8);c.fill();c.strokeStyle=gm?"#f1c75a":"rgba(255,255,255,.16)";c.lineWidth=2;c.stroke();
  c.fillStyle="#fff";c.textAlign="center";c.fillText(label,0,barY+19);
  if(!gm)drawRankShield(c,-w/2+16,barY+13,p.rank);
  drawBubble(c,p,barY);
}
function drawBubble(c,p,barY=-188){
  const m=messagesByUid.get(p.uid);if(!m?.text)return;const dt=m.createdAt?.toDate?.();if(dt&&Date.now()-dt.getTime()>BUBBLE_MS)return;
  const text=String(m.text),lines=[];c.font="600 14px system-ui";let line="";for(const ch of [...text]){const t=line+ch;if(c.measureText(t).width>220&&line){lines.push(line);line=ch}else line=t}if(line)lines.push(line);
  const show=lines.slice(0,3),bw=Math.max(110,Math.min(245,Math.max(...show.map(x=>c.measureText(x).width))+25)),bh=17+show.length*20,by=barY-13-bh;
  c.fillStyle=p.isAdmin?"#fff3c9":"rgba(255,255,255,.97)";rr(c,-bw/2,by,bw,bh,12);c.fill();c.strokeStyle="rgba(35,55,68,.18)";c.stroke();c.fillStyle="#17364a";c.textAlign="center";show.forEach((ln,i)=>c.fillText(ln,0,by+23+i*20));
}
function drawEquipmentBehind(c,p,now){
  const eq=equipped(p.character||{}),aura=itemById(eq.aura),back=itemById(eq.back);

  // Aura items are effects/scene attachments, not floating shop icons.
  if(aura){
    if(aura.id==="gold_aura"){
      c.save();c.globalAlpha=.34;c.strokeStyle="#f2bd36";c.shadowColor="#ffd75b";c.shadowBlur=13;c.lineWidth=5;
      c.beginPath();c.ellipse(0,-61,55,84,0,0,Math.PI*2);c.stroke();c.restore();
    }else if(aura.id==="set2_storm_aura"){
      c.save();c.globalAlpha=.55;c.strokeStyle="#6fd9ff";c.shadowColor="#61cfff";c.shadowBlur=10;c.lineWidth=3;
      for(let i=0;i<3;i++){const x=-42+i*42;c.beginPath();c.moveTo(x,-118);c.lineTo(x+12,-87);c.lineTo(x-2,-61);c.lineTo(x+13,-30);c.stroke()}
      c.restore();
    }else if(aura.id==="throne_effect"){
      drawAnchoredEquipment(c,aura,p.direction,.82);
    }else if(aura.id==="master_halo"){
      drawAnchoredEquipment(c,aura,p.direction,.94);
    }else{
      drawAnchoredEquipment(c,aura,p.direction,.72);
    }
  }
  if(back)drawAnchoredEquipment(c,back,p.direction,.94);
}
function drawEquipmentFront(c,p,now){
  const eq=equipped(p.character||{});
  const head=itemById(eq.head),face=itemById(eq.face),top=itemById(eq.top),shoes=itemById(eq.shoes),hand=itemById(eq.hand),pet=itemById(eq.pet);

  // Body-worn equipment is locked to its body anchor.
  if(top)drawAnchoredEquipment(c,top,p.direction,.96);
  if(head)drawAnchoredEquipment(c,head,p.direction,.98);
  if(face)drawAnchoredEquipment(c,face,p.direction,1);
  if(shoes)drawAnchoredEquipment(c,shoes,p.direction,.98);
  if(hand)drawAnchoredEquipment(c,hand,p.direction,1);

  // Pets stand/follow at ground level. No bobbing "floating item" behavior.
  if(pet)drawAnchoredEquipment(c,pet,p.direction,1);
}
function playerArtImage(p,now){
  const gender=p?.character?.gender==="female"?"female":"male";
  if(!p?.moving)return zoneArt[`${gender}Idle`];
  return (Math.floor(now/150)%2===0)?zoneArt[`${gender}Walk1`]:zoneArt[`${gender}Walk2`];
}
function drawCharacter(c,p,x,y,now){
  const gm=isGMPlayer(p),moving=!!p.moving,bob=moving?Math.sin(now/85)*1.6:Math.sin(now/420)*.45;
  c.save();c.translate(x,y+bob);
  drawEquipmentBehind(c,p,now);
  const img=playerArtImage(p,now),flip=p.direction==="left";
  const spriteW=132,spriteH=149;
  if(!drawArtSprite(c,img,0,0,spriteW,spriteH,flip,1)){
    c.fillStyle="#d84f4f";c.font="700 18px system-ui";c.textAlign="center";c.fillText("ART?",0,-55);
  }
  drawEquipmentFront(c,p,now);drawName(c,p,gm);c.restore();
}
function drawFrame(now){
  ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle="#102c3d";ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.setTransform(dpr*zoom,0,0,dpr*zoom,-cameraX*dpr*zoom,0);drawWorld(now);
  const list=[...players.values()].map(p=>({...p,x:p.currentX,y:WALK_Y}));
  list.push({uid,studentId:isGM()?"GM":profile.studentId,isAdmin:isGM(),rank:isGM()?null:profile.rank,character:{gender:profile.character?.gender||"male",equipped:equipped(profile.character)},x:me.x,y:WALK_Y,direction:me.direction,moving:me.moving});
  for(const p of list)drawCharacter(ctx,p,p.x,p.y,now);
}
function loop(now){const dt=Math.min(.04,(now-lastFrame)/1000);lastFrame=now;updateMovement(dt);smoothRemote(dt);updateCamera(dt);drawFrame(now);requestAnimationFrame(loop)}

canvas.onclick=e=>{
  const pt=screenToWorld(e.clientX,e.clientY);
  if(Math.abs(pt.x-WIZARD_X)<95){$("openWizardQuests").click();return}
  if(Math.abs(pt.x-SHOP_X)<250){$("openZoneShop").click();return}
  let selected=null,best=999;for(const p of players.values()){const d=Math.abs(p.currentX-pt.x);if(d<65&&d<best){selected=p;best=d}}if(selected)openPlayerCard(selected);
};
function openPlayerCard(p){
  const gm=isGMPlayer(p);$("zonePlayerCardId").textContent=gm?"GM":String(p.studentId||"USER");
  $("zonePlayerCardShield").innerHTML=gm?`<span class="zone47-gm-normal-badge">GM</span>`:rankShieldHTML(p.rank);
  $("zonePlayerCardRank").textContent=gm?"GAME MASTER · Token ∞ · Backpack ∞":`${p.rank?.tierName||"Bronze"} · ${Number(p.rank?.rating||0)} Rating`;
  $("zonePlayerCardItemTitle").textContent=gm?"ไอเท็ม GM ที่กำลังสวม":"ไอเท็มที่กำลังสวม";
  const list=equippedItems(p.character).map(x=>x.item);
  $("zonePlayerCardItems").innerHTML=list.length
    ?list.map(i=>`<div><img class="zone47-card-item-art" src="${itemArtSrc(i.id)}" alt=""><small>${esc(i.name||"Item")}</small></div>`).join("")
    :`<div class="empty">ยังไม่ได้สวมไอเท็ม</div>`;
  $("zonePlayerCard").classList.remove("hidden");
}
$("closeZonePlayerCard").onclick=()=>$("zonePlayerCard").classList.add("hidden");

function listenRankingNotice(){
  rankingUnsub?.();rankingUnsub=onSnapshot(doc(db,"system_settings","ranking"),snap=>{
    if(!snap.exists()){$("zoneSystemNotice").classList.add("hidden");return}
    const d=snap.data(),next=d.nextResetAt?.toDate?.();
    if(next&&next.getTime()>Date.now()){$("zoneSystemNotice").textContent=`🏆 รีแรงค์ ${next.toLocaleString("th-TH")}${d.notice?` · ${d.notice}`:""}`;$("zoneSystemNotice").classList.remove("hidden")}else $("zoneSystemNotice").classList.add("hidden");
  },()=>{});
}

async function leaveZone(){
  if(!isGM())await stopUsageTracker({flush:true});
  clearInterval(heartbeat);clearInterval(clockTimer);clearInterval(expiryTimer);positionsUnsub?.();messagesUnsub?.();moderationUnsub?.();rankingUnsub?.();questUnsub?.();
  try{await updateDoc(doc(db,"zone_positions",uid),{online:false,updatedAt:serverTimestamp()})}catch{}
  try{await setDoc(doc(db,"presence",uid),{online:false,lastSeenAt:serverTimestamp()},{merge:true})}catch{}
  try{
    const zoneState={zoneId:ZONE_ID,x:Math.round(me.x),y:WALK_Y,direction:me.direction,lastSeenAt:new Date().toISOString()};
    if(isGM()){profile.zone=zoneState;await saveGmProfile()}else await updateDoc(doc(db,"users",uid),{zone:zoneState});
  }catch{}
}
function stopRealtime(){blocked=true;keys.clear();touch.left=false;touch.right=false;velocityX=0;clearInterval(heartbeat);positionsUnsub?.();messagesUnsub?.()}
window.onresize=resizeCanvas;window.addEventListener("pagehide",leaveZone);$("leaveZoneButton").onclick=()=>leaveZone();

onAuthStateChanged(auth,async user=>{
  if(!user){showGate("กรุณา Login ก่อน","2D Zone ใช้บัญชีที่ลงทะเบียนแล้ว");return}
  uid=user.uid;if(!(await loadProfile()))return;if(!(await checkModeration()))return;
  const artResult=await loadZoneArt();
  await loadItemArtImages();
  if(!artResult.ok){
    showGate(
      "โหลดภาพ 2D Zone ไม่ครบ",
      `ไม่พบ Asset สำคัญ: ${artResult.missing.join(", ")}`,
      "V4.9.4 จะไม่เปิดฉาก fallback แบบบ้านสี่เหลี่ยมอีก กรุณาอัป zone-assets.js และ zone.js ไป GitHub Root ให้ครบ"
    );
    return;
  }
  hideGate();
  $("zoneMyStudentId").textContent=isGM()?"GM":profile.studentId;
  $("zoneChatIdentity").textContent=isGM()?"GM":profile.studentId;
  $("zoneMyShield").innerHTML=isGM()?`<span class="zone47-gm-normal-badge">GM</span>`:rankShieldHTML(profile.rank);$("zoneTokenBalance").textContent=isGM()?"∞":Number(profile.tokenBalance||0).toLocaleString();
  if(isGM()){$("openAdminPanel").classList.remove("hidden");$("leaveZoneButton").href="./admin.html";$("zoneChatInput").placeholder="GM พิมพ์ข้อความหรือประกาศ..."}else startUsageTracker(db,profile,"2d-zone");
  resizeCanvas();updateClock();clockTimer=setInterval(updateClock,1000);await loadQuestProgress();
  listenModeration();listenPositions();listenMessages();listenTeacherQuests();listenRankingNotice();expiryTimer=setInterval(refreshMessages,60000);
  await syncPublicProfile();await publishPresence();await publishPosition(true);heartbeat=setInterval(async()=>{await publishPresence();await publishPosition(true)},PRESENCE_HEARTBEAT_MS);
  requestAnimationFrame(loop);
});
