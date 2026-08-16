# V4.9.5 — Student Fullscreen Session + Daily Quest Auto Start

Firebase Project: `nr-game-code`

## User Fullscreen ใหม่

เป้าหมาย:
หลัง Student Login สำเร็จ หน้า User ทั้งระบบอยู่ใน Fullscreen ต่อเนื่อง

Browser มีข้อกำหนดว่า `requestFullscreen()` ต้องเกิดจาก User Gesture
ดังนั้น V4.9.5 ขอ Fullscreen จากการกด Login/Register ทันที ก่อน Firebase Auth ทำงาน
เมื่อ Login สำเร็จ User จึงอยู่ใน Fullscreen อยู่แล้ว

ถ้า User Reload หน้าในขณะที่ยัง Login ค้าง:
Browser ไม่อนุญาตให้เว็บเข้า Fullscreen เองโดยไม่มีการกด
ระบบจะแสดง Fullscreen Recovery Gate ให้กด 1 ครั้งเพื่อกลับเข้าสู่ Fullscreen

Admin:
- ไม่ใช้ Student Fullscreen Session
- admin.html ไม่เรียก requestFullscreen

## ทุกหน้า User

หน้าเหล่านี้อยู่ใน Fullscreen document เดียว:
- User Portal
- เลือกภาษา
- Classic
- Ranking Challenge
- PVP
- Result
- Profile / Shop UI
- 2D Zone

2D Zone เปลี่ยนจาก Navigation `index.html -> zone.html`
เป็น Fullscreen iframe shell ภายใน index.html

ข้อดี:
- Browser ไม่ยกเลิก Fullscreen ตอนเข้า 2D Zone
- กลับ Portal แล้วยัง Fullscreen
- Daily Fullscreen Quest timer ใน Parent เดินต่อเนื่อง
- Mobile/Tablet Zone-only ยังทำงานได้

## Daily Fullscreen Quest 60 นาที

หลัง Auth + โหลด Profile สำเร็จ:
`startDailyFullscreenQuest()` ทำงานทันที

เงื่อนไขนับ:
- document ยังอยู่ Fullscreen
- Tab ยัง Visible
- User Login อยู่

เมื่อเข้า 2D Zone iframe:
- Parent Fullscreen ยังอยู่
- Timer จึงนับต่อโดยไม่ Reset

Progress:
- บันทึกทุก ~30 วินาที
- Reload แล้วอ่านเวลาของวันนั้นกลับมา
- ครบ 3600 วินาที รับ 15 Token
- วันละ 1 ครั้ง

## GitHub
1. แตก ZIP
2. อัปไฟล์ข้างในทั้งหมดไป Repository Root
3. ห้ามอัป ZIP เป็นไฟล์เดียว
4. รอ GitHub Pages Success
5. Ctrl+F5

Firestore Rules:
V4.9.5 ใช้ rules เดิมจาก V4.9.4/V4.9.3 สำหรับ daily_checkins / usage / GM
