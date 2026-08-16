import { rewardItemById } from "./reward-data.js?v=4.10.0";

export const EQUIPMENT_SLOTS = [
  "head","face","top","bottom","outfit","shoes","back","hand","aura","pet"
];

export function normalizeEquipment(raw={}){
  const eq=Object.fromEntries(EQUIPMENT_SLOTS.map(slot=>[slot,raw?.[slot]||null]));
  if(eq.outfit){
    // Full outfit visually replaces body clothes and shoes.
    eq.top=null;
    eq.bottom=null;
    eq.shoes=null;
  }
  return eq;
}

export function toggleEquipment(raw={},itemOrId){
  const item=typeof itemOrId==="string"?rewardItemById(itemOrId):itemOrId;
  if(!item||!EQUIPMENT_SLOTS.includes(item.slot))return normalizeEquipment(raw);

  const eq=normalizeEquipment(raw);
  const turningOff=eq[item.slot]===item.id;

  if(turningOff){
    eq[item.slot]=null;
    return eq;
  }

  if(item.slot==="outfit"){
    eq.outfit=item.id;
    eq.top=null;eq.bottom=null;eq.shoes=null;
    return eq;
  }

  if(["top","bottom","shoes"].includes(item.slot)){
    eq.outfit=null;
  }

  eq[item.slot]=item.id;
  return eq;
}

export function visibleEquipment(raw={}){
  return normalizeEquipment(raw);
}
