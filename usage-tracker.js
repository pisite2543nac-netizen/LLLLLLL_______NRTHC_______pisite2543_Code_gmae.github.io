import {
  doc, runTransaction, serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const tracker={
  db:null,profile:null,page:"portal",dayId:"",sessionId:"",
  lastTickMs:0,lastInteractionMs:Date.now(),pendingSeconds:0,
  tickTimer:null,flushTimer:null,flushing:false,stopped:true
};

function localDayId(){
  const d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}
function sessionId(uid){
  return `${uid}_${Date.now()}_${Math.random().toString(36).slice(2,9)}`;
}
function profileSnapshot(){
  const p=tracker.profile||{};
  return {
    uid:p.uid||"",
    studentId:p.studentId||"",
    fullName:p.fullName||"",
    educationLevel:p.educationLevel||"",
    classroom:p.classroom||"",
    department:p.department||"",
    major:p.major||"",
    majorCode:p.majorCode||""
  };
}
function activeNow(){
  return !tracker.stopped
    && document.visibilityState==="visible"
    && Date.now()-tracker.lastInteractionMs <= 5*60*1000;
}
function markActivity(){tracker.lastInteractionMs=Date.now();}
["pointerdown","keydown","touchstart","wheel"].forEach(type=>
  window.addEventListener(type,markActivity,{passive:true})
);
window.addEventListener("scroll",markActivity,{passive:true});

async function rolloverIfNeeded(){
  const today=localDayId();
  if(!tracker.dayId){tracker.dayId=today;tracker.sessionId=sessionId(tracker.profile?.uid||"u");return;}
  if(today===tracker.dayId)return;
  await flushUsage(true);
  tracker.dayId=today;
  tracker.sessionId=sessionId(tracker.profile?.uid||"u");
  tracker.pendingSeconds=0;
  tracker.lastTickMs=performance.now();
}

async function flushUsage(force=false){
  if(tracker.flushing||tracker.stopped||!tracker.db||!tracker.profile?.uid)return;
  const delta=Math.floor(tracker.pendingSeconds);
  if(delta<1&&!force)return;
  if(delta<1)return;
  tracker.flushing=true;
  try{
    const p=profileSnapshot(),day=tracker.dayId||localDayId(),sid=tracker.sessionId||sessionId(p.uid);
    const dailyRef=doc(tracker.db,"usage_daily",`${p.uid}_${day}`);
    const sessionRef=doc(tracker.db,"usage_sessions",sid);
    const safeDelta=Math.min(90,Math.max(1,delta));
    await runTransaction(tracker.db,async tx=>{
      const [dailySnap,sessionSnap]=await Promise.all([tx.get(dailyRef),tx.get(sessionRef)]);
      const daily=dailySnap.exists()?dailySnap.data():{};
      const session=sessionSnap.exists()?sessionSnap.data():{};
      const common={...p,dayId:day,lastSeenAt:serverTimestamp(),updatedAt:serverTimestamp()};
      if(dailySnap.exists()){
        tx.set(dailyRef,{
          ...common,
          firstSeenAt:daily.firstSeenAt,
          activeSeconds:Number(daily.activeSeconds||0)+safeDelta
        },{merge:true});
      }else{
        tx.set(dailyRef,{
          ...common,
          activeSeconds:safeDelta,
          firstSeenAt:serverTimestamp()
        });
      }
      if(sessionSnap.exists()){
        tx.set(sessionRef,{
          ...common,
          sessionId:sid,page:tracker.page,
          startedAt:session.startedAt,
          activeSeconds:Number(session.activeSeconds||0)+safeDelta
        },{merge:true});
      }else{
        tx.set(sessionRef,{
          ...common,
          sessionId:sid,page:tracker.page,
          activeSeconds:safeDelta,
          startedAt:serverTimestamp()
        });
      }
    });
    tracker.pendingSeconds=Math.max(0,tracker.pendingSeconds-safeDelta);
  }catch(error){
    console.warn("usage tracker:",error);
  }finally{
    tracker.flushing=false;
  }
}

function tick(){
  if(tracker.stopped||!tracker.profile?.uid)return;
  rolloverIfNeeded().catch(console.warn);
  const now=performance.now();
  if(!tracker.lastTickMs)tracker.lastTickMs=now;
  const delta=Math.min(2,Math.max(0,(now-tracker.lastTickMs)/1000));
  tracker.lastTickMs=now;
  if(activeNow())tracker.pendingSeconds+=delta;
}

export function startUsageTracker(db,profile,page="portal"){
  stopUsageTracker({flush:false});
  if(!profile?.uid)return;
  tracker.db=db;tracker.profile=profile;tracker.page=page;
  tracker.dayId=localDayId();tracker.sessionId=sessionId(profile.uid);
  tracker.lastTickMs=performance.now();tracker.lastInteractionMs=Date.now();
  tracker.pendingSeconds=0;tracker.stopped=false;
  tracker.tickTimer=setInterval(tick,1000);
  tracker.flushTimer=setInterval(()=>flushUsage(false),30000);
}
export async function stopUsageTracker({flush=true}={}){
  if(flush&&!tracker.stopped)await flushUsage(true);
  if(tracker.tickTimer)clearInterval(tracker.tickTimer);
  if(tracker.flushTimer)clearInterval(tracker.flushTimer);
  tracker.tickTimer=null;tracker.flushTimer=null;tracker.stopped=true;
}
export function usageTrackerActivity(){markActivity();}
document.addEventListener("visibilitychange",()=>{
  tracker.lastTickMs=performance.now();
  if(document.visibilityState==="hidden")flushUsage(true);
  else markActivity();
});
window.addEventListener("pagehide",()=>{flushUsage(true)});
