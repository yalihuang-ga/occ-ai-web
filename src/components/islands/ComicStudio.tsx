import { useState, useEffect } from 'react';

interface Stage {
  num: '01' | '02' | '03' | '04';
  label: string;
  en: string;
  meta: string[];
}

interface Props {
  stages: Stage[];
  /** Short region label for the capability tag list (a11y). */
  tagsAriaLabel: string;
  /** Language code for localized mock content. */
  lang: string;
}

/**
 * AI Comic Studio — 4-stage workflow showcase.
 *
 * Desktop: tabs + full-width mock; capability tags (same pills as Solutions) in a row below.
 * Mobile: four stacked cards — mock then tags; STEP badge above mock when tabs are hidden.
 *
 * All 4 panels are always rendered; the .is-active class controls visibility on
 * desktop. CSS @container queries (in Comic.astro) drive the desktop/mobile swap.
 */
export default function ComicStudio({ stages, tagsAriaLabel, lang }: Props) {
  const [active, setActive] = useState(0);

  const mocks = [() => MockStory({ lang }), MockCharacter, MockStoryboard, MockCanvas];

  return (
    <>
      {/* Stage tabs (desktop only — hidden on mobile via CSS) */}
      <div
        className="mx-comic-tabs grid"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--bone-line)',
          borderBottom: '1px solid var(--bone-line)',
        }}
      >
        {stages.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              style={{
                position: 'relative',
                padding: '24px 28px',
                textAlign: 'left',
                background: isActive ? 'var(--color-ink-2)' : 'transparent',
                borderLeft: i === 0 ? 'none' : '1px solid var(--bone-line)',
                borderTop: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                cursor: 'pointer',
                color: 'var(--color-bone)',
                transition: 'background .3s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -1,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'var(--color-cinnabar)',
                  transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform .4s cubic-bezier(.22,1,.36,1)',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.25em',
                    color: isActive ? 'var(--color-cinnabar)' : 'var(--color-bone-3)',
                  }}
                >
                  STEP · {s.num}
                </span>
                {isActive && (
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: 'var(--color-cinnabar)',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 22,
                  fontWeight: 500,
                  color: isActive ? 'var(--color-bone)' : 'var(--color-bone-2)',
                  letterSpacing: '-0.01em',
                  marginBottom: 4,
                }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: 11, color: 'var(--color-bone-3)', letterSpacing: '0.05em' }}>
                {s.en}
              </div>
            </button>
          );
        })}
      </div>

      {/* All 4 stage panels — only .is-active is visible on desktop;
          on mobile the CSS shows all of them stacked. */}
      {stages.map((stage, i) => {
        const Mock = mocks[i];
        const isActive = i === active;
        return (
          <div
            key={stage.num}
            className={`mx-comic-canvas ${isActive ? 'is-active' : ''}`}
            style={{
              border: '1px solid var(--bone-line)',
              borderTop: 'none',
              background: 'var(--color-ink-2)',
            }}
          >
            <div className="mx-comic-stage-inner">
              <div className="mx-comic-mobile-header">
                <div className="mx-comic-mobile-badge">STEP · {stage.num}</div>
                <div className="mx-comic-mobile-title">{stage.label}</div>
              </div>
              <div
                className="mx-comic-mock"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #14100c 0%, #0a0805 100%)',
                  minHeight: 560,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'linear-gradient(rgba(244,236,220,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(244,236,220,0.025) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    pointerEvents: 'none',
                  }}
                />
                <Mock />
              </div>
              <div
                className="mx-comic-tags-row flex flex-wrap gap-2.5"
                role="list"
                aria-label={tagsAriaLabel}
              >
                {stage.meta.map((m, idx) => (
                  <span key={idx} className="solution-tag" role="listitem">
                    <span className="solution-tag-dot" aria-hidden="true" />
                    <span className="solution-tag-body">{m}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ============================================================
   Stage mockups — pure SVG/CSS, no real screenshots
   ============================================================ */

function MockStory({ lang }: { lang: string }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 3500),
      setTimeout(() => setPhase(2), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const t: Record<string, Record<string, string>> = {
    zh: {
      user1: '想做一部以艾力克斯·霍諾德為主角的漫畫，他在台北 101 進行無繩自由攀登。',
      ai1: '讓我先了解一下你對這個故事的想像——這部漫畫的核心是什麼？是偏向：',
      'ai1.opt1': '紀實風格：還原真實攀登過程，強調技術細節和心理狀態',
      'ai1.opt2': '戲劇衝突型：加入故事元素，例如阻礙、追逐、或某種秘密任務',
      'ai1.opt3': '內心獨白型：攀登過程中穿插大量回憶、哲學思考，偏靜態沉浸',
      'ai1.q': '你心目中的氛圍比較偏哪一種？',
      user2: '想結合內心獨白，有深度一點',
      ai2: '很棒耶，我們來聊聊故事的「靈魂」——霍諾德這次攀登台北 101，背後的內心主題是什麼？比如：',
      'ai2.opt1': '恐懼與超越：面對死亡的可能性，他如何與恐懼共處、甚至與它和解',
      'ai2.opt2': '孤獨與意義：在極限高度上，思索人生的選擇和代價',
      'ai2.opt3': '執念與自由：為什麼要做「不需要做」的事，追求純粹的自由',
      'ai2.q': '或者你有其他想法也可以說說！這個主題會決定獨白的調性和整個故事的走向',
      pick1: '主題選「恐懼與超越」，他在攀登中與內心的恐懼對話',
      pick2: '主題選「孤獨與意義」，在高空中回想起過去的人與事',
      pick3: '混合兩個主題，攀登越高，內心越複雜',
      ai3: '這個主題非常有深度！孤獨的攀登者懸掛在 509 公尺的高空，腦海中卻是最溫暖或最痛的記憶——這種對比本身就很有詩意。✨',
      ai3b: '想讓回憶的部分更立體一點——',
      ai3c: '霍諾德回想的「過去的人與事」，你有沒有想要放入的元素？比如：',
      'ai3.opt1': '某個對他影響深遠的人（家人、朋友、夥伴、還是某個素未謀面卻改變他的人？）',
      'ai3.opt2': '某段關鍵經歷（人生轉折點、一次差點放棄的時刻、或某次失去？）',
    },
    en: {
      user1: 'I want to create a manga featuring Alex Honnold free-soloing Taipei 101.',
      ai1: "Let me understand your vision for this story — what's the core of this manga? Is it leaning toward:",
      'ai1.opt1': 'Documentary style: faithfully recreating the climb, emphasizing technical detail and mental state',
      'ai1.opt2': 'Dramatic conflict: adding story elements like obstacles, pursuit, or a secret mission',
      'ai1.opt3': 'Inner monologue: interspersing memories and philosophical reflection during the climb, more contemplative',
      'ai1.q': 'Which atmosphere are you leaning toward?',
      user2: "I'd like to combine inner monologue, something with more depth",
      ai2: 'Great choice! Let\'s talk about the "soul" of the story — what\'s the inner theme behind Honnold\'s climb up Taipei 101? For example:',
      'ai2.opt1': 'Fear & Transcendence: facing mortality, how he coexists with fear and even reconciles with it',
      'ai2.opt2': "Solitude & Meaning: at extreme heights, reflecting on life's choices and their costs",
      'ai2.opt3': 'Obsession & Freedom: why do something "unnecessary" — the pursuit of pure freedom',
      'ai2.q': "Or feel free to share your own ideas! This theme will shape the tone of the monologue and the story's direction",
      pick1: 'Theme: "Fear & Transcendence" — he dialogues with his inner fear during the climb',
      pick2: 'Theme: "Solitude & Meaning" — recalling people and events from the past while high above',
      pick3: 'Blend both themes — the higher he climbs, the more complex his inner world becomes',
      ai3: 'This theme has incredible depth! A solitary climber suspended 509 meters up, yet his mind holds the warmest or most painful memories — that contrast alone is deeply poetic. ✨',
      ai3b: "Let's make the memory segments more vivid —",
      ai3c: 'For the "people and events" Honnold recalls, do you have elements you\'d like to include? For example:',
      'ai3.opt1': 'A person who profoundly influenced him (family, friend, partner, or someone he never met but who changed him?)',
      'ai3.opt2': 'A pivotal experience (a life turning point, a moment he almost gave up, or a loss?)',
    },
    ja: {
      user1: 'アレックス・ホノルドを主人公にした漫画を作りたい。台北101をフリーソロで登る話。',
      ai1: 'この物語へのイメージを教えてください——この漫画の核心は何でしょう？方向性としては：',
      'ai1.opt1': 'ドキュメンタリー風：実際の登攀を忠実に再現し、技術的ディテールと心理状態を重視',
      'ai1.opt2': 'ドラマチック衝突型：障害、追跡、秘密のミッションなどのストーリー要素を加える',
      'ai1.opt3': '内面モノローグ型：登攀中に大量の回想や哲学的思考を挟み、静かな没入感を重視',
      'ai1.q': 'どの雰囲気がイメージに近いですか？',
      user2: '内面モノローグを取り入れて、深みのあるものにしたい',
      ai2: '素晴らしい選択ですね！物語の「魂」について話しましょう——ホノルドが台北101を登る背後にある内面のテーマは？例えば：',
      'ai2.opt1': '恐怖と超越：死の可能性に直面し、恐怖とどう共存し、和解するか',
      'ai2.opt2': '孤独と意味：極限の高さで、人生の選択とその代償を思索する',
      'ai2.opt3': '執念と自由：「やる必要のないこと」をなぜやるのか——純粋な自由の追求',
      'ai2.q': '他にアイデアがあればぜひ教えてください！このテーマがモノローグのトーンと物語全体の方向性を決めます',
      pick1: 'テーマは「恐怖と超越」——登攀中に内なる恐怖と対話する',
      pick2: 'テーマは「孤独と意味」——高空で過去の人や出来事を回想する',
      pick3: '両方のテーマを混合——高く登るほど、内面は複雑になる',
      ai3: 'このテーマは非常に深いですね！509メートルの高空に宙吊りの孤独な登攀者、しかし脳裏には最も温かいか最も痛い記憶がある——このコントラスト自体がとても詩的です。✨',
      ai3b: '回想の部分をもっと立体的にしましょう——',
      ai3c: 'ホノルドが回想する「過去の人と出来事」に入れたい要素はありますか？例えば：',
      'ai3.opt1': '彼に深い影響を与えた人物（家族、友人、パートナー、または会ったことはないが人生を変えた人？）',
      'ai3.opt2': '重要な経験（人生の転機、諦めかけた瞬間、あるいは喪失の体験？）',
    },
  };

  const s = t[lang] || t.zh;

  const aiAvatar = {
    width: 24,
    height: 24,
    borderRadius: '50%',
    background: 'var(--color-cinnabar)',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    color: 'var(--color-bone)',
    fontWeight: 700,
  } as const;

  const aiBubble = {
    background: 'rgba(244,236,220,0.04)',
    border: '1px solid var(--bone-line)',
    padding: '14px 18px',
    maxWidth: '85%',
  } as const;

  const userBubble = {
    background: 'var(--color-cinnabar)',
    color: 'var(--color-bone)',
    padding: '12px 16px',
    maxWidth: '75%',
    fontSize: 12,
    lineHeight: 1.6,
  } as const;

  return (
    <div
      style={{
        position: 'relative',
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        minHeight: 560,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          STORY
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
      </div>

      {/* User 1 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={userBubble}>
          {s.user1}
        </div>
      </div>

      {/* AI 1 */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={aiAvatar}>✦</div>
        <div style={aiBubble}>
          <div style={{ fontSize: 12, color: 'var(--color-bone)', lineHeight: 1.7, marginBottom: 10 }}>
            {s.ai1}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[s['ai1.opt1'], s['ai1.opt2'], s['ai1.opt3']].map((txt, i) => (
              <li key={i} style={{ fontSize: 11, color: 'var(--color-bone-2)', lineHeight: 1.6, paddingLeft: 12, borderLeft: '2px solid var(--bone-line)' }}>
                {txt}
              </li>
            ))}
          </ul>
          <div style={{ fontSize: 11, color: 'var(--color-bone-3)', marginTop: 10 }}>
            {s['ai1.q']}
          </div>
        </div>
      </div>

      {/* User 2 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={userBubble}>
          {s.user2}
        </div>
      </div>

      {/* AI 2 */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={aiAvatar}>✦</div>
        <div style={aiBubble}>
          <div style={{ fontSize: 12, color: 'var(--color-bone)', lineHeight: 1.7, marginBottom: 10 }}>
            {s.ai2}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[s['ai2.opt1'], s['ai2.opt2'], s['ai2.opt3']].map((txt, i) => (
              <li key={i} style={{ fontSize: 11, color: 'var(--color-bone-2)', lineHeight: 1.6, paddingLeft: 12, borderLeft: '2px solid var(--bone-line)' }}>
                {txt}
              </li>
            ))}
          </ul>
          <div style={{ fontSize: 11, color: 'var(--color-bone-3)', marginTop: 10 }}>
            {s['ai2.q']}
          </div>
        </div>
      </div>

      {/* Quick reply options */}
      {phase === 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
          {[s.pick1, s.pick2, s.pick3].map((c, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                padding: '8px 14px',
                border: i === 1 ? '1px solid var(--color-cinnabar)' : '1px solid var(--bone-line)',
                color: i === 1 ? 'var(--color-cinnabar)' : 'var(--color-bone-2)',
                background: 'var(--color-ink-2)',
                transition: 'opacity .4s',
              }}
            >
              {c}
            </span>
          ))}
        </div>
      )}

      {/* Auto-played: User selects pick2 */}
      {phase >= 1 && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4, animation: 'fadeSlideIn .5s ease-out' }}>
          <div style={userBubble}>
            {s.pick2}
          </div>
        </div>
      )}

      {/* Auto-played: AI responds */}
      {phase >= 2 && (
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', animation: 'fadeSlideIn .5s ease-out' }}>
          <div style={aiAvatar}>✦</div>
          <div style={aiBubble}>
            <div style={{ fontSize: 12, color: 'var(--color-bone)', lineHeight: 1.7, marginBottom: 10 }}>
              {s.ai3}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-bone)', lineHeight: 1.7, marginBottom: 10 }}>
              {s.ai3b}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-bone)', lineHeight: 1.7, marginBottom: 10 }}>
              {s.ai3c}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[s['ai3.opt1'], s['ai3.opt2']].map((txt, i) => (
                <li key={i} style={{ fontSize: 11, color: 'var(--color-bone-2)', lineHeight: 1.6, paddingLeft: 12, borderLeft: '2px solid var(--bone-line)' }}>
                  {txt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Input area */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          padding: '12px 16px',
          border: '1px solid var(--bone-line)',
          background: 'var(--color-ink-2)',
          marginTop: 'auto',
        }}
      >
        <span style={{ fontSize: 12, color: 'var(--color-bone-3)', flex: 1 }}>
          {lang === 'en' ? 'Describe your story idea…' : lang === 'ja' ? 'ストーリーのアイデアを入力…' : '描述您的故事構想…'}
        </span>
        <span style={{ fontSize: 11, color: 'var(--color-cinnabar)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
          SEND ↵
        </span>
      </div>
    </div>
  );
}

function MockCharacter() {
  const scenes = [
    { src: '/comic/locations/loc-taipei101-glass.webp', label: '玻璃幕牆' },
    { src: '/comic/locations/loc-taipei101-bamboo.webp', label: '竹節結構' },
    { src: '/comic/locations/loc-taipei101-spire.webp', label: '避雷針基座' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        overflow: 'hidden',
      }}
    >
      {/* CHARACTER — turnaround strip */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
            CHARACTER
          </span>
          <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-bone-3)', letterSpacing: '0.12em' }}>
            一致性鎖定
          </span>
        </div>
        <div
          style={{
            border: '1px solid var(--bone-line)',
            borderRadius: 2,
            overflow: 'hidden',
            background: 'var(--color-ink-2)',
          }}
        >
          <div className="comic-art-wrap" style={{ aspectRatio: '900 / 280' }}>
            <img
              src="/comic/char-turnaround.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="comic-art comic-art--char"
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
            <span className="comic-art-tint" />
            <span className="comic-art-halftone" />
          </div>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
            SCENE
          </span>
          <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-bone-3)', letterSpacing: '0.12em' }}>
            概念板 · {scenes.length}
          </span>
        </div>
        <div data-mock-grid="3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {scenes.map((s) => (
            <div key={s.src} style={{ background: 'var(--color-ink)', border: '1px solid var(--bone-line)', borderRadius: 2, overflow: 'hidden' }}>
              <div className="comic-art-wrap" style={{ aspectRatio: '3 / 2' }}>
                <img src={s.src} alt="" loading="lazy" decoding="async" className="comic-art" style={{ objectFit: 'cover' }} />
                <span className="comic-art-tint" />
                <span className="comic-art-halftone" />
              </div>
              <div style={{ padding: '7px 10px', borderTop: '1px solid var(--bone-line)', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-serif-tc)', fontSize: 11, color: 'var(--color-bone-2)' }}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockStoryboard() {
  type Panel = { src: string; ratio: string; n: string; pos?: string };
  const acts: { name: string; label: string; panels: Panel[] }[] = [
    {
      name: '第 1 幕',
      label: '垂直的起點',
      panels: [
        { src: '/comic/panel-1a.webp', ratio: '16:9', n: '01', pos: 'center top' },
        { src: '/comic/panel-2a.webp', ratio: '3:2', n: '02', pos: 'center center' },
        { src: '/comic/panel-2b.webp', ratio: '3:2', n: '03', pos: 'right center' },
      ],
    },
    {
      name: '第 2 幕',
      label: '雲端上的寧靜',
      panels: [
        { src: '/comic/panel-3a.webp', ratio: '3:2', n: '04', pos: 'center top' },
        { src: '/comic/panel-3b.webp', ratio: '16:9', n: '05', pos: 'left center' },
        { src: '/comic/panel-1a.webp', ratio: '3:2', n: '06', pos: 'left top' },
      ],
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        overflow: 'hidden',
        minHeight: 560,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          STORYBOARD · 9 / 9 GENERATED
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
      </div>

      {acts.map((act, ai) => (
        <div key={ai}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
            <span
              style={{
                fontSize: 10,
                padding: '3px 8px',
                background: 'rgba(255,90,31,0.1)',
                color: 'var(--color-cinnabar)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.15em',
              }}
            >
              {act.name}
            </span>
            <span style={{ fontFamily: 'var(--font-headline)', fontSize: 14, color: 'var(--color-bone)' }}>
              {act.label}
            </span>
          </div>
          <div data-mock-grid="3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {act.panels.map((p) => (
              <div
                key={p.n}
                style={{
                  background: 'var(--color-ink)',
                  border: '1px solid var(--bone-line)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    padding: '6px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid var(--bone-line)',
                  }}
                >
                  <span style={{ fontSize: 9, color: 'var(--color-bone-3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                    分鏡 {p.n}
                  </span>
                  <span
                    style={{
                      fontSize: 9,
                      color: 'var(--color-cinnabar)',
                      background: 'rgba(255,90,31,0.1)',
                      padding: '1px 6px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {p.ratio}
                  </span>
                </div>
                <div className="comic-art-wrap" style={{ aspectRatio: '3 / 2' }}>
                  <img
                    src={p.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="comic-art"
                    style={{ objectPosition: p.pos ?? 'center center' }}
                  />
                  <span className="comic-art-tint" />
                  <span className="comic-art-halftone" />
                  <span className="comic-art-scan" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MockCanvas() {
  const pages: { src: string; rotate: number; offsetX: number; offsetY: number }[] = [
    { src: '/comic/publish/sengoku-1.webp', rotate: 12, offsetX: -28, offsetY: -14 },
    { src: '/comic/publish/baseball-2.webp', rotate: -15, offsetX: 22, offsetY: -8 },
    { src: '/comic/panel-2a.webp', rotate: 6, offsetX: -8, offsetY: 18 },
    { src: '/comic/publish/sengoku-3.webp', rotate: -9, offsetX: 16, offsetY: 12 },
    { src: '/comic/publish/baseball-1.webp', rotate: 10, offsetX: -18, offsetY: 6 },
    { src: '/comic/publish/sengoku-2.webp', rotate: -5, offsetX: 6, offsetY: -16 },
    { src: '/comic/publish/baseball-3.webp', rotate: 8, offsetX: -12, offsetY: -4 },
    { src: '/comic/panel-1a.webp', rotate: -3, offsetX: 10, offsetY: 8 },
    { src: '/comic/panel-3a.webp', rotate: 2, offsetX: 4, offsetY: 14 },
  ];

  const [topIdx, setTopIdx] = useState(pages.length - 1);

  useEffect(() => {
    const id = setInterval(() => {
      setTopIdx((prev) => (prev + 1) % pages.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 520,
        padding: '20px 10px',
      }}
    >
      {pages.map((p, i) => {
        const distFromTop = (i - topIdx + pages.length) % pages.length;
        const z = pages.length - distFromTop;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '58%',
              minWidth: 240,
              maxWidth: 420,
              aspectRatio: '3 / 4',
              transform: `translate(${p.offsetX}%, ${p.offsetY}px) rotate(${p.rotate}deg)`,
              zIndex: z,
              background: '#f4ecdc',
              padding: 8,
              boxShadow: '0 18px 36px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.35)',
              transition: 'z-index 0s, opacity .4s ease',
              opacity: distFromTop <= 5 ? 1 : 0.6,
            }}
          >
            <div className="comic-art-wrap" style={{ width: '100%', height: '100%', background: '#0e0b08', border: '1px solid #1a1a1a' }}>
              <img
                src={p.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="comic-art"
                style={{ objectFit: 'cover' }}
              />
              <span className="comic-art-tint" />
              <span className="comic-art-halftone" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
