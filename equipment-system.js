import { rewardItemById } from "./reward-data.js?v=4.11.0";

export const EQUIPMENT_SLOTS = [
  "head","face","top","bottom","outfit","shoes","back","hand","aura","pet"
];

export function normalizeEquipment(raw={}){
  const eq=Object.fromEntries(EQUIPMENT_SLOTS.map(slot=>[slot,null]));
  for(const slot of EQUIPMENT_SLOTS){
    const id=raw?.[slot]||null;
    const item=id?rewardItemById(id):null;
    // Removed/old micro-items disappear from equipment automatically.
    if(item&&item.slot===slot)eq[slot]=id;
  }

  // V4.11.0 User catalog only uses Outfit / Hand / Back / Pet.
  // GM exclusive also uses Hand / Pet.
  ["head","face","top","bottom","shoes","aura"].forEach(slot=>eq[slot]=null);
  return eq;
}

export function toggleEquipment(raw={},itemOrId){
  const item=typeof itemOrId==="string"?rewardItemById(itemOrId):itemOrId;
  if(!item)return normalizeEquipment(raw);

  const eq=normalizeEquipment(raw);
  const turningOff=eq[item.slot]===item.id;
  eq[item.slot]=turningOff?null:item.id;
  return eq;
}

export function visibleEquipment(raw={}){
  return normalizeEquipment(raw);
}
