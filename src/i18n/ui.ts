export const languages = {
  'zh-TW': '繁體中文',
  en: 'English',
  ja: '日本語',
} as const;

export const defaultLang = 'zh-TW' satisfies keyof typeof languages;

export type Lang = keyof typeof languages;

/**
 * UI strings, keyed by locale.
 * Copy aligned with v2 (Editorial Cinematic) design.
 */
export const ui = {
  'zh-TW': {
    // ---- Site meta ----
    'site.title': 'Muztrix — 遊戲橘子原創中心 AI 小組',
    'site.description':
      '來自橘子集團原創中心。用 AI 重新想像漫畫、虛擬人、遊戲的可能。',

    // ---- Header / Nav ----
    'nav.solutions': '核心方案',
    'nav.about': '關於我們',
    'nav.virtualHuman': '虛擬人',
    'nav.comic': 'AI 漫畫',
    'nav.game': 'AI 遊戲',
    'nav.contact': '聯絡我們',
    'nav.connect': '聯絡我們',

    // ---- Hero (kept; legacy keys still in use) ----
    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': '定義你的',
    'hero.title.line2': '泛娛樂新視界',
    'hero.desc': '用 AI 重新想像漫畫、虛擬人、遊戲的可能。',
    'hero.cta.primary': '探索方案',
    'hero.cta.secondary': '觀看 Demo',

    // ---- Solutions (§ 01) ----
    // Section order: Hero · §01 Solutions · §02 Virtual Human · §03 AI Game · §04 AI Comic · §05 About · §06 Contact
    'solutions.section': '§ 01 — Solutions',
    'solutions.title':
      '從 0 到 1，<span class="title-accent-gold">AI 創作生產線</span>',
    'solutions.subtitle':
      '劇本、角色、世界觀，到多模態交付──我們陪你把 0 走到 1。創作者主導，AI 把每一個工序裡不必要的摩擦移除。',

    'solutions.01.title': '製作劇本',
    'solutions.01.tag': 'Story Engine',
    'solutions.01.desc':
      '從一句靈感開始，AI 編劇陪你展開角色性格、世界規則與章節節奏。每一次對話都沉澱進可編輯的劇本大綱──主導權永遠在創作者手裡。',
    'solutions.01.t1': '劇本大綱',
    'solutions.01.t2': '角色設定',
    'solutions.01.t3': '對話節奏',

    'solutions.02.title': '描繪角色',
    'solutions.02.tag': 'Character & Art',
    'solutions.02.desc':
      '一致性鎖定的角色設計，跨章節維持外觀、表情、服飾細節。三視圖、表情包、動作姿勢一次出齊──直接成為可商用的角色資產庫。',
    'solutions.02.t1': '三視圖',
    'solutions.02.t2': '一致性',
    'solutions.02.t3': '表情系統',

    'solutions.03.title': '建構世界觀',
    'solutions.03.tag': 'World Builder',
    'solutions.03.desc':
      '從文明設定到地理環境，AI 幫你把零散的世界碎片整理成自洽的時空脈絡。場景、文化、歷史──每一個元素都能被故事與角色繼承。',
    'solutions.03.t1': '場景設計',
    'solutions.03.t2': '文化體系',
    'solutions.03.t3': '時空脈絡',

    'solutions.04.title': '多模態世界',
    'solutions.04.tag': 'Multimodal World',
    'solutions.04.desc':
      '將前面的劇本、角色、世界觀織結為具備生命的數位時空──故事、角色、玩法在同一個世界裡共生演化，跨漫畫、虛擬人、遊戲全媒介展開。',
    'solutions.04.t1': '跨媒介',
    'solutions.04.t2': '共生演化',
    'solutions.04.t3': '沉浸體驗',

    // ---- About (§ 05) ----
    'about.section': '§ 05 — About',
    'about.title':
      '三十年內容工藝，<span class="title-accent-cinnabar">AI</span> 賦予<span class="title-accent-gold">靈魂</span>',
    'about.body1':
      '站在三十年遊戲開發及代理的肩膀上，我們深知內容創作的痛點與極限。Muztrix 致力於將前沿 AI 技術真正落地──從自動化劇本到有溫度的虛擬人互動。',
    'about.body2':
      '我們不只追求速度的提升，更追求品質的演化。利用 AI，我們正重新定義數位娛樂的邊界，為品牌與創作者建構無限可能的虛擬世界。',
    'about.pillar1.k': '人本核心',
    'about.pillar1.v': 'AI 由倫理框架與人本價值驅動。',
    'about.pillar2.k': '創作優先',
    'about.pillar2.v': '工具服務創作者，而非取代之。',
    'about.pillar3.k': '長期主義',
    'about.pillar3.v': '我們相信內容值得耐心。',
    'about.cjk': '原 · 創 · 中 · 心',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.stat.unit': '年',
    'about.stat.body':
      '橘子集團數位娛樂深耕。我們把這份對玩家的理解，帶進 AI 的下一個世代。',
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    // ---- Virtual Human (§ 02) ----
    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title':
      '看得到、聽得懂、<span class="title-accent-cinnabar">記得住</span>的 AI',
    'virtual.body1':
      '從感知、記憶到場景應對──三個層次定義一個有溫度的虛擬人，能在不同情境下，成為你品牌最自然的延伸。',
    'virtual.body2': '',

    // Three core pillars
    'vh.pillar1.k': '精準辨識',
    'vh.pillar1.v': '互動的第一步，是看見你的需求。',
    'vh.pillar2.k': '智慧連動',
    'vh.pillar2.v': '真正的溫度，是記得你的名字。',
    'vh.pillar3.k': '情境導購',
    'vh.pillar3.v': '高品質的建議，是最貼心的陪伴。',
    'virtual.matrix.1k': 'PERCEPTION',
    'virtual.matrix.1v': '視覺 · 聽覺 · 情緒',
    'virtual.matrix.2k': 'COGNITION',
    'virtual.matrix.2v': '長期記憶 · 偏好',
    'virtual.matrix.3k': 'DIALOGUE',
    'virtual.matrix.3v': '即時 · 多輪 · 情境',
    'virtual.matrix.4k': 'IDENTITY',
    'virtual.matrix.4v': '人格鎖定 · 角色化',
    'virtual.demo.placeholder': '輸入訊息……',
    'virtual.demo.send': '送出',
    'virtual.demo.perception': '● PERCEPTION FEED',
    'virtual.demo.live': '● LIVE · MIYAKIEN',
    'virtual.demo.session': 'SESSION 0x4F3A',

    // Mode toggle (2D / 3D)
    'vh.mode.label': 'MODE',
    'vh.mode.2d': '2D · Live2D',
    'vh.mode.3d': '3D',
    'vh.mode.3dPending': '準備中',

    // Scene toggle label
    'vh.scene.label': 'SCENE',

    // Scene 1: 精品店員 (Luxury boutique)
    'vh.scene.boutique.label': '精品店員',
    'vh.scene.boutique.tag': 'BOUTIQUE',
    'vh.scene.boutique.g1': '真開心又看到你！我看到你拿的是上次買的紅色側背包，和你今天的穿著很搭配哦。今天要來看看同色系的零錢包嗎？',
    'vh.scene.boutique.g2': '你竟然還記得！',
    'vh.scene.boutique.g3': '當然記得，那款是我私心很喜歡的設計。剛好新到一批配色相近的小物，要不要看看？',
    'vh.scene.boutique.r1': '這款搭你今天的鞋子很相襯，要不要試一下？',
    'vh.scene.boutique.r2': '上次你也提過想找耳環──剛好新到一組，等等我拿給你看。',
    'vh.scene.boutique.r3': '我先幫你把這個留下，慢慢逛沒關係，等你決定。',
    'vh.scene.boutique.s1': '性別 · 女',
    'vh.scene.boutique.s2': '年齡 · 25-32',
    'vh.scene.boutique.s3': '凝視商品 · 1.4s',
    'vh.scene.boutique.s4': '興趣指數 · 高',
    'vh.scene.boutique.s5': '情緒 · 愉悅',

    // Scene 2: 企業發言人 (Corporate spokesperson)
    'vh.scene.corporate.label': '企業接待',
    'vh.scene.corporate.tag': 'CORPORATE',
    'vh.scene.corporate.g1': '您好，我們有針對企業提供許多 AI 解決方案。要不要與我玩個小遊戲互相認識一下？告訴我您的公司資訊，或讓我看看您的名片，我來幫您做介紹。',
    'vh.scene.corporate.g2': '好，那我來說一下。',
    'vh.scene.corporate.g3': '太好了。我會根據您分享的內容，整理出最適合的方案組合。先從產業類型開始──您主要在做哪一塊呢？',
    'vh.scene.corporate.r1': '您這產業我們有不少合作經驗，等等可以分享相似的案例給您。',
    'vh.scene.corporate.r2': '那我來幫您匹配──如果預算範圍方便透露一下，我可以更精準推薦。',
    'vh.scene.corporate.r3': '太好了，我把方案精簡版整理出來，五分鐘就能看完。要直接寄到您信箱嗎？',
    'vh.scene.corporate.s1': '來訪屬性 · B2B',
    'vh.scene.corporate.s2': '詢問模式 · 探索',
    'vh.scene.corporate.s3': '對話深度 · 概覽',
    'vh.scene.corporate.s4': '建議行動 · 安排會議',
    'vh.scene.corporate.s5': '情緒 · 專注',

    // Scene 3: IP 互動 (IP interaction / event / brand)
    'vh.scene.ip.label': 'IP 導覽互動',
    'vh.scene.ip.tag': 'IP EVENT',
    'vh.scene.ip.g1': '你看起來很疲累的樣子耶，黑眼圈怎麼那麼重？跟你說～這附近有一家評價很高的咖啡店。',
    'vh.scene.ip.g2': '真的假的？',
    'vh.scene.ip.g3': '真的！他們家的拿鐵超讚。要不要我把店家位置傳給你？順便附上一張今天剛上架的限定甜點照～',
    'vh.scene.ip.r1': '對了，等等若你逛累了我再帶你去那家店，他們有靠窗座位很舒服。',
    'vh.scene.ip.r2': '你今天的穿搭蠻好看的耶，是有什麼特別行程嗎？',
    'vh.scene.ip.r3': '這個展區後面的那條走道我推薦你去看看，剛剛有人說那邊很適合拍照。',
    'vh.scene.ip.s1': '訪客類型 · 新訪客',
    'vh.scene.ip.s2': '同行者 · 1 人',
    'vh.scene.ip.s3': '興趣方向 · 角色',
    'vh.scene.ip.s4': '互動意願 · 高',
    'vh.scene.ip.s5': '情緒 · 興奮',

    // 3D placeholder copy
    'vh.placeholder.3d.title': '3D 模型準備中',
    'vh.placeholder.3d.body': '高保真 3D 互動體驗將於下個版本上線。',

    // ---- Comic Studio (§ 04) ----
    'comic.section': '§ 04 — AI Comic Studio',
    'comic.title':
      '從一句靈感到完整漫畫，<span class="title-accent-gold">四步串成一條產線</span>',
    'comic.subtitle': '創作者主導，AI 加速。每一步都可回頭微調，產出可商用、可二創的內容資產。',

    'comic.01.label': '故事規劃',
    'comic.01.en': 'Story Planning',
    'comic.01.title': '與 AI 編劇共構世界',
    'comic.01.desc':
      '從一句靈感開始，AI 編劇陪你展開角色設定、場景氛圍與分鏡節奏。每一次對話都會沉澱進可編輯的故事大綱。',
    'comic.01.m1': '彈性討論深度',
    'comic.01.m2': 'Claude Sonnet 4.6',
    'comic.01.m3': '繁中 · 日漫風格',

    'comic.02.label': '角色 / 場景設計',
    'comic.02.en': 'Character & Scene Design',
    'comic.02.title': '角色三視圖、場景概念板，一次鎖定',
    'comic.02.desc':
      '主角的正面 / 側面 / 背面三視圖，加上故事場景的概念板。角色與場景同步繫結到敘事，確保跨分鏡、跨章節風格一致。',
    'comic.02.m1': 'Nano Banana Pro',
    'comic.02.m2': '三視圖 + 場景概念板',
    'comic.02.m3': '性格 / 場景綁定',

    'comic.03.label': '分鏡製作',
    'comic.03.en': 'Storyboard',
    'comic.03.title': '幕、格、節奏一次到位',
    'comic.03.desc':
      '依故事大綱自動生成分幕分鏡，比例、構圖、對話框可逐格微調。角色與場景資產自動套用。',
    'comic.03.m1': '幕 / 格 階層',
    'comic.03.m2': '3:2 · 16:9 雙比例',
    'comic.03.m3': '逐格重生',

    'comic.04.label': '畫布編輯',
    'comic.04.en': 'Canvas & Export',
    'comic.04.title': '排版、匯出、發布',
    'comic.04.desc':
      '頁漫排版預覽、JSON 備份、匯出圖片或發布到社區。從草稿到上稿，作品始終在你手裡。',
    'comic.04.m1': 'JSON 雙向匯入',
    'comic.04.m2': '匯出 PNG / 頁漫',
    'comic.04.m3': '社區發布',

    'comic.flow': 'FLOW · STORY → CHARACTER → STORYBOARD → CANVAS',
    'comic.flow.note': '產出可商用素材庫，跨章節維持角色一致性',
    'comic.cta': '開始試用',

    // ---- Game (§ 03) ----
    'game.section': '§ 03 — AI Game',
    'game.title':
      '讓 <span class="title-accent-cinnabar">NPC</span> 真正<span class="title-accent-gold">活著</span>',
    'game.body':
      '每個 NPC 都有自己的記憶、目標與情緒。玩家的選擇會留下痕跡──下一次見面，他們記得你做過什麼。',
    'game.p1': '行為樹 + LLM 混合決策',
    'game.p2': '自適應難度，依玩家風格調整',
    'game.p3': '自動化測試覆蓋 95% 對話分支',

    'game.npc1.name': 'Vendor — 李大娘',
    'game.npc1.state': '巡邏 · 警戒度 0.3',
    'game.npc1.mood': '鎮定',
    'game.npc2.name': 'Mage — 元 ─ 七',
    'game.npc2.state': '對話 · 玩家 #4F3A',
    'game.npc2.mood': '友善',
    'game.npc3.name': 'Boss — 黯 影',
    'game.npc3.state': '戰鬥準備 · 階段 2',
    'game.npc3.mood': '挑釁',
    'game.memory1': '玩家在第三章節向我承諾要回來。',
    'game.memory2': '玩家上次選擇了「正義」結局。',
    'game.memory3': '玩家偏好戰鬥前先談判。',

    // ---- CTA / Footer (§ 06) ----
    'cta.section': '§ 06 — Contact',
    'cta.title':
      '把 AI 變成<span class="title-accent-cinnabar">下一個</span><span class="title-accent-gold">創意夥伴</span>。',
    'cta.body':
      '技術合作、產品授權，或想了解我們能為您的場域帶來什麼樣的 AI 體驗──歡迎來信。',
    'cta.button': '聯絡我們',

    'footer.tagline': '來自橘子集團原創中心。用 AI 重新想像漫畫、虛擬人、遊戲的可能。',
    'footer.col1.h': '產品',
    'footer.col1.i1': 'AI 漫畫',
    'footer.col1.i2': '虛擬人',
    'footer.col1.i3': 'AI 遊戲',
    'footer.col1.i4': '感知引擎',
    'footer.col2.h': '公司',
    'footer.col2.i1': '關於我們',
    'footer.col2.i2': 'AI 倫理',
    'footer.col2.i3': '新聞',
    'footer.col2.i4': '徵才',
    'footer.col3.h': '法律',
    'footer.col3.i1': '隱私政策',
    'footer.col3.i2': '服務條款',
    'footer.col3.i3': '版權聲明',
    'footer.copyright': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',

    // legacy / optional kept
    'lang.switcher.label': '語系',
  },

  en: {
    'site.title': 'Muztrix — Gamania Original Content Center AI',
    'site.description':
      "From Gamania Original Content Center. Reimagining comics, virtual humans, and games with AI.",

    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.virtualHuman': 'Virtual Human',
    'nav.comic': 'AI Comic',
    'nav.game': 'AI Game',
    'nav.contact': 'Contact',
    'nav.connect': 'Connect',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'AI-Powered Creativity.',
    'hero.title.line2': 'Limitless Entertainment.',
    'hero.desc':
      'Reimagining comics, virtual humans, and games with AI. Join the Muztrix ecosystem.',
    'hero.cta.primary': 'Explore Solutions',
    'hero.cta.secondary': 'Watch Demo',

    'solutions.section': '§ 01 — Solutions',
    'solutions.title':
      'Zero to one — <span class="title-accent-gold">AI creative pipeline</span>',
    'solutions.subtitle':
      "Script · Character · World · Multimodal delivery — we walk you from zero to one. Creator-led, AI removes the friction at every stage.",

    'solutions.01.title': 'Script',
    'solutions.01.tag': 'Story Engine',
    'solutions.01.desc':
      "Start from a single spark. The AI editor walks character, world rules, and pacing with you — every conversation distills into an editable outline. Creators always lead.",
    'solutions.01.t1': 'Outline',
    'solutions.01.t2': 'Character',
    'solutions.01.t3': 'Dialogue',

    'solutions.02.title': 'Character',
    'solutions.02.tag': 'Character & Art',
    'solutions.02.desc':
      "Identity-locked design across chapters — appearance, expression, costume held together. Three-views, expression sets, action poses out in one pass — a commercial-ready asset library.",
    'solutions.02.t1': '3-View',
    'solutions.02.t2': 'Consistency',
    'solutions.02.t3': 'Expressions',

    'solutions.03.title': 'Worldbuilding',
    'solutions.03.tag': 'World Builder',
    'solutions.03.desc':
      "From civilizations to geography, AI weaves scattered world fragments into a coherent space-time. Scenes, cultures, histories — every element is inheritable by story and character.",
    'solutions.03.t1': 'Scenes',
    'solutions.03.t2': 'Cultures',
    'solutions.03.t3': 'Lore',

    'solutions.04.title': 'Multimodal World',
    'solutions.04.tag': 'Multimodal World',
    'solutions.04.desc':
      "Weave script, character, and world into a living digital realm — story, character, and gameplay co-evolve across comic, virtual human, and game.",
    'solutions.04.t1': 'Cross-media',
    'solutions.04.t2': 'Co-evolution',
    'solutions.04.t3': 'Immersion',

    'about.section': '§ 05 — About',
    'about.title':
      'Three decades of content craft, <span class="title-accent-cinnabar">AI</span> bringing the <span class="title-accent-gold">soul</span>',
    'about.body1':
      "Standing on the shoulders of three decades in game development and publishing, we know the pain points and limits of content creation. Muztrix brings frontier AI into real practice — from automated scripts to virtual human interactions with warmth.",
    'about.body2':
      "We don't just pursue speed — we pursue the evolution of quality. With AI, we're redefining the boundaries of digital entertainment, building worlds of infinite possibility for brands and creators.",
    'about.pillar1.k': 'Human Core',
    'about.pillar1.v': 'AI driven by moral frameworks and human values.',
    'about.pillar2.k': 'Creator First',
    'about.pillar2.v': 'Tools serve creators, not replace them.',
    'about.pillar3.k': 'Long-term',
    'about.pillar3.v': 'We believe content deserves patience.',
    'about.cjk': 'Original · Content · Center',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.stat.unit': 'yrs',
    'about.stat.body':
      "Three decades of digital entertainment under Gamania. We're bringing that understanding of players into AI's next generation.",
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title':
      'AI that sees you, <span class="title-accent-cinnabar">remembers you</span>',
    'virtual.body1':
      'Perception, memory, scene-aware response — three layers that define a virtual human with real warmth, ready to extend your brand naturally across every context.',
    'virtual.body2': '',

    'vh.pillar1.k': 'Precise Recognition',
    'vh.pillar1.v': 'The first step of interaction is seeing what you need.',
    'vh.pillar2.k': 'Smart Connection',
    'vh.pillar2.v': 'True warmth is remembering your name.',
    'vh.pillar3.k': 'Contextual Guidance',
    'vh.pillar3.v': 'A great suggestion is the most attentive companion.',
    'virtual.matrix.1k': 'PERCEPTION',
    'virtual.matrix.1v': 'Vision · Audio · Emotion',
    'virtual.matrix.2k': 'COGNITION',
    'virtual.matrix.2v': 'Long memory · Preferences',
    'virtual.matrix.3k': 'DIALOGUE',
    'virtual.matrix.3v': 'Real-time · Multi-turn',
    'virtual.matrix.4k': 'IDENTITY',
    'virtual.matrix.4v': 'Persona-locked · Roleplay',
    'virtual.demo.placeholder': 'Type a message…',
    'virtual.demo.send': 'SEND',
    'virtual.demo.perception': '● PERCEPTION FEED',
    'virtual.demo.live': '● LIVE · MIYAKIEN',
    'virtual.demo.session': 'SESSION 0x4F3A',

    'vh.mode.label': 'MODE',
    'vh.mode.2d': '2D · Live2D',
    'vh.mode.3d': '3D',
    'vh.mode.3dPending': 'Coming Soon',

    'vh.scene.label': 'SCENE',

    'vh.scene.boutique.label': 'Boutique',
    'vh.scene.boutique.tag': 'BOUTIQUE',
    'vh.scene.boutique.g1': "So glad to see you again! I noticed you're carrying the red shoulder bag from your last visit — it pairs beautifully with today's outfit. Want to look at coin pouches in the same color?",
    'vh.scene.boutique.g2': "You actually remembered!",
    'vh.scene.boutique.g3': "Of course. That piece is one I quietly love. We just got a new batch of small accessories in a similar tone — want to take a look?",
    'vh.scene.boutique.r1': "This piece would look great with the shoes you're wearing today — want to try it on?",
    'vh.scene.boutique.r2': "Last time you mentioned looking for earrings — we just got a new set in. Let me grab them for you.",
    'vh.scene.boutique.r3': "I'll set this aside for you. Take your time browsing — come back when you've decided.",
    'vh.scene.boutique.s1': 'Gender · Female',
    'vh.scene.boutique.s2': 'Age · 25–32',
    'vh.scene.boutique.s3': 'Gaze · 1.4s',
    'vh.scene.boutique.s4': 'Interest · High',
    'vh.scene.boutique.s5': 'Emotion · Pleased',

    'vh.scene.corporate.label': 'Enterprise Reception',
    'vh.scene.corporate.tag': 'CORPORATE',
    'vh.scene.corporate.g1': "Hello! We offer many AI solutions for enterprises. Want to play a quick game to get to know each other? Tell me about your company, or show me your business card, and I'll match you with the right options.",
    'vh.scene.corporate.g2': "OK, here we go.",
    'vh.scene.corporate.g3': "Perfect. Based on what you share, I'll handpick the most suitable combinations for you. Let's start with your industry — what do you primarily work on?",
    'vh.scene.corporate.r1': "We've worked with companies in your industry — happy to share similar case studies.",
    'vh.scene.corporate.r2': "Then let me match you up — if you're comfortable sharing your budget range, I can recommend more precisely.",
    'vh.scene.corporate.r3': "Great. I'll prepare a condensed version of the proposal — only a 5-minute read. Shall I send it to your email?",
    'vh.scene.corporate.s1': 'Visitor · B2B',
    'vh.scene.corporate.s2': 'Mode · Discovery',
    'vh.scene.corporate.s3': 'Depth · Overview',
    'vh.scene.corporate.s4': 'Next · Schedule call',
    'vh.scene.corporate.s5': 'Emotion · Focused',

    'vh.scene.ip.label': 'IP Tour & Guide',
    'vh.scene.ip.tag': 'IP EVENT',
    'vh.scene.ip.g1': "You look exhausted — those dark circles though! Hey, there's a really highly-rated café right around here.",
    'vh.scene.ip.g2': "Really?",
    'vh.scene.ip.g3': "Yeah! Their lattes are amazing. Want me to send you the address? I'll throw in a photo of the limited dessert they just launched today too.",
    'vh.scene.ip.r1': "Oh by the way — if you get tired later I'll take you to that café. They've got a great window seat.",
    'vh.scene.ip.r2': "Your outfit today looks really nice — got something special planned?",
    'vh.scene.ip.r3': "I'd recommend the corridor behind this exhibit area — someone just said it's perfect for photos.",
    'vh.scene.ip.s1': 'Visitor · New',
    'vh.scene.ip.s2': 'Companions · 1',
    'vh.scene.ip.s3': 'Interest · Characters',
    'vh.scene.ip.s4': 'Engagement · High',
    'vh.scene.ip.s5': 'Emotion · Excited',

    'vh.placeholder.3d.title': '3D Model Coming Soon',
    'vh.placeholder.3d.body': 'Hi-fidelity 3D interactive experience launching in the next release.',

    'comic.section': '§ 04 — AI Comic Studio',
    'comic.title':
      'From spark to finished comic — <span class="title-accent-gold">a four-step pipeline</span>',
    'comic.subtitle':
      "Creator-led, AI-accelerated. Every step is editable; every output is commercially usable.",

    'comic.01.label': 'Story Planning',
    'comic.01.en': 'Story Planning',
    'comic.01.title': 'Co-author with AI',
    'comic.01.desc':
      "Start from a single spark. The AI editor walks character, scene, and pacing with you. Every conversation distills into an editable story outline.",
    'comic.01.m1': 'Flexible depth',
    'comic.01.m2': 'Claude Sonnet 4.6',
    'comic.01.m3': 'zh-TW · manga style',

    'comic.02.label': 'Character & Scene',
    'comic.02.en': 'Character & Scene Design',
    'comic.02.title': 'Three-view turnaround + scene boards',
    'comic.02.desc':
      "Front, side, and back rendered together with concept boards for each scene. Character + setting bind to the story so style holds across panels and chapters.",
    'comic.02.m1': 'Nano Banana Pro',
    'comic.02.m2': '3-view + scene boards',
    'comic.02.m3': 'Character / scene binding',

    'comic.03.label': 'Storyboard',
    'comic.03.en': 'Storyboard',
    'comic.03.title': 'Acts, panels, and pacing',
    'comic.03.desc':
      "Auto-generate panels from the outline. Ratio, composition, and dialogue boxes are tunable per panel; characters and scenes auto-apply.",
    'comic.03.m1': 'Acts / Panels',
    'comic.03.m2': '3:2 · 16:9',
    'comic.03.m3': 'Per-panel regen',

    'comic.04.label': 'Canvas & Export',
    'comic.04.en': 'Canvas & Export',
    'comic.04.title': 'Layout, export, publish',
    'comic.04.desc':
      "Page layout preview, JSON backup, image export, or publish to the community. Your work stays in your hands.",
    'comic.04.m1': 'JSON I/O',
    'comic.04.m2': 'PNG export',
    'comic.04.m3': 'Community publish',

    'comic.flow': 'FLOW · STORY → CHARACTER → STORYBOARD → CANVAS',
    'comic.flow.note': 'Commercial-ready library, character consistency across chapters',
    'comic.cta': 'Try It',

    'game.section': '§ 03 — AI Game',
    'game.title':
      '<span class="title-accent-cinnabar">NPCs</span> that <span class="title-accent-gold">truly live</span>',
    'game.body':
      "Every NPC has memory, goals, and emotion. Player choices leave traces — next time you meet, they remember what you did.",
    'game.p1': 'Behavior tree + LLM hybrid decisions',
    'game.p2': 'Adaptive difficulty by play style',
    'game.p3': 'Automated test coverage on 95% of dialogue branches',

    'game.npc1.name': 'Vendor — Madame Li',
    'game.npc1.state': 'PATROL · alert 0.3',
    'game.npc1.mood': 'Calm',
    'game.npc2.name': 'Mage — Yuan Seven',
    'game.npc2.state': 'DIALOGUE · player #4F3A',
    'game.npc2.mood': 'Friendly',
    'game.npc3.name': 'Boss — The Umbra',
    'game.npc3.state': 'COMBAT_PREP · phase 2',
    'game.npc3.mood': 'Provocative',
    'game.memory1': 'In chapter three, the player promised to return.',
    'game.memory2': 'Last time, they chose the "Just" ending.',
    'game.memory3': 'The player prefers to negotiate before combat.',

    'cta.section': '§ 06 — Contact',
    'cta.title':
      'Make AI your <span class="title-accent-cinnabar">next</span> <span class="title-accent-gold">creative partner</span>.',
    'cta.body':
      "Technology partnerships, product licensing, or learning what AI can do for your space — let's talk.",
    'cta.button': 'Get in Touch',

    'footer.tagline': "From Gamania Original Content Center. Reimagining comics, virtual humans, and games with AI.",
    'footer.col1.h': 'PRODUCT',
    'footer.col1.i1': 'AI Comic',
    'footer.col1.i2': 'Virtual Human',
    'footer.col1.i3': 'AI Game',
    'footer.col1.i4': 'Perception Engine',
    'footer.col2.h': 'COMPANY',
    'footer.col2.i1': 'About',
    'footer.col2.i2': 'AI Ethics',
    'footer.col2.i3': 'News',
    'footer.col2.i4': 'Careers',
    'footer.col3.h': 'LEGAL',
    'footer.col3.i1': 'Privacy',
    'footer.col3.i2': 'Terms',
    'footer.col3.i3': 'Copyright',
    'footer.copyright': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',

    'lang.switcher.label': 'Language',
  },

  ja: {
    'site.title': 'Muztrix — ガマニア・オリジナルコンテンツセンターAI',
    'site.description':
      'ガマニア・オリジナルコンテンツセンター発。AIで漫画・バーチャルヒューマン・ゲームを再定義。',

    'nav.solutions': 'ソリューション',
    'nav.about': '会社概要',
    'nav.virtualHuman': 'バーチャルヒューマン',
    'nav.comic': 'AIコミック',
    'nav.game': 'AIゲーム',
    'nav.contact': 'お問い合わせ',
    'nav.connect': 'お問い合わせ',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'AIで創る、',
    'hero.title.line2': '新しいエンタメ体験。',
    'hero.desc': 'AIで漫画・バーチャルヒューマン・ゲームの可能性を再定義。',
    'hero.cta.primary': 'ソリューションを見る',
    'hero.cta.secondary': 'デモを見る',

    'solutions.section': '§ 01 — ソリューション',
    'solutions.title':
      'ゼロからイチへ、<span class="title-accent-gold">AIクリエイティブ・パイプライン</span>',
    'solutions.subtitle':
      '脚本・キャラ・世界観・マルチモーダルへ──ゼロからイチまでを共に。クリエイター主導、AIが各工程の摩擦を取り除きます。',

    'solutions.01.title': '脚本制作',
    'solutions.01.tag': 'Story Engine',
    'solutions.01.desc':
      'ひらめきから始まり、AI編集者がキャラ・世界ルール・テンポを一緒に組み立てます。対話は編集可能なプロットへ蓄積──主導権は常にクリエイターに。',
    'solutions.01.t1': 'プロット',
    'solutions.01.t2': 'キャラ設定',
    'solutions.01.t3': '対話',

    'solutions.02.title': 'キャラ描写',
    'solutions.02.tag': 'Character & Art',
    'solutions.02.desc':
      'アイデンティティを保ったキャラ設計。章を跨いでも外観・表情・衣装が一貫。三面図・表情セット・動作ポーズが一気に揃い、商用利用可能な素材ライブラリへ。',
    'solutions.02.t1': '三面図',
    'solutions.02.t2': '一貫性',
    'solutions.02.t3': '表情',

    'solutions.03.title': '世界観構築',
    'solutions.03.tag': 'World Builder',
    'solutions.03.desc':
      '文明設定から地理環境まで、AIが散らばった世界の断片を一貫した時空軸へ織り上げます。場面・文化・歴史──すべての要素が物語とキャラに継承されます。',
    'solutions.03.t1': '場面',
    'solutions.03.t2': '文化',
    'solutions.03.t3': '歴史',

    'solutions.04.title': 'マルチモーダル世界',
    'solutions.04.tag': 'Multimodal World',
    'solutions.04.desc':
      '脚本・キャラ・世界観を、生命を持つデジタル時空へ織り上げる──物語・キャラ・ゲームプレイが共生・進化し、漫画・バーチャル・ゲームを横断します。',
    'solutions.04.t1': 'クロスメディア',
    'solutions.04.t2': '共進化',
    'solutions.04.t3': '没入感',

    'about.section': '§ 05 — About',
    'about.title':
      '三十年のコンテンツ工芸、<span class="title-accent-cinnabar">AI</span>が<span class="title-accent-gold">魂</span>を吹き込む',
    'about.body1':
      '30年のゲーム開発・代理の蓄積の上に立ち、私たちはコンテンツ制作の痛みと限界を熟知しています。Muztrixは最先端のAI技術を現場へと落とし込みます──自動化された脚本から、温度のあるバーチャルヒューマンとの対話まで。',
    'about.body2':
      'スピードの向上だけでなく、品質の進化を追求します。AIで、私たちはデジタルエンタメの境界を再定義し、ブランドとクリエイターに無限の可能性を秘めたバーチャル世界を構築します。',
    'about.pillar1.k': '人間中心',
    'about.pillar1.v': '倫理的枠組みと人間の価値観に基づくAI。',
    'about.pillar2.k': 'クリエイター優先',
    'about.pillar2.v': 'ツールはクリエイターのために。',
    'about.pillar3.k': '長期主義',
    'about.pillar3.v': 'コンテンツには忍耐が必要だと信じます。',
    'about.cjk': '原 · 創 · 中 · 心',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.stat.unit': '年',
    'about.stat.body':
      'ガマニアによる30年のデジタルエンタメ。プレイヤーへの理解を、AIの次世代へ。',
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title':
      '見て、聴いて、<span class="title-accent-cinnabar">覚える</span>AI',
    'virtual.body1':
      '知覚・記憶・シーンへの対応──3つのレイヤーで温かみのあるバーチャルヒューマンを定義し、あらゆるシーンであなたのブランドを自然に拡張します。',
    'virtual.body2': '',

    'vh.pillar1.k': '精密な認識',
    'vh.pillar1.v': '対話の最初の一歩は、あなたの求めるものを見ること。',
    'vh.pillar2.k': '知的な連動',
    'vh.pillar2.v': '本当の温かさは、あなたの名前を覚えていること。',
    'vh.pillar3.k': 'シーンガイダンス',
    'vh.pillar3.v': '質の高い提案こそ、最も寄り添う存在。',
    'virtual.matrix.1k': 'PERCEPTION',
    'virtual.matrix.1v': '視覚 · 聴覚 · 感情',
    'virtual.matrix.2k': 'COGNITION',
    'virtual.matrix.2v': '長期記憶 · 嗜好',
    'virtual.matrix.3k': 'DIALOGUE',
    'virtual.matrix.3v': 'リアルタイム · 多ターン',
    'virtual.matrix.4k': 'IDENTITY',
    'virtual.matrix.4v': '人格固定 · ロールプレイ',
    'virtual.demo.placeholder': 'メッセージを入力……',
    'virtual.demo.send': '送信',
    'virtual.demo.perception': '● PERCEPTION FEED',
    'virtual.demo.live': '● LIVE · MIYAKIEN',
    'virtual.demo.session': 'SESSION 0x4F3A',

    'vh.mode.label': 'MODE',
    'vh.mode.2d': '2D · Live2D',
    'vh.mode.3d': '3D',
    'vh.mode.3dPending': '準備中',

    'vh.scene.label': 'SCENE',

    'vh.scene.boutique.label': '精品店員',
    'vh.scene.boutique.tag': 'BOUTIQUE',
    'vh.scene.boutique.g1': 'またお会いできて嬉しいです。前回お買い上げいただいた赤いショルダーバッグ、今日のお召し物にとても似合っていますね。同系色のコインケースも見てみませんか？',
    'vh.scene.boutique.g2': '覚えてくれてたんですね！',
    'vh.scene.boutique.g3': 'もちろんです。あの作品は私もひそかに気に入っていて。ちょうど似た色合いの小物が新しく入荷したばかりです。ご覧になりますか？',
    'vh.scene.boutique.r1': 'こちら、今日のお靴とすごく相性が良いです。試着されますか？',
    'vh.scene.boutique.r2': '前回イヤリングをお探しと仰っていましたよね──ちょうど新作が入ったので、お持ちしますね。',
    'vh.scene.boutique.r3': 'こちらお取り置きしておきますね。ごゆっくり見ていただいて、決まったら戻ってきてください。',
    'vh.scene.boutique.s1': '性別 · 女性',
    'vh.scene.boutique.s2': '年齢 · 25-32',
    'vh.scene.boutique.s3': '注視 · 1.4秒',
    'vh.scene.boutique.s4': '関心度 · 高',
    'vh.scene.boutique.s5': '感情 · 喜び',

    'vh.scene.corporate.label': '企業窓口',
    'vh.scene.corporate.tag': 'CORPORATE',
    'vh.scene.corporate.g1': 'こんにちは。企業様向けにAIソリューションを多数ご用意しています。ちょっとしたゲーム感覚でお互いを知りませんか？貴社の情報や名刺を見せていただければ、ぴったりの提案をいたします。',
    'vh.scene.corporate.g2': 'はい、お話しします。',
    'vh.scene.corporate.g3': 'ありがとうございます。お話しいただいた内容を元に、最適な組み合わせをお選びします。まずは業界からお聞きしてもよろしいですか？',
    'vh.scene.corporate.r1': 'その業界、弊社にも実績がございます。後ほど類似事例をお見せできます。',
    'vh.scene.corporate.r2': 'では適切なプランをお選びします──ご予算感を教えていただけると、より具体的にご提案できます。',
    'vh.scene.corporate.r3': 'かしこまりました。要点をまとめた簡易版をご用意します──5分でご覧いただけます。メールでお送りしましょうか？',
    'vh.scene.corporate.s1': '来訪 · B2B',
    'vh.scene.corporate.s2': 'モード · 探索',
    'vh.scene.corporate.s3': '深度 · 概要',
    'vh.scene.corporate.s4': '推奨 · 商談設定',
    'vh.scene.corporate.s5': '感情 · 集中',

    'vh.scene.ip.label': 'IPツアーガイド',
    'vh.scene.ip.tag': 'IP EVENT',
    'vh.scene.ip.g1': 'なんか疲れてそうですね、クマがすごい！実はこの近くに評判の良いカフェがあるんですよ。',
    'vh.scene.ip.g2': '本当に？',
    'vh.scene.ip.g3': '本当です！特にラテが絶品で。場所を送りましょうか？今日新しく出た限定スイーツの写真もシェアしますね。',
    'vh.scene.ip.r1': 'そういえば、後で疲れたら例のカフェへ案内しますね。窓際の席がとても気持ちいいですよ。',
    'vh.scene.ip.r2': '今日のコーディネートとても素敵ですね、何か特別な予定でも？',
    'vh.scene.ip.r3': 'この展示の奥にある通路、おすすめですよ。さっき写真映えがすごいって誰かが言ってました。',
    'vh.scene.ip.s1': '訪問者 · 新規',
    'vh.scene.ip.s2': '同伴者 · 1人',
    'vh.scene.ip.s3': '関心 · キャラクター',
    'vh.scene.ip.s4': 'エンゲージメント · 高',
    'vh.scene.ip.s5': '感情 · 興奮',

    'vh.placeholder.3d.title': '3Dモデル準備中',
    'vh.placeholder.3d.body': '高精細な3Dインタラクティブ体験は次バージョンで公開予定。',

    'comic.section': '§ 04 — AIコミックスタジオ',
    'comic.title':
      'ひらめきから完成まで、<span class="title-accent-gold">4ステップのパイプライン</span>',
    'comic.subtitle': 'クリエイター主導、AI加速。各ステップが編集可能。商用利用可能な素材を出力します。',

    'comic.01.label': 'ストーリー設計',
    'comic.01.en': 'Story Planning',
    'comic.01.title': 'AI編集者と世界を共創',
    'comic.01.desc':
      'ひらめきから始まり、AI編集者がキャラ・場面・テンポを一緒に組み立てます。対話は編集可能なプロットへ蓄積。',
    'comic.01.m1': '柔軟な深度',
    'comic.01.m2': 'Claude Sonnet 4.6',
    'comic.01.m3': '繁中 · マンガスタイル',

    'comic.02.label': 'キャラ / シーン',
    'comic.02.en': 'Character & Scene Design',
    'comic.02.title': '三面図とシーン・コンセプトを一括ロック',
    'comic.02.desc':
      '主人公の正面・側面・背面と、各シーンのコンセプトボードを同時生成。性格と舞台を物語に紐づけ、コマ・章を跨いでもブレません。',
    'comic.02.m1': 'Nano Banana Pro',
    'comic.02.m2': '三面図 + シーンボード',
    'comic.02.m3': 'キャラ・シーン束縛',

    'comic.03.label': '絵コンテ',
    'comic.03.en': 'Storyboard',
    'comic.03.title': '幕・コマ・テンポを一気通貫',
    'comic.03.desc':
      'プロットからコマを自動生成。比率・構図・吹き出しはコマ単位で調整可能。キャラと場面を自動適用。',
    'comic.03.m1': '幕 / コマ',
    'comic.03.m2': '3:2 · 16:9',
    'comic.03.m3': 'コマ単位再生成',

    'comic.04.label': 'キャンバス',
    'comic.04.en': 'Canvas & Export',
    'comic.04.title': 'レイアウト、書き出し、公開',
    'comic.04.desc':
      'ページレイアウトプレビュー、JSONバックアップ、画像書き出し、コミュニティ公開。作品はあなたの手に。',
    'comic.04.m1': 'JSON 双方向',
    'comic.04.m2': 'PNG 書き出し',
    'comic.04.m3': 'コミュニティ公開',

    'comic.flow': 'FLOW · STORY → CHARACTER → STORYBOARD → CANVAS',
    'comic.flow.note': '商用利用可能、章を跨いだキャラ一貫性',
    'comic.cta': '試してみる',

    'game.section': '§ 03 — AIゲーム',
    'game.title':
      '本当に<span class="title-accent-gold">生きている</span><span class="title-accent-cinnabar">NPC</span>',
    'game.body':
      '各NPCは記憶・目標・感情を持ちます。プレイヤーの選択は痕跡を残し──次に会うとき、彼らはあなたを覚えています。',
    'game.p1': 'ビヘイビアツリー + LLM ハイブリッド意思決定',
    'game.p2': 'プレイヤーのスタイルに合わせた適応的難易度',
    'game.p3': '対話分岐の95%を自動テスト',

    'game.npc1.name': 'Vendor — 李さん',
    'game.npc1.state': 'PATROL · 警戒度 0.3',
    'game.npc1.mood': '冷静',
    'game.npc2.name': 'Mage — 元 · 七',
    'game.npc2.state': 'DIALOGUE · プレイヤー #4F3A',
    'game.npc2.mood': '友好的',
    'game.npc3.name': 'Boss — 黯影',
    'game.npc3.state': 'COMBAT_PREP · フェーズ 2',
    'game.npc3.mood': '挑発的',
    'game.memory1': '第三章でプレイヤーは戻ると約束した。',
    'game.memory2': '前回プレイヤーは「正義」エンディングを選んだ。',
    'game.memory3': 'プレイヤーは戦闘前に交渉を好む。',

    'cta.section': '§ 06 — Contact',
    'cta.title':
      'AIをあなたの<span class="title-accent-cinnabar">次の</span><span class="title-accent-gold">クリエイティブパートナー</span>に。',
    'cta.body':
      '技術提携、ライセンス、貴社の現場でAIが何をできるか──お気軽にご相談ください。',
    'cta.button': 'お問い合わせ',

    'footer.tagline': 'ガマニア・オリジナルコンテンツセンター発。AIで漫画・バーチャルヒューマン・ゲームを再定義。',
    'footer.col1.h': '製品',
    'footer.col1.i1': 'AIコミック',
    'footer.col1.i2': 'バーチャルヒューマン',
    'footer.col1.i3': 'AIゲーム',
    'footer.col1.i4': '知覚エンジン',
    'footer.col2.h': '会社',
    'footer.col2.i1': '会社概要',
    'footer.col2.i2': 'AI倫理',
    'footer.col2.i3': 'ニュース',
    'footer.col2.i4': '採用',
    'footer.col3.h': '法的事項',
    'footer.col3.i1': 'プライバシー',
    'footer.col3.i2': '利用規約',
    'footer.col3.i3': '著作権',
    'footer.copyright': '© 1995 – 2026 Gamania Digital Entertainment Co., Ltd.',

    'lang.switcher.label': '言語',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
