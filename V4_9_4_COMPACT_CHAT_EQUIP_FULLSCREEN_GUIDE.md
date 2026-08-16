# V4.13.0 — Compact Chat + Body Anchored Equipment + Auto User Fullscreen

Firebase Project: `nr-game-code`

## 1) 2D Zone Chat
ลด Footer/Chat จากประมาณ 82px เหลือประมาณ 52px บน Desktop
และประมาณ 46px บน Mobile

ผล:
- ฉาก 2D Zone เห็นพื้นที่มากขึ้น
- ปุ่มซ้าย/ขวายังอยู่
- ช่องพูดยังใช้งานเหมือนเดิม

## 2) Equipment Body Anchoring
แก้ระบบเดิมที่นำรูปไอเท็มไปวางเป็นรูปเต็มจนดูเหมือนลอย

V4.13.0:
- ตรวจขอบวัตถุจริงจาก Alpha ของภาพ
- ตัดพื้นที่ว่าง/ประกายเล็ก ๆ ออกจากภาพตอนสวม
- มี Anchor รายไอเท็ม
- หมวก/มงกุฎ -> ศีรษะ
- แว่น -> ใบหน้า
- เสื้อ/เกราะ -> ลำตัว
- รองเท้า -> เท้า
- กระเป๋า/ผ้าคลุม/ปีก -> หลัง
- ดาบ/คฑา/หนังสือ/แท็บเล็ต -> มือ
- Pet -> วางระดับพื้นข้างตัวละคร ไม่ bob ลอยขึ้นลง
- Aura -> วาดเป็น Effect ตามชนิด
- รองรับร้าน 30 ชิ้น + Legacy + Excalibur/ผีน้อย GM

## 3) User Auto Fullscreen
Student Login และ Student Register จะขอ Fullscreen ทันทีจาก Submit Gesture
ก่อนเริ่ม async Firebase Authentication เพราะ Browser อนุญาต requestFullscreen
เฉพาะช่วงที่ยังมี User Activation

- User: Auto Fullscreen
- Admin: ไม่เรียก Fullscreen
- หาก Browser ไม่อนุญาต จะใช้หน้าเต็มความสูง 100dvh เป็น fallback
- Login ผิด ระบบจะออกจาก Fullscreen ที่เปิดจาก Login ให้

Daily Fullscreen Quest:
หลัง Login จะเริ่มระบบนับ Daily Fullscreen ด้วย

## Deploy
1. แตก ZIP
2. อัปไฟล์ทั้งหมดข้างในไป GitHub Repository Root
3. ห้ามอัป ZIP เป็นไฟล์เดียว
4. รอ Pages = Success
5. Ctrl+F5
6. firestore.rules ใช้ V4.9.3/V4.13.0 ชุดนี้ได้ (ระบบ Usage/GM เดิมยังอยู่)
