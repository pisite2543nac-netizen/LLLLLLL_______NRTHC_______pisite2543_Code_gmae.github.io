// V4.14.1 — shared runtime stability helpers.
export const APP_VERSION="4.14.1";

const TRANSIENT_CODES=new Set([
  "unavailable","deadline-exceeded","aborted","resource-exhausted","internal","unknown",
  "auth/network-request-failed","auth/too-many-requests"
]);

export const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));

export function firebaseErrorCode(error){
  return String(error?.code||"").replace(/^firestore\//,"");
}
export function isTransientFirebaseError(error){
  const code=firebaseErrorCode(error);
  return TRANSIENT_CODES.has(code)
    || /network|offline|temporar|timeout|unavailable/i.test(String(error?.message||""));
}
export async function retryAsync(task,{
  attempts=5,baseDelay=220,maxDelay=2200,label="operation",retryAll=false
}={}){
  let lastError;
  for(let attempt=1;attempt<=attempts;attempt++){
    try{return await task(attempt)}
    catch(error){
      lastError=error;
      const retry=attempt<attempts&&(retryAll||isTransientFirebaseError(error));
      if(!retry)throw error;
      const wait=Math.min(maxDelay,Math.round(baseDelay*Math.pow(1.75,attempt-1)))+Math.floor(Math.random()*90);
      console.warn(`[retry:${label}] ${attempt}/${attempts}`,error?.code||error?.message||error);
      await sleep(wait);
    }
  }
  throw lastError;
}

const flights=new Map();
export function singleFlight(key,task){
  if(flights.has(key))return flights.get(key);
  const p=Promise.resolve().then(task).finally(()=>flights.delete(key));
  flights.set(key,p);
  return p;
}

const locks=new Set();
export async function withOperationLock(key,task){
  if(locks.has(key))return {locked:true};
  locks.add(key);
  try{return await task()}
  finally{locks.delete(key)}
}
export function operationLocked(key){return locks.has(key)}

export function installNetworkBadge({label="SYSTEM"}={}){
  let badge=document.getElementById("runtimeNetworkBadge");
  if(!badge){
    badge=document.createElement("div");
    badge.id="runtimeNetworkBadge";
    badge.className="runtime-network-badge";
    document.body.appendChild(badge);
  }
  const render=()=>{
    const online=navigator.onLine!==false;
    badge.classList.toggle("offline",!online);
    badge.innerHTML=online
      ?`<i></i><span>${label} · ONLINE</span>`
      :`<i></i><span>${label} · OFFLINE · รอเชื่อมต่อ</span>`;
  };
  addEventListener("online",render);
  addEventListener("offline",render);
  render();
  return badge;
}

export function stableErrorMessage(error,fallback="เกิดข้อผิดพลาด"){
  const code=firebaseErrorCode(error);
  if(code==="permission-denied")return "สิทธิ์ Firestore ไม่ถูกต้อง กรุณาตรวจ Rules";
  if(code==="unavailable"||code==="auth/network-request-failed")return "อินเทอร์เน็ต/Firebase ขัดข้องชั่วคราว กรุณารอสักครู่แล้วลองใหม่";
  if(code==="resource-exhausted")return "ระบบได้รับคำขอจำนวนมาก กรุณารอสักครู่";
  return String(error?.message||fallback);
}
