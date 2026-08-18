V4.14.3 FINAL STABILITY + ADMIN USER EDIT — OVERWRITE ONLY

วางทับใน GitHub Repository Root จำนวน 8 ไฟล์:
1. index.html
2. app.js
3. zone.html
4. zone.js
5. admin.html
6. admin.js
7. style.css
8. firestore.rules

ต้องทำหลังอัป GitHub:
Firebase Console > Firestore Database > Rules > วาง firestore.rules ชุดนี้ > Publish

ไม่ต้องลบฐานข้อมูล User
ไม่ต้องสร้าง User ใหม่
ไม่ต้องเปลี่ยน Password

Admin > สมาชิก User > ปุ่ม "แก้ไข"
แก้ได้:
- เลขนักศึกษา 1–15 หลัก
- ชื่อ-นามสกุล
- ระดับชั้น
- ห้อง/กลุ่ม
- แผนก
- สาขาวิชา

แก้ไม่ได้:
- Password

การเปลี่ยนเลขนักศึกษา:
- Password เดิม
- Firebase Auth account เดิม
- User Login ด้วยเลขใหม่ได้
- เลขเก่าจะถูกปิดผ่าน login_aliases
- users และ public_profiles จะอัปเดตพร้อมกันด้วย Transaction

2D Zone:
- รวม Render Recovery V4.14.2
- ปุ่ม "ออก" ปิด Zone ทันที ไม่รอ Firestore
- Offline/Network ช้าไม่ทำให้ปุ่มออกค้าง

Stability:
- Admin Usage latest usage_daily 2,000 docs
- Admin Usage latest usage_sessions 3,000 docs
- PVP Sync / Operation Lock / Retry / Reward Claim เดิมยังคงอยู่

ทดสอบหลัง Deploy:
1. Admin แก้ชื่อ User
2. Admin เปลี่ยนชั้น/ห้อง
3. Admin เปลี่ยนเลขนักศึกษา
4. User Logout
5. Login ด้วยเลขใหม่ + Password เดิม
6. เปิด Ranking และตรวจห้อง/สาขา
7. เข้า 2D Zone แล้วกด "ออก"
