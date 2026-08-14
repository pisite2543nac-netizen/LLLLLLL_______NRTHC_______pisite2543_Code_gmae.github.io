# สร้าง Firebase ใหม่สำหรับ V6.0

1. Firebase Console → Add project
2. Authentication → เปิด Email/Password
3. Firestore Database → Create database → Production mode
4. Project settings → Web app → Copy firebaseConfig
5. Copy `firebase-config.template.js` เป็น `firebase-config.js` แล้วใส่ config
6. Authentication → Add user สำหรับ Admin
   - Email แนะนำ: pisit_2000@<project>.local
   - ตั้ง Password เอง
   - Copy UID
7. นำ Admin UID เดียวกันไปใส่:
   - firebase-config.js
   - firestore.rules ใน function isAdmin()
   - functions/index.js ใน const ADMIN_UID
8. Firestore → Rules → วาง firestore.rules → Publish
9. Deploy Functions:
   firebase login
   firebase use --add
   cd functions
   npm install
   cd ..
   firebase deploy --only functions
10. Login Admin → สมาชิก User → กด `🚀 เตรียมฐานข้อมูล V6.0`
11. Admin → Levels → กด `คืนค่า 12 Level เริ่มต้น`
12. GitHub Pages: อัปไฟล์ทั้งหมดใน ZIP ไป Root ของ repo
13. ทดสอบสมัคร User ด้วยรหัส 8 หลัก เช่น 11111111

หมายเหตุ: อย่าใส่ Password Admin หรือ service-account JSON ลง GitHub


## Firebase Project ที่ตั้งค่าใน V6.0.1

`nr-game-code`
