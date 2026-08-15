# V4.7.7 — nr-game-code Ranking Challenge

Firebase Project: `nr-game-code`
Admin UID: `Y2uDV9yAQ6Mpu2qwQH9cG4ko6ZQ2`

## หลังเลือกภาษา
ผู้เล่นเลือก:
1. เขียน Code แบบธรรมดา
2. Ranking Challenge

## Classic
- เล่นตาม Stage เดิม
- เลือก Easy / Medium / Hard
- ไม่มีเวลาบังคับ
- Token ตามสูตรเดิม

## Ranking Challenge
- แยก Progress จาก Classic
- เริ่ม/เล่นต่อจาก Stage Ranking ที่ปลดล็อก
- ทุกด่านบังคับเวลาโดยใช้ timeLimit ของด่าน
- ผ่านแล้วปลดล็อก Stage ถัดไป
- ความยากเพิ่มตาม Stage เดิม Easy → Medium → Hard
- Token = รางวัล Classic ที่ทำได้ + 15 Token
- สูงสุด 85 Token ต่อ Stage
- Timeout = 0 Token และบันทึกผลลง Ranking

## สูตร Rank
ใช้เฉพาะ Attempts ที่ `modeName = Ranking`
- Speed 40%
- Accuracy 40%
- ผิดน้อย 20%
- Timeout ลดคะแนน component เหลือ 65% ของผลรอบนั้น

## Keyboard Safe
Code ทั้ง HTML 50 ด่าน + Python 50 ด่าน ถูกกรองให้เหลือ:
- ASCII keyboard ปกติ
- ภาษาไทย
- Enter / Tab

ตัดอักขระเช่น © ® ™ emoji smart quote และสัญลักษณ์ Unicode ที่ไม่มีบนแป้นพิมพ์ปกติออก

## Deploy
1. อัป ZIP ไป GitHub Root
2. Firebase Project = nr-game-code
3. Publish firestore.rules จากชุดนี้
4. รอ GitHub Pages Success
5. Ctrl+F5 / Incognito
