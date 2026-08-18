import { rewardItemById } from "./reward-data.js?v=4.14.1";

export const EQUIPMENT_SLOTS = ["head","face","top","bottom","outfit","shoes","back","hand","aura","pet"];

export function normalizeEquipment(raw={}){
  const eq=Object.fromEntries(EQUIPMENT_SLOTS.map(slot=>[slot,null]));
  for(const slot of ["outfit","back","hand","pet"]){
    const id=raw?.[slot]||null;
    const item=id?rewardItemById(id):null;
    if(item&&item.slot===slot)eq[slot]=id;
  }
  return eq;
}
export function toggleEquipment(raw={},itemOrId){
  const item=typeof itemOrId==="string"?rewardItemById(itemOrId):itemOrId;
  if(!item||!["outfit","back","hand","pet"].includes(item.slot))return normalizeEquipment(raw);
  const eq=normalizeEquipment(raw);
  eq[item.slot]=eq[item.slot]===item.id?null:item.id;
  return eq;
}
export function visibleEquipment(raw={}){ return normalizeEquipment(raw); }
