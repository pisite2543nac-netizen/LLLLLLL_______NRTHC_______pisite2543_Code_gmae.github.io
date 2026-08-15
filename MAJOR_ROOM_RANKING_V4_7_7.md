# V4.7.9 — Ranking สาขาวิชา + ชั้น/ห้อง

Firebase Project:
`nr-game-code`

Admin UID:
`Y2uDV9yAQ6Mpu2qwQH9cG4ko6ZQ2`

## Ranking ฝั่ง User

มี 2 มุมมอง:

1. `แรงค์รวมทั้งหมด`
   - เปรียบเทียบผู้เล่นทุกคน

2. `Ranking สาขาวิชาและห้อง`
   - ต้องเป็นสาขาวิชาเดียวกัน
   - ต้องเป็นชั้น/ห้องเดียวกัน

ตัวอย่าง:
`เทคโนโลยีสารสนเทศ (ทส.) · ห้อง ปวช.2/1`

ผู้เรียนจาก:
- เทคโนโลยีธุรกิจดิจิทัล
- คอมพิวเตอร์ธุรกิจ
- ห้อง ปวช.2/2
- ปวส.
จะไม่ปนใน Ranking กลุ่มดังกล่าว

## Fields ที่ใช้
- major
- majorCode
- educationLevel
- classroom
- classKey

## Deploy
1. อัป ZIP ไป GitHub Root
2. ใช้ Firebase `nr-game-code`
3. Publish `firestore.rules` ในชุดนี้
4. รอ GitHub Pages Success
5. เปิด Incognito / Ctrl+F5
