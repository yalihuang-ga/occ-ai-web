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

    // VH Hero Section
    'vh.hero.title':
      '能感知人心的<br/><span class="title-accent-cinnabar">智慧數據入口</span>',
    'vh.hero.subtitle':
      '透過前端鏡頭，將衣著風格、色彩偏好、會員記憶與當下情緒轉化為即時決策，讓虛擬人成為更有溫度的品牌入口。',
    'vh.hero.features.label': 'AI 虛擬人核心能力',
    'vh.hero.feature.perception': '多模態實時感知',
    'vh.hero.feature.perception.body': '辨識性別年齡、衣著風格、色彩偏好與情緒起伏。',
    'vh.hero.feature.member': '會員體系無縫串接',
    'vh.hero.feature.member.body': '打破線上線下壁壘，自動識別 VIP 顧客偏好。',
    'vh.hero.feature.persona': '動態人設調校',
    'vh.hero.feature.persona.body': '根據顧客狀態，即時修正語氣、策略與回應溫度。',
    'vh.hero.hud.perception': 'Style / Emotion / Color',
    'vh.hero.hud.member': 'VIP preference matched',
    'vh.hero.hud.persona': 'Warm response tuned',
    'vh.hero.visual.alt': 'Guoya AI virtual human transforming into a digital data grid',
    'vh.hero.tab.persona': 'Digital Persona',
    'vh.hero.tab.brain': 'Core Brain',
    'vh.hero.tab.acoustics': 'Global Acoustics',

    // Scene toggle label
    'vh.scene.label': 'SCENE',
    'vh.scenes.title': '可以用在什麼地方？',
    'vh.scenes.subtitle': '從精品零售到企業銷售、品牌代言，AI 虛擬人已經準備好為你的商業場景服務。',

    // Scene 1: 精品店員 (Luxury boutique)
    'vh.scene.boutique.title': '貼心專屬 AI 導購',
    'vh.scene.boutique.desc': '虛擬店員除了解決人力以及陪訓費時的問題之外，更能確實的記住顧客的過往資料，並結合商家的最新情報，為顧客做最合適的推薦！',
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
    'vh.scene.corporate.title': '企業智慧銷售員',
    'vh.scene.corporate.desc': '化身為真實的業務銷售，讓他看一眼你的名片便能記住你的資訊，進而給你量身打造的企業解決方案！',
    'vh.scene.corporate.label': '企業接待',
    'vh.scene.corporate.tag': 'CORPORATE',
    'vh.scene.corporate.g1': '您好，我們有針對企業提供許多 AI 解決方案。要不要與我玩個小遊戲互相認識一下？告訴我您的公司資訊，或讓我看看您的名片，我來幫您做介紹。',
    'vh.scene.corporate.g2': '[ AI 辨識名片中... ]',
    'vh.scene.corporate.g3': '哦！是來自橘子集團原創中心的周先生！我發現貴集團近期也非常積極的投入AI相關領域呢！我們可以來聊聊娛樂遊戲面向的方案哦。',
    'vh.scene.corporate.r1': '您這產業我們有不少合作經驗，等等可以分享相似的案例給您。',
    'vh.scene.corporate.r2': '那我來幫您匹配──如果預算範圍方便透露一下，我可以更精準推薦。',
    'vh.scene.corporate.r3': '太好了，我把方案精簡版整理出來，五分鐘就能看完。要直接寄到您信箱嗎？',
    'vh.scene.corporate.s1': '來訪屬性 · B2B',
    'vh.scene.corporate.s2': '詢問模式 · 探索',
    'vh.scene.corporate.s3': '對話深度 · 概覽',
    'vh.scene.corporate.s4': '建議行動 · 安排會議',
    'vh.scene.corporate.s5': '情緒 · 專注',

    // Scene 3: IP 互動 (IP interaction / event / brand)
    'vh.scene.ip.title': '品牌 IP 虛擬代言人',
    'vh.scene.ip.desc': '將品牌形象轉化為互動式虛擬角色，甚至開直播與粉絲聊天互動！提升品牌IP的溫度以及話題性！',
    'vh.scene.ip.label': 'IP 導覽互動',
    'vh.scene.ip.tag': 'IP EVENT',
    'vh.scene.ip.g1': '你看起來很疲累的樣子耶，黑眼圈怎麼那麼重？跟你說～這附近有一家評價很高的咖啡店。',
    'vh.scene.ip.g2': '真的假的？',
    'vh.scene.ip.g3': '真的！他們家的拿鐵網路上評價很高哦！這是店家位置資訊給你參考，順便附上一張本週剛上架的限定甜點照～',
    'vh.scene.ip.r1': '對了，等等若你逛累了我再帶你去那家店，他們有靠窗座位很舒服。',
    'vh.scene.ip.r2': '你今天的穿搭蠻好看的耶，是有什麼特別行程嗎？',
    'vh.scene.ip.r3': '這個展區後面的那條走道我推薦你去看看，剛剛有人說那邊很適合拍照。',
    'vh.scene.ip.s1': '訪客類型 · 新訪客',
    'vh.scene.ip.s2': '同行者 · 1 人',
    'vh.scene.ip.s3': '興趣方向 · 角色',
    'vh.scene.ip.s4': '互動意願 · 高',
    'vh.scene.ip.s5': '情緒 · 興奮',

    // Perception floating labels
    'vh.label.boutique.1': 'AI 正在觀察你的穿著',
    'vh.label.boutique.2': '辨識回訪顧客中...',
    'vh.label.boutique.3': '分析偏好風格',
    'vh.label.corporate.1': 'AI 正在辨識名片',
    'vh.label.corporate.2': '分析企業需求中...',
    'vh.label.corporate.3': '匹配解決方案',
    'vh.label.ip.1': 'AI 正在辨識你的情緒',
    'vh.label.ip.2': '偵測疲勞指數中...',
    'vh.label.ip.3': '推薦附近資源',

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

    // ---- Warm AI manifesto (Booth Deck narrative) ----
    'warm.banner.eyebrow': 'COMPUTEX 2026',
    'warm.banner.text': '展期於台北南港展覽館・歡迎走進原創中心 AI 攤位，被記得一次。',
    'warm.banner.cta': '查看活動資訊',

    'warm.why.eyebrow': 'WHY · 為什麼這件事重要',
    'warm.why.title':
      '科技越進步，人越<span class="title-accent-cinnabar">孤獨</span>。',
    'warm.why.subtitle': '這些事，每天都在發生──',
    'warm.why.case1.title': '早餐店阿姨',
    'warm.why.case1.body':
      '「帥哥，還是蔬菜蛋餅加兩匙辣、配一杯中冰奶嗎？」她不需要你說。她就是知道。讓你每天回去的理由——不是蛋餅特別好吃，是有人記得你。',
    'warm.why.case2.title': '吃素的人',
    'warm.why.case2.body':
      '進每一家新餐廳，都要先說一遍「我吃素」。說了不一定記得。記得了換一個服務生又要重說。不是抱怨，是每次都要重新解釋自己這件事，真的很累。',
    'warm.why.case3.title': '有過敏需求的人',
    'warm.why.case3.body':
      '問了第一個問題，店員去問廚師，回來答了，又有新問題，再去問⋯⋯最後將就點了一個不是真正想吃的東西。不是誰的錯，是每個環節都在消耗人。',
    'warm.why.closing.lead': '缺工的時代，這些本來就做不到的事只會更難。',
    'warm.why.closing.body':
      '但人需要被接住這件事，不會因為缺工就消失。那個記得你的感覺，一旦消失，就很難找回來。',
    'warm.why.closing.tag':
      'AI 的溫度，不是來自<span class="title-accent-gold">知識的廣度</span>，是來自<span class="title-accent-cinnabar">記憶的深度</span>。',

    'warm.how.eyebrow': 'HOW · 我們用什麼方法',
    'warm.how.title': '用技術，<span class="title-accent-gold">讓溫暖延續</span>。',
    'warm.how.subtitle':
      '三層架構，讓 AI 不只是回應，而是真的在注意你、記得你、迎接你。',
    'warm.how.eyes.label': 'EYES · 眼睛',
    'warm.how.eyes.title': '看見你',
    'warm.how.eyes.body': '人臉辨識、衣著感知、情緒偵測。',
    'warm.how.eyes.example':
      '你今天穿白衣服，它提醒你別點深色飲料──這不是功能，這是有人在注意你。',
    'warm.how.brain.label': 'BRAIN · 大腦',
    'warm.how.brain.title': '記得你',
    'warm.how.brain.body': '會員記憶、習慣累積、跨場域同步。',
    'warm.how.brain.example':
      '飯少、少糖去冰、醋飯要溫的──你不需要每次重新解釋自己。',
    'warm.how.heart.label': 'HEART · 心',
    'warm.how.heart.title': '主動迎接你',
    'warm.how.heart.body': '不等你問，它先開口。用你喜歡的語氣，說你在乎的事。',
    'warm.how.heart.example': '溫度可以調──它記得你是哪種人。',

    'warm.path.eyebrow': 'OUR PATH',
    'warm.path.title':
      '如果你也相信，<span class="title-accent-cinnabar">溫度</span>這件事很重要──',
    'warm.path.step1.tag': 'NOW',
    'warm.path.step1.title': 'COMPUTEX 2026',
    'warm.path.step1.body': '真實場域，讓人告訴我們答案。',
    'warm.path.step2.tag': 'NEXT',
    'warm.path.step2.title': '第一個 PILOT',
    'warm.path.step2.body': '一個品牌，用數據說話。',
    'warm.path.step3.tag': 'THEN',
    'warm.path.step3.title': '台灣 → 日本',
    'warm.path.step3.body': '相同的問題，相同的需求──所有需要被接住的場域。',
    'warm.path.note': '我們正在找第一個相信這件事的品牌，一起用數據說話。',

    'warm.outro.title':
      'AI made the world <span class="title-accent-gold">smarter</span>.',
    'warm.outro.title.line2':
      'You deserve to be <span class="title-accent-cinnabar">remembered</span>.',
    'warm.outro.body':
      '如果你也有感──不管你是品牌、夥伴、還是純粹對這件事有感，展覽結束後，我們可以找個時間喝杯咖啡，或是直接去你的店裡走走，看看這件事在你這裡長什麼樣子。',
    'warm.outro.cta': '聯絡我們',

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

    // VH Hero Section
    'vh.hero.title':
      'The intelligent data gateway<br/><span class="title-accent-cinnabar">that senses human intent</span>',
    'vh.hero.subtitle':
      'Front-facing perception turns style, color preference, member memory, and real-time emotion into decisions, making the virtual human a warmer brand entry point.',
    'vh.hero.features.label': 'AI virtual human core capabilities',
    'vh.hero.feature.perception': 'Real-time multimodal sensing',
    'vh.hero.feature.perception.body': 'Identify age, gender, outfit style, color preference, and emotional shifts.',
    'vh.hero.feature.member': 'Seamless member profile sync',
    'vh.hero.feature.member.body': 'Bridge online and offline data while recognizing VIP customer preferences.',
    'vh.hero.feature.persona': 'Adaptive persona tuning',
    'vh.hero.feature.persona.body': 'Adjust tone, strategy, and response warmth based on the customer state.',
    'vh.hero.hud.perception': 'Style / Emotion / Color',
    'vh.hero.hud.member': 'VIP preference matched',
    'vh.hero.hud.persona': 'Warm response tuned',
    'vh.hero.visual.alt': 'Guoya AI virtual human transforming into a digital data grid',
    'vh.hero.tab.persona': 'Digital Persona',
    'vh.hero.tab.brain': 'Core Brain',
    'vh.hero.tab.acoustics': 'Global Acoustics',

    'vh.scene.label': 'SCENE',
    'vh.scenes.title': 'Where can it be used?',
    'vh.scenes.subtitle': 'From luxury retail to enterprise sales and brand endorsement — AI virtual humans are ready to serve your business scenarios.',

    'vh.scene.boutique.label': 'Boutique',
    'vh.scene.boutique.title': 'Your Dedicated AI Shopping Guide',
    'vh.scene.boutique.desc': 'Beyond solving staffing and training costs, our virtual assistant truly remembers each customer\'s history and combines it with the latest promotions to deliver perfectly tailored recommendations.',
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
    'vh.scene.corporate.title': 'Enterprise AI Sales Rep',
    'vh.scene.corporate.desc': 'Acts as a real sales representative — just one glance at your business card and it remembers who you are, then delivers a tailor-made enterprise solution just for you.',
    'vh.scene.corporate.tag': 'CORPORATE',
    'vh.scene.corporate.g1': "Hello! We offer many AI solutions for enterprises. Want to play a quick game to get to know each other? Tell me about your company, or show me your business card, and I'll match you with the right options.",
    'vh.scene.corporate.g2': '[ AI scanning business card... ]',
    'vh.scene.corporate.g3': "Oh! Mr. Zhou from Gamania\'s Original Center! I see your group has been actively investing in AI recently. Let\'s discuss entertainment and gaming solutions together!",
    'vh.scene.corporate.r1': "We've worked with companies in your industry — happy to share similar case studies.",
    'vh.scene.corporate.r2': "Then let me match you up — if you're comfortable sharing your budget range, I can recommend more precisely.",
    'vh.scene.corporate.r3': "Great. I'll prepare a condensed version of the proposal — only a 5-minute read. Shall I send it to your email?",
    'vh.scene.corporate.s1': 'Visitor · B2B',
    'vh.scene.corporate.s2': 'Mode · Discovery',
    'vh.scene.corporate.s3': 'Depth · Overview',
    'vh.scene.corporate.s4': 'Next · Schedule call',
    'vh.scene.corporate.s5': 'Emotion · Focused',

    'vh.scene.ip.label': 'IP Tour & Guide',
    'vh.scene.ip.title': 'Brand IP Virtual Spokesperson',
    'vh.scene.ip.desc': 'Transform your brand identity into an interactive virtual character that can even livestream and chat with fans! Boost your brand IP\'s warmth and buzz.',
    'vh.scene.ip.tag': 'IP EVENT',
    'vh.scene.ip.g1': "You look exhausted — those dark circles though! Hey, there's a really highly-rated café right around here.",
    'vh.scene.ip.g2': "Really?",
    'vh.scene.ip.g3': "Absolutely! Their lattes have amazing reviews online. Here\'s the location info for you, plus a photo of this week\'s new limited dessert!",
    'vh.scene.ip.r1': "Oh by the way — if you get tired later I'll take you to that café. They've got a great window seat.",
    'vh.scene.ip.r2': "Your outfit today looks really nice — got something special planned?",
    'vh.scene.ip.r3': "I'd recommend the corridor behind this exhibit area — someone just said it's perfect for photos.",
    'vh.scene.ip.s1': 'Visitor · New',
    'vh.scene.ip.s2': 'Companions · 1',
    'vh.scene.ip.s3': 'Interest · Characters',
    'vh.scene.ip.s4': 'Engagement · High',
    'vh.scene.ip.s5': 'Emotion · Excited',

    // Perception floating labels
    'vh.label.boutique.1': 'AI analyzing your outfit',
    'vh.label.boutique.2': 'Identifying returning customer...',
    'vh.label.boutique.3': 'Analyzing style preferences',
    'vh.label.corporate.1': 'AI scanning business card',
    'vh.label.corporate.2': 'Analyzing enterprise needs...',
    'vh.label.corporate.3': 'Matching solutions',
    'vh.label.ip.1': 'AI detecting your emotion',
    'vh.label.ip.2': 'Measuring fatigue level...',
    'vh.label.ip.3': 'Recommending nearby resources',

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

    // ---- Warm AI manifesto (Booth Deck narrative) ----
    'warm.banner.eyebrow': 'COMPUTEX 2026',
    'warm.banner.text': 'Visit Gamania OCC AI booth at Taipei Nangang — be remembered, just once.',
    'warm.banner.cta': 'Event details',

    'warm.why.eyebrow': 'WHY · It matters',
    'warm.why.title':
      'The smarter the tech, the <span class="title-accent-cinnabar">lonelier</span> we get.',
    'warm.why.subtitle': 'Small things, every single day —',
    'warm.why.case1.title': 'The breakfast aunty',
    'warm.why.case1.body':
      '"Same as usual? Veggie egg crepe with two scoops of chili, medium iced milk tea?" She just knows. The reason you keep coming back isn\'t the food — it\'s being remembered.',
    'warm.why.case2.title': 'The vegetarian',
    'warm.why.case2.body':
      'Walking into a new restaurant means saying "I\'m vegetarian" again. They might forget. Even if they remember, the next server won\'t. It\'s not a complaint — re-explaining yourself, every time, is exhausting.',
    'warm.why.case3.title': 'The allergic guest',
    'warm.why.case3.body':
      'Ask, the server checks with the chef, comes back, ask again, check again… You end up settling for something you didn\'t really want. No one\'s fault — but every step wears people down.',
    'warm.why.closing.lead': 'In a labour-shortage era, what was already hard becomes harder.',
    'warm.why.closing.body':
      'But the human need to feel held doesn\'t disappear with staffing levels. Once that "being remembered" feeling is gone, it\'s very hard to bring back.',
    'warm.why.closing.tag':
      'Warmth in AI doesn\'t come from <span class="title-accent-gold">how much it knows</span> — it comes from <span class="title-accent-cinnabar">how deeply it remembers</span>.',

    'warm.how.eyebrow': 'HOW · Our approach',
    'warm.how.title': 'Use technology to <span class="title-accent-gold">keep warmth alive</span>.',
    'warm.how.subtitle':
      'Three layers — so AI doesn\'t just respond, it notices you, remembers you, welcomes you.',
    'warm.how.eyes.label': 'EYES',
    'warm.how.eyes.title': 'See you',
    'warm.how.eyes.body': 'Face recognition, attire perception, emotion sensing.',
    'warm.how.eyes.example':
      'You\'re wearing white today — it gently suggests you skip the dark drink. Not a feature. Someone\'s paying attention.',
    'warm.how.brain.label': 'BRAIN',
    'warm.how.brain.title': 'Remember you',
    'warm.how.brain.body': 'Member memory, habit accumulation, cross-venue sync.',
    'warm.how.brain.example':
      'Less rice, less sugar with no ice, vinegar rice slightly warm — you don\'t have to re-explain yourself.',
    'warm.how.heart.label': 'HEART',
    'warm.how.heart.title': 'Welcome you',
    'warm.how.heart.body': 'It speaks first — in your tone, about what you actually care about.',
    'warm.how.heart.example': 'Warmth is tunable. It remembers what kind of person you are.',

    'warm.path.eyebrow': 'OUR PATH',
    'warm.path.title':
      'If you also believe <span class="title-accent-cinnabar">warmth</span> matters —',
    'warm.path.step1.tag': 'NOW',
    'warm.path.step1.title': 'COMPUTEX 2026',
    'warm.path.step1.body': 'A real venue. Let people tell us the answer.',
    'warm.path.step2.tag': 'NEXT',
    'warm.path.step2.title': 'First PILOT',
    'warm.path.step2.body': 'One brand. Let data speak.',
    'warm.path.step3.tag': 'THEN',
    'warm.path.step3.title': 'Taiwan → Japan',
    'warm.path.step3.body': 'Same problems, same needs — anywhere people deserve to be held.',
    'warm.path.note': 'We\'re looking for the first brand who believes in this — to walk it with us, with data.',

    'warm.outro.title':
      'AI made the world <span class="title-accent-gold">smarter</span>.',
    'warm.outro.title.line2':
      'You deserve to be <span class="title-accent-cinnabar">remembered</span>.',
    'warm.outro.body':
      'Brand, partner, or simply someone who feels it — after the show, let\'s grab coffee, or let us walk into your venue and see what this looks like in your world.',
    'warm.outro.cta': 'Get in touch',

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

    // VH Hero Section
    'vh.hero.title':
      '人の心を感知する<br/><span class="title-accent-cinnabar">知的データ入口</span>',
    'vh.hero.subtitle':
      'フロントカメラの知覚から、服装・色の好み・会員記憶・感情を即時判断へ変換。バーチャルヒューマンを温かいブランド接点にします。',
    'vh.hero.features.label': 'AIバーチャルヒューマンの中核機能',
    'vh.hero.feature.perception': 'マルチモーダル即時感知',
    'vh.hero.feature.perception.body': '性別・年齢・服装スタイル・色の好み・感情の変化を認識。',
    'vh.hero.feature.member': '会員システム連携',
    'vh.hero.feature.member.body': 'オンラインとオフラインをつなぎ、VIP顧客の好みを自動認識。',
    'vh.hero.feature.persona': '動的人格チューニング',
    'vh.hero.feature.persona.body': '顧客状態に応じて、語調・戦略・応答の温度を即時調整。',
    'vh.hero.hud.perception': 'Style / Emotion / Color',
    'vh.hero.hud.member': 'VIP preference matched',
    'vh.hero.hud.persona': 'Warm response tuned',
    'vh.hero.visual.alt': 'デジタルデータグリッドへ変化するGuoya AIバーチャルヒューマン',
    'vh.hero.tab.persona': 'Digital Persona',
    'vh.hero.tab.brain': 'Core Brain',
    'vh.hero.tab.acoustics': 'Global Acoustics',

    'vh.scene.label': 'SCENE',
    'vh.scenes.title': 'どこで活用できる？',
    'vh.scenes.subtitle': '高級小売から法人営業、ブランド代言まで——AIバーチャルヒューマンがビジネスシーンをサポートします。',

    'vh.scene.boutique.label': '精品店員',
    'vh.scene.boutique.title': '専属AIショッピングガイド',
    'vh.scene.boutique.desc': '人員確保やトレーニングコストを解決するだけでなく、顧客の過去の情報を確実に記憶し、最新のプロモーションと組み合わせて最適なおすすめを提供します。',
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
    'vh.scene.corporate.title': '企業AIセールス担当',
    'vh.scene.corporate.desc': 'リアルな営業担当として、名刺を一目見るだけであなたの情報を記憶し、オーダーメイドの企業ソリューションをご提案します。',
    'vh.scene.corporate.tag': 'CORPORATE',
    'vh.scene.corporate.g1': 'こんにちは。企業様向けにAIソリューションを多数ご用意しています。ちょっとしたゲーム感覚でお互いを知りませんか？貴社の情報や名刺を見せていただければ、ぴったりの提案をいたします。',
    'vh.scene.corporate.g2': '[ AI 名刺スキャン中... ]',
    'vh.scene.corporate.g3': 'おお！ガマニアのオリジナルセンターの周さんですね！御社は最近AIへの投資も積極的ですね。エンタメ・ゲーム向けのソリューションについてお話ししましょう！',
    'vh.scene.corporate.r1': 'その業界、弊社にも実績がございます。後ほど類似事例をお見せできます。',
    'vh.scene.corporate.r2': 'では適切なプランをお選びします──ご予算感を教えていただけると、より具体的にご提案できます。',
    'vh.scene.corporate.r3': 'かしこまりました。要点をまとめた簡易版をご用意します──5分でご覧いただけます。メールでお送りしましょうか？',
    'vh.scene.corporate.s1': '来訪 · B2B',
    'vh.scene.corporate.s2': 'モード · 探索',
    'vh.scene.corporate.s3': '深度 · 概要',
    'vh.scene.corporate.s4': '推奨 · 商談設定',
    'vh.scene.corporate.s5': '感情 · 集中',

    'vh.scene.ip.label': 'IPツアーガイド',
    'vh.scene.ip.title': 'ブランドIP バーチャルスポークスパーソン',
    'vh.scene.ip.desc': 'ブランドイメージをインタラクティブなバーチャルキャラクターに変え、ライブ配信でファンとチャットすることも！ブランドIPの温かさと話題性を高めます。',
    'vh.scene.ip.tag': 'IP EVENT',
    'vh.scene.ip.g1': 'なんか疲れてそうですね、クマがすごい！実はこの近くに評判の良いカフェがあるんですよ。',
    'vh.scene.ip.g2': '本当に？',
    'vh.scene.ip.g3': '本当ですよ！あそこのラテはネットの評価もすごく高いんです。場所の情報を送りますね。ついでに今週出たばかりの限定スイーツの写真もどうぞ～',
    'vh.scene.ip.r1': 'そういえば、後で疲れたら例のカフェへ案内しますね。窓際の席がとても気持ちいいですよ。',
    'vh.scene.ip.r2': '今日のコーディネートとても素敵ですね、何か特別な予定でも？',
    'vh.scene.ip.r3': 'この展示の奥にある通路、おすすめですよ。さっき写真映えがすごいって誰かが言ってました。',
    'vh.scene.ip.s1': '訪問者 · 新規',
    'vh.scene.ip.s2': '同伴者 · 1人',
    'vh.scene.ip.s3': '関心 · キャラクター',
    'vh.scene.ip.s4': 'エンゲージメント · 高',
    'vh.scene.ip.s5': '感情 · 興奮',

    // Perception floating labels
    'vh.label.boutique.1': 'AI が服装を分析中',
    'vh.label.boutique.2': 'リピーター顧客を識別中...',
    'vh.label.boutique.3': 'スタイル嗜好を分析',
    'vh.label.corporate.1': 'AI が名刺を認識中',
    'vh.label.corporate.2': '企業ニーズを分析中...',
    'vh.label.corporate.3': 'ソリューションをマッチング',
    'vh.label.ip.1': 'AI が感情を検出中',
    'vh.label.ip.2': '疲労度を測定中...',
    'vh.label.ip.3': '近くのリソースを推薦',

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

    // ---- Warm AI manifesto (Booth Deck narrative) ----
    'warm.banner.eyebrow': 'COMPUTEX 2026',
    'warm.banner.text': '台北南港展覧館にて開催。原創中心AIブースで「覚えてもらう」体験を。',
    'warm.banner.cta': 'イベント情報',

    'warm.why.eyebrow': 'WHY · なぜ大切なのか',
    'warm.why.title':
      'テクノロジーが進歩するほど、人は<span class="title-accent-cinnabar">孤独</span>になる。',
    'warm.why.subtitle': '毎日、こんなことが起きている──',
    'warm.why.case1.title': '朝食店のおばさん',
    'warm.why.case1.body':
      '「いつも通り、辛みダブルの野菜たまごクレープと、中サイズのアイスミルクティでいい？」言わなくても、わかる。毎日また来る理由は、料理の味じゃない。覚えてくれている人がいる、それが理由。',
    'warm.why.case2.title': 'ベジタリアンの人',
    'warm.why.case2.body':
      '新しいお店に入るたび、「ベジタリアンです」と言わなければならない。覚えてくれているとは限らない。覚えてくれていても、店員が変わればまた言い直す。文句じゃなく、毎回自分のことを説明し直すのは、本当に疲れる。',
    'warm.why.case3.title': 'アレルギーのある人',
    'warm.why.case3.body':
      'まず質問。店員は厨房に確認、戻ってきて回答、また新しい疑問、また確認⋯⋯結局、本当に食べたいものではないものを選んでしまう。誰のせいでもない。ただ、すべての過程が人を消耗させる。',
    'warm.why.closing.lead': '人手不足の時代、もともと難しかったことはさらに難しくなる。',
    'warm.why.closing.body':
      'でも、「受け止めてもらいたい」という人の気持ちは、人手不足では消えない。「覚えてくれている」感覚は、一度失われると、取り戻すのが本当に難しい。',
    'warm.why.closing.tag':
      'AIの温かさは<span class="title-accent-gold">知識の広さ</span>からではなく、<span class="title-accent-cinnabar">記憶の深さ</span>から生まれる。',

    'warm.how.eyebrow': 'HOW · 私たちのアプローチ',
    'warm.how.title': 'テクノロジーで、<span class="title-accent-gold">温かさを続ける</span>。',
    'warm.how.subtitle':
      '3層の構造で、AIはただ応答するのではなく、あなたに気づき、覚え、迎え入れる。',
    'warm.how.eyes.label': 'EYES · 目',
    'warm.how.eyes.title': 'あなたを見る',
    'warm.how.eyes.body': '顔認識、服装認知、感情検知。',
    'warm.how.eyes.example':
      '今日は白い服。だから濃い色のドリンクは控えめに——機能ではない、誰かが気にかけている。',
    'warm.how.brain.label': 'BRAIN · 脳',
    'warm.how.brain.title': 'あなたを覚える',
    'warm.how.brain.body': '会員記憶、習慣の蓄積、店舗間の同期。',
    'warm.how.brain.example':
      'ご飯少なめ、糖分控えめで氷なし、酢飯はぬるめ──毎回自分を説明する必要はない。',
    'warm.how.heart.label': 'HEART · 心',
    'warm.how.heart.title': 'あなたを迎える',
    'warm.how.heart.body': '聞かれる前に話しかける。あなたの好きな口調で、気にしていることを。',
    'warm.how.heart.example': '温度は調整できる──あなたがどんな人かを覚えている。',

    'warm.path.eyebrow': 'OUR PATH',
    'warm.path.title':
      '<span class="title-accent-cinnabar">温度</span>が大切だと感じてくださるなら──',
    'warm.path.step1.tag': 'NOW',
    'warm.path.step1.title': 'COMPUTEX 2026',
    'warm.path.step1.body': 'リアルな現場で、人に答えを教えてもらう。',
    'warm.path.step2.tag': 'NEXT',
    'warm.path.step2.title': '最初のPILOT',
    'warm.path.step2.body': 'ひとつのブランドと、データで語る。',
    'warm.path.step3.tag': 'THEN',
    'warm.path.step3.title': '台湾 → 日本',
    'warm.path.step3.body': '同じ課題、同じニーズ──受け止められるべきすべての場所へ。',
    'warm.path.note': '私たちは、これを信じてくれる最初のブランドを探しています。一緒にデータで語りましょう。',

    'warm.outro.title':
      'AIは世界を<span class="title-accent-gold">賢く</span>した。',
    'warm.outro.title.line2':
      'あなたは<span class="title-accent-cinnabar">覚えられる</span>に値する。',
    'warm.outro.body':
      'ブランドでも、パートナーでも、ただこのことに何かを感じた方でも──展覧会のあと、コーヒーでもいかがですか。あるいは直接、あなたの店に伺って、あなたの場所でこれがどう形になるか一緒に見てみたい。',
    'warm.outro.cta': 'お問い合わせ',

    'lang.switcher.label': '言語',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
