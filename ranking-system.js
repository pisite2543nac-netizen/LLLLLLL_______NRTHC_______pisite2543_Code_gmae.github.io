// V4.14.1 — Transparent Learning Ranking Formula
// Rating 0–100 is separate from leaderboard position (#1, #2, ...).
export const RANKING_CONFIG = {
  formulaVersion: "4.14.0",
  seasonDays: 60,
  stageMax: 50,
  timeoutFactor: 0.65,
  weights: { speed: 0.35, accuracy: 0.35, mistakeControl: 0.20, stageProgress: 0.10 },
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
const round1=v=>Math.round(Number(v||0)*10)/10;

function attemptTime(a){
  return a?.createdAt?.toDate?.()?.getTime?.()
    ?? Number(a?.createdAt?.seconds||0)*1000
    ?? Date.parse(a?.createdAtIso||"")
    ?? 0;
}

export function seasonIdFromDate(date = new Date()) {
  const epoch = Date.UTC(2026,0,1),days=Math.floor((date.getTime()-epoch)/86400000);
  return `S${String(Math.floor(Math.max(0,days)/RANKING_CONFIG.seasonDays)+1).padStart(3,"0")}`;
}
export function seasonRange(date = new Date()) {
  const epoch=Date.UTC(2026,0,1),days=Math.floor((date.getTime()-epoch)/86400000),idx=Math.floor(Math.max(0,days)/RANKING_CONFIG.seasonDays);
  const start=new Date(epoch+idx*RANKING_CONFIG.seasonDays*86400000);
  return {start,end:new Date(start.getTime()+RANKING_CONFIG.seasonDays*86400000-1)};
}

export function rankingTierForRating(rating){
  return [...RANKING_CONFIG.tiers].sort((a,b)=>b.min-a.min)
    .find(t=>Number(rating||0)>=t.min)||RANKING_CONFIG.tiers[0];
}
export function nextRankingTier(rating){
  return RANKING_CONFIG.tiers.find(t=>t.min>Number(rating||0))||null;
}
export function formatRankRating(v){ return round1(v).toFixed(1); }

export function rankAttemptComponents(a){
  const target=RANKING_CONFIG.speedTargets[a?.difficultyId]||42;
  const speed=clamp(Number(a?.wpm||0)/target*100);
  const accuracy=clamp(a?.accuracy);
  const mistakeControl=clamp(100-Number(a?.mistakes||0)*10);
  const completed=a?.status==="completed";
  const factor=completed?1:RANKING_CONFIG.timeoutFactor;
  return {
    speed:round1(speed*factor),
    accuracy:round1(accuracy*factor),
    mistakeControl:round1(mistakeControl*factor),
    rawSpeed:round1(speed),rawAccuracy:round1(accuracy),rawMistakeControl:round1(mistakeControl),
    factor,status:a?.status||"",stage:Number(a?.stage||0),completed
  };
}

export function calculateRankMetrics(attempts,activeDayCount=0){
  const ranked=(attempts||[])
    .filter(a=>a.modeName==="Ranking"&&["completed","timeout"].includes(a.status))
    .sort((a,b)=>attemptTime(a)-attemptTime(b));
  const total=ranked.length;
  if(!total){
    const t=RANKING_CONFIG.tiers[0];
    return {
      formulaVersion:RANKING_CONFIG.formulaVersion,rating:0,tierId:t.id,tierName:t.name,tierIcon:t.icon,
      speed:0,accuracy:0,mistakeControl:0,stageProgress:0,bestStage:0,
      diligence:0,consistency:0,completionRate:0,avgWpm:0,avgAccuracy:0,avgMistakes:0,
      completedAttempts:0,timeoutAttempts:0,activeDayCount,rankedAttempts:0,
      nextTierName:"Silver",pointsToNextTier:35
    };
  }

  let speedSum=0,accuracySum=0,mistakeSum=0,wpmSum=0,mistakesRaw=0,completed=0,timeouts=0,bestStage=0;
  for(const a of ranked){
    const c=rankAttemptComponents(a);
    speedSum+=c.speed; accuracySum+=c.accuracy; mistakeSum+=c.mistakeControl;
    wpmSum+=Number(a.wpm||0); mistakesRaw+=Number(a.mistakes||0);
    if(a.status==="completed"){
      completed++;
      bestStage=Math.max(bestStage,Math.max(0,Math.min(RANKING_CONFIG.stageMax,Number(a.stage||0))));
    }else timeouts++;
  }

  const speed=speedSum/total;
  const accuracy=accuracySum/total;
  const mistakeControl=mistakeSum/total;
  // Highest COMPLETED stage contributes 10%. Every additional stage is therefore worth
  // up to 0.2 Rating point (100/50 * 10%), before other performance changes are considered.
  const stageProgress=clamp(bestStage/RANKING_CONFIG.stageMax*100);
  const w=RANKING_CONFIG.weights;
  const rating=round1(speed*w.speed+accuracy*w.accuracy+mistakeControl*w.mistakeControl+stageProgress*w.stageProgress);
  const tier=rankingTierForRating(rating),next=nextRankingTier(rating);
  const completionRate=completed/total*100;

  return {
    formulaVersion:RANKING_CONFIG.formulaVersion,
    rating,tierId:tier.id,tierName:tier.name,tierIcon:tier.icon,
    speed:round1(speed),accuracy:round1(accuracy),mistakeControl:round1(mistakeControl),
    stageProgress:round1(stageProgress),bestStage,
    // Legacy aliases retained for old Admin/UI compatibility.
    diligence:round1(mistakeControl),consistency:round1(completionRate),completionRate:round1(completionRate),
    avgWpm:round1(wpmSum/total),avgAccuracy:round1(ranked.reduce((s,a)=>s+Number(a.accuracy||0),0)/total),
    avgMistakes:round1(mistakesRaw/total),completedAttempts:completed,timeoutAttempts:timeouts,
    activeDayCount,rankedAttempts:total,
    nextTierName:next?.name||"MAX",pointsToNextTier:next?round1(Math.max(0,next.min-rating)):0
  };
}

export function rankingClassKey(educationLevel,classroom){return `${String(educationLevel||"").trim()}${String(classroom||"").trim()}`;}
export function rankProfiles(profiles,limit=10){return [...profiles].sort((a,b)=>Number(b?.rank?.rating||0)-Number(a?.rank?.rating||0)).slice(0,limit);}
