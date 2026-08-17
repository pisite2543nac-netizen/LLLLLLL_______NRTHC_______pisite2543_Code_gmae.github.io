# V4.13.1 — Animated Skin Engine

ปัญหาที่แก้: V4.12 ใช้ภาพชุดเซต 1 ท่าทับบนตัวละคร ทำให้ขา/แขนของชุดไม่เดินตามตัวละคร

V4.13.1 เปลี่ยนระบบทั้งหมด:
- 20 ชุดเซตมี 6 sprite ต่อชุด: Male Idle/Walk1/Walk2 + Female Idle/Walk1/Walk2
- รวม 120 animated skin frames
- ทุก frame สร้างจาก silhouette และ pose ของตัวละครจริง
- หัว/ผม/ใบหน้า/มือของ User เดิมคงเดิม
- สีและ Theme ของชุดมาจากภาพ Approved Outfit V4.12
- เวลาตัวละครเดิน ขา แขน รองเท้า และลำตัวของชุดเดินไปพร้อม pose จริง
- ไม่ใช้ body-skin-assets.js แบบภาพนิ่งอีกแล้ว
- Zone / Profile / PVP ใช้ Animated Skin source เดียวกัน
- Hand equipment มี pose offset เล็กน้อยเพื่อให้ตามมือเวลาเดินดีขึ้น

ระบบเดิมที่คงไว้:
- ร้าน User 50 ชิ้น
- Full Outfit 20 + Items 30
- Backpack User 18
- GM Token ∞ / Backpack ∞
- Excalibur GM / ผีน้อย GM
- Student Fullscreen Session
- Daily Fullscreen Quest 60 นาที = 15 Token
- Ranking / PVP Ranking / PVP / Quest / Chat / Admin Usage Dashboard

Deploy: แตก GitHub ZIP แล้วอัปไฟล์ทั้งหมดไป Repository Root จากนั้นรอ GitHub Pages Success และ Ctrl+F5
