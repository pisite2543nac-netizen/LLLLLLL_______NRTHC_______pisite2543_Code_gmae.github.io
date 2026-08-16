# V4.8.3 AUTH / REGISTER HOTFIX

สาเหตุ:
`reward-data.js` ขาด comma หลัง item `set2_storm_aura`
ทำให้ ES Module import ล้มเหลว และ `app.js` ไม่ทำงานทั้งไฟล์

ผลที่เห็น:
- หน้าเว็บเปิดได้
- Login ไม่ทำงาน
- Register ไม่ทำงาน
- ปุ่ม/logic ที่อยู่ใน app.js ไม่ทำงาน

แก้แล้ว:
- เติม comma ที่หาย
- บังคับ index.html โหลด app.js?v=4.8.3
- ตรวจ syntax ของ JS หลัก
- ตรวจ runtime ของ module data หลัก
- Firebase ยังคง nr-game-code

ติดตั้ง:
1. อัป ZIP นี้ทับ GitHub root
2. รอ GitHub Pages Deploy = Success
3. Ctrl+F5 หรือเปิด Incognito
4. ทดสอบ Register และ Login
5. ไม่ต้องล้าง Firestore / Authentication
