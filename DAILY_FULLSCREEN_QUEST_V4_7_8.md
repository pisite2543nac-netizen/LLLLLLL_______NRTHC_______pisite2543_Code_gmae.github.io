# V4.7.9 — nr-game-code Daily Fullscreen Quest

Firebase Project: `nr-game-code`
Admin UID: `Y2uDV9yAQ6Mpu2qwQH9cG4ko6ZQ2`

## Daily Quest
หลัง Login ระบบจะขอเข้า Fullscreen

เงื่อนไข:
- อยู่ Fullscreen
- Tab ต้องมองเห็น/Active
- สะสมครบ 60 นาทีภายในวันเดียวกัน
- ออกจาก Fullscreenหรือสลับ Tab = หยุดนับ
- กลับเข้า Fullscreen = นับต่อจากเดิม
- ครบ 60 นาที = +15 Token
- รับได้วันละ 1 ครั้ง

ข้อมูลเก็บที่:
`users/{uid}/daily_checkins/{YYYY-MM-DD}`

Fields:
- fullscreenSeconds
- rewarded
- rewardToken
- rewardedAt

หมายเหตุด้านความปลอดภัย:
เวอร์ชัน GitHub Pages + Firestore client-only ตรวจเวลาจาก Browser จึงช่วยป้องกันการกดรับซ้ำด้วย Transaction/Rules ได้ แต่ไม่สามารถกันการแก้ JavaScript ฝั่งผู้ใช้แบบ 100% ได้ ถ้าต้องการกันโกงเต็มรูปแบบควรย้าย heartbeat/claim ไป Cloud Functions หรือ backend

## Deploy
1. อัป ZIP ไป GitHub Root
2. Firebase Project ต้องเป็น `nr-game-code`
3. Publish `firestore.rules` จาก V4.7.9
4. รอ GitHub Pages Success
5. Login → Browser จะขอ Fullscreen
