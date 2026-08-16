export const PVP_RANK_CONFIG = {
  startRating: 1000,
  tiers: [
    {id:"rookie",name:"Rookie",icon:"🛡️",min:0},
    {id:"fighter",name:"Fighter",icon:"⚔️",min:1050},
    {id:"gladiator",name:"Gladiator",icon:"🏟️",min:1150},
    {id:"champion",name:"Champion",icon:"🏆",min:1275},
    {id:"warlord",name:"Warlord",icon:"🔥",min:1425},
    {id:"overlord",name:"Overlord",icon:"👑",min:1600}
  ]
};

const clamp=(v,min,max)=>Math.max(min,Math.min(max,Number(v||0)));

function resultTime(result){
  return Number(result?.finishedAt?.seconds||0)*1000 ||
    result?.finishedAt?.toDate?.()?.getTime?.() ||
    Date.parse(result?.finishedAtIso||"") || 0;
}
function tierForRating(rating){
  return [...PVP_RANK_CONFIG.tiers].sort((a,b)=>b.min-a.min)
    .find(t=>rating>=t.min)||PVP_RANK_CONFIG.tiers[0];
}
function matchPerformanceBonus(r){
  const accuracy=clamp(r.accuracy,0,100);
  const damage=clamp(r.damage,0,140);
  const combo=clamp(r.maxCombo,0,40);
  const wpm=clamp(r.wpm,0,100);

  // Performance affects only a small portion; W/L remains the main factor.
  const accuracyPart=(accuracy-80)*0.12;       // -9.6 .. +2.4
  const damagePart=(damage/140)*5;             // 0 .. +5
  const comboPart=(combo/40)*3;                // 0 .. +3
  const speedPart=(wpm/100)*2;                 // 0 .. +2
  return clamp(accuracyPart+damagePart+comboPart+speedPart,-6,10);
}

export function calculatePvpProfile(results=[],uid=null){
  const mine=(results||[])
    .filter(r=>!uid||r.uid===uid)
    .sort((a,b)=>resultTime(a)-resultTime(b));

  let rating=PVP_RANK_CONFIG.startRating,wins=0,losses=0,streak=0,bestStreak=0;
  let damage=0,combo=0,wpm=0,accuracy=0;

  mine.forEach(r=>{
    const win=r.result==="win";
    const perf=matchPerformanceBonus(r);
    if(win){
      wins++;
      streak++;
      bestStreak=Math.max(bestStreak,streak);
      rating += 24 + perf + Math.min(8,Math.max(0,streak-1)*2);
    }else{
      losses++;
      streak=0;
      rating += -16 + perf*.25;
    }
    rating=Math.max(0,Math.round(rating));
    damage+=Number(r.damage||0);
    combo=Math.max(combo,Number(r.maxCombo||0));
    wpm+=Number(r.wpm||0);
    accuracy+=Number(r.accuracy||0);
  });

  const matches=mine.length,tier=tierForRating(rating);
  return {
    uid,
    rating,
    tierId:tier.id,tierName:tier.name,tierIcon:tier.icon,
    wins,losses,matches,
    winRate:matches?Math.round(wins/matches*100):0,
    currentStreak:streak,bestStreak,
    totalDamage:Math.round(damage),
    maxCombo:combo,
    avgWpm:matches?Math.round(wpm/matches*10)/10:0,
    avgAccuracy:matches?Math.round(accuracy/matches*10)/10:0
  };
}

export function buildPvpLeaderboard(results=[]){
  const groups=new Map();
  for(const r of results||[]){
    if(!r?.uid)continue;
    if(!groups.has(r.uid))groups.set(r.uid,[]);
    groups.get(r.uid).push(r);
  }
  return [...groups.entries()].map(([uid,rows])=>{
    const last=[...rows].sort((a,b)=>resultTime(b)-resultTime(a))[0]||{};
    return {
      ...calculatePvpProfile(rows,uid),
      studentId:last.studentId||"",
      fullName:last.fullName||"",
      educationLevel:last.educationLevel||"",
      classroom:last.classroom||"",
      major:last.major||"",
      majorCode:last.majorCode||""
    };
  }).sort((a,b)=>
    b.rating-a.rating ||
    b.wins-a.wins ||
    b.winRate-a.winRate ||
    String(a.studentId).localeCompare(String(b.studentId),"th",{numeric:true})
  );
}
