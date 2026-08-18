# V4.14.1 — Easy Shop 50% + Transparent Learning Ranking

Firebase Project: `nr-game-code`

## Shop
- User catalog remains 50 items.
- Every User item is now `EASY / หาง่าย`.
- Every User item price is exactly 50% of its V4.13.1 price.
- Original price is kept as `originalCost` only for UI display.
- Current price is the price actually charged by Token transaction.
- Sell back remains 30% of the NEW discounted price.
- Existing owned items and equipment IDs are unchanged; no inventory migration is required.
- GM exclusive items remain GM-only and cost 0.

## Learning Ranking V4.14
Rating is 0–100 and is different from leaderboard position (#).

Formula:
- Speed 35%
- Accuracy 35%
- Mistake Control 20%
- Highest Completed Stage Progress 10%

Speed targets:
- Easy 28 WPM
- Medium 42 WPM
- Hard 58 WPM

Mistakes:
- Mistake Control starts at 100.
- Each wrong key subtracts 10 from that component, minimum 0.

Stage Progress:
- `highest completed stage / 50 × 100`
- This component is worth 10% of Rating.
- Each new highest Stage therefore contributes up to 0.2 Rating point before performance changes are considered.

Timeout:
- Timeout attempts are now REALLY included in User and Admin ranking calculations.
- Speed / Accuracy / Mistake components from a Timeout count at 65%.
- A Timeout does not increase highest completed Stage.

Why Rating can decrease:
- The season uses all Ranking attempts in the active season/reset window.
- A new result below the current season performance average can pull the average down.
- Timeout can also lower the average.

Why a farther Stage may not move leaderboard position:
- Rating and leaderboard position are different.
- Stage now helps Rating, but it is only 10%; performance is 90%.
- A higher Stage can be partly offset by lower WPM/Accuracy or more mistakes.
- Even if Rating increases, leaderboard # changes only after passing another player's Rating.

Visibility fix:
- Rating is now stored/displayed at 1 decimal place, so small changes no longer disappear behind integer rounding.
- The User page shows formula, components, latest delta, change reason, attempts, timeout count and next tier.

Tiers:
- Bronze 0+
- Silver 35+
- Gold 55+
- Platinum 70+
- Diamond 82+
- Master 92+

## PVP Ranking (separate)
PVP rating remains separate from Learning Rating:
- Start 1000
- Win: +24 base + small performance/streak bonuses
- Loss: -16 base + 25% of performance bonus
- Uses Accuracy, Damage, Combo, WPM and Win Streak
- PVP does not use Stage 1–50

## Stability retained
- V4.13.1 PVP Ready Handshake / Start Token / countdown fix
- Forced PVP facing directions
- Animated Skin Engine
- 2D Zone
- Fullscreen User Session
- Daily Fullscreen Quest
- Admin Usage Dashboard
- Firebase project / rules remain compatible; no new Firestore collection is required.
