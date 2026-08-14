# Database Schema V6.0

Collections:
- users/{uid}
  - daily_checkins/{date}
- public_profiles/{uid}
- attempts/{attemptId}
- official_submissions/{uid}
- rankings/{rankingId}
- rank_reset_history/{resetId}
- game_modes/{modeId}
- levels/{levelId}
- teacher_quests/{questId}
- quest_progress/{uid}/days/{date}
- pvp_rooms/{roomCode}
- presence/{uid}
- zone_positions/{uid}
- zone_messages/{messageId}
- zone_chat_archive/{messageId}
- zone_moderation/{uid}
- system_settings/ranking
- system_settings/app

Password ไม่เก็บใน Firestore; Firebase Authentication เป็นผู้จัดการ Password
