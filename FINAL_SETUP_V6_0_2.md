# V6.0.2 Final Firebase Ready

Firebase Project:
`nr-game-code`

Admin UID:
`Y2uDV9yAQ6Mpu2qwQH9cG4ko6ZQ2`

ไฟล์ที่ตั้งค่า UID เรียบร้อยแล้ว:
- firebase-config.js
- firestore.rules
- functions/index.js

## ขั้นตอนต่อไป

1. Firebase Console → Firestore Database → Rules
2. วางไฟล์ `firestore.rules` จากชุดนี้ทั้งหมด
3. กด Publish

4. Deploy Functions:

```bash
firebase login
firebase use nr-game-code
cd functions
npm install
cd ..
firebase deploy --only functions
```

5. อัปไฟล์ทั้งหมดจาก ZIP ไปที่ GitHub repository root
6. รอ GitHub Pages deployment เป็น Success
7. เปิดเว็บแบบ Incognito หรือ Ctrl+F5
8. Login Admin
9. กด `🚀 เตรียมฐานข้อมูล V6.0`
10. ทดสอบ Register User ใหม่ด้วยรหัสนักศึกษา 8 หลัก

หมายเหตุ:
- อย่าใส่ Password Admin ลง GitHub
- Password เก็บใน Firebase Authentication เท่านั้น
