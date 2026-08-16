# V4.12.0 — Equipment Engine Rebuild / Shop 40

Firebase Project: `nr-game-code`

## เหตุผลที่เปลี่ยน Engine
เวอร์ชันก่อนใช้รูป Item Thumbnail โปร่งใส แล้วพยายาม Crop/ขยับ x/y ตอนสวม
แต่รูปแต่ละชิ้นมีพื้นที่ว่างและสัดส่วนไม่เท่ากัน จึงเกิดอาการหมวก/กระเป๋า/อาวุธลอย

V4.12.0 เลิกใช้ Thumbnail สำหรับตัวละครโดยเด็ดขาด

แยกเป็น:
1. `item-assets.js` = ภาพในร้าน/กระเป๋า
2. `equip-layer-assets.js` = Wear Layer สำหรับตัวละคร

Wear Layer ทุกชิ้น:
- Canvas เดียวกัน 220×160
- เส้นพื้น y=160 เดียวกัน
- ตัวละครอยู่กึ่งกลางเดียวกัน
- Flip ซ้าย/ขวาพร้อมตัวละคร
- Pet วางเท้าบนเส้นพื้น
- อาวุธล็อกข้างมือ
- Head/Face/Top/Shoes ล็อกตำแหน่งร่างกาย

ดังนั้น Item Thumbnail จะไม่มีโอกาสลอยบนตัวละครอีก

## ร้านค้า 40 ชิ้น
เดิม 30 + เพิ่ม Full Outfit 10 = 40

เกรด:
- EASY 14
- MEDIUM 13
- RARE 13

Full Outfit 10:
1. Coder Academy
2. Street Coder
3. Tech Lab
4. Retro Arcade
5. Cyber Guard
6. Arcane Scholar
7. Shadow Ninja
8. Dragon Emperor
9. Celestial Knight
10. Void Archmage

Slot ใหม่:
`outfit`

กติกา Outfit:
- Outfit เป็นชุดครอบตัวเต็มชุด
- เมื่อสวม Outfit จะถอด Top / Bottom / Shoes อัตโนมัติ
- เมื่อสวม Top / Bottom / Shoes จะถอด Outfit อัตโนมัติ
- ป้องกันภาพซ้อน
- ป้องกัน Stats ซ้อน

## รองรับทั้งหมด
Wear Layer มีครบ:
- Shop 40
- Legacy 6
- GM Exclusive 2
รวม 48 Wear Layers

## 2D Zone
- Base character ใช้สัดส่วน 100×150 เพื่อรักษา Aspect Ratio ใกล้ภาพต้นฉบับ
- Wear Layer ใช้พิกัดตายตัวร่วมกัน
- Pet ไม่มี Bob ลอยขึ้นลง
- Aura / Wings / Cape อยู่ชั้นหลัง
- Clothes / Weapon / Pet อยู่ชั้นหน้า

## PVP
เปลี่ยน PVP ให้ใช้ `equip-layer-assets.js` ตัวเดียวกับ 2D Zone
จึงไม่ใช้ Item Thumbnail บนตัวละคร PVP อีก

## ระบบเดิมที่คงไว้
- Backpack User 18
- GM Token ∞
- GM Backpack ∞
- Excalibur / ผีน้อย GM
- Student Fullscreen Session
- Daily Fullscreen 60 นาที
- Admin Usage Dashboard
- PVP Ranking
- Ranking ปกติ
- Quest / Shop / Chat

## GitHub
1. แตก ZIP
2. อัปไฟล์ข้างในทั้งหมดไป Repository Root
3. ห้ามอัป ZIP เป็นไฟล์เดียว
4. รอ Pages Success
5. Ctrl+F5
