# V4.14.1 — Stability Hardened

Firebase Project: `nr-game-code`

เวอร์ชันนี้ต่อจาก V4.14.0 โดยคง:
- ร้าน 50 ไอเท็ม หาง่ายทั้งหมด / ลดราคา 50%
- Ranking Formula และ Ranking Guide
- Ranking Realtime
- PVP Sync V4.13.1
- Animated Skin
- Fullscreen User Session
- Daily Fullscreen Quest
- 2D Zone
- Admin Usage Dashboard
- GM / Inventory / Quest / Official

## Stability Hardening ที่เพิ่ม

### Auth / Register
- ป้องกัน Login route ซ้ำระหว่าง Submit กับ `onAuthStateChanged`
- Registration ไม่ให้ Auth callback แข่งกับการสร้าง `users/{uid}`
- Profile write มี Retry + Verify
- Profile bootstrap รอได้สูงสุดประมาณ 5 วินาที
- Login/Register ป้องกัน Double Submit

### Profile
- `ensureProfileDefaults()` เป็น Single Flight
- ถ้าหลายระบบขอโหลด Profile พร้อมกัน จะใช้ Promise เดียว
- Retry เฉพาะ error ชั่วคราว

### Stage Attempts
- เปลี่ยนการสร้าง Attempt จาก `addDoc()` เป็น Document ID ที่กำหนดก่อน `setDoc()`
- ถ้า Network retry จะเขียน Attempt เดิม ไม่สร้าง Attempt ซ้ำ
- Attempt update สำคัญมี Retry

### Token Reward
เพิ่ม Collection:
`reward_claims/{attemptId}`

หนึ่ง Attempt สร้าง Reward Claim ได้เพียงครั้งเดียว
ดังนั้น:
- Retry การบันทึกไม่แจก Token ซ้ำ
- Double event ไม่แจก Token ซ้ำ
- Token + Progress + Reward Claim อยู่ใน Firestore Transaction เดียว

**ต้อง Publish `firestore.rules` V4.14.1**

### Ranking
- การคำนวณ Rank ของ User เดียวกันเป็น Single Flight
- Retry เมื่อ Firestore ขัดข้องชั่วคราว
- Realtime Ranking เดิมยังทำงานผ่าน `onSnapshot()`

### Shop / Inventory
- Redeem / Sell / Equip มี Operation Lock รายไอเท็ม
- กดปุ่มรัวไม่ยิงธุรกรรมซ้ำซ้อน

### 2D Zone
- Position writes เปลี่ยนเป็น Coalesced Writer
- ถ้าตำแหน่งใหม่เข้ามาขณะ write เดิมยังไม่จบ จะเก็บ Pending แล้วส่งค่าล่าสุดต่อ
- ไม่สร้าง Firestore write ซ้อนหลายชุด
- Chat มี Operation Lock + Retry
- Buy / Equip / Sell มี Lock
- Heartbeat ป้องกันรอบใหม่ซ้อนรอบเดิม
- Leave Zone เป็น Single Flight
- แก้ Cache Query ของ Zone จากเลขเวอร์ชันเก่าเป็น `APP_VERSION`

### Network Status
User / 2D Zone / Admin มี Badge:
- ONLINE
- OFFLINE · รอเชื่อมต่อ

## การทดสอบก่อนเปิดห้องเรียน
1. Register 2 บัญชี
2. Login/Logout ซ้ำ 5 รอบ
3. เล่น Classic + Ranking อย่างละ 3 ด่าน
4. กด Finish/ปุ่มร้านเร็ว ๆ เพื่อยืนยันว่า Token ไม่ซ้ำ
5. PVP สองเครื่อง 5 รอบ
6. เดิน 2D Zone สองเครื่องพร้อมกัน 5 นาที
7. ปิด Wi-Fi 10–20 วินาที แล้วเปิดกลับ
8. ตรวจ Ranking อีกเครื่องว่าอัปเดตหลังจบด่าน
9. ตรวจ Admin Usage Dashboard

## Deploy
1. แตก ZIP
2. อัปไฟล์ทั้งหมดไป Repository Root
3. Publish `firestore.rules`
4. รอ GitHub Pages Success
5. ทุกเครื่องกด Ctrl+F5 / Reload แบบไม่ใช้ Cache
