# FULL CODE V4.12.0 — STUDENT FULLSCREEN SESSION


## index.html

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1">
  <title>ระบบเกมพิมพ์ Code | วิทยาลัยเทคนิคนางรอง</title>
  <link rel="stylesheet" href="./style.css?v=4.12.0">
</head>
<body>
<header class="site-header">
  <div class="wrap header-inner">
    <div>
      <div class="kicker">NANGRONG TECHNICAL COLLEGE</div>
      <h1>ระบบเกมพิมพ์ Code</h1>
      <p>วิทยาลัยเทคนิคนางรอง</p>
    </div>
    <a class="admin-link" href="admin.html">Admin</a>
  </div>
</header>

<main class="wrap">
  <section id="authScreen" class="card account-card">
    <div class="creator-banner">ผู้จัดทำ: นายพิสิษฐ์ หุนตระนี ครูพิเศษสอน</div>

    <div class="auth-tabs">
      <button id="loginTab" class="auth-tab active" type="button">เข้าสู่ระบบ</button>
      <button id="registerTab" class="auth-tab" type="button">ลงทะเบียนผู้ใช้ใหม่</button>
    </div>

    <section id="loginPanel" class="auth-panel">
      <span class="section-kicker">STUDENT LOGIN</span>
      <h2>เข้าสู่ระบบผู้เล่น</h2>
      <p class="muted-line">ใช้เลขประจำตัวนักศึกษาและรหัสผ่านที่สร้างไว้ตอนลงทะเบียน</p>

      <form id="loginForm" class="form-grid">
        <label>
          <span>เลขประจำตัวนักศึกษา</span>
          <input id="loginStudentId" inputmode="numeric" pattern="[0-9]{1,15}" minlength="1" maxlength="15" required placeholder="เลขประจำตัวนักศึกษา 1–15 หลัก">
        </label>
        <label>
          <span>รหัสผ่าน</span>
          <div class="password-row">
            <input id="loginPassword" type="password" required placeholder="กรอกรหัสผ่าน">
            <button class="show-password" type="button" data-toggle-password="loginPassword">แสดง</button>
          </div>
        </label>
        <div class="full form-footer">
          <span id="loginMessage"></span>
          <button class="btn primary" type="submit">เข้าสู่ระบบ</button>
        </div>
      </form>
    </section>

    <section id="registerPanel" class="auth-panel hidden">
      <span class="section-kicker">NEW STUDENT ACCOUNT</span>
      <h2>ลงทะเบียนผู้เล่น</h2>
      <p class="muted-line">ลงทะเบียนครั้งแรกเพียงครั้งเดียว จากนั้นใช้เลขนักศึกษาและรหัสผ่าน Login ได้</p>

      <form id="registerForm" class="form-grid">
        <label>
          <span>เลขประจำตัวนักศึกษา</span>
          <input id="studentId" inputmode="numeric" pattern="[0-9]{1,15}" minlength="1" maxlength="15" required placeholder="เลขประจำตัวนักศึกษา สูงสุด 15 หลัก เช่น 11111111">
          <small id="studentId15Hint" class="academic-code-preview">กรอกตัวเลขเท่านั้น สูงสุด 15 หลัก</small>
        </label>

        <label>
          <span>ชื่อ-นามสกุล</span>
          <input id="fullName" required placeholder="ชื่อ มิงกาลาบา เมียงปร่ะ">
        </label>

        <label>
          <span>ระดับชั้น</span>
          <select id="educationLevel" required>
            <option value="">-- เลือกระดับชั้น --</option>
            <option>ปวช.1</option>
            <option>ปวช.2</option>
            <option>ปวช.3</option>
            <option>ปวส.1</option>
            <option>ปวส.2</option>
          </select>
        </label>

        <label>
          <span>ห้อง / กลุ่ม</span>
          <select id="classroom" required>
            <option value="">-- เลือกห้อง --</option>
            <option>/1</option><option>/2</option><option>/3</option>
            <option>/4</option><option>/5</option><option>/6</option>
          </select>
        </label>
        <label>
          <span>แผนกวิชา</span>
          <select id="department" required>
            <option value="">-- เลือกแผนก --</option>
            <option value="คอมพิวเตอร์">คอมพิวเตอร์</option>
            <option value="อิเล็กทรอนิค">อิเล็กทรอนิค</option>
          </select>
        </label>

        <label>
          <span>สาขาวิชา</span>
          <select id="major" required>
            <option value="">-- เลือกสาขาวิชา --</option>
            <option value="เทคโนโลยีสารสนเทศ" data-code="ทส.">เทคโนโลยีสารสนเทศ (ทส.)</option>
            <option value="เทคโนโลยีธุรกิจดิจิทัล" data-code="ทธ.">เทคโนโลยีธุรกิจดิจิทัล (ทธ.)</option>
            <option value="คอมพิวเตอร์ธุรกิจ" data-code="คธ.">คอมพิวเตอร์ธุรกิจ (คธ.)</option>
          </select>
          <small id="majorCodePreview" class="academic-code-preview">รหัสสาขา: -</small>
        </label>

<label>
          <span>สร้างรหัสผ่าน</span>
          <div class="password-row">
            <input id="password" type="password" minlength="6" required placeholder="อย่างน้อย 6 ตัวอักษร">
            <button class="show-password" type="button" data-toggle-password="password">แสดง</button>
          </div>
        </label>

        <label>
          <span>ยืนยันรหัสผ่าน</span>
          <div class="password-row">
            <input id="confirmPassword" type="password" minlength="6" required placeholder="กรอกรหัสผ่านอีกครั้ง">
            <button class="show-password" type="button" data-toggle-password="confirmPassword">แสดง</button>
          </div>
        </label>

        <label class="full consent">
          <input id="acceptRules" type="checkbox">
          <span>ข้าพเจ้ายืนยันว่าข้อมูลถูกต้อง และยอมรับคำชี้แจงการใช้งานระบบ</span>
        </label>

        <div class="full form-footer">
          <span id="registerMessage">เมื่อลงทะเบียนสำเร็จ ชื่อจะปรากฏในหน้า Admin แบบเรียลไทม์</span>
          <button id="registerButton" class="btn primary" type="submit" disabled>ลงทะเบียนและสร้างบัญชี</button>
        </div>
      </form>
    </section>
  </section>

  <section id="userPortal" class="hidden">
    <div class="user-portal-head card">
      <div>
        <span class="section-kicker">CODE LEARNING HUB</span>
        <h2>เลือกภาษาและโหมดการเรียนรู้</h2>
        <p id="portalWelcome">-</p>
      </div>
      <div class="portal-head-actions">
        <button id="openCharacterProfileButton" class="btn character-profile-entry" type="button">🧍 ดูตัวละคร</button>
        <a href="zone.html" class="btn zone-entry-main">🌙 2D Zone</a>
        <button id="logoutUserButton" class="btn ghost">ออกจากระบบ</button>
      </div>
    </div>

    <div class="portal-stat-grid">
      <div class="card portal-stat"><span>เล่นทั้งหมด</span><strong id="userTotalAttempts">0</strong></div>
      <div class="card portal-stat"><span>เล่นสำเร็จ</span><strong id="userCompleted">0</strong></div>
      <div class="card portal-stat"><span>คะแนนสูงสุด</span><strong id="userBestScore">0</strong></div>
      <div class="card portal-stat"><span>WPM สูงสุด</span><strong id="userBestWpm">0</strong></div>
      <div class="card portal-stat points-stat"><span>Token สะสม</span><strong id="userTokens">0</strong><small>TOKENS</small></div>
      <div class="card portal-stat rank-stat"><span>Rank Season</span><strong id="userRank">-</strong><small id="rankSeasonLabel">60 DAYS</small></div>
    </div>

    <section id="rankResetNotice" class="card rank-reset-user-notice hidden">
      <div class="rank-reset-user-icon">🏆</div>
      <div>
        <span class="section-kicker">RANK RESET NOTICE</span>
        <h3 id="rankResetNoticeTitle">กำหนดการรีแรงค์</h3>
        <p id="rankResetNoticeText">-</p>
        <small id="rankResetNoticeCountdown">-</small>
      </div>
    </section>

    <section id="mobileZoneOnlyNotice" class="card hidden mobile-zone-only-card">
      <div class="mobile-zone-only-badge">📱 MOBILE / TABLET MODE</div>
      <h3>มือถือและแท็บเล็ตเข้าใช้งานเฉพาะ 2D Zone</h3>
      <p>มือถือและแท็บเล็ตจะเข้าสู่ 2D Zone หลัง Login โดยอัตโนมัติ เพื่อให้ใช้งานได้ง่ายและเสถียร ส่วนคอมพิวเตอร์ยังใช้ระบบเรียน พิมพ์โค้ด PVP โหมดทางการ Ranking และ Admin ได้ครบ</p>
      <div class="mobile-zone-only-actions">
        <a id="mobileZoneOnlyEnter" href="zone.html" class="btn primary">🌙 เข้า 2D Zone</a>
      </div>
      <small>บน 2D Zone: Admin แสดงชื่อเหนือหัวเป็น GM และผู้เล่นทั่วไปแสดงเป็นรหัสนักศึกษา</small>
    </section>


      <section id="dailyFullscreenQuestCard" class="panel daily-fullscreen-card">
        <div class="daily-fullscreen-head">
          <div>
            <span class="section-kicker">DAILY QUEST</span>
            <h2>🖥️ Fullscreen 60 นาที</h2>
            <p>อยู่ในโหมดเต็มหน้าจอสะสมให้ครบ 1 ชั่วโมงภายในวันนี้ รับ <strong>15 Token</strong></p>
          </div>
          <span id="dailyFullscreenStatus" class="daily-quest-status">0 / 60 นาที</span>
        </div>
        <div class="daily-fullscreen-progress"><i id="dailyFullscreenBar"></i></div>
        <div class="daily-fullscreen-meta">
          <span id="dailyFullscreenTimer">00:00:00 / 01:00:00</span>
          <span id="dailyFullscreenActiveState">รอเข้า Fullscreen</span>
        </div>
        <div class="daily-fullscreen-actions">
          <button id="enterDailyFullscreen" class="btn secondary" type="button">เปิด Fullscreen</button>
          <span id="dailyFullscreenRewardText">🎁 รางวัลวันนี้: 15 Token</span>
        </div>
      </section>

    <section id="languageSection" class="card">
      <div class="section-title">
        <div>
          <span class="section-kicker">STEP 1 · LANGUAGE</span>
          <h2>เลือกภาษาเขียนโปรแกรม</h2>
          <p class="muted-line">แต่ละภาษามีบทเรียน คำอธิบาย ตัวอย่าง Preview และผลลัพธ์แยกจากกัน</p>
        </div>
      </div>
      <div id="languageCards" class="language-grid"></div>
    </section>


    <section id="playStyleSection" class="card hidden ranked-style-card">
      <div class="section-title">
        <div>
          <span class="section-kicker">STEP 2 · PLAY STYLE</span>
          <h2>เลือกวิธีเล่น</h2>
          <p class="muted-line">เลือกฝึกแบบธรรมดาตาม Stage หรือเข้าสู่ Ranking Challenge ที่มีเวลาจำกัดทุกด่าน</p>
        </div>
      </div>
      <div class="play-style-grid">
        <button id="chooseClassicStyle" class="play-style-choice" type="button">
          <span class="play-style-icon">⌨️</span>
          <div>
            <strong>เขียน Code แบบธรรมดา</strong>
            <p>ฝึกตาม Stage เลือกระดับและด่านได้ตามที่ปลดล็อก จับเวลาเพื่อดูสถิติแต่ไม่มีเวลาบังคับ</p>
            <small>CLASSIC · PRACTICE · STEP BY STEP</small>
          </div>
        </button>
        <button id="chooseRankedStyle" class="play-style-choice ranked" type="button">
          <span class="play-style-icon">🏆</span>
          <div>
            <strong>เล่นระบบ Ranking</strong>
            <p>เล่นต่อเนื่องทีละ Stage มีเวลาจำกัดทุกด่าน ความยากเพิ่มขึ้น และใช้ผลเฉพาะโหมดนี้คำนวณ Rank</p>
            <small>40% SPEED · 40% ACCURACY · 20% LOW MISTAKES · +15 TOKEN</small>
          </div>
        </button>
      </div>
    </section>

    <section id="learningSection" class="card hidden">
      <div class="section-title">
        <div>
          <span class="section-kicker">LEARN BEFORE PLAY</span>
          <h2 id="learningTitle">บทเรียน</h2>
          <p id="learningTagline" class="muted-line"></p>
        </div>
      </div>

      <div id="lessonTabs" class="lesson-tabs"></div>
      <div id="stageSelector" class="stage-selector"></div>
      <div id="lessonDetail"></div>
    </section>

    <section id="modeSection" class="card hidden">
      <div class="section-title">
        <div>
          <span class="section-kicker">โหมดเพิ่มเติม</span>
          <h2>Official / PVP</h2>
        </div>
      </div>
      <div class="mode-card-grid two-col">
<button class="mode-choice official-mode" data-game-mode="official">
          <span class="mode-choice-icon">📋</span>
          <strong>ทางการ</strong>
          <small>30 ด่านสำหรับงานครู คะแนนรวมเต็ม 40 คะแนน ต้องกดส่งงานเมื่อทำเสร็จ</small>
          <div><span>30 Stages</span><span>40 Scores</span><span>Teacher</span></div>
        </button>
        <button class="mode-choice" data-game-mode="pvp">
          <span class="mode-choice-icon">⚔️</span>
          <strong>PVP Realtime</strong>
          <small>สร้างหรือเข้าห้อง แข่งพิมพ์ Code เดียวกัน 2 คน และดู Progress แบบเรียลไทม์</small>
          <div><span>2 Players</span><span>Firebase</span><span>Realtime</span></div>
        </button>
      </div>
    </section>

    <section id="classicConfig" class="card hidden">
      <div class="section-title">
        <div>
          <span class="section-kicker">CLASSIC SOLO</span>
          <h2>เลือกระดับความยาก</h2>
          <p class="muted-line">ระบบจะเลือกโจทย์ของภาษาที่เลือกตามระดับ และเริ่มจับเวลาเมื่อเริ่มพิมพ์</p>
        </div>
      </div>
      <div id="difficultyCards" class="difficulty-grid"></div>
      <div class="stage-panel">
        <h3>เลือกด่าน</h3>
        <div id="classicStageGrid" class="classic-stage-grid"></div>
      </div>
      <div class="config-footer">
        <div id="classicLessonSummary" class="selected-summary">ยังไม่ได้เลือกภาษา/ระดับ</div>
        <button id="startClassicButton" class="btn primary" disabled>เริ่ม Classic</button>
      </div>
    </section>



    <section id="rankedConfig" class="card hidden ranked-config-card">
      <div class="section-title">
        <div>
          <span class="section-kicker">RANKING CHALLENGE</span>
          <h2>🏆 Ranking Run</h2>
          <p class="muted-line">ทุก Stage มีเวลาจำกัด เล่นผ่านแล้วปลดล็อกด่านถัดไปอัตโนมัติ และรับ Token เพิ่มจากรางวัล Classic อีก 15 Token</p>
        </div>
      </div>
      <div class="ranked-rule-grid">
        <div><span>Stage ปัจจุบัน</span><strong id="rankedStageLabel">01</strong></div>
        <div><span>ความยาก</span><strong id="rankedDifficultyLabel">Easy</strong></div>
        <div><span>เวลาจำกัด</span><strong id="rankedTimeLimitLabel">--</strong></div>
        <div><span>โบนัส</span><strong>+15 Token</strong></div>
      </div>
      <div class="ranked-score-rule">
        <span>🏃 ความเร็ว 40%</span><span>🎯 ความถูกต้อง 40%</span><span>✅ ผิดน้อย 20%</span>
      </div>
      <div class="ranked-progress-box">
        <div>
          <small>RANKED PROGRESS</small>
          <strong id="rankedProgressText">Stage 1 / 50</strong>
        </div>
        <div class="ranked-progress-track"><i id="rankedProgressBar"></i></div>
      </div>
      <div class="config-footer">
        <div id="rankedLessonSummary" class="selected-summary">เลือกภาษาเพื่อเริ่ม Ranking</div>
        <button id="startRankedButton" class="btn primary" type="button">เริ่ม Ranking Stage</button>
      </div>
    </section>

    <section id="officialConfig" class="card hidden">
      <div class="section-title">
        <div>
          <span class="section-kicker">OFFICIAL · TEACHER ASSIGNMENT</span>
          <h2>โหมดทางการ 30 ด่าน</h2>
          <p class="muted-line">คะแนนเต็มรวม 40 คะแนน คะแนนจะไม่แสดงในหน้า User และจะถูกส่งไปหน้า Admin เมื่อกด “ส่งงานทางการ” เท่านั้น</p>
        </div>
      </div>

      <div class="official-summary-grid">
        <div><span>จำนวนด่าน</span><strong>30</strong></div>
        <div><span>คะแนนเต็ม</span><strong>40</strong></div>
        <div><span>ทำแล้ว</span><strong id="officialCompletedCount">0</strong></div>
        <div><span>สถานะ</span><strong id="officialSubmitStatus">ยังไม่ส่ง</strong></div>
      </div>

      <div id="officialStageGrid" class="official-stage-grid"></div>

      <div class="official-actions">
        <button id="submitOfficialButton" class="btn primary" disabled>ส่งงานทางการให้ครู</button>
        <small>ปุ่มจะเปิดเมื่อทำครบ 30 ด่าน และใช้ส่งคะแนนเข้าระบบ Admin</small>
      </div>
    </section>

    <section id="pvpConfig" class="card hidden pvp-v44-config">
      <div class="section-title">
        <div>
          <span class="section-kicker">PVP RANKED BATTLE · CHARACTER COMBAT</span>
          <h2>⚔️ PVP Battle Arena · แรงค์ต่อสู้</h2>
          <p class="muted-line">พิมพ์ Code เพื่อโจมตีคู่ต่อสู้ด้วยตัวละครและไอเท็มที่ User สวมอยู่จริง ทุกแมตช์นับ PVP Rank แยกจาก Ranking พิมพ์ Code ปกติ</p>
        </div>
      </div>


      <div class="pvp-rank-panel">
        <div class="pvp-rank-self">
          <span>PVP BATTLE RANK</span>
          <div class="pvp-rank-main">
            <strong id="pvpRankTier">🛡️ Rookie</strong>
            <b id="pvpRankRating">1000</b>
            <small>RATING</small>
          </div>
          <div class="pvp-rank-self-stats">
            <div><span>WIN / LOSS</span><strong id="pvpRankWL">0 / 0</strong></div>
            <div><span>WIN RATE</span><strong id="pvpRankWinRate">0%</strong></div>
            <div><span>BEST STREAK</span><strong id="pvpRankStreak">0</strong></div>
          </div>
        </div>
        <div class="pvp-rank-board">
          <div class="pvp-rank-board-head"><strong>🏆 PVP Leaderboard</strong><small>แยกจาก Ranking อื่นทั้งหมด</small></div>
          <div id="pvpLeaderboardList" class="pvp-leaderboard-list"><div class="empty-card">ยังไม่มีผล PVP Ranked</div></div>
        </div>
      </div>

      <div class="pvp-rule-grid">
        <label><span>รูปแบบทีม</span><select id="pvpTeamMode"><option value="1v1">1 VS 1</option><option value="2v2">2 VS 2 · Relay สลับผู้พิมพ์</option></select></label>
        <label><span>จำนวน Shot</span><select id="pvpShotCount"><option value="1">1 Shot</option><option value="3" selected>3 Shot</option><option value="5">5 Shot</option></select></label>
        <label><span>วาง Token</span><select id="pvpWager"><option value="0">ไม่วาง Token</option><option value="5">5 Token</option><option value="10">10 Token</option><option value="20">20 Token</option><option value="30">30 Token</option><option value="40">40 Token</option><option value="50">50 Token</option></select></label>
      </div>
      <div class="pvp-wager-note">ค่าสร้างห้อง 6 Token (ไม่คืน) · Token เดิมพันจะล็อกเมื่อสมาชิกครบ · ทีมชนะรับ Pot แบ่งเท่ากัน</div>

      <div class="pvp-match-actions three-actions">
        <button id="createRoomButton" class="pvp-match-card create" type="button"><span class="pvp-match-icon">➕</span><strong>สร้างห้อง</strong><small>สุ่ม Room Code ใหม่จากระบบ · ค่าสร้าง 6 Token</small><em>6 TOKEN · GENERATE CODE</em></button>
        <button id="refreshRoomsButton" class="pvp-match-card find" type="button"><span class="pvp-match-icon">📋</span><strong>เลือกห้อง</strong><small>ดูห้องที่กำลังรอทั้งหมด</small><em>MULTI ROOM</em></button>
        <div class="pvp-code-join-card"><span>เข้าด้วย Room Code</span><div><input id="joinRoomCodeInput" maxlength="6" autocomplete="off" placeholder="ABC234"><button id="joinRoomCodeButton" class="btn secondary" type="button">เข้าห้อง</button></div><small>Code ต้องเป็น Code ที่ระบบสร้างเท่านั้น</small></div>
      </div>

      <div id="matchmakingStatus" class="matchmaking-status"><span class="matchmaking-dot"></span><strong id="matchmakingStatusText">พร้อมใช้งาน</strong><small id="matchmakingStatusDetail">ตั้งค่ากติกา แล้วสร้างหรือเลือกห้อง</small></div>

      <div class="pvp-room-browser">
        <div class="pvp-room-browser-head"><div><strong>ห้อง PVP ที่กำลังรอ</strong><small>หลายห้องสามารถเล่นพร้อมกันได้</small></div><span id="availableRoomCount">0 ห้อง</span></div>
        <div id="availablePvpRooms" class="available-pvp-rooms"><div class="empty-card">กำลังโหลดห้อง...</div></div>
      </div>

      <div id="pvpLobby" class="pvp-lobby pvp-lobby-v44 hidden">
        <div class="room-code-card"><span>ROOM CODE · GENERATED</span><strong id="roomCodeLabel">------</strong><small id="pvpLobbyRule">-</small></div>
        <div id="pvpPlayersGrid" class="pvp-players-grid"></div>
        <div class="pvp-lobby-score"><span>สถานะ</span><strong id="pvpStatus">WAITING</strong><small id="pvpLobbyHint">กำลังรอผู้เล่น...</small></div>
      </div>
      <div class="pvp-lobby-actions"><button id="startPvpButton" class="btn primary hidden" type="button">เริ่มการแข่งขัน</button><button id="leaveLobbyButton" class="btn ghost hidden" type="button">ออกจากห้อง</button></div>
    </section>

    <section class="social-hub-grid">
      <article class="card community-card">
        <div class="section-title compact">
          <div>
            <span class="section-kicker">PLAYER COMMUNITY</span>
            <h2>ผู้เล่นในระบบ</h2>
            <p class="muted-line">ดูผู้เล่นคนอื่น พร้อมสถานะ Online และ Rank ปัจจุบัน</p>
          </div>
          <div class="online-count-pill"><span class="online-dot"></span><strong id="onlinePlayerCount">0</strong> ONLINE</div>
        </div>
        <div id="communityPlayersList" class="community-players-list">
          <div class="empty-card">กำลังโหลดรายชื่อผู้เล่น...</div>
        </div>
      </article>

      <article class="card leaderboard-card ranking-dual-card">
        <div class="section-title compact">
          <div>
            <span class="section-kicker">DUAL RANKING · 60 DAY SEASON</span>
            <h2>Ranking รวม / Ranking สาขาวิชาและห้อง</h2>
            <p class="muted-line">แรงค์รวมใช้ผู้เล่นทุกคน ส่วนแรงค์สาขา/ห้องจะเทียบเฉพาะผู้เรียนสาขาวิชาเดียวกันและชั้น/ห้องเดียวกัน</p>
          </div>
          <div id="leaderboardSeason" class="season-chip">SEASON</div>
        </div>
        <div class="ranking-mode-switch">
          <button id="rankingModeOverall" class="ranking-mode-btn active" type="button">🌐 แรงค์รวมทั้งหมด</button>
          <button id="rankingModeClass" class="ranking-mode-btn" type="button">🏫 <span id="classRankingLabel">สาขาวิชา / ห้องของฉัน</span></button>
        </div>
        <div id="topRankingList" class="top-ranking-list"></div>
        <div id="academicRoomRankingScope" class="academic-room-ranking-scope hidden">
          <span>กลุ่มจัดอันดับ</span>
          <strong id="academicRoomRankingTitle">สาขาวิชา / ห้องของฉัน</strong>
          <small id="academicRoomRankingMeta">ใช้เฉพาะผู้เรียนสาขาวิชาเดียวกันและห้องเดียวกัน</small>
        </div>
        <div id="classRankingList" class="top-ranking-list hidden"></div>
        <div class="rank-shield-legend" aria-label="ระดับแรงค์">
          <div><span class="rank-shield rank-bronze small"><span class="rank-shield-letter">B</span></span><b>Bronze</b></div>
          <div><span class="rank-shield rank-silver small"><span class="rank-shield-letter">S</span></span><b>Silver</b></div>
          <div><span class="rank-shield rank-gold small"><span class="rank-shield-letter">G</span></span><b>Gold</b></div>
          <div><span class="rank-shield rank-platinum small"><span class="rank-shield-letter">P</span></span><b>Platinum</b></div>
          <div><span class="rank-shield rank-diamond small"><span class="rank-shield-letter">D</span></span><b>Diamond</b></div>
          <div><span class="rank-shield rank-master small"><span class="rank-shield-letter">M</span></span><b>Master</b></div>
        </div>
      </article>
    </section>

    <section class="card zone-entry-card">
      <div class="zone-entry-copy">
        <span class="section-kicker">2D SOCIAL ZONE</span>
        <h2>พบปะผู้เล่นใน 2D Zone</h2>
        <p>เดินด้วย WASD หรือปุ่มลูกศร พบตัวละคร User คนอื่นแบบ Realtime และเห็นชื่อกับโล่ Rank เหนือตัวละคร</p>
        <div class="zone-feature-pills">
          <span>Realtime Players</span><span>Rank Shield</span><span>WASD</span><span>Character Profile</span>
        </div>
      </div>
      <div class="zone-entry-actions">
        <div class="zone-preview-mini"><span class="mini-avatar a">A</span><span class="mini-avatar b">B</span><span class="mini-avatar c">C</span></div>
        <a href="zone.html" class="btn primary zone-enter-btn">เข้า 2D Zone →</a>
      </div>
    </section>

    <section class="card character-placeholder">
      <div>
        <span class="section-kicker">CHARACTER & 2D ZONE · READY FOR NEXT PHASE</span>
        <h2>ระบบตัวละครของ User เตรียมโครงสร้างไว้แล้ว</h2>
        <p>บัญชีแต่ละ User มีข้อมูล avatar, outfit, inventory และตำแหน่ง Zone รองรับการสร้างพื้นที่ 2D ที่ผู้เล่นพบกันและโชว์ตัวละครแบบ Realtime ในรอบถัดไป</p>
      </div>
      <div class="character-silhouette">🧍</div>
    </section>

    <section class="card">
      <div class="section-title">
        <div><span class="section-kicker">YOUR HISTORY</span><h2>ประวัติการเล่นล่าสุด</h2></div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>วันเวลา</th><th>ภาษา</th><th>โหมด</th><th>ระดับ</th><th>สถานะ</th><th>คะแนน</th><th>WPM</th><th>Accuracy</th></tr></thead>
          <tbody id="userHistoryBody"></tbody>
        </table>
      </div>
    </section>
  </section>

  <section id="pvpGameScreen" class="card hidden pvp-game-v44">
    <div id="pvpCountdownOverlay" class="pvp-countdown-overlay hidden" aria-live="assertive">
      <span>เตรียมพร้อม</span>
      <strong id="pvpCountdownNumber">3</strong>
      <small>ทุกคนจะเริ่มพิมพ์พร้อมกัน</small>
    </div>
    <div class="game-head"><div><span class="badge">⚔️ PVP</span><h2 id="pvpChallengeTitle">PVP Challenge</h2><p id="pvpChallengeDescription"></p></div><div class="player-box"><strong id="pvpRoomGame">Room ------</strong><span id="pvpMatchMeta">-</span></div></div>

    <div id="pvpBattleArena" class="pvp-battle-arena">
      <div class="pvp-fighter-side side-a">
        <div class="pvp-fighter-meta">
          <span>TEAM A</span>
          <strong id="pvpFighterAName">PLAYER A</strong>
          <small id="pvpFighterARank">PVP Rookie</small>
        </div>
        <div class="pvp-hp-shell"><div id="pvpHpA" class="pvp-hp-fill"></div></div>
        <div class="pvp-hp-number"><b id="pvpHpAText">100</b> / 100 HP</div>
        <div id="pvpFighterA" class="pvp-fighter facing-right"></div>
      </div>

      <div class="pvp-battle-center">
        <span id="pvpBattleVs">VS</span>
        <strong id="pvpBattleFx">READY</strong>
        <small id="pvpBattleFeed">พิมพ์ถูกต่อเนื่องเพื่อโจมตี</small>
        <div class="pvp-combat-chips">
          <span>COMBO <b id="pvpComboValue">0</b></span>
          <span>DAMAGE <b id="pvpDamageValue">0</b></span>
        </div>
      </div>

      <div class="pvp-fighter-side side-b">
        <div class="pvp-fighter-meta">
          <span>TEAM B</span>
          <strong id="pvpFighterBName">PLAYER B</strong>
          <small id="pvpFighterBRank">PVP Rookie</small>
        </div>
        <div class="pvp-hp-shell"><div id="pvpHpB" class="pvp-hp-fill"></div></div>
        <div class="pvp-hp-number"><b id="pvpHpBText">100</b> / 100 HP</div>
        <div id="pvpFighterB" class="pvp-fighter facing-left"></div>
      </div>
    </div>

    <div class="pvp-shot-header"><strong id="pvpShotLabel">SHOT 1/3</strong><span id="pvpShotScore">TEAM A 0 : 0 TEAM B</span><small id="pvpTurnInfo">กำลังเตรียมผู้พิมพ์</small></div>
    <div class="pvp-team-board">
      <div class="pvp-team-card team-a"><div class="pvp-team-head"><strong>TEAM A</strong><span id="teamAPlayers">-</span></div><div class="pvp-track"><div id="teamABar"></div></div><strong id="teamAPct">0%</strong></div>
      <div class="pvp-team-card team-b"><div class="pvp-team-head"><strong>TEAM B</strong><span id="teamBPlayers">-</span></div><div class="pvp-track"><div id="teamBBar"></div></div><strong id="teamBPct">0%</strong></div>
    </div>
    <div class="game-stats"><div><span>เวลา Shot</span><strong id="pvpTime">00:00</strong></div><div><span>WPM</span><strong id="pvpWpm">0</strong></div><div><span>Accuracy</span><strong id="pvpAccuracy">100%</strong></div><div><span>Mistakes</span><strong id="pvpMistakes">0</strong></div><div><span>Progress</span><strong id="pvpProgress">0%</strong></div><div><span>Status</span><strong id="pvpGameStatus">READY</strong></div></div>
    <div id="pvpTypingStage" class="typing-stage" tabindex="0"><div class="editor-bar"><div class="editor-dots"><i></i><i></i><i></i></div><span>PVP RANKED BATTLE · CODE COMBAT</span><span id="pvpActiveRole">Realtime</span></div><pre id="pvpTypingDisplay" class="typing-display"></pre><textarea id="pvpTypingInput" class="hidden-input" spellcheck="false"></textarea></div>
    <div class="game-bottom"><button id="leavePvpButton" class="btn danger">ออกจาก PVP</button><span id="pvpSaveState">กำลังเชื่อม...</span></div>
  </section>

  <section id="gameScreen" class="game-fullscreen hidden">
    <div id="gameShell" class="game-shell">
      <div id="mobileGameTools" class="mobile-game-tools" aria-label="เครื่องมือเกมบนมือถือ">
        <button id="mobileFocusButton" type="button" class="mobile-tool-btn">⌨️ พิมพ์ต่อ</button>
        <button id="mobileStatsButton" type="button" class="mobile-tool-btn">📊 สถิติ</button>
        <button id="mobileExitButton" type="button" class="mobile-tool-btn danger-lite">✕ ออก</button>
      </div>

      <div id="mobileStatsSheet" class="mobile-stats-sheet hidden" role="dialog" aria-modal="true" aria-label="สถิติการเล่น">
        <div class="mobile-sheet-card">
          <div class="mobile-sheet-head">
            <strong>สถิติการเล่น</strong>
            <button id="closeMobileStats" type="button" aria-label="ปิด">✕</button>
          </div>
          <div class="mobile-stats-grid">
            <div><span>ด่าน</span><strong id="mobileStatLevel">01</strong></div>
            <div><span>เวลา</span><strong id="mobileStatTime">00:00</strong></div>
            <div><span>WPM</span><strong id="mobileStatWpm">0</strong></div>
            <div><span>Accuracy</span><strong id="mobileStatAccuracy">100%</strong></div>
            <div><span>Mistakes</span><strong id="mobileStatMistakes">0</strong></div>
            <div><span>Token</span><strong id="mobileStatToken">0</strong></div>
          </div>
        </div>
      </div>
      <div class="fullscreen-topbar">
        <div class="game-identity">
          <span id="modeBadge" class="badge">⌨️ CLASSIC</span>
          <div>
            <strong id="challengeTitle">Level</strong>
            <small id="challengeDescription"></small>
          </div>
        </div>

        <div class="game-top-actions"><span id="deviceHint" class="device-hint" aria-live="polite"></span>
          <span id="playerName">-</span>
          <button id="fullscreenButton" class="btn ghost small-btn" type="button">⛶ เต็มหน้าจอ</button>
          <button id="quitButton" class="btn danger small-btn" type="button">ออก</button>
        </div>
      </div>

      <div class="game-stats fullscreen-stats">
        <div><span>ด่าน</span><strong id="statLevel">01</strong></div>
        <div><span>เวลา</span><strong id="statTime">00:00</strong></div>
        <div><span>WPM</span><strong id="statWpm">0</strong></div>
        <div><span>Accuracy</span><strong id="statAccuracy">100%</strong></div>
        <div><span>Mistakes</span><strong id="statMistakes">0</strong></div>
        <div><span>Token ด่าน</span><strong id="statScore">0</strong></div>
      </div>

      <div class="game-main-area">
        <div class="code-side">
          <div class="code-info fullscreen-tags">
            <span id="languageLabel">HTML</span>
            <span id="difficultyLabel">ง่าย</span>
            <span id="timeRuleLabel">จับเวลา</span>
            <span id="saveState">พร้อมเล่น</span>
          </div>

          <div id="typingStage" class="typing-stage strict-stage" tabindex="0" role="application" aria-label="พื้นที่พิมพ์โค้ด">
            <div class="editor-bar">
              <div class="editor-dots"><i></i><i></i><i></i></div>
              <span id="fileName">challenge_01</span>
              <span id="typingStatus">พิมพ์ตัวแรกเพื่อเริ่ม</span>
            </div>
            <pre id="typingDisplay" class="typing-display fullscreen-code"></pre>
            <textarea id="typingInput" class="hidden-input" spellcheck="false" autocomplete="off"></textarea>
          </div>

          <div class="progress-line compact-progress">
            <div class="progress-track"><div id="progressBar"></div></div>
            <span id="progressText">0 / 0</span>
          </div>
        </div>

        <aside class="game-help-side">
          <div class="strict-guide">
            <h3>STRICT TYPING</h3>
            <p><b>สีเขียว</b> = พิมพ์ถูก</p>
            <p><b>พิมพ์ผิด</b> = จอสั่นและตำแหน่งจะไม่เดินต่อ</p>
            <p>ไม่ต้อง Backspace — พิมพ์ตัวเดิมใหม่ให้ถูกแล้วไปต่อได้ทันที</p>
          </div>
          <div class="keyboard-area compact-keyboard">
            <p>คีย์บอร์ดจำลอง</p>
            <div id="keyboard" class="keyboard"></div>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section id="resultScreen" class="card hidden result-screen">
    <span class="section-kicker">RESULT</span>
    <h2 id="resultTitle">บันทึกผลเรียบร้อยแล้ว</h2>
    <p id="resultText"></p>
    <div class="result-grid">
      <div><span>Score</span><strong id="resultScore">0</strong></div>
      <div><span>WPM</span><strong id="resultWpm">0</strong></div>
      <div><span>Accuracy</span><strong id="resultAccuracy">0%</strong></div>
      <div><span>Time</span><strong id="resultTime">0s</strong></div>
    </div>
    <section id="resultExplanation" class="result-explanation hidden">
      <div class="section-title compact"><div><span class="section-kicker">CODE EXPLANATION</span><h3>โค้ดที่พิมพ์ไปใช้ทำอะไร?</h3></div></div>
      <div class="result-explain-grid"><div><span>หน้าที่</span><p id="resultCodeUsage">-</p></div><div><span>ประโยชน์</span><p id="resultCodeBenefit">-</p></div><div><span>ผลลัพธ์ / สิ่งที่ทำได้</span><p id="resultCodeOutput">-</p></div></div>
      <pre id="resultCodeSample" class="result-code-sample"></pre>
    </section>
    <div class="result-actions">
      <button id="playAgainButton" class="btn secondary">เล่น Level เดิมอีกครั้ง</button>
      <button id="nextLevelButton" class="btn primary">Level ถัดไป</button>
      <button id="questZoneButton" class="btn primary hidden">กลับ 2D Zone</button>
      <button id="portalButton" class="btn ghost">กลับหน้าเลือกโหมด</button>
    </div>
  </section>
</main>

<footer><div class="wrap">ระบบเกมพิมพ์ Code · วิทยาลัยเทคนิคนางรอง</div></footer>
<script type="module" src="./app.js?v=4.12.0"></script>

  <div id="characterSetupModal" class="character-modal hidden">
    <div class="character-modal-card character-setup-card">
      <span class="section-kicker">CHARACTER SETUP</span>
      <h2>เลือกตัวละครของคุณ</h2>
      <p>หลังลงทะเบียนต้องเลือกตัวละครชายหรือหญิงก่อนใช้งาน จากนั้นใช้ Token แลกไอเท็มมาแต่งตัวได้</p>

      <div class="character-gender-grid">
        <button id="selectMaleCharacter" class="character-gender-option" type="button">
          <div class="character-stage preview-stage">
            <div class="game-character male">
              <div class="char-hair"></div><div class="char-head"></div>
              <div class="char-body"></div><div class="char-arm left"></div><div class="char-arm right"></div>
              <div class="char-shorts"></div><div class="char-leg left"></div><div class="char-leg right"></div>
              <div class="char-shoe left"></div><div class="char-shoe right"></div>
            </div>
          </div>
          <strong>ชาย</strong><small>ตัวละครพื้นฐาน</small>
        </button>

        <button id="selectFemaleCharacter" class="character-gender-option" type="button">
          <div class="character-stage preview-stage">
            <div class="game-character female">
              <div class="char-hair"></div><div class="char-head"></div>
              <div class="char-body"></div><div class="char-arm left"></div><div class="char-arm right"></div>
              <div class="char-shorts"></div><div class="char-leg left"></div><div class="char-leg right"></div>
              <div class="char-shoe left"></div><div class="char-shoe right"></div>
            </div>
          </div>
          <strong>หญิง</strong><small>ตัวละครพื้นฐาน</small>
        </button>
      </div>
    </div>
  </div>

  <div id="characterProfileModal" class="character-modal hidden">
    <div class="character-modal-card profile-character-card">
      <button id="closeCharacterProfileButton" class="character-modal-close" type="button">✕</button>

      <div class="character-profile-layout">
        <section class="character-display-panel">
          <span class="section-kicker">MY CHARACTER</span>
          <h2 id="characterProfileStudentId">-</h2>

          <div class="character-stage large-stage">
            <div id="profileCharacter" class="game-character male">
              <div class="char-aura"></div>
              <div class="char-back-item"></div>
              <div class="char-hair"></div><div class="char-head"></div>
              <div class="char-face-item"></div>
              <div class="char-body"></div><div class="char-top-item"></div>
              <div class="char-arm left"></div><div class="char-arm right"></div>
              <div class="char-hand-item"></div>
              <div class="char-shorts"></div><div class="char-bottom-item"></div>
              <div class="char-leg left"></div><div class="char-leg right"></div>
              <div class="char-shoe left"></div><div class="char-shoe right"></div>
              <div class="char-head-item"></div>
              <div class="char-pet-item"></div>
            </div>
          </div>

          <div class="character-profile-stats">
            <div><span>Token</span><strong id="characterTokenBalance">0</strong></div>
            <div><span>Rank</span><strong id="characterRankName">Bronze</strong></div>
            <div><span>ไอเท็ม</span><strong id="characterOwnedCount">0</strong></div>
          </div>

          <div class="character-profile-actions">
            <a href="zone.html" class="btn zone-entry-main">🛒 ไป Token Shop ใน 2D Zone</a>
            <button id="unequipAllButton" class="btn ghost" type="button">ถอดไอเท็มทั้งหมด</button>
          </div>
        </section>

        <section class="character-inventory-panel">
          <div class="character-inventory-head">
            <div>
              <span class="section-kicker">WARDROBE</span>
              <h3>ไอเท็มที่เป็นเจ้าของ</h3>
            </div>
            <small>ไอเท็มแพงขึ้นจะยิ่งมีเอฟเฟกต์อลังการ</small>
          </div>
          <div id="characterInventoryList" class="character-inventory-list"></div>
        </section>
      </div>
    </div>
  </div>


  <!-- V4.12.0 Student Fullscreen Session:
       2D Zone stays inside this document so browser fullscreen does not end on navigation. -->
  <div id="studentZoneShell" class="student-zone-shell hidden" aria-hidden="true">
    <iframe id="studentZoneFrame"
      class="student-zone-frame"
      title="2D Social Zone"
      allow="fullscreen"
      referrerpolicy="same-origin"></iframe>
  </div>

  <div id="studentFullscreenGate" class="student-fullscreen-gate hidden" aria-hidden="true">
    <div class="student-fullscreen-gate-card">
      <div class="student-fullscreen-gate-icon">⛶</div>
      <span class="section-kicker">STUDENT FULLSCREEN SESSION</span>
      <h2>เข้าสู่โหมดเต็มหน้าจอ</h2>
      <p>ระบบ User ใช้งานแบบ Fullscreen เพื่อให้พื้นที่เกมเต็มจอ และเริ่มนับ Daily Quest 60 นาทีต่อเนื่อง</p>
      <button id="resumeStudentFullscreen" class="btn primary" type="button">เข้าสู่ Fullscreen และใช้งานต่อ</button>
      <small>Admin ไม่ใช้โหมดนี้</small>
    </div>
  </div>

</body>
</html>
```


## style.css

```css
:root{
  --blue:#244b75;
  --blue2:#193a5d;
  --blue-soft:#eef4fa;
  --text:#17202b;
  --muted:#677382;
  --line:#dce3ea;
  --card:#fff;
  --bg:#f5f7fa;
  --red:#b83838;
  --green:#237a54;
  --orange:#ad6b17;
  --shadow:0 8px 30px rgba(28,45,65,.08);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--text);font-family:"Segoe UI",Tahoma,Arial,sans-serif}
button,input,select,textarea{font:inherit}
a{text-decoration:none;color:inherit}
.wrap{width:min(1180px,calc(100% - 32px));margin:auto}
.site-header{padding:30px 0 20px;background:#fff;border-bottom:1px solid var(--line)}
.header-inner{display:flex;align-items:center;justify-content:space-between;gap:24px}
.site-header h1{margin:5px 0 4px;font-size:32px}
.site-header p{margin:0;color:var(--muted)}
.kicker,.section-kicker{font-size:11px;letter-spacing:.16em;font-weight:800;color:var(--blue)}
.admin-link{padding:10px 18px;border:1px solid var(--line);border-radius:9px;background:#fff;font-weight:700}
main.wrap{padding:24px 0 50px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);padding:30px;margin-bottom:22px}
.hero-card{padding:34px}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:36px;align-items:center}
.badge{display:inline-flex;background:var(--blue-soft);color:var(--blue);font-size:11px;font-weight:800;letter-spacing:.1em;padding:7px 10px;border-radius:999px}
.hero-card h2{font-size:36px;line-height:1.18;margin:12px 0}
.lead{font-size:17px;line-height:1.8;color:var(--muted)}
.summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:24px}
.summary-grid div{border:1px solid var(--line);border-radius:10px;padding:14px;text-align:center}
.summary-grid strong,.summary-grid span{display:block}.summary-grid strong{font-size:20px;color:var(--blue)}.summary-grid span{font-size:9px;color:var(--muted);margin-top:5px}
.code-preview{background:#111820;color:#e9f1f8;border-radius:13px;overflow:hidden}
.preview-top{height:40px;background:#18222c;display:flex;gap:6px;align-items:center;padding:0 14px}
.preview-top span{width:8px;height:8px;background:#7d8995;border-radius:50%}
.code-preview pre{margin:0;padding:32px 24px;min-height:220px;font:16px/1.8 Consolas,monospace;white-space:pre-wrap}
.instructions{border-top:1px solid var(--line);margin-top:30px;padding-top:24px}.instructions h3{margin:0 0 12px}.instructions li{margin:8px 0;line-height:1.6;color:#3e4a59}
.section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.section-title h2{margin:5px 0 0}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.form-grid label span{display:block;font-size:13px;font-weight:700;margin-bottom:7px}
.form-grid input,.form-grid select,.form-grid textarea,.stack-form input{width:100%;border:1px solid #cbd5df;border-radius:8px;padding:11px 12px;background:#fff;outline:none}
.form-grid input:focus,.form-grid select:focus,.form-grid textarea:focus,.stack-form input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(36,75,117,.10)}
.full{grid-column:1/-1}
.consent{display:flex!important;align-items:center;gap:8px;background:#f8fafc;border:1px solid var(--line);padding:12px;border-radius:8px}
.consent input{width:auto}.consent span{margin:0!important;font-weight:500!important}
.form-footer{display:flex;justify-content:space-between;align-items:center;gap:16px}.form-footer>span{color:var(--muted);font-size:13px}
.btn{border:0;border-radius:8px;min-height:40px;padding:0 16px;font-weight:700;cursor:pointer}
.btn:disabled{opacity:.45;cursor:not-allowed}.primary{background:var(--blue);color:#fff}.secondary{background:#e7edf4;color:#223f5c}.ghost{background:#fff;border:1px solid var(--line)}.danger{background:#a94141;color:#fff}.btn-small{min-height:32px;font-size:12px}
.game-head{display:flex;justify-content:space-between;gap:20px;align-items:flex-start}.game-head h2{margin:10px 0 5px}.game-head p{margin:0;color:var(--muted)}
.player-box{text-align:right}.player-box strong,.player-box span{display:block}.player-box span{font-size:12px;color:var(--muted);margin-top:5px}
.game-stats{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin:24px 0}
.game-stats div{border:1px solid var(--line);border-radius:10px;text-align:center;padding:14px 8px}.game-stats span,.game-stats strong{display:block}.game-stats span{font-size:10px;color:var(--muted);letter-spacing:.04em}.game-stats strong{font-size:22px;margin-top:6px;color:var(--blue)}
.code-info{display:flex;gap:7px;margin-bottom:10px}.code-info span{font-size:11px;border:1px solid var(--line);border-radius:999px;padding:5px 9px;background:#f9fafb}
.typing-stage{position:relative;border:1px solid #cfd8e2;border-radius:10px;overflow:hidden;background:#fff;cursor:text}.typing-stage.active{border-color:#86a9cb}.editor-bar{height:44px;background:#f7f9fb;border-bottom:1px solid var(--line);padding:0 14px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;font-size:11px;color:var(--muted)}.editor-bar>:last-child{text-align:right}.editor-dots{display:flex;gap:5px}.editor-dots i{width:8px;height:8px;border-radius:50%;background:#c4ccd5}
.typing-display{margin:0;min-height:330px;max-height:480px;overflow:auto;padding:30px 36px;font:600 21px/1.75 Consolas,"Courier New",monospace;white-space:pre-wrap}.typing-display .pending{color:#a7afb8}.typing-display .correct{color:#19212a}.typing-display .wrong{color:#b92828;background:#ffe6e6}.typing-display .current{border-left:2px solid var(--blue);animation:blink .9s infinite}@keyframes blink{50%{border-left-color:transparent}}
.hidden-input{position:absolute!important;left:-9999px!important;top:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
.progress-line{display:flex;gap:12px;align-items:center;margin:12px 0 24px}.progress-track{height:8px;flex:1;background:#e9edf1;border-radius:999px;overflow:hidden}.progress-track div{height:100%;width:0;background:var(--blue);transition:width .12s}.progress-line span{min-width:100px;text-align:right;font-size:12px;color:var(--muted)}
.keyboard-area{width:min(710px,100%);margin:auto}.keyboard-area p{text-align:center;color:var(--muted);font-size:11px}.keyboard{border:1px solid #c6ced6;background:#eef1f4;border-radius:9px;padding:7px;user-select:none}.keyboard-row{display:flex;justify-content:center;gap:4px;margin-bottom:4px}.key{height:32px;min-width:36px;padding:0 6px;display:grid;place-items:center;background:#fff;border:1px solid #bdc6cf;border-radius:5px;box-shadow:0 2px 0 #c7ced5;font-size:9px}.key.wide{min-width:62px}.key.space{width:270px}.key.active{background:#a9cbed;border-color:#568dc2;transform:translateY(2px);box-shadow:none}
.game-bottom{margin-top:24px;border-top:1px solid var(--line);padding-top:18px;display:flex;justify-content:space-between;align-items:center}.game-bottom span{font-size:12px;color:var(--muted)}
.result-screen{text-align:center;padding:50px 30px}.result-screen h2{font-size:34px;margin:8px 0}.result-screen>p{color:var(--muted)}
.result-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;max-width:720px;margin:26px auto}.result-grid div{border:1px solid var(--line);border-radius:10px;padding:18px}.result-grid span,.result-grid strong{display:block}.result-grid span{font-size:10px;color:var(--muted)}.result-grid strong{font-size:26px;color:var(--blue);margin-top:6px}.result-actions{display:flex;gap:9px;justify-content:center;flex-wrap:wrap}.red{color:var(--red)}
footer{background:#fff;border-top:1px solid var(--line);padding:24px 0;color:var(--muted);font-size:12px;text-align:center}
.hidden{display:none!important}.shake{animation:shake .2s}@keyframes shake{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.admin-page{background:#f1f4f7}.admin-wrap{padding-top:45px!important}.admin-login{max-width:520px;margin:40px auto}.admin-login h1{margin:7px 0}.admin-login>p{color:var(--muted)}.stack-form{display:grid;gap:15px;margin-top:25px}.stack-form label span{display:block;font-size:13px;font-weight:700;margin-bottom:7px}.login-actions{display:flex;align-items:center;justify-content:space-between}.login-actions a{font-size:13px;color:var(--blue)}.error-text{color:var(--red);font-size:13px}
.admin-titlebar{display:flex;justify-content:space-between;align-items:center;gap:24px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:25px;margin-bottom:18px}.admin-titlebar h1{margin:6px 0}.admin-titlebar p{margin:0;color:var(--muted)}.admin-titlebar>div:last-child{display:flex;gap:8px}
.admin-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.admin-metrics div{background:#fff;border:1px solid var(--line);border-radius:12px;padding:20px}.admin-metrics span,.admin-metrics strong{display:block}.admin-metrics span{font-size:12px;color:var(--muted)}.admin-metrics strong{font-size:30px;margin-top:8px;color:var(--blue)}
.admin-tabs{display:flex;gap:7px;margin:20px 0 0}.tab{border:1px solid var(--line);border-bottom:0;background:#e9edf1;padding:11px 17px;border-radius:9px 9px 0 0;cursor:pointer;font-weight:700}.tab.active{background:#fff;color:var(--blue)}
.admin-tab-panel{background:#fff;border:1px solid var(--line);padding:24px;border-radius:0 12px 12px 12px;box-shadow:var(--shadow)}
.panel-title{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:18px}.panel-title h2{margin:0 0 5px}.panel-title p{margin:0;color:var(--muted);font-size:13px}.button-row{display:flex;gap:7px;flex-wrap:wrap}
.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;font-size:12px}th,td{text-align:left;border-bottom:1px solid var(--line);padding:10px;white-space:nowrap}th{background:#f7f9fb;color:#536171}.empty{text-align:center;color:var(--muted);padding:30px}.status{display:inline-flex;border-radius:999px;padding:4px 7px;background:#edf1f5;font-size:10px}.status-completed{color:var(--green);background:#e6f6ee}.status-timeout,.status-abandoned{color:var(--red);background:#fceaea}.status-playing{color:var(--orange);background:#fff3dd}.mini-delete{border:0;background:#f8e7e7;color:#963939;padding:5px 8px;border-radius:5px;cursor:pointer}
.admin-level-form{background:#f8fafb;border:1px solid var(--line);border-radius:10px;padding:18px}.level-admin-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:20px}.level-admin-card{border:1px solid var(--line);border-radius:10px;padding:15px;display:flex;justify-content:space-between;align-items:center;gap:15px}.level-admin-card span{font-size:10px;color:var(--blue);font-weight:800}.level-admin-card h3{font-size:15px;margin:4px 0}.level-admin-card p{margin:0;font-size:11px;color:var(--muted)}.backup-actions{display:flex;gap:12px;align-items:center}.file-label{border:1px solid var(--line);background:#fff;border-radius:8px;padding:10px 14px;font-weight:700;cursor:pointer}.file-label input{display:none}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr}.game-stats{grid-template-columns:repeat(3,1fr)}.summary-grid{grid-template-columns:repeat(2,1fr)}.admin-metrics{grid-template-columns:repeat(2,1fr)}.level-admin-cards{grid-template-columns:1fr}}
@media(max-width:650px){.card{padding:20px}.form-grid{grid-template-columns:1fr}.full{grid-column:1}.form-footer,.game-head,.admin-titlebar,.panel-title{display:block}.form-footer .btn,.admin-titlebar>div:last-child{margin-top:12px}.game-stats{grid-template-columns:repeat(2,1fr)}.typing-display{padding:22px 16px;font-size:15px}.keyboard-area{overflow:auto}.keyboard{min-width:680px}.result-grid{grid-template-columns:repeat(2,1fr)}.admin-tabs{overflow:auto}.admin-tab-panel{border-radius:0 0 12px 12px}}

/* ===== User Portal v2 ===== */
.exam-summary-line{display:flex;gap:10px;flex-wrap:wrap;padding-bottom:18px;margin-bottom:22px;border-bottom:1px solid var(--line)}
.exam-summary-line span,.exam-summary-line strong{padding:7px 10px;background:#f4f7fa;border:1px solid var(--line);border-radius:7px;font-size:12px}
.instruction-list{padding-left:22px;margin-bottom:20px}.instruction-list li{margin:9px 0;line-height:1.65;color:#3f4b58}
.creator-line{font-size:12px;color:var(--muted);margin:20px 0 0}
.user-portal-head{display:flex;justify-content:space-between;align-items:center}.user-portal-head h2{margin:6px 0}.user-portal-head p{margin:0;color:var(--muted)}
.portal-stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.portal-stat{margin-bottom:0;padding:20px}.portal-stat span,.portal-stat strong{display:block}.portal-stat span{font-size:12px;color:var(--muted)}.portal-stat strong{font-size:29px;margin-top:7px;color:var(--blue)}
.mode-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.mode-choice{border:1px solid var(--line);background:#fff;border-radius:10px;padding:18px;text-align:left;cursor:pointer;min-height:210px;transition:.15s}.mode-choice:hover,.mode-choice.selected{border-color:var(--blue);box-shadow:0 0 0 2px rgba(36,75,117,.10)}.mode-choice-icon{display:block;font-size:28px;margin-bottom:13px}.mode-choice strong,.mode-choice small{display:block}.mode-choice strong{font-size:17px}.mode-choice small{color:var(--muted);line-height:1.5;margin:8px 0 14px;min-height:56px}.mode-choice div{display:flex;gap:5px;flex-wrap:wrap}.mode-choice div span{font-size:10px;background:#f3f6f9;border-radius:999px;padding:5px 7px}
.level-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.level-choice{border:1px solid var(--line);background:#fff;border-radius:9px;padding:15px;text-align:left;cursor:pointer}.level-choice:hover{border-color:var(--blue);background:#f8fbfe}.level-choice>span,.level-choice>strong,.level-choice>small,.level-choice>div{display:block}.level-choice>span{font-size:10px;color:var(--blue);font-weight:800}.level-choice>strong{margin:5px 0;font-size:14px}.level-choice>small{color:var(--muted);min-height:31px}.level-choice>div{margin-top:10px;font-size:10px;color:var(--muted)}.level-choice b{font-size:15px;color:var(--blue)}
.empty-card{grid-column:1/-1;padding:30px;text-align:center;color:var(--muted);background:#f8fafb;border:1px dashed var(--line);border-radius:9px}.muted-line{color:var(--muted)}
@media(max-width:950px){.mode-card-grid,.level-card-grid{grid-template-columns:repeat(2,1fr)}.portal-stat-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.mode-card-grid,.level-card-grid,.portal-stat-grid{grid-template-columns:1fr}.user-portal-head{display:block}.user-portal-head button{margin-top:12px}}

/* ===== Permanent User Account + Realtime Admin ===== */
.account-card{max-width:1080px;margin-left:auto;margin-right:auto}
.creator-banner{border-left:5px solid #f3b400;background:#fff8dd;padding:14px 18px;border-radius:8px;margin-bottom:22px;font-weight:700}
.auth-tabs{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:10px;padding:6px;gap:6px;margin-bottom:28px;background:#f6f8fa}
.auth-tab{border:0;background:transparent;border-radius:8px;min-height:48px;font-weight:800;cursor:pointer;color:var(--muted)}
.auth-tab.active{background:var(--primary, #3478bf);color:#fff;box-shadow:0 6px 18px rgba(36,75,117,.18)}
.auth-panel h2{font-size:30px;margin:7px 0 8px}
.password-row{display:grid;grid-template-columns:1fr auto;gap:8px}
.show-password{border:1px solid var(--line);background:#fff;border-radius:8px;padding:0 13px;font-weight:700;cursor:pointer}
.realtime-badge{font-size:10px;color:#1d8b5b;background:#e6f7ef;border:1px solid #bfe8d5;padding:5px 8px;border-radius:999px;vertical-align:middle;white-space:nowrap}
.status-active{background:#e6f7ef!important;color:#19724c!important}
@media(max-width:650px){.auth-tabs{grid-template-columns:1fr}.password-row{grid-template-columns:1fr}.show-password{min-height:38px}}

/* ===== Multi-language Learning + Classic/PVP ===== */
.language-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.language-card{border:1px solid var(--line);background:#fff;border-radius:14px;padding:20px;text-align:left;cursor:pointer;transition:.18s}
.language-card:hover,.language-card.selected{border-color:var(--primary,#3478bf);box-shadow:0 10px 28px rgba(36,75,117,.10);transform:translateY(-2px)}
.language-card>span{display:block;font-size:34px}.language-card strong{display:block;font-size:22px;margin:10px 0 3px}.language-card b{display:block;color:var(--primary,#3478bf);font-size:12px}.language-card small{display:block;color:var(--muted);line-height:1.55;margin:10px 0}.language-card em{display:block;font-style:normal;font-size:11px;background:#f6f8fa;padding:9px;border-radius:8px;color:#536171}
.lesson-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px}.lesson-tab{border:1px solid var(--line);background:#f8fafb;border-radius:10px;padding:12px;cursor:pointer;text-align:left}.lesson-tab.active{border-color:var(--primary,#3478bf);background:#eef5fc}.lesson-tab span,.lesson-tab strong,.lesson-tab small{display:block}.lesson-tab strong{margin:5px 0}.lesson-tab small{color:var(--muted)}
.education-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:18px}.edu-info{display:grid;gap:10px}.edu-card{border:1px solid var(--line);border-radius:10px;padding:14px;background:#fafbfc}.edu-card.benefit{background:#f3fbf7}.edu-card h3{font-size:14px;margin:0 0 7px}.edu-card p{font-size:13px;color:#536171;line-height:1.65;margin:0}.edu-heading{margin:0 0 8px}.lesson-code{background:#101820;color:#e7edf5;border-radius:10px;padding:18px;overflow:auto;font:13px/1.7 Consolas,monospace;min-height:210px}.preview-panel{border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-top:12px;background:#fff}.preview-bar{height:38px;background:#f4f6f8;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:6px;padding:0 12px}.preview-bar i{width:8px;height:8px;border-radius:50%;background:#aeb7c1}.preview-bar span{font-size:10px;color:var(--muted);margin-left:5px}.preview-panel iframe{width:100%;height:220px;border:0}.terminal-output{margin:0;background:#0c1219;color:#7ee787;min-height:180px;padding:20px;font:13px/1.7 Consolas,monospace}
.two-col{grid-template-columns:repeat(2,1fr)!important}.difficulty-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.difficulty-card{border:1px solid var(--line);background:#fff;border-radius:12px;padding:18px;text-align:center;cursor:pointer}.difficulty-card.selected{border-color:var(--primary,#3478bf);background:#eef5fc}.difficulty-card span,.difficulty-card strong,.difficulty-card small,.difficulty-card b{display:block}.difficulty-card span{font-size:28px}.difficulty-card strong{font-size:18px;margin:8px}.difficulty-card small{color:var(--muted);min-height:36px}.difficulty-card b{margin-top:8px;color:var(--primary,#3478bf);font-size:12px}.config-footer{margin-top:18px;display:flex;justify-content:space-between;align-items:center;gap:12px}.selected-summary{font-size:13px;color:var(--muted)}
.pvp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.pvp-box{border:1px solid var(--line);border-radius:12px;padding:18px;background:#fafbfc}.pvp-box h3{margin:0 0 5px}.pvp-box p{color:var(--muted);font-size:12px}.join-row{display:grid;grid-template-columns:1fr auto;gap:8px}.join-row input{border:1px solid var(--line);border-radius:8px;padding:10px;text-transform:uppercase;letter-spacing:.18em;font-weight:800}
.pvp-lobby{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:18px 0}.pvp-lobby>div{padding:13px;border:1px solid var(--line);border-radius:9px}.pvp-lobby span,.pvp-lobby strong{display:block}.pvp-lobby span{font-size:10px;color:var(--muted)}.pvp-lobby strong{margin-top:5px}
.pvp-progress-board{display:grid;gap:12px;margin:18px 0}.pvp-progress-board>div{display:grid;grid-template-columns:150px 1fr 60px;gap:10px;align-items:center}.pvp-track{height:14px;background:#e6ebf0;border-radius:999px;overflow:hidden}.pvp-track div{height:100%;background:var(--primary,#3478bf);width:0;transition:width .2s}
@media(max-width:950px){.language-grid{grid-template-columns:repeat(2,1fr)}.education-grid{grid-template-columns:1fr}.pvp-lobby{grid-template-columns:repeat(2,1fr)}}
@media(max-width:650px){.language-grid,.lesson-tabs,.difficulty-grid,.pvp-grid{grid-template-columns:1fr}.config-footer{display:block}.config-footer button{margin-top:10px}.pvp-progress-board>div{grid-template-columns:100px 1fr 45px}}

/* ===== V2 Fullscreen Strict Typing / 100 Stages / Points ===== */
.portal-stat-grid{grid-template-columns:repeat(5,1fr)}
.points-stat strong{color:#b87900}.points-stat small{display:block;font-size:9px;color:var(--muted);margin-top:2px}
.language-card.coming-soon{opacity:.55;cursor:not-allowed}
.stage-selector{margin:12px 0 20px;padding:14px;background:#f8fafc;border:1px solid var(--line);border-radius:12px}
.stage-selector-head{display:flex;justify-content:space-between;gap:12px;font-size:12px;margin-bottom:10px}
.mini-stage-grid{display:grid;grid-template-columns:repeat(15,1fr);gap:5px}
.mini-stage-grid button{min-height:30px;border:1px solid var(--line);border-radius:6px;background:#fff;font-size:10px;cursor:pointer}
.mini-stage-grid button.selected{background:var(--primary,#3478bf);color:#fff;border-color:var(--primary,#3478bf)}
.mini-stage-grid button:disabled{opacity:.45;cursor:not-allowed}
.stage-panel{margin-top:18px}.stage-panel h3{font-size:14px;margin:0 0 10px}
.classic-stage-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;max-height:250px;overflow:auto}
.classic-stage{border:1px solid var(--line);border-radius:9px;background:#fff;text-align:left;padding:10px;cursor:pointer}
.classic-stage strong,.classic-stage span,.classic-stage small{display:block}
.classic-stage strong{color:var(--primary,#3478bf);font-size:17px}.classic-stage span{font-size:11px;margin:4px 0}.classic-stage small{font-size:9px;color:var(--muted)}
.classic-stage.selected{border-color:var(--primary,#3478bf);background:#eef5fc}.classic-stage:disabled{opacity:.38;cursor:not-allowed}

.reward-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.reward-card{border:1px solid var(--line);border-radius:12px;padding:18px;background:#fff}
.reward-card.owned{background:#f2fbf6;border-color:#bce4cd}.reward-icon{font-size:30px}.reward-card h3{margin:8px 0}.reward-card p{color:var(--muted);font-size:12px;min-height:38px}.reward-cost{font-weight:900;color:#b87900;margin:10px 0}
.character-placeholder{display:flex;align-items:center;justify-content:space-between;gap:24px;background:linear-gradient(135deg,#f5f8fc,#eef6ff)}
.character-placeholder h2{margin:7px 0}.character-placeholder p{color:var(--muted);max-width:800px;line-height:1.6}.character-silhouette{font-size:72px;filter:grayscale(1);opacity:.55}

body.game-active{overflow:hidden}
body.game-active .site-header,body.game-active footer{display:none!important}
body.game-active main.wrap{width:100%;max-width:none;padding:0;margin:0}
.game-fullscreen{position:fixed;inset:0;z-index:9999;background:#f5f7fa;width:100vw;height:100vh;overflow:hidden}
.game-shell{height:100%;display:grid;grid-template-rows:auto auto minmax(0,1fr);padding:12px 16px;gap:10px}
.fullscreen-topbar{display:flex;align-items:center;justify-content:space-between;gap:14px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 14px}
.game-identity{display:flex;align-items:center;gap:12px;min-width:0}.game-identity>div{min-width:0}.game-identity strong,.game-identity small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.game-identity small{color:var(--muted);font-size:11px;margin-top:2px}
.game-top-actions{display:flex;align-items:center;gap:8px}.small-btn{min-height:34px;padding:0 11px;font-size:11px}
.fullscreen-stats{margin:0;grid-template-columns:repeat(6,1fr);gap:8px}.fullscreen-stats div{padding:8px}.fullscreen-stats strong{font-size:20px}
.game-main-area{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:10px;min-height:0}
.code-side{display:grid;grid-template-rows:auto minmax(0,1fr) auto;min-height:0}
.fullscreen-tags{margin:0 0 7px}.strict-stage{min-height:0;height:100%;display:grid;grid-template-rows:42px minmax(0,1fr);overflow:hidden}
.fullscreen-code{min-height:0!important;max-height:none!important;height:100%;overflow:auto;padding:22px 28px;font-size:clamp(16px,1.45vw,23px);line-height:1.65}
.typing-display .correct{color:#16824f!important;background:#e9f8f0;border-radius:2px}
.typing-display .current{background:#fff3c4;border-left:3px solid #e0a000;padding-left:1px}
.strict-stage.wrong-flash{border-color:#df3b3b!important;box-shadow:0 0 0 4px rgba(223,59,59,.12)}
.compact-progress{margin:6px 0 0}.game-help-side{display:grid;grid-template-rows:auto minmax(0,1fr);gap:8px;min-height:0}
.strict-guide{background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px;font-size:11px}.strict-guide h3{margin:0 0 8px;color:var(--primary,#3478bf)}.strict-guide p{margin:5px 0;color:#536171}
.compact-keyboard{overflow:hidden;min-height:0}.compact-keyboard .keyboard{transform:scale(.74);transform-origin:top left;width:135%;}.compact-keyboard p{margin:0 0 5px}
@keyframes wrongShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-9px)}40%{transform:translateX(9px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}
.wrong-shake{animation:wrongShake .22s linear}

@media(max-width:1000px){
  .portal-stat-grid{grid-template-columns:repeat(2,1fr)}
  .mini-stage-grid{grid-template-columns:repeat(8,1fr)}
  .classic-stage-grid{grid-template-columns:repeat(3,1fr)}
  .reward-grid{grid-template-columns:repeat(2,1fr)}
  .game-main-area{grid-template-columns:1fr}
  .game-help-side{display:none}
}
@media(max-width:650px){
  .reward-grid,.classic-stage-grid{grid-template-columns:1fr}
  .mini-stage-grid{grid-template-columns:repeat(5,1fr)}
  .fullscreen-topbar{padding:7px}.game-top-actions>span{display:none}
  .fullscreen-stats{grid-template-columns:repeat(3,1fr)}
  .game-shell{padding:6px}
  .fullscreen-code{font-size:14px;padding:14px}
}

/* ===== V3 Token / Official / Ranking ===== */
.portal-stat-grid{grid-template-columns:repeat(6,1fr)}
.rank-stat strong{color:#7a55c8}.rank-stat small{display:block;font-size:9px;color:var(--muted)}
.official-mode{border-color:#e1b84b!important}
.official-mode.selected{background:#fff8dc!important}
.official-summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px}
.official-summary-grid>div{border:1px solid var(--line);border-radius:10px;padding:15px;background:#fafbfc}
.official-summary-grid span,.official-summary-grid strong{display:block}.official-summary-grid span{font-size:10px;color:var(--muted)}.official-summary-grid strong{font-size:24px;margin-top:5px}
.official-stage-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;max-height:420px;overflow:auto}
.official-stage{border:1px solid var(--line);background:#fff;border-radius:9px;padding:11px;text-align:left;cursor:pointer}
.official-stage span,.official-stage strong,.official-stage small{display:block}.official-stage span{font-size:10px;color:#a67a00}.official-stage strong{font-size:12px;margin:5px 0}.official-stage small{font-size:9px;color:var(--muted)}
.official-stage.completed{border-color:#76bd98;background:#effaf4}.official-actions{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-top:18px}.official-actions small{color:var(--muted)}
.ranking-season-banner{display:flex;gap:12px;align-items:center;padding:14px;border:1px solid var(--line);border-radius:10px;background:#f8fafb;margin-bottom:14px}.ranking-season-banner span{font-size:12px;color:var(--muted)}
@media(max-width:950px){.portal-stat-grid{grid-template-columns:repeat(3,1fr)}.official-stage-grid{grid-template-columns:repeat(3,1fr)}}
@media(max-width:650px){.portal-stat-grid{grid-template-columns:repeat(2,1fr)}.official-summary-grid{grid-template-columns:repeat(2,1fr)}.official-stage-grid{grid-template-columns:1fr}.official-actions{display:block}.official-actions small{display:block;margin-top:8px}}


/* ===================================================================
   V3.2 RESPONSIVE UX/UI — DESKTOP / TABLET / MOBILE
   =================================================================== */

:root {
  --safe-top: env(safe-area-inset-top, 0px);
  --safe-right: env(safe-area-inset-right, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --safe-left: env(safe-area-inset-left, 0px);
  --tap: 44px;
}

html {
  min-height: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  min-height: 100%;
  overflow-x: hidden;
}

button,
a,
input,
select,
textarea {
  -webkit-tap-highlight-color: transparent;
}

button,
.btn,
.auth-tab,
.mode-choice,
.language-card,
.difficulty-card,
.classic-stage,
.official-stage {
  touch-action: manipulation;
}

input,
select,
textarea {
  font-size: max(16px, 1rem); /* ป้องกัน iOS ซูมเองเมื่อแตะ input */
}

/* ---------- COMMON RESPONSIVE SHELL ---------- */
.wrap {
  width: min(1220px, calc(100% - 32px));
}

.card {
  scroll-margin-top: 16px;
}

.form-grid input,
.form-grid select,
.form-grid textarea,
.stack-form input {
  min-height: 46px;
}

.btn {
  min-height: var(--tap);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.auth-tab {
  min-height: 50px;
}

/* ---------- PORTAL ---------- */
.portal-stat-grid {
  align-items: stretch;
}

.portal-stat {
  min-width: 0;
}

.portal-stat strong {
  overflow-wrap: anywhere;
}

.language-card,
.mode-choice,
.difficulty-card,
.classic-stage,
.official-stage,
.reward-card {
  min-width: 0;
}

/* ---------- FULLSCREEN GAME COMMON ---------- */
.game-fullscreen {
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  min-height: 100dvh;
  overscroll-behavior: none;
  touch-action: manipulation;
}

.game-shell {
  height: 100vh;
  height: 100dvh;
  min-height: 0;
  padding:
    max(10px, var(--safe-top))
    max(12px, var(--safe-right))
    max(10px, var(--safe-bottom))
    max(12px, var(--safe-left));
}

.game-main-area,
.code-side,
.strict-stage,
.fullscreen-code {
  min-height: 0;
}

.fullscreen-code {
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

.game-top-actions .btn {
  white-space: nowrap;
}

.device-hint {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 8px;
  border-radius: 999px;
  background: #f5f7fa;
  color: var(--muted);
  font-size: 10px;
  white-space: nowrap;
}

.mobile-game-tools,
.mobile-stats-sheet {
  display: none;
}

/* Desktop keyboard remains visible */
@media (min-width: 1101px) {
  .game-main-area {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 340px);
  }

  .fullscreen-code {
    font-size: clamp(17px, 1.35vw, 23px);
  }
}

/* ===================================================================
   TABLET / SMALL LAPTOP 701–1100
   =================================================================== */
@media (min-width: 701px) and (max-width: 1100px) {
  .wrap {
    width: min(100% - 24px, 980px);
  }

  .card {
    padding: 22px;
  }

  .header-inner {
    gap: 12px;
  }

  .site-header h1 {
    font-size: 26px;
  }

  .portal-stat-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .language-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mode-card-grid,
  .difficulty-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .classic-stage-grid,
  .official-stage-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .reward-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .game-shell {
    grid-template-rows: auto auto minmax(0,1fr);
  }

  .game-main-area {
    grid-template-columns: minmax(0, 1fr);
  }

  .game-help-side {
    display: none;
  }

  .fullscreen-code {
    padding: 18px 22px;
    font-size: clamp(16px, 2vw, 21px);
  }

  .fullscreen-stats div {
    min-width: 0;
  }
}

/* ===================================================================
   MOBILE <= 700
   =================================================================== */
@media (max-width: 700px) {
  :root {
    --mobile-toolbar-h: 58px;
  }

  body:not(.game-active) {
    padding-left: var(--safe-left);
    padding-right: var(--safe-right);
  }

  .wrap {
    width: min(100% - 20px, 680px);
  }

  .site-header {
    padding:
      max(16px, var(--safe-top))
      0
      14px;
  }

  .header-inner {
    align-items: flex-start;
    gap: 8px;
  }

  .site-header h1 {
    font-size: 22px;
    line-height: 1.25;
  }

  .site-header p {
    font-size: 12px;
  }

  .kicker,
  .section-kicker {
    font-size: 9px;
  }

  .admin-link {
    min-height: 40px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
  }

  main.wrap {
    padding: 14px 0 calc(24px + var(--safe-bottom));
  }

  .card {
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 14px;
  }

  .account-card {
    margin-top: 0;
  }

  .creator-banner {
    font-size: 12px;
    padding: 11px 12px;
  }

  .auth-tabs {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;
  }

  .auth-panel h2,
  .user-portal-head h2,
  .section-title h2 {
    font-size: 22px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .form-grid .full {
    grid-column: 1;
  }

  .form-grid label span {
    font-size: 12px;
  }

  .form-grid input,
  .form-grid select,
  .form-grid textarea,
  .stack-form input {
    min-height: 50px;
    padding: 12px 13px;
    border-radius: 10px;
  }

  .password-row {
    grid-template-columns: minmax(0,1fr) auto;
  }

  .show-password {
    min-width: 66px;
    min-height: 50px;
  }

  .form-footer {
    display: grid;
    gap: 10px;
  }

  .form-footer .btn {
    width: 100%;
  }

  .user-portal-head {
    display: grid;
    gap: 14px;
  }

  .user-portal-head .btn {
    width: 100%;
  }

  .portal-stat-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 8px;
  }

  .portal-stat {
    padding: 13px;
  }

  .portal-stat span {
    font-size: 10px;
  }

  .portal-stat strong {
    font-size: 23px;
  }

  .language-grid,
  .mode-card-grid,
  .difficulty-grid,
  .reward-grid {
    grid-template-columns: 1fr !important;
  }

  .language-card,
  .mode-choice,
  .difficulty-card {
    min-height: 0;
    padding: 16px;
  }

  .language-card > span,
  .mode-choice-icon {
    font-size: 27px;
  }

  .language-card strong,
  .mode-choice strong {
    font-size: 18px;
  }

  .language-card small,
  .mode-choice small {
    min-height: 0;
  }

  .lesson-tabs {
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 6px;
  }

  .lesson-tab {
    padding: 9px 7px;
    text-align: center;
  }

  .lesson-tab strong {
    font-size: 11px;
  }

  .lesson-tab small {
    font-size: 9px;
  }

  .stage-selector {
    padding: 10px;
  }

  .stage-selector-head {
    align-items: flex-start;
    flex-direction: column;
    gap: 3px;
  }

  .mini-stage-grid {
    grid-template-columns: repeat(5, minmax(0,1fr));
  }

  .mini-stage-grid button {
    min-height: 40px;
  }

  .classic-stage-grid,
  .official-stage-grid {
    grid-template-columns: 1fr;
    max-height: 360px;
  }

  .classic-stage,
  .official-stage {
    min-height: 62px;
  }

  .official-summary-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .official-actions {
    display: grid;
    gap: 8px;
  }

  .official-actions .btn {
    width: 100%;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .lesson-code {
    font-size: 12px;
    min-height: 160px;
    max-height: 320px;
    overflow: auto;
  }

  .preview-panel iframe {
    height: 200px;
  }

  .character-placeholder {
    display: grid;
    text-align: center;
  }

  .character-silhouette {
    font-size: 56px;
  }

  .table-wrap {
    margin-left: -4px;
    margin-right: -4px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  table {
    min-width: 720px;
  }

  /* ---------- MOBILE GAME ---------- */
  body.game-active {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    background: #f5f7fa;
  }

  .game-fullscreen {
    inset: 0;
    height: 100dvh;
    background: #f5f7fa;
  }

  .game-shell {
    height: 100dvh;
    padding:
      max(6px, var(--safe-top))
      max(6px, var(--safe-right))
      calc(var(--mobile-toolbar-h) + max(6px, var(--safe-bottom)))
      max(6px, var(--safe-left));
    grid-template-rows: auto auto minmax(0,1fr);
    gap: 6px;
  }

  .fullscreen-topbar {
    border-radius: 9px;
    padding: 7px 9px;
    min-height: 47px;
  }

  .game-identity {
    width: 100%;
  }

  .game-identity .badge {
    flex: 0 0 auto;
    font-size: 9px;
    padding: 5px 7px;
  }

  .game-identity strong {
    font-size: 12px;
  }

  .game-identity small {
    display: none;
  }

  .game-top-actions {
    display: none;
  }

  .fullscreen-stats {
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 4px;
  }

  .fullscreen-stats div {
    padding: 5px 3px;
    border-radius: 7px;
  }

  .fullscreen-stats span {
    font-size: 8px;
  }

  .fullscreen-stats strong {
    font-size: 15px;
    margin-top: 2px;
  }

  .game-main-area {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .game-help-side {
    display: none !important;
  }

  .fullscreen-tags {
    display: none;
  }

  .code-side {
    grid-template-rows: minmax(0,1fr) auto;
  }

  .strict-stage {
    grid-template-rows: 36px minmax(0,1fr);
    border-radius: 9px;
  }

  .editor-bar {
    height: 36px;
    min-height: 36px;
    padding: 0 8px;
    grid-template-columns: auto minmax(0,1fr) auto;
    gap: 6px;
  }

  .editor-dots {
    gap: 3px;
  }

  .editor-dots i {
    width: 6px;
    height: 6px;
  }

  .editor-bar > span {
    font-size: 9px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .fullscreen-code {
    padding: 12px 11px 24px;
    font-size: clamp(14px, 4vw, 18px);
    line-height: 1.62;
    overscroll-behavior: contain;
  }

  .compact-progress {
    margin: 4px 2px 0;
    gap: 8px;
  }

  .compact-progress .progress-track {
    height: 6px;
  }

  .compact-progress span {
    min-width: 68px;
    font-size: 9px;
  }

  .typing-display .current {
    border-left-width: 2px;
  }

  .mobile-game-tools {
    position: fixed;
    left: max(6px, var(--safe-left));
    right: max(6px, var(--safe-right));
    bottom: max(6px, var(--safe-bottom));
    z-index: 10020;
    height: var(--mobile-toolbar-h);
    display: grid;
    grid-template-columns: 1.35fr 1fr .8fr;
    gap: 6px;
    padding: 6px;
    background: rgba(255,255,255,.96);
    border: 1px solid var(--line);
    border-radius: 14px;
    box-shadow: 0 -8px 30px rgba(20,40,60,.12);
    backdrop-filter: blur(12px);
  }

  .mobile-tool-btn {
    min-height: 44px;
    border: 0;
    border-radius: 10px;
    background: #eaf2fa;
    color: #244b75;
    font-weight: 800;
    font-size: 12px;
  }

  .mobile-tool-btn:first-child {
    background: var(--blue, #244b75);
    color: #fff;
  }

  .mobile-tool-btn.danger-lite {
    background: #fdecec;
    color: #a94141;
  }

  .mobile-stats-sheet {
    position: fixed;
    inset: 0;
    z-index: 10030;
    display: grid;
    align-items: end;
    padding:
      16px
      max(10px, var(--safe-right))
      max(10px, var(--safe-bottom))
      max(10px, var(--safe-left));
    background: rgba(15,25,35,.36);
    backdrop-filter: blur(3px);
  }

  .mobile-stats-sheet.hidden {
    display: none !important;
  }

  .mobile-sheet-card {
    width: 100%;
    background: #fff;
    border-radius: 18px;
    padding: 14px;
    box-shadow: 0 20px 60px rgba(0,0,0,.22);
  }

  .mobile-sheet-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .mobile-sheet-head button {
    width: 42px;
    height: 42px;
    border: 0;
    border-radius: 10px;
    background: #f2f4f7;
  }

  .mobile-stats-grid {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 8px;
  }

  .mobile-stats-grid > div {
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 11px 8px;
    text-align: center;
  }

  .mobile-stats-grid span,
  .mobile-stats-grid strong {
    display: block;
  }

  .mobile-stats-grid span {
    color: var(--muted);
    font-size: 9px;
  }

  .mobile-stats-grid strong {
    margin-top: 4px;
    font-size: 18px;
    color: var(--blue, #244b75);
  }

  /* Native keyboard can resize viewport — keep editor usable */
  @supports (height: 100dvh) {
    .game-fullscreen,
    .game-shell {
      height: 100dvh;
    }
  }
}

/* ===================================================================
   MOBILE LANDSCAPE: optimize for physical / soft keyboard typing
   =================================================================== */
@media (max-width: 900px) and (orientation: landscape) {
  .game-shell {
    padding:
      max(4px, var(--safe-top))
      max(5px, var(--safe-right))
      calc(50px + max(4px, var(--safe-bottom)))
      max(5px, var(--safe-left));
    gap: 4px;
  }

  .fullscreen-topbar {
    min-height: 38px;
    padding: 4px 7px;
  }

  .fullscreen-stats {
    grid-template-columns: repeat(6, minmax(0,1fr));
  }

  .fullscreen-stats div {
    padding: 3px;
  }

  .fullscreen-stats strong {
    font-size: 13px;
  }

  .strict-stage {
    grid-template-rows: 30px minmax(0,1fr);
  }

  .editor-bar {
    height: 30px;
    min-height: 30px;
  }

  .fullscreen-code {
    font-size: clamp(13px, 2.2vw, 17px);
    padding: 8px 10px 18px;
    line-height: 1.48;
  }

  .mobile-game-tools {
    height: 48px;
    padding: 4px;
  }

  .mobile-tool-btn {
    min-height: 38px;
  }
}

/* Very small phones */
@media (max-width: 380px) {
  .wrap {
    width: calc(100% - 14px);
  }

  .card {
    padding: 13px;
  }

  .portal-stat-grid {
    grid-template-columns: 1fr 1fr;
  }

  .portal-stat strong {
    font-size: 20px;
  }

  .fullscreen-stats span {
    font-size: 7px;
  }

  .fullscreen-stats strong {
    font-size: 13px;
  }

  .fullscreen-code {
    font-size: 13px;
  }

  .mobile-game-tools {
    grid-template-columns: 1.4fr .9fr .7fr;
  }

  .mobile-tool-btn {
    font-size: 10px;
  }
}

/* ===================================================================
   ADMIN RESPONSIVE
   =================================================================== */
@media (max-width: 900px) {
  .admin-wrap {
    width: min(100% - 20px, 900px);
    padding-top: 14px !important;
  }

  .admin-titlebar {
    display: grid;
    gap: 14px;
    padding: 18px;
  }

  .admin-titlebar > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .admin-metrics {
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 8px;
  }

  .admin-metrics div {
    padding: 14px;
  }

  .admin-metrics strong {
    font-size: 24px;
  }

  .admin-tabs {
    position: sticky;
    top: 0;
    z-index: 30;
    overflow-x: auto;
    white-space: nowrap;
    padding: 6px 0;
    background: var(--bg);
    scrollbar-width: none;
  }

  .admin-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab {
    min-height: 44px;
    flex: 0 0 auto;
  }

  .admin-tab-panel {
    padding: 16px;
  }

  .panel-title {
    display: grid;
    gap: 12px;
  }

  .panel-title .button-row,
  .button-row {
    width: 100%;
  }

  .panel-title .button-row .btn {
    flex: 1 1 auto;
  }

  .table-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid var(--line);
    border-radius: 10px;
  }

  .table-wrap table {
    min-width: 920px;
  }
}

@media (max-width: 600px) {
  .admin-login {
    margin: 8px auto;
    padding: 18px;
  }

  .admin-titlebar > div:last-child {
    grid-template-columns: 1fr;
  }

  .admin-metrics {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .admin-level-form {
    padding: 12px;
  }

  .ranking-season-banner {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }
}

/* Accessibility / motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}


/* ===================================================================
   V3.3 PVP MATCHMAKING — AUTO CODE / RANDOM ROOM SEARCH
   =================================================================== */
.pvp-match-actions{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
}

.pvp-match-card{
  min-height:180px;
  border:1px solid var(--line);
  border-radius:16px;
  background:#fff;
  padding:22px;
  text-align:left;
  cursor:pointer;
  transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease;
}

.pvp-match-card:hover:not(:disabled){
  transform:translateY(-2px);
  border-color:var(--primary,#3478bf);
  box-shadow:0 12px 30px rgba(36,75,117,.11);
}

.pvp-match-card:disabled{
  opacity:.55;
  cursor:not-allowed;
}

.pvp-match-card.create{
  background:linear-gradient(145deg,#ffffff,#f3f9ff);
}

.pvp-match-card.find{
  background:linear-gradient(145deg,#ffffff,#f5fbf7);
}

.pvp-match-icon,
.pvp-match-card strong,
.pvp-match-card small,
.pvp-match-card em{
  display:block;
}

.pvp-match-icon{
  font-size:34px;
  margin-bottom:13px;
}

.pvp-match-card strong{
  font-size:20px;
}

.pvp-match-card small{
  color:var(--muted);
  line-height:1.6;
  margin:8px 0 14px;
  min-height:42px;
}

.pvp-match-card em{
  width:max-content;
  max-width:100%;
  padding:5px 8px;
  border-radius:999px;
  background:#edf3f8;
  color:#486277;
  font-size:9px;
  font-style:normal;
  font-weight:800;
  letter-spacing:.04em;
}

.matchmaking-status{
  display:grid;
  grid-template-columns:auto 1fr;
  column-gap:9px;
  row-gap:2px;
  align-items:center;
  margin-top:14px;
  padding:13px 15px;
  border:1px solid var(--line);
  border-radius:12px;
  background:#f8fafc;
}

.matchmaking-dot{
  grid-row:1 / span 2;
  width:10px;
  height:10px;
  border-radius:50%;
  background:#8293a3;
}

.matchmaking-status strong{
  font-size:13px;
}

.matchmaking-status small{
  color:var(--muted);
  font-size:11px;
}

.matchmaking-status[data-state="searching"] .matchmaking-dot{
  background:#3378c4;
  box-shadow:0 0 0 5px rgba(51,120,196,.10);
  animation:pvpPulse 1s infinite alternate;
}

.matchmaking-status[data-state="waiting"] .matchmaking-dot{
  background:#dca300;
}

.matchmaking-status[data-state="matched"] .matchmaking-dot,
.matchmaking-status[data-state="playing"] .matchmaking-dot{
  background:#219364;
}

.matchmaking-status[data-state="error"] .matchmaking-dot,
.matchmaking-status[data-state="closed"] .matchmaking-dot{
  background:#d04747;
}

.matchmaking-status[data-state="empty"] .matchmaking-dot{
  background:#a6792b;
}

@keyframes pvpPulse{
  from{transform:scale(.9);opacity:.65}
  to{transform:scale(1.15);opacity:1}
}

.pvp-lobby-v2{
  grid-template-columns:1.35fr repeat(3,minmax(0,1fr));
  margin-top:16px;
}

.pvp-lobby-v2 > div{
  min-width:0;
}

.room-code-card{
  background:#0f2438!important;
  color:#fff;
}

.room-code-card > span,
.room-code-card > strong,
.room-code-card > small{
  display:block;
}

.room-code-card > span{
  font-size:9px!important;
  color:#9fc5e8!important;
}

.room-code-card > strong{
  margin:6px 0!important;
  font-size:28px!important;
  letter-spacing:.18em;
  color:#fff;
}

.room-code-card > small{
  font-size:9px;
  color:#bcd0df;
}

.pvp-player-slot small,
.pvp-status-slot small{
  display:block;
  margin-top:5px;
  color:var(--muted);
  font-size:9px;
}

.pvp-lobby-actions{
  display:flex;
  align-items:center;
  gap:8px;
  margin-top:12px;
}

@media(max-width:800px){
  .pvp-match-actions{
    grid-template-columns:1fr;
  }

  .pvp-match-card{
    min-height:0;
    padding:17px;
  }

  .pvp-lobby-v2{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
}

@media(max-width:520px){
  .pvp-lobby-v2{
    grid-template-columns:1fr;
  }

  .pvp-lobby-actions{
    display:grid;
    grid-template-columns:1fr;
  }

  .pvp-lobby-actions .btn{
    width:100%;
  }

  .room-code-card > strong{
    font-size:24px!important;
  }
}

/* ===== V3.4 COMMUNITY / TOP10 / RANK SHIELDS / 2D ZONE ===== */
.social-hub-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:16px}.section-title.compact{margin-bottom:14px}.online-count-pill{display:flex;align-items:center;gap:7px;background:#eff9f3;border:1px solid #cde7d5;padding:7px 10px;border-radius:999px;font-size:10px;color:#33714e;white-space:nowrap}.online-dot{width:8px;height:8px;border-radius:50%;background:#20a566;display:inline-block;box-shadow:0 0 0 4px rgba(32,165,102,.12)}
.community-players-list{display:grid;gap:7px;max-height:520px;overflow:auto}.community-player-row{display:grid;grid-template-columns:40px minmax(0,1fr) auto 60px;gap:9px;align-items:center;padding:9px 10px;border:1px solid var(--line);border-radius:10px;background:#fafcfd}.community-player-row.me{background:#edf5fc;border-color:#bdd4ea}.community-player-row.offline{opacity:.68}.community-avatar{width:38px;height:38px;border-radius:11px;background:#244b75;color:#fff;display:grid;place-items:center;font-weight:900}.community-player-info strong,.community-player-info small{display:block}.community-player-info strong{font-size:12px}.community-player-info small{font-size:9px;color:var(--muted);margin-top:2px}.community-player-info em{font-size:7px;font-style:normal;background:#244b75;color:#fff;padding:2px 5px;border-radius:999px;margin-left:4px}.community-status{font-size:7px;font-weight:900;text-align:right}.community-status.on{color:#168355}.community-status.off{color:#8b99a5}
.top-ranking-list{display:grid;gap:6px}.ranking-row{display:grid;grid-template-columns:42px 42px minmax(0,1fr) 74px;gap:8px;align-items:center;min-height:58px;padding:8px 11px;border:1px solid var(--line);border-radius:10px;background:#fff}.ranking-row.podium-1{background:linear-gradient(90deg,#fff9df,#fff);border-color:#ead487}.ranking-row.podium-2{background:linear-gradient(90deg,#f3f5f7,#fff);border-color:#ced4da}.ranking-row.podium-3{background:linear-gradient(90deg,#fbf1e9,#fff);border-color:#ddbea6}.ranking-position{font-size:20px;font-weight:900;color:#415466;text-align:center}.ranking-player strong,.ranking-player small{display:block}.ranking-player strong{font-size:12px}.ranking-player small{font-size:9px;color:var(--muted);margin-top:2px}.ranking-rating{text-align:right}.ranking-rating strong,.ranking-rating small{display:block}.ranking-rating strong{font-size:19px;color:#244b75}.ranking-rating small{font-size:8px;color:var(--muted)}.season-chip{background:#eef3f9;border:1px solid #d8e2ec;border-radius:999px;padding:7px 10px;font-size:10px;font-weight:900;color:#244b75}
.rank-shield{--shield:#9b6b43;position:relative;display:inline-grid;place-items:center;width:34px;height:38px;color:#fff;font-weight:1000;vertical-align:middle;background:var(--shield);clip-path:polygon(10% 0,90% 0,100% 58%,50% 100%,0 58%);filter:drop-shadow(0 2px 2px rgba(0,0,0,.16))}.rank-shield::before{content:"";position:absolute;inset:4px;clip-path:inherit;border:1px solid rgba(255,255,255,.62)}.rank-shield-letter{position:relative;z-index:1;font-size:13px}.rank-shield.small{width:27px;height:31px}.rank-shield.small .rank-shield-letter{font-size:10px}.rank-bronze{--shield:#9b6b43}.rank-silver{--shield:#8795a5}.rank-gold{--shield:#d6a51d}.rank-platinum{--shield:#3ca7a7}.rank-diamond{--shield:#557fd8}.rank-master{--shield:#7b4bc4}.rank-shield-legend{display:grid;grid-template-columns:repeat(6,1fr);gap:5px;margin-top:12px;padding-top:10px;border-top:1px solid var(--line)}.rank-shield-legend>div{display:flex;align-items:center;gap:5px;font-size:8px;color:#607485}.rank-shield-legend b{font-size:8px}
#userRank{display:flex;align-items:center;justify-content:center;gap:5px}
.zone-entry-card{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:30px;align-items:center;background:linear-gradient(135deg,#0f273b,#1f5476);color:#fff;overflow:hidden}.zone-entry-card .section-kicker{color:#a9d6f5}.zone-entry-card h2{font-size:27px;margin:6px 0 8px}.zone-entry-card p{max-width:760px;color:#d3e4ef;line-height:1.65}.zone-feature-pills{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px}.zone-feature-pills span{font-size:9px;padding:5px 8px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.08)}.zone-entry-actions{display:grid;justify-items:center;gap:10px}.zone-preview-mini{position:relative;width:170px;height:76px;background:#b9d2b0;border-radius:15px;border:3px solid rgba(255,255,255,.25)}.mini-avatar{position:absolute;width:31px;height:31px;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:11px;font-weight:900;border:2px solid #fff}.mini-avatar.a{left:25px;top:23px;background:#245b8d}.mini-avatar.b{left:72px;top:12px;background:#9d584d}.mini-avatar.c{left:113px;top:32px;background:#55734b}.zone-enter-btn{min-width:170px}
.zone-page{margin:0;background:#0c1720;overflow:hidden;color:#183144}.zone-gate{height:100vh;display:grid;place-items:center;background:radial-gradient(circle at center,#244b75,#0b1924)}.zone-gate-card{width:min(430px,calc(100% - 40px));padding:40px;text-align:center;background:#fff;border-radius:20px;box-shadow:0 30px 90px rgba(0,0,0,.28)}.zone-logo{font-size:52px}.zone-gate-card h1{margin:10px 0}.zone-gate-card p{color:#6b7c8d;margin-bottom:20px}.zone-app{height:100vh;display:grid;grid-template-rows:70px minmax(0,1fr);background:#eaf0f3}.zone-hud-top{display:grid;grid-template-columns:1fr auto auto;gap:22px;align-items:center;padding:0 18px;background:#10293c;color:#fff;border-bottom:1px solid rgba(255,255,255,.12)}.zone-brand,.zone-player-hud{display:flex;align-items:center;gap:10px}.zone-brand-icon{width:40px;height:40px;border-radius:11px;background:#2e6c98;display:grid;place-items:center;font-size:22px}.zone-brand strong,.zone-brand small,.zone-player-hud strong,.zone-player-hud small{display:block}.zone-brand strong{font-size:12px;letter-spacing:.05em}.zone-brand small{font-size:9px;color:#9eb9cc;margin-top:2px}.zone-player-hud{padding:7px 12px;border-radius:10px;background:rgba(255,255,255,.06)}.zone-player-hud strong{font-size:11px}.zone-player-hud small{font-size:8px;color:#a9c2d4;margin-top:2px}.zone-player-hud .online-dot{width:6px;height:6px;box-shadow:none;margin-right:3px}.zone-layout{display:grid;grid-template-columns:minmax(0,1fr) 310px;gap:10px;padding:10px;min-height:0}.zone-world-wrap{position:relative;min-width:0;min-height:0;background:#8ca588;border-radius:12px;overflow:hidden;box-shadow:0 4px 18px rgba(18,37,51,.13)}#zoneCanvas{display:block;width:100%;height:100%;outline:none}.zone-control-help{position:absolute;left:12px;bottom:12px;display:flex;align-items:center;gap:7px;background:rgba(13,32,46,.88);color:#fff;padding:8px 10px;border-radius:9px;font-size:9px;backdrop-filter:blur(7px)}.zone-control-help strong{color:#81b8de}.zone-control-help span{padding:3px 6px;background:rgba(255,255,255,.08);border-radius:5px}.zone-sidebar{display:grid;grid-template-rows:minmax(0,1fr) auto auto;gap:8px;min-height:0}.zone-side-card{background:#fff;border:1px solid #d8e1e7;border-radius:11px;padding:12px;min-height:0}.zone-side-card.players{display:grid;grid-template-rows:auto minmax(0,1fr)}.zone-side-head{display:flex;align-items:center;justify-content:space-between;gap:8px;padding-bottom:9px;border-bottom:1px solid #e6ebef}.zone-side-head span,.zone-side-head strong{display:block}.zone-side-head span{font-size:8px;color:#7a8d9b}.zone-side-head strong{font-size:12px;margin-top:2px}.zone-side-head b{min-width:28px;height:28px;border-radius:8px;background:#edf4f9;color:#244b75;display:grid;place-items:center;font-size:12px}.zone-player-list{overflow:auto;padding-top:7px}.zone-player-row{display:grid;grid-template-columns:35px minmax(0,1fr) auto;gap:7px;align-items:center;padding:7px;border-radius:8px}.zone-player-row:hover{background:#f5f8fa}.zone-player-row.me{background:#eaf3fa}.zone-list-avatar{width:33px;height:33px;border-radius:50%;display:grid;place-items:center;color:#fff;background:hsl(var(--avatar-hue) 48% 48%);font-size:10px;font-weight:900}.zone-player-row strong,.zone-player-row small{display:block}.zone-player-row strong{font-size:10px}.zone-player-row small{font-size:8px;color:#7c8e9b;margin-top:2px}.zone-player-row em{font-size:6px;font-style:normal;background:#244b75;color:#fff;padding:2px 4px;border-radius:4px}.zone-character-preview{display:flex;align-items:center;gap:10px;margin-top:10px}.zone-character-preview-avatar{width:54px;height:54px;border-radius:16px;background:#245b8d;color:#fff;display:grid;place-items:center;font-size:20px;font-weight:900}.zone-character-preview strong,.zone-character-preview small{display:block}.zone-character-preview strong{font-size:11px}.zone-character-preview small{font-size:8px;color:#7a8d9b;margin-top:3px}.zone-side-note{font-size:8px;line-height:1.5;color:#7a8d9b;margin:9px 0 0}.zone-map-legend{display:grid;gap:6px;margin-top:9px}.zone-map-legend span{font-size:9px;color:#617482;display:flex;align-items:center;gap:6px}.zone-map-legend i{width:9px;height:9px;border-radius:50%;display:inline-block}.legend-me{background:#245b8d}.legend-player{background:#9d584d}.legend-object{background:#8c9b91;border-radius:2px!important}
@media(max-width:1200px){.social-hub-grid{grid-template-columns:1fr}.rank-shield-legend{grid-template-columns:repeat(3,1fr)}.zone-layout{grid-template-columns:minmax(0,1fr) 270px}}


/* ==================================================================
   V3.5 THAI NIGHT SOCIAL ZONE
   Minimal: character + left/right movement + speech bubbles
   ================================================================== */
.social-zone-page{
  margin:0;
  width:100vw;
  height:100vh;
  overflow:hidden;
  background:#071826;
  color:#183144;
}
.social-zone-gate{
  position:fixed;inset:0;display:grid;place-items:center;
  background:radial-gradient(circle at 50% 25%,#164a68,#061521 65%);
}
.social-gate-card{
  width:min(440px,calc(100% - 40px));
  padding:42px;text-align:center;background:#fff;border-radius:22px;
  box-shadow:0 30px 100px rgba(0,0,0,.35);
}
.social-gate-icon{font-size:56px}
.social-gate-card h1{margin:10px 0 8px}
.social-gate-card p{color:#6b7c8d;margin-bottom:18px}

.social-zone-app{
  width:100vw;height:100vh;
  display:grid;
  grid-template-rows:68px minmax(0,1fr) 88px;
  background:#091b29;
}
.social-zone-topbar{
  display:grid;
  grid-template-columns:1fr auto auto;
  gap:18px;
  align-items:center;
  padding:0 18px;
  color:#fff;
  background:linear-gradient(180deg,#0b263a,#081d2d);
  border-bottom:1px solid rgba(255,255,255,.11);
}
.social-zone-brand,.social-zone-me{display:flex;align-items:center;gap:10px}
.social-zone-logo{
  width:42px;height:42px;border-radius:12px;display:grid;place-items:center;
  background:#143a54;font-size:23px
}
.social-zone-brand strong,.social-zone-brand small,
.social-zone-me strong,.social-zone-me small{display:block}
.social-zone-brand strong{font-size:12px;letter-spacing:.08em}
.social-zone-brand small,.social-zone-me small{font-size:9px;color:#9fb9ca;margin-top:2px}
.social-zone-me{padding:7px 11px;border-radius:11px;background:rgba(255,255,255,.06)}

.social-world-shell{
  position:relative;min-height:0;overflow:hidden;background:#132d3e;
}
#socialCanvas{
  display:block;width:100%;height:100%;
  cursor:pointer;
}
.social-help-chip{
  position:absolute;left:14px;top:14px;
  display:flex;gap:7px;align-items:center;
  padding:8px 11px;border-radius:10px;
  background:rgba(5,18,28,.78);color:#d9e9f3;
  backdrop-filter:blur(8px);font-size:9px;
  border:1px solid rgba(255,255,255,.08)
}
.social-help-chip b{color:#ffd46d}

.social-zone-controls{
  display:grid;
  grid-template-columns:100px minmax(0,760px) 100px;
  justify-content:center;
  gap:12px;
  align-items:center;
  padding:10px 18px;
  background:linear-gradient(180deg,#102c40,#071b29);
  border-top:1px solid rgba(255,255,255,.12);
}
.move-button{
  height:62px;
  border:1px solid rgba(255,255,255,.14);
  border-radius:16px;
  background:linear-gradient(180deg,#285e80,#173d59);
  color:#fff;font-size:30px;font-weight:900;
  cursor:pointer;
  box-shadow:inset 0 1px rgba(255,255,255,.12),0 5px 18px rgba(0,0,0,.22);
}
.move-button:active{transform:translateY(2px);background:#153950}
.zone-chat-form{
  height:62px;display:grid;grid-template-columns:minmax(0,1fr) 90px;
  gap:8px;padding:7px;border-radius:16px;background:#f5efe2;
  border:3px solid #8b6537;
  box-shadow:0 6px 22px rgba(0,0,0,.23);
}
.zone-chat-form input{
  border:0;outline:0;background:#fffaf0;border-radius:10px;
  padding:0 14px;font-size:15px;color:#3a3025;
}
.zone-chat-form button{
  border:0;border-radius:10px;
  background:linear-gradient(180deg,#8bb53c,#527c24);
  color:#fff;font-weight:900;font-size:14px;cursor:pointer;
}
.zone-chat-form button:hover{filter:brightness(1.06)}

.player-profile-card{
  position:absolute;right:18px;top:18px;
  width:280px;padding:18px;border-radius:16px;
  background:rgba(255,250,236,.97);
  border:3px solid #8c6536;
  box-shadow:0 18px 50px rgba(0,0,0,.28);
}
.player-profile-card>button{
  position:absolute;right:9px;top:9px;
  width:31px;height:31px;border:0;border-radius:8px;background:#eadfc9;cursor:pointer
}
.player-profile-card h3{margin:8px 0 3px}
.player-profile-card p{margin:0 0 13px;color:#6f604f;font-size:11px}
.profile-items-title{display:block;font-size:9px;color:#88745d;margin-bottom:7px}
.profile-showcase-items{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.profile-item{
  min-height:70px;border:1px solid #dbc9aa;border-radius:10px;
  background:#fffaf1;display:grid;place-items:center;text-align:center;padding:5px
}
.profile-item span{font-size:25px}.profile-item small{font-size:8px;color:#6e604f}
.profile-no-items{grid-column:1/-1;padding:13px;background:#f3eadb;border-radius:9px;font-size:9px;color:#83715d}

.gender-setup{
  position:fixed;inset:0;z-index:20000;
  display:grid;place-items:center;background:rgba(3,13,21,.68);backdrop-filter:blur(5px)
}
.gender-card{
  width:520px;max-width:calc(100% - 40px);
  background:#fff9ec;border:4px solid #8e6737;border-radius:20px;
  padding:28px;text-align:center;box-shadow:0 28px 80px rgba(0,0,0,.4)
}
.gender-card h2{margin:7px 0}.gender-card p{font-size:11px;color:#746453;line-height:1.6}
.gender-options{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px}
.gender-options button{
  min-height:190px;border:2px solid #d9c39e;border-radius:15px;background:#fffef8;cursor:pointer
}
.gender-options button:hover{border-color:#537fa0;background:#f4f9fc}
.gender-options strong{display:block;margin-top:8px;font-size:16px}
.gender-preview{position:relative;width:85px;height:120px;margin:auto}
.gender-preview .head{position:absolute;left:25px;top:5px;width:38px;height:38px;border-radius:50%;background:#efc8a5}
.gender-preview .body{position:absolute;left:18px;top:43px;width:52px;height:42px;border-radius:12px;background:#f3f0e8;border-bottom:9px solid #294c78}
.gender-preview .legs{position:absolute;left:24px;top:83px;width:40px;height:27px;border-left:10px solid #e6c29e;border-right:10px solid #e6c29e}
.male-preview::before,.female-preview::before{
  content:"";position:absolute;z-index:3;background:#2a211f
}
.male-preview::before{left:23px;top:2px;width:42px;height:19px;border-radius:20px 20px 6px 6px}
.female-preview::before{left:20px;top:2px;width:48px;height:53px;border-radius:24px 24px 18px 18px}
.female-preview::after{content:"";position:absolute;z-index:4;left:58px;top:0;width:10px;height:12px;background:#345c8a;border-radius:4px}

@media(max-width:900px){
  .social-zone-topbar{grid-template-columns:1fr auto}
  .social-zone-me{display:none}
  .social-zone-controls{grid-template-columns:75px minmax(0,1fr) 75px;padding:8px}
  .move-button{height:58px}
  .zone-chat-form{height:58px}
}


/* ==================================================================
   V3.6 RESPONSIVE SOCIAL ZONE
   DESKTOP FIRST — TABLET & MOBILE COMPATIBLE
   ================================================================== */

:root{
  --zone-safe-top: env(safe-area-inset-top, 0px);
  --zone-safe-right: env(safe-area-inset-right, 0px);
  --zone-safe-bottom: env(safe-area-inset-bottom, 0px);
  --zone-safe-left: env(safe-area-inset-left, 0px);
  --zone-visible-height: 100dvh;
}

html,body.social-zone-page{
  overscroll-behavior:none;
  -webkit-overflow-scrolling:auto;
}

.social-zone-page{
  min-height:100vh;
  min-height:100dvh;
}

.social-zone-app{
  height:100vh;
  height:100dvh;
  min-height:0;
}

.zone-device-hint{
  display:inline-flex;
  align-items:center;
  min-height:22px;
  padding:0 7px;
  margin-right:2px;
  border:1px solid rgba(255,255,255,.13);
  border-radius:999px;
  font-size:7px;
  letter-spacing:.08em;
  color:#a9c5d8;
  background:rgba(255,255,255,.05);
  white-space:nowrap;
}

.mobile-zone-online{
  display:none;
}

/* ---------------- DESKTOP FULL EXPERIENCE ---------------- */
@media (min-width:1101px){
  .social-zone-app{
    grid-template-rows:68px minmax(0,1fr) 88px;
  }

  .social-zone-topbar{
    padding-left:max(18px,var(--zone-safe-left));
    padding-right:max(18px,var(--zone-safe-right));
  }

  .social-world-shell{
    min-height:520px;
  }

  .social-zone-controls{
    padding:
      10px max(18px,var(--zone-safe-right))
      max(10px,var(--zone-safe-bottom))
      max(18px,var(--zone-safe-left));
  }

  .move-button{
    width:100px;
  }

  .zone-chat-form{
    width:100%;
  }

  #socialCanvas{
    image-rendering:auto;
  }

  .player-profile-card{
    width:300px;
  }
}

/* ---------------- TABLET ---------------- */
@media (min-width:701px) and (max-width:1100px){
  .social-zone-app{
    grid-template-rows:60px minmax(0,1fr) 82px;
    height:100dvh;
  }

  .social-zone-topbar{
    grid-template-columns:minmax(0,1fr) auto auto;
    gap:10px;
    padding:
      max(6px,var(--zone-safe-top))
      max(10px,var(--zone-safe-right))
      6px
      max(10px,var(--zone-safe-left));
  }

  .social-zone-brand strong{
    font-size:11px;
  }

  .social-zone-brand small{
    font-size:8px;
  }

  .social-zone-me{
    padding:5px 8px;
  }

  .social-zone-me strong{
    max-width:150px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }

  .social-world-shell{
    min-height:0;
  }

  #socialCanvas{
    touch-action:manipulation;
  }

  .social-help-chip{
    left:10px;
    top:10px;
    max-width:calc(100% - 20px);
    font-size:8px;
  }

  .social-zone-controls{
    grid-template-columns:84px minmax(0,1fr) 84px;
    gap:8px;
    padding:
      8px max(10px,var(--zone-safe-right))
      max(8px,var(--zone-safe-bottom))
      max(10px,var(--zone-safe-left));
  }

  .move-button{
    height:60px;
    font-size:28px;
    border-radius:14px;
  }

  .zone-chat-form{
    height:60px;
    grid-template-columns:minmax(0,1fr) 82px;
  }

  .zone-chat-form input{
    font-size:16px;
  }

  .player-profile-card{
    right:10px;
    top:10px;
    width:270px;
    max-height:calc(100% - 20px);
    overflow:auto;
  }

  .gender-card{
    width:500px;
  }
}

/* ---------------- MOBILE ---------------- */
@media (max-width:700px){
  html,body.social-zone-page{
    width:100%;
    height:var(--zone-visible-height);
    min-height:320px;
    overflow:hidden;
    position:fixed;
    inset:0;
  }

  .social-zone-app{
    width:100%;
    height:var(--zone-visible-height);
    min-height:320px;
    grid-template-rows:52px minmax(0,1fr) 76px;
  }

  .social-zone-topbar{
    grid-template-columns:minmax(0,1fr) auto auto;
    gap:6px;
    min-height:52px;
    padding:
      max(4px,var(--zone-safe-top))
      max(6px,var(--zone-safe-right))
      4px
      max(6px,var(--zone-safe-left));
  }

  .social-zone-logo{
    width:34px;
    height:34px;
    border-radius:9px;
    font-size:18px;
  }

  .zone-device-hint{
    display:none;
  }

  .social-zone-brand{
    min-width:0;
    gap:7px;
  }

  .social-zone-brand>div{
    min-width:0;
  }

  .social-zone-brand strong{
    display:block;
    font-size:9px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }

  .social-zone-brand small{
    display:none;
  }

  .social-zone-me{
    display:none!important;
  }

  .mobile-zone-online{
    display:flex;
    align-items:center;
    gap:5px;
    height:34px;
    padding:0 8px;
    border-radius:9px;
    background:rgba(255,255,255,.06);
    color:#fff;
    font-size:10px;
  }

  .mobile-zone-online .online-dot{
    width:6px;
    height:6px;
    box-shadow:none;
  }

  .social-zone-topbar .small-btn{
    min-height:34px;
    height:34px;
    padding:0 8px;
    font-size:9px;
    border-radius:8px;
  }

  .social-world-shell{
    min-height:0;
  }

  #socialCanvas{
    width:100%;
    height:100%;
    touch-action:manipulation;
  }

  .social-help-chip{
    display:none;
  }

  .social-zone-controls{
    grid-template-columns:58px minmax(0,1fr) 58px;
    gap:6px;
    min-height:76px;
    padding:
      6px max(6px,var(--zone-safe-right))
      max(6px,var(--zone-safe-bottom))
      max(6px,var(--zone-safe-left));
  }

  .move-button{
    width:58px;
    height:58px;
    min-height:58px;
    padding:0;
    border-radius:14px;
    font-size:24px;
    touch-action:none;
    user-select:none;
  }

  .zone-chat-form{
    min-width:0;
    height:58px;
    grid-template-columns:minmax(0,1fr) 58px;
    gap:5px;
    padding:5px;
    border-width:2px;
    border-radius:13px;
  }

  .zone-chat-form input{
    min-width:0;
    width:100%;
    font-size:16px;
    padding:0 9px;
    border-radius:8px;
  }

  .zone-chat-form button{
    min-width:58px;
    font-size:11px;
    border-radius:8px;
  }

  .player-profile-card{
    position:absolute;
    left:7px;
    right:7px;
    top:auto;
    bottom:7px;
    width:auto;
    max-height:55%;
    overflow:auto;
    padding:13px;
    border-width:2px;
    border-radius:14px;
  }

  .profile-showcase-items{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }

  .gender-setup{
    padding:
      max(10px,var(--zone-safe-top))
      max(10px,var(--zone-safe-right))
      max(10px,var(--zone-safe-bottom))
      max(10px,var(--zone-safe-left));
  }

  .gender-card{
    width:100%;
    max-width:430px;
    max-height:calc(var(--zone-visible-height) - 20px);
    overflow:auto;
    padding:18px;
    border-width:3px;
    border-radius:16px;
  }

  .gender-card h2{
    font-size:20px;
  }

  .gender-options{
    gap:8px;
    margin-top:12px;
  }

  .gender-options button{
    min-height:145px;
  }

  .gender-preview{
    transform:scale(.8);
    transform-origin:center;
    margin-top:-8px;
    margin-bottom:-12px;
  }
}

/* Mobile landscape: maximize world canvas */
@media (max-width:900px) and (orientation:landscape){
  .social-zone-app{
    grid-template-rows:44px minmax(0,1fr) 62px;
  }

  .social-zone-topbar{
    min-height:44px;
    padding-top:max(3px,var(--zone-safe-top));
    padding-bottom:3px;
  }

  .social-zone-logo{
    width:30px;
    height:30px;
    font-size:16px;
  }

  .social-zone-brand strong{
    font-size:8px;
  }

  .mobile-zone-online{
    height:30px;
  }

  .social-zone-topbar .small-btn{
    height:30px;
    min-height:30px;
  }

  .social-zone-controls{
    min-height:62px;
    grid-template-columns:54px minmax(0,1fr) 54px;
    padding-top:4px;
    padding-bottom:max(4px,var(--zone-safe-bottom));
  }

  .move-button{
    width:54px;
    height:50px;
    min-height:50px;
  }

  .zone-chat-form{
    height:50px;
  }

  .player-profile-card{
    left:auto;
    right:7px;
    bottom:7px;
    width:250px;
    max-height:calc(100% - 14px);
  }

  .gender-card{
    max-width:560px;
  }

  .gender-options button{
    min-height:120px;
  }

  .gender-preview{
    transform:scale(.68);
    margin-top:-15px;
    margin-bottom:-24px;
  }
}

/* Very small screens */
@media (max-width:380px){
  .social-zone-controls{
    grid-template-columns:52px minmax(0,1fr) 52px;
    gap:4px;
    padding-left:4px;
    padding-right:4px;
  }

  .move-button{
    width:52px;
  }

  .zone-chat-form{
    grid-template-columns:minmax(0,1fr) 52px;
    gap:4px;
  }

  .zone-chat-form input{
    padding:0 7px;
  }

  .zone-chat-form button{
    min-width:52px;
    font-size:10px;
  }

  .mobile-zone-online{
    padding:0 6px;
  }
}

/* Prefer reduced motion */
@media (prefers-reduced-motion:reduce){
  .move-button,
  .zone-chat-form button{
    transition:none!important;
  }
}


/* ==================================================================
   V3.7 GLOBAL CHAT — REGISTERED USERS + GM
   ================================================================== */
.portal-head-actions{
  display:flex;
  gap:8px;
  align-items:center;
}
.global-chat-entry,
.gm-chat-entry{
  background:linear-gradient(180deg,#2f7e9a,#235a77);
  color:#fff!important;
  border:1px solid #235a77!important;
}
.zone-global-chat-btn{
  background:#315f78!important;
  color:#fff!important;
  border-color:#497a92!important;
}

.global-chat-page{
  margin:0;
  width:100vw;
  height:100vh;
  height:100dvh;
  overflow:hidden;
  background:#e9eef2;
  color:#173449;
}
.global-chat-gate{
  position:fixed;
  inset:0;
  display:grid;
  place-items:center;
  background:radial-gradient(circle at 50% 20%,#315d78,#102a3c 70%);
}
.global-chat-gate-card{
  width:min(440px,calc(100% - 40px));
  padding:40px;
  text-align:center;
  border-radius:20px;
  background:#fff;
  box-shadow:0 30px 90px rgba(0,0,0,.28);
}
.global-chat-gate-icon{font-size:52px}
.global-chat-gate-card h1{margin:8px 0}
.global-chat-gate-card p{color:#758797}

.global-chat-app{
  width:100vw;
  height:100vh;
  height:100dvh;
  display:grid;
  grid-template-rows:68px minmax(0,1fr);
  background:#edf2f5;
}
.global-chat-topbar{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto auto;
  align-items:center;
  gap:18px;
  padding:
    max(8px,env(safe-area-inset-top,0px))
    max(16px,env(safe-area-inset-right,0px))
    8px
    max(16px,env(safe-area-inset-left,0px));
  background:#102c40;
  color:#fff;
  border-bottom:1px solid rgba(255,255,255,.12);
}
.global-chat-title,
.global-chat-self,
.global-chat-top-actions{
  display:flex;
  align-items:center;
  gap:10px;
}
.global-chat-logo{
  width:42px;
  height:42px;
  border-radius:12px;
  display:grid;
  place-items:center;
  background:#1f5574;
  font-size:22px;
}
.global-chat-title strong,
.global-chat-title small,
.global-chat-self strong,
.global-chat-self small{
  display:block;
}
.global-chat-title strong{font-size:14px}
.global-chat-title small{font-size:9px;color:#aac3d3;margin-top:2px}
.global-chat-self{
  padding:7px 10px;
  border-radius:10px;
  background:rgba(255,255,255,.06);
}
.global-chat-self strong{font-size:12px}
.global-chat-self small{font-size:8px;color:#a9c4d5;margin-top:2px}
.chat-self-badge{
  min-width:43px;
  height:30px;
  border-radius:8px;
  display:grid;
  place-items:center;
  padding:0 7px;
  font-size:8px;
  font-weight:1000;
}
.chat-self-badge.student{background:#dbeafb;color:#24557a}
.chat-self-badge.gm{background:#f3c546;color:#4b3300}

.global-chat-layout{
  display:grid;
  grid-template-columns:290px minmax(0,1fr);
  gap:10px;
  padding:10px;
  min-height:0;
}
.global-chat-members,
.global-chat-main{
  min-height:0;
  border:1px solid #d5e0e6;
  border-radius:13px;
  background:#fff;
  overflow:hidden;
}
.global-chat-members{
  display:grid;
  grid-template-rows:auto minmax(0,1fr) auto;
}
.global-chat-panel-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding:13px;
  border-bottom:1px solid #e7ecef;
}
.global-chat-panel-head span,
.global-chat-panel-head strong{display:block}
.global-chat-panel-head span{font-size:8px;color:#7b8e9c}
.global-chat-panel-head strong{font-size:12px;margin-top:2px}
.global-chat-panel-head b{
  min-width:31px;
  height:31px;
  display:grid;
  place-items:center;
  border-radius:9px;
  background:#edf5f9;
  color:#24557a;
}
.global-chat-member-list{
  overflow:auto;
  padding:8px;
}
.global-chat-member{
  display:grid;
  grid-template-columns:39px minmax(0,1fr) 9px;
  gap:8px;
  align-items:center;
  padding:8px;
  border-radius:9px;
}
.global-chat-member:hover{background:#f4f8fa}
.global-chat-member.me{background:#eaf4fa}
.global-chat-member.gm{background:#fff8df}
.global-chat-member-avatar{
  width:37px;
  height:37px;
  border-radius:10px;
  display:grid;
  place-items:center;
  background:#315e7a;
  color:#fff;
  font-size:10px;
  font-weight:1000;
}
.global-chat-member.gm .global-chat-member-avatar{
  background:#d5a821;
  color:#fff9df;
}
.global-chat-member strong,
.global-chat-member small{display:block}
.global-chat-member strong{font-size:11px}
.global-chat-member small{font-size:8px;color:#80919e;margin-top:2px}
.global-chat-member em{
  font-size:6px;
  font-style:normal;
  padding:2px 4px;
  border-radius:4px;
  background:#24557a;
  color:#fff;
}
.global-chat-rule-card{
  margin:8px;
  padding:10px;
  border-radius:10px;
  background:#f7f4ed;
  border:1px solid #e3d8c6;
}
.global-chat-rule-card strong{font-size:10px}
.global-chat-rule-card p{font-size:8px;color:#766b5d;margin:5px 0 0}

.global-chat-main{
  display:grid;
  grid-template-rows:minmax(0,1fr) auto;
}
.global-chat-messages{
  min-height:0;
  overflow:auto;
  padding:16px;
  scroll-behavior:smooth;
  background:
    linear-gradient(rgba(250,252,253,.94),rgba(250,252,253,.94)),
    radial-gradient(circle at 1px 1px,#d6e1e7 1px,transparent 0);
  background-size:auto,22px 22px;
}
.global-chat-empty{
  height:100%;
  min-height:200px;
  display:grid;
  place-items:center;
  color:#8798a5;
  font-size:11px;
}
.global-chat-empty.error{color:#a74d4d}

.global-message{
  position:relative;
  display:grid;
  grid-template-columns:38px minmax(0,680px) auto;
  gap:8px;
  align-items:end;
  margin:10px 0;
}
.global-message.mine{
  grid-template-columns:auto minmax(0,680px) 38px;
  justify-content:end;
}
.global-message.mine .global-message-avatar{
  grid-column:3;
  grid-row:1;
}
.global-message.mine .global-message-body{
  grid-column:2;
  grid-row:1;
}
.global-message.mine .global-message-delete{
  grid-column:1;
  grid-row:1;
}
.global-message-avatar{
  width:36px;
  height:36px;
  border-radius:10px;
  display:grid;
  place-items:center;
  background:#315e7a;
  color:#fff;
  font-size:9px;
  font-weight:1000;
}
.global-message.gm .global-message-avatar{
  background:#d1a11f;
}
.global-message-body{
  min-width:0;
  padding:9px 11px;
  border:1px solid #dce4e9;
  border-radius:12px 12px 12px 3px;
  background:#fff;
  box-shadow:0 2px 6px rgba(26,52,68,.05);
}
.global-message.mine .global-message-body{
  background:#e9f4fb;
  border-color:#c5dce9;
  border-radius:12px 12px 3px 12px;
}
.global-message.gm .global-message-body{
  background:#fff8dc;
  border-color:#ecd991;
}
.global-message-meta{
  display:flex;
  align-items:center;
  gap:6px;
  margin-bottom:4px;
}
.global-message-meta strong{
  font-size:10px;
  color:#21465f;
}
.global-message-meta time{
  margin-left:auto;
  color:#91a0aa;
  font-size:7px;
}
.gm-label{
  padding:2px 5px;
  border-radius:999px;
  background:#d4a51e;
  color:#fff;
  font-size:6px;
  font-weight:1000;
}
.global-message-text{
  white-space:pre-wrap;
  overflow-wrap:anywhere;
  line-height:1.55;
  font-size:13px;
  color:#263f50;
}
.global-message-delete{
  width:25px;
  height:25px;
  border:0;
  border-radius:7px;
  background:#edf0f2;
  color:#86939d;
  cursor:pointer;
}
.global-message-delete:hover{background:#f7dddd;color:#9f3f3f}

.global-chat-compose{
  display:grid;
  grid-template-columns:92px minmax(0,1fr) 92px;
  gap:8px;
  align-items:stretch;
  padding:10px;
  background:#102c40;
  border-top:1px solid rgba(255,255,255,.08);
}
.global-chat-compose-meta{
  padding:7px 9px;
  border-radius:10px;
  background:rgba(255,255,255,.06);
  color:#fff;
}
.global-chat-compose-meta span,
.global-chat-compose-meta strong{display:block}
.global-chat-compose-meta span{font-size:7px;color:#9cb6c7}
.global-chat-compose-meta strong{font-size:11px;margin-top:3px;overflow:hidden;text-overflow:ellipsis}
.global-chat-compose textarea{
  resize:none;
  min-height:58px;
  max-height:110px;
  border:0;
  outline:0;
  border-radius:10px;
  padding:11px 13px;
  font:inherit;
  font-size:14px;
}
.global-chat-compose button{
  border:0;
  border-radius:10px;
  background:linear-gradient(180deg,#55a96b,#347d4a);
  color:#fff;
  font-weight:1000;
  cursor:pointer;
}

@media(max-width:900px){
  .portal-head-actions{width:100%;display:grid;grid-template-columns:1fr 1fr}
  .global-chat-app{grid-template-rows:58px minmax(0,1fr)}
  .global-chat-topbar{
    grid-template-columns:minmax(0,1fr) auto;
    gap:8px;
    padding:6px max(8px,env(safe-area-inset-right,0px)) 6px max(8px,env(safe-area-inset-left,0px));
  }
  .global-chat-self{display:none}
  .global-chat-title small{display:none}
  .global-chat-layout{
    grid-template-columns:220px minmax(0,1fr);
    padding:6px;
    gap:6px;
  }
  .global-chat-compose{grid-template-columns:minmax(0,1fr) 72px}
  .global-chat-compose-meta{display:none}
}
@media(max-width:650px){
  .global-chat-page{
    position:fixed;
    inset:0;
  }
  .global-chat-app{
    height:100dvh;
    grid-template-rows:52px minmax(0,1fr);
  }
  .global-chat-logo{width:34px;height:34px;font-size:17px}
  .global-chat-title strong{font-size:10px}
  .global-chat-top-actions .small-btn{min-height:34px;height:34px;padding:0 7px;font-size:8px}
  .global-chat-layout{
    grid-template-columns:1fr;
    grid-template-rows:minmax(0,1fr);
    padding:4px;
  }
  .global-chat-members{display:none}
  .global-chat-main{border-radius:10px}
  .global-chat-messages{padding:8px}
  .global-message{
    grid-template-columns:32px minmax(0,1fr) auto;
    gap:5px;
    margin:7px 0;
  }
  .global-message.mine{
    grid-template-columns:auto minmax(0,1fr) 32px;
  }
  .global-message-avatar{width:31px;height:31px;border-radius:9px;font-size:8px}
  .global-message-body{padding:8px 9px}
  .global-message-text{font-size:12px}
  .global-chat-compose{
    grid-template-columns:minmax(0,1fr) 62px;
    gap:5px;
    padding:
      6px max(6px,env(safe-area-inset-right,0px))
      max(6px,env(safe-area-inset-bottom,0px))
      max(6px,env(safe-area-inset-left,0px));
  }
  .global-chat-compose textarea{
    min-height:52px;
    font-size:16px;
    padding:9px;
  }
  .global-chat-compose button{font-size:11px}
}

/* ==================================================================
   V3.8 CHARACTER PROFILE / WARDROBE / PUBLIC CHARACTER VIEW
   ================================================================== */
.character-profile-entry{
  background:linear-gradient(180deg,#7659ad,#554083)!important;
  color:#fff!important;border-color:#554083!important
}

.character-modal{
  position:fixed;inset:0;z-index:30000;display:grid;place-items:center;
  padding:24px;background:rgba(4,14,23,.72);backdrop-filter:blur(8px)
}
.character-modal.hidden{display:none!important}
.character-modal-card{
  position:relative;width:min(1060px,calc(100vw - 48px));max-height:calc(100vh - 48px);
  overflow:auto;padding:26px;background:#f8f5ec;border:3px solid #82643c;border-radius:20px;
  box-shadow:0 30px 100px rgba(0,0,0,.38)
}
.character-modal-close{
  position:absolute;right:13px;top:13px;width:40px;height:40px;border:0;border-radius:10px;
  background:#e9dfcd;color:#5e4b33;cursor:pointer;z-index:20
}
.character-setup-card{width:min(720px,calc(100vw - 48px));text-align:center}
.character-setup-card h2{font-size:28px;margin:8px 0}.character-setup-card>p{color:#756956;line-height:1.6}
.character-gender-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}
.character-gender-option{border:2px solid #d2c3a7;border-radius:16px;background:#fffdf6;padding:18px;cursor:pointer}
.character-gender-option:hover{border-color:#5e83a2;background:#f4f9fc}
.character-gender-option strong,.character-gender-option small{display:block}
.character-gender-option strong{font-size:18px;margin-top:8px}.character-gender-option small{font-size:10px;color:#81715e;margin-top:3px}

.character-profile-layout{display:grid;grid-template-columns:390px minmax(0,1fr);gap:18px}
.character-display-panel,.character-inventory-panel{border:1px solid #d9cfbd;border-radius:15px;background:#fffdf8;padding:18px}
.character-display-panel h2{margin:5px 0 12px}
.character-stage,.chat-character-stage{
  position:relative;display:grid;place-items:center;overflow:hidden;
  background:radial-gradient(circle at 50% 40%,rgba(255,238,183,.9),transparent 38%),linear-gradient(180deg,#d7e9ef 0 58%,#c4d8ad 58% 100%);
  border:2px solid #cdbb95;border-radius:16px
}
.preview-stage{height:230px}.large-stage{height:410px}
.chat-character-stage{height:390px;margin-top:12px}
.character-stage::after,.chat-character-stage::after{content:"";position:absolute;left:0;right:0;bottom:23%;height:2px;background:rgba(75,99,85,.16)}

.game-character{position:relative;width:155px;height:260px;z-index:2;transform-origin:center bottom}
.preview-stage .game-character{transform:scale(.72)}
.char-head{position:absolute;left:48px;top:42px;width:60px;height:64px;border-radius:44% 44% 48% 48%;background:#efc6a0;z-index:5}
.char-hair{position:absolute;left:43px;top:32px;width:70px;height:47px;background:#2c211d;border-radius:48% 48% 32% 32%;z-index:7}
.game-character.male .char-hair::before,.game-character.male .char-hair::after{content:"";position:absolute;background:#2c211d}
.game-character.male .char-hair::before{left:-5px;top:20px;width:15px;height:25px;border-radius:8px}
.game-character.male .char-hair::after{right:-5px;top:17px;width:14px;height:28px;border-radius:8px}
.game-character.female .char-hair{height:90px;left:39px;width:78px;border-radius:45% 45% 28% 28%}
.game-character.female .char-hair::after{content:"";position:absolute;right:-10px;top:32px;width:24px;height:58px;border-radius:50%;background:#2c211d}
.char-body{position:absolute;left:42px;top:103px;width:72px;height:78px;border-radius:18px 18px 12px 12px;background:#f5f1e9;z-index:4;border-bottom:10px solid #315b82}
.char-arm{position:absolute;top:112px;width:18px;height:68px;background:#eabf99;border-radius:12px;z-index:3}
.char-arm.left{left:25px;transform:rotate(5deg)}.char-arm.right{right:24px;transform:rotate(-5deg)}
.char-shorts{position:absolute;left:42px;top:174px;width:72px;height:38px;background:#315b82;border-radius:7px 7px 12px 12px;z-index:4}
.char-leg{position:absolute;top:205px;width:22px;height:36px;background:#e8bd98;z-index:3}
.char-leg.left{left:52px}.char-leg.right{right:51px}
.char-shoe{position:absolute;top:236px;width:30px;height:16px;background:#202a35;border-radius:10px 10px 5px 5px;z-index:4}
.char-shoe.left{left:44px}.char-shoe.right{right:43px}

.char-aura,.char-back-item,.char-face-item,.char-top-item,.char-bottom-item,.char-hand-item,.char-head-item,.char-pet-item{position:absolute;pointer-events:none}
.char-aura{inset:0;z-index:0}.char-back-item{z-index:1}.char-face-item{z-index:8}.char-top-item{z-index:6}
.char-bottom-item{z-index:6}.char-hand-item{z-index:9}.char-head-item{z-index:10}.char-pet-item{z-index:11}

.char-head-item[data-visual="cap"]{left:43px;top:22px;width:72px;height:28px;background:#316ca0;border-radius:30px 30px 8px 8px}
.char-head-item[data-visual="cap"]::after{content:"";position:absolute;right:-20px;bottom:0;width:30px;height:8px;background:#316ca0;border-radius:8px}
.char-face-item[data-visual="glasses"]{left:48px;top:67px;width:60px;height:18px;border-top:4px solid #26384a}
.char-face-item[data-visual="glasses"]::before,.char-face-item[data-visual="glasses"]::after{content:"";position:absolute;top:-8px;width:22px;height:17px;border:3px solid #26384a;border-radius:50%}
.char-face-item[data-visual="glasses"]::before{left:0}.char-face-item[data-visual="glasses"]::after{right:0}
.char-top-item[data-visual="shirt_blue"]{left:42px;top:103px;width:72px;height:78px;border-radius:18px;background:#3381b8}
.char-top-item[data-visual="thai_sash"]{left:61px;top:102px;width:18px;height:86px;background:linear-gradient(#d34e49,#f0c94e);transform:rotate(-18deg);border-radius:5px}
.char-top-item[data-visual="cyber_jacket"]{left:37px;top:100px;width:82px;height:86px;border-radius:16px;background:#142d42;border:3px solid #29d8e4;box-shadow:0 0 14px #29d8e4}
.char-head-item[data-visual="neon_headset"]{left:35px;top:41px;width:86px;height:58px;border:8px solid #292548;border-bottom:0;border-radius:48px 48px 0 0;box-shadow:0 0 10px #d846e8}
.char-head-item[data-visual="neon_headset"]::before,.char-head-item[data-visual="neon_headset"]::after{content:"";position:absolute;top:28px;width:16px;height:30px;background:#d846e8;border-radius:7px}
.char-head-item[data-visual="neon_headset"]::before{left:-10px}.char-head-item[data-visual="neon_headset"]::after{right:-10px}
.char-hand-item[data-visual="tablet"]{right:8px;top:138px;width:38px;height:52px;border-radius:5px;background:#132333;border:3px solid #42d6ee;box-shadow:0 0 12px #42d6ee}
.char-head-item[data-visual="gold_crown"]{left:48px;top:5px;width:62px;height:40px;background:linear-gradient(#ffd95a,#c99414);clip-path:polygon(0 100%,0 35%,25% 68%,43% 0,62% 68%,100% 28%,100% 100%);filter:drop-shadow(0 0 7px #ffd85e)}
.char-back-item[data-visual="backpack"]{left:28px;top:110px;width:90px;height:86px;border-radius:22px;background:#315f89;border:6px solid #203f5d}
.char-back-item[data-visual="royal_cape"]{left:31px;top:104px;width:94px;height:125px;background:linear-gradient(#7b245c,#461838);clip-path:polygon(12% 0,88% 0,100% 100%,50% 87%,0 100%);border-top:8px solid #f0c64d}
.char-back-item[data-visual="dragon_wings"]{left:-58px;top:75px;width:270px;height:150px}
.char-back-item[data-visual="dragon_wings"]::before,.char-back-item[data-visual="dragon_wings"]::after{content:"";position:absolute;top:0;width:125px;height:140px;background:linear-gradient(135deg,#512a8d,#e33c6f 55%,#f2943f);clip-path:polygon(100% 45%,64% 0,58% 35%,15% 12%,40% 55%,0 74%,52% 75%,63% 100%);filter:drop-shadow(0 0 12px rgba(231,73,115,.75))}
.char-back-item[data-visual="dragon_wings"]::before{left:0;transform:scaleX(-1)}.char-back-item[data-visual="dragon_wings"]::after{right:0}
.char-aura[data-visual="gold_aura"]{border:8px solid rgba(255,211,62,.62);border-radius:50%;box-shadow:0 0 25px #ffd84d,inset 0 0 20px #ffd84d;animation:characterAura 2s infinite alternate}
.char-aura[data-visual="master_halo"]::before{content:"";position:absolute;left:19px;top:8px;width:118px;height:38px;border:8px solid #65d9ff;border-radius:50%;box-shadow:0 0 20px #65d9ff;animation:haloPulse 1.4s infinite alternate}
.char-aura[data-visual="throne"]{left:-55px;right:-55px;top:60px;bottom:-15px;border-radius:80px 80px 20px 20px;background:linear-gradient(135deg,#6b234f,#2d164b);border:8px solid #e8bd42;z-index:-1;box-shadow:0 0 28px rgba(232,189,66,.65)}
.char-pet-item[data-visual="phoenix_pet"]{right:-75px;top:100px;width:60px;height:70px;background:#f04e2f;clip-path:polygon(50% 0,65% 33%,100% 22%,77% 55%,95% 88%,58% 72%,50% 100%,42% 72%,5% 88%,23% 55%,0 22%,35% 33%);filter:drop-shadow(0 0 13px #ff9c35);animation:petFloat 1.5s ease-in-out infinite alternate}
.char-shoe[data-equipped="shoe_white"]{background:#fff;border:1px solid #b7c1ca}

@keyframes characterAura{from{transform:scale(.94);opacity:.65}to{transform:scale(1.05);opacity:1}}
@keyframes haloPulse{from{transform:scaleX(.9);opacity:.65}to{transform:scaleX(1.1);opacity:1}}
@keyframes petFloat{from{transform:translateY(-4px)}to{transform:translateY(8px)}}

.character-profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin:12px 0}
.character-profile-stats>div{padding:10px;border:1px solid #ded5c6;border-radius:10px;background:#f8f4eb;text-align:center}
.character-profile-stats span,.character-profile-stats strong{display:block}.character-profile-stats span{font-size:8px;color:#81715e}.character-profile-stats strong{font-size:15px;margin-top:3px}
.character-inventory-head{display:flex;justify-content:space-between;gap:12px;align-items:end;margin-bottom:12px}
.character-inventory-head h3{margin:4px 0 0}.character-inventory-head small{color:#837460}
.character-inventory-list{display:grid;gap:8px;max-height:570px;overflow:auto;padding-right:3px}
.wardrobe-item{display:grid;grid-template-columns:54px minmax(0,1fr) 90px;gap:10px;align-items:center;padding:10px;border:1px solid #ddd4c6;border-radius:11px;background:#fff}
.wardrobe-item.equipped{box-shadow:inset 0 0 0 2px #4d9c70;background:#eff9f3}
.wardrobe-icon{font-size:28px;text-align:center}
.wardrobe-info span,.wardrobe-info strong,.wardrobe-info small{display:block}.wardrobe-info span{font-size:7px;font-weight:900;letter-spacing:.08em}
.wardrobe-info strong{font-size:11px;margin:2px 0}.wardrobe-info small{font-size:8px;color:#806f5c}
.wardrobe-action{text-align:right}.wardrobe-action>small{display:block;font-size:7px;color:#8c7b67;margin-bottom:5px}
.wardrobe-action .btn{min-height:34px;padding:0 9px;font-size:9px}

.rarity-common{--rarity:#7a8a92}.rarity-rare{--rarity:#397fc0}.rarity-epic{--rarity:#8e4dcc}.rarity-legendary{--rarity:#d08b17}.rarity-mythic{--rarity:#d63e6d}
.reward-card[class*="rarity-"],.wardrobe-item[class*="rarity-"]{border-top:4px solid var(--rarity)}
.reward-rarity{font-size:8px;font-weight:1000;letter-spacing:.09em;color:var(--rarity)}
.reward-slot{font-size:8px;color:#867867;margin:7px 0}
.reward-card.rarity-mythic{background:linear-gradient(145deg,#fff,#fff2f8);box-shadow:0 12px 30px rgba(214,62,109,.13)}
.reward-card.rarity-mythic .reward-icon{font-size:40px;filter:drop-shadow(0 4px 9px rgba(214,62,109,.28))}

/* Public character modal from chat */
.global-chat-member.clickable{cursor:pointer}
.global-chat-member.clickable:hover{outline:1px solid #7aa1b8}
.chat-character-modal{position:fixed;inset:0;z-index:31000;display:grid;place-items:center;background:rgba(4,14,23,.72);backdrop-filter:blur(7px);padding:16px}
.chat-character-modal.hidden{display:none!important}
.chat-character-card{position:relative;width:360px;max-width:100%;padding:20px;border-radius:18px;background:#fff9ec;border:3px solid #876738;text-align:center;box-shadow:0 25px 70px rgba(0,0,0,.35)}
.chat-character-card>button{position:absolute;right:9px;top:9px;width:36px;height:36px;border:0;border-radius:9px;background:#eadfc9;cursor:pointer}
.chat-character-card h2{margin:6px 0}.chat-character-meta{display:flex;justify-content:center;gap:8px;margin-top:10px;font-size:10px}.chat-character-meta strong{color:#5c4388}

@media(max-width:900px){
  .character-profile-layout{grid-template-columns:1fr}
  .large-stage{height:340px}
}
@media(max-width:650px){
  .character-modal{padding:7px}
  .character-modal-card{width:100%;max-height:calc(100dvh - 14px);padding:15px;border-width:2px}
  .character-gender-grid{gap:7px}.preview-stage{height:185px}
  .large-stage{height:320px}
  .wardrobe-item{grid-template-columns:45px minmax(0,1fr) 72px;gap:5px;padding:7px}
  .wardrobe-info small{display:none}
  .portal-head-actions{grid-template-columns:1fr 1fr}
  .portal-head-actions #logoutUserButton{grid-column:1/-1}
}


/* ==================================================================
   V3.9 — 2D ZONE + IN-ZONE TOKEN SHOP + GM MODERATION
   ================================================================== */
.zone-entry-main{
  background:linear-gradient(180deg,#315f7c,#21465f)!important;
  color:#fff!important;border-color:#21465f!important
}
.character-profile-actions{display:grid;gap:7px;margin-top:10px}

/* ---- 2D Zone ---- */
.zone-v39-page{
  margin:0;width:100vw;height:100vh;height:100dvh;overflow:hidden;
  background:#061725;color:#173449
}
.zone-v39-gate{
  position:fixed;inset:0;z-index:50000;display:grid;place-items:center;
  background:radial-gradient(circle at 50% 20%,#1b4965,#061521 70%)
}
.zone-v39-gate-card{
  width:min(520px,calc(100% - 36px));padding:38px;text-align:center;
  background:#fff9eb;border:4px solid #916b3c;border-radius:22px;
  box-shadow:0 30px 100px rgba(0,0,0,.42)
}
.zone-v39-gate[data-state="banned"] .zone-v39-gate-card{border-color:#a23e3e}
.zone-v39-gate[data-state="kicked"] .zone-v39-gate-card{border-color:#c9832d}
.zone-v39-gate-icon{font-size:56px}.zone-v39-gate-card h1{margin:10px 0 8px}.zone-v39-gate-card p{color:#746754;line-height:1.65}

.zone-v39-app{
  width:100vw;height:100vh;height:100dvh;
  display:grid;grid-template-rows:68px minmax(0,1fr) 86px;background:#071827
}
.zone-v39-topbar{
  display:grid;grid-template-columns:minmax(0,1fr) auto auto auto;gap:14px;align-items:center;
  padding:7px 16px;background:linear-gradient(180deg,#0c2a40,#071c2c);
  color:#fff;border-bottom:1px solid rgba(255,255,255,.11)
}
.zone-v39-brand,.zone-v39-self,.zone-v39-actions{display:flex;align-items:center;gap:9px}
.zone-v39-logo{width:42px;height:42px;border-radius:12px;background:#16425e;display:grid;place-items:center;font-size:22px}
.zone-v39-brand strong,.zone-v39-brand small,.zone-v39-self strong,.zone-v39-self small,.zone-v39-wallet span,.zone-v39-wallet strong{display:block}
.zone-v39-brand strong{font-size:12px;letter-spacing:.06em}.zone-v39-brand small{font-size:8px;color:#9ebbcf;margin-top:2px}
.zone-v39-self{padding:6px 10px;background:rgba(255,255,255,.06);border-radius:10px}
.zone-v39-self strong{font-size:11px}.zone-v39-self small{font-size:8px;color:#a8c1d2;margin-top:2px}
.zone-v39-wallet{min-width:88px;text-align:right}.zone-v39-wallet span{font-size:7px;color:#e7c96e}.zone-v39-wallet strong{font-size:16px;color:#ffda63;margin-top:2px}
.zone-v39-actions .btn{min-height:38px;padding:0 11px;font-size:9px}
.zone-shop-button{background:linear-gradient(180deg,#c28d26,#8a5c17)!important;color:#fff!important;border-color:#d7a647!important}

.zone-v39-world{position:relative;min-height:0;overflow:hidden;background:#122f41}
#zoneCanvas{display:block;width:100%;height:100%;cursor:pointer}
.zone-v39-help{
  position:absolute;left:12px;top:12px;display:flex;gap:7px;align-items:center;
  padding:7px 10px;border-radius:9px;background:rgba(5,18,28,.8);color:#d7e8f2;
  font-size:8px;border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(7px)
}
.zone-v39-help b{color:#ffd86c}

.zone-v39-player-card{
  position:absolute;right:14px;top:14px;width:270px;padding:16px;
  background:rgba(255,249,233,.97);border:3px solid #896638;border-radius:15px;
  box-shadow:0 20px 60px rgba(0,0,0,.28)
}
.zone-v39-player-card>button{position:absolute;right:8px;top:8px;width:32px;height:32px;border:0;border-radius:8px;background:#eadfc9;cursor:pointer}
.zone-v39-player-card h3{margin:7px 0 3px}.zone-v39-player-card p{font-size:10px;color:#736551;margin:0 0 10px}
.zone-v39-player-card>span{font-size:8px;color:#81725e}
.zone-player-equipped-list{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-top:7px}
.zone-player-equipped-list>div{min-height:62px;padding:5px;display:grid;place-items:center;text-align:center;background:#fff;border:1px solid #dfd3bd;border-radius:8px}
.zone-player-equipped-list span{font-size:22px}.zone-player-equipped-list small{font-size:7px;color:#6f6251}.empty-mini{grid-column:1/-1;font-size:8px;color:#887966}

.zone-v39-controls{
  display:grid;grid-template-columns:92px minmax(0,760px) 92px;gap:10px;justify-content:center;align-items:center;
  padding:10px 16px max(10px,env(safe-area-inset-bottom,0px));
  background:linear-gradient(180deg,#102c40,#071b29);border-top:1px solid rgba(255,255,255,.12)
}
.zone-move-button{
  height:62px;border:1px solid rgba(255,255,255,.14);border-radius:16px;
  background:linear-gradient(180deg,#285e80,#173d59);color:#fff;font-size:30px;font-weight:900;
  cursor:pointer;touch-action:none;user-select:none
}
.zone-move-button:active{transform:translateY(2px)}
.zone-v39-chat-form{
  height:62px;display:grid;grid-template-columns:minmax(0,1fr) 88px;gap:7px;padding:7px;
  background:#f7f0e2;border:3px solid #8b6537;border-radius:16px
}
.zone-v39-chat-form input{min-width:0;border:0;outline:0;border-radius:9px;padding:0 13px;background:#fffaf0;font-size:15px}
.zone-v39-chat-form button{border:0;border-radius:9px;background:linear-gradient(#8bb53c,#527c24);color:#fff;font-weight:900;cursor:pointer}

/* ---- Zone modals ---- */
.zone-v39-modal{
  position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:20px;
  background:rgba(3,13,21,.72);backdrop-filter:blur(7px)
}
.zone-v39-modal.hidden{display:none!important}
.zone-v39-modal-card{
  position:relative;width:min(1120px,calc(100vw - 40px));max-height:calc(100dvh - 40px);
  overflow:auto;padding:24px;background:#fff8e9;border:4px solid #8c6636;border-radius:20px;
  box-shadow:0 30px 100px rgba(0,0,0,.4)
}
.zone-v39-modal-close{position:absolute;right:12px;top:12px;width:40px;height:40px;border:0;border-radius:10px;background:#eadfc9;cursor:pointer;z-index:5}
.zone-shop-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:15px}
.zone-shop-head h2{margin:5px 0}.zone-shop-head p{margin:0;color:#776956;font-size:10px}
.zone-shop-wallet{min-width:150px;padding:11px;border-radius:11px;background:#5e4021;color:#fff;text-align:center}
.zone-shop-wallet span,.zone-shop-wallet strong{display:block}.zone-shop-wallet span{font-size:8px;color:#edcf91}.zone-shop-wallet strong{font-size:25px;color:#ffd86a;margin-top:4px}
.zone-shop-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
.zone-shop-item{
  --rarity:#7a8a92;display:grid;grid-template-rows:auto auto auto minmax(36px,auto) auto auto;
  gap:5px;padding:12px;border:1px solid #ded2bd;border-top:5px solid var(--rarity);border-radius:13px;background:#fff;text-align:center
}
.zone-shop-item.rarity-common{--rarity:#7a8a92}.zone-shop-item.rarity-rare{--rarity:#397fc0}.zone-shop-item.rarity-epic{--rarity:#8e4dcc}
.zone-shop-item.rarity-legendary{--rarity:#d08b17}.zone-shop-item.rarity-mythic{--rarity:#d63e6d;background:linear-gradient(145deg,#fff,#fff1f7)}
.zone-shop-item.wearing{box-shadow:inset 0 0 0 3px #4c9b6c}
.zone-shop-rarity{font-size:7px;font-weight:1000;letter-spacing:.1em;color:var(--rarity)}
.zone-shop-icon{font-size:36px}.zone-shop-item>strong{font-size:11px}.zone-shop-item>small{font-size:8px;color:#776957;line-height:1.45}
.zone-shop-item>em{font-style:normal;font-size:10px;font-weight:900;color:#87611f}
.zone-shop-item .btn{min-height:36px;font-size:9px}
.zone-buy-btn{background:linear-gradient(#b98b2d,#795313)!important;color:#fff!important;border-color:#a77a22!important}
.zone-own-profile-card{width:min(520px,calc(100vw - 40px));text-align:center}
.zone-profile-preview{margin:10px auto;border:2px solid #c9b78f;border-radius:15px;overflow:hidden;background:#17394a}
#zoneProfileCanvas{display:block;width:100%;height:auto}

/* ---- Admin Zone moderation ---- */
.zone-admin-tab{color:#6b4d14!important}
.zone-admin-summary{display:flex;gap:8px}
.zone-admin-summary span{padding:8px 10px;border-radius:9px;background:#eef4f7;font-size:9px;color:#647785}
.zone-admin-summary b{font-size:16px;color:#244b75;margin-right:3px}
.zone-admin-help{padding:10px 12px;margin-bottom:12px;border:1px solid #e4d7bd;border-radius:10px;background:#fff8e7;color:#76654d;font-size:9px;line-height:1.65}
.zone-control-table{min-width:1320px}
.zone-row-online{background:#f1fbf5}.zone-row-banned{background:#fff0f0}
.zone-admin-status{display:inline-flex;padding:4px 7px;border-radius:999px;font-size:7px;font-weight:900}
.zone-admin-status.online{background:#dff5e8;color:#287348}.zone-admin-status.offline{background:#edf0f2;color:#77848d}.zone-admin-status.banned{background:#f8dede;color:#9b3030}
.zone-ban-reason{width:170px;min-height:35px!important;font-size:10px!important;padding:5px 7px!important}
.zone-ban-duration{display:flex;gap:4px}.zone-ban-duration input{width:60px;min-height:35px!important;font-size:10px!important;padding:5px!important}
.zone-ban-duration select{width:76px;min-height:35px;font-size:9px}
.zone-admin-actions{display:flex;gap:4px}.zone-admin-actions .btn{min-height:34px;padding:0 8px;font-size:8px}
.zone-kick-btn{background:#d18b2b!important;color:#fff!important;border-color:#c17b20!important}

@media(max-width:1050px){
  .zone-v39-topbar{grid-template-columns:minmax(0,1fr) auto auto;gap:7px}
  .zone-v39-self{display:none}
  .zone-shop-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
}
@media(max-width:700px){
  .zone-v39-app{grid-template-rows:52px minmax(0,1fr) 74px}
  .zone-v39-topbar{grid-template-columns:minmax(0,1fr) auto auto;padding:5px 6px}
  .zone-v39-logo{width:34px;height:34px;font-size:18px}.zone-v39-brand strong{font-size:8px}.zone-v39-brand small{display:none}
  .zone-v39-wallet{min-width:55px}.zone-v39-wallet span{font-size:6px}.zone-v39-wallet strong{font-size:12px}
  .zone-v39-actions .btn{display:none}.zone-v39-actions #openZoneShop{display:inline-flex;min-height:34px;padding:0 7px}
  .zone-v39-help{display:none}
  .zone-v39-controls{grid-template-columns:56px minmax(0,1fr) 56px;gap:5px;padding:6px}
  .zone-move-button{height:56px;font-size:23px}
  .zone-v39-chat-form{height:56px;grid-template-columns:minmax(0,1fr) 55px;border-width:2px;padding:5px}
  .zone-v39-chat-form input{font-size:16px;padding:0 8px}.zone-v39-chat-form button{font-size:10px}
  .zone-v39-player-card{left:6px;right:6px;top:auto;bottom:6px;width:auto}
  .zone-v39-modal{padding:7px}.zone-v39-modal-card{width:100%;max-height:calc(100dvh - 14px);padding:15px;border-width:2px}
  .zone-shop-head{display:block}.zone-shop-wallet{margin-top:8px}
  .zone-shop-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}
  .zone-shop-item{padding:8px}.zone-shop-icon{font-size:29px}
}
@media(max-width:400px){
  .zone-shop-grid{grid-template-columns:1fr 1fr}
  .zone-v39-controls{grid-template-columns:50px minmax(0,1fr) 50px}
  .zone-move-button{height:52px}
}


/* ==================================================================
   V4.0 STABLE 2D ZONE — DAY / NIGHT EVERY 3 HOURS
   ================================================================== */
.zone-v40-page{
  margin:0;width:100vw;height:100vh;height:100dvh;overflow:hidden;
  background:#061725;color:#173449
}

.zone-v40-gate{
  position:fixed;inset:0;z-index:50000;display:grid;place-items:center;
  background:radial-gradient(circle at 50% 20%,#1b4965,#061521 70%)
}
.zone-v40-gate-card{
  width:min(620px,calc(100% - 36px));padding:32px;
  background:#fff9eb;border:4px solid #916b3c;border-radius:22px;text-align:center;
  box-shadow:0 30px 100px rgba(0,0,0,.42)
}
.zone-v40-gate[data-state="banned"] .zone-v40-gate-card,
.zone-v40-gate[data-state="rules"] .zone-v40-gate-card{border-color:#ad4141}
.zone-v40-gate[data-state="kicked"] .zone-v40-gate-card{border-color:#c9832d}
.zone-v40-gate-icon{font-size:52px}
.zone-v40-gate-card h1{margin:8px 0}
.zone-v40-gate-card>p{color:#746754;line-height:1.6}

.zone-boot-steps{
  display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin:17px 0;
}
.zone-boot-steps>div{
  min-width:0;padding:8px 5px;border:1px solid #dfd2bc;border-radius:9px;background:#fffdf6
}
.zone-boot-steps span{
  width:21px;height:21px;margin:auto auto 5px;border-radius:50%;
  display:grid;place-items:center;background:#e7e0d3;font-size:8px;font-weight:900
}
.zone-boot-steps strong,.zone-boot-steps em{display:block}
.zone-boot-steps strong{font-size:8px}.zone-boot-steps em{font-size:7px;color:#8c7c66;font-style:normal;margin-top:3px}
.zone-boot-steps>div[data-status="ok"]{background:#eff9f2;border-color:#a9d5b8}
.zone-boot-steps>div[data-status="ok"] span{background:#3a9960;color:#fff}
.zone-boot-steps>div[data-status="loading"] span{background:#397fac;color:#fff}
.zone-boot-steps>div[data-status="error"]{background:#fff0f0;border-color:#e2a2a2}
.zone-boot-steps>div[data-status="error"] span{background:#bf4545;color:#fff}
.zone-gate-error-help{
  margin:10px 0;padding:11px;border:1px solid #e1b6a6;border-radius:10px;
  background:#fff2ed;text-align:left;color:#714a3e;font-size:9px;line-height:1.6
}
.zone-gate-error-help strong{font-size:10px}.zone-gate-error-help p{margin:5px 0}
.zone-gate-error-help code{padding:2px 4px;border-radius:4px;background:#f2ddd4}

.zone-v40-app{
  width:100vw;height:100vh;height:100dvh;
  display:grid;grid-template-rows:68px minmax(0,1fr) 86px;background:#071827
}
.zone-v40-topbar{
  display:grid;grid-template-columns:minmax(0,1fr) auto auto auto auto;gap:12px;align-items:center;
  padding:7px 14px;background:linear-gradient(180deg,#0c2a40,#071c2c);
  color:#fff;border-bottom:1px solid rgba(255,255,255,.11)
}
.zone-v40-brand,.zone-v40-self,.zone-v40-actions{display:flex;align-items:center;gap:9px}
.zone-v40-logo{width:42px;height:42px;border-radius:12px;background:#16425e;display:grid;place-items:center;font-size:22px}
.zone-v40-brand strong,.zone-v40-brand small,.zone-v40-self strong,.zone-v40-self small,
.zone-v40-time span,.zone-v40-time strong,.zone-v40-wallet span,.zone-v40-wallet strong{display:block}
.zone-v40-brand strong{font-size:12px;letter-spacing:.05em}.zone-v40-brand small{font-size:8px;color:#9ebbcf;margin-top:2px}
.zone-v40-time{min-width:118px;padding:6px 9px;border-radius:9px;background:rgba(255,255,255,.06)}
.zone-v40-time span{font-size:10px;font-weight:900;color:#ffd46d}.zone-v40-time strong{font-size:7px;color:#a9c2d2;margin-top:2px}
.zone-v40-self{padding:6px 9px;background:rgba(255,255,255,.06);border-radius:9px}
.zone-v40-self strong{font-size:10px}.zone-v40-self small{font-size:7px;color:#a8c1d2}
.zone-v40-wallet{text-align:right}.zone-v40-wallet span{font-size:7px;color:#e7c96e}.zone-v40-wallet strong{font-size:15px;color:#ffda63}
.zone-v40-actions .btn{min-height:37px;padding:0 9px;font-size:8px}

.zone-v40-world{position:relative;min-height:0;overflow:hidden;background:#122f41;transition:background .4s ease}
#zoneCanvas{display:block;width:100%;height:100%;cursor:pointer}
.zone-v40-help{
  position:absolute;left:11px;top:11px;display:flex;gap:6px;align-items:center;
  padding:7px 9px;border-radius:9px;background:rgba(5,18,28,.8);color:#d7e8f2;
  font-size:8px;border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(7px)
}
.zone-v40-help b{color:#ffd86c}
.zone-connection-badge{
  position:absolute;right:11px;bottom:10px;display:flex;align-items:center;gap:6px;
  padding:6px 9px;border-radius:999px;background:rgba(6,27,38,.82);
  color:#cbe5d3;font-size:7px;letter-spacing:.05em
}
.zone-connection-badge[data-state="error"]{background:#6e2626;color:#fff}

.zone-v40-player-card{
  position:absolute;right:14px;top:14px;width:270px;padding:16px;
  background:rgba(255,249,233,.97);border:3px solid #896638;border-radius:15px;
  box-shadow:0 20px 60px rgba(0,0,0,.28)
}
.zone-v40-player-card>button{position:absolute;right:8px;top:8px;width:32px;height:32px;border:0;border-radius:8px;background:#eadfc9;cursor:pointer}

.zone-v40-controls{
  display:grid;grid-template-columns:92px minmax(0,760px) 92px;gap:10px;justify-content:center;align-items:center;
  padding:10px 16px max(10px,env(safe-area-inset-bottom,0px));
  background:linear-gradient(180deg,#102c40,#071b29);border-top:1px solid rgba(255,255,255,.12)
}
.zone-v40-chat-form{
  height:62px;display:grid;grid-template-columns:minmax(0,1fr) 88px;gap:7px;padding:7px;
  background:#f7f0e2;border:3px solid #8b6537;border-radius:16px
}
.zone-v40-chat-form input{min-width:0;border:0;outline:0;border-radius:9px;padding:0 13px;background:#fffaf0;font-size:15px}
.zone-v40-chat-form button{border:0;border-radius:9px;background:linear-gradient(#8bb53c,#527c24);color:#fff;font-weight:900;cursor:pointer}

.zone-v40-modal{
  position:fixed;inset:0;z-index:40000;display:grid;place-items:center;padding:20px;
  background:rgba(3,13,21,.72);backdrop-filter:blur(7px)
}
.zone-v40-modal.hidden{display:none!important}
.zone-v40-modal-card{
  position:relative;width:min(1120px,calc(100vw - 40px));max-height:calc(100dvh - 40px);
  overflow:auto;padding:24px;background:#fff8e9;border:4px solid #8c6636;border-radius:20px;
  box-shadow:0 30px 100px rgba(0,0,0,.4)
}
.zone-v40-modal-close{position:absolute;right:12px;top:12px;width:40px;height:40px;border:0;border-radius:10px;background:#eadfc9;cursor:pointer;z-index:5}

@media(max-width:1100px){
  .zone-v40-topbar{grid-template-columns:minmax(0,1fr) auto auto auto}
  .zone-v40-self{display:none}
}
@media(max-width:760px){
  .zone-v40-app{grid-template-rows:52px minmax(0,1fr) 74px}
  .zone-v40-topbar{grid-template-columns:minmax(0,1fr) auto auto;padding:5px 6px;gap:5px}
  .zone-v40-brand small,.zone-v40-time{display:none}
  .zone-v40-logo{width:33px;height:33px;font-size:17px}.zone-v40-brand strong{font-size:8px}
  .zone-v40-wallet{min-width:50px}.zone-v40-wallet strong{font-size:11px}
  .zone-v40-actions .btn{display:none}.zone-v40-actions #openZoneShop{display:inline-flex;min-height:34px;padding:0 7px}
  .zone-v40-help{display:none}
  .zone-v40-controls{grid-template-columns:56px minmax(0,1fr) 56px;gap:5px;padding:6px}
  .zone-v40-chat-form{height:56px;grid-template-columns:minmax(0,1fr) 55px;border-width:2px;padding:5px}
  .zone-v40-chat-form input{font-size:16px;padding:0 8px}.zone-v40-chat-form button{font-size:10px}
  .zone-boot-steps{grid-template-columns:1fr}.zone-boot-steps>div{display:grid;grid-template-columns:28px 1fr auto;align-items:center;text-align:left}
  .zone-boot-steps span{margin:0}.zone-boot-steps em{text-align:right}
  .zone-v40-player-card{left:6px;right:6px;top:auto;bottom:6px;width:auto}
  .zone-v40-modal{padding:7px}.zone-v40-modal-card{width:100%;max-height:calc(100dvh - 14px);padding:15px;border-width:2px}
}


/* ==================================================================
   V4.1 — GM EXCLUSIVE CHARACTER + 24H ZONE CHAT
   ================================================================== */
.zone-chat-history-button{background:linear-gradient(180deg,#6d4aa7,#4d337d)!important;color:#fff!important;border-color:#7553ad!important}
.gm-admin-panel,.gm-zone-entry{background:linear-gradient(180deg,#8b223d,#5d1328)!important;color:#ffe9a8!important;border-color:#d3a43d!important}
.zone-chat-history-card{width:min(900px,calc(100vw - 40px))}
.zone-chat-history-head{display:flex;justify-content:space-between;gap:18px;align-items:flex-end;margin-bottom:12px}
.zone-chat-history-head h2{margin:5px 0}.zone-chat-history-head p{margin:0;color:#746753;font-size:9px}
.zone-chat-history-legend{display:flex;gap:6px}.zone-chat-history-legend span{padding:6px 8px;border-radius:999px;font-size:7px;font-weight:900}
.zone-chat-history-legend .user{background:#e8f0f5;color:#45677d}.zone-chat-history-legend .gm{background:#64172c;color:#ffe8a3;border:1px solid #d6a943}
.zone-chat-history-list{height:min(560px,65vh);overflow:auto;display:grid;gap:7px;padding:4px}
.zone-chat-log-row{display:grid;grid-template-columns:46px minmax(0,1fr);gap:9px;padding:10px;border:1px solid #ddd4c4;border-radius:11px;background:#fff}
.zone-chat-log-row.gm{background:linear-gradient(135deg,#fff6dc,#fff);border:2px solid #c99837;box-shadow:0 5px 18px rgba(142,89,25,.1)}
.zone-chat-log-avatar{width:42px;height:42px;border-radius:11px;display:grid;place-items:center;background:#16394f;color:#fff;font-size:9px;font-weight:1000}
.zone-chat-log-row.gm .zone-chat-log-avatar{background:#6b1730;color:#ffe6a0;border:2px solid #d6a843}
.zone-chat-log-body>div{display:flex;gap:8px;align-items:center}.zone-chat-log-body strong{font-size:10px}.zone-chat-log-body time{margin-left:auto;font-size:7px;color:#897967}
.zone-chat-log-body p{margin:5px 0;font-size:12px;line-height:1.5;color:#253d4b}.zone-chat-log-row.gm p{color:#61182c;font-weight:700}.zone-chat-log-body small{font-size:7px;color:#8a7964}.zone-chat-empty{padding:40px;text-align:center;color:#897a68}
.gm-exclusive-mini{border-color:#d3a33e!important;background:linear-gradient(#fff6dc,#fff)!important}

.admin-zone-chat-summary{display:flex;gap:8px;margin-bottom:12px}.admin-zone-chat-summary span{padding:8px 11px;border-radius:9px;background:#edf3f6;font-size:8px}.admin-zone-chat-summary b{font-size:15px;color:#244c73;margin-right:3px}
.admin-zone-chat-list{display:grid;gap:7px;max-height:650px;overflow:auto;padding:3px}
.admin-zone-chat-message{display:grid;grid-template-columns:46px minmax(0,1fr) auto;gap:10px;align-items:start;padding:10px;border:1px solid #dce3e7;border-radius:10px;background:#fff}
.admin-zone-chat-message.gm{background:#fff7dc;border:2px solid #ca9b32}.admin-zone-chat-avatar{width:42px;height:42px;border-radius:10px;background:#153a51;color:#fff;display:grid;place-items:center;font-size:9px;font-weight:900}
.admin-zone-chat-message.gm .admin-zone-chat-avatar{background:#65162c;color:#ffe5a0;border:2px solid #d1a23c}.admin-zone-chat-meta{display:flex;flex-wrap:wrap;gap:7px;align-items:center}.admin-zone-chat-meta strong{font-size:10px}.admin-zone-chat-meta span,.admin-zone-chat-meta time{font-size:8px;color:#7a8992}.admin-zone-chat-meta time{margin-left:auto}.admin-zone-chat-content p{margin:5px 0;font-size:11px;line-height:1.5}.admin-zone-chat-message.gm .admin-zone-chat-content p{color:#64172d;font-weight:700}.admin-zone-chat-content small{font-size:7px;color:#897967}
.btn.warning{background:#c7892e!important;color:#fff!important;border-color:#ad721f!important}

@media(max-width:900px){.zone-chat-history-head{display:block}.zone-chat-history-legend{margin-top:8px}.admin-zone-chat-message{grid-template-columns:42px minmax(0,1fr)}.admin-zone-chat-message>.mini-delete{grid-column:1/-1}.admin-zone-chat-meta time{margin-left:0}}


/* ===== V4.2 — MOBILE/TABLET ZONE ONLY + GM LABEL ===== */
.mobile-zone-only-card{border:1px solid #d2deea;background:linear-gradient(180deg,#ffffff 0%,#f3f8fc 100%)}
.mobile-zone-only-card h3{margin:6px 0 10px;font-size:24px;color:#193a5d}
.mobile-zone-only-card p{margin:0 0 14px;color:#536171;line-height:1.75}
.mobile-zone-only-card small{display:block;margin-top:12px;color:#6a7685}
.mobile-zone-only-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:#e8f1fb;color:#1f4f7b;font-size:11px;font-weight:800;letter-spacing:.08em}
.mobile-zone-only-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
.mobile-zone-only-actions .btn{min-height:48px;padding:0 22px;font-size:16px}
.zone-only-device #userPortal>.portal-stat-grid,
.zone-only-device #userPortal>#languageSection,
.zone-only-device #userPortal>#learningSection,
.zone-only-device #userPortal>#modeSection,
.zone-only-device #userPortal>#classicConfig,
.zone-only-device #userPortal>#officialConfig,
.zone-only-device #userPortal>#pvpConfig,
.zone-only-device #userPortal>.social-hub-grid,
.zone-only-device #userPortal>.zone-entry-card,
.zone-only-device #userPortal>.character-placeholder,
.zone-only-device #userPortal>section.card:not(#mobileZoneOnlyNotice){display:none!important}
.zone-only-device #openCharacterProfileButton{display:none!important}
.zone-only-device .user-portal-head{align-items:flex-start}
.zone-only-device .user-portal-head h2{font-size:28px}
.zone-only-device .portal-head-actions{display:flex;flex-wrap:wrap;gap:10px}
.zone-only-device .zone-entry-main{min-height:48px;padding:0 20px}
@media(max-width:900px){.mobile-zone-only-card h3{font-size:21px}}
@media(max-width:650px){.mobile-zone-only-card{padding:18px}.mobile-zone-only-card h3{font-size:20px}.mobile-zone-only-actions .btn{width:100%;justify-content:center}}


/* ===== V4.3 STABILITY / COMPLETE PVP / ADMIN ARCHIVE ===== */
#pvpGameScreen{max-width:1180px;margin:18px auto;min-height:calc(100vh - 36px)}
#pvpTypingStage.wrong-flash{border-color:#cb3b3b;box-shadow:0 0 0 4px rgba(203,59,59,.14)}
#pvpTypingStage.wrong-shake{animation:shake .2s}
#pvpTypingDisplay .pending{color:#9ba5ae}
#pvpTypingDisplay .correct{color:#237a54;background:rgba(35,122,84,.07)}
#pvpTypingDisplay .current{border-left:2px solid var(--blue);background:#eef5fc;animation:blink .9s infinite}
.admin-toast{position:fixed;right:18px;bottom:18px;z-index:60000;width:min(360px,calc(100vw - 36px));padding:14px 16px;border-radius:12px;background:#153f61;color:#fff;box-shadow:0 18px 60px rgba(0,0,0,.22);display:grid;gap:4px}
.admin-toast strong{font-size:13px}.admin-toast span{font-size:11px;color:#d8e8f4}.admin-toast.error{background:#8d3030}.admin-toast.hidden{display:none!important}
.admin-zone-chat-message.expired{opacity:.72;background:#f5f6f7;border-style:dashed}
.admin-zone-chat-message.expired small{color:#8a6a37;font-weight:700}
@media(max-width:900px){#pvpGameScreen{margin:0;min-height:100dvh;border-radius:0}.pvp-progress-board>div{grid-template-columns:100px 1fr 48px}}


/* =====================================================================
   V4.12.0 — DUAL RANKING / PVP MULTI ROOM / TOKEN ECONOMY / ITEM SET 2
   ===================================================================== */
.ranking-mode-switch{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:8px 0 10px}
.ranking-mode-btn{min-height:38px;border:1px solid #d4dde6;border-radius:9px;background:#f6f8fa;color:#496174;font-weight:800;cursor:pointer}
.ranking-mode-btn.active{background:#1f557a;color:#fff;border-color:#1f557a}.ranking-row.me{box-shadow:inset 3px 0 #4ba26c}
.pvp-rule-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:12px 0}.pvp-rule-grid label{display:grid;gap:5px}.pvp-rule-grid span{font-size:9px;font-weight:800;color:#6b7884}.pvp-rule-grid select{min-height:44px;border:1px solid #ccd7e1;border-radius:9px;padding:0 10px;background:#fff}
.pvp-wager-note{padding:9px 11px;border-radius:9px;background:#fff8df;border:1px solid #ead69b;color:#77601d;font-size:9px}
.three-actions{grid-template-columns:1fr 1fr 1.2fr}.pvp-code-join-card{padding:14px;border:1px solid #d4dee8;border-radius:13px;background:#f8fbfd;display:grid;gap:8px}.pvp-code-join-card>span{font-weight:900}.pvp-code-join-card>div{display:grid;grid-template-columns:1fr auto;gap:6px}.pvp-code-join-card input{min-width:0;text-transform:uppercase;letter-spacing:.12em;font-weight:900;font-size:16px}.pvp-code-join-card small{font-size:8px;color:#72808c}
.pvp-room-browser{margin-top:12px;border:1px solid #dce4ea;border-radius:12px;overflow:hidden}.pvp-room-browser-head{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#f1f6f9}.pvp-room-browser-head strong,.pvp-room-browser-head small{display:block}.pvp-room-browser-head small{font-size:8px;color:#788692}.available-pvp-rooms{display:grid;gap:6px;padding:8px;max-height:260px;overflow:auto}.available-room-card{display:grid;grid-template-columns:100px 1fr auto;gap:10px;align-items:center;padding:9px;border:1px solid #e0e6eb;border-radius:9px;background:#fff}.available-room-card span,.available-room-card small{display:block;font-size:8px;color:#76848e}.available-room-card strong{font-size:16px;letter-spacing:.08em}.available-room-card b{font-size:10px}
.pvp-lobby-v44{grid-template-columns:210px 1fr 180px}.pvp-players-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:6px}.pvp-player-slot.team-a{border-left:4px solid #3e83c4}.pvp-player-slot.team-b{border-left:4px solid #bf5967}.pvp-lobby-score{padding:12px;border-radius:10px;background:#f4f7f9;display:grid;align-content:center}.pvp-lobby-score span,.pvp-lobby-score small{font-size:8px;color:#70808c}.pvp-lobby-score strong{font-size:15px;margin:4px 0}
.pvp-shot-header{display:grid;grid-template-columns:auto auto 1fr;gap:10px;align-items:center;margin:10px 0;padding:9px 12px;border-radius:10px;background:#eef4f8}.pvp-shot-header strong{font-size:14px}.pvp-shot-header span{font-weight:900}.pvp-shot-header small{text-align:right;color:#6f7e89}
.pvp-team-board{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}.pvp-team-card{padding:11px;border:1px solid #d8e0e6;border-radius:11px}.pvp-team-card.team-a{background:#f1f7fd}.pvp-team-card.team-b{background:#fff4f5}.pvp-team-head{display:flex;justify-content:space-between;gap:10px;margin-bottom:7px}.pvp-team-head span{font-size:9px;color:#667681}.pvp-team-card>strong{display:block;text-align:right;margin-top:4px}
.result-explanation{margin:16px 0;padding:15px;border:1px solid #d7e1e8;border-radius:13px;background:#f8fbfd;text-align:left}.result-explain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.result-explain-grid>div{padding:10px;background:#fff;border:1px solid #e2e7eb;border-radius:9px}.result-explain-grid span{font-size:8px;font-weight:900;color:#567087}.result-explain-grid p{margin:5px 0 0;line-height:1.6}.result-code-sample{margin-top:9px;padding:12px;border-radius:9px;background:#112838;color:#d9edf7;overflow:auto;white-space:pre-wrap}
.reward-card .reward-rarity{min-height:18px}.reward-card:has(.reward-rarity){position:relative}
/* Item Set 2 visuals in Character Profile */
.char-hand-item[data-visual="mystic_staff"]{right:-4px;top:104px;width:8px;height:105px;background:#7653a7;border-radius:8px;transform:rotate(-18deg);box-shadow:0 0 9px #8de6ff}.char-hand-item[data-visual="mystic_staff"]::before{content:"";position:absolute;left:-8px;top:-13px;width:23px;height:23px;border-radius:50%;background:#8de6ff;box-shadow:0 0 14px #8de6ff}
.char-hand-item[data-visual="katana"]{right:-2px;top:112px;width:7px;height:100px;background:#eef6fb;transform:rotate(-24deg);box-shadow:0 0 5px #fff}.char-hand-item[data-visual="katana"]::after{content:"";position:absolute;left:-5px;bottom:-4px;width:17px;height:22px;background:#a12e3d;border-radius:5px}
.char-hand-item[data-visual="cyber_spear"]{right:-13px;top:88px;width:6px;height:130px;background:#55e1f2;transform:rotate(-18deg);box-shadow:0 0 10px #55e1f2}
.char-top-item[data-visual="samurai_armor"]{left:34px;top:98px;width:88px;height:92px;border-radius:15px;background:#721e28;border:5px solid #d9ad42;box-shadow:inset 0 0 0 4px #281b24}.char-top-item[data-visual="mage_robe"]{left:35px;top:99px;width:86px;height:105px;background:linear-gradient(#542e84,#23183c);clip-path:polygon(12% 0,88% 0,100% 100%,50% 84%,0 100%)}.char-top-item[data-visual="dragon_armor"]{left:32px;top:97px;width:92px;height:98px;border-radius:18px;background:#174b45;border:5px solid #58d9b0;box-shadow:0 0 15px #58d9b0}
.char-back-item[data-visual="spirit_wings"]{left:-55px;top:68px;width:265px;height:160px}.char-back-item[data-visual="spirit_wings"]::before,.char-back-item[data-visual="spirit_wings"]::after{content:"";position:absolute;top:0;width:110px;height:150px;background:rgba(105,220,255,.72);filter:drop-shadow(0 0 12px #7ee6ff);clip-path:polygon(100% 50%,65% 0,48% 38%,0 20%,38% 60%,5% 92%,57% 75%,70% 100%)}.char-back-item[data-visual="spirit_wings"]::before{left:0;transform:scaleX(-1)}.char-back-item[data-visual="spirit_wings"]::after{right:0}
.char-aura[data-visual="storm_aura"]{border:5px dashed #6ce7ff;border-radius:50%;box-shadow:0 0 24px #56dfff;animation:characterAura 1s infinite alternate}
.char-pet-item[data-visual="cat_pet"],.char-pet-item[data-visual="wolf_pet"],.char-pet-item[data-visual="tiger_pet"],.char-pet-item[data-visual="mini_dragon"]{right:-75px;top:145px;font-size:42px;filter:drop-shadow(0 4px 5px rgba(0,0,0,.18))}.char-pet-item[data-visual="cat_pet"]::before{content:"🐈"}.char-pet-item[data-visual="wolf_pet"]::before{content:"🐺"}.char-pet-item[data-visual="tiger_pet"]::before{content:"🐯"}.char-pet-item[data-visual="mini_dragon"]::before{content:"🐲"}
@media(max-width:900px){.pvp-rule-grid{grid-template-columns:1fr}.three-actions{grid-template-columns:1fr}.pvp-lobby-v44{grid-template-columns:1fr}.result-explain-grid{grid-template-columns:1fr}.available-room-card{grid-template-columns:82px 1fr auto}}


/* ==================================================================
   V4.12.0 ADMIN CLASSROOM / RANK RESET / GM WORLD CHAT / PVP COUNTDOWN
   ================================================================== */
.admin-metrics{grid-template-columns:repeat(5,minmax(0,1fr))}
.admin-class-filter-wrap label,.admin-ranking-filter{display:flex;align-items:center;gap:8px;font-size:10px}.admin-class-filter-wrap select,.admin-ranking-filter select{min-width:150px;min-height:38px}
.admin-classroom-cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin-bottom:14px}.admin-classroom-card{border:1px solid var(--line);background:#fff;border-radius:12px;padding:13px;text-align:left;cursor:pointer}.admin-classroom-card:hover,.admin-classroom-card.active{border-color:#3b78a0;background:#eef7fc;box-shadow:inset 0 0 0 1px #3b78a0}.admin-classroom-card span,.admin-classroom-card strong,.admin-classroom-card small,.admin-classroom-card em{display:block}.admin-classroom-card span{font-size:8px;color:var(--muted);letter-spacing:.08em}.admin-classroom-card strong{font-size:18px;color:#244c70;margin:4px 0}.admin-classroom-card small{font-size:9px;color:#617789}.admin-classroom-card em{font-size:8px;color:#8b6c32;font-style:normal;margin-top:5px}.admin-classroom-summary{display:flex;justify-content:space-between;gap:10px;padding:10px 12px;background:#f7fafc;border:1px solid var(--line);border-radius:10px;margin-bottom:10px}.admin-classroom-summary strong{color:#224d72}.admin-classroom-summary span{font-size:10px;color:var(--muted)}.admin-classroom-table{min-width:1120px}
.ranking-reset-admin-card{margin:0 0 14px;padding:14px;border:1px solid #dfcfaa;border-radius:12px;background:linear-gradient(180deg,#fffaf0,#fff)}.ranking-reset-admin-head{display:flex;justify-content:space-between;align-items:center;gap:12px}.ranking-reset-admin-head h3{margin:3px 0}.ranking-reset-admin-head>strong{padding:7px 10px;border-radius:999px;background:#f0e7d4;color:#745c2b;font-size:9px}.ranking-reset-form{display:grid;grid-template-columns:230px minmax(260px,1fr) auto auto;gap:8px;align-items:end;margin:12px 0 7px}.ranking-reset-form label span{display:block;font-size:9px;color:var(--muted);margin-bottom:4px}.ranking-reset-form input{width:100%;min-height:40px}.ranking-reset-message{min-width:0}
.rank-reset-user-notice{display:grid;grid-template-columns:64px minmax(0,1fr);gap:14px;align-items:center;border:1px solid #d6bc78;background:linear-gradient(135deg,#fff7da,#fff)}.rank-reset-user-icon{width:54px;height:54px;border-radius:16px;display:grid;place-items:center;background:#f4df9d;font-size:28px}.rank-reset-user-notice h3{margin:4px 0}.rank-reset-user-notice p{margin:0 0 4px;color:#6b5c3c}.rank-reset-user-notice small{color:#a06d21;font-weight:800}
.admin-world-chat-composer{display:grid;grid-template-columns:260px minmax(0,1fr);gap:14px;padding:14px;margin-bottom:12px;border:1px solid #c8d9e6;border-radius:12px;background:#f4f9fc}.admin-world-chat-composer strong,.admin-world-chat-composer small{display:block}.admin-world-chat-composer small{font-size:9px;color:#637687;margin-top:5px;line-height:1.5}.admin-world-chat-input-row{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:7px;align-items:stretch}.admin-world-chat-input-row textarea{min-height:54px;resize:vertical}
.pvp-game-v44{position:relative;overflow:hidden}.pvp-countdown-overlay{position:absolute;inset:0;z-index:100;display:grid;place-items:center;align-content:center;gap:4px;background:rgba(4,17,28,.82);backdrop-filter:blur(5px);color:#fff;text-align:center}.pvp-countdown-overlay span{font-size:16px;font-weight:800;letter-spacing:.12em}.pvp-countdown-overlay strong{font-size:110px;line-height:1;color:#ffd45e;text-shadow:0 8px 35px rgba(255,212,94,.45)}.pvp-countdown-overlay small{font-size:13px;color:#cfe3f0}
@media(max-width:1100px){.admin-metrics{grid-template-columns:repeat(3,1fr)}.admin-classroom-cards{grid-template-columns:repeat(2,1fr)}.ranking-reset-form{grid-template-columns:1fr 1fr}.admin-world-chat-composer{grid-template-columns:1fr}.admin-world-chat-input-row{grid-template-columns:1fr auto}}
@media(max-width:650px){.admin-metrics{grid-template-columns:repeat(2,1fr)}.admin-classroom-cards{grid-template-columns:1fr}.ranking-reset-form,.admin-world-chat-input-row{grid-template-columns:1fr}.rank-reset-user-notice{grid-template-columns:1fr}.pvp-countdown-overlay strong{font-size:76px}}

.zone-rank-reset-notice{position:absolute;left:50%;top:10px;transform:translateX(-50%);z-index:30;max-width:min(720px,calc(100% - 220px));padding:8px 13px;border:1px solid rgba(255,215,91,.65);border-radius:999px;background:rgba(55,39,10,.9);color:#fff8dc;display:flex;align-items:center;gap:8px;backdrop-filter:blur(7px);box-shadow:0 8px 26px rgba(0,0,0,.18)}.zone-rank-reset-notice span{font-size:7px;font-weight:1000;color:#ffd75b;letter-spacing:.08em}.zone-rank-reset-notice strong{font-size:9px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media(max-width:760px){.zone-rank-reset-notice{max-width:calc(100% - 20px);top:7px}.zone-rank-reset-notice span{display:none}.zone-rank-reset-notice strong{font-size:8px}}


/* ===== V4.12.0 SIMPLE CHAT-ONLY 2D ZONE ===== */
.simple-zone-page{margin:0;width:100vw;height:100vh;height:100dvh;overflow:hidden;background:#102c3d;color:#19364a}
.simple-zone-gate{position:fixed;inset:0;z-index:50000;display:grid;place-items:center;padding:18px;background:radial-gradient(circle at 50% 20%,#285a70,#0b2535 72%)}
.simple-zone-gate-card{width:min(560px,100%);padding:34px;background:#fffaf0;border:2px solid #d8c4a3;border-radius:22px;text-align:center;box-shadow:0 28px 80px rgba(0,0,0,.32)}
.simple-zone-gate-mark{font-size:50px}.simple-zone-gate-card h1{margin:8px 0}.simple-zone-gate-card p{color:#6e6558;line-height:1.65}
.simple-zone-gate-help{margin:12px 0;padding:10px;border-radius:10px;background:#fff0ed;color:#8b453b;font-size:10px;text-align:left}
.simple-zone-app{width:100vw;height:100vh;height:100dvh;display:grid;grid-template-rows:64px minmax(0,1fr) 78px;background:#102c3d}
.simple-zone-topbar{display:grid;grid-template-columns:minmax(260px,1fr) auto auto auto;align-items:center;gap:12px;padding:7px 14px;background:#102f43;color:#fff;border-bottom:1px solid rgba(255,255,255,.1)}
.simple-zone-brand,.simple-zone-user,.simple-zone-top-actions{display:flex;align-items:center;gap:9px}.simple-zone-brand-icon{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:#1e526e;font-size:20px}
.simple-zone-brand strong,.simple-zone-brand small,.simple-zone-worldtime span,.simple-zone-worldtime small,.simple-zone-user strong,.simple-zone-user small{display:block}
.simple-zone-brand strong{font-size:12px;letter-spacing:.07em}.simple-zone-brand small{font-size:8px;color:#a8c4d4;margin-top:2px}
.simple-zone-worldtime{min-width:120px;padding:6px 9px;border-radius:10px;background:rgba(255,255,255,.06)}.simple-zone-worldtime span{font-size:10px;font-weight:900;color:#ffd76a}.simple-zone-worldtime small{font-size:7px;color:#b2c8d4;margin-top:2px}
.simple-zone-user{padding:5px 9px;border-radius:10px;background:rgba(255,255,255,.06)}.simple-zone-user strong{font-size:10px}.simple-zone-user small{font-size:7px;color:#b0c7d2}.simple-zone-user i,.simple-zone-connection i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#45c979;margin-right:4px}
.simple-zone-top-actions .btn{min-height:36px;padding:0 9px;font-size:8px}
.simple-zone-world{position:relative;min-height:0;overflow:hidden;background:#17384a}.simple-zone-world canvas{display:block;width:100%;height:100%;touch-action:none}
.simple-zone-help{position:absolute;left:12px;top:12px;display:flex;align-items:center;gap:7px;padding:7px 10px;border-radius:10px;background:rgba(10,29,40,.78);color:#dcebf1;font-size:8px;backdrop-filter:blur(5px)}.simple-zone-help strong{color:#ffd86d}
.simple-zone-connection{position:absolute;right:12px;bottom:12px;display:flex;align-items:center;gap:4px;padding:6px 9px;border-radius:999px;background:rgba(12,35,46,.82);color:#c8e7d4;font-size:7px}.simple-zone-connection[data-state="error"]{background:#792d2d;color:#fff}.simple-zone-connection[data-state="error"] i{background:#ff7777}
.simple-zone-system-notice{position:absolute;left:50%;top:12px;transform:translateX(-50%);max-width:min(680px,70vw);padding:7px 12px;border-radius:999px;background:rgba(255,246,210,.95);border:1px solid #d9bd63;color:#634d17;font-size:8px;box-shadow:0 8px 30px rgba(0,0,0,.12)}
.simple-zone-player-card{position:absolute;right:14px;top:14px;width:290px;padding:15px;background:rgba(255,251,242,.98);border:1px solid #d5c6ab;border-radius:16px;box-shadow:0 18px 50px rgba(0,0,0,.2)}.simple-zone-card-close{position:absolute;right:8px;top:8px;width:32px;height:32px;border:0;border-radius:8px;background:#ece4d7;cursor:pointer}
.simple-zone-player-head{display:flex;align-items:center;gap:10px}.simple-zone-player-head h3{margin:0;font-size:17px}.simple-zone-player-head p{margin:2px 0 0;font-size:9px;color:#766c5e}
.simple-zone-player-card>span{display:block;margin-top:13px;font-size:8px;color:#817461}
.simple-zone-equipped-list{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:7px}.simple-zone-equipped-list>div{min-height:64px;display:grid;place-items:center;text-align:center;padding:5px;border:1px solid #dfd5c5;border-radius:9px;background:#fff}.simple-zone-equipped-list span{font-size:24px}.simple-zone-equipped-list small{font-size:7px;color:#6d6254}
.simple-zone-mobile-pad{display:none;position:absolute;left:16px;bottom:16px;width:132px;height:132px;grid-template:repeat(3,42px)/repeat(3,42px);gap:3px}.simple-zone-mobile-pad button{border:1px solid rgba(255,255,255,.24);border-radius:12px;background:rgba(18,55,73,.84);color:#fff;font-size:19px;touch-action:none;backdrop-filter:blur(4px)}.simple-zone-mobile-pad #moveUpButton{grid-column:2}.simple-zone-mobile-pad #moveLeftButton{grid-row:2;grid-column:1}.simple-zone-mobile-pad #moveDownButton{grid-row:2;grid-column:2}.simple-zone-mobile-pad #moveRightButton{grid-row:2;grid-column:3}
.simple-zone-chatbar{display:grid;grid-template-columns:120px minmax(0,860px);justify-content:center;align-items:center;gap:9px;padding:9px 16px max(9px,env(safe-area-inset-bottom));background:#0f2d40;border-top:1px solid rgba(255,255,255,.11)}
.simple-zone-chat-identity{padding:8px 10px;border-radius:11px;background:rgba(255,255,255,.06);color:#fff}.simple-zone-chat-identity strong,.simple-zone-chat-identity small{display:block}.simple-zone-chat-identity strong{font-size:10px}.simple-zone-chat-identity small{font-size:7px;color:#9fc0cf;margin-top:2px}.simple-zone-chat-identity small.error{color:#ff9a9a}
.simple-zone-chat-form{height:56px;display:grid;grid-template-columns:minmax(0,1fr) 90px;gap:7px;padding:6px;border-radius:14px;background:#fff8e9;border:2px solid #b39262}.simple-zone-chat-form input{min-width:0;border:0;outline:0;border-radius:9px;padding:0 13px;background:#fff;font-size:15px}.simple-zone-chat-form button{border:0;border-radius:9px;background:#48925f;color:#fff;font-weight:900;cursor:pointer}
.simple-zone-modal{position:fixed;inset:0;z-index:45000;display:grid;place-items:center;padding:18px;background:rgba(5,18,27,.68);backdrop-filter:blur(7px)}.simple-zone-modal.hidden{display:none!important}.simple-zone-modal-card{position:relative;width:min(720px,100%);max-height:calc(100dvh - 36px);overflow:auto;padding:20px;background:#fffaf0;border:2px solid #d0bb97;border-radius:18px;box-shadow:0 28px 80px rgba(0,0,0,.3)}.simple-zone-modal-close{position:absolute;right:10px;top:10px;width:36px;height:36px;border:0;border-radius:9px;background:#ece2d1;cursor:pointer}.simple-zone-modal-title{display:flex;justify-content:space-between;gap:12px;align-items:end;padding-right:40px}.simple-zone-modal-title h2{margin:4px 0}.simple-zone-modal-title small{color:#817360}
.simple-zone-chat-history{display:grid;gap:7px;margin-top:14px}.simple-zone-chat-message{display:grid;grid-template-columns:38px 1fr;gap:8px;padding:9px;border:1px solid #e0d7c8;border-radius:11px;background:#fff}.simple-zone-chat-message.gm{background:#fff7d9;border-color:#dec06b}.simple-zone-chat-avatar{width:38px;height:38px;border-radius:10px;display:grid;place-items:center;background:#e9f0f3;color:#284d61;font-weight:900;font-size:9px}.simple-zone-chat-message.gm .simple-zone-chat-avatar{background:#71334e;color:#ffe79a}.simple-zone-chat-meta{display:flex;gap:8px;align-items:center}.simple-zone-chat-meta strong{font-size:9px}.simple-zone-chat-meta time{margin-left:auto;font-size:7px;color:#8c8172}.simple-zone-chat-message p{margin:4px 0 0;font-size:10px;line-height:1.45}
@media(max-width:900px){.simple-zone-app{grid-template-rows:54px minmax(0,1fr) 70px}.simple-zone-topbar{grid-template-columns:minmax(0,1fr) auto auto;padding:5px 7px;gap:5px}.simple-zone-worldtime{display:none}.simple-zone-user{display:none}.simple-zone-brand-icon{width:34px;height:34px}.simple-zone-brand strong{font-size:9px}.simple-zone-brand small{display:none}.simple-zone-help{display:none}.simple-zone-mobile-pad{display:grid}.simple-zone-top-actions .btn{padding:0 7px}.simple-zone-chatbar{grid-template-columns:74px minmax(0,1fr);gap:5px;padding:6px}.simple-zone-chat-identity{padding:6px}.simple-zone-chat-form{height:54px;grid-template-columns:minmax(0,1fr) 58px;padding:5px;border-width:1px}.simple-zone-chat-form input{font-size:16px;padding:0 8px}.simple-zone-chat-form button{font-size:10px}.simple-zone-system-notice{top:7px;font-size:7px}.simple-zone-player-card{left:7px;right:7px;top:auto;bottom:7px;width:auto}}

/* ===== V4.12.0 ADMIN ROOM SEARCH ===== */
.admin-room-search-card{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;margin-bottom:14px;padding:13px;border:1px solid #dde5eb;border-radius:14px;background:#f8fbfd}.admin-room-search-box{display:grid;grid-template-columns:28px minmax(0,1fr) auto;align-items:center;gap:7px}.admin-room-search-box>span{text-align:center;font-size:18px}.admin-room-search-box input{min-height:44px;border:1px solid #ccd8e1;border-radius:10px;padding:0 12px;background:#fff;font-size:15px}.admin-room-search-meta{text-align:right}.admin-room-search-meta strong,.admin-room-search-meta span{display:block}.admin-room-search-meta strong{font-size:10px;color:#244c67}.admin-room-search-meta span{font-size:8px;color:#7c8992;margin-top:3px}
.admin-room-directory{display:grid;gap:12px}.admin-room-group{padding:12px;border:1px solid #e0e7ec;border-radius:14px;background:#fff}.admin-room-group-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.admin-room-group-title strong{font-size:13px;color:#254b63}.admin-room-group-title span{font-size:8px;color:#7e8b94}.admin-room-buttons{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:7px}.admin-room-button{min-height:66px;padding:9px;border:1px solid #dbe3e8;border-radius:11px;background:#f9fbfc;color:#26475b;text-align:left;cursor:pointer;transition:.15s ease}.admin-room-button:hover{transform:translateY(-1px);border-color:#8ab3ca;background:#f2f8fb}.admin-room-button.active{border-color:#376f91;background:#eaf4f9;box-shadow:inset 0 0 0 1px #376f91}.admin-room-button span,.admin-room-button small{display:block}.admin-room-button span{font-size:12px;font-weight:900}.admin-room-button small{font-size:7px;color:#72808a;margin-top:4px}.admin-room-no-result{padding:28px;border:1px dashed #d5dde2;border-radius:13px;text-align:center;color:#7f8b93;background:#fafcfd}
.admin-selected-room{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:14px 0 8px;padding:12px 14px;border-left:4px solid #487d9b;border-radius:10px;background:#f2f7fa}.admin-selected-room>div span,.admin-selected-room>div strong{display:block}.admin-selected-room>div span{font-size:8px;color:#7c8a93}.admin-selected-room>div strong{font-size:18px;color:#193f57;margin-top:2px}.admin-selected-room>span{font-size:9px;color:#657680}.admin-room-table-wrap table tbody tr:nth-child(even){background:#f9fbfc}.admin-room-table-wrap table tbody tr:hover{background:#eef6fa}
@media(max-width:1300px){.admin-room-buttons{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(max-width:850px){.admin-room-search-card{grid-template-columns:1fr}.admin-room-search-meta{text-align:left}.admin-room-buttons{grid-template-columns:repeat(2,minmax(0,1fr))}.admin-selected-room{align-items:flex-start;flex-direction:column}}


/* ==================================================================
   V4.12.0 HORIZONTAL SMOOTH ZONE + WIZARD + TOKEN SHOP
   ================================================================== */
.zone47-page{margin:0;width:100vw;height:100vh;height:100dvh;overflow:hidden;background:#0c2637;color:#19364a}
.zone47-gate{position:fixed;inset:0;z-index:50000;display:grid;place-items:center;padding:18px;background:radial-gradient(circle at 50% 18%,#295b71,#081e2c 72%)}
.zone47-gate-card{width:min(560px,100%);padding:32px;background:#fff9eb;border:3px solid #99703d;border-radius:22px;text-align:center;box-shadow:0 28px 90px rgba(0,0,0,.34)}.zone47-gate-icon{font-size:48px}.zone47-gate-card h1{margin:8px 0}.zone47-gate-card p{color:#716656;line-height:1.6}.zone47-gate-help{padding:10px;border-radius:10px;background:#fff0ed;color:#8b453b}
.zone47-app{width:100vw;height:100vh;height:100dvh;display:grid;grid-template-rows:66px minmax(0,1fr) 82px;background:#0e2a3c}
.zone47-topbar{display:grid;grid-template-columns:minmax(270px,1fr) auto auto auto auto;gap:10px;align-items:center;padding:7px 12px;background:#102f43;color:#fff;border-bottom:1px solid rgba(255,255,255,.1)}
.zone47-brand,.zone47-user,.zone47-actions{display:flex;align-items:center;gap:9px}.zone47-brand-icon{width:40px;height:40px;border-radius:12px;background:#20536e;display:grid;place-items:center;font-size:20px}.zone47-brand strong,.zone47-brand small,.zone47-time span,.zone47-time small,.zone47-user strong,.zone47-user small,.zone47-token span,.zone47-token strong{display:block}.zone47-brand strong{font-size:11px;letter-spacing:.06em}.zone47-brand small{font-size:7px;color:#a9c3d1}.zone47-time{padding:6px 9px;border-radius:9px;background:rgba(255,255,255,.06)}.zone47-time span{font-size:9px;color:#ffd86d;font-weight:900}.zone47-time small{font-size:7px;color:#abc3d0}.zone47-user{padding:5px 8px;border-radius:9px;background:rgba(255,255,255,.06)}.zone47-user strong{font-size:9px}.zone47-user small{font-size:7px;color:#abc4d1}.zone47-user i,.zone47-connection i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#46ca79;margin-right:4px}.zone47-token{text-align:right}.zone47-token span{font-size:7px;color:#e7ca6e}.zone47-token strong{font-size:14px;color:#ffdd6a}.zone47-actions .btn{min-height:36px;padding:0 8px;font-size:7px}
.zone47-world{position:relative;min-height:0;overflow:hidden;background:#16384a}.zone47-world canvas{display:block;width:100%;height:100%;touch-action:none}
.zone47-help{position:absolute;left:12px;top:12px;display:flex;gap:7px;align-items:center;padding:7px 9px;border-radius:10px;background:rgba(9,28,39,.78);color:#dcebf1;font-size:8px}.zone47-help strong{color:#ffd76a}.zone47-connection{position:absolute;right:12px;bottom:12px;display:flex;align-items:center;gap:4px;padding:6px 9px;border-radius:999px;background:rgba(10,31,43,.84);color:#cbe6d4;font-size:7px}.zone47-connection[data-state="error"]{background:#7b2d2d;color:#fff}.zone47-system-notice{position:absolute;left:50%;top:10px;transform:translateX(-50%);padding:7px 12px;border:1px solid #dbc36d;border-radius:999px;background:rgba(255,247,213,.96);color:#654f1c;font-size:8px}.zone47-nearby-action{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);min-height:42px;padding:0 18px;border:2px solid #e1bd57;border-radius:999px;background:#fff5ca;color:#56410f;font-weight:900;cursor:pointer;box-shadow:0 8px 30px rgba(0,0,0,.18)}
.zone47-player-card{position:absolute;right:14px;top:14px;width:285px;padding:15px;background:rgba(255,250,239,.98);border:2px solid #c9b38e;border-radius:15px;box-shadow:0 18px 50px rgba(0,0,0,.22)}.zone47-card-close{position:absolute;right:8px;top:8px;width:32px;height:32px;border:0;border-radius:8px;background:#ece1cf;cursor:pointer}.zone47-player-head{display:flex;align-items:center;gap:9px}.zone47-player-head h3{margin:0}.zone47-player-head p{margin:2px 0 0;font-size:8px;color:#776d5e}.zone47-player-card>span{display:block;margin-top:12px;font-size:8px;color:#827561}.zone47-equipped-list{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:7px}.zone47-equipped-list>div{min-height:62px;padding:5px;border:1px solid #ded2c1;border-radius:9px;background:#fff;display:grid;place-items:center;text-align:center}.zone47-equipped-list span{font-size:23px}.zone47-equipped-list small{font-size:7px}
.zone47-footer{display:grid;grid-template-columns:72px 110px minmax(0,820px) 72px;gap:8px;justify-content:center;align-items:center;padding:8px 14px max(8px,env(safe-area-inset-bottom));background:#0e2c3e;border-top:1px solid rgba(255,255,255,.11)}.zone47-move-button{height:58px;border:1px solid rgba(255,255,255,.2);border-radius:14px;background:#1a4b65;color:#fff;font-size:22px;font-weight:900;cursor:pointer;touch-action:none}.zone47-chat-id{padding:8px;border-radius:10px;background:rgba(255,255,255,.06);color:#fff}.zone47-chat-id strong,.zone47-chat-id small{display:block}.zone47-chat-id strong{font-size:9px}.zone47-chat-id small{font-size:7px;color:#a6c1cf}.zone47-chat-id small.error{color:#ff9a9a}.zone47-chat-form{height:58px;display:grid;grid-template-columns:minmax(0,1fr) 80px;gap:6px;padding:6px;border:2px solid #ae8c5b;border-radius:14px;background:#fff7e6}.zone47-chat-form input{min-width:0;border:0;outline:0;border-radius:8px;padding:0 12px;background:#fff;font-size:15px}.zone47-chat-form button{border:0;border-radius:8px;background:#4a9660;color:#fff;font-weight:900;cursor:pointer}
.zone47-modal{position:fixed;inset:0;z-index:45000;display:grid;place-items:center;padding:18px;background:rgba(4,17,25,.72);backdrop-filter:blur(7px)}.zone47-modal.hidden{display:none!important}.zone47-modal-card{position:relative;width:min(1060px,100%);max-height:calc(100dvh - 36px);overflow:auto;padding:22px;background:#fff9eb;border:3px solid #97703f;border-radius:20px;box-shadow:0 30px 90px rgba(0,0,0,.35)}.zone47-modal-close{position:absolute;right:11px;top:11px;width:38px;height:38px;border:0;border-radius:9px;background:#ebe0cb;cursor:pointer}.zone47-modal-header{display:flex;align-items:center;gap:14px;padding-right:45px}.zone47-wizard-portrait{width:82px;height:82px;border-radius:20px;display:grid;place-items:center;background:radial-gradient(circle,#e9d7ff,#6b4a8d);font-size:46px}.zone47-modal-header h2,.zone47-shop-head h2{margin:4px 0}.zone47-modal-header p,.zone47-shop-head p{margin:0;color:#786b58;font-size:9px}.zone47-quest-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:15px 0}.zone47-quest-metrics>div{padding:10px;border:1px solid #e1d5c3;border-radius:11px;background:#fff}.zone47-quest-metrics span,.zone47-quest-metrics strong{display:block}.zone47-quest-metrics span{font-size:7px;color:#847662}.zone47-quest-metrics strong{font-size:16px;color:#26495d;margin-top:3px}.zone47-quest-reward-rule{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:10px}.zone47-quest-reward-rule span{padding:6px 9px;border-radius:999px;background:#f0e8d8;font-size:8px;color:#655948}
.zone47-quest-list{display:grid;gap:8px}.zone47-quest-item{display:grid;grid-template-columns:54px minmax(0,1fr) 150px;gap:10px;align-items:center;padding:11px;border:1px solid #ddd2c0;border-radius:13px;background:#fff}.zone47-quest-item.difficulty-easy{border-left:5px solid #64a96c}.zone47-quest-item.difficulty-medium{border-left:5px solid #d7a93b}.zone47-quest-item.difficulty-hard{border-left:5px solid #c75757}.zone47-quest-item.locked{opacity:.55}.zone47-quest-item.completed{background:#eef8f0}.zone47-quest-icon{width:50px;height:50px;border-radius:12px;background:#eef3f5;display:grid;place-items:center;font-size:25px}.zone47-quest-title{display:flex;align-items:center;gap:8px}.zone47-quest-title strong{font-size:11px}.zone47-quest-title span{padding:3px 6px;border-radius:999px;background:#f1eadf;font-size:7px}.zone47-quest-main p{margin:4px 0;color:#766b5e;font-size:8px}.zone47-quest-tags{display:flex;gap:5px;flex-wrap:wrap}.zone47-quest-tags span{padding:3px 6px;border-radius:6px;background:#f5f6f6;font-size:7px;color:#65727a}.zone47-quest-reward{text-align:center}.zone47-quest-reward strong,.zone47-quest-reward span{display:block}.zone47-quest-reward strong{font-size:19px;color:#b88412}.zone47-quest-reward span{font-size:7px;color:#826e47}.zone47-quest-reward .btn{width:100%;margin-top:6px;font-size:7px}.zone47-mobile-quest-note{display:block;margin-top:10px;color:#857767}
.zone47-shop-head{display:flex;justify-content:space-between;gap:12px;align-items:center;padding-right:45px}.zone47-shop-wallet{text-align:right;padding:8px 12px;border-radius:11px;background:#213f51;color:#fff}.zone47-shop-wallet span,.zone47-shop-wallet strong{display:block}.zone47-shop-wallet span{font-size:7px}.zone47-shop-wallet strong{font-size:18px;color:#ffd86b}.zone47-shop-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin-top:15px}.zone47-shop-item{position:relative;min-height:230px;padding:11px;border:1px solid #ded3c2;border-radius:13px;background:#fff;display:flex;flex-direction:column;align-items:center;text-align:center}.zone47-shop-item.wearing{box-shadow:inset 0 0 0 2px #4f9b69}.zone47-shop-rarity{align-self:flex-start;padding:3px 6px;border-radius:999px;background:#eee7db;font-size:6px;font-weight:900}.zone47-shop-icon{font-size:39px;margin:8px}.zone47-shop-item>strong{font-size:10px}.zone47-shop-item>small{min-height:34px;margin-top:4px;font-size:7px;color:#756b5e}.zone47-shop-item>em{margin-top:auto;font-style:normal;font-size:9px;font-weight:900;color:#a8750e}.zone47-shop-item .btn{width:100%;margin-top:7px;font-size:7px}.zone47-chat-history{display:grid;gap:7px;margin-top:14px}.zone47-chat-message{display:grid;grid-template-columns:38px 1fr;gap:8px;padding:9px;border:1px solid #e0d5c5;border-radius:10px;background:#fff}.zone47-chat-message.gm{background:#fff5d2}.zone47-chat-avatar{width:38px;height:38px;border-radius:9px;display:grid;place-items:center;background:#e7f0f3;font-size:8px;font-weight:900}.zone47-chat-message.gm .zone47-chat-avatar{background:#6b2e49;color:#ffe69d}.zone47-chat-meta{display:flex;gap:8px}.zone47-chat-meta time{margin-left:auto;font-size:7px;color:#887d6d}.zone47-chat-message p{margin:4px 0 0;font-size:9px}
.admin-quest-form{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:16px;padding:14px;border:1px solid #dce5ea;border-radius:14px;background:#f8fbfc}.admin-quest-form label{display:grid;gap:5px}.admin-quest-form label>span{font-size:8px;font-weight:800;color:#4b626f}.admin-quest-form input,.admin-quest-form select,.admin-quest-form textarea{width:100%;border:1px solid #ccd8df;border-radius:9px;background:#fff;padding:9px;font:inherit}.admin-quest-form small{font-size:7px;color:#7c8991}.admin-quest-description{grid-column:span 3}.admin-quest-check{align-content:center}.admin-quest-actions{grid-column:1/-1;display:flex;gap:8px}
@media(max-width:1100px){.zone47-topbar{grid-template-columns:minmax(0,1fr) auto auto}.zone47-time,.zone47-user{display:none}.zone47-shop-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.admin-quest-form{grid-template-columns:repeat(2,minmax(0,1fr))}.admin-quest-description{grid-column:span 2}}
@media(max-width:760px){.zone47-app{grid-template-rows:54px minmax(0,1fr) 72px}.zone47-topbar{grid-template-columns:minmax(0,1fr) auto;padding:5px 6px}.zone47-brand small,.zone47-token{display:none}.zone47-actions .btn:not(#openWizardQuests):not(#openZoneShop){display:none}.zone47-actions .btn{padding:0 5px}.zone47-help{display:none}.zone47-footer{grid-template-columns:54px minmax(0,1fr) 54px;gap:5px;padding:6px}.zone47-chat-id{display:none}.zone47-move-button{height:56px}.zone47-chat-form{height:56px;grid-template-columns:minmax(0,1fr) 55px;padding:5px;border-width:1px}.zone47-chat-form input{font-size:16px;padding:0 8px}.zone47-shop-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.zone47-quest-item{grid-template-columns:45px minmax(0,1fr);}.zone47-quest-reward{grid-column:1/-1;display:grid;grid-template-columns:50px 50px minmax(0,1fr);align-items:center;gap:5px}.zone47-quest-reward .btn{margin:0}.zone47-modal{padding:7px}.zone47-modal-card{width:100%;max-height:calc(100dvh - 14px);padding:14px;border-width:2px}.zone47-wizard-portrait{width:58px;height:58px;font-size:34px}.admin-quest-form{grid-template-columns:1fr}.admin-quest-description{grid-column:span 1}}

/* ===== V4.12.0 ACADEMIC HIERARCHY ===== */
.academic-code-preview{display:block;margin-top:5px;color:#52728a;font-size:8px;font-weight:800}
.academic-filter-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:12px 0}.academic-filter-grid label{display:grid;gap:5px}.academic-filter-grid label>span{font-size:8px;font-weight:900;color:#4b6474}.academic-filter-grid select,.academic-filter-grid input{min-height:42px;border:1px solid #d0dde5;border-radius:10px;background:#fff;padding:0 10px}.academic-filter-search{grid-column:span 2}.academic-summary{margin:8px 0 10px;padding:9px 12px;border-radius:10px;background:#f0f6fa;color:#46667a;font-size:9px;font-weight:800}
@media(max-width:900px){.academic-filter-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.academic-filter-search{grid-column:span 2}}@media(max-width:600px){.academic-filter-grid{grid-template-columns:1fr}.academic-filter-search{grid-column:auto}}

/* ===== V4.12.0 PLAY STYLE + RANKED CHALLENGE ===== */
.play-style-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.play-style-choice{display:flex;gap:15px;align-items:flex-start;text-align:left;padding:20px;border:1px solid #d7e2e9;border-radius:16px;background:#fff;cursor:pointer;transition:.16s ease}
.play-style-choice:hover,.play-style-choice.selected{border-color:#6097bc;box-shadow:0 10px 30px rgba(47,111,167,.11);transform:translateY(-1px)}
.play-style-choice.ranked{background:linear-gradient(135deg,#fff,#fff9e8);border-color:#e6d39b}
.play-style-choice.ranked:hover,.play-style-choice.ranked.selected{border-color:#c69c32;box-shadow:0 10px 30px rgba(157,117,20,.12)}
.play-style-icon{font-size:28px}.play-style-choice strong{display:block;font-size:15px;color:#17354c;margin-bottom:6px}.play-style-choice p{margin:0 0 10px;color:#6b7f8c;line-height:1.65}.play-style-choice small{font-size:8px;font-weight:900;letter-spacing:.07em;color:#50728a}
.ranked-rule-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:14px 0}.ranked-rule-grid>div{padding:14px;border:1px solid #dce5eb;border-radius:12px;background:#fbfcfd}.ranked-rule-grid span,.ranked-rule-grid strong{display:block}.ranked-rule-grid span{font-size:8px;color:#778a96;margin-bottom:5px}.ranked-rule-grid strong{font-size:17px;color:#244c67}
.ranked-score-rule{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}.ranked-score-rule span{padding:7px 10px;border-radius:999px;background:#edf5fa;color:#3d667f;font-size:8px;font-weight:900}
.ranked-progress-box{padding:13px;border-radius:12px;background:#f7fafb;border:1px solid #e0e7eb;margin-bottom:14px}.ranked-progress-box>div:first-child{display:flex;justify-content:space-between;gap:10px;margin-bottom:8px}.ranked-progress-box small{font-size:7px;letter-spacing:.08em;color:#738693;font-weight:900}.ranked-progress-box strong{font-size:10px}.ranked-progress-track{height:8px;border-radius:999px;background:#e3eaf0;overflow:hidden}.ranked-progress-track i{display:block;height:100%;width:2%;background:linear-gradient(90deg,#3e7dad,#d4a62f);border-radius:inherit}
@media(max-width:760px){.play-style-grid{grid-template-columns:1fr}.ranked-rule-grid{grid-template-columns:repeat(2,1fr)}}

/* ===== V4.12.0 MAJOR + ROOM RANKING ===== */
.academic-room-ranking-scope{
  display:grid;
  gap:3px;
  margin:12px 0 10px;
  padding:12px 14px;
  border:1px solid #d6e4ec;
  border-left:4px solid #2f6f98;
  border-radius:12px;
  background:linear-gradient(135deg,#f4f9fc,#fff);
}
.academic-room-ranking-scope.hidden{display:none}
.academic-room-ranking-scope>span{
  font-size:7px;
  font-weight:900;
  letter-spacing:.1em;
  color:#6c8291;
}
.academic-room-ranking-scope>strong{
  font-size:12px;
  color:#173f5a;
}
.academic-room-ranking-scope>small{
  font-size:8px;
  color:#6d808c;
  line-height:1.55;
}
.ranking-mode-btn #classRankingLabel{
  font-weight:900;
}
.ranking-row.me{
  outline:2px solid rgba(47,111,152,.18);
  outline-offset:-2px;
}

/* ===== V4.12.0 DAILY FULLSCREEN QUEST ===== */
.daily-fullscreen-card{border-left:4px solid #3e8b63!important;background:linear-gradient(135deg,#f5fbf7,#fff)!important}
.daily-fullscreen-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.daily-fullscreen-head h2{margin:4px 0}.daily-fullscreen-head p{margin:0;color:#6b7f8c}.daily-quest-status{white-space:nowrap;padding:7px 11px;border-radius:999px;background:#eaf6ee;color:#34724f;font-size:9px;font-weight:900}
.daily-fullscreen-progress{height:12px;margin:14px 0 8px;border-radius:999px;background:#e4ece8;overflow:hidden}.daily-fullscreen-progress i{display:block;width:0;height:100%;border-radius:inherit;background:linear-gradient(90deg,#438d65,#78b68d);transition:width .35s ease}
.daily-fullscreen-meta,.daily-fullscreen-actions{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}.daily-fullscreen-meta{font-size:8px;color:#607681}.daily-fullscreen-meta #dailyFullscreenTimer{font-weight:900;color:#345a46}.daily-fullscreen-actions{margin-top:10px}.daily-fullscreen-actions span{font-size:9px;font-weight:900;color:#4c6958}
@media(max-width:650px){.daily-fullscreen-head{flex-direction:column}.daily-quest-status{align-self:flex-start}}

/* V4.12.0 Student ID 1-15 digits */
#studentId15Hint{color:#607888}


/* ===== V4.12.0 REAL ART 2D ZONE ===== */
.zone47-world{background:#bfe5f5;isolation:isolate}
.zone47-world canvas{image-rendering:auto;filter:saturate(1.03) contrast(1.01)}
.zone47-shop-real-art{position:relative;display:grid!important;place-items:center;min-height:82px!important;background:linear-gradient(180deg,#f7fbff,#eef5fa);border:1px solid rgba(63,104,132,.12);border-radius:13px;overflow:hidden}
.zone47-shop-real-art img{width:68px;height:68px;object-fit:contain;display:block;filter:drop-shadow(0 6px 8px rgba(20,43,58,.17))}
.zone47-shop-real-art span{position:absolute;right:6px;bottom:4px;width:26px;height:26px;display:grid;place-items:center;border-radius:8px;background:rgba(255,255,255,.92);box-shadow:0 3px 10px rgba(0,0,0,.1);font-size:15px}
.zone47-nearby-action{backdrop-filter:blur(8px);box-shadow:0 8px 26px rgba(12,35,48,.18)}
.zone47-connection{backdrop-filter:blur(8px)}
.zone47-help{backdrop-filter:blur(8px)}

/* ===== V4.12.0 EMBEDDED REAL ART STATUS ===== */
.zone47-art-engine{
  position:absolute;
  top:14px;
  left:50%;
  transform:translateX(-50%);
  z-index:9;
  padding:6px 10px;
  border:1px solid rgba(255,255,255,.45);
  border-radius:999px;
  background:rgba(11,43,60,.72);
  color:#f5d77c;
  font-size:8px;
  font-weight:900;
  letter-spacing:.08em;
  pointer-events:none;
  backdrop-filter:blur(5px);
}

/* ===== V4.12.0 COMPLETE ITEM ART ===== */
.reward-real-art,.wardrobe-real-art,.zone47-shop-real-art{position:relative;overflow:hidden;background:radial-gradient(circle at 50% 35%,#f9fdff,#eaf2f7 72%)}
.reward-real-art img,.wardrobe-real-art img,.zone47-shop-real-art img{width:100%;height:100%;object-fit:contain;display:block;filter:drop-shadow(0 7px 8px rgba(25,50,70,.14))}
.reward-real-art>span,.wardrobe-real-art>span,.zone47-shop-real-art>span{display:none}
.reward-real-art{width:132px;height:120px;margin:4px auto 8px;border-radius:16px;padding:7px}
.wardrobe-real-art{width:66px;height:66px;border-radius:14px;padding:5px;flex:0 0 auto}
.reward-actions,.zone47-shop-actions{display:grid;grid-template-columns:1fr;gap:6px;margin-top:7px}
.reward-capacity{display:block;text-align:center;color:#7a746b;margin-top:6px;font-size:8px}
.btn.danger-soft{background:#fff1ed!important;color:#a74433!important;border:1px solid #e9b8ae!important}
.zone47-shop-wallet small{display:block;margin-top:4px;font-size:7px;color:#7890a0;font-weight:800}
.zone47-card-item-art{width:42px;height:42px;object-fit:contain;display:block;margin:0 auto 4px}
.zone47-shop-icon{width:122px!important;height:110px!important;padding:5px!important;margin:8px auto!important}
.wardrobe-action{min-width:145px}
.wardrobe-action .btn{width:100%;margin-top:5px}

/* ===== V4.12.0 THREE ITEM GRADES + 18 SLOT BACKPACK ===== */
.rarity-easy{--item-grade:#4f9b70}.rarity-medium{--item-grade:#477fb4}.rarity-rare{--item-grade:#9a62c9}
.zone47-shop-item.rarity-easy,.reward-card.rarity-easy,.wardrobe-item.rarity-easy{border-top:3px solid #4f9b70}
.zone47-shop-item.rarity-medium,.reward-card.rarity-medium,.wardrobe-item.rarity-medium{border-top:3px solid #477fb4}
.zone47-shop-item.rarity-rare,.reward-card.rarity-rare,.wardrobe-item.rarity-rare{border-top:3px solid #9a62c9}
.zone47-grade-filter{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 14px}
.zone47-grade-filter button{border:1px solid #d8e1e7;background:#fff;border-radius:999px;padding:8px 12px;font:800 9px/1 system-ui;color:#536976;cursor:pointer}
.zone47-grade-filter button.active{background:#173f58;color:#fff;border-color:#173f58}
.zone47-shop-slot{font-size:7px;font-weight:900;letter-spacing:.08em;color:#78909e;margin-top:3px}
#zoneBackpackMini{font-size:8px;font-weight:900}
.zone47-backpack-card{max-width:1120px!important}
.zone47-backpack-slot-rule{display:flex;gap:7px;flex-wrap:wrap;margin:10px 0 12px}
.zone47-backpack-slot-rule span{font-size:7px;font-weight:900;letter-spacing:.08em;padding:5px 8px;border-radius:999px;background:#eef4f7;color:#5f7582}
.zone47-backpack-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.zone47-backpack-slot{position:relative;min-height:158px;border:1px solid #d9e1e6;border-radius:14px;background:#fff;padding:10px;display:grid;grid-template-columns:70px 1fr;gap:10px;align-items:center}
.zone47-backpack-slot.filled{border-top:4px solid var(--item-grade,#789)}
.zone47-backpack-no{position:absolute;top:7px;left:8px;font-size:7px;font-weight:900;color:#90a0a9}
.zone47-backpack-art{width:68px;height:68px;border-radius:13px;background:#eef5f8;display:grid;place-items:center;overflow:hidden}
.zone47-backpack-art img{max-width:88%;max-height:88%;object-fit:contain}
.zone47-backpack-info{display:grid;gap:4px;min-width:0}.zone47-backpack-info span{font-size:7px;font-weight:900;color:#758995}.zone47-backpack-info strong{font-size:10px;color:#173c53}
.zone47-backpack-actions{grid-column:1/-1;display:flex;gap:7px}.zone47-backpack-actions .btn{flex:1}
.zone47-wearing-badge{position:absolute;right:8px;top:8px;padding:4px 7px;border-radius:999px;background:#daf3e5;color:#347451;font-size:7px}
.zone47-backpack-slot.empty{display:block;border-style:dashed;background:#f8fafb}
.zone47-backpack-empty{height:100%;min-height:130px;display:grid;place-items:center;align-content:center;color:#bac7cf;font-size:25px}.zone47-backpack-empty small{font-size:7px;font-weight:900;margin-top:4px}
@media(max-width:900px){.zone47-backpack-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:600px){.zone47-backpack-grid{grid-template-columns:1fr}}

/* ===== V4.12.0 GM SKELETON OVERLORD EXCLUSIVE ===== */
.zone47-gm-exclusive-card{
  grid-column:1/-1;
  display:grid!important;
  gap:8px;
  justify-items:center;
  padding:10px!important;
  border:1px solid rgba(160,70,255,.42)!important;
  border-radius:13px;
  background:linear-gradient(145deg,rgba(24,13,35,.96),rgba(70,20,91,.92))!important;
  box-shadow:0 8px 25px rgba(94,22,148,.22);
}
.zone47-gm-skin-preview{
  width:132px!important;
  height:176px!important;
  object-fit:contain!important;
  filter:drop-shadow(0 0 10px rgba(153,54,255,.45));
}
.zone47-gm-exclusive-card small{
  color:#f2d6ff!important;
  font-weight:900!important;
}
.zone47-gm-exclusive-item{
  display:flex!important;
  align-items:center;
  gap:6px;
  background:#24172f!important;
  border:1px solid #59356e!important;
  color:#e8d3f5;
}
.zone47-gm-exclusive-item b{font-size:18px}

/* ===== V4.12.0 PVP RANKED BATTLE ===== */
.pvp-rank-panel{display:grid;grid-template-columns:340px 1fr;gap:12px;margin:14px 0}
.pvp-rank-self,.pvp-rank-board{border:1px solid #d7e1e7;border-radius:16px;background:#fff;padding:14px}
.pvp-rank-self>span{font-size:8px;font-weight:900;letter-spacing:.1em;color:#627987}
.pvp-rank-main{display:grid;grid-template-columns:1fr auto;align-items:end;gap:5px;margin:8px 0 12px}
.pvp-rank-main strong{font-size:19px;color:#183e57}.pvp-rank-main b{font-size:28px;color:#804ab0}.pvp-rank-main small{grid-column:2;font-size:7px;color:#82929b;text-align:right}
.pvp-rank-self-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.pvp-rank-self-stats div{padding:9px;border-radius:10px;background:#f3f6f8}.pvp-rank-self-stats span,.pvp-rank-self-stats strong{display:block}.pvp-rank-self-stats span{font-size:6px;color:#7f8f98;font-weight:900}.pvp-rank-self-stats strong{font-size:13px;margin-top:4px}
.pvp-rank-board-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:8px}.pvp-rank-board-head small{color:#7e909a}
.pvp-leaderboard-list{display:grid;gap:5px}.pvp-rank-row{display:grid;grid-template-columns:28px 105px 1fr 62px;gap:7px;align-items:center;padding:8px;border-radius:9px;background:#f6f8f9}.pvp-rank-row.me{outline:2px solid rgba(133,72,180,.22);background:#faf5ff}.pvp-rank-row>b{font-size:12px}.pvp-rank-tier{font-size:8px;font-weight:900}.pvp-rank-row div{display:grid}.pvp-rank-row div strong{font-size:9px}.pvp-rank-row div small{font-size:7px;color:#7c8d96}.pvp-rank-row em{font-style:normal;font-size:12px;font-weight:900;text-align:right;color:#6d3d96}

/* Battle arena */
.pvp-battle-arena{position:relative;display:grid;grid-template-columns:1fr 170px 1fr;align-items:end;gap:10px;min-height:350px;margin:12px 0;border-radius:20px;overflow:hidden;padding:18px;background:
 radial-gradient(circle at 50% 76%,rgba(160,66,230,.2),transparent 28%),
 linear-gradient(180deg,#102c3d 0%,#173e4d 43%,#314b3d 44%,#24362c 100%);
 border:1px solid #38596a;box-shadow:inset 0 -45px 90px rgba(0,0,0,.18)}
.pvp-battle-arena:before{content:"CODE BATTLE ARENA";position:absolute;top:14px;left:50%;transform:translateX(-50%);font:900 8px/1 system-ui;letter-spacing:.16em;color:#e4d8f1;opacity:.65}
.pvp-fighter-side{position:relative;display:grid;justify-items:center;align-self:stretch;grid-template-rows:auto auto auto 1fr}
.pvp-fighter-meta{text-align:center;color:#fff;margin-top:18px}.pvp-fighter-meta span{font-size:7px;color:#c3d6df;font-weight:900}.pvp-fighter-meta strong{display:block;font-size:11px;margin:3px 0}.pvp-fighter-meta small{font-size:7px;color:#dec7ed}
.pvp-hp-shell{width:min(260px,92%);height:14px;background:#361e28;border:2px solid rgba(255,255,255,.6);border-radius:999px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.2)}
.pvp-hp-fill{height:100%;width:100%;background:linear-gradient(90deg,#44c872,#8fe06a);transition:width .3s ease}
.side-b .pvp-hp-fill{margin-left:auto}
.pvp-hp-number{font-size:7px;font-weight:900;color:#fff;margin-top:3px}
.pvp-fighter{position:relative;width:210px;height:245px;display:grid;place-items:end center;transform-origin:50% 100%;transition:filter .15s}
.pvp-avatar-stack{position:relative;width:160px;height:220px}
.pvp-base-avatar{position:absolute;width:150px;height:180px;object-fit:contain;left:5px;bottom:0;z-index:3}
.facing-left .pvp-avatar-stack{transform:scaleX(-1)}
.pvp-equip{position:absolute;object-fit:contain;z-index:5;filter:drop-shadow(0 4px 5px rgba(0,0,0,.25))}
.eq-aura{width:112px;height:112px;left:24px;bottom:34px;opacity:.35;z-index:1}
.eq-back{width:75px;height:83px;left:10px;bottom:38px;z-index:2}
.eq-top{width:68px;height:74px;left:46px;bottom:39px;z-index:5}
.eq-shoes{width:65px;height:35px;left:48px;bottom:3px;z-index:6}
.eq-head{width:60px;height:60px;left:50px;bottom:129px;z-index:7}
.eq-face{width:46px;height:31px;left:57px;bottom:108px;z-index:8}
.eq-hand{width:62px;height:62px;right:-10px;bottom:47px;z-index:8}
.eq-pet{width:68px;height:68px;left:-45px;bottom:5px;z-index:7;animation:pvpPetFloat 1.5s ease-in-out infinite alternate}
.pvp-battle-center{align-self:center;text-align:center;color:#fff;display:grid;justify-items:center;gap:8px;z-index:10}.pvp-battle-center>span{font-size:28px;font-weight:1000;color:#f2d777;text-shadow:0 3px 0 rgba(0,0,0,.2)}.pvp-battle-center>strong{font-size:14px;color:#fff}.pvp-battle-center>small{font-size:7px;color:#c8d9e0;line-height:1.5;max-width:150px}.pvp-combat-chips{display:flex;gap:5px}.pvp-combat-chips span{padding:5px 7px;border-radius:999px;background:rgba(9,29,40,.7);font-size:7px;font-weight:900}.pvp-combat-chips b{color:#f1ce61}
.pvp-empty-fighter{color:#b9cbd3;font-size:9px;font-weight:900;padding-bottom:80px}
.pvp-fighter.attack-basic{animation:pvpBasicAttack .36s ease}.pvp-fighter.attack-skill{animation:pvpSkillAttack .42s ease}.pvp-fighter.attack-critical{animation:pvpCriticalAttack .48s ease}.pvp-fighter.take-hit{animation:pvpTakeHit .35s ease}
@keyframes pvpBasicAttack{0%{transform:translateX(0)}45%{transform:translateX(26px) scale(1.03)}100%{transform:translateX(0)}}
.side-b .pvp-fighter.attack-basic{animation-name:pvpBasicAttackB}@keyframes pvpBasicAttackB{0%{transform:translateX(0)}45%{transform:translateX(-26px) scale(1.03)}100%{transform:translateX(0)}}
@keyframes pvpSkillAttack{0%{filter:brightness(1)}45%{filter:brightness(1.7) drop-shadow(0 0 25px #56c8ff);transform:scale(1.06)}100%{filter:brightness(1);transform:scale(1)}}
@keyframes pvpCriticalAttack{0%{filter:brightness(1)}35%{filter:brightness(2) drop-shadow(0 0 35px #e948ff);transform:scale(1.12)}100%{filter:brightness(1);transform:scale(1)}}
@keyframes pvpTakeHit{0%{filter:none}25%{filter:brightness(2) saturate(.2);transform:translateX(-9px)}50%{transform:translateX(8px)}100%{filter:none;transform:translateX(0)}}
@keyframes pvpPetFloat{from{transform:translateY(-2px)}to{transform:translateY(6px)}}

@media(max-width:900px){
  .pvp-rank-panel{grid-template-columns:1fr}
  .pvp-battle-arena{grid-template-columns:1fr 90px 1fr;min-height:300px}
  .pvp-fighter{width:145px;height:200px}.pvp-avatar-stack{transform:scale(.82);transform-origin:50% 100%}.facing-left .pvp-avatar-stack{transform:scaleX(-1) scale(.82)}
}
@media(max-width:650px){
  .pvp-battle-arena{grid-template-columns:1fr 65px 1fr;padding:8px}.pvp-fighter{width:112px;height:170px}.pvp-avatar-stack{transform:scale(.68);transform-origin:50% 100%}.facing-left .pvp-avatar-stack{transform:scaleX(-1) scale(.68)}
  .pvp-fighter-meta strong{font-size:8px}.pvp-rank-row{grid-template-columns:22px 75px 1fr 48px}.pvp-rank-self-stats{grid-template-columns:1fr 1fr 1fr}
}

/* V4.12.0 complete item stats + bare GM */
.item-stat-chips,.zone47-item-stats{display:flex;gap:5px;flex-wrap:wrap;margin:7px 0}
.item-stat-chips span,.zone47-item-stats span{padding:4px 6px;border-radius:7px;background:#eef4f7;color:#58707f;font-size:7px;font-weight:800}
.item-stat-chips span b,.zone47-item-stats span b{color:#28794f}
.item-stat-chips.compact,.zone47-item-stats.compact{margin:5px 0}.item-stat-chips.compact span,.zone47-item-stats.compact span{padding:3px 5px}
.item-power-line,.zone47-item-power{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-radius:8px;background:linear-gradient(90deg,#102f43,#284f66);color:#fff;margin:6px 0}
.item-power-line span,.zone47-item-power span{font-size:7px;font-weight:900;letter-spacing:.08em}.item-power-line strong,.zone47-item-power strong{font-size:13px;color:#f3d16b}
.reward-real-art img,.wardrobe-real-art img,.zone47-shop-real-art img,.zone47-backpack-art img{filter:drop-shadow(0 7px 7px rgba(19,42,57,.18))}
.zone47-gm-no-gear{font-size:7px;font-weight:900;letter-spacing:.12em;color:#c6aed8}.zone47-gm-skin-preview{height:170px!important;width:130px!important}

/* ===== V4.12.0 COMPLETE 30/30 SHOP ===== */
.zone47-shop-catalog-status{
  display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;
  padding:10px 12px;margin:10px 0;border:1px solid #d7e4e8;border-radius:12px;background:#f7fafb
}
.zone47-shop-catalog-status>div{display:flex;gap:9px;align-items:center}
.zone47-shop-catalog-status span{font-size:7px;font-weight:900;letter-spacing:.1em;color:#758b98}
.zone47-shop-catalog-status strong{font-size:9px;color:#536a77}
.zone47-shop-catalog-status strong.ok{color:#2e7a52}.zone47-shop-catalog-status strong.bad{color:#b94b42}
.zone47-shop-catalog-status small{font-size:7px;color:#82929b}

.zone47-shop-grid.zone47-shop-complete{display:block!important}
.zone47-shop-grade-section{margin:0 0 18px}
.zone47-shop-grade-head{
  display:flex;justify-content:space-between;align-items:center;gap:10px;
  padding:9px 12px;margin:8px 0;border-radius:12px;background:#f2f6f8;border-left:5px solid #8799a5
}
.zone47-shop-grade-head>div{display:flex;align-items:center;gap:10px}
.zone47-shop-grade-head span{font-size:7px;font-weight:900;letter-spacing:.1em;color:#758994}
.zone47-shop-grade-head strong{font-size:11px;color:#213f52}
.zone47-shop-grade-head b{font-size:9px}
.zone47-shop-grade-section.grade-easy .zone47-shop-grade-head{border-left-color:#4f9b70}.zone47-shop-grade-section.grade-easy .zone47-shop-grade-head b{color:#4f9b70}
.zone47-shop-grade-section.grade-medium .zone47-shop-grade-head{border-left-color:#477fb4}.zone47-shop-grade-section.grade-medium .zone47-shop-grade-head b{color:#477fb4}
.zone47-shop-grade-section.grade-rare .zone47-shop-grade-head{border-left-color:#9a62c9}.zone47-shop-grade-section.grade-rare .zone47-shop-grade-head b{color:#9a62c9}
.zone47-shop-grade-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}

.reward-catalog-complete{padding:9px 12px;margin-bottom:12px;border-radius:10px;font-size:9px;font-weight:900;letter-spacing:.08em;background:#f3f6f8}
.reward-catalog-complete.ok{color:#2d7950;border-left:4px solid #4f9b70}.reward-catalog-complete.bad{color:#a5433c;border-left:4px solid #d15c52}
.reward-grade-section{margin-bottom:20px}.reward-grade-head{display:flex;justify-content:space-between;align-items:center;padding:9px 12px;border-radius:10px;background:#f4f7f8;margin-bottom:10px}
.reward-grade-head>div{display:flex;gap:10px;align-items:center}.reward-grade-head span{font-size:7px;font-weight:900}.reward-grade-head strong{font-size:11px}.reward-grade-head b{font-size:9px}
.reward-grade-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
@media(max-width:1050px){.zone47-shop-grade-grid,.reward-grade-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:780px){.zone47-shop-grade-grid,.reward-grade-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:520px){.zone47-shop-grade-grid,.reward-grade-grid{grid-template-columns:1fr}}

/* ===== V4.12.0 ADMIN USAGE DASHBOARD ===== */
.usage-title{align-items:flex-start}.usage-kpi-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin-bottom:12px}
.usage-kpi-grid article{padding:14px;border:1px solid #d8e2e8;border-radius:14px;background:linear-gradient(145deg,#fff,#f7fafb);box-shadow:0 8px 20px rgba(26,55,73,.05)}
.usage-kpi-grid span,.usage-kpi-grid strong,.usage-kpi-grid small{display:block}.usage-kpi-grid span{font-size:8px;font-weight:900;color:#718793;letter-spacing:.05em}.usage-kpi-grid strong{font-size:22px;color:#173f58;margin:6px 0}.usage-kpi-grid small{font-size:8px;color:#83939c}
.usage-dashboard-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:12px;margin-bottom:12px}.usage-panel-card{border:1px solid #d9e3e8;border-radius:16px;background:#fff;padding:14px;margin-bottom:12px}
.usage-card-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px}.usage-card-head span{font-size:7px;font-weight:900;letter-spacing:.12em;color:#7a8e99}.usage-card-head h3{margin:3px 0 0;color:#183e56}.usage-card-head>strong{font-size:17px;color:#2b6f91}
.usage-daily-bars{height:220px;display:grid;grid-template-columns:repeat(14,1fr);gap:6px;align-items:end;padding-top:12px}.usage-day-bar{display:grid;grid-template-rows:1fr auto auto;gap:4px;height:100%;text-align:center}.usage-bar-track{height:170px;border-radius:8px;background:#eef3f6;display:flex;align-items:flex-end;overflow:hidden}.usage-bar-track i{display:block;width:100%;border-radius:7px 7px 0 0;background:linear-gradient(#4f9fd1,#246286);min-height:0}.usage-day-bar strong{font-size:8px}.usage-day-bar small{font-size:7px;color:#86969f}
.usage-top-users{display:grid;gap:6px}.usage-top-row{border:0;background:#f5f8fa;border-radius:10px;padding:8px;display:grid;grid-template-columns:24px 1fr auto;gap:8px;align-items:center;text-align:left;cursor:pointer}.usage-top-row:hover{background:#eef4f7}.usage-top-row>b{font-size:11px;color:#52788f}.usage-top-row div{display:grid;gap:5px}.usage-top-row strong{font-size:8px;color:#26485b}.usage-top-row span{height:5px;background:#dce8ed;border-radius:99px;overflow:hidden}.usage-top-row span i{display:block;height:100%;background:#4b95bd}.usage-top-row em{font-size:8px;font-style:normal;font-weight:900;color:#2a6887}
.usage-user-toolbar{align-items:flex-end}.usage-search{display:flex;gap:7px}.usage-search input{min-width:280px}.usage-user-table tr.usage-selected{background:#eef7fb}.usage-detail-summary{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:10px 0 14px}.usage-detail-summary div{padding:9px;border-radius:10px;background:#f3f7f9}.usage-detail-summary span,.usage-detail-summary strong{display:block}.usage-detail-summary span{font-size:7px;color:#81919a;font-weight:900}.usage-detail-summary strong{font-size:10px;margin-top:4px;color:#25495d}
@media(max-width:1200px){.usage-kpi-grid{grid-template-columns:repeat(3,1fr)}.usage-dashboard-grid{grid-template-columns:1fr}}@media(max-width:720px){.usage-kpi-grid{grid-template-columns:repeat(2,1fr)}.usage-detail-summary{grid-template-columns:repeat(2,1fr)}.usage-search{flex-direction:column}.usage-search input{min-width:0}.usage-daily-bars{overflow-x:auto;grid-template-columns:repeat(14,35px)}}

/* ===== V4.12.0 NORMAL GM ===== */
.zone47-gm-normal-badge{display:inline-grid;place-items:center;min-width:30px;height:24px;padding:0 7px;border-radius:8px;background:#173e58;color:#f4cf67;font-size:8px;font-weight:1000;border:1px solid #e7c15a}
.rarity-gm{--item-grade:#7250b5}.zone47-backpack-slot.rarity-gm{border-top-color:#7250b5;background:linear-gradient(145deg,#fff,#f8f4ff)}

/* ===== V4.12.0 COMPACT 2D ZONE CHAT BAR ===== */
.zone47-app{grid-template-rows:66px minmax(0,1fr) 52px!important}
.zone47-footer{
  grid-template-columns:46px 86px minmax(0,760px) 46px!important;
  gap:6px!important;padding:4px 10px max(4px,env(safe-area-inset-bottom))!important;
}
.zone47-move-button{height:40px!important;border-radius:10px!important;font-size:18px!important}
.zone47-chat-id{padding:4px 7px!important;border-radius:8px!important}
.zone47-chat-id strong{font-size:8px!important}.zone47-chat-id small{font-size:6px!important}
.zone47-chat-form{height:40px!important;grid-template-columns:minmax(0,1fr) 62px!important;gap:4px!important;padding:4px!important;border-width:1px!important;border-radius:10px!important}
.zone47-chat-form input{font-size:13px!important;padding:0 9px!important;border-radius:6px!important}
.zone47-chat-form button{font-size:8px!important;border-radius:6px!important}
@media(max-width:760px){
  .zone47-app{grid-template-rows:54px minmax(0,1fr) 46px!important}
  .zone47-footer{grid-template-columns:40px minmax(0,1fr) 40px!important;gap:4px!important;padding:3px 5px!important}
  .zone47-move-button{height:38px!important;font-size:16px!important}
  .zone47-chat-form{height:38px!important;grid-template-columns:minmax(0,1fr) 48px!important;padding:3px!important}
  .zone47-chat-form input{font-size:14px!important}
}

/* Student-only fallback when browser refuses true Fullscreen API. */
body.user-immersive-fallback{min-height:100dvh}
body.student-fullscreen-session{overscroll-behavior:none}

/* ===== V4.12.0 STUDENT FULLSCREEN SESSION ===== */
.student-zone-shell{
  position:fixed;inset:0;z-index:50000;background:#071d2a;
  width:100vw;height:100dvh;overflow:hidden
}
.student-zone-shell.hidden{display:none!important}
.student-zone-frame{display:block;width:100%;height:100%;border:0;background:#071d2a}

.student-fullscreen-gate{
  position:fixed;inset:0;z-index:60000;
  display:grid;place-items:center;padding:20px;
  background:rgba(7,25,37,.93);backdrop-filter:blur(10px)
}
.student-fullscreen-gate.hidden{display:none!important}
.student-fullscreen-gate-card{
  width:min(460px,92vw);padding:30px;border-radius:24px;text-align:center;
  background:#fff;border:1px solid #d7e2e8;box-shadow:0 30px 80px rgba(0,0,0,.35)
}
.student-fullscreen-gate-icon{
  width:66px;height:66px;margin:0 auto 12px;border-radius:18px;
  display:grid;place-items:center;background:#173f58;color:#fff;font-size:30px
}
.student-fullscreen-gate-card h2{margin:8px 0;color:#173c53}
.student-fullscreen-gate-card p{color:#647985;line-height:1.65;margin:8px auto 18px}
.student-fullscreen-gate-card .btn{min-width:260px;min-height:48px}
.student-fullscreen-gate-card>small{display:block;margin-top:12px;color:#8b99a1}

body.student-fullscreen-session{
  width:100%;height:100dvh;overflow-x:hidden;overscroll-behavior:none
}
body.student-zone-shell-open{overflow:hidden!important}
body.student-zone-shell-open #studentFullscreenGate{z-index:70000}

/* In Fullscreen, the portal fills the viewport naturally. */
:fullscreen body{min-height:100dvh}
:fullscreen #userPortal{min-height:100dvh}

```


## app.js

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {
  getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc,
  serverTimestamp, query, where, orderBy, limit, onSnapshot, runTransaction
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js?v=4.12.0";
import { LANGUAGES, LESSONS, DIFFICULTIES } from "./lessons.js?v=4.12.0";
import { REWARD_ITEMS, LEGACY_REWARD_ITEMS, ALL_REWARD_ITEMS, rewardItemById, RARITY_META, INVENTORY_LIMIT, SELLBACK_RATE, sellBackValue, ITEM_STAT_KEYS, ITEM_STAT_LABELS, itemStats, itemPower, equipmentStats, SHOP_GRADE_ORDER, SHOP_EXPECTED_COUNTS, shopCatalogSummary, shopCatalogComplete } from "./reward-data.js?v=4.12.0";
import { ITEM_ART_DATA, itemArtSrc } from "./item-assets.js?v=4.12.0";
import { DEFAULT_CHARACTER, DEFAULT_ZONE_STATE } from "./character-system.js?v=4.12.0";
import { OFFICIAL_STAGES, OFFICIAL_TOTAL_SCORE } from "./official-data.js?v=4.12.0";
import { RANKING_CONFIG, seasonIdFromDate, seasonRange, calculateRankMetrics, rankingClassKey, rankProfiles } from "./ranking-system.js?v=4.12.0";
import { TOKEN_REWARD_CONFIG, calculateStageTokenReward, maxTokenForLesson, classKey } from "./economy-system.js?v=4.12.0";
import { DEFAULT_TEACHER_QUESTS, localDayKey, questObjectiveMet, questObjectiveLabel, clampQuestReward } from "./quest-system.js?v=4.12.0";
import { PVP_CHARACTER_ART } from "./pvp-assets.js?v=4.12.0";
import { PVP_RANK_CONFIG, calculatePvpProfile, buildPvpLeaderboard } from "./pvp-ranking-system.js?v=4.12.0";
import { startUsageTracker, stopUsageTracker } from "./usage-tracker.js?v=4.12.0";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const $ = id => document.getElementById(id);

const state = {
  uid:null, player:null, language:null, lesson:null, difficulty:null, gameMode:"classic",
  attemptId:null, started:false, finished:false, startTime:0, timer:null,
  mistakes:0, keystrokes:0, correctText:"",
  historyUnsub:null,
  roomUnsub:null, roomCode:null, roomData:null,
  officialProgress:{}, officialSelected:null, officialUnsub:null,
  presenceUnsub:null, leaderboardUnsub:null, presenceTimer:null, communityUnsub:null, presenceCache:new Map(),
  pvpStartTime:0, pvpTimer:null, pvpMistakes:0, pvpKeys:0, pvpCorrectText:"",
  pvpLesson:null, pvpAttemptId:null, pvpFinished:false, pvpActiveRoom:null,
  pvpProgressTimer:null, pvpProgressLastSent:0, pvpResultSaved:false,
  pvpRoomListUnsub:null,pvpStakeLocking:false,pvpCurrentShot:-1,pvpShotRecorded:-1,
  pvpAggregate:{typedChars:0,keys:0,mistakes:0,seconds:0},pvpPayoutClaimed:false,pvpWasActive:false,pvpTargetCode:"",pvpTurnSignature:null,pvpRecordedSignature:null,
  pvpCountdownTimer:null,pvpCountdownEndMs:0,pvpRankUnsub:null,
  pvpBattle:{combo:0,maxCombo:0,damage:0,correctSinceAttack:0,lastEventSeq:0,lastLineCount:0,attackQueue:null},
  rankSettingsUnsub:null,rankResetTimer:null,rankSettings:{},rankResetAppliedVersion:null,
  activeQuest:null,questLaunchHandled:false,
  dailyFullscreen:{dayId:"",seconds:0,rewarded:false,lastTickMs:0,syncTimer:null,uiTimer:null,claiming:false},
  playStyle:null,rankedTimeLimit:0,rankedTimedOut:false,rankedStage:1
};

const studentEmail = id => `${String(id).trim()}@student.nr-game-code.local`;
const esc = v => String(v ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const fmtDate = v => { try { return v?.toDate?.().toLocaleString("th-TH") || "-"; } catch { return "-"; } };
const fmtTime = s => { s=Math.max(0,s); return `${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`; };

function showScreen(id){
  ["authScreen","userPortal","gameScreen","resultScreen","pvpGameScreen"].forEach(x => $(x)?.classList.toggle("hidden", x !== id));
  const playing = id === "gameScreen" || id === "pvpGameScreen";
  document.body.classList.toggle("game-active", playing);
  if (!playing) window.scrollTo({top:0,behavior:"smooth"});
}

function difficultyName(id){ return DIFFICULTIES.find(x=>x.id===id)?.name || id; }
function difficultyIcon(id){ return DIFFICULTIES.find(x=>x.id===id)?.icon || "●"; }
function languageLessons(){ return LESSONS.filter(x => x.language === state.language?.id).sort((a,b)=>a.stage-b.stage); }

function localDayId(){
  const d=new Date();
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}
function fmtDuration(totalSeconds){
  const s=Math.max(0,Math.floor(Number(totalSeconds||0)));
  const h=String(Math.floor(s/3600)).padStart(2,"0");
  const m=String(Math.floor((s%3600)/60)).padStart(2,"0");
  const sec=String(s%60).padStart(2,"0");
  return `${h}:${m}:${sec}`;
}
function isDailyFullscreenActive(){
  return !!document.fullscreenElement && document.visibilityState==="visible" && !!state.player?.uid;
}
function renderDailyFullscreenQuest(){
  const q=state.dailyFullscreen;
  if(!$("dailyFullscreenQuestCard"))return;
  const seconds=Math.min(3600,Math.max(0,Number(q.seconds||0)));
  const pct=Math.min(100,seconds/3600*100);
  $("dailyFullscreenBar").style.width=`${pct}%`;
  $("dailyFullscreenTimer").textContent=`${fmtDuration(seconds)} / 01:00:00`;
  $("dailyFullscreenStatus").textContent=q.rewarded?"รับรางวัลแล้ว":`${Math.floor(seconds/60)} / 60 นาที`;
  $("dailyFullscreenActiveState").textContent=q.rewarded
    ?"✅ Daily Quest สำเร็จ"
    :isDailyFullscreenActive()?"🟢 กำลังนับอัตโนมัติหลัง Login":"⏸️ หยุดนับ · กลับเข้า Fullscreen เพื่อใช้งานต่อ";
  $("dailyFullscreenRewardText").textContent=q.rewarded?"🎁 รับ 15 Token วันนี้แล้ว":"🎁 รางวัลวันนี้: 15 Token";
  $("enterDailyFullscreen").disabled=q.rewarded||!!document.fullscreenElement;
}
async function loadDailyFullscreenQuest(){
  if(!state.player?.uid)return;
  const dayId=localDayId(),ref=doc(db,"users",state.player.uid,"daily_checkins",dayId);
  const snap=await getDoc(ref);
  const data=snap.exists()?snap.data():{};
  state.dailyFullscreen.dayId=dayId;
  state.dailyFullscreen.seconds=Math.min(3600,Math.max(0,Number(data.fullscreenSeconds||0)));
  state.dailyFullscreen.rewarded=!!data.rewarded;
  state.dailyFullscreen.lastTickMs=performance.now();
  renderDailyFullscreenQuest();
}
async function syncDailyFullscreenProgress(force=false){
  const q=state.dailyFullscreen;
  if(!state.player?.uid||!q.dayId||q.rewarded)return;
  const ref=doc(db,"users",state.player.uid,"daily_checkins",q.dayId);
  await setDoc(ref,{
    uid:state.player.uid,
    studentId:state.player.studentId||"",
    dayId:q.dayId,
    fullscreenSeconds:Math.min(3600,Math.floor(q.seconds)),
    rewarded:false,
    updatedAt:serverTimestamp()
  },{merge:true});
}
async function claimDailyFullscreenReward(){
  const q=state.dailyFullscreen;
  if(!state.player?.uid||q.rewarded||q.claiming||q.seconds<3600)return;
  q.claiming=true;
  try{
    const userRef=doc(db,"users",state.player.uid);
    const checkinRef=doc(db,"users",state.player.uid,"daily_checkins",q.dayId);
    await runTransaction(db,async tx=>{
      const [userSnap,checkSnap]=await Promise.all([tx.get(userRef),tx.get(checkinRef)]);
      if(!userSnap.exists())throw new Error("USER_PROFILE_NOT_FOUND");
      const check=checkSnap.exists()?checkSnap.data():{};
      if(check.rewarded===true)return;
      const savedSeconds=Math.max(Number(check.fullscreenSeconds||0),Math.floor(q.seconds));
      if(savedSeconds<3600)throw new Error("FULLSCREEN_NOT_COMPLETE");
      const user=userSnap.data();
      tx.set(checkinRef,{
        uid:state.player.uid,studentId:state.player.studentId||"",dayId:q.dayId,
        fullscreenSeconds:3600,rewarded:true,rewardToken:15,rewardedAt:serverTimestamp(),updatedAt:serverTimestamp()
      },{merge:true});
      tx.update(userRef,{
        tokenBalance:Number(user.tokenBalance||0)+15,
        tokenLifetime:Number(user.tokenLifetime||0)+15,
        updatedAt:serverTimestamp()
      });
    });
    q.rewarded=true;q.seconds=3600;
    await loadPlayer();
    renderDailyFullscreenQuest();
    if(typeof showToast==="function")showToast("Daily Quest สำเร็จ","ครบ Fullscreen 60 นาที รับ +15 Token");
  }catch(error){
    console.warn("daily fullscreen reward:",error);
  }finally{q.claiming=false}
}
function dailyFullscreenTick(){
  const q=state.dailyFullscreen;
  if(!state.player?.uid||q.rewarded)return renderDailyFullscreenQuest();
  const now=performance.now();
  if(!q.lastTickMs)q.lastTickMs=now;
  const delta=Math.min(2,Math.max(0,(now-q.lastTickMs)/1000));
  q.lastTickMs=now;
  if(isDailyFullscreenActive())q.seconds=Math.min(3600,q.seconds+delta);
  renderDailyFullscreenQuest();
  if(q.seconds>=3600)claimDailyFullscreenReward();
}
function startDailyFullscreenQuest(){
  stopDailyFullscreenQuest();
  loadDailyFullscreenQuest().catch(console.warn);
  state.dailyFullscreen.uiTimer=setInterval(dailyFullscreenTick,1000);
  state.dailyFullscreen.syncTimer=setInterval(()=>syncDailyFullscreenProgress().catch(console.warn),30000);
}
function stopDailyFullscreenQuest(){
  const q=state.dailyFullscreen;
  if(q.uiTimer)clearInterval(q.uiTimer);
  if(q.syncTimer)clearInterval(q.syncTimer);
  q.uiTimer=null;q.syncTimer=null;
}
async function enterDailyFullscreenMode(){
  try{
    if(!document.fullscreenElement)await document.documentElement.requestFullscreen();
  }catch(error){console.warn("fullscreen:",error)}
  state.dailyFullscreen.lastTickMs=performance.now();
  renderDailyFullscreenQuest();
}
document.addEventListener("fullscreenchange",()=>{
  state.dailyFullscreen.lastTickMs=performance.now();
  renderDailyFullscreenQuest();
  if(studentSessionAuthenticated){
    const lost=!document.fullscreenElement;
    studentFullscreenGateVisible(lost);
    document.body.classList.toggle("student-fullscreen-session",!lost);
  }
});
document.addEventListener("visibilitychange",()=>{
  state.dailyFullscreen.lastTickMs=performance.now();
  renderDailyFullscreenQuest();
  if(document.visibilityState==="visible"&&studentNeedsFullscreenRecovery()){
    studentFullscreenGateVisible(true);
  }
});

function maxUnlocked(languageId){
  return Number(state.player?.progress?.[languageId]?.maxUnlockedStage || 1);
}

function rankedMaxUnlocked(languageId){
  return Math.max(1,Math.min(50,Number(state.player?.rankedProgress?.[languageId]?.maxUnlockedStage||1)));
}
function rankedTimeLimitForLesson(lesson){
  return Math.max(25,Number(lesson?.timeLimit||60));
}
function rankedTokenReward(lesson,wpmValue,accuracyValue){
  const base=calculateStageTokenReward(lesson,wpmValue,accuracyValue);
  return {base:base.earned,earned:Math.min(85,base.earned+15),maxToken:Math.min(85,base.maxToken+15)};
}
function rankedMistakeScore(mistakes){
  return Math.max(0,Math.min(100,100-Number(mistakes||0)*10));
}
function prepareRankedLesson(){
  if(!state.language)return false;
  state.rankedStage=rankedMaxUnlocked(state.language.id);
  const lesson=languageLessons().find(x=>Number(x.stage)===Number(state.rankedStage))||languageLessons()[0];
  if(!lesson)return false;
  state.lesson=lesson;
  state.difficulty=DIFFICULTIES.find(x=>x.id===lesson.difficulty)||DIFFICULTIES[0];
  state.rankedTimeLimit=rankedTimeLimitForLesson(lesson);
  state.rankedTimedOut=false;
  return true;
}
function renderRankedConfig(){
  if(!$("rankedConfig")||!state.language||!prepareRankedLesson())return;
  $("rankedStageLabel").textContent=String(state.lesson.stage).padStart(2,"0");
  $("rankedDifficultyLabel").textContent=state.difficulty.name;
  $("rankedTimeLimitLabel").textContent=`${state.rankedTimeLimit}s`;
  $("rankedProgressText").textContent=`Stage ${state.lesson.stage} / 50`;
  $("rankedProgressBar").style.width=`${Math.max(2,state.lesson.stage/50*100)}%`;
  $("rankedLessonSummary").textContent=`${state.language.name} · Stage ${state.lesson.stage} · ${state.lesson.title} · สูงสุด ${Math.min(85,maxTokenForLesson(state.lesson)+15)} Token`;
}

async function ensureProfileDefaults(){
  if(!state.uid) return;
  const ref = doc(db,"users",state.uid);
  const snap = await getDoc(ref);
  if(!snap.exists()) return;
  const d = snap.data();
  const patch = {};
  if(typeof d.tokenBalance !== "number") {
    patch.tokenBalance = typeof d.pointsBalance === "number" ? d.pointsBalance : 0;
  }
  if(typeof d.tokenLifetime !== "number") {
    patch.tokenLifetime = typeof d.pointsLifetime === "number" ? d.pointsLifetime : 0;
  }
  if(!Array.isArray(d.inventory)) patch.inventory = [];
  if(!d.progress) patch.progress = {html:{maxUnlockedStage:1},python:{maxUnlockedStage:1}};
  if(!d.rankedProgress) patch.rankedProgress = {html:{maxUnlockedStage:1},python:{maxUnlockedStage:1}};
  else {
    patch.progress = {
      html:{maxUnlockedStage:Number(d.progress?.html?.maxUnlockedStage || 1)},
      python:{maxUnlockedStage:Number(d.progress?.python?.maxUnlockedStage || 1)}
    };
  }
  if(!d.character) {
    patch.character = {...DEFAULT_CHARACTER,displayName:d.fullName||""};
  } else {
    patch.character = {
      ...DEFAULT_CHARACTER,
      ...d.character,
      displayName:d.character.displayName||d.fullName||"",
      equipped:{...DEFAULT_CHARACTER.equipped,...(d.character.equipped||{})}
    };
  }
  if(!d.classKey && d.educationLevel && d.classroom) patch.classKey=classKey(d.educationLevel,d.classroom);
  if(!d.zone) patch.zone = {...DEFAULT_ZONE_STATE};
  if(Object.keys(patch).length) await updateDoc(ref,patch);
  const refreshed = await getDoc(ref);
  state.player = {uid:state.uid,...refreshed.data()};
}

$("loginTab").onclick=()=>{$("loginTab").classList.add("active");$("registerTab").classList.remove("active");$("loginPanel").classList.remove("hidden");$("registerPanel").classList.add("hidden")};
$("registerTab").onclick=()=>{$("registerTab").classList.add("active");$("loginTab").classList.remove("active");$("registerPanel").classList.remove("hidden");$("loginPanel").classList.add("hidden")};
document.querySelectorAll("[data-toggle-password]").forEach(btn=>btn.onclick=()=>{const i=$(btn.dataset.togglePassword);i.type=i.type==="password"?"text":"password";btn.textContent=i.type==="password"?"แสดง":"ซ่อน"});


const MAJOR_CODE_MAP={
  "เทคโนโลยีสารสนเทศ":"ทส.",
  "เทคโนโลยีธุรกิจดิจิทัล":"ทธ.",
  "คอมพิวเตอร์ธุรกิจ":"คธ."
};
function majorCodeFor(level,major){
  const base=MAJOR_CODE_MAP[String(major||"").trim()]||"";
  if(!base)return "";
  return String(level||"").startsWith("ปวส")?`ส.${base}`:base;
}
function academicKey(user){
  return [user?.educationLevel||"",user?.classroom||"",user?.department||"",user?.major||""].join("|");
}
function refreshMajorCodePreview(){
  const level=$("educationLevel")?.value||"",major=$("major")?.value||"";
  const code=majorCodeFor(level,major);
  if($("majorCodePreview"))$("majorCodePreview").textContent=code?`รหัสสาขา: (${code})`:"รหัสสาขา: -";
}


let authGestureFullscreenOwned=false;
let studentSessionAuthenticated=false;
let studentZoneShellOpen=false;
async function requestStudentFullscreenFromAuthGesture(){
  // Browser Fullscreen API requires a direct user gesture.
  // This function is called immediately from Student Login/Register submit.
  if(document.fullscreenElement)return true;
  const root=document.documentElement;
  if(!root?.requestFullscreen){
    document.body.classList.add("user-immersive-fallback");
    return false;
  }
  try{
    await root.requestFullscreen();
    authGestureFullscreenOwned=true;
    document.body.classList.add("student-fullscreen-session");
    return true;
  }catch(error){
    console.warn("Student auto fullscreen blocked by browser:",error);
    document.body.classList.add("user-immersive-fallback");
    return false;
  }
}
async function rollbackStudentFullscreenAfterAuthFailure(){
  if(authGestureFullscreenOwned&&document.fullscreenElement){
    try{await document.exitFullscreen()}catch{}
  }
  authGestureFullscreenOwned=false;
  document.body.classList.remove("student-fullscreen-session","user-immersive-fallback");
}


function studentFullscreenGateVisible(show){
  const gate=$("studentFullscreenGate");
  if(!gate)return;
  gate.classList.toggle("hidden",!show);
  gate.setAttribute("aria-hidden",show?"false":"true");
}
function studentNeedsFullscreenRecovery(){
  return studentSessionAuthenticated
    && !!state.player?.uid
    && !document.fullscreenElement
    && document.visibilityState==="visible";
}
async function ensureStudentFullscreenFromGesture(){
  if(document.fullscreenElement){
    studentFullscreenGateVisible(false);
    state.dailyFullscreen.lastTickMs=performance.now();
    return true;
  }
  try{
    if(document.documentElement.requestFullscreen){
      await document.documentElement.requestFullscreen();
      authGestureFullscreenOwned=true;
      document.body.classList.add("student-fullscreen-session");
      document.body.classList.remove("user-immersive-fallback");
      studentFullscreenGateVisible(false);
      state.dailyFullscreen.lastTickMs=performance.now();
      return true;
    }
  }catch(error){
    console.warn("Student fullscreen recovery:",error);
  }
  document.body.classList.add("user-immersive-fallback");
  studentFullscreenGateVisible(true);
  return false;
}

async function openStudentZoneShell({questId=null}={}){
  if(!state.player?.uid)return;
  // Stop portal usage analytics while Zone iframe records its own usage.
  await stopUsageTracker({flush:true});

  const shell=$("studentZoneShell"),frame=$("studentZoneFrame");
  if(!shell||!frame)return;

  studentZoneShellOpen=true;
  shell.classList.remove("hidden");
  shell.setAttribute("aria-hidden","false");
  document.body.classList.add("student-zone-shell-open");

  const qs=new URLSearchParams({embedded:"1",v:"4.9.5"});
  if(questId)qs.set("quest",questId);
  const target=`./zone.html?${qs.toString()}`;
  if(!frame.src||!frame.src.includes("zone.html"))frame.src=target;

  // Daily fullscreen counter remains in the parent page and keeps running.
  state.dailyFullscreen.lastTickMs=performance.now();
  renderDailyFullscreenQuest();
}

async function closeStudentZoneShell(){
  const shell=$("studentZoneShell"),frame=$("studentZoneFrame");
  if(!shell||!frame)return;
  studentZoneShellOpen=false;
  shell.classList.add("hidden");
  shell.setAttribute("aria-hidden","true");
  document.body.classList.remove("student-zone-shell-open");
  frame.src="about:blank";
  if(state.player?.uid)startUsageTracker(db,state.player,"portal");
  try{await writePresence("portal")}catch{}
  state.dailyFullscreen.lastTickMs=performance.now();
  renderDailyFullscreenQuest();
}

async function routeZoneLinkFromGesture(event){
  const link=event.target.closest('a[href*="zone.html"]');
  if(!link||!state.player?.uid)return;
  event.preventDefault();
  await ensureStudentFullscreenFromGesture();
  await openStudentZoneShell();
}
document.addEventListener("click",routeZoneLinkFromGesture);

window.addEventListener("message",async event=>{
  if(event.origin!==location.origin||!event.data)return;
  if(event.data.type==="NR_ZONE_EXIT"){
    await closeStudentZoneShell();
    return;
  }
  if(event.data.type==="NR_ZONE_QUEST"&&event.data.questId){
    await closeStudentZoneShell();
    state.questLaunchHandled=false;
    history.replaceState(null,"",`${location.pathname}?quest=${encodeURIComponent(event.data.questId)}`);
    await maybeLaunchQuestFromUrl();
  }
});

function registerValid(){
  return /^\d{1,15}$/.test($("studentId").value.trim()) &&
    $("fullName").value.trim() && $("educationLevel").value && $("classroom").value &&
    $("department").value && $("major").value && $("password").value.length >= 6 &&
    $("password").value === $("confirmPassword").value && $("acceptRules").checked;
}
function updateRegister(){ $("registerButton").disabled = !registerValid(); }
["studentId","fullName","educationLevel","classroom","department","major","password","confirmPassword","acceptRules"].forEach(id=>$(id).addEventListener("input",updateRegister));
$("educationLevel").addEventListener("change",refreshMajorCodePreview);
$("major").addEventListener("change",refreshMajorCodePreview);
refreshMajorCodePreview();

$("registerForm").addEventListener("submit",async e=>{
  e.preventDefault(); if(!registerValid()) return;
  const fullscreenAttempt=requestStudentFullscreenFromAuthGesture();
  try{
    const sid=$("studentId").value.trim();
    const cred=await createUserWithEmailAndPassword(auth,studentEmail(sid),$("password").value);
    state.uid=cred.user.uid;
    const p={
      uid:state.uid,studentId:sid,fullName:$("fullName").value.trim(),
      educationLevel:$("educationLevel").value,classroom:$("classroom").value,
      classKey:classKey($("educationLevel").value,$("classroom").value),
      department:$("department").value,major:$("major").value,
      majorCode:majorCodeFor($("educationLevel").value,$("major").value),
      academicKey:[$("educationLevel").value,$("classroom").value,$("department").value,$("major").value].join("|"),
      role:"student",status:"active",
      tokenBalance:0,tokenLifetime:0,inventory:[],
      officialProgress:{},officialSubmitted:false,
      rank:{seasonId:null,rating:0,tierId:"bronze",tierName:"Bronze"},
      progress:{html:{maxUnlockedStage:1},python:{maxUnlockedStage:1}},
      character:{...DEFAULT_CHARACTER,displayName:$("fullName").value.trim()},
      zone:{...DEFAULT_ZONE_STATE},
      createdAt:serverTimestamp(),updatedAt:serverTimestamp()
    };
    await setDoc(doc(db,"users",state.uid),p);
    await fullscreenAttempt;
    await routeAuthenticatedStudent();
  }catch(err){
    await fullscreenAttempt.catch(()=>false);
    await rollbackStudentFullscreenAfterAuthFailure();
    $("registerMessage").textContent = err.code==="auth/email-already-in-use" ? "เลขนักศึกษานี้ลงทะเบียนแล้ว" : "ลงทะเบียนไม่สำเร็จ: "+err.message;
  }
});

$("loginForm").addEventListener("submit",async e=>{
  // STUDENT_ID_15_DIGIT_LOGIN_GUARD
  const sidValue=$("loginStudentId").value.trim();
  if(!/^\d{1,15}$/.test(sidValue)){
    e.preventDefault();
    $("loginMessage").textContent="กรุณากรอกเลขประจำตัวนักศึกษาเป็นตัวเลข 1–15 หลัก";
    return;
  }
  e.preventDefault();

  // Fullscreen must be requested while this submit gesture is still active.
  // This is Student-only; admin.html/admin.js never call this function.
  const fullscreenAttempt=requestStudentFullscreenFromAuthGesture();

  try{
    const cred=await signInWithEmailAndPassword(auth,studentEmail(sidValue),$("loginPassword").value);
    state.uid=cred.user.uid;
    await fullscreenAttempt;
    await routeAuthenticatedStudent();
  }catch(error){
    await fullscreenAttempt.catch(()=>false);
    await rollbackStudentFullscreenAfterAuthFailure();
    $("loginMessage").textContent="เลขนักศึกษาหรือรหัสผ่านไม่ถูกต้อง";
  }
});

async function routeAuthenticatedStudent(){
  // createUserWithEmailAndPassword จะยิง onAuthStateChanged ก่อน setDoc(users/{uid}) ได้
  // จึง retry สั้น ๆ เพื่อป้องกันหน้า Login กระพริบ/แจ้งไม่พบ User ตอนสมัครใหม่
  for(let i=0;i<6&&!state.player;i++){
    await ensureProfileDefaults();
    if(!state.player) await new Promise(resolve=>setTimeout(resolve,250));
  }
  if(!state.player) throw new Error("ไม่พบข้อมูลผู้ใช้");

  const requestedQuest=new URLSearchParams(location.search).get("quest");
  // V4.12.0: ทุก User อยู่ใต้ Fullscreen document เดียว
  // Mobile/Tablet ยังเป็น Zone-only แต่ Zone เปิดเป็น iframe เต็มพื้นที่
  // เพื่อไม่ให้ Browser ยกเลิก Fullscreen จากการเปลี่ยนหน้า HTML.
  await enterPortal();
  if(isMobileOrTabletDevice() && ["male","female"].includes(state.player?.character?.gender)){
    await openStudentZoneShell();
    return;
  }
}

async function enterPortal(){
  await ensureProfileDefaults();
  showScreen("userPortal");
  $("portalWelcome").textContent=`${state.player.fullName} · ${state.player.studentId} · ${state.player.educationLevel}${state.player.classroom} · ${state.player.department||"-"} · ${state.player.major||"-"}${state.player.majorCode?` (${state.player.majorCode})`:""}`;
  $("userTokens").textContent=Number(state.player.tokenBalance||0).toLocaleString();
  renderUserRank();
  renderLanguages();
  renderRewardShop();
  listenHistory();
  startSocialHub();
  startUsageTracker(db,state.player,"portal");

  // Daily Fullscreen Quest starts immediately for every authenticated User.
  // This also restores today's saved seconds when the page is reloaded.
  studentSessionAuthenticated=true;
  startDailyFullscreenQuest();
  studentFullscreenGateVisible(studentNeedsFullscreenRecovery());

  setupCharacterUi();

  if(!["male","female"].includes(state.player?.character?.gender)){
    $("characterSetupModal")?.classList.remove("hidden");
  }

  // คำนวณ Rank ของ Season ปัจจุบันเมื่อ User เข้าใช้งาน
  // ถ้าครบรอบ 60 วัน seasonId จะเปลี่ยนโดยอัตโนมัติ
  try {
    await updateMyRank();
    await ensureProfileDefaults();
    renderUserRank();
    await syncPublicProfile();
    await writePresence("portal");
  } catch (error) {
    console.warn("Ranking update skipped:", error);
  }

  await maybeLaunchQuestFromUrl();
}

$("logoutUserButton").onclick=async()=>{
  try{await syncDailyFullscreenProgress(true)}catch{}
  stopDailyFullscreenQuest();
  studentSessionAuthenticated=false;
  studentFullscreenGateVisible(false);
  if(studentZoneShellOpen)await closeStudentZoneShell();
  await stopUsageTracker({flush:true});
  await markOffline();
  if(state.historyUnsub) state.historyUnsub();
  if(state.presenceUnsub) state.presenceUnsub();
  if(state.communityUnsub) state.communityUnsub();
  if(state.leaderboardUnsub) state.leaderboardUnsub();
  if(state.pvpRoomListUnsub) state.pvpRoomListUnsub();
  if(state.rankSettingsUnsub) state.rankSettingsUnsub();
  clearInterval(state.rankResetTimer);
  clearInterval(state.pvpCountdownTimer);
  clearInterval(state.presenceTimer);
  await signOut(auth);
};

function renderLanguages(){
  $("languageCards").innerHTML=LANGUAGES.map(l=>`
    <button class="language-card ${state.language?.id===l.id?"selected":""} ${l.comingSoon?"coming-soon":""}" data-lang="${l.id}" ${l.comingSoon?"disabled":""}>
      <span>${l.icon}</span>
      <strong>${l.name}</strong>
      <b>${esc(l.tagline)}</b>
      <small>${esc(l.description)}</small>
      <em>${l.comingSoon?"COMING SOON":`${l.stageCount} ด่าน`}</em>
    </button>`).join("");
  document.querySelectorAll("[data-lang]:not([disabled])").forEach(b=>b.onclick=()=>selectLanguage(b.dataset.lang));
}

function selectLanguage(id){
  state.language=LANGUAGES.find(x=>x.id===id);
  state.lesson=null;state.difficulty=null;state.playStyle=null;
  renderLanguages();
  $("playStyleSection").classList.remove("hidden");
  ["learningSection","modeSection","classicConfig","rankedConfig","officialConfig","pvpConfig"].forEach(id=>$(id)?.classList.add("hidden"));
  $("playStyleSection").scrollIntoView({behavior:"smooth",block:"start"});
}
function choosePlayStyle(style){
  state.playStyle=style;
  document.querySelectorAll(".play-style-choice").forEach(x=>x.classList.toggle("selected",
    (style==="classic"&&x.id==="chooseClassicStyle")||(style==="ranked"&&x.id==="chooseRankedStyle")));
  if(style==="classic"){
    state.gameMode="classic";
    $("learningSection").classList.remove("hidden");
    $("modeSection").classList.remove("hidden");
    $("classicConfig").classList.remove("hidden");
    $("rankedConfig").classList.add("hidden");
    $("officialConfig").classList.add("hidden");$("pvpConfig").classList.add("hidden");
    $("learningTitle").textContent=`${state.language.icon} ${state.language.name} · 50 STAGES`;
    $("learningTagline").textContent=state.language.description;
    renderLessonTabs();renderDifficulty();renderClassicStages();renderLessonDetail();updateClassicSummary();
    $("learningSection").scrollIntoView({behavior:"smooth",block:"start"});
  }else{
    state.gameMode="ranked";
    state.activeQuest=null;
    $("learningSection").classList.add("hidden");
    $("modeSection").classList.add("hidden");$("classicConfig").classList.add("hidden");
    $("officialConfig").classList.add("hidden");$("pvpConfig").classList.add("hidden");
    $("rankedConfig").classList.remove("hidden");
    renderRankedConfig();
    $("rankedConfig").scrollIntoView({behavior:"smooth",block:"start"});
  }
}
$("chooseClassicStyle").onclick=()=>choosePlayStyle("classic");
$("chooseRankedStyle").onclick=()=>choosePlayStyle("ranked");
$("startRankedButton").onclick=async()=>{
  if(!prepareRankedLesson())return;
  state.gameMode="ranked";
  prepareClassic();showScreen("gameScreen");
  await requestRealFullscreen();
  setTimeout(()=>$("typingInput").focus({preventScroll:true}),150);
};

function renderLessonTabs(){
  $("lessonTabs").innerHTML=DIFFICULTIES.map(d=>`
    <button class="lesson-tab ${state.difficulty?.id===d.id?"active":""}" data-learn-diff="${d.id}">
      <span>${d.icon}</span><strong>${d.name}</strong><small>ด่าน ${d.from}–${d.to}</small>
    </button>`).join("");
  document.querySelectorAll("[data-learn-diff]").forEach(b=>b.onclick=()=>{
    state.difficulty=DIFFICULTIES.find(x=>x.id===b.dataset.learnDiff);
    const unlocked=maxUnlocked(state.language.id);
    const list=languageLessons().filter(x=>x.difficulty===state.difficulty.id);
    state.lesson=list.find(x=>x.stage<=unlocked) || list[0];
    renderLessonTabs();renderStageSelector();renderLessonDetail();renderDifficulty();renderClassicStages();updateClassicSummary();
  });
  renderStageSelector();
}

function renderStageSelector(){
  if(!state.language){$("stageSelector").innerHTML="";return;}
  const d=state.difficulty || DIFFICULTIES[0];
  const unlocked=maxUnlocked(state.language.id);
  const list=languageLessons().filter(x=>x.difficulty===d.id);
  $("stageSelector").innerHTML=`<div class="stage-selector-head"><strong>บทเรียน ${d.name}</strong><span>ปลดล็อกถึงด่าน ${unlocked}</span></div><div class="mini-stage-grid">${
    list.map(l=>`<button data-learn-stage="${l.stage}" class="${state.lesson?.stage===l.stage?"selected":""}" ${l.stage>unlocked?"disabled":""}>${l.stage}${l.stage>unlocked?" 🔒":""}</button>`).join("")
  }</div>`;
  document.querySelectorAll("[data-learn-stage]:not([disabled])").forEach(b=>b.onclick=()=>{
    state.lesson=languageLessons().find(x=>x.stage===Number(b.dataset.learnStage));
    state.difficulty=DIFFICULTIES.find(x=>x.id===state.lesson.difficulty);
    renderLessonTabs();renderStageSelector();renderLessonDetail();renderDifficulty();renderClassicStages();updateClassicSummary();
  });
}

function previewSrcdoc(l){
  if(l.language==="html") return l.code;
  return "";
}

function renderLessonDetail(){
  const l=state.lesson || languageLessons()[0];
  if(!l) return;
  state.lesson=l;
  const preview=l.language==="html";
  $("lessonDetail").innerHTML=`<div class="education-grid">
    <div class="edu-info">
      <div class="edu-card"><h3>📘 คำอธิบาย</h3><p>${esc(l.description)}</p></div>
      <div class="edu-card"><h3>🛠️ วิธีการใช้งาน</h3><p>${esc(l.usage)}</p></div>
      <div class="edu-card benefit"><h3>💡 ประโยชน์</h3><p>${esc(l.benefit)}</p></div>
      <div class="edu-card"><h3>🔎 อธิบายผลลัพธ์</h3><p>${esc(l.outputExplain)}</p></div>
    </div>
    <div>
      <h3 class="edu-heading">Stage ${l.stage} · ตัวอย่าง Code</h3>
      <pre class="lesson-code"><code>${esc(l.code)}</code></pre>
      <div class="preview-panel">
        <div class="preview-bar"><i></i><i></i><i></i><span>${preview?"LIVE PREVIEW":"EXPECTED RESULT"}</span></div>
        ${preview?`<iframe id="lessonPreview" sandbox="allow-scripts"></iframe>`:`<pre class="terminal-output">${esc(l.output||l.outputExplain)}</pre>`}
      </div>
    </div>
  </div>`;
  if(preview) setTimeout(()=>{const f=$("lessonPreview");if(f)f.srcdoc=previewSrcdoc(l)},20);
}

document.querySelectorAll("[data-game-mode]").forEach(b=>b.onclick=()=>{
  state.gameMode=b.dataset.gameMode;
  document.querySelectorAll("[data-game-mode]").forEach(x=>x.classList.toggle("selected",x===b));
  $("classicConfig").classList.toggle("hidden",state.gameMode!=="classic");
  $("officialConfig").classList.toggle("hidden",state.gameMode!=="official");
  $("pvpConfig").classList.toggle("hidden",state.gameMode!=="pvp");
  $("rankedConfig")?.classList.add("hidden");
  if(state.gameMode==="official") renderOfficialStages();
});

function renderDifficulty(){
  $("difficultyCards").innerHTML=DIFFICULTIES.map(d=>`
    <button class="difficulty-card ${state.difficulty?.id===d.id?"selected":""}" data-difficulty="${d.id}">
      <span>${d.icon}</span><strong>${d.name}</strong><small>${d.description}</small><b>Score ×${d.multiplier.toFixed(2)}</b>
    </button>`).join("");
  document.querySelectorAll("[data-difficulty]").forEach(b=>b.onclick=()=>{
    state.difficulty=DIFFICULTIES.find(x=>x.id===b.dataset.difficulty);
    const unlocked=maxUnlocked(state.language.id);
    const list=languageLessons().filter(x=>x.difficulty===state.difficulty.id);
    state.lesson=list.find(x=>x.stage<=unlocked) || null;
    renderDifficulty();renderClassicStages();renderLessonTabs();renderStageSelector();if(state.lesson)renderLessonDetail();updateClassicSummary();
  });
}

function renderClassicStages(){
  if(!state.language || !state.difficulty){$("classicStageGrid").innerHTML=`<p class="empty-card">เลือกระดับความยากก่อน</p>`;return;}
  const unlocked=maxUnlocked(state.language.id);
  const list=languageLessons().filter(x=>x.difficulty===state.difficulty.id);
  $("classicStageGrid").innerHTML=list.map(l=>`
    <button class="classic-stage ${state.lesson?.id===l.id?"selected":""}" data-classic-stage="${l.stage}" ${l.stage>unlocked?"disabled":""}>
      <strong>${String(l.stage).padStart(2,"0")}</strong><span>${esc(l.title)}</span><small>${maxTokenForLesson(l)} Token สูงสุด ${l.stage>unlocked?"· 🔒":""}</small>
    </button>`).join("");
  document.querySelectorAll("[data-classic-stage]:not([disabled])").forEach(b=>b.onclick=()=>{
    state.lesson=languageLessons().find(x=>x.stage===Number(b.dataset.classicStage));
    renderClassicStages();renderStageSelector();renderLessonDetail();updateClassicSummary();
  });
}

function updateClassicSummary(){
  const ok=state.language&&state.difficulty&&state.lesson&&state.lesson.stage<=maxUnlocked(state.language.id);
  $("startClassicButton").disabled=!ok;
  $("classicLessonSummary").textContent=ok?`${state.language.name} · ${state.difficulty.name} · ด่าน ${state.lesson.stage} · สูงสุด ${maxTokenForLesson(state.lesson)} Token`:"เลือกภาษาระดับและด่านที่ปลดล็อกแล้ว";
}

$("startClassicButton").onclick=async()=>{
  if(!state.lesson)return;
  prepareClassic();
  showScreen("gameScreen");
  await requestRealFullscreen();
  setTimeout(()=>$("typingInput").focus({preventScroll:true}),150);
};

async function requestRealFullscreen(){
  document.body.classList.add("game-active");
  updateDeviceUX();

  // CSS 100dvh เป็นตัวหลักสำหรับมือถือ โดยเฉพาะ iOS Safari
  // Fullscreen API ใช้เสริมเมื่อ Browser รองรับและอนุญาต
  try{
    const canFullscreen = document.documentElement.requestFullscreen;
    if (canFullscreen && !document.fullscreenElement && !isPhoneLayout()) {
      await document.documentElement.requestFullscreen();
    }
  }catch(error){
    console.warn("Fullscreen API unavailable:", error);
  }
}
async function leaveRealFullscreen(){
  try{if(document.fullscreenElement)await document.exitFullscreen()}catch{}
}
$("fullscreenButton").onclick=requestRealFullscreen;
if($("resumeStudentFullscreen"))$("resumeStudentFullscreen").onclick=async()=>{
  await ensureStudentFullscreenFromGesture();
};

function elapsed(){return state.started?(performance.now()-state.startTime)/1000:0}
function accuracy(){return state.keystrokes?Math.max(0,(state.correctText.length/state.keystrokes)*100):100}
function wpm(){return state.correctText.length?((state.correctText.length/5)/Math.max(elapsed()/60,1/600)):0}
function liveScore(){
  if(!state.started)return 0;
  const base=Number(state.lesson.basePoints||100)*(state.difficulty?.multiplier||1);
  return Math.max(0,Math.round(base*(accuracy()/100)+Math.min(base*.35,wpm()*2)-state.mistakes*4));
}


async function resolveTeacherQuest(id){
  if(!id)return null;
  try{
    const snap=await getDoc(doc(db,"teacher_quests",id));
    if(snap.exists())return {id:snap.id,...snap.data()};
  }catch(error){console.warn("quest read:",error)}
  return DEFAULT_TEACHER_QUESTS.find(q=>q.id===id)||null;
}
function questProgressRefForToday(){
  return doc(db,"quest_progress",state.uid,"days",localDayKey());
}
async function maybeLaunchQuestFromUrl(){
  const id=new URLSearchParams(location.search).get("quest");
  if(!id||state.questLaunchHandled||!state.uid||!state.player)return false;
  state.questLaunchHandled=true;
  if(isMobileOrTabletDevice()){
    await openStudentZoneShell();
    return true;
  }
  const quest=await resolveTeacherQuest(id);
  if(!quest){console.warn("ไม่พบภารกิจ",id);return false}
  const progress=await getDoc(questProgressRefForToday());
  const accepted=progress.exists()?progress.data()?.accepted?.[id]:null;
  if(!accepted||accepted.status!=="accepted"){
    alert("ต้องกดรับภารกิจจากพ่อมดใน 2D Zone ก่อน");
    return false;
  }
  const lesson=LESSONS.find(l=>l.language===quest.languageId&&Number(l.stage)===Number(quest.stage));
  const language=LANGUAGES.find(l=>l.id===quest.languageId);
  if(!lesson||!language){alert("ไม่พบด่านของภารกิจนี้");return false}
  state.activeQuest=quest;
  state.gameMode="classic";
  state.language=language;
  state.lesson=lesson;
  state.difficulty=DIFFICULTIES.find(d=>d.id===(quest.difficulty||lesson.difficulty))||DIFFICULTIES[0];
  prepareClassic();
  $("modeBadge").textContent=`🧙 QUEST · ${quest.title}`;
  $("challengeDescription").textContent=`${quest.description} · ${questObjectiveLabel(quest)} · โบนัส +${clampQuestReward(quest.difficulty,quest.rewardToken)} Token`;
  $("questZoneButton")?.classList.add("hidden");
  showScreen("gameScreen");
  await requestRealFullscreen();
  setTimeout(()=>$("typingInput")?.focus({preventScroll:true}),120);
  return true;
}
async function completeActiveQuestIfEligible(result){
  const quest=state.activeQuest;
  if(!quest)return {rewarded:0,met:false};
  const met=questObjectiveMet(quest,result);
  if(!met)return {rewarded:0,met:false};
  const reward=clampQuestReward(quest.difficulty,quest.rewardToken);
  let rewarded=0;
  const progressRef=questProgressRefForToday(),userRef=doc(db,"users",state.uid);
  try{
    await runTransaction(db,async tx=>{
      const [progressSnap,userSnap]=await Promise.all([tx.get(progressRef),tx.get(userRef)]);
      if(!progressSnap.exists()||!userSnap.exists())return;
      const p=progressSnap.data(),accepted={...(p.accepted||{})},completed={...(p.completed||{})};
      const entry=accepted[quest.id];
      if(!entry||entry.status!=="accepted"||completed[quest.id])return;
      const completedCount=Object.keys(completed).length;
      if(completedCount>=3)return;
      accepted[quest.id]={...entry,status:"completed",completedAt:new Date().toISOString()};
      completed[quest.id]={
        status:"completed",completedAt:new Date().toISOString(),rewardToken:reward,
        wpm:Number(result.wpm||0),accuracy:Number(result.accuracy||0),elapsedSeconds:Number(result.elapsedSeconds||0)
      };
      const u=userSnap.data();
      tx.set(progressRef,{accepted,completed,completedCount:completedCount+1,updatedAt:serverTimestamp()},{merge:true});
      tx.update(userRef,{
        tokenBalance:Number(u.tokenBalance||0)+reward,
        tokenLifetime:Number(u.tokenLifetime||0)+reward,
        updatedAt:serverTimestamp()
      });
      rewarded=reward;
    });
  }catch(error){console.warn("quest completion:",error)}
  if(rewarded)await ensureProfileDefaults();
  return {rewarded,met:true};
}

function prepareClassic(){
  $("resultExplanation")?.classList.add("hidden");
  $("questZoneButton")?.classList.add("hidden");
  state.attemptId=null;state.started=false;state.finished=false;state.mistakes=0;state.keystrokes=0;state.correctText="";state.rankedTimedOut=false;
  clearInterval(state.timer);$("typingInput").value="";
  $("modeBadge").textContent=state.gameMode==="ranked"?`🏆 RANKING · ${state.language.name}`:`⌨️ CLASSIC · ${state.language.name}`;
  $("challengeTitle").textContent=`Stage ${state.lesson.stage} · ${state.lesson.title}`;
  $("challengeDescription").textContent=state.lesson.description;
  $("playerName").textContent=state.player.fullName;
  $("statLevel").textContent=String(state.lesson.stage).padStart(2,"0");
  $("languageLabel").textContent=state.language.name;
  $("difficultyLabel").textContent=state.difficulty.name;
  $("timeRuleLabel").textContent=state.gameMode==="ranked"?`เวลาจำกัด ${rankedTimeLimitForLesson(state.lesson)}s`:`เป้าหมาย ${state.lesson.timeLimit}s`;
  $("fileName").textContent=`${state.language.id}_stage_${String(state.lesson.stage).padStart(2,"0")}`;
  $("typingStatus").textContent=state.gameMode==="ranked"?"พิมพ์ตัวแรกเพื่อเริ่ม Countdown":"พิมพ์ตัวแรกเพื่อเริ่มจับเวลา";
  $("saveState").textContent=state.gameMode==="ranked"?`Ranking Bonus +15 · สูงสุด ${Math.min(85,maxTokenForLesson(state.lesson)+15)} Token`:`รางวัลสูงสุด ${maxTokenForLesson(state.lesson)} Token`;
  $("statTime").textContent="00:00";
  ["statWpm","statMistakes","statScore"].forEach(id=>$(id).textContent="0");
  $("statAccuracy").textContent="100%";
  renderStrictCode();
  updateDeviceUX();
  syncMobileStats();
}

async function startClassic(){
  if(state.started)return;
  state.started=true;state.startTime=performance.now();$("typingStatus").textContent="กำลังเล่น...";
  const r=await addDoc(collection(db,"attempts"),{
    uid:state.uid,studentId:state.player.studentId,fullName:state.player.fullName,
    educationLevel:state.player.educationLevel,classroom:state.player.classroom,department:state.player.department||"",major:state.player.major||"",majorCode:state.player.majorCode||majorCodeFor(state.player.educationLevel,state.player.major),
    language:state.language.name,languageId:state.language.id,modeName:state.gameMode==="official"?"Official":state.gameMode==="ranked"?"Ranking":"Classic",
    difficulty:state.difficulty.name,difficultyId:state.difficulty.id,stage:state.lesson.stage,
    lessonId:state.lesson.id,levelTitle:state.lesson.title,questId:state.activeQuest?.id||null,questTitle:state.activeQuest?.title||null,status:"playing",
    score:0,rewardPoints:0,maxRewardPoints:state.gameMode==="official"?0:state.gameMode==="ranked"?Math.min(85,maxTokenForLesson(state.lesson)+15):maxTokenForLesson(state.lesson),rankedTimeLimit:state.gameMode==="ranked"?rankedTimeLimitForLesson(state.lesson):null,wpm:0,accuracy:0,mistakes:0,elapsedSeconds:0,createdAt:serverTimestamp()
  });
  state.attemptId=r.id;
  state.timer=setInterval(updateClassicStats,100);
}

function renderStrictCode(){
  const code=state.lesson?.code||"";
  let h="";
  for(let i=0;i<code.length;i++){
    let cls=i<state.correctText.length?"correct":(i===state.correctText.length?"current":"pending");
    const ch=code[i];
    const display=ch==="\n"?"\n":ch===" "?" ":esc(ch);
    h+=`<span class="${cls}">${display}</span>`;
  }
  $("typingDisplay").innerHTML=h;
  const pct=code.length?state.correctText.length/code.length*100:0;
  $("progressBar").style.width=`${pct}%`;
  $("progressText").textContent=`${state.correctText.length} / ${code.length}`;
  $("typingDisplay").querySelector(".current")?.scrollIntoView({block:"nearest"});
}

function shakeWrong(expected,pressed){
  const shell=$("gameShell");
  shell.classList.remove("wrong-shake");
  void shell.offsetWidth;
  shell.classList.add("wrong-shake");
  $("typingStage").classList.add("wrong-flash");
  $("typingStatus").textContent=`ผิด: ต้องพิมพ์ ${expected==="\n"?"Enter":expected===" "?"Space":expected}`;
  setTimeout(()=>{$("typingStage").classList.remove("wrong-flash");shell.classList.remove("wrong-shake");$("typingStatus").textContent="พิมพ์ตัวเดิมใหม่ให้ถูก — ไม่ต้อง Backspace";},260);
}

function keyToInput(e){
  if(e.key==="Enter")return "\n";
  if(e.key==="Tab")return "\t";
  if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey)return e.key;
  return null;
}

$("typingStage").onclick=()=> $("typingInput").focus({preventScroll:true});

$("typingInput").addEventListener("keydown",async e=>{
  if(state.finished){e.preventDefault();return;}
  if(["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)){
    e.preventDefault();$("typingStatus").textContent="Strict Mode: ไม่ต้องลบ พิมพ์ตัวที่ค้างให้ถูก";return;
  }
  const raw=keyToInput(e);
  if(raw===null)return;
  e.preventDefault();
  if(!state.started)await startClassic();

  const code=state.lesson.code;
  const pos=state.correctText.length;
  const expected=code[pos];
  state.keystrokes++;

  if(raw==="\t"){
    if(expected===" "){
      let count=0;
      while(code[pos+count]===" "&&count<4)count++;
      state.correctText+=code.slice(pos,pos+count);
      renderStrictCode();updateClassicStats();
      if(state.correctText===code)finishClassic();
    }else{
      state.mistakes++;shakeWrong(expected,"Tab");updateClassicStats();
    }
    return;
  }

  if(raw===expected){
    state.correctText+=raw;
    renderStrictCode();
    $("typingStatus").textContent="ถูก ✓";
    updateClassicStats();
    if(state.correctText===code)finishClassic();
  }else{
    state.mistakes++;
    shakeWrong(expected,raw);
    updateClassicStats();
  }
});

function updateClassicStats(){
  const e=elapsed();
  if(state.gameMode==="ranked"){
    const remain=Math.max(0,state.rankedTimeLimit-e);
    $("statTime").textContent=fmtTime(remain);
    if(state.started&&remain<=0&&!state.finished&&!state.rankedTimedOut){state.rankedTimedOut=true;failRankedStage();}
  }else $("statTime").textContent=fmtTime(e);
  $("statWpm").textContent=Math.round(wpm());
  $("statAccuracy").textContent=`${accuracy().toFixed(0)}%`;
  $("statMistakes").textContent=state.mistakes;
  if(state.gameMode==="official") $("statScore").textContent="—";
  else if(state.gameMode==="ranked"){const live=rankedTokenReward(state.lesson,wpm(),accuracy());$("statScore").textContent=`${live.earned}/${live.maxToken}`;}
  else { const live=calculateStageTokenReward(state.lesson,wpm(),accuracy()); $("statScore").textContent=`${live.earned}/${live.maxToken}`; }
  syncMobileStats();
}
async function failRankedStage(){
  if(state.finished)return;
  state.finished=true;clearInterval(state.timer);
  const e=elapsed(),wp=Math.round(wpm()*100)/100,acc=Math.round(accuracy()*100)/100;
  if(state.attemptId)await updateDoc(doc(db,"attempts",state.attemptId),{
    status:"timeout",modeName:"Ranking",score:0,rewardPoints:0,wpm:wp,accuracy:acc,mistakes:state.mistakes,
    keystrokes:state.keystrokes,typedChars:state.correctText.length,timedOut:true,
    elapsedSeconds:Math.round(e*100)/100,finishedAt:serverTimestamp()
  });
  await updateMyRank();
  $("resultTitle").textContent=`หมดเวลา · Ranking Stage ${state.lesson.stage}`;
  $("resultText").textContent=`ด่านนี้จำกัด ${state.rankedTimeLimit} วินาที · ลองใหม่ได้ คะแนน Rank จะบันทึกผล Timeout รอบนี้`;
  $("resultScore").textContent="+0 Token";
  $("resultWpm").textContent=wp;$("resultAccuracy").textContent=`${acc}%`;$("resultTime").textContent=`${e.toFixed(2)}s`;
  $("nextLevelButton").style.display="none";
  renderResultExplanation(state.lesson);
  await leaveRealFullscreen();showScreen("resultScreen");
}

async function awardCompletion(reward){
  const ref=doc(db,"users",state.uid);
  const lang=state.language.id;
  const stage=state.lesson.stage;
  reward=Math.min(state.gameMode==="ranked"?85:70,Math.max(0,Number(reward||0)));
  await runTransaction(db,async tx=>{
    const snap=await tx.get(ref);
    if(!snap.exists())return;
    const d=snap.data();
    const update={tokenBalance:Number(d.tokenBalance||0)+reward,tokenLifetime:Number(d.tokenLifetime||0)+reward,updatedAt:serverTimestamp()};
    if(state.gameMode==="ranked"){
      const rankedProgress={...(d.rankedProgress||{})};
      const current=Number(rankedProgress?.[lang]?.maxUnlockedStage||1);
      rankedProgress[lang]={...(rankedProgress[lang]||{}),maxUnlockedStage:Math.max(current,Math.min(50,stage+1))};
      update.rankedProgress=rankedProgress;
    }else{
      const currentUnlocked=Number(d.progress?.[lang]?.maxUnlockedStage||1);
      const progress={...(d.progress||{})};
      progress[lang]={...(progress[lang]||{}),maxUnlockedStage:Math.max(currentUnlocked,Math.min(50,stage+1))};
      update.progress=progress;
    }
    tx.update(ref,update);
  });
  await ensureProfileDefaults();
}

function renderResultExplanation(lesson){
  const box=$("resultExplanation");
  if(!box||!lesson)return;
  box.classList.remove("hidden");
  $("resultCodeUsage").textContent=lesson.usage||lesson.description||"ฝึกโครงสร้างและไวยากรณ์ของโค้ด";
  $("resultCodeBenefit").textContent=lesson.benefit||"ช่วยให้เข้าใจวิธีนำโค้ดไปต่อยอดในงานจริง";
  $("resultCodeOutput").textContent=lesson.outputExplain||lesson.output||lesson.description||"ผลลัพธ์ตามคำสั่งที่พิมพ์";
  $("resultCodeSample").textContent=lesson.code||"";
}

async function finishClassic(){
  if(state.finished)return;
  state.finished=true;
  clearInterval(state.timer);

  const e=elapsed();
  const wp=Math.round(((state.correctText.length/5)/Math.max(e/60,1/60))*100)/100;
  const acc=Math.round(accuracy()*100)/100;
  const score=liveScore();

  if(state.gameMode==="official"){
    const item=state.officialSelected;
    const officialScore=calculateOfficialStageScore(item,acc,wp,e);

    if(state.attemptId)await updateDoc(doc(db,"attempts",state.attemptId),{
      status:"completed",
      modeName:"Official",
      officialStage:item.officialStage,
      academicScore:officialScore,
      academicMaxScore:item.maxScore,
      score:0,
      rewardPoints:0,
      wpm:wp,accuracy:acc,mistakes:state.mistakes,
      elapsedSeconds:Math.round(e*100)/100,
      finishedAt:serverTimestamp()
    });

    await saveOfficialStage(item,officialScore,acc,wp,Math.round(e*100)/100);
    await updateMyRank();

    $("resultTitle").textContent=`ผ่านด่านทางการ ${item.officialStage}/30`;
    $("resultText").textContent="ผลคะแนนถูกเก็บสำหรับครู และจะส่งจริงเมื่อทำครบ 30 ด่านแล้วกดส่งงาน";
    $("resultScore").textContent="บันทึกแล้ว";
    $("resultWpm").textContent=wp;
    $("resultAccuracy").textContent=`${acc}%`;
    $("resultTime").textContent=`${e.toFixed(2)}s`;
    $("nextLevelButton").style.display="none";
    renderResultExplanation(state.lesson);

    await leaveRealFullscreen();
    showScreen("resultScreen");
    return;
  }

  const tokenResult=calculateStageTokenReward(state.lesson,wp,acc);
  const rankedReward=state.gameMode==="ranked"?rankedTokenReward(state.lesson,wp,acc):null;
  const earnedToken=state.gameMode==="ranked"?rankedReward.earned:Math.min(70,tokenResult.earned);
  if(state.attemptId)await updateDoc(doc(db,"attempts",state.attemptId),{
    status:"completed",score,rewardPoints:earnedToken,maxRewardPoints:state.gameMode==="ranked"?rankedReward.maxToken:tokenResult.maxToken,wpm:wp,accuracy:acc,
    mistakes:state.mistakes,keystrokes:state.keystrokes,typedChars:state.correctText.length,timedOut:false,
    rankAttemptScore:state.gameMode==="ranked"?Math.round(Math.min(100,(wp/({easy:28,medium:42,hard:58}[state.lesson.difficulty]||42))*100)*.40+acc*.40+rankedMistakeScore(state.mistakes)*.20):null,
    elapsedSeconds:Math.round(e*100)/100,finishedAt:serverTimestamp()
  });

  await awardCompletion(earnedToken);
  const questBonus=await completeActiveQuestIfEligible({
    languageId:state.language.id,stage:state.lesson.stage,wpm:wp,accuracy:acc,elapsedSeconds:e
  });
  await updateMyRank();

  if(state.gameMode==="ranked"){
    $("resultTitle").textContent=`🏆 Ranking Stage ${state.lesson.stage} ผ่าน! +${earnedToken} Token`;
    $("resultText").textContent=`Classic reward ${rankedReward.base} + Ranking Bonus 15 · Rank คิดจากความเร็ว ความถูกต้อง และจำนวนครั้งที่พิมพ์ผิด`;
    $("resultScore").textContent=`+${earnedToken} / ${rankedReward.maxToken} Token`;
  }else if(state.activeQuest&&questBonus.rewarded){
    $("resultTitle").textContent=`ภารกิจสำเร็จ! +${earnedToken+questBonus.rewarded} Token`;
  }else{
    $("resultTitle").textContent=`ผ่าน Stage ${state.lesson.stage} +${earnedToken} Token`;
  }
  if(state.gameMode==="ranked"){
    // ranked result already rendered above
  }else if(state.activeQuest){
    $("resultText").textContent=questBonus.rewarded
      ?`${state.language.name} · ${state.lesson.title} · โบนัสภารกิจ +${questBonus.rewarded} Token`
      :`${state.language.name} · ${state.lesson.title} · ภารกิจยังไม่สำเร็จ: ${questObjectiveLabel(state.activeQuest)}`;
    $("resultScore").textContent=questBonus.rewarded?`+${earnedToken} ด่าน + ${questBonus.rewarded} ภารกิจ`:`+${earnedToken} Token`;
    $("questZoneButton")?.classList.remove("hidden");
  }else{
    $("resultText").textContent=`${state.language.name} · ${state.difficulty.name} · ${state.lesson.title} · สูงสุด ${tokenResult.maxToken} Token`;
    $("resultScore").textContent=`+${earnedToken} / ${tokenResult.maxToken} Token`;
  }
  $("resultWpm").textContent=wp;
  $("resultAccuracy").textContent=`${acc}%`;
  $("resultTime").textContent=`${e.toFixed(2)}s`;
  $("nextLevelButton").style.display=state.activeQuest?"none":(state.lesson.stage<50?"":"none");
  if(state.gameMode==="ranked"&&state.lesson.stage<50)$("nextLevelButton").style.display="";
  renderResultExplanation(state.lesson);

  await leaveRealFullscreen();
  showScreen("resultScreen");
}

$("quitButton").onclick=async()=>{
  if(state.attemptId&&!state.finished)await updateDoc(doc(db,"attempts",state.attemptId),{status:"abandoned",finishedAt:serverTimestamp()});
  clearInterval(state.timer);await leaveRealFullscreen();showScreen("userPortal");
};
$("playAgainButton").onclick=async()=>{prepareClassic();showScreen("gameScreen");await requestRealFullscreen();setTimeout(()=>$("typingInput").focus(),100)};
$("nextLevelButton").onclick=async()=>{
  const next=languageLessons().find(x=>x.stage===state.lesson.stage+1);
  if(!next)return;
  state.lesson=next;state.difficulty=DIFFICULTIES.find(x=>x.id===next.difficulty);
  if(state.gameMode==="ranked"){state.rankedStage=next.stage;state.rankedTimeLimit=rankedTimeLimitForLesson(next);}
  prepareClassic();showScreen("gameScreen");await requestRealFullscreen();setTimeout(()=>$("typingInput").focus({preventScroll:true}),100);
};
$("questZoneButton").onclick=async()=>{
  await ensureStudentFullscreenFromGesture();
  await openStudentZoneShell();
};
$("portalButton").onclick=async()=>{state.activeQuest=null;history.replaceState(null,"",location.pathname);await ensureProfileDefaults();await enterPortal()};

function itemStatsMarkup(item,compact=false){
  const s=itemStats(item);
  const chips=ITEM_STAT_KEYS.filter(k=>s[k]>0).map(k=>`<span><b>+${s[k]}</b> ${ITEM_STAT_LABELS[k]}</span>`).join("");
  return `<div class="${compact?"item-stat-chips compact":"item-stat-chips"}">${chips}</div><div class="item-power-line"><span>GEAR POWER</span><strong>${itemPower(item)}</strong></div>`;
}
function rewardShopCard(item,owned,balance,capacity){
  const own=owned.has(item.id),sell=sellBackValue(item);
  return `<article class="reward-card rarity-${item.rarity} ${own?'owned':''}" data-reward-catalog-id="${esc(item.id)}">
    <div class="reward-rarity">${RARITY_META[item.rarity]?.name||item.rarity}</div>
    <div class="reward-icon reward-real-art"><img src="${itemArtSrc(item.id)}" alt="${esc(item.name)}" loading="lazy"><span>${item.icon}</span></div>
    <h3>${esc(item.name)}</h3><p>${esc(item.description)}</p>
    <div class="reward-slot">SLOT · ${item.slot.toUpperCase()}</div>
    ${itemStatsMarkup(item)}
    <div class="reward-cost">${item.cost.toLocaleString()} Token</div>
    <small class="reward-capacity">กระเป๋า ${capacity} · ขายคืน ${sell.toLocaleString()} Token</small>
    <div class="reward-actions">
      <button class="btn ${own?'ghost':'secondary'}" data-redeem="${item.id}" ${own||balance<item.cost||owned.size>=INVENTORY_LIMIT?'disabled':''}>${own?'มีแล้ว':owned.size>=INVENTORY_LIMIT?'กระเป๋าเต็ม':balance<item.cost?'Token ไม่พอ':'แลกไอเท็ม'}</button>
      ${own?`<button class="btn danger-soft" data-sell-reward="${item.id}" type="button">ขายคืน 30%</button>`:''}
    </div>
  </article>`;
}
function renderRewardShop(){
  if(!$('rewardShop'))return;
  const balance=Number(state.player?.tokenBalance||0);
  const owned=new Set(state.player?.inventory||[]);
  const capacity=`${owned.size}/${INVENTORY_LIMIT}`;
  const sorted=[...REWARD_ITEMS].sort((a,b)=>
    (RARITY_META[a.rarity]?.order||0)-(RARITY_META[b.rarity]?.order||0)||a.cost-b.cost
  );
  const summary=shopCatalogSummary();
  const sections=SHOP_GRADE_ORDER.map(grade=>{
    const group=sorted.filter(item=>item.rarity===grade);
    const meta=RARITY_META[grade];
    return `<section class="reward-grade-section rarity-${grade}">
      <div class="reward-grade-head"><div><span>${meta?.short||grade.toUpperCase()}</span><strong>${meta?.name||grade}</strong></div><b>${group.length}/${SHOP_EXPECTED_COUNTS[grade]}</b></div>
      <div class="reward-grade-grid">${group.map(item=>rewardShopCard(item,owned,balance,capacity)).join("")}</div>
    </section>`;
  }).join("");
  $('rewardShop').innerHTML=`<div class="reward-catalog-complete ${shopCatalogComplete()?'ok':'bad'}">CATALOG ${summary.total}/${SHOP_EXPECTED_COUNTS.total}</div>${sections}`;
  document.querySelectorAll('[data-redeem]:not([disabled])').forEach(b=>b.onclick=()=>redeemReward(b.dataset.redeem));
  document.querySelectorAll('[data-sell-reward]').forEach(b=>b.onclick=()=>sellOwnedItem(b.dataset.sellReward));
}
async function redeemReward(id){
  const item=rewardItemById(id);
  if(!item)return;
  const ref=doc(db,"users",state.uid);
  try{
    await runTransaction(db,async tx=>{
      const snap=await tx.get(ref);
      const d=snap.data();
      const balance=Number(d.tokenBalance||0);
      const inv=Array.isArray(d.inventory)?d.inventory:[];
      if(inv.includes(id))throw new Error("มีไอเทมแล้ว");
      if(inv.length>=INVENTORY_LIMIT)throw new Error(`กระเป๋าเต็ม ${INVENTORY_LIMIT} ไอเท็ม`);
      if(balance<item.cost)throw new Error("แต้มไม่พอ");
      tx.update(ref,{tokenBalance:balance-item.cost,inventory:[...inv,id],updatedAt:serverTimestamp()});
    });
    await ensureProfileDefaults();
    $("userTokens").textContent=Number(state.player.tokenBalance||0).toLocaleString();
  renderUserRank();
    renderRewardShop();
    if(!$("characterProfileModal")?.classList.contains("hidden")) renderCharacterProfile();
  }catch(err){alert(err.message)}
}

async function sellOwnedItem(id){
  const item=rewardItemById(id);if(!item)return;
  if(!confirm(`ขาย ${item.name} คืนร้าน ${sellBackValue(item).toLocaleString()} Token?`))return;
  const ref=doc(db,'users',state.uid);
  try{
    await runTransaction(db,async tx=>{
      const snap=await tx.get(ref);if(!snap.exists())throw new Error('ไม่พบ User');
      const d=snap.data(),inv=Array.isArray(d.inventory)?d.inventory:[];
      if(!inv.includes(id))return;
      const equipped={...DEFAULT_CHARACTER.equipped,...(d.character?.equipped||{})};
      Object.keys(equipped).forEach(slot=>{if(equipped[slot]===id)equipped[slot]=null});
      tx.update(ref,{tokenBalance:Number(d.tokenBalance||0)+sellBackValue(item),inventory:inv.filter(x=>x!==id),character:{...DEFAULT_CHARACTER,...(d.character||{}),equipped},updatedAt:serverTimestamp()});
    });
    await ensureProfileDefaults();$('userTokens').textContent=Number(state.player.tokenBalance||0).toLocaleString();renderRewardShop();
    if(!$('characterProfileModal')?.classList.contains('hidden'))renderCharacterProfile();
  }catch(err){alert(err.message||String(err))}
}

function listenHistory(){
  if(state.historyUnsub)state.historyUnsub();
  state.historyUnsub=onSnapshot(query(collection(db,"attempts"),where("uid","==",state.uid)),snap=>{
    const rows=snap.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.createdAt?.toDate?.()?.getTime?.()||0)-(a.createdAt?.toDate?.()?.getTime?.()||0));
    const done=rows.filter(x=>x.status==="completed");
    $("userTotalAttempts").textContent=rows.length;
    $("userCompleted").textContent=done.length;
    $("userBestScore").textContent=Math.max(0,...done.map(x=>Number(x.score||0))).toLocaleString();
    $("userBestWpm").textContent=Math.max(0,...done.map(x=>Number(x.wpm||0))).toFixed(0);
    $("userHistoryBody").innerHTML=rows.slice(0,10).map(x=>`<tr><td>${fmtDate(x.createdAt)}</td><td>${esc(x.language||"-")}</td><td>${esc(x.modeName||"-")}</td><td>${esc(x.difficulty||"-")}</td><td>${esc(x.status)}</td><td>${Number(x.score||0).toLocaleString()}</td><td>${Number(x.wpm||0).toFixed(1)}</td><td>${Number(x.accuracy||0).toFixed(1)}%</td></tr>`).join("")||`<tr><td colspan="8" class="empty">ยังไม่มีประวัติ</td></tr>`;
  });
}


function timestampMs(v){try{return v?.toMillis?.()??v?.toDate?.()?.getTime?.()??0}catch{return 0}}
function rankBoundaryFromSettings(settings=state.rankSettings,now=Date.now()){
  const last=timestampMs(settings?.lastResetAt),next=timestampMs(settings?.nextResetAt);return Math.max(last,(next&&next<=now)?next:0);
}
function effectiveRankForProfile(p){
  const boundary=rankBoundaryFromSettings();if(!boundary)return p?.rank||{};const updated=Date.parse(p?.rank?.updatedAt||"")||0;
  if(updated>=boundary)return p?.rank||{};
  return {tierId:"bronze",tierName:"Bronze",tierIcon:"🥉",rating:0};
}
function renderRankResetNotice(){
  const box=$("rankResetNotice");if(!box)return;const cfg=state.rankSettings||{},next=timestampMs(cfg.nextResetAt),last=timestampMs(cfg.lastResetAt),now=Date.now();
  const activeBoundary=rankBoundaryFromSettings(cfg,now),localUpdated=Date.parse(state.player?.rank?.updatedAt||"")||0;
  if(!next){
    box.classList.add("hidden");
    if(activeBoundary&&state.uid&&state.player&&localUpdated<activeBoundary){
      const version=cfg.resetVersion||`manual_${activeBoundary}`;
      if(state.rankResetAppliedVersion!==version){state.rankResetAppliedVersion=version;updateMyRank().then(async()=>{await syncPublicProfile();renderUserRank();listenTopRanking()}).catch(error=>console.warn("apply manual rank reset:",error));}
    }
    return;
  }
  box.classList.remove("hidden");
  const d=new Date(next),future=next>now;$("rankResetNoticeTitle").textContent=future?"ประกาศกำหนดรีแรงค์":"เริ่มรอบ Ranking ใหม่แล้ว";
  $("rankResetNoticeText").textContent=`${cfg.notice||"ระบบจะเริ่ม Ranking รอบใหม่"} · ${d.toLocaleString("th-TH")}`;
  const left=Math.max(0,next-now),day=Math.floor(left/86400000),h=Math.floor((left%86400000)/3600000),m=Math.floor((left%3600000)/60000),sec=Math.floor((left%60000)/1000);
  $("rankResetNoticeCountdown").textContent=future?`เหลือ ${day} วัน ${h} ชม. ${m} นาที ${sec} วินาที`:`รีแรงค์มีผลแล้ว · คะแนนก่อนเวลานี้ไม่ถูกนำมาคำนวณรอบใหม่`;
  const version=cfg.resetVersion||`scheduled_${next}`;
  if(!future&&state.uid&&state.player&&state.rankResetAppliedVersion!==version){
    state.rankResetAppliedVersion=version;
    updateMyRank().then(async()=>{await syncPublicProfile();renderUserRank();listenTopRanking()}).catch(error=>console.warn("apply scheduled rank reset:",error));
  }
}
function listenRankResetNotice(){
  if(state.rankSettingsUnsub)state.rankSettingsUnsub();clearInterval(state.rankResetTimer);
  state.rankSettingsUnsub=onSnapshot(doc(db,"system_settings","ranking"),snap=>{state.rankSettings=snap.exists()?snap.data():{};renderRankResetNotice();listenTopRanking();},error=>console.warn("rank reset notice:",error));
  state.rankResetTimer=setInterval(renderRankResetNotice,1000);
}

function renderUserRank(){
  const rank=state.player?.rank || {};
  const tierIcon=rank.tierIcon || "🥉";
  const tierName=rank.tierName || "Bronze";
  const rating=Number(rank.rating||0);
  $("userRank").innerHTML=`${rankShieldHTML(rank,"small")} <span>${tierName} ${rating}</span>`;
  const range=seasonRange(new Date());
  $("rankSeasonLabel").textContent=`${seasonIdFromDate(new Date())} · ${range.end.toLocaleDateString("th-TH")}`;
}

function officialStageSource(item){
  return LESSONS.find(l=>l.language===item.language && Number(l.stage)===Number(item.sourceStage));
}

function officialProgressMap(){
  return state.player?.officialProgress || {};
}

function renderOfficialStages(){
  const progress=officialProgressMap();
  const done=OFFICIAL_STAGES.filter(s=>progress[String(s.officialStage)]?.completed).length;
  $("officialCompletedCount").textContent=done;
  $("officialSubmitStatus").textContent=state.player?.officialSubmitted ? "ส่งแล้ว" : "ยังไม่ส่ง";
  $("submitOfficialButton").disabled = done !== OFFICIAL_STAGES.length || !!state.player?.officialSubmitted;

  $("officialStageGrid").innerHTML=OFFICIAL_STAGES.map(item=>{
    const p=progress[String(item.officialStage)]||{};
    return `<button class="official-stage ${p.completed?"completed":""}" data-official="${item.officialStage}">
      <span>${String(item.officialStage).padStart(2,"0")}</span>
      <strong>${item.languageName} · ${esc(item.title)}</strong>
      <small>${p.completed?"✓ ทำแล้ว":"ยังไม่ทำ"} · ${item.maxScore} คะแนน</small>
    </button>`;
  }).join("");

  document.querySelectorAll("[data-official]").forEach(b=>b.onclick=()=>startOfficialStage(Number(b.dataset.official)));
}

async function startOfficialStage(stageNo){
  const item=OFFICIAL_STAGES.find(x=>x.officialStage===stageNo);
  const lesson=officialStageSource(item);
  if(!item||!lesson)return;
  state.gameMode="official";
  state.officialSelected=item;
  state.language=LANGUAGES.find(x=>x.id===item.language);
  state.lesson=lesson;
  state.difficulty=DIFFICULTIES.find(x=>x.id===lesson.difficulty);
  prepareClassic();
  $("modeBadge").textContent=`📋 ทางการ · ${item.languageName}`;
  $("challengeTitle").textContent=`ทางการ ${stageNo}/30 · ${item.title}`;
  $("statScore").textContent="—";
  $("saveState").textContent=`คะแนนเต็ม ${item.maxScore} · ส่งให้ Admin เมื่อส่งงานครบ`;
  showScreen("gameScreen");
  await requestRealFullscreen();
  setTimeout(()=>$("typingInput").focus({preventScroll:true}),120);
}

function calculateOfficialStageScore(item, acc, wp, elapsedSeconds){
  // คะแนนทางการเน้นความถูกต้องก่อน แล้วค่อยโบนัสความเร็ว
  const accuracyRatio=Math.max(0,Math.min(1,acc/100));
  const timeTarget=Number(state.lesson?.timeLimit||90);
  const speedRatio=Math.max(0,Math.min(1,timeTarget/Math.max(elapsedSeconds,1)));
  const normalized=accuracyRatio*0.85 + speedRatio*0.15;
  return Math.max(0,Math.min(item.maxScore,Math.round(item.maxScore*normalized*100)/100));
}

async function saveOfficialStage(item, score, acc, wp, elapsedSeconds){
  const ref=doc(db,"users",state.uid);
  await runTransaction(db,async tx=>{
    const snap=await tx.get(ref);
    if(!snap.exists())return;
    const d=snap.data();
    const officialProgress={...(d.officialProgress||{})};
    const prev=officialProgress[String(item.officialStage)];
    // เก็บผลดีที่สุดของด่าน
    if(!prev || Number(score)>Number(prev.score||0)){
      officialProgress[String(item.officialStage)]={
        completed:true,
        score,
        maxScore:item.maxScore,
        accuracy:acc,
        wpm:wp,
        elapsedSeconds,
        lessonId:state.lesson.id,
        updatedAt:new Date().toISOString()
      };
    }
    tx.update(ref,{officialProgress,updatedAt:serverTimestamp()});
  });
  await ensureProfileDefaults();
}

$("submitOfficialButton").onclick=async()=>{
  const progress=officialProgressMap();
  const completed=OFFICIAL_STAGES.filter(s=>progress[String(s.officialStage)]?.completed);
  if(completed.length!==30){alert("ต้องทำครบ 30 ด่านก่อนส่งงาน");return;}
  if(state.player?.officialSubmitted){alert("ส่งงานทางการแล้ว");return;}

  const totalScore=OFFICIAL_STAGES.reduce((sum,s)=>sum+Number(progress[String(s.officialStage)]?.score||0),0);
  const avgAccuracy=OFFICIAL_STAGES.reduce((sum,s)=>sum+Number(progress[String(s.officialStage)]?.accuracy||0),0)/30;
  const avgWpm=OFFICIAL_STAGES.reduce((sum,s)=>sum+Number(progress[String(s.officialStage)]?.wpm||0),0)/30;

  const submission={
    uid:state.uid,
    studentId:state.player.studentId,
    fullName:state.player.fullName,
    educationLevel:state.player.educationLevel,
    classroom:state.player.classroom,
    completedStages:30,
    totalScore:Math.round(totalScore*100)/100,
    maxScore:OFFICIAL_TOTAL_SCORE,
    avgAccuracy:Math.round(avgAccuracy*10)/10,
    avgWpm:Math.round(avgWpm*10)/10,
    progress,
    submittedAt:serverTimestamp()
  };

  await setDoc(doc(db,"official_submissions",state.uid),submission);
  await updateDoc(doc(db,"users",state.uid),{officialSubmitted:true,officialSubmittedAt:serverTimestamp()});
  await ensureProfileDefaults();
  renderOfficialStages();
  alert("ส่งงานทางการให้ครูเรียบร้อยแล้ว");
}

async function updateMyRank(){
  const seasonId=seasonIdFromDate(new Date()),range=seasonRange(new Date());
  try{const settingsSnap=await getDoc(doc(db,"system_settings","ranking"));state.rankSettings=settingsSnap.exists()?settingsSnap.data():state.rankSettings||{};}catch{}
  const boundary=rankBoundaryFromSettings(state.rankSettings),startMs=Math.max(range.start.getTime(),boundary||0),attempts=[];
  const snap=await getDocs(query(collection(db,"attempts"),where("uid","==",state.uid)));
  snap.forEach(d=>{const a=d.data(),dt=a.createdAt?.toDate?.();if(dt&&dt.getTime()>=startMs&&dt<=range.end&&a.status==="completed")attempts.push(a)});
  const activeDays=new Set(attempts.map(a=>a.createdAt?.toDate?.()?.toISOString().slice(0,10)).filter(Boolean)).size,metrics=calculateRankMetrics(attempts,activeDays);
  const rank={seasonId,...metrics,updatedAt:new Date().toISOString(),resetBoundaryAt:boundary?new Date(boundary).toISOString():null};
  await updateDoc(doc(db,"users",state.uid),{rank,updatedAt:serverTimestamp()});state.player.rank=rank;renderUserRank();
}



/* ===== V3.8 CHARACTER PROFILE + TOKEN FASHION ===== */
function setupCharacterUi(){
  if($("openCharacterProfileButton")) $("openCharacterProfileButton").onclick=openCharacterProfile;
  if($("closeCharacterProfileButton")) $("closeCharacterProfileButton").onclick=()=>$("characterProfileModal").classList.add("hidden");
  if($("selectMaleCharacter")) $("selectMaleCharacter").onclick=()=>saveCharacterGender("male");
  if($("selectFemaleCharacter")) $("selectFemaleCharacter").onclick=()=>saveCharacterGender("female");
  if($("unequipAllButton")) $("unequipAllButton").onclick=unequipAllItems;
}

async function saveCharacterGender(gender){
  if(!state.uid||!["male","female"].includes(gender))return;

  const character={
    ...DEFAULT_CHARACTER,
    ...(state.player.character||{}),
    gender,
    displayName:state.player.fullName||"",
    equipped:{...DEFAULT_CHARACTER.equipped,...(state.player.character?.equipped||{})}
  };

  await updateDoc(doc(db,"users",state.uid),{character,updatedAt:serverTimestamp()});
  state.player.character=character;
  $("characterSetupModal").classList.add("hidden");
  await syncPublicProfile();

  // Mobile/Tablet: keep the parent Fullscreen session alive and show Zone inside it.
  if(isMobileOrTabletDevice()){
    await openStudentZoneShell();
  }
}

function characterEquippedItem(slot){
  const id=state.player?.character?.equipped?.[slot];
  return rewardItemById(id);
}

function applyCharacterVisual(){
  const el=$("profileCharacter");
  if(!el)return;

  el.className=`game-character ${state.player?.character?.gender||"male"}`;

  ["head","face","top","bottom","back","hand","pet"].forEach(slot=>{
    const node=el.querySelector(`.char-${slot}-item`);
    const item=characterEquippedItem(slot);
    if(node){
      node.dataset.visual=item?.visual||"";
      node.dataset.rarity=item?.rarity||"";
      node.title=item?.name||"";
    }
  });

  const aura=characterEquippedItem("aura");
  const auraNode=el.querySelector(".char-aura");
  if(auraNode){
    auraNode.dataset.visual=aura?.visual||"";
    auraNode.dataset.rarity=aura?.rarity||"";
  }

  const shoes=characterEquippedItem("shoes");
  el.querySelectorAll(".char-shoe").forEach(node=>{
    node.dataset.equipped=shoes?.visual||"";
  });
}

function renderCharacterProfile(){
  if(!state.player)return;

  $("characterProfileStudentId").textContent=state.player.studentId||"-";
  $("characterTokenBalance").textContent=Number(state.player.tokenBalance||0).toLocaleString();
  $("characterRankName").textContent=state.player.rank?.tierName||"Bronze";
  $("characterOwnedCount").textContent=`${(state.player.inventory||[]).length}/${INVENTORY_LIMIT}`;

  applyCharacterVisual();

  const owned=new Set(state.player.inventory||[]);
  const equippedIds=new Set(Object.values(state.player.character?.equipped||{}).filter(Boolean));

  const items=ALL_REWARD_ITEMS
    .filter(item=>owned.has(item.id))
    .sort((a,b)=>(RARITY_META[b.rarity]?.order||0)-(RARITY_META[a.rarity]?.order||0)||b.cost-a.cost);

  $("characterInventoryList").innerHTML=items.length?items.map(item=>`
    <article class="wardrobe-item rarity-${item.rarity} ${equippedIds.has(item.id)?"equipped":""}">
      <div class="wardrobe-icon wardrobe-real-art"><img src="${itemArtSrc(item.id)}" alt="${esc(item.name)}"><span>${item.icon}</span></div>
      <div class="wardrobe-info">
        <span>${RARITY_META[item.rarity]?.name||item.rarity}</span>
        <strong>${esc(item.name)}</strong>
        <small>${esc(item.description)}</small>
        ${itemStatsMarkup(item,true)}
      </div>
      <div class="wardrobe-action">
        <small>${item.slot.toUpperCase()}</small>
        <button data-equip-item="${item.id}" class="btn ${equippedIds.has(item.id)?"ghost":"secondary"}" type="button">${equippedIds.has(item.id)?"ถอด":"สวมใส่"}</button>
        <button data-sell-character-item="${item.id}" class="btn danger-soft" type="button">ขาย ${sellBackValue(item).toLocaleString()}</button>
      </div>
    </article>
  `).join(""):`<div class="empty-card">ยังไม่มีไอเท็มแต่งตัว ไปที่ Token Shop เพื่อแลกไอเท็ม</div>`;

  document.querySelectorAll("[data-equip-item]").forEach(btn=>{btn.onclick=()=>toggleEquipItem(btn.dataset.equipItem);});
  document.querySelectorAll("[data-sell-character-item]").forEach(btn=>{btn.onclick=()=>sellOwnedItem(btn.dataset.sellCharacterItem);});
}

async function openCharacterProfile(){
  await ensureProfileDefaults();
  renderCharacterProfile();
  $("characterProfileModal").classList.remove("hidden");
}

async function toggleEquipItem(itemId){
  const item=rewardItemById(itemId);
  if(!item||!(state.player.inventory||[]).includes(itemId))return;

  const equipped={...DEFAULT_CHARACTER.equipped,...(state.player.character?.equipped||{})};
  equipped[item.slot]=equipped[item.slot]===item.id?null:item.id;

  const character={...DEFAULT_CHARACTER,...state.player.character,equipped};
  await updateDoc(doc(db,"users",state.uid),{character,updatedAt:serverTimestamp()});
  state.player.character=character;

  renderCharacterProfile();
  await syncPublicProfile();
}

async function unequipAllItems(){
  const character={
    ...DEFAULT_CHARACTER,
    ...state.player.character,
    equipped:{...DEFAULT_CHARACTER.equipped}
  };
  await updateDoc(doc(db,"users",state.uid),{character,updatedAt:serverTimestamp()});
  state.player.character=character;
  renderCharacterProfile();
  await syncPublicProfile();
}

/* ===== V3.4 SOCIAL HUB: Community + Presence + Top 10 ===== */
const ONLINE_STALE_MS = 90 * 1000;

function rankTierMeta(rank={}){
  const id=String(rank.tierId||"bronze").toLowerCase();
  const map={bronze:{name:"Bronze",letter:"B"},silver:{name:"Silver",letter:"S"},gold:{name:"Gold",letter:"G"},platinum:{name:"Platinum",letter:"P"},diamond:{name:"Diamond",letter:"D"},master:{name:"Master",letter:"M"}};
  return {id,...(map[id]||map.bronze)};
}
function rankShieldHTML(rank,size="normal"){
  const t=rankTierMeta(rank);
  return `<span class="rank-shield rank-${t.id} ${size}" title="${t.name} · ${Number(rank?.rating||0)} Rating"><span class="rank-shield-letter">${t.letter}</span></span>`;
}
async function syncPublicProfile(){
  if(!state.uid||!state.player)return;
  try{
    await setDoc(doc(db,"public_profiles",state.uid),{
      uid:state.uid,
      fullName:state.player.fullName,
      studentId:state.player.studentId,
      educationLevel:state.player.educationLevel||"",
      classroom:state.player.classroom||"",
      classKey:classKey(state.player.educationLevel,state.player.classroom),
      department:state.player.department||"",
      major:state.player.major||"",
      majorCode:state.player.majorCode||majorCodeFor(state.player.educationLevel,state.player.major),
      academicKey:academicKey(state.player),
      rank:state.player.rank||{tierId:"bronze",tierName:"Bronze",rating:0},
      avatarId:state.player.character?.avatarId||"default_student",
      character:{
        gender:state.player.character?.gender||null,
        equipped:{...DEFAULT_CHARACTER.equipped,...(state.player.character?.equipped||{})},
        showcaseItemIds:(Array.isArray(state.player.inventory)?state.player.inventory:[]).slice(0,3)
      },
      updatedAt:serverTimestamp()
    },{merge:true});
  }catch(error){console.warn("public profile:",error)}
}
async function writePresence(area="portal"){
  if(!state.uid||!state.player)return;
  try{
    await setDoc(doc(db,"presence",state.uid),{
      uid:state.uid,fullName:state.player.fullName,studentId:state.player.studentId,
      rank:state.player.rank||null,area,online:true,lastSeenAt:serverTimestamp()
    },{merge:true});
  }catch(error){console.warn("presence:",error)}
}
async function markOffline(){
  if(!state.uid)return;
  try{await setDoc(doc(db,"presence",state.uid),{online:false,lastSeenAt:serverTimestamp()},{merge:true})}catch{}
}
function presenceOnline(p){
  if(!p?.online)return false;
  const d=p.lastSeenAt?.toDate?.();
  return !d || Date.now()-d.getTime()<=ONLINE_STALE_MS;
}
function renderCommunity(profiles){
  if(!$('communityPlayersList'))return;
  const list=[...profiles].sort((a,b)=>{
    const ao=presenceOnline(state.presenceCache.get(a.uid));
    const bo=presenceOnline(state.presenceCache.get(b.uid));
    if(ao!==bo)return bo-ao;
    return Number(b.rank?.rating||0)-Number(a.rank?.rating||0);
  });
  $('communityPlayersList').innerHTML=list.length?list.map(p=>{
    const pr=state.presenceCache.get(p.uid)||{};
    const online=presenceOnline(pr), me=p.uid===state.uid;
    return `<div class="community-player-row ${online?'online':'offline'} ${me?'me':''}">
      <div class="community-avatar">${esc(String(p.fullName||'?').trim().slice(0,1).toUpperCase())}</div>
      <div class="community-player-info"><strong>${esc(p.fullName||'-')} ${me?'<em>YOU</em>':''}</strong><small>${esc(p.rank?.tierName||'Bronze')} · ${Number(p.rank?.rating||0)} Rating${online?` · ${pr.area==='zone'?'อยู่ใน 2D Zone':'Online'}`:' · Offline'}</small></div>
      ${rankShieldHTML(p.rank,'small')}
      <span class="community-status ${online?'on':'off'}">${online?'ONLINE':'OFFLINE'}</span>
    </div>`;
  }).join(''):`<div class="empty-card">ยังไม่มีผู้เล่นในระบบ</div>`;
}
function listenCommunityPlayers(){
  if(state.communityUnsub)state.communityUnsub();
  let profiles=[];
  state.communityUnsub=onSnapshot(collection(db,"public_profiles"),snap=>{
    profiles=snap.docs.map(d=>({uid:d.id,...d.data()}));renderCommunity(profiles);
  });
  if(state.presenceUnsub)state.presenceUnsub();
  state.presenceUnsub=onSnapshot(collection(db,"presence"),snap=>{
    state.presenceCache=new Map(snap.docs.map(d=>[d.id,{uid:d.id,...d.data()}]));
    const online=[...state.presenceCache.values()].filter(presenceOnline).length;
    if($('onlinePlayerCount'))$('onlinePlayerCount').textContent=online;
    renderCommunity(profiles);
  });
}
function rankingRowsHtml(rows,scopeLabel){
  return rows.length?rows.map((u,i)=>`<div class="ranking-row ${i<3?`podium-${i+1}`:''} ${u.uid===state.uid?'me':''}">
    <div class="ranking-position">${i+1}</div>${rankShieldHTML(u.rank)}
    <div class="ranking-player"><strong>${esc(u.fullName||u.studentId||'-')}</strong><small>${esc(u.studentId||'-')} · ${esc(u.rank?.tierName||'Bronze')} · ${scopeLabel}</small></div>
    <div class="ranking-rating"><strong>${Number(u.rank?.rating||0)}</strong><small>RATING</small></div>
  </div>`).join(''):`<div class="empty-card">ยังไม่มีข้อมูล Ranking</div>`;
}
function setupRankingModeSwitch(){
  const overall=$("rankingModeOverall"),room=$("rankingModeClass"),scope=$("academicRoomRankingScope");
  if(overall)overall.onclick=()=>{
    overall.classList.add("active");room?.classList.remove("active");
    $("topRankingList")?.classList.remove("hidden");$("classRankingList")?.classList.add("hidden");
    scope?.classList.add("hidden");
  };
  if(room)room.onclick=()=>{
    room.classList.add("active");overall?.classList.remove("active");
    $("classRankingList")?.classList.remove("hidden");$("topRankingList")?.classList.add("hidden");
    scope?.classList.remove("hidden");
  };
}
function normalizedAcademicMajor(value){
  return String(value||"").trim();
}
function academicRoomRankingLabel(player){
  const major=normalizedAcademicMajor(player?.major)||"ไม่ระบุสาขาวิชา";
  const code=String(player?.majorCode||"").trim();
  const room=classKey(player?.educationLevel,player?.classroom)||"ไม่ระบุห้อง";
  return `${major}${code?` (${code})`:""} · ห้อง ${room}`;
}
function sameAcademicRoom(profile,player){
  const profileClass=profile.classKey||classKey(profile.educationLevel,profile.classroom);
  const playerClass=player?.classKey||classKey(player?.educationLevel,player?.classroom);
  return profileClass===playerClass &&
    normalizedAcademicMajor(profile.major)===normalizedAcademicMajor(player?.major);
}
function listenTopRanking(){
  if(state.leaderboardUnsub)state.leaderboardUnsub();

  const myClass=state.player?.classKey||classKey(state.player?.educationLevel,state.player?.classroom);
  const myMajor=normalizedAcademicMajor(state.player?.major);
  const myMajorCode=String(state.player?.majorCode||"").trim();
  const academicLabel=academicRoomRankingLabel(state.player);

  if($("classRankingLabel"))$("classRankingLabel").textContent=academicLabel;
  if($("academicRoomRankingTitle"))$("academicRoomRankingTitle").textContent=academicLabel;
  if($("academicRoomRankingMeta")){
    $("academicRoomRankingMeta").textContent=myMajor
      ? `สาขา ${myMajor}${myMajorCode?` (${myMajorCode})`:""} · ชั้น/ห้อง ${myClass||"-"} · ไม่รวมสาขาหรือห้องอื่น`
      : `ยังไม่มีข้อมูลสาขาวิชาใน Profile · กรุณาแก้ข้อมูลส่วนตัวก่อนใช้ Ranking กลุ่ม`;
  }

  if($("leaderboardSeason"))$("leaderboardSeason").textContent=seasonIdFromDate(new Date());
  setupRankingModeSwitch();

  state.leaderboardUnsub=onSnapshot(collection(db,"public_profiles"),snap=>{
    const all=snap.docs
      .map(d=>({uid:d.id,...d.data()}))
      .filter(x=>x.uid!=="Y2uDV9yAQ6Mpu2qwQH9cG4ko6ZQ2")
      .map(x=>({...x,rank:effectiveRankForProfile(x)}));

    const overall=rankProfiles(all,10);
    const academicRoom=myMajor
      ? rankProfiles(all.filter(x=>sameAcademicRoom(x,state.player)),50)
      : [];

    if($("topRankingList"))$("topRankingList").innerHTML=rankingRowsHtml(overall,"แรงค์รวมทั้งหมด");
    if($("classRankingList")){
      $("classRankingList").innerHTML=myMajor
        ? rankingRowsHtml(academicRoom,academicLabel)
        : `<div class="empty-card">ยังไม่มีข้อมูลสาขาวิชาของบัญชีนี้ กรุณาแก้ไขข้อมูลส่วนตัวก่อน</div>`;
    }
  },error=>console.warn("major room ranking:",error));
}
function startSocialHub(){
  clearInterval(state.presenceTimer);
  syncPublicProfile();writePresence('portal');listenCommunityPlayers();listenRankResetNotice();listenTopRanking();listenPvpBattleRanking();
  state.presenceTimer=setInterval(()=>writePresence(document.body.classList.contains('game-active')?'game':'portal'),30000);
}
window.addEventListener('pagehide',()=>markOffline());
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')writePresence(document.body.classList.contains('game-active')?'game':'portal')});


function pvpResultDocId(roomCode,uid){return `${String(roomCode||"").replace(/[^A-Z0-9]/gi,"")}_${uid}`;}
function pvpRankRowHtml(row,index){
  return `<div class="pvp-rank-row ${row.uid===state.uid?"me":""}">
    <b>${index+1}</b>
    <span class="pvp-rank-tier">${esc(row.tierIcon)} ${esc(row.tierName)}</span>
    <div><strong>${esc(row.studentId||row.fullName||"USER")}</strong><small>${row.wins}W ${row.losses}L · ${row.winRate}% · Combo ${row.maxCombo}</small></div>
    <em>${Number(row.rating||1000)}</em>
  </div>`;
}
function renderPvpBattleRanking(results){
  const rows=buildPvpLeaderboard(results);
  const mine=rows.find(x=>x.uid===state.uid)||calculatePvpProfile([],state.uid);
  if($("pvpRankTier"))$("pvpRankTier").textContent=`${mine.tierIcon} ${mine.tierName}`;
  if($("pvpRankRating"))$("pvpRankRating").textContent=Number(mine.rating||1000);
  if($("pvpRankWL"))$("pvpRankWL").textContent=`${mine.wins||0} / ${mine.losses||0}`;
  if($("pvpRankWinRate"))$("pvpRankWinRate").textContent=`${mine.winRate||0}%`;
  if($("pvpRankStreak"))$("pvpRankStreak").textContent=mine.bestStreak||0;
  if($("pvpLeaderboardList")){
    $("pvpLeaderboardList").innerHTML=rows.length
      ?rows.slice(0,10).map(pvpRankRowHtml).join("")
      :`<div class="empty-card">ยังไม่มีผล PVP Ranked</div>`;
  }
  return {rows,mine};
}
function listenPvpBattleRanking(){
  if(state.pvpRankUnsub)state.pvpRankUnsub();
  const q=query(collection(db,"pvp_results"),orderBy("finishedAt","desc"),limit(300));
  state.pvpRankUnsub=onSnapshot(q,snap=>{
    renderPvpBattleRanking(snap.docs.map(d=>({id:d.id,...d.data()})));
  },error=>{
    console.warn("pvp ranking:",error);
    if($("pvpLeaderboardList"))$("pvpLeaderboardList").innerHTML=`<div class="empty-card">โหลด PVP Ranking ไม่สำเร็จ</div>`;
  });
}
function pvpRankForUid(uid,results=[]){
  const row=buildPvpLeaderboard(results).find(x=>x.uid===uid);
  return row||calculatePvpProfile([],uid);
}
function pvpCharacterSnapshot(character){
  const eq=character?.equipped||{},gear=equipmentStats(character);
  return {gender:character?.gender==="female"?"female":"male",equipped:{
    head:eq.head||null,face:eq.face||null,top:eq.top||null,bottom:eq.bottom||null,
    shoes:eq.shoes||null,back:eq.back||null,hand:eq.hand||null,aura:eq.aura||null,pet:eq.pet||null
  },stats:gear,gearPower:Number(gear.power||0)};
}
function pvpPlayerGear(player){return player?.character?.stats||{hp:0,atk:0,def:0,acc:0,spd:0,crit:0,luck:0,power:0};}
function pvpTeamGear(players,team){
  const rows=Object.values(players||{}).filter(p=>p.team===team);
  const t={hp:0,atk:0,def:0,acc:0,spd:0,crit:0,luck:0,power:0};if(!rows.length)return t;
  rows.forEach(p=>{const s=pvpPlayerGear(p);Object.keys(t).forEach(k=>t[k]+=Number(s[k]||0))});
  Object.keys(t).forEach(k=>t[k]/=rows.length);return t;
}
function pvpTeamMaxHp(players,team){return Math.round(Math.min(180,100+Number(pvpTeamGear(players,team).hp||0)/10));}
function pvpFighterHtml(player,side){
  if(!player)return `<div class="pvp-empty-fighter">WAITING</div>`;
  const ch=pvpCharacterSnapshot(player.character||{});
  const base=ch.gender==="female"?PVP_CHARACTER_ART.femaleIdle:PVP_CHARACTER_ART.maleIdle;
  const eq=ch.equipped;
  const layer=(slot,cls)=>eq[slot]?`<img class="pvp-equip ${cls}" src="${itemArtSrc(eq[slot])}" alt="">`:"";
  return `<div class="pvp-avatar-stack">
    ${layer("aura","eq-aura")}${layer("back","eq-back")}
    <img class="pvp-base-avatar" src="${base}" alt="">
    ${layer("top","eq-top")}${layer("shoes","eq-shoes")}${layer("head","eq-head")}
    ${layer("face","eq-face")}${layer("hand","eq-hand")}${layer("pet","eq-pet")}
  </div>`;
}
function activeBattlePlayer(room,team){return room?.players?.[activeUidForTeam(room,team)]||teamMembers(room,team)[0]||null;}
function resetLocalPvpBattle(){
  state.pvpBattle.combo=0;
  state.pvpBattle.maxCombo=0;
  state.pvpBattle.damage=0;
  state.pvpBattle.correctSinceAttack=0;
  state.pvpBattle.lastEventSeq=0;
  state.pvpBattle.lastLineCount=0;
  state.pvpBattle.attackQueue=Promise.resolve();
  if($("pvpComboValue"))$("pvpComboValue").textContent="0";
  if($("pvpDamageValue"))$("pvpDamageValue").textContent="0";
}
function pvpBattleHp(room,team){const max=Number(room?.battle?.maxHpByTeam?.[team]||room?.battle?.maxHp||100);return Math.max(0,Math.min(max,Number(room?.battle?.hp?.[team]??max)));}
function pvpBattleMaxHp(room,team){return Number(room?.battle?.maxHpByTeam?.[team]||room?.battle?.maxHp||100);}
function renderPvpFighterSlot(elId,nameId,rankId,player,side){
  const el=$(elId);if(!el)return;
  const key=`${player?.uid||"none"}:${JSON.stringify(player?.character?.equipped||{})}`;
  if(el.dataset.fighterKey!==key){
    el.dataset.fighterKey=key;
    el.innerHTML=pvpFighterHtml(player,side);
  }
  $(nameId).textContent=player?.studentId||player?.name||`TEAM ${side}`;
  $(rankId).textContent=`⚔️ ${Number(player?.battleDamage||0)} DMG · Gear ${Number(player?.character?.gearPower||0)} · Combo ${Number(player?.maxCombo||0)}`;
}
function animatePvpBattleEvent(event){
  if(!event||Number(event.seq||0)<=Number(state.pvpBattle.lastEventSeq||0))return;
  state.pvpBattle.lastEventSeq=Number(event.seq||0);
  const attacker=event.attackerTeam==="A"?$("pvpFighterA"):$("pvpFighterB");
  const target=event.targetTeam==="A"?$("pvpFighterA"):$("pvpFighterB");
  const cls=event.type==="critical"?"attack-critical":event.type==="skill"?"attack-skill":"attack-basic";
  attacker?.classList.remove("attack-basic","attack-skill","attack-critical");
  target?.classList.remove("take-hit");
  void attacker?.offsetWidth;
  attacker?.classList.add(cls);target?.classList.add("take-hit");
  if($("pvpBattleFx"))$("pvpBattleFx").textContent=event.type==="critical"?"CRITICAL!":event.type==="skill"?"CODE SKILL!":"ATTACK!";
  if($("pvpBattleFeed"))$("pvpBattleFeed").textContent=`TEAM ${event.attackerTeam} โจมตี TEAM ${event.targetTeam} -${event.damage} HP · Combo ${event.combo||0}`;
  setTimeout(()=>{
    attacker?.classList.remove(cls);target?.classList.remove("take-hit");
  },430);
}
function renderPvpBattleArena(room){
  if(!$("pvpBattleArena")||!room)return;
  const a=activeBattlePlayer(room,"A"),b=activeBattlePlayer(room,"B");
  renderPvpFighterSlot("pvpFighterA","pvpFighterAName","pvpFighterARank",a,"A");
  renderPvpFighterSlot("pvpFighterB","pvpFighterBName","pvpFighterBRank",b,"B");
  const maxA=pvpBattleMaxHp(room,"A"),maxB=pvpBattleMaxHp(room,"B"),ha=pvpBattleHp(room,"A"),hb=pvpBattleHp(room,"B");
  $("pvpHpA").style.width=`${ha/maxA*100}%`;$("pvpHpB").style.width=`${hb/maxB*100}%`;
  $("pvpHpAText").textContent=`${Math.round(ha)}/${Math.round(maxA)}`;$("pvpHpBText").textContent=`${Math.round(hb)}/${Math.round(maxB)}`;
  if($("pvpComboValue"))$("pvpComboValue").textContent=state.pvpBattle.combo||0;
  if($("pvpDamageValue"))$("pvpDamageValue").textContent=state.pvpBattle.damage||0;
  animatePvpBattleEvent(room?.battle?.lastEvent);
}
function pvpAttackDamage(type,combo){
  if(type==="critical")return 15+Math.min(5,Math.floor(combo/10));
  if(type==="skill")return 7+Math.min(4,Math.floor(combo/15));
  return 3+Math.min(3,Math.floor(combo/20));
}
function queuePvpAttack(type){
  if(!state.roomCode||!state.roomData||state.roomData.status!=="playing"||!isMyTurn())return;
  const damage=pvpAttackDamage(type,state.pvpBattle.combo);
  state.pvpBattle.attackQueue=(state.pvpBattle.attackQueue||Promise.resolve())
    .then(()=>sendPvpAttack(type,damage))
    .catch(e=>console.warn("pvp attack queue:",e));
}
async function sendPvpAttack(type,baseDamage){
  const roomCode=state.roomCode,shot=state.pvpCurrentShot,ref=doc(db,"pvp_rooms",roomCode);
  await runTransaction(db,async tx=>{
    const snap=await tx.get(ref);if(!snap.exists())return;
    const r=snap.data();if(r.status!=="playing"||Number(r.shotIndex||0)!==shot)return;
    const me=r.players?.[state.uid];if(!me)return;
    const attackerTeam=me.team,targetTeam=attackerTeam==="A"?"B":"A";
    const battle=r.battle||{maxHp:100,hp:{A:100,B:100},eventSeq:0};
    const maxA=Number(battle.maxHpByTeam?.A||100),maxB=Number(battle.maxHpByTeam?.B||100);
    const hp={A:Number(battle.hp?.A??maxA),B:Number(battle.hp?.B??maxB)};
    const atkStats=pvpPlayerGear(players[state.uid]),defStats=pvpTeamGear(players,targetTeam);
    let raw=Number(baseDamage||0)*(1+Math.min(.35,Number(atkStats.atk||0)/250))*(1+Math.min(.10,Number(atkStats.acc||0)/500));
    if(type==="critical")raw*=1+Math.min(.25,Number(atkStats.crit||0)/250);
    const mitigation=Math.min(.30,Number(defStats.def||0)/500);
    const finalDamage=Math.max(1,Math.round(raw*(1-mitigation)));
    const damage=Math.min(finalDamage,Math.max(0,hp[targetTeam]));
    if(damage<=0)return;
    hp[targetTeam]=Math.max(0,hp[targetTeam]-damage);
    const seq=Number(battle.eventSeq||0)+1;
    const players={...(r.players||{})};
    players[state.uid]={
      ...(players[state.uid]||{}),
      battleDamage:Number(players[state.uid]?.battleDamage||0)+damage,
      maxCombo:Math.max(Number(players[state.uid]?.maxCombo||0),Number(state.pvpBattle.maxCombo||0)),
      combo:Number(state.pvpBattle.combo||0),
      wpm:Math.round(pvpWpm()*100)/100,
      accuracy:Math.round(pvpAccuracy()*100)/100,
      mistakes:state.pvpMistakes
    };
    const lastEvent={seq,attackerUid:state.uid,attackerTeam,targetTeam,damage,type,combo:Number(state.pvpBattle.combo||0),at:new Date().toISOString()};
    const nextBattle={...battle,maxHp:100,hp,eventSeq:seq,lastEvent};

    if(hp[targetTeam]>0){
      tx.update(ref,{battle:nextBattle,players,lastActivityAt:serverTimestamp()});
      return;
    }

    const key=String(shot),results={...(r.shotResults||{})};
    if(results[key])return;
    const scores={A:Number(r.scores?.A||0),B:Number(r.scores?.B||0)};
    scores[attackerTeam]+=1;
    results[key]={winnerUid:state.uid,winnerTeam:attackerTeam,reason:"KO",finishedAt:new Date().toISOString()};
    const resetPlayers={};
    for(const [id,p] of Object.entries(players))resetPlayers[id]={...p,progress:0,shotFinished:false,relayPartFinished:false,combo:0};
    if(shot+1>=Number(r.shotCount||1)){
      tx.update(ref,{scores,shotResults:results,players:resetPlayers,battle:nextBattle,winnerTeam:scores.A>scores.B?"A":"B",status:"finished",finishedAt:serverTimestamp(),lastActivityAt:serverTimestamp()});
    }else{
      tx.update(ref,{scores,shotResults:results,players:resetPlayers,shotIndex:shot+1,relayLegs:{A:0,B:0},
        battle:{maxHpByTeam:battle.maxHpByTeam||{A:100,B:100},hp:{A:Number(battle.maxHpByTeam?.A||100),B:Number(battle.maxHpByTeam?.B||100)},eventSeq:seq,lastEvent:{...lastEvent,ko:true}},shotStartedAt:serverTimestamp(),lastActivityAt:serverTimestamp()});
    }
  });
}
function onPvpCorrectCharacter(raw){
  state.pvpBattle.combo++;
  state.pvpBattle.maxCombo=Math.max(state.pvpBattle.maxCombo,state.pvpBattle.combo);
  state.pvpBattle.correctSinceAttack++;
  if(raw==="\n"){
    state.pvpBattle.correctSinceAttack=0;
    queuePvpAttack("skill");
  }else if(state.pvpBattle.correctSinceAttack>=5){
    state.pvpBattle.correctSinceAttack=0;
    queuePvpAttack("basic");
  }
}
function onPvpWrongCharacter(){
  state.pvpBattle.combo=0;
  state.pvpBattle.correctSinceAttack=0;
  if($("pvpComboValue"))$("pvpComboValue").textContent="0";
}
async function savePvpRankedResult(room,result){
  if(!room||!state.uid)return;
  const id=pvpResultDocId(state.roomCode,state.uid),ref=doc(db,"pvp_results",id);
  const existsSnap=await getDoc(ref);if(existsSnap.exists())return;
  const me=room.players?.[state.uid]||{},a=aggregatePvpStats();
  await setDoc(ref,{
    uid:state.uid,studentId:state.player.studentId,fullName:state.player.fullName,
    educationLevel:state.player.educationLevel||"",classroom:state.player.classroom||"",
    department:state.player.department||"",major:state.player.major||"",majorCode:state.player.majorCode||"",
    roomCode:state.roomCode,team:me.team||myPvpTeam(room),teamMode:room.teamMode||"1v1",shotCount:Number(room.shotCount||1),
    result,damage:Number(me.battleDamage||state.pvpBattle.damage||0),maxCombo:Number(me.maxCombo||state.pvpBattle.maxCombo||0),
    wpm:Math.round(a.wpm*100)/100,accuracy:Math.round(a.accuracy*100)/100,mistakes:a.mistakes,
    wager:Number(room.wager||0),winnerTeam:room.winnerTeam||null,finishedAt:serverTimestamp(),finishedAtIso:new Date().toISOString()
  });
}


/* ===== V4.12.0 PVP RANKED BATTLE · CODE ATTACK · CHARACTER COMBAT ===== */
const PVP_ROOM_STALE_MS=20*60*1000;
const PVP_CREATE_FEE=6;
const PVP_COUNTDOWN_MS=3000;
function pvpSettings(){
  const teamMode=$("pvpTeamMode")?.value||"1v1";
  const shotCount=Number($("pvpShotCount")?.value||3);
  return {teamMode,shotCount,wager:Number($("pvpWager")?.value||0),maxPlayers:teamMode==="2v2"?4:2};
}
function renderPvpConfig(){
  if(!state.language){setMatchmakingStatus("error","ยังไม่ได้เลือกภาษา","กรุณาเลือก HTML หรือ Python ก่อนเข้า PVP");return false;}
  if(!state.difficulty)state.difficulty=DIFFICULTIES[0];
  if(!state.lesson)state.lesson=languageLessons().find(x=>x.stage<=maxUnlocked(state.language.id))||languageLessons()[0];
  startPvpRoomBrowser();
  return !!state.lesson;
}
function setMatchmakingStatus(type,title,detail=""){
  const box=$("matchmakingStatus");if(!box)return;box.dataset.state=type||"idle";
  $("matchmakingStatusText").textContent=title;$("matchmakingStatusDetail").textContent=detail;
}
function setMatchButtonsBusy(busy){
  ["createRoomButton","refreshRoomsButton","joinRoomCodeButton"].forEach(id=>{if($(id))$(id).disabled=busy});
}
function systemRoomCode(length=6){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",bytes=new Uint32Array(length);
  if(window.crypto?.getRandomValues){window.crypto.getRandomValues(bytes);return Array.from(bytes,n=>chars[n%chars.length]).join("");}
  return Array.from({length},()=>chars[Math.floor(Math.random()*chars.length)]).join("");
}
async function createUniqueRoomCode(){for(let i=0;i<20;i++){const code=systemRoomCode();if(!(await getDoc(doc(db,"pvp_rooms",code))).exists())return code;}throw new Error("สร้าง Room Code ไม่สำเร็จ");}
function roomPlayers(room){return Object.values(room?.players||{}).sort((a,b)=>Number(a.joinedOrder||0)-Number(b.joinedOrder||0));}
function playerCount(room){return roomPlayers(room).length;}
function roomFull(room){return playerCount(room)>=Number(room?.maxPlayers||2);}
function roomFresh(room){const d=room?.createdAt?.toDate?.();return !d||Date.now()-d.getTime()<PVP_ROOM_STALE_MS;}
function isJoinableRoom(room){return !!room&&room.status==="waiting"&&roomFresh(room)&&!room.players?.[state.uid]&&playerCount(room)<Number(room.maxPlayers||2)&&(!state.language?.id||room.languageId===state.language.id);}
function teamMembers(room,team){return roomPlayers(room).filter(p=>p.team===team);}
function activeUidForTeam(room,team){const m=teamMembers(room,team);if(!m.length)return null;if(room?.teamMode!=="2v2")return m[0]?.uid||null;const leg=Math.max(0,Math.min(1,Number(room?.relayLegs?.[team]||0)));return m[leg]?.uid||m[0]?.uid||null;}
function activePlayerForTeam(room,team){return room?.players?.[activeUidForTeam(room,team)]||null;}
function myPvpTeam(room=state.roomData){return room?.players?.[state.uid]?.team||null;}
function isMyTurn(room=state.roomData){if(!room)return false;if(room.teamMode!=="2v2")return !!room.players?.[state.uid];return activeUidForTeam(room,myPvpTeam(room))===state.uid;}
function splitRelayCode(code){const src=String(code||"");if(src.length<2)return [src,""];let mid=Math.floor(src.length/2),best=-1;for(let d=0;d<Math.min(80,src.length);d++){for(const pos of [mid+d,mid-d]){if(pos>0&&pos<src.length&&src[pos]==="\n"){best=pos+1;break}}if(best>0)break;}if(best<0){for(let d=0;d<Math.min(50,src.length);d++){for(const pos of [mid+d,mid-d]){if(pos>0&&pos<src.length&&/\s/.test(src[pos])){best=pos+1;break}}if(best>0)break;}}if(best<0)best=mid;return [src.slice(0,best),src.slice(best)];}
function pvpCodeForMyTurn(room,lesson){if(room?.teamMode!=="2v2")return lesson?.code||"";const team=myPvpTeam(room),leg=Math.max(0,Math.min(1,Number(room?.relayLegs?.[team]||0)));return splitRelayCode(lesson?.code||"")[leg]||"";}
function teamProgress(room,team){const active=activePlayerForTeam(room,team)||{},seg=Math.max(0,Math.min(100,Number(active.progress||0)));if(room?.teamMode!=="2v2")return seg;const leg=Math.max(0,Math.min(1,Number(room?.relayLegs?.[team]||0)));return Math.min(100,leg*50+seg*.5);}

function teamAssignment(players,mode){const n=Object.keys(players||{}).length;if(mode==="1v1")return {team:n===0?"A":"B",teamSlot:0};const seq=[{team:"A",teamSlot:0},{team:"B",teamSlot:0},{team:"A",teamSlot:1},{team:"B",teamSlot:1}];return seq[Math.min(n,3)];}
function choosePvpLessons(count){
  let pool=languageLessons().filter(x=>x.difficulty===(state.difficulty?.id||"easy")&&x.stage<=maxUnlocked(state.language.id));
  if(pool.length<count)pool=languageLessons().filter(x=>x.stage<=maxUnlocked(state.language.id));
  if(!pool.length)pool=languageLessons();
  const shuffled=[...pool].sort(()=>Math.random()-.5),ids=[];for(let i=0;i<count;i++)ids.push(shuffled[i%shuffled.length].id);return ids;
}
function pvpRoomRuleText(room){return `⚔️ RANKED BATTLE · ${room.teamMode.toUpperCase()} · ${room.shotCount} SHOT · เดิมพัน ${Number(room.wager||0)} TOKEN · ค่าสร้าง ${Number(room.creationFee??PVP_CREATE_FEE)}T · ${playerCount(room)}/${room.maxPlayers}`;}
function renderAvailableRooms(rooms){
  const box=$("availablePvpRooms");if(!box)return;const list=rooms.filter(isJoinableRoom).sort((a,b)=>Number(b.createdAt?.seconds||0)-Number(a.createdAt?.seconds||0));
  $("availableRoomCount").textContent=`${list.length} ห้อง`;
  box.innerHTML=list.length?list.map(r=>`<article class="available-room-card"><div><span>ROOM</span><strong>${r.code}</strong></div><div><b>${r.teamMode.toUpperCase()}</b><small>${r.shotCount} Shot · ${Number(r.wager||0)} Token · ${playerCount(r)}/${r.maxPlayers}</small></div><button class="btn secondary" data-join-pvp-room="${r.code}" type="button">เข้าห้อง</button></article>`).join(""):`<div class="empty-card">ยังไม่มีห้อง ${esc(state.language?.name||"")} ที่กำลังรอ — สร้างห้องใหม่ได้ทันที</div>`;
  document.querySelectorAll("[data-join-pvp-room]").forEach(b=>b.onclick=()=>joinRoomByCode(b.dataset.joinPvpRoom));
}
function startPvpRoomBrowser(){
  if(state.pvpRoomListUnsub)state.pvpRoomListUnsub();
  state.pvpRoomListUnsub=onSnapshot(query(collection(db,"pvp_rooms"),where("status","==","waiting")),snap=>renderAvailableRooms(snap.docs.map(d=>({code:d.id,...d.data()}))),err=>{console.warn("room browser:",err);if($("availablePvpRooms"))$("availablePvpRooms").innerHTML='<div class="empty-card">โหลดรายการห้องไม่สำเร็จ</div>'});
}
async function refreshRoomBrowser(){startPvpRoomBrowser();setMatchmakingStatus("idle","รีเฟรชรายการห้องแล้ว","เลือกห้องจากรายการหรือกรอก Room Code");}
$("refreshRoomsButton").onclick=refreshRoomBrowser;
$("pvpTeamMode").onchange=()=>setMatchmakingStatus("idle","ปรับรูปแบบทีมแล้ว",$("pvpTeamMode").value==="2v2"?"2v2 Relay: สมาชิกทีมสลับกันพิมพ์คนละครึ่งของ Code ในทุก Shot":"1v1: แข่ง Code เต็มชุด");

async function leaveCurrentLobby(){
  if(state.roomUnsub){state.roomUnsub();state.roomUnsub=null;}
  const code=state.roomCode;if(code){const roomRef=doc(db,"pvp_rooms",code),userRef=doc(db,"users",state.uid);
    try{await runTransaction(db,async tx=>{const rs=await tx.get(roomRef);if(!rs.exists())return;const room=rs.data();if(room.status!=="waiting"||!room.players?.[state.uid])return;const players={...(room.players||{})},mine=players[state.uid],wager=Number(room.wager||0);if(mine.stakeLocked&&wager>0){const us=await tx.get(userRef);if(us.exists())tx.update(userRef,{tokenBalance:Number(us.data().tokenBalance||0)+wager,updatedAt:serverTimestamp()});}delete players[state.uid];const left=Object.keys(players);if(!left.length){tx.delete(roomRef);return;}let hostUid=room.hostUid;if(hostUid===state.uid)hostUid=left[0];tx.update(roomRef,{players,hostUid,lastActivityAt:serverTimestamp()});});}catch(e){console.warn("leave lobby:",e)} }
  state.roomCode=null;state.roomData=null;state.pvpActiveRoom=null;state.pvpCurrentShot=-1;state.pvpAttemptId=null;state.pvpResultSaved=false;state.pvpTurnSignature=null;state.pvpRecordedSignature=null;state.pvpTargetCode="";state.pvpAggregate={typedChars:0,keys:0,mistakes:0,seconds:0};
  $("pvpLobby")?.classList.add("hidden");$("startPvpButton")?.classList.add("hidden");$("leaveLobbyButton")?.classList.add("hidden");setMatchButtonsBusy(false);setMatchmakingStatus("idle","พร้อมใช้งาน","สร้างห้อง เลือกห้อง หรือกรอก Room Code");await ensureProfileDefaults();if($("userTokens"))$("userTokens").textContent=Number(state.player?.tokenBalance||0).toLocaleString();
}

async function createRoom(){
  if(!renderPvpConfig())return;const cfg=pvpSettings(),required=PVP_CREATE_FEE+cfg.wager;
  if(Number(state.player?.tokenBalance||0)<required){setMatchmakingStatus("error","Token ไม่พอ",`สร้างห้องใช้ ${PVP_CREATE_FEE} Token และควรเหลือเดิมพัน ${cfg.wager} Token · ต้องมีอย่างน้อย ${required}`);return;}
  setMatchButtonsBusy(true);setMatchmakingStatus("searching","กำลังสร้างห้อง...",`หักค่าสร้าง ${PVP_CREATE_FEE} Token และสุ่ม Room Code`);
  try{
    await leaveCurrentLobby();const code=await createUniqueRoomCode(),lessonIds=choosePvpLessons(cfg.shotCount),assign=teamAssignment({},cfg.teamMode),roomRef=doc(db,"pvp_rooms",code),userRef=doc(db,"users",state.uid);state.roomCode=code;
    await runTransaction(db,async tx=>{
      const us=await tx.get(userRef),rs=await tx.get(roomRef);if(!us.exists())throw new Error("ไม่พบ User");if(rs.exists())throw new Error("Room Code ถูกใช้แล้ว กรุณาลองใหม่");
      const bal=Number(us.data().tokenBalance||0);if(bal<PVP_CREATE_FEE+cfg.wager)throw new Error(`Token ไม่พอ ต้องมี ${PVP_CREATE_FEE+cfg.wager}`);
      tx.update(userRef,{tokenBalance:bal-PVP_CREATE_FEE,updatedAt:serverTimestamp()});
      tx.set(roomRef,{code,hostUid:state.uid,languageId:state.language.id,difficultyId:state.difficulty?.id||state.lesson.difficulty,teamMode:cfg.teamMode,shotCount:cfg.shotCount,maxPlayers:cfg.maxPlayers,wager:cfg.wager,creationFee:PVP_CREATE_FEE,creationFeePaid:true,lessonIds,shotIndex:0,relayLegs:{A:0,B:0},scores:{A:0,B:0},shotResults:{},battle:{maxHp:100,hp:{A:100,B:100},eventSeq:0,lastEvent:null},rankedBattle:true,status:"waiting",createdAt:serverTimestamp(),lastActivityAt:serverTimestamp(),players:{[state.uid]:{uid:state.uid,name:state.player.fullName,studentId:state.player.studentId,educationLevel:state.player.educationLevel,classroom:state.player.classroom,department:state.player.department||"",major:state.player.major||"",majorCode:state.player.majorCode||majorCodeFor(state.player.educationLevel,state.player.major),character:pvpCharacterSnapshot(state.player.character),battleDamage:0,maxCombo:0,combo:0,...assign,joinedOrder:0,stakeLocked:cfg.wager===0,progress:0,shotFinished:false,joinedAt:new Date().toISOString()}}});
    });
    await ensureProfileDefaults();if($("userTokens"))$("userTokens").textContent=Number(state.player?.tokenBalance||0).toLocaleString();
    setMatchmakingStatus("waiting",`สร้างห้อง ${code} แล้ว · จ่าย ${PVP_CREATE_FEE} Token`,`ค่าสร้างไม่คืน · ส่ง Code ให้เพื่อน หรือรอผู้เล่นเลือกห้อง`);listenRoom(code);
  }catch(e){console.error(e);state.roomCode=null;setMatchButtonsBusy(false);setMatchmakingStatus("error","สร้างห้องไม่สำเร็จ",e.message||"");}
}
$("createRoomButton").onclick=createRoom;

async function joinRoomByCode(rawCode){
  if(!renderPvpConfig())return;const code=String(rawCode||"").trim().toUpperCase();if(code.length!==6){setMatchmakingStatus("error","Room Code ไม่ถูกต้อง","Code ต้องมี 6 ตัวอักษร");return;}
  setMatchButtonsBusy(true);setMatchmakingStatus("searching",`กำลังเข้าห้อง ${code}...`,`ตรวจสอบที่ว่างและกติกาห้อง`);
  try{await leaveCurrentLobby();const ref=doc(db,"pvp_rooms",code);await runTransaction(db,async tx=>{const snap=await tx.get(ref);if(!snap.exists())throw new Error("ไม่พบห้องนี้");const room=snap.data();if(!isJoinableRoom(room))throw new Error("ห้องเต็ม เริ่มแล้ว หมดอายุ หรือภาษาไม่ตรง");if(Number(state.player?.tokenBalance||0)<Number(room.wager||0))throw new Error(`Token ไม่พอ ต้องมี ${Number(room.wager||0)} Token`);const players={...(room.players||{})},assign=teamAssignment(players,room.teamMode);players[state.uid]={uid:state.uid,name:state.player.fullName,studentId:state.player.studentId,educationLevel:state.player.educationLevel,classroom:state.player.classroom,department:state.player.department||"",major:state.player.major||"",majorCode:state.player.majorCode||majorCodeFor(state.player.educationLevel,state.player.major),character:pvpCharacterSnapshot(state.player.character),battleDamage:0,maxCombo:0,combo:0,...assign,joinedOrder:Object.keys(players).length,stakeLocked:Number(room.wager||0)===0,progress:0,shotFinished:false,joinedAt:new Date().toISOString()};tx.update(ref,{players,lastActivityAt:serverTimestamp()});});state.roomCode=code;setMatchmakingStatus("matched",`เข้าห้อง ${code} แล้ว`,`รอสมาชิกครบและระบบล็อก Token`);listenRoom(code);
  }catch(e){console.error(e);setMatchButtonsBusy(false);setMatchmakingStatus("error","เข้าห้องไม่สำเร็จ",e.message||"");}
}
$("joinRoomCodeButton").onclick=()=>joinRoomByCode($("joinRoomCodeInput").value);
$("joinRoomCodeInput").addEventListener("input",e=>e.target.value=e.target.value.toUpperCase().replace(/[^A-Z2-9]/g,"").slice(0,6));

async function ensureMyStakeLocked(room){
  if(state.pvpStakeLocking||room.status!=="waiting"||!roomFull(room)||room.players?.[state.uid]?.stakeLocked)return;
  state.pvpStakeLocking=true;const wager=Number(room.wager||0),roomRef=doc(db,"pvp_rooms",state.roomCode),userRef=doc(db,"users",state.uid);
  try{await runTransaction(db,async tx=>{const rs=await tx.get(roomRef);if(!rs.exists())return;const r=rs.data(),mine=r.players?.[state.uid];if(r.status!=="waiting"||!mine||mine.stakeLocked)return;const players={...(r.players||{})};if(wager>0){const us=await tx.get(userRef);if(!us.exists())throw new Error("ไม่พบ User");const bal=Number(us.data().tokenBalance||0);if(bal<wager)throw new Error("TOKEN_LOW");tx.update(userRef,{tokenBalance:bal-wager,updatedAt:serverTimestamp()});}players[state.uid]={...mine,stakeLocked:true,stakeLockedAt:new Date().toISOString()};tx.update(roomRef,{players,lastActivityAt:serverTimestamp()});});await ensureProfileDefaults();if($("userTokens"))$("userTokens").textContent=Number(state.player?.tokenBalance||0).toLocaleString();
  }catch(e){if(e.message==="TOKEN_LOW"){alert(`Token ไม่พอสำหรับห้องนี้ (${wager} Token)`);await leaveCurrentLobby();}else console.warn("stake lock:",e)}finally{state.pvpStakeLocking=false;}
}
function allStakesLocked(room){return roomFull(room)&&roomPlayers(room).every(p=>p.stakeLocked===true);}
function renderLobbyPlayers(room){
  const activeA=activeUidForTeam(room,"A"),activeB=activeUidForTeam(room,"B");
  $("pvpPlayersGrid").innerHTML=roomPlayers(room).map(p=>`<div class="pvp-player-slot team-${p.team.toLowerCase()}"><span>TEAM ${p.team} · SLOT ${Number(p.teamSlot||0)+1}</span><strong>${esc(p.name||p.studentId)}</strong><small>${esc(p.studentId||'-')} · ${p.stakeLocked?'🔒 TOKEN READY':'⏳ LOCK TOKEN'}</small></div>`).join("");
  $("pvpLobbyRule").textContent=pvpRoomRuleText(room);
}
function listenRoom(code){
  if(state.roomUnsub)state.roomUnsub();state.roomCode=code;$("pvpLobby").classList.remove("hidden");$("leaveLobbyButton").classList.remove("hidden");
  state.roomUnsub=onSnapshot(doc(db,"pvp_rooms",code),async snap=>{if(!snap.exists()){await leaveCurrentLobby();setMatchmakingStatus("closed","ห้องถูกปิดแล้ว","เลือกห้องใหม่ได้ทันที");return;}state.roomData=snap.data();const room=state.roomData;$("roomCodeLabel").textContent=code;$("pvpStatus").textContent=String(room.status||"waiting").toUpperCase();renderLobbyPlayers(room);const full=roomFull(room),host=room.hostUid===state.uid;
    if(room.status==="waiting"&&full&&!room.players?.[state.uid]?.stakeLocked)ensureMyStakeLocked(room);
    if(room.status==="waiting"){const ready=allStakesLocked(room);$("pvpLobbyHint").textContent=!full?`รอผู้เล่น ${playerCount(room)}/${room.maxPlayers}`:ready?(host?"พร้อมแล้ว กดเริ่มการแข่งขัน":"พร้อมแล้ว รอ Host เริ่ม"):"สมาชิกครบแล้ว กำลังล็อก Token";$("startPvpButton").classList.toggle("hidden",!(host&&ready));setMatchmakingStatus(full?"matched":"waiting",full?"สมาชิกครบแล้ว":`ห้อง ${code} กำลังรอ`,pvpRoomRuleText(room));}
    if(room.status==="playing"){setMatchmakingStatus("playing","การแข่งขันกำลังดำเนินอยู่",pvpRoomRuleText(room));syncPvpGameFromRoom(room,code);}
    if(room.status==="finished"){syncPvpGameFromRoom(room,code);await handlePvpFinishedRoom(room);}setMatchButtonsBusy(true);
  },e=>{console.error(e);setMatchButtonsBusy(false);setMatchmakingStatus("error","Lobby ขัดข้อง",e.message||"")});
}
$("startPvpButton").onclick=async()=>{if(!state.roomCode)return;const ref=doc(db,"pvp_rooms",state.roomCode);try{await runTransaction(db,async tx=>{const snap=await tx.get(ref);if(!snap.exists())return;const r=snap.data();if(r.hostUid!==state.uid||r.status!=="waiting"||!allStakesLocked(r))throw new Error("ห้องยังไม่พร้อม");const players={};for(const [id,p] of Object.entries(r.players||{}))players[id]={...p,progress:0,shotFinished:false,wpm:0,accuracy:100,mistakes:0,battleDamage:0,maxCombo:0,combo:0};const maxA=pvpTeamMaxHp(players,"A"),maxB=pvpTeamMaxHp(players,"B");tx.update(ref,{status:"playing",shotIndex:0,relayLegs:{A:0,B:0},scores:{A:0,B:0},shotResults:{},players,battle:{maxHpByTeam:{A:maxA,B:maxB},hp:{A:maxA,B:maxB},eventSeq:0,lastEvent:null},rankedBattle:true,startedAt:serverTimestamp(),countdownDurationMs:PVP_COUNTDOWN_MS,shotStartedAt:serverTimestamp(),lastActivityAt:serverTimestamp()});});}catch(e){alert(e.message)}};
$("leaveLobbyButton").onclick=leaveCurrentLobby;

function pvpInitialCountdownEnd(room=state.roomData){const started=room?.startedAt?.toMillis?.()||room?.startedAt?.toDate?.()?.getTime?.()||0;return started&&Number(room?.shotIndex||0)===0?started+Number(room?.countdownDurationMs||0):0}
function pvpCountdownActive(){return state.pvpCountdownEndMs===-1 || (!!state.pvpCountdownEndMs&&Date.now()<state.pvpCountdownEndMs)}
function clearPvpCountdown(){clearInterval(state.pvpCountdownTimer);state.pvpCountdownTimer=null;state.pvpCountdownEndMs=0;$("pvpCountdownOverlay")?.classList.add("hidden")}
function startPvpCountdown(room,turn){
  const duration=Number(room?.countdownDurationMs||0),end=pvpInitialCountdownEnd(room);
  if(duration>0&&!end){
    if(state.pvpCountdownEndMs===-1)return;
    clearInterval(state.pvpCountdownTimer);state.pvpCountdownEndMs=-1;$("pvpTypingInput").disabled=true;$("pvpCountdownOverlay").classList.remove("hidden");$("pvpCountdownNumber").textContent="SYNC";$("pvpGameStatus").textContent="COUNTDOWN";return;
  }
  if(end&&state.pvpCountdownEndMs===end)return;
  clearInterval(state.pvpCountdownTimer);state.pvpCountdownEndMs=end;
  if(!end){$("pvpCountdownOverlay")?.classList.add("hidden");$("pvpTypingInput").disabled=!turn;state.pvpStartTime=Date.now();return;}
  state.pvpStartTime=end;
  if(Date.now()>=end){$("pvpCountdownOverlay")?.classList.add("hidden");$("pvpTypingInput").disabled=!turn;$("pvpGameStatus").textContent=turn?"PLAYING":"WATCHING";return;}
  $("pvpTypingInput").disabled=true;$("pvpCountdownOverlay").classList.remove("hidden");$("pvpGameStatus").textContent="COUNTDOWN";
  const tick=()=>{const left=end-Date.now();if(left<=0){clearInterval(state.pvpCountdownTimer);state.pvpCountdownTimer=null;$("pvpCountdownNumber").textContent="GO!";$("pvpGameStatus").textContent=turn?"PLAYING":"WATCHING";setTimeout(()=>{$("pvpCountdownOverlay").classList.add("hidden")},420);$("pvpTypingInput").disabled=!turn;if(turn)setTimeout(()=>$('pvpTypingInput').focus({preventScroll:true}),80);return;}$("pvpCountdownNumber").textContent=String(Math.min(3,Math.max(1,Math.ceil(left/1000))));};tick();state.pvpCountdownTimer=setInterval(tick,60);
}

function pvpElapsed(){return state.pvpStartTime?Math.max(0,(Date.now()-state.pvpStartTime)/1000):0;}
function pvpAccuracy(){return state.pvpKeys?Math.max(0,(state.pvpCorrectText.length/state.pvpKeys)*100):100;}
function pvpWpm(){const sec=Math.max(pvpElapsed(),.1);return state.pvpCorrectText.length?((state.pvpCorrectText.length/5)/(sec/60)):0;}
function pvpProgressPct(){const code=state.pvpTargetCode||state.pvpLesson?.code||"";return code.length?Math.min(100,state.pvpCorrectText.length/code.length*100):0;}
function aggregatePvpStats(){const a=state.pvpAggregate,includeCurrent=state.pvpTurnSignature&&state.pvpRecordedSignature!==state.pvpTurnSignature&&state.pvpWasActive,chars=a.typedChars+(includeCurrent?state.pvpCorrectText.length:0),keys=a.keys+(includeCurrent?state.pvpKeys:0),seconds=a.seconds+(includeCurrent?pvpElapsed():0),mistakes=a.mistakes+(includeCurrent?state.pvpMistakes:0);return {wpm:chars?((chars/5)/(Math.max(seconds,.1)/60)):0,accuracy:keys?Math.max(0,chars/keys*100):100,mistakes,seconds,chars,keys};}
function recordCurrentPvpShot(){if(!state.pvpTurnSignature||state.pvpRecordedSignature===state.pvpTurnSignature)return;state.pvpRecordedSignature=state.pvpTurnSignature;if(state.pvpWasActive){state.pvpAggregate.typedChars+=state.pvpCorrectText.length;state.pvpAggregate.keys+=state.pvpKeys;state.pvpAggregate.mistakes+=state.pvpMistakes;state.pvpAggregate.seconds+=pvpElapsed();}}
function renderPvpStrictCode(){const code=state.pvpTargetCode||state.pvpLesson?.code||"";let html="";for(let i=0;i<code.length;i++){const cls=i<state.pvpCorrectText.length?"correct":i===state.pvpCorrectText.length?"current":"pending",ch=code[i];html+=`<span class="${cls}">${ch==="\n"?"\n":ch===" "?" ":esc(ch)}</span>`;}$("pvpTypingDisplay").innerHTML=html;$("pvpTypingDisplay").querySelector(".current")?.scrollIntoView({block:"nearest"});$("pvpProgress").textContent=`${Math.floor(pvpProgressPct())}%`;}
function updatePvpStats(){$("pvpTime").textContent=fmtTime(pvpElapsed());$("pvpWpm").textContent=Math.round(pvpWpm());$("pvpAccuracy").textContent=`${pvpAccuracy().toFixed(0)}%`;$("pvpMistakes").textContent=state.pvpMistakes;$("pvpProgress").textContent=`${Math.floor(pvpProgressPct())}%`;}
function pvpWrong(expected){const stage=$("pvpTypingStage");stage.classList.remove("wrong-shake","wrong-flash");void stage.offsetWidth;stage.classList.add("wrong-shake","wrong-flash");$("pvpGameStatus").textContent=`ผิด · ${expected==="\n"?"Enter":expected===" "?"Space":expected}`;setTimeout(()=>{stage.classList.remove("wrong-shake","wrong-flash");if(!state.pvpFinished)$("pvpGameStatus").textContent="PLAYING"},260);}
async function createPvpAttempt(){if(state.pvpAttemptId)return;const room=state.roomData;if(!room)return;try{const r=await addDoc(collection(db,"attempts"),{uid:state.uid,studentId:state.player.studentId,fullName:state.player.fullName,educationLevel:state.player.educationLevel,classroom:state.player.classroom,language:state.language?.name||room.languageId,languageId:room.languageId,modeName:"PVP Battle Ranked",pvpRanked:true,difficulty:difficultyName(room.difficultyId),difficultyId:room.difficultyId,stage:0,lessonId:"multi_shot",levelTitle:`PVP ${room.shotCount} Shot ${room.teamMode}`,roomCode:state.roomCode,teamMode:room.teamMode,shotCount:room.shotCount,tokenWager:Number(room.wager||0),team:myPvpTeam(room),status:"playing",score:0,rewardPoints:0,wpm:0,accuracy:0,mistakes:0,elapsedSeconds:0,createdAt:serverTimestamp()});state.pvpAttemptId=r.id;}catch(e){console.warn("attempt:",e)}}
async function pushPvpProgress(force=false){if(!state.roomCode||!state.roomData||state.roomData.status!=="playing"||!isMyTurn())return;const now=Date.now();if(!force&&now-state.pvpProgressLastSent<180)return;state.pvpProgressLastSent=now;try{await updateDoc(doc(db,"pvp_rooms",state.roomCode),{[`players.${state.uid}.progress`]:Math.round(pvpProgressPct()*10)/10,[`players.${state.uid}.wpm`]:Math.round(pvpWpm()*100)/100,[`players.${state.uid}.accuracy`]:Math.round(pvpAccuracy()*100)/100,[`players.${state.uid}.mistakes`]:state.pvpMistakes,[`players.${state.uid}.combo`]:state.pvpBattle.combo,[`players.${state.uid}.maxCombo`]:state.pvpBattle.maxCombo,[`players.${state.uid}.lastUpdateAt`]:serverTimestamp()});}catch(e){console.warn("pvp progress:",e)}}
function schedulePvpProgress(){clearTimeout(state.pvpProgressTimer);state.pvpProgressTimer=setTimeout(()=>pushPvpProgress(false),90);}
function renderPvpTeams(room){const a=teamMembers(room,"A"),b=teamMembers(room,"B"),aa=activeUidForTeam(room,"A"),bb=activeUidForTeam(room,"B");const fmt=(arr,active)=>arr.map(p=>`${p.uid===active?'▶ ':''}${esc(p.studentId||p.name)}`).join(' · ')||'-';$("teamAPlayers").innerHTML=fmt(a,aa);$("teamBPlayers").innerHTML=fmt(b,bb);$("pvpShotScore").textContent=`TEAM A ${Number(room.scores?.A||0)} : ${Number(room.scores?.B||0)} TEAM B`;const ap=room.players?.[aa]||{},bp=room.players?.[bb]||{},av=teamProgress(room,"A"),bv=teamProgress(room,"B");$("teamABar").style.width=`${av}%`;$("teamBBar").style.width=`${bv}%`;$("teamAPct").textContent=`${Math.floor(av)}%`;$("teamBPct").textContent=`${Math.floor(bv)}%`;$("pvpTurnInfo").textContent=room.teamMode==="2v2"?`Relay Battle · A: ${ap.studentId||'-'} · B: ${bp.studentId||'-'}`:"โจมตีด้วยการพิมพ์ Code · HP 0 หรือจบ Code ก่อนชนะ";renderPvpBattleArena(room);}
async function enterPvpShot(room,code){
  const idx=Number(room.shotIndex||0),team=myPvpTeam(room),activeUid=activeUidForTeam(room,team),signature=`${idx}:${activeUid||"none"}`;
  if(state.pvpActiveRoom===code&&state.pvpTurnSignature===signature)return;
  const newMatch=state.pvpActiveRoom!==code;
  if(newMatch){state.pvpAttemptId=null;state.pvpResultSaved=false;state.pvpPayoutClaimed=false;state.pvpAggregate={typedChars:0,keys:0,mistakes:0,seconds:0};state.pvpTurnSignature=null;state.pvpRecordedSignature=null;state.pvpCurrentShot=-1;}else{recordCurrentPvpShot();}
  const lesson=LESSONS.find(x=>x.id===room.lessonIds?.[idx]);
  if(!lesson){setMatchmakingStatus("error","ไม่พบโจทย์ PVP","lessonIds ไม่ตรงกับเวอร์ชัน");return;}
  state.pvpActiveRoom=code;state.pvpCurrentShot=idx;state.pvpTurnSignature=signature;state.pvpRecordedSignature=null;state.pvpLesson=lesson;state.pvpCorrectText="";state.pvpMistakes=0;state.pvpKeys=0;state.pvpProgressLastSent=0;state.pvpFinished=false;resetLocalPvpBattle();clearInterval(state.pvpTimer);clearTimeout(state.pvpProgressTimer);$("pvpTypingInput").value="";
  const turn=isMyTurn(room);state.pvpWasActive=turn;state.pvpTargetCode=pvpCodeForMyTurn(room,lesson);$("pvpTypingInput").disabled=!turn;state.pvpStartTime=Date.now();
  const relayLeg=room.teamMode==="2v2"?Number(room.relayLegs?.[team]||0)+1:null;
  $("pvpChallengeTitle").textContent=`Shot ${idx+1}/${room.shotCount} · Stage ${lesson.stage} · ${lesson.title}${relayLeg?` · ส่วน ${relayLeg}/2`:""}`;
  $("pvpChallengeDescription").textContent=room.teamMode==="2v2"?"Relay 2v2: สมาชิกแต่ละทีมสลับกันพิมพ์คนละครึ่งของ Code · PVP ไม่มีคำอธิบายหลังจบ":"PVP Ranked Battle · พิมพ์ถูก 5 ตัว = Basic Attack · จบบรรทัด = Skill · Code จบหรือ HP คู่ต่อสู้เหลือ 0 จะชนะ Shot";
  $("pvpRoomGame").textContent=`Room ${code}`;$("pvpMatchMeta").textContent=`PVP RANKED · ${room.teamMode.toUpperCase()} · ${room.shotCount} Shot · ${Number(room.wager||0)} Token`;$("pvpShotLabel").textContent=`SHOT ${idx+1}/${room.shotCount}`;$("pvpActiveRole").textContent=turn?"YOUR TURN":"WATCHING";$("pvpGameStatus").textContent=turn?"PLAYING":"รอเพื่อนร่วมทีม";$("pvpSaveState").textContent=turn?(room.teamMode==="2v2"?`Relay Part ${relayLeg}/2 · Strict Typing`:"Strict Typing · Realtime"):"Relay Mode · รอรอบของคุณ";
  renderPvpStrictCode();renderPvpTeams(room);updatePvpStats();showScreen("pvpGameScreen");await createPvpAttempt();state.pvpTimer=setInterval(updatePvpStats,100);if(idx===0&&Number(room.countdownDurationMs||0)>0)startPvpCountdown(room,turn);else{clearPvpCountdown();$("pvpTypingInput").disabled=!turn;state.pvpStartTime=Date.now();if(turn)setTimeout(()=>$('pvpTypingInput').focus({preventScroll:true}),100);}
}
function syncPvpGameFromRoom(room,code){if(room.status==="playing"){enterPvpShot(room,code).catch(console.error);renderPvpTeams(room);if(Number(room.shotIndex||0)===0&&Number(room.countdownDurationMs||0)>0)startPvpCountdown(room,isMyTurn(room));}else if(room.status==="finished")renderPvpTeams(room);}
async function declarePvpShotFinish(){
  if(!state.roomCode||state.roomData?.status!=="playing"||!isMyTurn())return;
  state.pvpFinished=true;clearInterval(state.pvpTimer);clearTimeout(state.pvpProgressTimer);recordCurrentPvpShot();
  const ref=doc(db,"pvp_rooms",state.roomCode),shot=state.pvpCurrentShot;
  try{await runTransaction(db,async tx=>{
    const snap=await tx.get(ref);if(!snap.exists())return;const r=snap.data();if(r.status!=="playing"||Number(r.shotIndex)!==shot)return;
    const me=r.players?.[state.uid];if(!me)return;
    // 2v2 Relay: คนแรกพิมพ์ครึ่งแรกเสร็จ -> ส่งไม้ให้เพื่อนร่วมทีม โดยยังไม่ตัดสิน Shot
    if(r.teamMode==="2v2"&&Number(r.relayLegs?.[me.team]||0)===0){
      const relayLegs={A:Number(r.relayLegs?.A||0),B:Number(r.relayLegs?.B||0)};relayLegs[me.team]=1;
      const players={...(r.players||{})};players[state.uid]={...(players[state.uid]||{}),progress:100,relayPartFinished:true,wpm:Math.round(pvpWpm()*100)/100,accuracy:Math.round(pvpAccuracy()*100)/100,mistakes:state.pvpMistakes};
      const nextUid=teamMembers(r,me.team)[1]?.uid;if(nextUid)players[nextUid]={...(players[nextUid]||{}),progress:0,shotFinished:false};
      tx.update(ref,{relayLegs,players,lastActivityAt:serverTimestamp()});return;
    }
    const key=String(shot),results={...(r.shotResults||{})};if(results[key])return;
    const scores={A:Number(r.scores?.A||0),B:Number(r.scores?.B||0)};scores[me.team]+=1;results[key]={winnerUid:state.uid,winnerTeam:me.team,reason:"CODE_FINISH",finishedAt:new Date().toISOString()};
    const players={};for(const [id,p] of Object.entries(r.players||{}))players[id]={...p,progress:0,shotFinished:false,relayPartFinished:false};players[state.uid]={...players[state.uid],shotFinished:true,wpm:Math.round(pvpWpm()*100)/100,accuracy:Math.round(pvpAccuracy()*100)/100,mistakes:state.pvpMistakes};
    if(shot+1>=Number(r.shotCount||1)){tx.update(ref,{scores,shotResults:results,players,winnerTeam:scores.A>scores.B?"A":"B",status:"finished",finishedAt:serverTimestamp(),lastActivityAt:serverTimestamp()});}
    else{tx.update(ref,{scores,shotResults:results,players,shotIndex:shot+1,relayLegs:{A:0,B:0},battle:{maxHpByTeam:r.battle?.maxHpByTeam||{A:100,B:100},hp:{A:Number(r.battle?.maxHpByTeam?.A||100),B:Number(r.battle?.maxHpByTeam?.B||100)},eventSeq:Number(r.battle?.eventSeq||0),lastEvent:null},shotStartedAt:serverTimestamp(),lastActivityAt:serverTimestamp()});}
  });}catch(e){console.warn("finish shot:",e);state.pvpFinished=false;}
}
async function claimPvpPayout(room){const wager=Number(room.wager||0),my=room.players?.[state.uid];if(!my||wager<=0||my.team!==room.winnerTeam)return 0;const winners=teamMembers(room,room.winnerTeam).length||1,pot=wager*playerCount(room),share=Math.floor(pot/winners),roomRef=doc(db,"pvp_rooms",state.roomCode),userRef=doc(db,"users",state.uid);let paid=0;try{await runTransaction(db,async tx=>{const rs=await tx.get(roomRef);if(!rs.exists())return;const r=rs.data(),claims={...(r.payoutClaims||{})};if(r.status!=="finished"||r.winnerTeam!==my.team||claims[state.uid])return;const us=await tx.get(userRef);if(!us.exists())return;tx.update(userRef,{tokenBalance:Number(us.data().tokenBalance||0)+share,tokenLifetime:Number(us.data().tokenLifetime||0)+0,updatedAt:serverTimestamp()});claims[state.uid]=true;tx.update(roomRef,{payoutClaims:claims});paid=share;});}catch(e){console.warn("payout:",e)}if(paid){await ensureProfileDefaults();if($("userTokens"))$("userTokens").textContent=Number(state.player.tokenBalance||0).toLocaleString();}return paid;}
async function savePvpAttempt(result,payout=0){if(state.pvpResultSaved)return;state.pvpResultSaved=true;if(!state.pvpAttemptId)await createPvpAttempt();if(!state.pvpAttemptId)return;recordCurrentPvpShot();const a=aggregatePvpStats(),room=state.roomData,wager=Number(room?.wager||0);try{await updateDoc(doc(db,"attempts",state.pvpAttemptId),{status:"completed",pvpResult:result,winnerTeam:room?.winnerTeam||null,team:myPvpTeam(room),score:result==="win"?100:0,rewardPoints:0,tokenWager:wager,tokenPayout:payout,netToken:payout-wager,wpm:Math.round(a.wpm*100)/100,accuracy:Math.round(a.accuracy*100)/100,mistakes:a.mistakes,pvpBattleDamage:Number(room?.players?.[state.uid]?.battleDamage||state.pvpBattle.damage||0),pvpMaxCombo:Number(room?.players?.[state.uid]?.maxCombo||state.pvpBattle.maxCombo||0),elapsedSeconds:Math.round(((Date.now()-(room?.startedAt?.toMillis?.()||Date.now()))/1000)*100)/100,finishedAt:serverTimestamp()});}catch(e){console.warn("save pvp:",e)}}
async function handlePvpFinishedRoom(room){if(state.pvpActiveRoom!==state.roomCode)return;recordCurrentPvpShot();state.pvpFinished=true;clearInterval(state.pvpTimer);clearTimeout(state.pvpProgressTimer);$("pvpTypingInput").disabled=true;const won=myPvpTeam(room)===room.winnerTeam,payout=await claimPvpPayout(room);$("pvpGameStatus").textContent=won?"WIN 🏆":"LOSE";$("pvpSaveState").textContent=won?`ทีมคุณชนะ · รับ ${payout} Token จาก Pot`:`ทีม ${room.winnerTeam} ชนะ · เสีย ${Number(room.wager||0)} Token`;await savePvpAttempt(won?"win":"loss",payout);await savePvpRankedResult(room,won?"win":"loss");}
$("pvpTypingStage").onclick=()=>{if(isMyTurn())$("pvpTypingInput").focus({preventScroll:true})};
$("pvpTypingInput").addEventListener("keydown",async e=>{if(state.roomData?.status!=="playing"||!isMyTurn()||state.pvpFinished||pvpCountdownActive()){e.preventDefault();if(pvpCountdownActive())$("pvpGameStatus").textContent="COUNTDOWN";return;}if(["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault();$("pvpGameStatus").textContent="STRICT · พิมพ์ตัวเดิมใหม่";return;}const raw=keyToInput(e);if(raw===null)return;e.preventDefault();const code=state.pvpTargetCode||state.pvpLesson?.code||"",pos=state.pvpCorrectText.length,expected=code[pos];if(expected===undefined)return;state.pvpKeys++;if(raw==="\t"){if(expected===" "){let count=0;while(code[pos+count]===" "&&count<4)count++;const added=code.slice(pos,pos+count);state.pvpCorrectText+=added;for(const ch of added)onPvpCorrectCharacter(ch);renderPvpStrictCode();updatePvpStats();schedulePvpProgress();if(state.pvpCorrectText===code){if(state.pvpMistakes===0)queuePvpAttack("critical");await declarePvpShotFinish();}}else{state.pvpMistakes++;onPvpWrongCharacter();pvpWrong(expected);updatePvpStats();}return;}if(raw===expected){state.pvpCorrectText+=raw;onPvpCorrectCharacter(raw);renderPvpStrictCode();updatePvpStats();schedulePvpProgress();$("pvpGameStatus").textContent="PLAYING";if(state.pvpCorrectText===code){if(state.pvpMistakes===0)queuePvpAttack("critical");await declarePvpShotFinish();}}else{state.pvpMistakes++;onPvpWrongCharacter();pvpWrong(expected);updatePvpStats();schedulePvpProgress();}});
async function forfeitPvpIfPlaying(){if(!state.roomCode||state.roomData?.status!=="playing")return;const room=state.roomData,myTeam=myPvpTeam(room),other=myTeam==="A"?"B":"A";try{await updateDoc(doc(db,"pvp_rooms",state.roomCode),{winnerTeam:other,status:"finished",forfeitUid:state.uid,finishedAt:serverTimestamp()});}catch(e){console.warn("forfeit:",e)}}
$("leavePvpButton").onclick=async()=>{await forfeitPvpIfPlaying();clearInterval(state.pvpTimer);clearTimeout(state.pvpProgressTimer);clearPvpCountdown();state.pvpActiveRoom=null;state.pvpLesson=null;state.pvpFinished=false;state.pvpCorrectText="";resetLocalPvpBattle();showScreen("userPortal");};


/* ===== Responsive Device UX ===== */
function isTouchDevice() {
  return window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
}

function isPhoneLayout() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function isMobileOrTabletDevice() {
  const ua = navigator.userAgent || "";
  const mobileUa = /Android|iPhone|iPad|iPod|Mobile|Tablet|Silk|Kindle|PlayBook/i.test(ua);
  const iPadDesktopMode = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const coarseTablet = window.matchMedia("(pointer: coarse)").matches
    && Math.min(screen.width || innerWidth, screen.height || innerHeight) <= 1024;
  return mobileUa || iPadDesktopMode || coarseTablet;
}

function isZoneOnlyDevice() {
  return isMobileOrTabletDevice();
}

function applyZoneOnlyPortalMode() {
  const zoneOnly = isZoneOnlyDevice();
  document.documentElement.classList.toggle("zone-only-device", zoneOnly);
  document.body?.classList.toggle("zone-only-device", zoneOnly);

  const notice = $("mobileZoneOnlyNotice");
  if (notice) notice.classList.toggle("hidden", !zoneOnly);

  const zoneOnlyButton = $("mobileZoneOnlyEnter");
  if (zoneOnlyButton) zoneOnlyButton.setAttribute("href", "zone.html");

  const headTitle = document.querySelector("#userPortal .user-portal-head h2");
  if (headTitle && zoneOnly) headTitle.textContent = "เข้าใช้งาน 2D Zone";
  if (headTitle && !zoneOnly) headTitle.textContent = "เลือกภาษาและโหมดการเรียนรู้";
}

function isLandscape() {
  return window.innerWidth > window.innerHeight;
}

function updateDeviceUX() {
  const hint = $("deviceHint");
  if (!hint) return;

  const touch = isTouchDevice();
  const phone = isPhoneLayout();
  const zoneOnly = isZoneOnlyDevice();

  document.documentElement.classList.toggle("touch-device", touch);
  document.documentElement.classList.toggle("phone-layout", phone);
  document.documentElement.classList.toggle("landscape-layout", isLandscape());

  if (zoneOnly) {
    hint.textContent = phone ? (isLandscape() ? "มือถือ · เข้า 2D Zone เท่านั้น" : "มือถือ · เข้า 2D Zone เท่านั้น") : "แท็บเล็ต · เข้า 2D Zone เท่านั้น";
  } else if (phone) {
    hint.textContent = isLandscape() ? "มือถือ · แนวนอน" : "มือถือ · แนวตั้ง";
  } else if (touch) {
    hint.textContent = "Tablet / Touch";
  } else {
    hint.textContent = "Desktop";
  }

  applyZoneOnlyPortalMode();
}

function syncMobileStats() {
  const map = [
    ["mobileStatLevel", "statLevel"],
    ["mobileStatTime", "statTime"],
    ["mobileStatWpm", "statWpm"],
    ["mobileStatAccuracy", "statAccuracy"],
    ["mobileStatMistakes", "statMistakes"],
    ["mobileStatToken", "statScore"]
  ];
  map.forEach(([mobileId, sourceId]) => {
    const mobile = $(mobileId);
    const source = $(sourceId);
    if (mobile && source) mobile.textContent = source.textContent;
  });
}

window.addEventListener("resize", updateDeviceUX);
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    updateDeviceUX();
    $("typingInput")?.focus({preventScroll:true});
  }, 250);
});

if ($("mobileFocusButton")) {
  $("mobileFocusButton").onclick = () => {
    $("typingInput")?.focus({preventScroll:true});
    $("typingStage")?.scrollIntoView({block:"nearest"});
  };
}

if ($("mobileStatsButton")) {
  $("mobileStatsButton").onclick = () => {
    syncMobileStats();
    $("mobileStatsSheet")?.classList.remove("hidden");
  };
}

if ($("closeMobileStats")) {
  $("closeMobileStats").onclick = () => {
    $("mobileStatsSheet")?.classList.add("hidden");
    $("typingInput")?.focus({preventScroll:true});
  };
}

if ($("mobileStatsSheet")) {
  $("mobileStatsSheet").addEventListener("click", (e) => {
    if (e.target === $("mobileStatsSheet")) {
      $("mobileStatsSheet").classList.add("hidden");
      $("typingInput")?.focus({preventScroll:true});
    }
  });
}

if ($("mobileExitButton")) {
  $("mobileExitButton").onclick = () => $("quitButton")?.click();
}

updateDeviceUX();

onAuthStateChanged(auth,async user=>{
  if(!user){
    stopUsageTracker({flush:true});
    stopDailyFullscreenQuest();
    studentSessionAuthenticated=false;
    studentFullscreenGateVisible(false);
    state.uid=null;state.player=null;showScreen("authScreen");return;
  }
  if(user.email==="pisit_2000@nr-game-code.local"){location.replace("./admin.html?v=4.12.0");return;}
  state.uid=user.uid;
  try{
    await routeAuthenticatedStudent();
  }catch(error){
    console.error("auth route:",error);
    showScreen("authScreen");
    $("loginMessage").textContent="เปิดบัญชีไม่สำเร็จ กรุณา Reload แล้วลองใหม่";
  }
});

buildKeyboard();
updateRegister();

```


## zone.html

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#102c3d">
  <title>2D Zone | Code Typing Academy</title>
  <link rel="stylesheet" href="./style.css?v=4.12.0">
</head>
<body class="zone47-page">
  <div id="zoneGate" class="zone47-gate">
    <div class="zone47-gate-card">
      <div class="zone47-gate-icon">🌙</div>
      <span class="section-kicker">2D SOCIAL ZONE · V4.12.0 · EMBEDDED REAL ART</span>
      <h1 id="zoneGateTitle">กำลังเข้าสู่ 2D Zone</h1>
      <p id="zoneGateText">กำลังโหลดฉาก ตัวละคร ผู้เล่น แชต ร้านค้า และภารกิจ...</p>
      <div id="zoneGateHelp" class="zone47-gate-help hidden"></div>
      <a href="./index.html" class="btn ghost">กลับหน้า User</a>
    </div>
  </div>

  <main id="zoneApp" class="zone47-app hidden">
    <header class="zone47-topbar">
      <div class="zone47-brand">
        <span id="zoneWorldIcon" class="zone47-brand-icon">🌙</span>
        <div><strong>2D SOCIAL ZONE</strong><small>เดินซ้าย–ขวา · พูดคุย · รับภารกิจ · Token Shop</small></div>
      </div>
      <div class="zone47-time"><span id="zoneWorldPeriod">กลางคืน</span><small id="zoneWorldCountdown">เปลี่ยนใน --:--:--</small></div>
      <div class="zone47-user">
        <div id="zoneMyShield"></div>
        <div><strong id="zoneMyStudentId">-</strong><small><i></i><span id="zoneOnlineCount">1</span> online</small></div>
      </div>
      <div class="zone47-token"><span>🪙 Token</span><strong id="zoneTokenBalance">0</strong></div>
      <div class="zone47-actions">
        <button id="openWizardQuests" class="btn ghost" type="button">🧙 ภารกิจ</button>
        <button id="openZoneShop" class="btn ghost" type="button">🛒 ร้านค้า</button>
        <button id="openZoneBackpack" class="btn ghost" type="button">🎒 กระเป๋า <span id="zoneBackpackMini">0/18</span></button>
        <button id="openZoneChatHistory" class="btn ghost" type="button">💬 แชต</button>
        <a id="openAdminPanel" class="btn ghost hidden" href="./admin.html">Admin</a>
        <a id="leaveZoneButton" class="btn danger" href="./index.html">ออก</a>
      </div>
    </header>

    <section id="zoneWorld" class="zone47-world" data-period="night">
      <canvas id="zoneCanvas"></canvas>

      <div class="zone47-art-engine">🎨 ART ENGINE · EMBEDDED</div>
      <div class="zone47-help">
        <strong>เดิน</strong><span>A / ←</span><span>D / →</span>
      </div>

      <div id="zoneSystemNotice" class="zone47-system-notice hidden"></div>

      <div id="zoneConnectionBadge" class="zone47-connection"><i></i><strong>REALTIME</strong></div>

      <button id="zoneNearbyAction" class="zone47-nearby-action hidden" type="button"></button>

      <aside id="zonePlayerCard" class="zone47-player-card hidden">
        <button id="closeZonePlayerCard" class="zone47-card-close" type="button">✕</button>
        <div class="zone47-player-head">
          <div id="zonePlayerCardShield"></div>
          <div><h3 id="zonePlayerCardId">-</h3><p id="zonePlayerCardRank">Bronze</p></div>
        </div>
        <span id="zonePlayerCardItemTitle">ไอเท็มที่กำลังสวม</span>
        <div id="zonePlayerCardItems" class="zone47-equipped-list"></div>
      </aside>
    </section>

    <footer class="zone47-footer">
      <button id="moveLeftButton" class="zone47-move-button" type="button">◀</button>
      <div class="zone47-chat-id"><strong id="zoneChatIdentity">-</strong><small id="zoneChatStatus">พร้อมพูดคุย</small></div>
      <form id="zoneChatForm" class="zone47-chat-form">
        <input id="zoneChatInput" maxlength="120" autocomplete="off" placeholder="พิมพ์ข้อความ แล้วกด Enter...">
        <button type="submit">พูด</button>
      </form>
      <button id="moveRightButton" class="zone47-move-button" type="button">▶</button>
    </footer>
  </main>

  <div id="zoneQuestModal" class="zone47-modal hidden">
    <div class="zone47-modal-card zone47-quest-card">
      <button id="closeWizardQuests" class="zone47-modal-close" type="button">✕</button>
      <div class="zone47-modal-header">
        <div class="zone47-wizard-portrait">🧙‍♂️</div>
        <div>
          <span class="section-kicker">TEACHER QUEST WIZARD</span>
          <h2>พ่อมดผู้มอบภารกิจ</h2>
          <p>ต้องกดรับภารกิจก่อนจึงจะได้รับ Token พิเศษ</p>
        </div>
      </div>
      <div class="zone47-quest-metrics">
        <div><span>Rank</span><strong id="questRankLabel">Bronze</strong></div>
        <div><span>วันนี้</span><strong id="questDailyCount">0 / 3</strong></div>
        <div><span>รับพร้อมกันได้</span><strong id="questActiveLimit">1</strong></div>
      </div>
      <div class="zone47-quest-reward-rule">
        <span>ง่าย 2–5 Token</span><span>ปานกลาง 10–15 Token</span><span>ยาก 15–20 Token</span>
      </div>
      <div id="zoneQuestList" class="zone47-quest-list"></div>
      <small class="zone47-mobile-quest-note">มือถือ/แท็บเล็ตยังใช้เฉพาะ 2D Zone ตามกติกาเดิม จึงรับภารกิจไว้ก่อนได้ และไปทำจากคอมพิวเตอร์</small>
    </div>
  </div>

  <div id="zoneShopModal" class="zone47-modal hidden">
    <div class="zone47-modal-card zone47-shop-card">
      <button id="closeZoneShop" class="zone47-modal-close" type="button">✕</button>
      <div class="zone47-shop-head">
        <div><span class="section-kicker">TOKEN SHOP</span><h2>ร้านค้าไอเท็ม</h2><p>ซื้อแล้วสวมใส่ได้ทันที และจะแสดงทั้งหน้า Profile กับตัวละครใน 2D Zone</p></div>
        <div class="zone47-shop-wallet"><span>Token</span><strong id="zoneShopBalance">0</strong><small id="zoneShopInventory">กระเป๋า 0/18</small></div>
      </div>
      <div class="zone47-shop-catalog-status">
        <div><span>CATALOG</span><strong id="zoneShopCatalogStatus">กำลังตรวจสอบไอเท็ม...</strong></div>
        <small>ร้านค้าหลักต้องมีครบ หาง่าย 10 + ระดับกลาง 10 + หายาก 10 = 30 ชิ้น</small>
      </div>
      <div class="zone47-grade-filter" id="zoneShopGradeFilter">
        <button class="active" data-zone-grade="all" type="button">🛍️ ทั้งหมด 30/30</button>
        <button data-zone-grade="easy" type="button">🟢 หาง่าย 10/10</button>
        <button data-zone-grade="medium" type="button">🔵 ระดับกลาง 10/10</button>
        <button data-zone-grade="rare" type="button">🟣 หายาก 10/10</button>
      </div>
      <div id="zoneShopGrid" class="zone47-shop-grid zone47-shop-complete"></div>
    </div>
  </div>


  <div id="zoneBackpackModal" class="zone47-modal hidden">
    <div class="zone47-modal-card zone47-backpack-card">
      <button id="closeZoneBackpack" class="zone47-modal-close" type="button">✕</button>
      <div class="zone47-shop-head">
        <div>
          <span class="section-kicker">MY BACKPACK</span>
          <h2>🎒 กระเป๋าไอเท็ม</h2>
          <p>เก็บไอเท็มได้สูงสุด 18 ชิ้น · กดสวมใส่แล้วจะแสดงบนตัวละครใน 2D Zone ทันที</p>
        </div>
        <div class="zone47-shop-wallet">
          <span>ความจุ</span><strong id="zoneBackpackCapacity">0/18</strong>
          <small id="zoneBackpackState">พร้อมเก็บไอเท็ม</small>
        </div>
      </div>
      <div class="zone47-backpack-slot-rule">
        <span>HEAD</span><span>FACE</span><span>TOP</span><span>SHOES</span><span>BACK</span><span>HAND</span><span>AURA</span><span>PET</span>
      </div>
      <div id="zoneBackpackGrid" class="zone47-backpack-grid"></div>
    </div>
  </div>

  <div id="zoneChatHistoryModal" class="zone47-modal hidden">
    <div class="zone47-modal-card">
      <button id="closeZoneChatHistory" class="zone47-modal-close" type="button">✕</button>
      <div class="zone47-shop-head"><div><span class="section-kicker">WORLD CHAT</span><h2>บทสนทนาใน Zone</h2></div><small>User 24 ชั่วโมง · GM ถาวร</small></div>
      <div id="zoneChatHistoryList" class="zone47-chat-history"></div>
    </div>
  </div>

  <script type="module" src="./zone.js?v=4.12.0"></script>
</body>
</html>

```


## zone.js

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, collection, onSnapshot,
  serverTimestamp, query, orderBy, limit, Timestamp, runTransaction
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { firebaseConfig, ADMIN_UID } from "./firebase-config.js?v=4.12.0";
import { REWARD_ITEMS, LEGACY_REWARD_ITEMS, GM_EXCLUSIVE_ITEMS, GM_DEFAULT_INVENTORY, ALL_REWARD_ITEMS, rewardItemById, RARITY_META, INVENTORY_LIMIT, sellBackValue, ITEM_STAT_KEYS, ITEM_STAT_LABELS, itemStats, itemPower, SHOP_GRADE_ORDER, SHOP_EXPECTED_COUNTS, shopCatalogSummary, shopCatalogComplete } from "./reward-data.js?v=4.12.0";
import { ITEM_ART_DATA, itemArtSrc } from "./item-assets.js?v=4.12.0";
import { DEFAULT_CHARACTER } from "./character-system.js?v=4.12.0";
import { ZONE_ART_DATA } from "./zone-assets.js?v=4.12.0";
import {
  QUEST_CONFIG, DEFAULT_TEACHER_QUESTS, localDayKey, activeQuestLimit,
  canAccessQuest, clampQuestReward, questDifficultyName, questObjectiveLabel
} from "./quest-system.js?v=4.12.0";
import { startUsageTracker, stopUsageTracker } from "./usage-tracker.js?v=4.12.0";

const firebaseApp=initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
const db=getFirestore(firebaseApp);
const $=id=>document.getElementById(id);

const ZONE_ID="thai_social_zone_v4_1";

const IS_EMBEDDED_ZONE=new URLSearchParams(location.search).get("embedded")==="1";
function postToStudentShell(type,payload={}){
  if(!IS_EMBEDDED_ZONE||window.parent===window)return false;
  window.parent.postMessage({type,...payload},location.origin);
  return true;
}

const WORLD={width:3000,height:1000};
const WALK_Y=835;
const WALK_LEFT=150;
const WALK_RIGHT=2850;
const PLAYER_MAX_SPEED=410;
const ACCELERATION=1900;
const DECELERATION=2400;
const POSITION_SEND_MS=150;
const PRESENCE_HEARTBEAT_MS=30000;
const ONLINE_STALE_MS=95000;
const USER_CHAT_TTL_MS=24*60*60*1000;
const BUBBLE_MS=9000;
const DAY_NIGHT_MS=3*60*60*1000;
const WIZARD_X=1180;
const SHOP_X=2600;
const INTERACT_DISTANCE=210;

const canvas=$("zoneCanvas"),ctx=canvas.getContext("2d",{alpha:false});

// ===== V4.12.0 REAL ART ASSETS =====
const ZONE_ART_PATH={
  world:"./assets/zone/zone-world-day.png",
  maleIdle:"./assets/zone/male-idle-right.png",
  maleWalk1:"./assets/zone/male-walk-right-1.png",
  maleWalk2:"./assets/zone/male-walk-right-2.png",
  femaleIdle:"./assets/zone/female-idle-right.png",
  femaleWalk1:"./assets/zone/female-walk-right-1.png",
  femaleWalk2:"./assets/zone/female-walk-right-2.png",
  wizardIdle:"./assets/zone/wizard-idle-right.png",
  merchantIdle:"./assets/zone/merchant-idle-right.png",
  token:"./assets/zone/item-token.png",
  gem:"./assets/zone/item-gem.png",
  chest:"./assets/zone/item-chest.png",
  scroll:"./assets/zone/item-scroll.png",
  potionRed:"./assets/zone/item-potion-red.png",
  potionBlue:"./assets/zone/item-potion-blue.png",
  potionGreen:"./assets/zone/item-potion-green.png"
};
const REQUIRED_ZONE_ART=["world","maleIdle","femaleIdle","wizardIdle","merchantIdle"];

const zoneArt={};
const zoneArtStatus={loaded:0,failed:0,embedded:0,external:0};

function loadZoneImageSource(key,src,sourceType){
  return new Promise(resolve=>{
    const img=new Image();
    img.decoding="async";
    img.onload=()=>{
      zoneArt[key]=img;
      zoneArtStatus.loaded++;
      zoneArtStatus[sourceType]++;
      resolve(true);
    };
    img.onerror=()=>resolve(false);
    img.src=src;
  });
}

async function loadZoneImage(key,externalSrc){
  // 1) Embedded Data URI is the primary source.
  const embedded=ZONE_ART_DATA[key];
  if(embedded){
    const ok=await loadZoneImageSource(key,embedded,"embedded");
    if(ok)return true;
  }

  // 2) Normal file path is retained as a backup.
  const externalOk=await loadZoneImageSource(key,externalSrc,"external");
  if(!externalOk){
    zoneArtStatus.failed++;
    console.error("Zone art failed from both embedded and external sources:",key,externalSrc);
  }
  return externalOk;
}

async function loadZoneArt(){
  const rows=await Promise.all(
    Object.entries(ZONE_ART_PATH).map(([k,v])=>loadZoneImage(k,v))
  );
  const missing=REQUIRED_ZONE_ART.filter(k=>!zoneArt[k]?.naturalWidth);
  console.info("ZONE ART V4.12.0",{
    loaded:zoneArtStatus.loaded,
    embedded:zoneArtStatus.embedded,
    external:zoneArtStatus.external,
    failed:zoneArtStatus.failed,
    missing
  });
  return {ok:missing.length===0,missing};
}
function shopArtForItem(item){ return itemArtSrc(item?.id); }

const itemArtImages={};
const itemArtBounds={};

function detectMainArtBounds(img){
  // Find real object pixels and ignore decorative sparkles / empty canvas.
  // Returned values are normalized to the original image.
  const S=160,cv=document.createElement("canvas");cv.width=S;cv.height=S;
  const cx=cv.getContext("2d",{willReadFrequently:true});
  cx.clearRect(0,0,S,S);cx.drawImage(img,0,0,S,S);
  let data;
  try{data=cx.getImageData(0,0,S,S).data}catch{return {x:0,y:0,w:1,h:1}}
  const on=new Uint8Array(S*S);
  for(let i=0;i<S*S;i++)on[i]=data[i*4+3]>=48?1:0;

  const seen=new Uint8Array(S*S),components=[];
  const dirs=[-1,1,-S,S,-S-1,-S+1,S-1,S+1];
  for(let p=0;p<on.length;p++){
    if(!on[p]||seen[p])continue;
    const stack=[p];seen[p]=1;let area=0,minX=S,minY=S,maxX=0,maxY=0;
    while(stack.length){
      const q=stack.pop(),y=Math.floor(q/S),x=q-y*S;
      area++;minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);
      for(const d of dirs){
        const n=q+d;if(n<0||n>=on.length||seen[n]||!on[n])continue;
        const ny=Math.floor(n/S),nx=n-ny*S;
        if(Math.abs(nx-x)>1||Math.abs(ny-y)>1)continue;
        seen[n]=1;stack.push(n);
      }
    }
    if(area>=5)components.push({area,minX,minY,maxX,maxY});
  }
  if(!components.length)return {x:0,y:0,w:1,h:1};
  const maxArea=Math.max(...components.map(x=>x.area));
  // Keep significant components (e.g. both wings / both shoes), drop tiny stars.
  const keep=components.filter(x=>x.area>=Math.max(10,maxArea*.075));
  let minX=S,minY=S,maxX=0,maxY=0;
  keep.forEach(b=>{minX=Math.min(minX,b.minX);minY=Math.min(minY,b.minY);maxX=Math.max(maxX,b.maxX);maxY=Math.max(maxY,b.maxY)});
  const pad=3;minX=Math.max(0,minX-pad);minY=Math.max(0,minY-pad);maxX=Math.min(S-1,maxX+pad);maxY=Math.min(S-1,maxY+pad);
  return {x:minX/S,y:minY/S,w:(maxX-minX+1)/S,h:(maxY-minY+1)/S};
}

async function loadItemArtImages(){
  const jobs=ALL_REWARD_ITEMS.map(item=>new Promise(resolve=>{
    const img=new Image();img.decoding='async';
    img.onload=()=>{
      itemArtImages[item.id]=img;
      itemArtBounds[item.id]=detectMainArtBounds(img);
      resolve(true)
    };
    img.onerror=()=>resolve(false);
    img.src=itemArtSrc(item.id);
  }));
  await Promise.all(jobs);
}

function drawEquippedArt(c,item,x,y,w,h,flip=false,alpha=1,rotation=0){
  const img=itemArtImages[item?.id];if(!img?.naturalWidth)return false;
  const b=itemArtBounds[item.id]||{x:0,y:0,w:1,h:1};
  const sx=b.x*img.naturalWidth,sy=b.y*img.naturalHeight,sw=b.w*img.naturalWidth,sh=b.h*img.naturalHeight;
  c.save();c.globalAlpha=alpha;c.translate(x,y);if(flip)c.scale(-1,1);if(rotation)c.rotate(rotation);
  c.drawImage(img,sx,sy,sw,sh,-w/2,-h,w,h);c.restore();return true;
}

// All sellable + legacy + GM exclusive items resolve to a body anchor.
// x is mirrored automatically for direction-aware slots.
const ITEM_EQUIP_ANCHORS={
  cap_blue:{slot:"head",x:0,y:-116,w:57,h:43},
  shirt_blue:{slot:"top",x:0,y:-35,w:61,h:78},
  sneaker_white:{slot:"shoes",x:0,y:1,w:51,h:25},
  thai_sash:{slot:"top",x:0,y:-36,w:62,h:77},
  round_glasses:{slot:"face",x:0,y:-89,w:42,h:21},
  student_bag:{slot:"back",x:-12,y:-31,w:62,h:76},
  code_tablet:{slot:"hand",x:39,y:-35,w:48,h:57},
  neon_headset:{slot:"head",x:0,y:-109,w:64,h:61},
  set2_cat_pet:{slot:"pet",x:-69,y:1,w:60,h:59},
  coder_jacket:{slot:"top",x:0,y:-34,w:66,h:80},

  set2_katana:{slot:"hand",x:43,y:-15,w:48,h:112},
  code_blade:{slot:"hand",x:43,y:-15,w:48,h:112},
  set2_mystic_staff:{slot:"hand",x:45,y:-8,w:50,h:123},
  spell_tome:{slot:"hand",x:40,y:-40,w:52,h:52},
  gold_crown:{slot:"head",x:0,y:-119,w:58,h:47},
  guardian_armor:{slot:"top",x:0,y:-33,w:69,h:82},
  royal_cape:{slot:"back",x:0,y:-23,w:77,h:104},
  monkey_pet:{slot:"pet",x:-70,y:1,w:62,h:61},
  gold_aura:{slot:"aura",x:0,y:-60,w:118,h:142},
  set2_wolf_pet:{slot:"pet",x:-72,y:1,w:67,h:64},

  set2_cyber_spear:{slot:"hand",x:45,y:-5,w:50,h:128},
  purple_sword:{slot:"hand",x:44,y:-12,w:49,h:116},
  gold_sword:{slot:"hand",x:44,y:-12,w:49,h:116},
  arcane_crown:{slot:"head",x:0,y:-120,w:61,h:49},
  dragon_wings:{slot:"back",x:0,y:-17,w:112,h:116},
  master_halo:{slot:"aura",x:0,y:-129,w:70,h:32},
  set2_tiger_pet:{slot:"pet",x:-74,y:1,w:71,h:66},
  phoenix_pet:{slot:"pet",x:-73,y:0,w:69,h:72},
  golden_dragon_pet:{slot:"pet",x:-76,y:0,w:76,h:72},
  throne_effect:{slot:"aura",x:0,y:5,w:122,h:137},

  set2_samurai_armor:{slot:"top",x:0,y:-32,w:70,h:83},
  set2_mage_robe:{slot:"top",x:0,y:-31,w:69,h:84},
  set2_dragon_armor:{slot:"top",x:0,y:-31,w:72,h:85},
  set2_mini_dragon:{slot:"pet",x:-74,y:0,w:72,h:69},
  set2_spirit_wings:{slot:"back",x:0,y:-17,w:111,h:116},
  set2_storm_aura:{slot:"aura",x:0,y:-59,w:119,h:143},

  gm_excalibur:{slot:"hand",x:44,y:-12,w:50,h:119},
  gm_little_ghost:{slot:"pet",x:-70,y:0,w:64,h:64}
};

function equipAnchor(item,direction="right"){
  const base=ITEM_EQUIP_ANCHORS[item?.id]||{slot:item?.slot||"",x:0,y:-35,w:58,h:65};
  const dir=direction==="left"?-1:1;
  let x=Number(base.x||0);
  if(["hand"].includes(base.slot))x=Math.abs(x)*dir;
  if(["pet"].includes(base.slot))x=-Math.abs(x)*dir;
  if(base.slot==="back"&&x)x=Math.abs(x)*(direction==="left"?1:-1);
  return {...base,x,flip:direction==="left"};
}
function drawAnchoredEquipment(c,item,direction,alpha=1){
  const a=equipAnchor(item,direction);
  return drawEquippedArt(c,item,a.x,a.y,a.w,a.h,a.flip,alpha,a.rotation||0);
}



let cssW=1,cssH=1,dpr=1,zoom=1;
let uid=null,profile=null,blocked=true;
let players=new Map(),messages=[],messagesByUid=new Map();
let teacherQuests=[...DEFAULT_TEACHER_QUESTS],questProgress={};
let positionsUnsub=null,messagesUnsub=null,moderationUnsub=null,rankingUnsub=null,questUnsub=null;
let heartbeat=null,clockTimer=null,expiryTimer=null;
let lastFrame=performance.now(),lastPositionSend=0,lastChatAt=0;
let cameraX=0,velocityX=0;
const me={x:450,y:WALK_Y,direction:"right",moving:false};
const keys=new Set();
const touch={left:false,right:false};
let nearbyAction=null;
let zoneShopGrade="all";

const GM_RANK={tierId:"master",tierName:"GAME MASTER",rating:999999};
const GM_ITEMS=GM_EXCLUSIVE_ITEMS;

const esc=v=>String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
function isGM(){return uid===ADMIN_UID}
function isGMPlayer(p){return p?.uid===ADMIN_UID||p?.isAdmin===true}
function isTouchOnly(){return window.matchMedia("(pointer: coarse)").matches&&window.innerWidth<=1180}
function equipped(character){return {...DEFAULT_CHARACTER.equipped,...(character?.equipped||{})}}
function itemById(id){return rewardItemById(id)}
function equippedItems(character){return Object.entries(equipped(character)).map(([slot,id])=>({slot,item:itemById(id)})).filter(x=>x.item)}
function rankMeta(rank={}){
  const id=String(rank.tierId||"bronze").toLowerCase();
  const map={bronze:{letter:"B",color:"#9a6b46"},silver:{letter:"S",color:"#84919c"},gold:{letter:"G",color:"#d5a21d"},platinum:{letter:"P",color:"#3b9c98"},diamond:{letter:"D",color:"#537bd2"},master:{letter:"M",color:"#7749b7"}};
  return {id,...(map[id]||map.bronze)};
}
function rankShieldHTML(rank){const r=rankMeta(rank);return `<span class="rank-shield rank-${r.id}"><span class="rank-shield-letter">${r.letter}</span></span>`}
function rr(c,x,y,w,h,r){c.beginPath();c.roundRect(x,y,w,h,r)}

function showGate(title,text,help=""){
  blocked=true;$("zoneApp").classList.add("hidden");$("zoneGate").classList.remove("hidden");
  $("zoneGateTitle").textContent=title;$("zoneGateText").textContent=text;
  if(help){$("zoneGateHelp").innerHTML=help;$("zoneGateHelp").classList.remove("hidden")}else $("zoneGateHelp").classList.add("hidden");
}
function hideGate(){blocked=false;$("zoneGate").classList.add("hidden");$("zoneApp").classList.remove("hidden")}
function chatStatus(text,error=false){$("zoneChatStatus").textContent=text;$("zoneChatStatus").classList.toggle("error",error)}
function connectionState(state,text){$("zoneConnectionBadge").dataset.state=state;$("zoneConnectionBadge").querySelector("strong").textContent=text}

function moderationState(m){
  const now=Date.now(),ban=m?.bannedUntil?.toDate?.(),kick=m?.kickedUntil?.toDate?.();
  return {banned:!!ban&&ban.getTime()>now,bannedUntil:ban,kicked:!!kick&&kick.getTime()>now,kickedUntil:kick};
}
async function checkModeration(){
  if(isGM())return true;
  try{
    const snap=await getDoc(doc(db,"zone_moderation",uid));
    if(!snap.exists())return true;
    const m=snap.data(),s=moderationState(m);
    if(s.banned){showGate("ถูกระงับการเข้า 2D Zone",`แบนถึง ${s.bannedUntil.toLocaleString("th-TH")}`);return false}
    if(s.kicked){showGate("ถูก GM เตะออกจาก 2D Zone",`กลับเข้าได้หลัง ${s.kickedUntil.toLocaleTimeString("th-TH")}`);return false}
    return true;
  }catch(error){showGate("ตรวจสอบสิทธิ์ Zone ไม่สำเร็จ",error.message||String(error),"กรุณา Publish firestore.rules V4.12.0");return false}
}
function listenModeration(){
  if(isGM())return;
  moderationUnsub?.();
  moderationUnsub=onSnapshot(doc(db,"zone_moderation",uid),snap=>{
    if(!snap.exists())return;
    const s=moderationState(snap.data());
    if(s.banned||s.kicked){stopRealtime();showGate(s.banned?"คุณถูก GM แบน":"คุณถูก GM เตะออก",s.banned?`แบนถึง ${s.bannedUntil.toLocaleString("th-TH")}`:`กลับเข้าได้หลัง ${s.kickedUntil.toLocaleTimeString("th-TH")}`)}
  });
}

async function loadProfile(){
  if(isGM()){
    const gmRef=doc(db,"gm_profiles",uid),snap=await getDoc(gmRef);
    const saved=snap.exists()?snap.data():{};
    const inv=[...new Set([...(Array.isArray(saved.inventory)?saved.inventory:[]),...GM_DEFAULT_INVENTORY])];
    profile={uid,studentId:"GM",fullName:"GM",rank:null,tokenBalance:Infinity,inventory:inv,
      character:{...DEFAULT_CHARACTER,...(saved.character||{}),gender:["male","female"].includes(saved.character?.gender)?saved.character.gender:"male",equipped:equipped(saved.character||{})},
      zone:saved.zone||{}};
    me.x=Math.max(WALK_LEFT,Math.min(WALK_RIGHT,Number(profile.zone?.x)||450));
    me.direction=profile.zone?.direction==="left"?"left":"right";
    await setDoc(gmRef,{uid,studentId:"GM",fullName:"GM",inventory:inv,character:profile.character,zone:profile.zone,updatedAt:serverTimestamp()},{merge:true});
    return true;
  }
  try{
    const snap=await getDoc(doc(db,"users",uid));if(!snap.exists()){showGate("ไม่พบ User","กรุณาลงทะเบียนใหม่");return false}
    profile={uid,...snap.data()};
    if(!["male","female"].includes(profile.character?.gender)){showGate("กรุณาเลือกตัวละครก่อน","กลับหน้า User แล้วเลือกชายหรือหญิง");return false}
    me.x=Math.max(WALK_LEFT,Math.min(WALK_RIGHT,Number(profile.zone?.x)||450));
    me.direction=profile.zone?.direction==="left"?"left":"right";
    return true;
  }catch(error){showGate("โหลดข้อมูล User ไม่สำเร็จ",error.message||String(error));return false}
}

async function saveGmProfile(){
  if(!isGM()||!profile)return;
  await setDoc(doc(db,"gm_profiles",uid),{
    uid,studentId:"GM",fullName:"GM",
    inventory:[...new Set(profile.inventory||[])],
    character:{...DEFAULT_CHARACTER,...profile.character,equipped:equipped(profile.character)},
    zone:profile.zone||{},
    updatedAt:serverTimestamp()
  },{merge:true});
}

async function syncPublicProfile(){
  try{
    const gm=isGM();
    await setDoc(doc(db,"public_profiles",uid),{
      uid,studentId:gm?"GM":profile.studentId,fullName:gm?"GM":profile.fullName,isAdmin:gm,role:gm?"GM":"USER",
      rank:gm?null:(profile.rank||null),
      character:{gender:profile.character?.gender||"male",equipped:equipped(profile.character)},
      updatedAt:serverTimestamp()
    },{merge:true});
  }catch(error){console.warn("profile sync",error)}
}
async function publishPresence(){
  try{
    await setDoc(doc(db,"presence",uid),{
      uid,studentId:isGM()?"GM":profile.studentId,isAdmin:isGM(),rank:isGM()?null:(profile.rank||null),
      area:"zone",online:true,lastSeenAt:serverTimestamp()
    },{merge:true});
  }catch(error){console.warn("presence",error)}
}
async function publishPosition(force=false){
  if(blocked||!profile)return;
  const now=performance.now();if(!force&&now-lastPositionSend<POSITION_SEND_MS)return;lastPositionSend=now;
  try{
    await setDoc(doc(db,"zone_positions",uid),{
      uid,studentId:isGM()?"GM":profile.studentId,isAdmin:isGM(),role:isGM()?"GM":"USER",
      rank:isGM()?null:(profile.rank||null),
      character:{gender:profile.character?.gender||"male",equipped:equipped(profile.character)},
      zoneId:ZONE_ID,x:Math.round(me.x*10)/10,y:WALK_Y,direction:me.direction,moving:me.moving,online:true,updatedAt:serverTimestamp()
    },{merge:true});
    connectionState("online","REALTIME");
  }catch(error){connectionState("error","SYNC ERROR");console.warn("position",error)}
}
function listenPositions(){
  positionsUnsub?.();
  positionsUnsub=onSnapshot(collection(db,"zone_positions"),snap=>{
    const now=Date.now(),seen=new Set();
    snap.docs.forEach(d=>{
      const p={uid:d.id,...d.data()};if(p.zoneId!==ZONE_ID||!p.online)return;
      const dt=p.updatedAt?.toDate?.();if(dt&&now-dt.getTime()>ONLINE_STALE_MS)return;
      seen.add(d.id);if(d.id===uid)return;
      const x=Number(p.x)||450,old=players.get(d.id);
      if(old)Object.assign(old,p,{targetX:x});
      else players.set(d.id,{...p,currentX:x,targetX:x});
    });
    for(const id of [...players.keys()])if(!seen.has(id))players.delete(id);
    $("zoneOnlineCount").textContent=players.size+1;
  },error=>{connectionState("error","FIREBASE ERROR");console.warn(error)});
}

function isChatVisible(m,now=Date.now()){
  if(m?.isGM===true||m?.uid===ADMIN_UID)return true;
  const dt=m?.createdAt?.toDate?.();return !!dt&&now-dt.getTime()<USER_CHAT_TTL_MS;
}
function refreshMessages(){
  const visible=messages.filter(m=>m.zoneId===ZONE_ID&&isChatVisible(m));
  const latest=new Map();for(const m of visible)if(!latest.has(m.uid))latest.set(m.uid,m);
  messagesByUid=latest;renderChatHistory(visible);
}
function listenMessages(){
  messagesUnsub?.();
  messagesUnsub=onSnapshot(query(collection(db,"zone_messages"),orderBy("createdAt","desc"),limit(120)),snap=>{
    messages=snap.docs.map(d=>({id:d.id,...d.data()}));refreshMessages();chatStatus("พร้อมพูดคุย");
  },error=>{chatStatus("โหลดแชตไม่สำเร็จ",true);console.warn(error)});
}
function renderChatHistory(rows=messages.filter(m=>m.zoneId===ZONE_ID&&isChatVisible(m))){
  $("zoneChatHistoryList").innerHTML=rows.slice(0,80).map(m=>{
    const gm=m.isGM||m.uid===ADMIN_UID,dt=m.createdAt?.toDate?.();
    return `<article class="zone47-chat-message ${gm?"gm":""}"><div class="zone47-chat-avatar">${gm?"GM":esc(String(m.studentId||"?").slice(-2))}</div><div><div class="zone47-chat-meta"><strong>${gm?"GM":esc(m.studentId||"USER")}</strong><time>${dt?dt.toLocaleString("th-TH"):"-"}</time></div><p>${esc(m.text||"")}</p></div></article>`;
  }).join("")||`<div class="empty">ยังไม่มีข้อความ</div>`;
}
async function archiveMessage(id,data){
  try{await setDoc(doc(db,"zone_chat_archive",id),{...data,messageId:id,createdAt:serverTimestamp(),archivedAt:serverTimestamp()})}catch(error){console.warn("archive",error)}
}
async function sendMessage(text){
  const clean=String(text||"").trim().slice(0,120);if(blocked||!clean)return;
  if(Date.now()-lastChatAt<700){chatStatus("ส่งเร็วเกินไป");return}lastChatAt=Date.now();
  const gm=isGM(),payload={uid,studentId:gm?"GM":profile.studentId,text:clean,zoneId:ZONE_ID,isGM:gm,createdAt:serverTimestamp()};
  if(!gm)payload.expiresAt=Timestamp.fromMillis(Date.now()+USER_CHAT_TTL_MS);
  try{
    const ref=doc(collection(db,"zone_messages"));await setDoc(ref,payload);
    archiveMessage(ref.id,{uid,studentId:gm?"GM":profile.studentId,text:clean,zoneId:ZONE_ID,isGM:gm});
    chatStatus("ส่งแล้ว");setTimeout(()=>chatStatus("พร้อมพูดคุย"),1000);
  }catch(error){chatStatus("ส่งไม่ได้ · ตรวจ Rules",true);console.warn(error)}
}
$("zoneChatForm").onsubmit=async e=>{e.preventDefault();const input=$("zoneChatInput"),text=input.value;if(!text.trim())return;input.value="";await sendMessage(text);input.focus({preventScroll:true})};
$("openZoneChatHistory").onclick=()=>{$("zoneChatHistoryModal").classList.remove("hidden");renderChatHistory()};
$("closeZoneChatHistory").onclick=()=>$("zoneChatHistoryModal").classList.add("hidden");

function questProgressRef(){return doc(db,"quest_progress",uid,"days",localDayKey())}
async function loadQuestProgress(){
  if(isGM()){questProgress={};return}
  try{const snap=await getDoc(questProgressRef());questProgress=snap.exists()?snap.data():{}}catch(error){console.warn("quest progress",error);questProgress={}}
}
function listenTeacherQuests(){
  questUnsub?.();
  questUnsub=onSnapshot(collection(db,"teacher_quests"),snap=>{
    teacherQuests=snap.empty?[...DEFAULT_TEACHER_QUESTS]:snap.docs.map(d=>({id:d.id,...d.data()})).filter(q=>q.active!==false);
    renderQuestModal();
  },error=>{console.warn("teacher quests",error);teacherQuests=[...DEFAULT_TEACHER_QUESTS];renderQuestModal()});
}
function acceptedMap(){return questProgress.accepted||{}}
function completedMap(){return questProgress.completed||{}}
function activeAcceptedCount(){return Object.values(acceptedMap()).filter(x=>x?.status==="accepted").length}
function acceptedTodayCount(){return Object.keys(acceptedMap()).length}
function renderQuestModal(){
  if(!profile||!$("zoneQuestList"))return;
  const rank=isGM()?GM_RANK:(profile.rank||{}),daily=acceptedTodayCount(),activeNow=activeAcceptedCount(),activeLimit=activeQuestLimit(rank);
  $("questRankLabel").textContent=isGM()?"GM":(rank.tierName||"Bronze");
  $("questDailyCount").textContent=`${daily} / ${QUEST_CONFIG.dailyLimit}`;
  $("questActiveLimit").textContent=activeLimit;
  $("zoneQuestList").innerHTML=teacherQuests.map(q=>{
    const accepted=acceptedMap()[q.id],completed=completedMap()[q.id]||accepted?.status==="completed";
    const rankOk=isGM()||canAccessQuest(rank,q),reward=clampQuestReward(q.difficulty,q.rewardToken);
    let action="";
    if(isGM())action=`<button class="btn ghost" disabled>GM ดูภารกิจ</button>`;
    else if(completed)action=`<button class="btn ghost" disabled>สำเร็จแล้ว ✓</button>`;
    else if(accepted)action=isTouchOnly()
      ?`<button class="btn secondary" disabled>รับแล้ว · ทำบนคอม</button>`
      :`<button class="btn primary" data-start-quest="${esc(q.id)}">เริ่มทำภารกิจ</button>`;
    else if(!rankOk)action=`<button class="btn ghost" disabled>ต้อง Rank ${esc(q.minRank||"สูงกว่า")}</button>`;
    else if(daily>=QUEST_CONFIG.dailyLimit)action=`<button class="btn ghost" disabled>ครบ 3 ภารกิจวันนี้</button>`;
    else if(activeNow>=activeLimit)action=`<button class="btn ghost" disabled>ทำภารกิจที่รับไว้ก่อน</button>`;
    else action=`<button class="btn primary" data-accept-quest="${esc(q.id)}">รับภารกิจ</button>`;
    return `<article class="zone47-quest-item difficulty-${esc(q.difficulty)} ${completed?"completed":!rankOk?"locked":""}">
      <div class="zone47-quest-icon">${q.languageId==="python"?"🐍":"🌐"}</div>
      <div class="zone47-quest-main">
        <div class="zone47-quest-title"><strong>${esc(q.title)}</strong><span>${questDifficultyName(q.difficulty)}</span></div>
        <p>${esc(q.description||"")}</p>
        <div class="zone47-quest-tags"><span>${esc(String(q.languageId).toUpperCase())} Stage ${Number(q.stage)}</span><span>${esc(questObjectiveLabel(q))}</span><span>Rank ≥ ${esc(q.minRank||"bronze")}</span></div>
      </div>
      <div class="zone47-quest-reward"><strong>+${reward}</strong><span>Token</span>${action}</div>
    </article>`;
  }).join("")||`<div class="empty">ยังไม่มีภารกิจ</div>`;
  document.querySelectorAll("[data-accept-quest]").forEach(btn=>btn.onclick=()=>acceptQuest(btn.dataset.acceptQuest));
  document.querySelectorAll("[data-start-quest]").forEach(btn=>btn.onclick=()=>startQuest(btn.dataset.startQuest));
}
async function acceptQuest(id){
  if(isGM())return;
  const q=teacherQuests.find(x=>x.id===id);if(!q)return;
  if(!canAccessQuest(profile.rank,q))return;
  try{
    await runTransaction(db,async tx=>{
      const ref=questProgressRef(),snap=await tx.get(ref),data=snap.exists()?snap.data():{};
      const accepted={...(data.accepted||{})},completed={...(data.completed||{})};
      if(accepted[id]||completed[id])return;
      if(Object.keys(accepted).length>=QUEST_CONFIG.dailyLimit)throw new Error("วันนี้รับครบ 3 ภารกิจแล้ว");
      const activeNow=Object.values(accepted).filter(x=>x?.status==="accepted").length;
      if(activeNow>=activeQuestLimit(profile.rank))throw new Error("ทำภารกิจที่รับอยู่ให้เสร็จก่อน");
      accepted[id]={status:"accepted",acceptedAt:new Date().toISOString(),questTitle:q.title};
      tx.set(ref,{uid,studentId:profile.studentId,dateKey:localDayKey(),accepted,completed,updatedAt:serverTimestamp()},{merge:true});
    });
    await loadQuestProgress();renderQuestModal();
    if(!isTouchOnly())startQuest(id);
  }catch(error){alert(error.message||String(error))}
}
function startQuest(id){
  const q=teacherQuests.find(x=>x.id===id)||DEFAULT_TEACHER_QUESTS.find(x=>x.id===id);if(!q)return;
  if(isTouchOnly()){alert("รับภารกิจแล้ว กรุณาเปิดบัญชีนี้บนคอมพิวเตอร์เพื่อทำภารกิจ");return}
  if(postToStudentShell("NR_ZONE_QUEST",{questId:id}))return;
  location.href=`./index.html?quest=${encodeURIComponent(id)}&v=4.12.0`;
}
$("openWizardQuests").onclick=async()=>{await loadQuestProgress();renderQuestModal();$("zoneQuestModal").classList.remove("hidden")};
$("closeWizardQuests").onclick=()=>$("zoneQuestModal").classList.add("hidden");

function zoneItemStatsMarkup(item,compact=false){
  const s=itemStats(item);
  const chips=ITEM_STAT_KEYS.filter(k=>s[k]>0).map(k=>`<span><b>+${s[k]}</b> ${esc(ITEM_STAT_LABELS[k])}</span>`).join("");
  return `<div class="zone47-item-stats ${compact?"compact":""}">${chips}</div><div class="zone47-item-power"><span>POWER</span><strong>${itemPower(item)}</strong></div>`;
}
function zoneShopItemCard(item,owned,wearing,balance){
  const own=owned.has(item.id),on=wearing.has(item.id),sell=sellBackValue(item);
  const full=!isGM()&&!own&&owned.size>=INVENTORY_LIMIT;
  const art=shopArtForItem(item);
  return `<article class="zone47-shop-item rarity-${esc(item.rarity)} ${on?'wearing':''}" data-shop-catalog-id="${esc(item.id)}">
    <div class="zone47-shop-rarity">${esc(RARITY_META[item.rarity]?.name||item.rarity)} · ${esc(RARITY_META[item.rarity]?.short||"")}</div>
    <div class="zone47-shop-icon zone47-shop-real-art">
      <img src="${art}" alt="${esc(item.name)}" loading="lazy">
      <span>${item.icon}</span>
    </div>
    <strong>${esc(item.name)}</strong>
    <small>${esc(item.description)}</small>
    <div class="zone47-shop-slot">SLOT · ${esc(item.slot.toUpperCase())}</div>
    ${zoneItemStatsMarkup(item)}
    <em>${Number(item.cost).toLocaleString()} Token</em>
    <div class="zone47-shop-actions">
      <button class="btn ${on?'ghost':own?'secondary':'primary'}" data-shop-item="${esc(item.id)}" ${!own&&(balance<item.cost||full)?'disabled':''}>${on?'ถอด':own?'สวมใส่':isGM()?'รับเข้ากระเป๋า GM':full?'กระเป๋าเต็ม':balance<item.cost?'Token ไม่พอ':'แลกไอเท็ม'}</button>
      ${own&&!isGM()?`<button class="btn danger-soft" data-zone-sell-item="${esc(item.id)}" type="button">ขายคืน ${sell.toLocaleString()}</button>`:''}
    </div>
  </article>`;
}
function zoneShopGradeSection(grade,items,owned,wearing,balance){
  const meta=RARITY_META[grade]||{name:grade,short:""};
  const expected=Number(SHOP_EXPECTED_COUNTS[grade]||items.length);
  return `<section class="zone47-shop-grade-section grade-${esc(grade)}">
    <div class="zone47-shop-grade-head">
      <div><span>${esc(meta.short||grade.toUpperCase())}</span><strong>${esc(meta.name||grade)}</strong></div>
      <b>${items.length}/${expected} ไอเท็ม</b>
    </div>
    <div class="zone47-shop-grade-grid">
      ${items.map(item=>zoneShopItemCard(item,owned,wearing,balance)).join("")}
    </div>
  </section>`;
}
function renderShop(){
  if(!profile)return;
  const owned=new Set(profile.inventory||[]);
  const eq=equipped(profile.character);
  const wearing=new Set(Object.values(eq).filter(Boolean));
  const balance=isGM()?Infinity:Number(profile.tokenBalance||0);

  $('zoneTokenBalance').textContent=isGM()?'∞':balance.toLocaleString();
  $('zoneShopBalance').textContent=isGM()?'∞':balance.toLocaleString();
  if($('zoneShopInventory'))$('zoneShopInventory').textContent=isGM()?`กระเป๋า ${owned.size}/∞`:`กระเป๋า ${owned.size}/${INVENTORY_LIMIT}`;
  if($('zoneBackpackMini'))$('zoneBackpackMini').textContent=isGM()?`${owned.size}/∞`:`${owned.size}/${INVENTORY_LIMIT}`;

  const summary=shopCatalogSummary();
  const complete=shopCatalogComplete()
    && REWARD_ITEMS.every(item=>!!shopArtForItem(item))
    && new Set(REWARD_ITEMS.map(item=>item.id)).size===SHOP_EXPECTED_COUNTS.total;

  if($("zoneShopCatalogStatus")){
    $("zoneShopCatalogStatus").textContent=complete
      ?`✅ พร้อมขายครบ ${summary.total}/${SHOP_EXPECTED_COUNTS.total} ชิ้น`
      :`⚠️ Catalog ไม่ครบ (${summary.total}/${SHOP_EXPECTED_COUNTS.total})`;
    $("zoneShopCatalogStatus").classList.toggle("ok",complete);
    $("zoneShopCatalogStatus").classList.toggle("bad",!complete);
  }

  const sorted=[...REWARD_ITEMS].sort((a,b)=>
    (RARITY_META[a.rarity]?.order||0)-(RARITY_META[b.rarity]?.order||0)
    || a.cost-b.cost
    || String(a.name).localeCompare(String(b.name),"th")
  );

  if(zoneShopGrade==="all"){
    $("zoneShopGrid").innerHTML=SHOP_GRADE_ORDER.map(grade=>{
      const group=sorted.filter(item=>item.rarity===grade);
      return zoneShopGradeSection(grade,group,owned,wearing,balance);
    }).join("");
  }else{
    const group=sorted.filter(item=>item.rarity===zoneShopGrade);
    $("zoneShopGrid").innerHTML=zoneShopGradeSection(zoneShopGrade,group,owned,wearing,balance);
  }

  document.querySelectorAll('[data-shop-item]:not([disabled])').forEach(btn=>btn.onclick=()=>handleShopItem(btn.dataset.shopItem));
  document.querySelectorAll('[data-zone-sell-item]').forEach(btn=>btn.onclick=()=>sellZoneItem(btn.dataset.zoneSellItem));
  renderBackpack();
}
async function refreshProfile(){
  if(isGM()){await loadProfile();renderShop();renderBackpack();await syncPublicProfile();await publishPosition(true);return;}
  const snap=await getDoc(doc(db,"users",uid));if(snap.exists())profile={uid,...snap.data()};
  renderShop();await syncPublicProfile();await publishPosition(true);
}
async function handleShopItem(id){
  const item=itemById(id);if(!item)return;
  if(isGM()){
    const inv=Array.isArray(profile.inventory)?[...profile.inventory]:[];
    if(!inv.includes(id)){profile.inventory=[...inv,id];await saveGmProfile();await refreshProfile();return;}
    const current=equipped(profile.character);current[item.slot]=current[item.slot]===id?null:id;
    profile.character={...DEFAULT_CHARACTER,...profile.character,equipped:current};
    await saveGmProfile();await refreshProfile();return;
  }
  const userRef=doc(db,"users",uid),owned=(profile.inventory||[]).includes(id);
  if(!owned){
    try{
      await runTransaction(db,async tx=>{
        const snap=await tx.get(userRef);if(!snap.exists())throw new Error("ไม่พบ User");
        const d=snap.data(),balance=Number(d.tokenBalance||0),inv=Array.isArray(d.inventory)?d.inventory:[];
        if(inv.includes(id))return;if(inv.length>=INVENTORY_LIMIT)throw new Error(`กระเป๋าเต็ม ${INVENTORY_LIMIT} ไอเท็ม`);if(balance<item.cost)throw new Error("Token ไม่พอ");
        tx.update(userRef,{tokenBalance:balance-item.cost,inventory:[...inv,id],updatedAt:serverTimestamp()});
      });await refreshProfile();
    }catch(error){alert(error.message)}return;
  }
  const current=equipped(profile.character);current[item.slot]=current[item.slot]===id?null:id;
  await updateDoc(userRef,{character:{...DEFAULT_CHARACTER,...profile.character,equipped:current},updatedAt:serverTimestamp()});
  await refreshProfile();
}
async function sellZoneItem(id){
  if(isGM())return;const item=itemById(id);if(!item)return;
  if(!confirm(`ขาย ${item.name} คืนร้าน ${sellBackValue(item).toLocaleString()} Token?`))return;
  const userRef=doc(db,'users',uid);
  try{
    await runTransaction(db,async tx=>{
      const snap=await tx.get(userRef);if(!snap.exists())throw new Error('ไม่พบ User');
      const d=snap.data(),inv=Array.isArray(d.inventory)?d.inventory:[];if(!inv.includes(id))return;
      const eq={...DEFAULT_CHARACTER.equipped,...(d.character?.equipped||{})};Object.keys(eq).forEach(slot=>{if(eq[slot]===id)eq[slot]=null});
      tx.update(userRef,{tokenBalance:Number(d.tokenBalance||0)+sellBackValue(item),inventory:inv.filter(x=>x!==id),character:{...DEFAULT_CHARACTER,...(d.character||{}),equipped:eq},updatedAt:serverTimestamp()});
    });await refreshProfile();
  }catch(error){alert(error.message||String(error))}
}


function renderBackpack(){
  if(!profile||!$("zoneBackpackGrid"))return;
  const inv=Array.isArray(profile.inventory)?profile.inventory:[];
  const eq=equipped(profile.character),wearing=new Set(Object.values(eq).filter(Boolean));
  const ownedItems=inv.map(id=>itemById(id)).filter(Boolean);
  const over=!isGM()&&inv.length>INVENTORY_LIMIT;

  $("zoneBackpackCapacity").textContent=isGM()?`${inv.length}/∞`:`${inv.length}/${INVENTORY_LIMIT}`;
  $("zoneBackpackState").textContent=isGM()?"GM · กระเป๋าไม่จำกัด":over
    ?`เกินความจุจากข้อมูลเวอร์ชันเดิม ${inv.length-INVENTORY_LIMIT} ชิ้น · ขายออกก่อนซื้อเพิ่ม`
    :inv.length>=INVENTORY_LIMIT?"กระเป๋าเต็ม":"เหลือ "+(INVENTORY_LIMIT-inv.length)+" ช่อง";
  if($("zoneBackpackMini"))$("zoneBackpackMini").textContent=isGM()?`${inv.length}/∞`:`${inv.length}/${INVENTORY_LIMIT}`;

  const html=ownedItems.map((item,index)=>{
    const on=wearing.has(item.id);
    const legacy=LEGACY_REWARD_ITEMS.some(x=>x.id===item.id),gmOnly=GM_EXCLUSIVE_ITEMS.some(x=>x.id===item.id);
    return `<article class="zone47-backpack-slot filled rarity-${esc(item.rarity)}">
      <div class="zone47-backpack-no">${String(index+1).padStart(2,"0")}</div>
      <div class="zone47-backpack-art"><img src="${shopArtForItem(item)}" alt="${esc(item.name)}"></div>
      <div class="zone47-backpack-info">
        <span>${gmOnly?"GM EXCLUSIVE · ":legacy?"LEGACY · ":""}${esc(RARITY_META[item.rarity]?.name||item.rarity)} · ${esc(item.slot.toUpperCase())}</span>
        <strong>${esc(item.name)}</strong>
        ${zoneItemStatsMarkup(item,true)}
      </div>
      <div class="zone47-backpack-actions">
        <button class="btn ${on?'ghost':'secondary'}" data-bag-equip="${esc(item.id)}" type="button">${on?'ถอด':'สวมใส่'}</button>
        ${!isGM()?`<button class="btn danger-soft" data-bag-sell="${esc(item.id)}" type="button">ขาย ${sellBackValue(item).toLocaleString()}</button>`:""}
      </div>
      ${on?'<b class="zone47-wearing-badge">กำลังสวม</b>':''}
    </article>`;
  }).join("");

  const emptyCount=isGM()?0:Math.max(0,INVENTORY_LIMIT-inv.length);
  const empties=Array.from({length:emptyCount},(_,i)=>`<article class="zone47-backpack-slot empty">
    <div class="zone47-backpack-no">${String(inv.length+i+1).padStart(2,"0")}</div>
    <div class="zone47-backpack-empty">＋<small>EMPTY SLOT</small></div>
  </article>`).join("");

  $("zoneBackpackGrid").innerHTML=html+empties;
  document.querySelectorAll("[data-bag-equip]").forEach(btn=>btn.onclick=async()=>{await handleShopItem(btn.dataset.bagEquip);renderBackpack();});
  document.querySelectorAll("[data-bag-sell]").forEach(btn=>btn.onclick=async()=>{await sellZoneItem(btn.dataset.bagSell);renderBackpack();});
}
document.querySelectorAll("[data-zone-grade]").forEach(btn=>{
  btn.onclick=()=>{
    zoneShopGrade=btn.dataset.zoneGrade||"all";
    document.querySelectorAll("[data-zone-grade]").forEach(x=>x.classList.toggle("active",x===btn));
    renderShop();
  };
});
$("openZoneBackpack").onclick=()=>{
  renderBackpack();$("zoneBackpackModal").classList.remove("hidden");
};
$("closeZoneBackpack").onclick=()=>$("zoneBackpackModal").classList.add("hidden");

$("openZoneShop").onclick=()=>{renderShop();$("zoneShopModal").classList.remove("hidden")};
$("closeZoneShop").onclick=()=>$("zoneShopModal").classList.add("hidden");

function targetDirection(){
  const left=touch.left||keys.has("a")||keys.has("arrowleft"),right=touch.right||keys.has("d")||keys.has("arrowright");
  return (right?1:0)-(left?1:0);
}
function updateMovement(dt){
  if(blocked)return;
  const dir=targetDirection(),target=dir*PLAYER_MAX_SPEED;
  const rate=dir===0?DECELERATION:ACCELERATION;
  if(velocityX<target)velocityX=Math.min(target,velocityX+rate*dt);
  else if(velocityX>target)velocityX=Math.max(target,velocityX-rate*dt);
  if(Math.abs(velocityX)<2&&dir===0)velocityX=0;
  me.moving=Math.abs(velocityX)>5;
  if(dir<0)me.direction="left";else if(dir>0)me.direction="right";
  me.x=Math.max(WALK_LEFT,Math.min(WALK_RIGHT,me.x+velocityX*dt));
  if(me.x===WALK_LEFT||me.x===WALK_RIGHT)velocityX=0;
  if(me.moving)publishPosition(false);
  updateNearbyAction();
}
function smoothRemote(dt){
  const f=1-Math.pow(0.0007,dt);
  for(const p of players.values())p.currentX+=(p.targetX-p.currentX)*f;
}
function bindHold(id,dir){
  const el=$(id);el.style.touchAction="none";
  el.onpointerdown=e=>{e.preventDefault();touch[dir]=true;el.setPointerCapture?.(e.pointerId)};
  const stop=()=>{touch[dir]=false;publishPosition(true)};
  ["pointerup","pointercancel","pointerleave","lostpointercapture"].forEach(ev=>el.addEventListener(ev,stop));
}
bindHold("moveLeftButton","left");bindHold("moveRightButton","right");
window.addEventListener("keydown",e=>{
  if(document.activeElement===$("zoneChatInput"))return;
  const k=e.key.toLowerCase();
  if(["a","d","arrowleft","arrowright"].includes(k)){e.preventDefault();keys.add(k)}
  if(k==="enter")$("zoneChatInput").focus({preventScroll:true});
  if(k==="e"&&nearbyAction){e.preventDefault();triggerNearbyAction()}
});
window.addEventListener("keyup",e=>{const k=e.key.toLowerCase();keys.delete(k);if(["a","d","arrowleft","arrowright"].includes(k))publishPosition(true)});

function updateNearbyAction(){
  const dw=Math.abs(me.x-WIZARD_X),ds=Math.abs(me.x-SHOP_X);
  nearbyAction=dw<INTERACT_DISTANCE?"wizard":ds<INTERACT_DISTANCE?"shop":null;
  const btn=$("zoneNearbyAction");
  if(!nearbyAction){btn.classList.add("hidden");return}
  btn.classList.remove("hidden");
  btn.textContent=nearbyAction==="wizard"?"E · 🧙 รับภารกิจ":"E · 🛒 เปิดร้านค้า";
}
function triggerNearbyAction(){nearbyAction==="wizard"?$("openWizardQuests").click():nearbyAction==="shop"?$("openZoneShop").click():null}
$("zoneNearbyAction").onclick=triggerNearbyAction;

function resizeCanvas(){
  const r=canvas.getBoundingClientRect();cssW=Math.max(1,r.width);cssH=Math.max(1,r.height);dpr=Math.min(2.5,window.devicePixelRatio||1);
  canvas.width=Math.round(cssW*dpr);canvas.height=Math.round(cssH*dpr);zoom=Math.max(.7,Math.min(1.18,cssH/850));ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality="high";
}
function updateCamera(dt){
  const viewW=cssW/zoom,target=Math.max(0,Math.min(WORLD.width-viewW,me.x-viewW/2));
  const f=1-Math.pow(0.00025,dt);cameraX+=(target-cameraX)*f;
}
function screenToWorld(clientX,clientY){const r=canvas.getBoundingClientRect();return {x:(clientX-r.left)/zoom+cameraX,y:(clientY-r.top)/zoom}}

function worldTimeState(now=Date.now()){
  const block=Math.floor(now/DAY_NIGHT_MS),day=block%2===0,next=(block+1)*DAY_NIGHT_MS;
  return {day,label:day?"กลางวัน":"กลางคืน",icon:day?"☀️":"🌙",remaining:next-now};
}
function countdown(ms){const s=Math.max(0,Math.floor(ms/1000));return `${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s%3600/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
function updateClock(){const t=worldTimeState();$("zoneWorldPeriod").textContent=t.label;$("zoneWorldCountdown").textContent=`เปลี่ยนใน ${countdown(t.remaining)}`;$("zoneWorldIcon").textContent=t.icon}

function drawTree(x,y,day){
  ctx.fillStyle=day?"#684927":"#3e3023";ctx.fillRect(x-9,y,18,70);ctx.fillStyle=day?"#3f8d4f":"#194b39";
  for(const [ox,oy,r] of [[0,-15,45],[-28,8,34],[29,10,36],[0,26,38]]){ctx.beginPath();ctx.arc(x+ox,y+oy,r,0,Math.PI*2);ctx.fill()}
}
function drawHouse(x,y,w,h,roof,wall,day,label=""){
  ctx.fillStyle="rgba(0,0,0,.16)";rr(ctx,x+10,y+h-4,w,16,8);ctx.fill();ctx.fillStyle=wall;rr(ctx,x,y+65,w,h-65,10);ctx.fill();
  ctx.fillStyle=roof;ctx.beginPath();ctx.moveTo(x-22,y+80);ctx.lineTo(x+w/2,y);ctx.lineTo(x+w+22,y+80);ctx.lineTo(x+w,y+105);ctx.lineTo(x,y+105);ctx.closePath();ctx.fill();
  ctx.fillStyle=day?"#9bd2e9":"#ffd16f";for(let i=0;i<3;i++){rr(ctx,x+35+i*(w-105)/2,y+122,44,46,4);ctx.fill()}
  ctx.fillStyle="#4c3426";rr(ctx,x+w/2-26,y+h-67,52,67,4);ctx.fill();
  if(label){ctx.fillStyle="rgba(14,33,43,.85)";rr(ctx,x+w/2-80,y+h-105,160,28,8);ctx.fill();ctx.fillStyle="#fff2b4";ctx.font="800 14px system-ui";ctx.textAlign="center";ctx.fillText(label,x+w/2,y+h-86)}
}
function drawWizard(x,y,now){
  const bob=Math.sin(now/350)*3;ctx.save();ctx.translate(x,y+bob);
  ctx.fillStyle="rgba(125,76,190,.18)";ctx.beginPath();ctx.arc(0,-32,64,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="#49306c";ctx.beginPath();ctx.moveTo(-42,28);ctx.lineTo(-25,-58);ctx.lineTo(25,-58);ctx.lineTo(44,28);ctx.closePath();ctx.fill();
  ctx.fillStyle="#efd0ac";ctx.beginPath();ctx.arc(0,-70,22,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="#5f3c89";ctx.beginPath();ctx.moveTo(-33,-86);ctx.lineTo(4,-132);ctx.lineTo(31,-86);ctx.closePath();ctx.fill();ctx.fillRect(-36,-91,72,9);
  ctx.strokeStyle="#9c713b";ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(38,-47);ctx.lineTo(58,35);ctx.stroke();ctx.fillStyle="#70ddff";ctx.beginPath();ctx.arc(36,-51,10,0,Math.PI*2);ctx.fill();
  ctx.fillStyle="rgba(31,23,47,.88)";rr(ctx,-76,-165,152,29,8);ctx.fill();ctx.fillStyle="#fff";ctx.font="800 13px system-ui";ctx.textAlign="center";ctx.fillText("🧙 พ่อมดภารกิจ",0,-146);
  ctx.restore();
}
function drawShop(x,y,day){
  ctx.save();ctx.translate(x,y);ctx.fillStyle="#5a3d29";rr(ctx,-155,-120,310,145,10);ctx.fill();
  ctx.fillStyle="#d65443";ctx.beginPath();ctx.moveTo(-175,-118);ctx.lineTo(-145,-160);ctx.lineTo(145,-160);ctx.lineTo(175,-118);ctx.closePath();ctx.fill();
  ctx.fillStyle="#f5e6c3";for(let i=0;i<6;i++)ctx.fillRect(-135+i*48,-155,24,35);
  ctx.fillStyle="#b87931";ctx.fillRect(-135,-45,270,25);
  ["#e0ae3c","#67a95a","#b75fb5","#54a6c7"].forEach((c,i)=>{ctx.fillStyle=c;ctx.beginPath();ctx.arc(-90+i*60,-58,18,0,Math.PI*2);ctx.fill()});
  ctx.fillStyle=day?"#173b4e":"#fff0a5";ctx.font="900 17px system-ui";ctx.textAlign="center";ctx.fillText("TOKEN SHOP",0,-88);
  ctx.restore();
}
function drawArtSprite(c,img,x,y,w,h,flip=false,alpha=1){
  if(!img?.complete||!img.naturalWidth)return false;
  c.save();c.globalAlpha=alpha;c.translate(x,y);if(flip)c.scale(-1,1);
  c.drawImage(img,-w/2,-h,w,h);c.restore();return true;
}
function drawNpcLabel(c,x,y,label,accent="#2f6f98"){
  c.save();c.font="800 13px system-ui";c.textAlign="center";
  const w=Math.max(126,c.measureText(label).width+28);
  c.fillStyle="rgba(12,31,43,.90)";rr(c,x-w/2,y,w,30,9);c.fill();
  c.strokeStyle=accent;c.lineWidth=2;c.stroke();c.fillStyle="#fff5cc";c.fillText(label,x,y+20);c.restore();
}
function drawZoneNpc(now){
  const bob=Math.sin(now/330)*2.3;
  const wiz=zoneArt.wizardIdle;
  drawArtSprite(ctx,wiz,WIZARD_X,WALK_Y+bob,135,153,false,1);
  drawNpcLabel(ctx,WIZARD_X,WALK_Y-184,"พ่อมดภารกิจ","#7b5ab6");

  const merchant=zoneArt.merchantIdle;
  drawArtSprite(ctx,merchant,SHOP_X-85,WALK_Y,128,145,false,1);
  drawNpcLabel(ctx,SHOP_X-85,WALK_Y-171,"พ่อค้า Token","#c59835");
}
function drawWorld(now){
  const t=worldTimeState(),day=t.day;
  if(zoneArt.world?.complete&&zoneArt.world.naturalWidth){
    ctx.drawImage(zoneArt.world,0,0,WORLD.width,WORLD.height);
  }else{
    // V4.12.0 intentionally does not draw the old primitive scene.
    ctx.fillStyle="#102c3d";
    ctx.fillRect(0,0,WORLD.width,WORLD.height);
  }
  if(!day){
    ctx.fillStyle="rgba(5,20,45,.48)";ctx.fillRect(0,0,WORLD.width,WORLD.height);
    ctx.fillStyle="rgba(235,245,255,.9)";ctx.beginPath();ctx.arc(2450,120,42,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="rgba(255,255,255,.65)";for(let i=0;i<42;i++)ctx.fillRect((i*211)%WORLD.width,40+(i*91)%280,2,2);
  }
  // Walk-lane highlight stays subtle so the illustrated environment remains visible.
  const lane=ctx.createLinearGradient(0,710,0,950);lane.addColorStop(0,"rgba(255,255,255,0)");lane.addColorStop(1,day?"rgba(255,238,196,.08)":"rgba(89,133,160,.08)");ctx.fillStyle=lane;ctx.fillRect(0,690,WORLD.width,280);
  drawZoneNpc(now);
}
function itemColor(item){const key=String(item?.visual||item?.id||"");let h=0;for(const ch of key)h=(h*31+ch.charCodeAt(0))%360;return `hsl(${h} 48% 45%)`}
function drawRankShield(c,x,y,rank){const r=rankMeta(rank);c.save();c.translate(x,y);c.fillStyle=r.color;c.beginPath();c.moveTo(-10,-8);c.lineTo(10,-8);c.lineTo(8,7);c.lineTo(0,14);c.lineTo(-8,7);c.closePath();c.fill();c.fillStyle="#fff";c.font="900 9px system-ui";c.textAlign="center";c.fillText(r.letter,0,3);c.restore()}
function drawName(c,p,gm){
  const label=gm?"GM":String(p.studentId||"USER");c.font="800 14px system-ui";const w=Math.max(gm?76:105,c.measureText(label).width+45);
  const barY=-188;
  c.fillStyle="rgba(9,28,39,.90)";rr(c,-w/2,barY,w,29,8);c.fill();c.strokeStyle=gm?"#f1c75a":"rgba(255,255,255,.16)";c.lineWidth=2;c.stroke();
  c.fillStyle="#fff";c.textAlign="center";c.fillText(label,0,barY+19);
  if(!gm)drawRankShield(c,-w/2+16,barY+13,p.rank);
  drawBubble(c,p,barY);
}
function drawBubble(c,p,barY=-188){
  const m=messagesByUid.get(p.uid);if(!m?.text)return;const dt=m.createdAt?.toDate?.();if(dt&&Date.now()-dt.getTime()>BUBBLE_MS)return;
  const text=String(m.text),lines=[];c.font="600 14px system-ui";let line="";for(const ch of [...text]){const t=line+ch;if(c.measureText(t).width>220&&line){lines.push(line);line=ch}else line=t}if(line)lines.push(line);
  const show=lines.slice(0,3),bw=Math.max(110,Math.min(245,Math.max(...show.map(x=>c.measureText(x).width))+25)),bh=17+show.length*20,by=barY-13-bh;
  c.fillStyle=p.isAdmin?"#fff3c9":"rgba(255,255,255,.97)";rr(c,-bw/2,by,bw,bh,12);c.fill();c.strokeStyle="rgba(35,55,68,.18)";c.stroke();c.fillStyle="#17364a";c.textAlign="center";show.forEach((ln,i)=>c.fillText(ln,0,by+23+i*20));
}
function drawEquipmentBehind(c,p,now){
  const eq=equipped(p.character||{}),aura=itemById(eq.aura),back=itemById(eq.back);

  // Aura items are effects/scene attachments, not floating shop icons.
  if(aura){
    if(aura.id==="gold_aura"){
      c.save();c.globalAlpha=.34;c.strokeStyle="#f2bd36";c.shadowColor="#ffd75b";c.shadowBlur=13;c.lineWidth=5;
      c.beginPath();c.ellipse(0,-61,55,84,0,0,Math.PI*2);c.stroke();c.restore();
    }else if(aura.id==="set2_storm_aura"){
      c.save();c.globalAlpha=.55;c.strokeStyle="#6fd9ff";c.shadowColor="#61cfff";c.shadowBlur=10;c.lineWidth=3;
      for(let i=0;i<3;i++){const x=-42+i*42;c.beginPath();c.moveTo(x,-118);c.lineTo(x+12,-87);c.lineTo(x-2,-61);c.lineTo(x+13,-30);c.stroke()}
      c.restore();
    }else if(aura.id==="throne_effect"){
      drawAnchoredEquipment(c,aura,p.direction,.82);
    }else if(aura.id==="master_halo"){
      drawAnchoredEquipment(c,aura,p.direction,.94);
    }else{
      drawAnchoredEquipment(c,aura,p.direction,.72);
    }
  }
  if(back)drawAnchoredEquipment(c,back,p.direction,.94);
}
function drawEquipmentFront(c,p,now){
  const eq=equipped(p.character||{});
  const head=itemById(eq.head),face=itemById(eq.face),top=itemById(eq.top),shoes=itemById(eq.shoes),hand=itemById(eq.hand),pet=itemById(eq.pet);

  // Body-worn equipment is locked to its body anchor.
  if(top)drawAnchoredEquipment(c,top,p.direction,.96);
  if(head)drawAnchoredEquipment(c,head,p.direction,.98);
  if(face)drawAnchoredEquipment(c,face,p.direction,1);
  if(shoes)drawAnchoredEquipment(c,shoes,p.direction,.98);
  if(hand)drawAnchoredEquipment(c,hand,p.direction,1);

  // Pets stand/follow at ground level. No bobbing "floating item" behavior.
  if(pet)drawAnchoredEquipment(c,pet,p.direction,1);
}
function playerArtImage(p,now){
  const gender=p?.character?.gender==="female"?"female":"male";
  if(!p?.moving)return zoneArt[`${gender}Idle`];
  return (Math.floor(now/150)%2===0)?zoneArt[`${gender}Walk1`]:zoneArt[`${gender}Walk2`];
}
function drawCharacter(c,p,x,y,now){
  const gm=isGMPlayer(p),moving=!!p.moving,bob=moving?Math.sin(now/85)*1.6:Math.sin(now/420)*.45;
  c.save();c.translate(x,y+bob);
  drawEquipmentBehind(c,p,now);
  const img=playerArtImage(p,now),flip=p.direction==="left";
  const spriteW=132,spriteH=149;
  if(!drawArtSprite(c,img,0,0,spriteW,spriteH,flip,1)){
    c.fillStyle="#d84f4f";c.font="700 18px system-ui";c.textAlign="center";c.fillText("ART?",0,-55);
  }
  drawEquipmentFront(c,p,now);drawName(c,p,gm);c.restore();
}
function drawFrame(now){
  ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle="#102c3d";ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.setTransform(dpr*zoom,0,0,dpr*zoom,-cameraX*dpr*zoom,0);drawWorld(now);
  const list=[...players.values()].map(p=>({...p,x:p.currentX,y:WALK_Y}));
  list.push({uid,studentId:isGM()?"GM":profile.studentId,isAdmin:isGM(),rank:isGM()?null:profile.rank,character:{gender:profile.character?.gender||"male",equipped:equipped(profile.character)},x:me.x,y:WALK_Y,direction:me.direction,moving:me.moving});
  for(const p of list)drawCharacter(ctx,p,p.x,p.y,now);
}
function loop(now){const dt=Math.min(.04,(now-lastFrame)/1000);lastFrame=now;updateMovement(dt);smoothRemote(dt);updateCamera(dt);drawFrame(now);requestAnimationFrame(loop)}

canvas.onclick=e=>{
  const pt=screenToWorld(e.clientX,e.clientY);
  if(Math.abs(pt.x-WIZARD_X)<95){$("openWizardQuests").click();return}
  if(Math.abs(pt.x-SHOP_X)<250){$("openZoneShop").click();return}
  let selected=null,best=999;for(const p of players.values()){const d=Math.abs(p.currentX-pt.x);if(d<65&&d<best){selected=p;best=d}}if(selected)openPlayerCard(selected);
};
function openPlayerCard(p){
  const gm=isGMPlayer(p);$("zonePlayerCardId").textContent=gm?"GM":String(p.studentId||"USER");
  $("zonePlayerCardShield").innerHTML=gm?`<span class="zone47-gm-normal-badge">GM</span>`:rankShieldHTML(p.rank);
  $("zonePlayerCardRank").textContent=gm?"GAME MASTER · Token ∞ · Backpack ∞":`${p.rank?.tierName||"Bronze"} · ${Number(p.rank?.rating||0)} Rating`;
  $("zonePlayerCardItemTitle").textContent=gm?"ไอเท็ม GM ที่กำลังสวม":"ไอเท็มที่กำลังสวม";
  const list=equippedItems(p.character).map(x=>x.item);
  $("zonePlayerCardItems").innerHTML=list.length
    ?list.map(i=>`<div><img class="zone47-card-item-art" src="${itemArtSrc(i.id)}" alt=""><small>${esc(i.name||"Item")}</small></div>`).join("")
    :`<div class="empty">ยังไม่ได้สวมไอเท็ม</div>`;
  $("zonePlayerCard").classList.remove("hidden");
}
$("closeZonePlayerCard").onclick=()=>$("zonePlayerCard").classList.add("hidden");

function listenRankingNotice(){
  rankingUnsub?.();rankingUnsub=onSnapshot(doc(db,"system_settings","ranking"),snap=>{
    if(!snap.exists()){$("zoneSystemNotice").classList.add("hidden");return}
    const d=snap.data(),next=d.nextResetAt?.toDate?.();
    if(next&&next.getTime()>Date.now()){$("zoneSystemNotice").textContent=`🏆 รีแรงค์ ${next.toLocaleString("th-TH")}${d.notice?` · ${d.notice}`:""}`;$("zoneSystemNotice").classList.remove("hidden")}else $("zoneSystemNotice").classList.add("hidden");
  },()=>{});
}

async function leaveZone(){
  if(!isGM())await stopUsageTracker({flush:true});
  clearInterval(heartbeat);clearInterval(clockTimer);clearInterval(expiryTimer);positionsUnsub?.();messagesUnsub?.();moderationUnsub?.();rankingUnsub?.();questUnsub?.();
  try{await updateDoc(doc(db,"zone_positions",uid),{online:false,updatedAt:serverTimestamp()})}catch{}
  try{await setDoc(doc(db,"presence",uid),{online:false,lastSeenAt:serverTimestamp()},{merge:true})}catch{}
  try{
    const zoneState={zoneId:ZONE_ID,x:Math.round(me.x),y:WALK_Y,direction:me.direction,lastSeenAt:new Date().toISOString()};
    if(isGM()){profile.zone=zoneState;await saveGmProfile()}else await updateDoc(doc(db,"users",uid),{zone:zoneState});
  }catch{}
}
function stopRealtime(){blocked=true;keys.clear();touch.left=false;touch.right=false;velocityX=0;clearInterval(heartbeat);positionsUnsub?.();messagesUnsub?.()}
window.onresize=resizeCanvas;
window.addEventListener("pagehide",leaveZone);
$("leaveZoneButton").onclick=async event=>{
  if(IS_EMBEDDED_ZONE){
    event.preventDefault();
    await leaveZone();
    postToStudentShell("NR_ZONE_EXIT");
    return;
  }
  await leaveZone();
};

onAuthStateChanged(auth,async user=>{
  if(!user){showGate("กรุณา Login ก่อน","2D Zone ใช้บัญชีที่ลงทะเบียนแล้ว");return}
  uid=user.uid;if(!(await loadProfile()))return;if(!(await checkModeration()))return;
  const artResult=await loadZoneArt();
  await loadItemArtImages();
  if(!artResult.ok){
    showGate(
      "โหลดภาพ 2D Zone ไม่ครบ",
      `ไม่พบ Asset สำคัญ: ${artResult.missing.join(", ")}`,
      "V4.12.0 จะไม่เปิดฉาก fallback แบบบ้านสี่เหลี่ยมอีก กรุณาอัป zone-assets.js และ zone.js ไป GitHub Root ให้ครบ"
    );
    return;
  }
  hideGate();
  $("zoneMyStudentId").textContent=isGM()?"GM":profile.studentId;
  $("zoneChatIdentity").textContent=isGM()?"GM":profile.studentId;
  $("zoneMyShield").innerHTML=isGM()?`<span class="zone47-gm-normal-badge">GM</span>`:rankShieldHTML(profile.rank);$("zoneTokenBalance").textContent=isGM()?"∞":Number(profile.tokenBalance||0).toLocaleString();
  if(isGM()){
    $("openAdminPanel").classList.remove("hidden");
    $("leaveZoneButton").href="./admin.html";
    $("zoneChatInput").placeholder="GM พิมพ์ข้อความหรือประกาศ...";
  }else{
    if(IS_EMBEDDED_ZONE)$("leaveZoneButton").removeAttribute("href");
    startUsageTracker(db,profile,"2d-zone");
  }
  resizeCanvas();updateClock();clockTimer=setInterval(updateClock,1000);await loadQuestProgress();
  listenModeration();listenPositions();listenMessages();listenTeacherQuests();listenRankingNotice();expiryTimer=setInterval(refreshMessages,60000);
  await syncPublicProfile();await publishPresence();await publishPosition(true);heartbeat=setInterval(async()=>{await publishPresence();await publishPosition(true)},PRESENCE_HEARTBEAT_MS);
  requestAnimationFrame(loop);
});

```


## usage-tracker.js

```js
import {
  doc, runTransaction, serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const tracker={
  db:null,profile:null,page:"portal",dayId:"",sessionId:"",
  lastTickMs:0,lastInteractionMs:Date.now(),pendingSeconds:0,
  tickTimer:null,flushTimer:null,flushing:false,stopped:true
};

function localDayId(){
  const d=new Date(),y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}
function sessionId(uid){
  return `${uid}_${Date.now()}_${Math.random().toString(36).slice(2,9)}`;
}
function profileSnapshot(){
  const p=tracker.profile||{};
  return {
    uid:p.uid||"",
    studentId:p.studentId||"",
    fullName:p.fullName||"",
    educationLevel:p.educationLevel||"",
    classroom:p.classroom||"",
    department:p.department||"",
    major:p.major||"",
    majorCode:p.majorCode||""
  };
}
function activeNow(){
  return !tracker.stopped
    && document.visibilityState==="visible"
    && Date.now()-tracker.lastInteractionMs <= 5*60*1000;
}
function markActivity(){tracker.lastInteractionMs=Date.now();}
["pointerdown","keydown","touchstart","wheel"].forEach(type=>
  window.addEventListener(type,markActivity,{passive:true})
);
window.addEventListener("scroll",markActivity,{passive:true});

async function rolloverIfNeeded(){
  const today=localDayId();
  if(!tracker.dayId){tracker.dayId=today;tracker.sessionId=sessionId(tracker.profile?.uid||"u");return;}
  if(today===tracker.dayId)return;
  await flushUsage(true);
  tracker.dayId=today;
  tracker.sessionId=sessionId(tracker.profile?.uid||"u");
  tracker.pendingSeconds=0;
  tracker.lastTickMs=performance.now();
}

async function flushUsage(force=false){
  if(tracker.flushing||tracker.stopped||!tracker.db||!tracker.profile?.uid)return;
  const delta=Math.floor(tracker.pendingSeconds);
  if(delta<1&&!force)return;
  if(delta<1)return;
  tracker.flushing=true;
  try{
    const p=profileSnapshot(),day=tracker.dayId||localDayId(),sid=tracker.sessionId||sessionId(p.uid);
    const dailyRef=doc(tracker.db,"usage_daily",`${p.uid}_${day}`);
    const sessionRef=doc(tracker.db,"usage_sessions",sid);
    const safeDelta=Math.min(90,Math.max(1,delta));
    await runTransaction(tracker.db,async tx=>{
      const [dailySnap,sessionSnap]=await Promise.all([tx.get(dailyRef),tx.get(sessionRef)]);
      const daily=dailySnap.exists()?dailySnap.data():{};
      const session=sessionSnap.exists()?sessionSnap.data():{};
      const common={...p,dayId:day,lastSeenAt:serverTimestamp(),updatedAt:serverTimestamp()};
      if(dailySnap.exists()){
        tx.set(dailyRef,{
          ...common,
          firstSeenAt:daily.firstSeenAt,
          activeSeconds:Number(daily.activeSeconds||0)+safeDelta
        },{merge:true});
      }else{
        tx.set(dailyRef,{
          ...common,
          activeSeconds:safeDelta,
          firstSeenAt:serverTimestamp()
        });
      }
      if(sessionSnap.exists()){
        tx.set(sessionRef,{
          ...common,
          sessionId:sid,page:tracker.page,
          startedAt:session.startedAt,
          activeSeconds:Number(session.activeSeconds||0)+safeDelta
        },{merge:true});
      }else{
        tx.set(sessionRef,{
          ...common,
          sessionId:sid,page:tracker.page,
          activeSeconds:safeDelta,
          startedAt:serverTimestamp()
        });
      }
    });
    tracker.pendingSeconds=Math.max(0,tracker.pendingSeconds-safeDelta);
  }catch(error){
    console.warn("usage tracker:",error);
  }finally{
    tracker.flushing=false;
  }
}

function tick(){
  if(tracker.stopped||!tracker.profile?.uid)return;
  rolloverIfNeeded().catch(console.warn);
  const now=performance.now();
  if(!tracker.lastTickMs)tracker.lastTickMs=now;
  const delta=Math.min(2,Math.max(0,(now-tracker.lastTickMs)/1000));
  tracker.lastTickMs=now;
  if(activeNow())tracker.pendingSeconds+=delta;
}

export function startUsageTracker(db,profile,page="portal"){
  stopUsageTracker({flush:false});
  if(!profile?.uid)return;
  tracker.db=db;tracker.profile=profile;tracker.page=page;
  tracker.dayId=localDayId();tracker.sessionId=sessionId(profile.uid);
  tracker.lastTickMs=performance.now();tracker.lastInteractionMs=Date.now();
  tracker.pendingSeconds=0;tracker.stopped=false;
  tracker.tickTimer=setInterval(tick,1000);
  tracker.flushTimer=setInterval(()=>flushUsage(false),30000);
}
export async function stopUsageTracker({flush=true}={}){
  if(flush&&!tracker.stopped)await flushUsage(true);
  if(tracker.tickTimer)clearInterval(tracker.tickTimer);
  if(tracker.flushTimer)clearInterval(tracker.flushTimer);
  tracker.tickTimer=null;tracker.flushTimer=null;tracker.stopped=true;
}
export function usageTrackerActivity(){markActivity();}
document.addEventListener("visibilitychange",()=>{
  tracker.lastTickMs=performance.now();
  if(document.visibilityState==="hidden")flushUsage(true);
  else markActivity();
});
window.addEventListener("pagehide",()=>{flushUsage(true)});

```


## firestore.rules

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    function signedIn() { return request.auth != null; }
    function isAdmin() { return signedIn() && request.auth.uid == "Y2uDV9yAQ6Mpu2qwQH9cG4ko6ZQ2"; }
    function hasZoneModeration() { return signedIn() && exists(/databases/$(database)/documents/zone_moderation/$(request.auth.uid)); }
    function activeZoneBan() {
      return hasZoneModeration()
        && ('bannedUntil' in get(/databases/$(database)/documents/zone_moderation/$(request.auth.uid)).data)
        && get(/databases/$(database)/documents/zone_moderation/$(request.auth.uid)).data.bannedUntil > request.time;
    }
    function activeZoneKick() {
      return hasZoneModeration()
        && ('kickedUntil' in get(/databases/$(database)/documents/zone_moderation/$(request.auth.uid)).data)
        && get(/databases/$(database)/documents/zone_moderation/$(request.auth.uid)).data.kickedUntil > request.time;
    }
    function zoneAccessAllowed() { return signedIn() && !activeZoneBan() && !activeZoneKick(); }
    function noGmExclusiveGear(data) {
      return !('character' in data)
        || !('equipped' in data.character)
        || (
          (!('hand' in data.character.equipped) || data.character.equipped.hand != "gm_excalibur")
          && (!('pet' in data.character.equipped) || data.character.equipped.pet != "gm_little_ghost")
        );
    }

    match /game_modes/{modeId} { allow read: if signedIn(); allow write: if isAdmin(); }
    match /levels/{levelId} { allow read: if signedIn(); allow write: if isAdmin(); }

    match /users/{uid} {
      allow create: if signedIn() && request.auth.uid == uid && noGmExclusiveGear(request.resource.data);
      allow read: if signedIn() && request.auth.uid == uid;
      allow update: if signedIn() && request.auth.uid == uid && noGmExclusiveGear(request.resource.data);
      allow read, write: if isAdmin();
    }

    match /gm_profiles/{uid} {
      allow read, create, update, delete: if isAdmin() && request.auth.uid == uid;
    }

    match /usage_daily/{usageId} {
      allow read: if isAdmin() || (signedIn() && resource.data.uid == request.auth.uid);

      allow create: if signedIn()
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.studentId == get(/databases/$(database)/documents/users/$(request.auth.uid)).data.studentId
        && request.resource.data.dayId is string
        && request.resource.data.activeSeconds is number
        && request.resource.data.activeSeconds >= 0
        && request.resource.data.activeSeconds <= 120
        && request.resource.data.firstSeenAt == request.time
        && request.resource.data.lastSeenAt == request.time
        && request.resource.data.updatedAt == request.time;

      allow update: if signedIn()
        && resource.data.uid == request.auth.uid
        && request.resource.data.uid == resource.data.uid
        && request.resource.data.studentId == resource.data.studentId
        && request.resource.data.dayId == resource.data.dayId
        && request.resource.data.firstSeenAt == resource.data.firstSeenAt
        && request.resource.data.activeSeconds is number
        && request.resource.data.activeSeconds >= resource.data.activeSeconds
        && request.resource.data.activeSeconds <= resource.data.activeSeconds + 120
        && request.resource.data.lastSeenAt == request.time
        && request.resource.data.updatedAt == request.time;

      allow delete: if isAdmin();
    }

    match /usage_sessions/{sessionId} {
      allow read: if isAdmin() || (signedIn() && resource.data.uid == request.auth.uid);

      allow create: if signedIn()
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.studentId == get(/databases/$(database)/documents/users/$(request.auth.uid)).data.studentId
        && request.resource.data.sessionId == sessionId
        && request.resource.data.dayId is string
        && request.resource.data.page is string
        && request.resource.data.activeSeconds is number
        && request.resource.data.activeSeconds >= 0
        && request.resource.data.activeSeconds <= 120
        && request.resource.data.startedAt == request.time
        && request.resource.data.lastSeenAt == request.time
        && request.resource.data.updatedAt == request.time;

      allow update: if signedIn()
        && resource.data.uid == request.auth.uid
        && request.resource.data.uid == resource.data.uid
        && request.resource.data.studentId == resource.data.studentId
        && request.resource.data.sessionId == resource.data.sessionId
        && request.resource.data.dayId == resource.data.dayId
        && request.resource.data.page == resource.data.page
        && request.resource.data.startedAt == resource.data.startedAt
        && request.resource.data.activeSeconds is number
        && request.resource.data.activeSeconds >= resource.data.activeSeconds
        && request.resource.data.activeSeconds <= resource.data.activeSeconds + 120
        && request.resource.data.lastSeenAt == request.time
        && request.resource.data.updatedAt == request.time;

      allow delete: if isAdmin();
    }

    match /pvp_rooms/{roomCode} {
      allow read: if signedIn();

      allow create: if signedIn()
        && request.resource.data.hostUid == request.auth.uid
        && request.resource.data.code == roomCode
        && request.resource.data.status == "waiting"
        && request.resource.data.players is map
        && request.auth.uid in request.resource.data.players
        && request.resource.data.players.size() == 1
        && request.resource.data.creationFee == 6
        && request.resource.data.creationFeePaid == true;

      allow update: if signedIn()
        && request.resource.data.code == resource.data.code
        && request.resource.data.players is map
        && request.resource.data.players.size() <= 4
        && (
          request.resource.data.hostUid == resource.data.hostUid
          || (
            request.auth.uid == resource.data.hostUid
            && request.resource.data.hostUid in request.resource.data.players
          )
        )
        && (
          request.auth.uid in resource.data.players
          || (
            resource.data.status == "waiting"
            && request.auth.uid in request.resource.data.players
            && request.resource.data.players.size() == resource.data.players.size() + 1
          )
        );

      allow delete: if isAdmin()
        || (signedIn() && resource.data.hostUid == request.auth.uid);
    }


    // PVP Ranked Battle results are separate from normal typing Ranking.
    // One result document per room + user. Public read supports the PVP leaderboard.
    match /pvp_results/{resultId} {
      allow read: if signedIn();

      allow create: if signedIn()
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.roomCode is string
        && request.resource.data.result in ["win", "loss"]
        && exists(/databases/$(database)/documents/pvp_rooms/$(request.resource.data.roomCode))
        && get(/databases/$(database)/documents/pvp_rooms/$(request.resource.data.roomCode)).data.status == "finished"
        && request.auth.uid in get(/databases/$(database)/documents/pvp_rooms/$(request.resource.data.roomCode)).data.players;

      allow update, delete: if false;
      allow read, write: if isAdmin();
    }

    match /official_submissions/{uid} {
      allow create, update: if signedIn() && request.auth.uid == uid;
      allow read: if signedIn() && request.auth.uid == uid;
      allow read, write: if isAdmin();
    }
    match /rankings/{rankingId} { allow read: if signedIn(); allow write: if isAdmin(); }
    match /attempts/{attemptId} {
      allow create: if signedIn() && request.resource.data.uid == request.auth.uid;
      allow read, update: if signedIn() && resource.data.uid == request.auth.uid;
      allow read, write: if isAdmin();
    }

    match /users/{uid}/daily_checkins/{dayId} {
      allow read: if signedIn() && (request.auth.uid == uid || isAdmin());

      // User บันทึกเวลา Fullscreen ของตัวเองได้ แต่ห้ามเปลี่ยน uid / studentId เป็นคนอื่น
      allow create: if signedIn()
        && request.auth.uid == uid
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.studentId == get(/databases/$(database)/documents/users/$(uid)).data.studentId
        && request.resource.data.fullscreenSeconds is number
        && request.resource.data.fullscreenSeconds >= 0
        && request.resource.data.fullscreenSeconds <= 3600
        && request.resource.data.rewarded == false;

      allow update: if signedIn()
        && request.auth.uid == uid
        && request.resource.data.uid == resource.data.uid
        && request.resource.data.studentId == resource.data.studentId
        && request.resource.data.fullscreenSeconds is number
        && request.resource.data.fullscreenSeconds >= resource.data.fullscreenSeconds
        && request.resource.data.fullscreenSeconds <= 3600
        && (
          (resource.data.rewarded == false && request.resource.data.rewarded == false)
          ||
          (
            resource.data.rewarded == false
            && request.resource.data.rewarded == true
            && request.resource.data.fullscreenSeconds == 3600
            && request.resource.data.rewardToken == 15
          )
        );

      allow delete: if isAdmin();
      allow read, write: if isAdmin();
    }

    match /public_profiles/{uid} {
      allow read: if signedIn();
      allow create, update, delete: if signedIn() && request.auth.uid == uid;
      allow read, write: if isAdmin();
    }
    match /presence/{uid} {
      allow read: if signedIn();
      allow create, update, delete: if signedIn() && request.auth.uid == uid;
      allow read, write: if isAdmin();
    }

    match /zone_positions/{uid} {
      allow read: if isAdmin() || zoneAccessAllowed();

      allow create, update: if request.auth.uid == uid
        && request.resource.data.uid == request.auth.uid
        && (
          isAdmin()
          ||
          (
            zoneAccessAllowed()
            && request.resource.data.studentId
              == get(/databases/$(database)/documents/users/$(request.auth.uid)).data.studentId
          )
        );

      allow delete: if isAdmin()
        || (zoneAccessAllowed() && request.auth.uid == uid);
    }

    match /zone_messages/{messageId} {
      allow read: if isAdmin() || zoneAccessAllowed();

      // GM: ข้อความถาวร ไม่มี expiresAt และปลอม GM ไม่ได้เพราะตรวจ ADMIN_UID
      allow create: if isAdmin()
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.studentId == "GM"
        && request.resource.data.isGM == true
        && request.resource.data.createdAt == request.time
        && request.resource.data.zoneId is string
        && request.resource.data.text is string
        && request.resource.data.text.size() > 0
        && request.resource.data.text.size() <= 120
        && !('expiresAt' in request.resource.data);

      // USER: ข้อความมีอายุไม่เกิน 24 ชั่วโมง
      allow create: if !isAdmin()
        && zoneAccessAllowed()
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.studentId == get(/databases/$(database)/documents/users/$(request.auth.uid)).data.studentId
        && request.resource.data.isGM == false
        && request.resource.data.createdAt == request.time
        && request.resource.data.zoneId is string
        && request.resource.data.text is string
        && request.resource.data.text.size() > 0
        && request.resource.data.text.size() <= 120
        && request.resource.data.expiresAt is timestamp
        && request.resource.data.expiresAt > request.time
        && request.resource.data.expiresAt <= request.time + duration.value(30, 'h');

      allow update: if false;
      allow delete: if isAdmin() || (zoneAccessAllowed() && resource.data.uid == request.auth.uid);
    }

    // Archive เป็นงานรอง: ต่อให้ Archive เขียนไม่ได้ การพูดใน Zone ต้องยังทำงานได้
    match /zone_chat_archive/{messageId} {
      allow read: if isAdmin();

      allow create: if isAdmin()
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.studentId == "GM"
        && request.resource.data.isGM == true
        && request.resource.data.text is string
        && request.resource.data.text.size() > 0
        && request.resource.data.text.size() <= 120;

      allow create: if !isAdmin()
        && zoneAccessAllowed()
        && request.resource.data.uid == request.auth.uid
        && request.resource.data.studentId
          == get(/databases/$(database)/documents/users/$(request.auth.uid)).data.studentId
        && request.resource.data.isGM == false
        && request.resource.data.text is string
        && request.resource.data.text.size() > 0
        && request.resource.data.text.size() <= 120;

      allow update: if false;
      allow delete: if isAdmin();
    }

    match /zone_moderation/{uid} {
      allow read: if isAdmin() || (signedIn() && request.auth.uid == uid);
      allow create, update, delete: if isAdmin();
    }

    match /teacher_quests/{questId} {
      allow read: if signedIn();
      allow create, update, delete: if isAdmin();
    }

    match /quest_progress/{uid}/days/{dayId} {
      allow read, create, update: if signedIn() && request.auth.uid == uid;
      allow delete: if signedIn() && request.auth.uid == uid;
      allow read, write: if isAdmin();
    }

    match /system_settings/{settingId} {
      allow read: if signedIn();
      allow create, update, delete: if isAdmin();
    }

    match /rank_reset_history/{resetId} {
      allow read, create, update, delete: if isAdmin();
    }

  }
}

```
