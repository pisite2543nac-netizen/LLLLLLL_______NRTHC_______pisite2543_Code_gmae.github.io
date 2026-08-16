# V4.9.0 — GM Skeleton Overlord Exclusive

Firebase Project: `nr-game-code`

## GM Skin
ชื่อชุด:
`Skeleton Overlord · GM Exclusive`

องค์ประกอบ:
- 💀 Skeleton Overlord body
- 🔱 Abyss Skull Staff
- 🟣 Void Soul Flame
- 🪽 Dark Lich Mantle
- Purple Void Aura

## กติกา
ชุดนี้ **ไม่มีขายใน Token Shop**
และ **ไม่ได้อยู่ใน reward-data.js / REWARD_ITEMS**

ระบบจะตรวจ GM จาก Firebase Admin UID เดิมเท่านั้น
User ปกติไม่สามารถเลือก skin นี้ผ่านร้านค้า/กระเป๋าได้

## การแสดงผลใน 2D Zone
- GM ใช้ `gm-skeleton-overlord.png`
- ภาพฝังใน `zone-assets.js` เป็น Data URI ด้วย
- มี External PNG สำรองที่ `assets/zone/gm-skeleton-overlord.png`
- เดินซ้าย/ขวาได้เหมือนระบบ GM เดิม
- มี bob animation และ purple void aura
- Nameplate GM ถูกย้ายขึ้นเหนือ sprite ขนาดใหญ่
- Click GM จะแสดง `GM EXCLUSIVE` และ Preview skin จริง

## ระบบเดิมที่ยังคงอยู่
- Login/Register
- nr-game-code
- Ranking Challenge
- Ranking สาขา/ห้อง
- Daily Fullscreen Quest
- 30 Shop Items / 3 Grades
- Backpack 18
- User Equipment
- Wizard Quest
- Token Shop
- Chat / Realtime 2D Zone

## Deploy
อัป ZIP ทั้งชุดไป GitHub Root แล้วรอ Pages Success จากนั้น Ctrl+F5
