# V4.14.1 — PVP Sync + Facing Stability Fix

Firebase Project: `nr-game-code`

## ปัญหาที่แก้

### 1. Countdown ฝั่งหนึ่งค้าง แต่อีกฝั่งเริ่มเล่น
V4.13.0 ใช้ `startedAt: serverTimestamp()` เป็นเวลาหลักของ Countdown

ปัญหา:
Firestore สามารถส่ง Snapshot ที่ `status = playing` มาก่อนที่ค่า Server Timestamp
จะ resolve ครบในแต่ละ Client ได้ ทำให้ Client หนึ่งเห็นเวลาเริ่มและอีก Client หนึ่งยังไม่มีเวลา
ระบบเดิมจึงมีสถานะ `SYNC` ที่มีโอกาสค้างได้

V4.14.1 เปลี่ยนเป็น:

1. `PVP_SYNC_VERSION = 4.13.1`
2. ผู้เล่นทุกคนต้อง `SYNC READY`
3. Host เริ่มเกมไม่ได้จนกว่าทุกคนจะ Ready
4. Host สร้าง `startToken` เพียงค่าเดียวใน Transaction
5. ทุก Client เริ่ม Countdown จาก Start Token เดียวกัน
6. Countdown ใช้ `performance.now()` ของ Browser
7. ไม่ใช้ `serverTimestamp()` เป็นตัวปลดล็อกช่องพิมพ์อีก
8. Snapshot ซ้ำจาก Firestore จะไม่ Reset Countdown
9. การสร้าง Attempt ถูกทำแบบ Non-blocking ไม่สามารถหน่วง Countdown ได้

ผล:
- ไม่มีสถานะ SYNC แบบไม่มีกำหนด
- ถ้าอีกเครื่องยังใช้ Cache เวอร์ชันเก่า Host จะยังเริ่มเกมไม่ได้
- ทั้งสองฝั่งต้องขึ้น `✅ SYNC READY` ก่อน

## 2. ตัวละครหันทางเดียวกัน

สาเหตุ V4.13.0:
- `.pvp-avatar-stack` ของ TEAM B ถูก Flip
- `.pvp-base-avatar` และ `.pvp-equip-layer` ถูก Flip ซ้ำอีกรอบ
- Flip 2 ครั้ง = กลับทิศเดิม

V4.14.1:
- TEAM A บังคับ `facing-right`
- TEAM B บังคับ `facing-left`
- Flip เฉพาะ Parent `.pvp-avatar-stack` เพียงครั้งเดียว
- Child Sprite / Skin / Weapon / Pet ไม่ Flip ซ้ำ
- รองรับ Desktop / Tablet / Mobile

## ก่อนทดสอบ
หลังอัป GitHub ให้ทั้งสองเครื่อง:
1. ปิดหน้าเกมเก่า
2. เปิดใหม่
3. `Ctrl + F5` บนคอม หรือ Clear/Reload หน้าเว็บบนมือถือ
4. ทั้งสองเครื่องต้องเป็น V4.14.1
5. เข้าห้อง PVP
6. รอจนทั้งสองช่องขึ้น `✅ SYNC READY`
7. Host จึงกด Start

## Firestore Rules
ไม่ต้องเพิ่ม Collection ใหม่ และ Rules เดิมของ V4.13.0 รองรับ Ready fields / startToken
ใน `pvp_rooms` อยู่แล้ว

## ระบบที่ยังคงเดิม
- Animated Skin 20 ชุด / 120 frames
- ร้าน / Inventory / Equipment
- PVP Ranked แยกจาก Ranking ปกติ
- PVP Attack / HP / Combo
- 1v1 / 2v2 Relay
- Token Wager
- Fullscreen User Session
- Daily Fullscreen Quest
- 2D Zone
- Admin Usage Dashboard
