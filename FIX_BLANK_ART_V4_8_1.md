# V4.8.2 — Self-Contained Real Art Zone

ปัญหาที่แก้:
V4.8.0 โหลด JavaScript ได้ แต่ GitHub Pages หา `assets/zone/*.png` ไม่เจอ
จึงเหลือเพียงพื้นหลัง fallback และป้าย NPC

V4.8.2 แก้โดย:
- เพิ่ม `zone-assets.js` ที่ฝังภาพ PNG เป็น Data URI
- `zone.js` โหลด Embedded Asset ก่อนเสมอ
- `assets/zone/` ยังคงอยู่เป็นแหล่งสำรอง
- ถ้า Asset สำคัญยังโหลดไม่ได้ จะไม่เปิดฉาก fallback เก่า
- ต้องเห็นป้าย `ART ENGINE · EMBEDDED` บนฉาก

ไฟล์สำคัญที่ต้องอยู่ GitHub Root:
- zone.html
- zone.js
- zone-assets.js
- firebase-config.js
- style.css

แม้โฟลเดอร์ assets/zone จะตกหล่น ภาพหลักก็ยังทำงานจาก zone-assets.js

## วิธีอัป
1. แตก ZIP ก่อน
2. อัปไฟล์ทั้งหมดภายใน ZIP ไป GitHub repository root
3. ตรวจให้เห็น `zone-assets.js` ที่ root
4. รอ GitHub Pages deployment = Success
5. เปิด `zone.html?v=4.8.2`
6. กด Ctrl+F5

ถ้าขึ้น V4.8.2 สำเร็จ:
- ฉาก Social House / น้ำพุ / Token Shop ต้องเป็นภาพวาดจริง
- ตัวผู้เล่นต้องเป็น Chibi Sprite
- พ่อมดและพ่อค้าต้องเป็น Sprite
- จะมีป้าย `ART ENGINE · EMBEDDED`
