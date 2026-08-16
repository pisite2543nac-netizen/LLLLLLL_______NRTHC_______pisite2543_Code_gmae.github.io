# V4.12.0 — Usage Dashboard + Normal GM

Firebase Project: `nr-game-code`

## Admin Usage Dashboard
เพิ่ม Tab `📊 การใช้งาน`

แสดง:
- User ลงทะเบียนทั้งหมด
- Active User วันนี้
- อัตรา Active วันนี้ (%)
- ชั่วโมงใช้งานรวมวันนี้
- ชั่วโมงรวม 7 วัน / 30 วัน
- จำนวน Session
- เวลาเฉลี่ยต่อ Session
- กราฟ 14 วันล่าสุด
- Top 10 User ที่ใช้งานสูงสุด
- ตารางสรุป User ทุกคน
- ค้นหา User
- ตัวกรอง 7 / 30 / 90 วัน / ทั้งหมด
- รายละเอียด User รายวัน: วันที่, Active Time, Session, ครั้งแรก, ล่าสุด, หน้าที่ใช้งาน

การนับเวลา:
- นับเมื่อหน้าเว็บอยู่ Visible
- User มี interaction ล่าสุดไม่เกิน 5 นาที
- ซ่อนแท็บจะหยุดนับ
- Sync ประมาณทุก 30 วินาที
- ข้อมูล Usage จะเริ่มสะสมหลัง Deploy V4.12.0

Collections:
- `usage_daily`
- `usage_sessions`

## GM
GM ใช้โมเดลตัวละคร User ปกติแล้ว
- Token = ∞
- Backpack = ∞
- ร้าน Token Shop ใช้ได้โดยไม่เสีย Token
- GM สามารถรับไอเท็ม User ปกติเข้ากระเป๋าได้ไม่จำกัด
- Equip / Unequip เหมือน User
- GM ไม่มี Rank ปลอมบนตัวละคร

GM profile:
`gm_profiles/{ADMIN_UID}`

GM Exclusive ในกระเป๋าเริ่มต้น:
1. `ดาบ Excalibur · GM` — HAND
2. `ผีน้อย GM` — PET

สองชิ้นนี้:
- ไม่มีขายใน Token Shop
- User ปกติไม่สามารถสวมผ่าน Firestore Rules
- อยู่ในกระเป๋า GM สำหรับสวม/ถอดเอง

## Deploy
ต้อง Publish `firestore.rules` V4.12.0 เพราะเพิ่ม:
- `usage_daily`
- `usage_sessions`
- `gm_profiles`
- Rule ป้องกัน GM Exclusive สำหรับ User

GitHub:
1. แตก ZIP ก่อน
2. อัปไฟล์ข้างในทั้งหมดไป Repository Root
3. รอ GitHub Pages Success
4. Ctrl+F5
