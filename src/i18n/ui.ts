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
    'site.title': 'Muztrix | 賦予數位生命，更有溫度的虛擬交互',
    'site.description':
      '「將靈感織入代碼，為您的品牌建構具備靈魂的虛擬宇宙。」',
    'site.keywords': '有溫度的虛擬人, AI 敘事技術, 數位品牌轉型',

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
    'hero.title.line1': '賦予數位生命，',
    'hero.title.line2': '更有溫度的虛擬視界',
    'hero.desc':
      'Muztrix 誕生於數位娛樂的實戰現場。不僅僅是追隨技術的躍進，我們要將三十年的內容開發經驗，封裝進 AI 的核心。',
    'hero.cta.secondary': '預約DEMO',

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
      '三十載娛樂工藝，定義<span class="title-accent-cinnabar">有溫度的 AI</span><span class="title-accent-gold">交互</span>。',
    'about.body1':
      '站在三十年數位娛樂開發的肩膀上，我們比誰都懂內容創作的痛點與極限。Muztrix 致力於將前沿 AI 技術真正落地──從深度敘事的劇本核心，到具備感知溫度的虛擬人交互。',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
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
    'virtual.matrix.1v': '視覺 · 聽覺 · 情緒',
    'virtual.matrix.2v': '長期記憶 · 偏好',
    'virtual.matrix.3v': '即時 · 多輪 · 情境',
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

    'vh.analysis.t1': '正在觀察你的衣著…',
    'vh.analysis.t2': '正在分析你的表情…',
    'vh.analysis.t3': '辨識到情緒：好奇',
    'vh.analysis.t4': '語調分析中…',
    'vh.analysis.t5': '正在生成回應策略…',

    // ---- Comic Studio (§ 04) ----
    'comic.section': '§ 04 — AI Comic Studio',
    'comic.title':
      '幫你把靈感<span class="title-accent-gold">變成連載作品</span>',
    'comic.subtitle': '由創作者主導，AI 加速。與傳統製程相比效率提升 20 倍！',
    'comic.tagsAria': '此步驟重點能力',

    'comic.01.label': '故事規劃',
    'comic.01.en': 'Story Planning',
    'comic.01.title': '與 AI 編劇共構世界',
    'comic.01.desc':
      '從一句靈感開始，AI 編劇陪你展開角色設定、場景氛圍與分鏡節奏。每一次對話都會沉澱進可編輯的故事大綱。',
    'comic.01.m1': 'AI 編劇陪伴討論',
    'comic.01.m2': '彈性討論深度',
    'comic.01.m3': '多語系',
    'comic.01.m4': '多種輸出格式與風格',

    'comic.01.chat.user1': '想做一部以艾力克斯·霍諾德為主角的漫畫，他在台北 101 進行無繩自由攀登。',
    'comic.01.chat.ai1': '讓我先了解一下你對這個故事的想像——這部漫畫的核心是什麼？是偏向：',
    'comic.01.chat.ai1.opt1': '紀實風格：還原真實攀登過程，強調技術細節和心理狀態',
    'comic.01.chat.ai1.opt2': '戲劇衝突型：加入故事元素，例如阻礙、追逐、或某種秘密任務',
    'comic.01.chat.ai1.opt3': '內心獨白型：攀登過程中穿插大量回憶、哲學思考，偏靜態沉浸',
    'comic.01.chat.ai1.q': '你心目中的氛圍比較偏哪一種？',
    'comic.01.chat.user2': '想結合內心獨白，有深度一點',
    'comic.01.chat.ai2': '很棒耶，我們來聊聊故事的「靈魂」——霍諾德這次攀登台北 101，背後的內心主題是什麼？比如：',
    'comic.01.chat.ai2.opt1': '恐懼與超越：面對死亡的可能性，他如何與恐懼共處、甚至與它和解',
    'comic.01.chat.ai2.opt2': '孤獨與意義：在極限高度上，思索人生的選擇和代價',
    'comic.01.chat.ai2.opt3': '執念與自由：為什麼要做「不需要做」的事，追求純粹的自由',
    'comic.01.chat.ai2.q': '或者你有其他想法也可以說說！這個主題會決定獨白的調性和整個故事的走向',
    'comic.01.chat.pick1': '主題選「恐懼與超越」，他在攀登中與內心的恐懼對話',
    'comic.01.chat.pick2': '主題選「孤獨與意義」，在高空中回想起過去的人與事',
    'comic.01.chat.pick3': '混合兩個主題，攀登越高，內心越複雜',
    'comic.01.chat.ai3': '這個主題非常有深度！孤獨的攀登者懸掛在 509 公尺的高空，腦海中卻是最溫暖或最痛的記憶——這種對比本身就很有詩意。✨',
    'comic.01.chat.ai3b': '想讓回憶的部分更立體一點——',
    'comic.01.chat.ai3c': '霍諾德回想的「過去的人與事」，你有沒有想要放入的元素？比如：',
    'comic.01.chat.ai3.opt1': '某個對他影響深遠的人（家人、朋友、夥伴、還是某個素未謀面卻改變他的人？）',
    'comic.01.chat.ai3.opt2': '某段關鍵經歷（人生轉折點、一次差點放棄的時刻、或某次失去？）',

    'comic.02.label': '角色及場景',
    'comic.02.en': 'Character & Scene Design',
    'comic.02.title': '角色三視圖、場景概念板，一次鎖定',
    'comic.02.desc':
      '主角的正面 / 側面 / 背面三視圖，加上故事場景的概念板。角色與場景同步繫結到敘事，確保跨分鏡、跨章節風格一致。',
    'comic.02.m1': '角色三視圖',
    'comic.02.m2': '高一致性出圖',
    'comic.02.m3': '性格 / 場景綁定',

    'comic.03.label': '分鏡製作',
    'comic.03.en': 'Storyboard',
    'comic.03.title': '幕、格、節奏一次到位',
    'comic.03.desc':
      '依故事大綱自動生成分幕分鏡，比例、構圖、對話框可逐格微調。角色與場景資產自動套用。',
    'comic.03.m1': '批次生成所有分鏡',
    'comic.03.m2': '支援多種圖片比例',
    'comic.03.m3': '筆刷重繪功能',

    'comic.04.label': '發布',
    'comic.04.en': 'Publish & Export',
    'comic.04.title': '立即展示給你的朋友',
    'comic.04.desc':
      '直接檢視成品、匯出圖片或發布到社群。從草稿到上稿，作品始終在你手裡。',
    'comic.04.m1': '預覽成品並公開你的作品',
    'comic.04.m2': '智慧生成封面',
    'comic.04.m3': '素材匯出',
    'comic.04.m4': '社群發布',

    'comic.cta': '立即體驗',

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
      '觸碰<span class="title-accent-cinnabar">有溫度的 AI</span>，啟動<span class="title-accent-gold">商業新體驗</span>。',
    'cta.body':
      '技術合作、產品授權或品牌 IP 打造，讓我們的 AI 引擎成為您最強大的執行動能。',
    'cta.button': '聯絡我們',
    'cta.contact1.role': '技術經理',
    'cta.contact1.name': '周思瑜',
    'cta.contact2.role': '產品副理',
    'cta.contact2.name': '黃雅莉',
    'cta.mailtoFallbackLine': '未開啟郵件程式？',
    'cta.copyEmails': '複製聯絡信箱',
    'cta.copied': '已複製',

    'footer.col1.h': '產品',
    'footer.col1.i1': '虛擬人',
    'footer.col1.i2': 'AI 漫畫',
    'footer.col1.i3': 'AI 遊戲',
    'footer.related.h': '相關網站',
    'footer.related.gamania': '橘子集團',
    'footer.related.mojoin': 'MOJOIN',
    'footer.related.mangacanvas': 'Muztrix漫畫創作',
    'footer.copyright': '© 1995 - 2026 gamania',
    'footer.address': '台灣臺北市內湖區瑞湖街111號',

    // ---- Product Cards (entry page) ----
    'products.vh.title': '虛擬人',
    'products.vh.summary': '打造您的專屬虛擬代言人，探索無限商機！',
    'products.vh.cta': '了解更多',
    'products.game.title': 'AI 遊戲',
    'products.game.summary': 'AI 助您加速遊戲開發，只要有想法就能實現！',
    'products.game.cta': '了解更多',
    'products.comic.title': 'AI 漫畫',
    'products.comic.summary': '將微小的靈感放大至完稿發布，AI 編輯陪你創造無限篇章！',
    'products.comic.cta': '了解更多',

    // legacy / optional kept
    'lang.switcher.label': '語系',
  },

  en: {
    'site.title':
      'Muztrix | Breathing life into digital — warmer, human-centered virtual interaction',
    'site.description':
      'Weaving inspiration into code — building a virtual universe with soul for your brand.',
    'site.keywords':
      'warm virtual humans, AI narrative technology, digital brand transformation',

    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.virtualHuman': 'Virtual Human',
    'nav.comic': 'AI Comic',
    'nav.game': 'AI Game',
    'nav.contact': 'Contact',
    'nav.connect': 'Connect',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'Virtually Human, ',
    'hero.title.line2': 'Truly Warm.',
    'hero.desc':
      'Muztrix was born on the front lines of digital entertainment. More than chasing each technical leap, we pack three decades of content craft into the core of AI.',
    'hero.cta.secondary': 'Book a demo',

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
      'Thirty years of entertainment craft — defining <span class="title-accent-cinnabar">warm AI</span> <span class="title-accent-gold">interaction</span>.',
    'about.body1':
      'Standing on three decades of digital entertainment development, we understand creation’s pain points and limits better than anyone. Muztrix lands frontier AI in practice — from deep narrative scripting cores to virtual human interaction you can truly feel.',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title':
      'AI that sees you, <span class="title-accent-cinnabar">remembers you</span>',
    'virtual.body1':
      'Perception, memory, scene-aware response — three layers that define a virtual human with real warmth, ready to extend your brand naturally across every context.',
    'virtual.body2': '',

    'virtual.matrix.1v': 'Vision · Audio · Emotion',
    'virtual.matrix.2v': 'Long memory · Preferences',
    'virtual.matrix.3v': 'Real-time · Multi-turn · Context',
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

    'vh.analysis.t1': 'Observing your attire…',
    'vh.analysis.t2': 'Analyzing your expression…',
    'vh.analysis.t3': 'Emotion detected: Curious',
    'vh.analysis.t4': 'Analyzing vocal tone…',
    'vh.analysis.t5': 'Generating response strategy…',

    'comic.section': '§ 04 — AI Comic Studio',
    'comic.title':
      'Turn your spark <span class="title-accent-gold">into a serial work</span>',
    'comic.subtitle':
      "Creator-led, AI-accelerated. 20× faster than traditional production!",
    'comic.tagsAria': 'Capabilities for this step',

    'comic.01.label': 'Story Planning',
    'comic.01.en': 'Story Planning',
    'comic.01.title': 'Co-author with AI',
    'comic.01.desc':
      "Start from a single spark. The AI editor walks character, scene, and pacing with you. Every conversation distills into an editable story outline.",
    'comic.01.m1': 'AI co-writing companion',
    'comic.01.m2': 'Flexible discussion depth',
    'comic.01.m3': 'Multilingual',
    'comic.01.m4': 'Multiple formats & styles',

    'comic.01.chat.user1': 'I want to create a manga featuring Alex Honnold free-soloing Taipei 101.',
    'comic.01.chat.ai1': 'Let me understand your vision for this story — what\'s the core of this manga? Is it leaning toward:',
    'comic.01.chat.ai1.opt1': 'Documentary style: faithfully recreating the climb, emphasizing technical detail and mental state',
    'comic.01.chat.ai1.opt2': 'Dramatic conflict: adding story elements like obstacles, pursuit, or a secret mission',
    'comic.01.chat.ai1.opt3': 'Inner monologue: interspersing memories and philosophical reflection during the climb, more contemplative',
    'comic.01.chat.ai1.q': 'Which atmosphere are you leaning toward?',
    'comic.01.chat.user2': 'I\'d like to combine inner monologue, something with more depth',
    'comic.01.chat.ai2': 'Great choice! Let\'s talk about the "soul" of the story — what\'s the inner theme behind Honnold\'s climb up Taipei 101? For example:',
    'comic.01.chat.ai2.opt1': 'Fear & Transcendence: facing mortality, how he coexists with fear and even reconciles with it',
    'comic.01.chat.ai2.opt2': 'Solitude & Meaning: at extreme heights, reflecting on life\'s choices and their costs',
    'comic.01.chat.ai2.opt3': 'Obsession & Freedom: why do something "unnecessary" — the pursuit of pure freedom',
    'comic.01.chat.ai2.q': 'Or feel free to share your own ideas! This theme will shape the tone of the monologue and the story\'s direction',
    'comic.01.chat.pick1': 'Theme: "Fear & Transcendence" — he dialogues with his inner fear during the climb',
    'comic.01.chat.pick2': 'Theme: "Solitude & Meaning" — recalling people and events from the past while high above',
    'comic.01.chat.pick3': 'Blend both themes — the higher he climbs, the more complex his inner world becomes',
    'comic.01.chat.ai3': 'This theme has incredible depth! A solitary climber suspended 509 meters up, yet his mind holds the warmest or most painful memories — that contrast alone is deeply poetic. ✨',
    'comic.01.chat.ai3b': 'Let\'s make the memory segments more vivid —',
    'comic.01.chat.ai3c': 'For the "people and events" Honnold recalls, do you have elements you\'d like to include? For example:',
    'comic.01.chat.ai3.opt1': 'A person who profoundly influenced him (family, friend, partner, or someone he never met but who changed him?)',
    'comic.01.chat.ai3.opt2': 'A pivotal experience (a life turning point, a moment he almost gave up, or a loss?)',

    'comic.02.label': 'Character & Scene',
    'comic.02.en': 'Character & Scene Design',
    'comic.02.title': 'Three-view turnaround + scene boards',
    'comic.02.desc':
      "Front, side, and back rendered together with concept boards for each scene. Character + setting bind to the story so style holds across panels and chapters.",
    'comic.02.m1': 'Character turnaround',
    'comic.02.m2': 'High-consistency render',
    'comic.02.m3': 'Character / scene binding',

    'comic.03.label': 'Storyboard',
    'comic.03.en': 'Storyboard',
    'comic.03.title': 'Acts, panels, and pacing',
    'comic.03.desc':
      "Auto-generate panels from the outline. Ratio, composition, and dialogue boxes are tunable per panel; characters and scenes auto-apply.",
    'comic.03.m1': 'Batch panel generation',
    'comic.03.m2': 'Multiple aspect ratios',
    'comic.03.m3': 'Brush re-render',

    'comic.04.label': 'Publish',
    'comic.04.en': 'Export & share',
    'comic.04.title': 'Show it off to your friends',
    'comic.04.desc':
      "Preview the finished work, export images, or publish to the community. From draft to release, your work stays in your hands.",
    'comic.04.m1': 'Preview and publish your work',
    'comic.04.m2': 'Smart cover generation',
    'comic.04.m3': 'Asset export',
    'comic.04.m4': 'Community publish',

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
      'Connect with <span class="title-accent-cinnabar">human-centered AI</span> — <span class="title-accent-gold">ignite new business experiences</span>.',
    'cta.body':
      'Technology partnerships, product licensing, or brand IP — let our AI engine become your most powerful driver of execution.',
    'cta.button': 'Get in Touch',
    'cta.contact1.role': 'Technical Manager',
    'cta.contact1.name': 'Szu-Yu Chou',
    'cta.contact2.role': 'Associate Product Manager',
    'cta.contact2.name': 'Ya-Li Huang',
    'cta.mailtoFallbackLine': 'Mail app not opening?',
    'cta.copyEmails': 'Copy addresses',
    'cta.copied': 'Copied',

    'footer.col1.h': 'PRODUCT',
    'footer.col1.i1': 'Virtual Human',
    'footer.col1.i2': 'AI Comic',
    'footer.col1.i3': 'AI Game',
    'footer.related.h': 'Related Sites',
    'footer.related.gamania': 'Gamania',
    'footer.related.mojoin': 'MOJOIN',
    'footer.related.mangacanvas': 'Muztrix Comic Studio',
    'footer.copyright': '© 1995 - 2026 gamania',
    'footer.address': '111 Ruihu Street, Neihu District, Taipei City, Taiwan',

    // ---- Product Cards (entry page) ----
    'products.vh.title': 'Virtual Human',
    'products.vh.summary': 'AI that sees you, hears you, and remembers you — a warm brand ambassador',
    'products.vh.cta': 'Learn more',
    'products.game.title': 'AI Game',
    'products.game.summary': 'From worldbuilding to gameplay, AI breathes life into your narrative game',
    'products.game.cta': 'Learn more',
    'products.comic.title': 'AI Comic',
    'products.comic.summary': 'From a single spark to published pages — AI walks every panel with you',
    'products.comic.cta': 'Learn more',

    'lang.switcher.label': 'Language',
  },

  ja: {
    'site.title':
      'Muztrix | デジタルに命を吹き込む、より温かいバーチャル体験',
    'site.description':
      'インスピレーションをコードに織り込み、魂のある仮想宇宙をブランドのために。',
    'site.keywords':
      '温かみのあるバーチャルヒューマン, AIナラティブ技術, デジタルブランド変革',

    'nav.solutions': 'ソリューション',
    'nav.about': '会社概要',
    'nav.virtualHuman': 'バーチャルヒューマン',
    'nav.comic': 'AIコミック',
    'nav.game': 'AIゲーム',
    'nav.contact': 'お問い合わせ',
    'nav.connect': 'お問い合わせ',

    'hero.eyebrow': 'Gamania Original Content Center',
    'hero.title.line1': 'デジタルに命を。',
    'hero.title.line2': '心に温度を。',
    'hero.desc':
      'Muztrixはデジタルエンタメの最前線から生まれました。技術の飛躍を追うだけではなく、三十年のコンテンツ開発の蓄積をAIの核に封じ込めます。',
    'hero.cta.secondary': 'デモを予約',

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
      '三十載のエンタメ工芸、<span class="title-accent-cinnabar">温かいAI</span><span class="title-accent-gold">インタラクション</span>を定義。',
    'about.body1':
      '三十年のデジタルエンタメ開発の礎の上に立ち、コンテンツ制作の痛みと限界を誰より理解しています。Muztrixは最先端のAIを現場へ──深い物語の脚本の核から、感知できる温かみのあるバーチャルヒューマン対話まで。',
    'about.portrait.label': 'VH/0001 — PERCEPTION ENGINE',
    'about.stat.eyebrow': 'Since 1995',
    'about.ethical.label': '★ ETHICAL CORE',
    'about.ethical.body': 'AI driven by moral frameworks and human values.',

    'virtual.section': '§ 02 — Virtual Human',
    'virtual.title':
      '見て、聴いて、<span class="title-accent-cinnabar">覚える</span>AI',
    'virtual.body1':
      '知覚・記憶・シーンへの対応──3つのレイヤーで温かみのあるバーチャルヒューマンを定義し、あらゆるシーンであなたのブランドを自然に拡張します。',
    'virtual.body2': '',

    'virtual.matrix.1v': '視覚 · 聴覚 · 感情',
    'virtual.matrix.2v': '長期記憶 · 嗜好',
    'virtual.matrix.3v': 'リアルタイム · 多ターン · シーン',
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

    'vh.analysis.t1': '服装を観察中…',
    'vh.analysis.t2': '表情を分析中…',
    'vh.analysis.t3': '感情検出：好奇心',
    'vh.analysis.t4': '声のトーンを分析中…',
    'vh.analysis.t5': '応答戦略を生成中…',

    'comic.section': '§ 04 — AIコミックスタジオ',
    'comic.title':
      'ひらめきを<span class="title-accent-gold">連載作品に変える</span>',
    'comic.subtitle': 'クリエイター主導、AI加速。従来の制作と比べて効率20倍アップ！',
    'comic.tagsAria': 'このステップの機能タグ',

    'comic.01.label': 'ストーリー設計',
    'comic.01.en': 'Story Planning',
    'comic.01.title': 'AI編集者と世界を共創',
    'comic.01.desc':
      'ひらめきから始まり、AI編集者がキャラ・場面・テンポを一緒に組み立てます。対話は編集可能なプロットへ蓄積。',
    'comic.01.m1': 'AI共同執筆',
    'comic.01.m2': '柔軟な対話深度',
    'comic.01.m3': '多言語対応',
    'comic.01.m4': '多様なフォーマット・スタイル',

    'comic.01.chat.user1': 'アレックス・ホノルドを主人公にした漫画を作りたい。台北101をフリーソロで登る話。',
    'comic.01.chat.ai1': 'この物語へのイメージを教えてください——この漫画の核心は何でしょう？方向性としては：',
    'comic.01.chat.ai1.opt1': 'ドキュメンタリー風：実際の登攀を忠実に再現し、技術的ディテールと心理状態を重視',
    'comic.01.chat.ai1.opt2': 'ドラマチック衝突型：障害、追跡、秘密のミッションなどのストーリー要素を加える',
    'comic.01.chat.ai1.opt3': '内面モノローグ型：登攀中に大量の回想や哲学的思考を挟み、静かな没入感を重視',
    'comic.01.chat.ai1.q': 'どの雰囲気がイメージに近いですか？',
    'comic.01.chat.user2': '内面モノローグを取り入れて、深みのあるものにしたい',
    'comic.01.chat.ai2': '素晴らしい選択ですね！物語の「魂」について話しましょう——ホノルドが台北101を登る背後にある内面のテーマは？例えば：',
    'comic.01.chat.ai2.opt1': '恐怖と超越：死の可能性に直面し、恐怖とどう共存し、和解するか',
    'comic.01.chat.ai2.opt2': '孤独と意味：極限の高さで、人生の選択とその代償を思索する',
    'comic.01.chat.ai2.opt3': '執念と自由：「やる必要のないこと」をなぜやるのか——純粋な自由の追求',
    'comic.01.chat.ai2.q': '他にアイデアがあればぜひ教えてください！このテーマがモノローグのトーンと物語全体の方向性を決めます',
    'comic.01.chat.pick1': 'テーマは「恐怖と超越」——登攀中に内なる恐怖と対話する',
    'comic.01.chat.pick2': 'テーマは「孤独と意味」——高空で過去の人や出来事を回想する',
    'comic.01.chat.pick3': '両方のテーマを混合——高く登るほど、内面は複雑になる',
    'comic.01.chat.ai3': 'このテーマは非常に深いですね！509メートルの高空に宙吊りの孤独な登攀者、しかし脳裏には最も温かいか最も痛い記憶がある——このコントラスト自体がとても詩的です。✨',
    'comic.01.chat.ai3b': '回想の部分をもっと立体的にしましょう——',
    'comic.01.chat.ai3c': 'ホノルドが回想する「過去の人と出来事」に入れたい要素はありますか？例えば：',
    'comic.01.chat.ai3.opt1': '彼に深い影響を与えた人物（家族、友人、パートナー、または会ったことはないが人生を変えた人？）',
    'comic.01.chat.ai3.opt2': '重要な経験（人生の転機、諦めかけた瞬間、あるいは喪失の体験？）',

    'comic.02.label': 'キャラ / シーン',
    'comic.02.en': 'Character & Scene Design',
    'comic.02.title': '三面図とシーン・コンセプトを一括ロック',
    'comic.02.desc':
      '主人公の正面・側面・背面と、各シーンのコンセプトボードを同時生成。性格と舞台を物語に紐づけ、コマ・章を跨いでもブレません。',
    'comic.02.m1': 'キャラ三面図',
    'comic.02.m2': '高一貫性レンダリング',
    'comic.02.m3': 'キャラ・シーン束縛',

    'comic.03.label': '絵コンテ',
    'comic.03.en': 'Storyboard',
    'comic.03.title': '幕・コマ・テンポを一気通貫',
    'comic.03.desc':
      'プロットからコマを自動生成。比率・構図・吹き出しはコマ単位で調整可能。キャラと場面を自動適用。',
    'comic.03.m1': '全コマ一括生成',
    'comic.03.m2': '多様な画像比率に対応',
    'comic.03.m3': 'ブラシ再描画',

    'comic.04.label': '公開',
    'comic.04.en': 'Publish & Export',
    'comic.04.title': '今すぐ友達に披露しよう',
    'comic.04.desc':
      '完成作品をそのままプレビュー、画像書き出し、コミュニティ公開。下書きから公開まで、作品はあなたの手に。',
    'comic.04.m1': '成果をプレビューして公開',
    'comic.04.m2': '表紙の自動生成',
    'comic.04.m3': '素材エクスポート',
    'comic.04.m4': 'コミュニティ公開',

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
      '温度のある<span class="title-accent-cinnabar">AI</span>に触れ、<span class="title-accent-gold">ビジネス体験を新たに始動</span>。',
    'cta.body':
      '技術提携・製品ライセンス・ブランドIPの構築まで、私たちのAIエンジンを、貴社の最強の実行エンジンに。',
    'cta.button': 'お問い合わせ',
    'cta.contact1.role': 'テクニカルマネージャー',
    'cta.contact1.name': '周思瑜',
    'cta.contact2.role': 'プロダクト副マネージャー',
    'cta.contact2.name': '黃雅莉',
    'cta.mailtoFallbackLine': 'メールが開きませんか？',
    'cta.copyEmails': 'アドレスをコピー',
    'cta.copied': 'コピーしました',

    'footer.col1.h': '製品',
    'footer.col1.i1': 'バーチャルヒューマン',
    'footer.col1.i2': 'AIコミック',
    'footer.col1.i3': 'AIゲーム',
    'footer.related.h': '関連サイト',
    'footer.related.gamania': 'ガマニア',
    'footer.related.mojoin': 'MOJOIN',
    'footer.related.mangacanvas': 'Muztrix コミック',
    'footer.copyright': '© 1995 - 2026 gamania',
    'footer.address': '台湾台北市內湖区瑞湖街111号',

    // ---- Product Cards (entry page) ----
    'products.vh.title': 'バーチャルヒューマン',
    'products.vh.summary': '見て、聴いて、覚える——温かみのあるAIブランドアンバサダー',
    'products.vh.cta': '詳しく見る',
    'products.game.title': 'AIゲーム',
    'products.game.summary': '世界観からゲームプレイまで、AIがナラティブゲームに魂を吹き込む',
    'products.game.cta': '詳しく見る',
    'products.comic.title': 'AIコミック',
    'products.comic.summary': 'ひらめきから出版まで、AIが全ページを共に歩む',
    'products.comic.cta': '詳しく見る',

    'lang.switcher.label': '言語',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
