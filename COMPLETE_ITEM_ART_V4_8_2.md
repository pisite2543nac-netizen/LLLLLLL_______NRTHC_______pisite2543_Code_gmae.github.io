# V4.8.3 — Complete Item Art / nr-game-code

ครบ 36 ไอเท็ม พร้อมภาพจริงใน Token Shop, Profile/Inventory และ 2D Zone

## ไอเท็มเดิม 28 ชิ้น
คงราคาตามระบบเดิมทั้งหมด

## ไอเท็มที่เพิ่มตามคำสั่งเดิม
- ดาบ Code Blade — 2,600 Token
- เกราะ Guardian Code — 4,600 Token
- มงกุฎ Arcane Coder — 5,600 Token
- คาถา Code Grimoire — 3,200 Token
- สัตว์เลี้ยงมังกรทอง — 16,500 Token
- สัตว์เลี้ยงลิง Coder — 4,300 Token
- ดาบทอง Code Emperor — 7,200 Token
- ดาบม่วง Void Coder — 5,800 Token

## Inventory
- ความจุสูงสุด 25 ไอเท็ม
- ถ้ากระเป๋าเต็มซื้อเพิ่มไม่ได้
- ขายคืนร้านได้ 30% ของราคาซื้อ
- ถ้าขายไอเท็มที่กำลังสวม ระบบถอดให้อัตโนมัติ

## ภาพ
- 8 ไอเท็มแรกใช้ภาพ AI ที่อนุมัติจริง
- ไอเท็มอื่นใช้ Embedded SVG game art ที่สร้างไว้ในชุดนี้
- `item-assets.js` ฝังภาพไว้ จึงไม่เกิดรูปแตกแม้ GitHub Pages หาโฟลเดอร์ asset ไม่เจอ

## Deploy
1. อัป ZIP ทั้งหมดไป GitHub Root
2. ตรวจว่ามี `item-assets.js` ที่ Root
3. รอ GitHub Pages Success
4. เปิด `zone.html?v=4.8.3` แล้ว Ctrl+F5
