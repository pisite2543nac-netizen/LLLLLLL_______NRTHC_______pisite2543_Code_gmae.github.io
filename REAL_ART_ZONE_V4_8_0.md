# V4.9.0 — REAL ART 2D ZONE

Firebase Project: `nr-game-code`

## สิ่งที่เปลี่ยน
- `zone-world-day.png` ถูกใช้เป็นฉากจริงบน Canvas
- ตัวละครชาย/หญิงใช้ PNG sprite จริง
- พ่อมด Quest ใช้ PNG sprite จริง
- พ่อค้า Token Shop ใช้ PNG sprite จริง
- เดิน A/D และลูกศรซ้าย/ขวาเหมือนเดิม
- การเคลื่อนไหวยังคง Acceleration/Deceleration และ Remote interpolation
- Realtime position / Chat / Quest / Shop / Moderation / Rank / Online ยังอยู่
- กลางคืนใช้ฉากเดียวกันและซ้อน Night lighting เพื่อไม่ต้องเปลี่ยนระบบเวลา
- Shop แสดง generated item art ในการ์ดสินค้า

## ไฟล์ Art ที่เว็บใช้จริง
`assets/zone/zone-world-day.png`
`assets/zone/male-*.png`
`assets/zone/female-*.png`
`assets/zone/wizard-*.png`
`assets/zone/merchant-*.png`
`assets/zone/item-*.png`

ภาพเหล่านี้ไม่ใช่ Concept อย่างเดียว — `zone.js` โหลดและวาดไฟล์เหล่านี้โดยตรง

## Deploy
1. อัปทุกไฟล์ใน ZIP ไป GitHub Root รวมโฟลเดอร์ `assets`
2. ห้ามอัปเฉพาะ HTML/JS โดยไม่อัป `assets/zone`
3. รอ GitHub Pages Success
4. เปิดแบบ Incognito หรือ Ctrl+F5
