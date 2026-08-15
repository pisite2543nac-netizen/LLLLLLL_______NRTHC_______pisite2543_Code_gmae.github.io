export const RANKING_CONFIG = {
  seasonDays: 60,
  weights: { speed: 0.40, accuracy: 0.40, mistakeControl: 0.20 },
  speedTargets: { easy:28, medium:42, hard:58 },
  tiers: [
    {id:"bronze", name:"Bronze", icon:"🥉", min:0},
    {id:"silver", name:"Silver", icon:"🥈", min:35},
    {id:"gold", name:"Gold", icon:"🥇", min:55},
    {id:"platinum", name:"Platinum", icon:"💠", min:70},
    {id:"diamond", name:"Diamond", icon:"💎", min:82},
    {id:"master", name:"Master", icon:"👑", min:92}
  ]
};
const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,Number(v||0)));

export function seasonIdFromDate(date = new Date()) {
  const epoch = Date.UTC(2026,0,1),days=Math.floor((date.getTime()-epoch)/86400000);
  return `S${String(Math.floor(Math.max(0,days)/RANKING_CONFIG.seasonDays)+1).padStart(3,"0")}`;
}
export function seasonRange(date = new Date()) {
  const epoch=Date.UTC(2026,0,1),days=Math.floor((date.getTime()-epoch)/86400000),idx=Math.floor(Math.max(0,days)/RANKING_CONFIG.seasonDays);
  const start=new Date(epoch+idx*RANKING_CONFIG.seasonDays*86400000);
  return {start,end:new Date(start.getTime()+RANKING_CONFIG.seasonDays*86400000-1)};
}
export function calculateRankMetrics(attempts,activeDayCount=0){
  const ranked=(attempts||[]).filter(a=>a.modeName==="Ranking"&&["completed","timeout"].includes(a.status));
  const total=ranked.length;
  if(!total){
    const t=RANKING_CONFIG.tiers[0];
    return {rating:0,tierId:t.id,tierName:t.name,tierIcon:t.icon,speed:0,accuracy:0,mistakeControl:0,
      diligence:0,consistency:0,avgWpm:0,avgAccuracy:0,avgMistakes:0,completedAttempts:0,activeDayCount,rankedAttempts:0};
  }
  let speedSum=0,accuracySum=0,mistakeSum=0,wpmSum=0,mistakesRaw=0,completed=0;
  ranked.forEach(a=>{
    const target=RANKING_CONFIG.speedTargets[a.difficultyId]||42;
    const speed=clamp(Number(a.wpm||0)/target*100);
    const acc=clamp(a.accuracy);
    const mistakeControl=clamp(100-Number(a.mistakes||0)*10);
    const success=a.status==="completed"?1:.65; // timeout ลด component ทั้งหมด
    speedSum+=speed*success;accuracySum+=acc*success;mistakeSum+=mistakeControl*success;
    wpmSum+=Number(a.wpm||0);mistakesRaw+=Number(a.mistakes||0);
    if(a.status==="completed")completed++;
  });
  const speed=speedSum/total,accuracy=accuracySum/total,mistakeControl=mistakeSum/total;
  const rating=Math.round(speed*.40+accuracy*.40+mistakeControl*.20);
  const tier=[...RANKING_CONFIG.tiers].sort((a,b)=>b.min-a.min).find(t=>rating>=t.min)||RANKING_CONFIG.tiers[0];
  return {
    rating,tierId:tier.id,tierName:tier.name,tierIcon:tier.icon,
    speed:Math.round(speed),accuracy:Math.round(accuracy),mistakeControl:Math.round(mistakeControl),
    // legacy aliases so older UI remains compatible
    diligence:Math.round(mistakeControl),consistency:Math.round(completed/total*100),
    avgWpm:Math.round(wpmSum/total*10)/10,avgAccuracy:Math.round(ranked.reduce((s,a)=>s+Number(a.accuracy||0),0)/total*10)/10,
    avgMistakes:Math.round(mistakesRaw/total*10)/10,completedAttempts:completed,activeDayCount,rankedAttempts:total
  };
}
export function rankingClassKey(educationLevel,classroom){return `${String(educationLevel||"").trim()}${String(classroom||"").trim()}`;}
export function rankProfiles(profiles,limit=10){return [...profiles].sort((a,b)=>Number(b?.rank?.rating||0)-Number(a?.rank?.rating||0)).slice(0,limit);}
