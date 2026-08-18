V4.14.2 ZONE RENDER RECOVERY PATCH

ให้นำไฟล์ 4 ไฟล์นี้ไปวางทับที่ GitHub Repository Root:
1. zone.js
2. zone.html
3. app.js
4. index.html

ไม่ต้องลบ/เปลี่ยน Firebase database
ไม่ต้องแก้ firestore.rules สำหรับปัญหาจอดำนี้

สิ่งที่แก้:
- Canvas ResizeObserver สำหรับ iframe/fullscreen
- ป้องกัน Canvas ถูกสร้างขนาด 1px ตอน layout ยังไม่พร้อม
- เริ่ม Render ก่อน Quest/Presence/Firestore sync
- Realtime/Chat/Quest error ไม่สามารถหยุดฉากได้
- Render loop มี error recovery
- Remote Player เสีย 1 คนไม่ทำให้ทั้งฉากดับ
- Emergency world renderer
- Render watchdog ตรวจและฟื้น Canvas อัตโนมัติ
- Cache bust V4.14.2

หลังอัป:
รอ GitHub Pages Deploy Success แล้วเปิดหน้าเว็บใหม่
ไฟล์ index.html / app.js / zone.html มี cache-bust แล้ว แต่ครั้งแรกแนะนำ Ctrl+F5 หนึ่งครั้ง
