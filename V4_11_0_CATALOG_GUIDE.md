# V4.13.0 — 20 Full Outfit / 30 Item Clean Catalog

Firebase: `nr-game-code`

## ร้าน User เหลือ 30 ชิ้นเท่านั้น
- Full Outfit 20
- Weapon 4: Katana / Code Blade / Mystic Staff / Guardian Shield
- Wings 3
- Pets 3

ตัดออก:
- หมวก
- แว่น
- เสื้อเดี่ยว
- รองเท้าเดี่ยว
- กระเป๋า
- ผ้าคลุม
- Aura / Halo / Throne
- คฑา
- หนังสือ
- Tablet
- ของแต่งย่อยอื่นทั้งหมด

## เกรด
- EASY 10
- MEDIUM 10
- RARE 10

## ระบบ Migration
เมื่อ User Login/เข้า Zone:
- Inventory เก่าจะถูกกรองให้เหลือเฉพาะ Catalog V4.13.0
- Item เก่าที่ถูกถอดออกจะไม่กินช่อง Backpack อีก
- Equipment เก่าที่ไม่มีใน Catalog จะถูก Unequip อัตโนมัติ
- ลดโอกาส Item ลอยจากข้อมูลเก่าที่ค้างใน Firestore

## Slot ที่ใช้งานจริง
- `outfit`
- `hand`
- `back` (ปีก)
- `pet`

## GM
GM Exclusive ไม่รวมใน 30 ร้าน User:
- Excalibur
- ผีน้อย GM

GM Token ∞ / Backpack ∞ คงเดิม

## Preview
- V4_11_0_CATALOG_30_PREVIEW.png
- V4_11_0_OUTFIT_20_ON_CHARACTER_PREVIEW.png

## ระบบเดิมคงไว้
- Student Fullscreen Session
- Daily Fullscreen 60 นาที = 15 Token
- Admin Usage Dashboard
- Ranking / PVP Ranking
- PVP Battle
- Quest
- 2D Zone / Chat
- Backpack User 18
- Sell back 30%

## Deploy
แตก ZIP แล้วอัปไฟล์ทั้งหมดข้างในไป Repository Root
