# V4.9.0 — PVP Ranked Battle / Code Combat

Firebase Project: `nr-game-code`

## ระบบต่อสู้
PVP ทุกแมตช์เป็น PVP Ranked Battle แยกจาก Ranking พิมพ์ Code เดิม

ตัวละครใน Arena:
- ใช้ Gender ของ User
- ใช้ Equipped Item จริงจาก Character
- Head / Face / Top / Shoes / Back / Hand / Aura / Pet
- Item เป็น Cosmetic ไม่เพิ่ม Damage เพื่อไม่ให้ Pay-to-Win

## Code Attack
- พิมพ์ถูกครบ 5 ตัวต่อเนื่อง → Basic Attack
- จบบรรทัด Code → Code Skill
- จบ Code โดยไม่ผิดเลย → Critical Attack
- พิมพ์ผิด → Combo กลับ 0
- HP Team A / Team B = 100
- HP เหลือ 0 → ชนะ Shot ด้วย KO
- จบ Code ก่อน → ชนะ Shot ด้วย CODE_FINISH
- 1 / 3 / 5 Shot ยังใช้ได้
- 2v2 Relay ยังใช้ได้

## Damage
Basic:
3 + Combo Bonus

Skill:
7 + Combo Bonus

Critical:
15 + Combo Bonus

ราคาไอเท็ม / Rarity ไม่เพิ่ม Damage

## PVP Ranking
Collection:
`pvp_results`

แยกจาก:
- Ranking Challenge
- Global Ranking
- Ranking สาขา/ห้อง

PVP Tier:
1. Rookie
2. Fighter
3. Gladiator
4. Champion
5. Warlord
6. Overlord

Rating เริ่มที่ 1000

น้ำหนักหลัก:
- Win / Loss เป็นตัวหลัก
- Accuracy
- Damage
- Max Combo
- WPM
- Win Streak เป็น Bonus

## Admin
เพิ่ม Tab:
`⚔️ PVP Ranking`

แสดง:
- PVP Tier
- Rating
- W/L
- Win Rate
- Damage
- Max Combo
- Accuracy

## Firestore
ต้อง Publish `firestore.rules` V4.9.0 เพราะเพิ่ม collection:
`pvp_results`

## หมายเหตุ Security
PVP บนชุดนี้ยังเป็น GitHub Pages + Firebase Client
จึงไม่ควรอ้างว่า cheat-proof 100%
ถ้าต้องการ PVP แข่งขันจริงที่ป้องกันการแก้ Client ควรย้าย Battle transaction / result verification ไป Cloud Functions หรือ backend
