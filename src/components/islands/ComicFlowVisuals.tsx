import { useEffect, useRef, useState } from 'react';

interface VisualProps {
  lang: string;
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ===== Step 1: Chat Mock ===== */
export function ChatMock({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);
  const [phase, setPhase] = useState(0);
  // phase 0: enlarged intro (user message big)
  // phase 1: shrink into chat, AI typing
  // phase 2: AI 1 appears
  // phase 3: User 2 appears
  // phase 4: AI 2 appears

  useEffect(() => {
    if (!visible) return;
    const t1 = setTimeout(() => setPhase(1), 2000);
    const t2 = setTimeout(() => setPhase(2), 3200);
    const t3 = setTimeout(() => setPhase(3), 5000);
    const t4 = setTimeout(() => setPhase(4), 6500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [visible]);

  const s = {
    user1: lang === 'en'
      ? 'I want to create a manga about a free-solo climber ascending Taipei 101.'
      : lang === 'ja'
        ? 'フリーソロで台北101を登る漫画を作りたい。'
        : '想做一部以艾力克斯·霍諾德為主角的漫畫，他在台北101進行無繩自由攀登。',
    ai1: lang === 'en'
      ? "Let me understand your vision — what's the core of this manga?"
      : lang === 'ja'
        ? 'この物語のイメージを教えてください——'
        : '讓我先了解一下你對這個故事的想像——這部漫畫的核心是什麼？',
    opts: lang === 'en'
      ? ['Documentary style', 'Dramatic conflict', 'Inner monologue']
      : lang === 'ja'
        ? ['ドキュメンタリー風', 'ドラマ型', '内面モノローグ']
        : ['紀實風格', '戲劇衝突型', '內心獨白型'],
    user2: lang === 'en'
      ? "I'd like to combine inner monologue, something with more depth"
      : lang === 'ja'
        ? '内面モノローグを取り入れて、深みのあるものにしたい'
        : '想結合內心獨白，有深度一點',
    ai2: lang === 'en'
      ? 'Great choice! The theme of "Solitude & Meaning" — reflecting on life at extreme heights — will give this story incredible depth. ✨'
      : lang === 'ja'
        ? '素晴らしい！「孤独と意味」をテーマに、極限の高さで人生を振り返る——非常に深い物語になりますね。✨'
        : '很棒耶！「孤獨與意義」這個主題——在極限高度上思索人生的選擇和代價——會讓整部故事非常有深度。✨',
    placeholder: lang === 'en' ? 'Describe your story idea…' : lang === 'ja' ? 'ストーリーのアイデアを入力…' : '描述您的故事構想…',
  };

  return (
    <div ref={ref} className={`cf-visual cf-chat ${visible ? 'is-visible' : ''}`}>
      {/* Enlarged intro — user's first message shown big initially */}
      <div className={`cf-intro-overlay ${phase >= 1 ? 'cf-intro-shrunk' : ''} ${visible ? 'cf-in' : ''}`}>
        <span className="cf-intro-text">{s.user1}</span>
      </div>

      <div className={`cf-chat-body ${phase >= 1 ? 'cf-chat-body--visible' : ''}`}>
        <div className="cf-chat-header">
          <span className="cf-dot" />
          <span className="cf-mono-label">STORY</span>
          <span className="cf-line" />
        </div>

        {/* User 1 — shrinks into normal bubble */}
        <div className={`cf-msg cf-msg--user ${phase >= 1 ? 'cf-in' : ''}`}>
          <div className="cf-bubble cf-bubble--user">{s.user1}</div>
        </div>

        {/* AI 1 */}
        <div className={`cf-msg cf-msg--ai ${phase >= 2 ? 'cf-in' : ''}`}>
          <div className="cf-avatar">✦</div>
          <div className="cf-bubble cf-bubble--ai">
            <p>{s.ai1}</p>
            <div className="cf-options">
              {s.opts.map((o, i) => (
                <span key={i} className={`cf-option ${i === 2 ? 'cf-option--active' : ''}`}>{o}</span>
              ))}
            </div>
          </div>
        </div>

        {/* User 2 */}
        <div className={`cf-msg cf-msg--user ${phase >= 3 ? 'cf-in' : ''}`}>
          <div className="cf-bubble cf-bubble--user">{s.user2}</div>
        </div>

        {/* AI 2 */}
        <div className={`cf-msg cf-msg--ai ${phase >= 4 ? 'cf-in' : ''}`}>
          <div className="cf-avatar">✦</div>
          <div className="cf-bubble cf-bubble--ai">
            <p>{s.ai2}</p>
          </div>
        </div>

        {/* Typing indicator */}
        {phase >= 1 && phase < 4 && (
          <div className="cf-msg cf-msg--ai cf-in">
            <div className="cf-avatar">✦</div>
            <div className="cf-bubble cf-bubble--ai cf-typing">
              <span /><span /><span />
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="cf-input">
          <span className="cf-input-text">{s.placeholder}</span>
          <span className="cf-input-cursor" />
          <span className="cf-input-send">SEND ↵</span>
        </div>
      </div>
    </div>
  );
}

/* ===== Step 1b: Chat continuation ===== */
export function ChatMockB({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const t1 = setTimeout(() => setPhase(1), 1000);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => setPhase(3), 4200);
    const t4 = setTimeout(() => setPhase(4), 5800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [visible]);

  const s = lang === 'en' ? {
    ai1: 'Does the story have a clear "philosophical theme" or "core question"? For example:',
    opts: [
      '"Fear & Freedom": Why does Honnold choose to eliminate fear, rather than overcome it?',
      '"Limits & Existence": Standing on the edge of death to feel truly alive — obsession or enlightenment?',
      '"Solitude & Focus": At the heart of a bustling city (101), he is the loneliest and most lucid person in the world',
    ],
    ai1q: 'Or do you already have a theme in mind? This will become the soul of the entire manga!',
    user1: 'I choose "Solitude & Focus"',
    ai2: 'What length do you envision for this manga?',
    ai2opts: [
      'Short: ~3–5 acts, focusing on key psychological moments during the climb, clean and concise',
      'Medium: ~6–10 acts, adding pre-climb preparation, city observation, and psychological turns — richer layers',
    ],
    user2: 'Medium, 6–10 acts',
    doneBtn: 'Complete Discussion',
  } : lang === 'ja' ? {
    ai1: 'この物語に明確な「哲学的テーマ」や「核心的な問い」はありますか？例えば：',
    opts: [
      '「恐怖と自由」：ホノルドはなぜ恐怖を排除することを選ぶのか？克服との違いは？',
      '「極限と存在」：死の淵に立って初めて生きている実感を得る——執念か悟りか？',
      '「孤独と集中」：賑やかな都市の中心（101）で、彼は世界で最も孤独で最も覚醒している人',
    ],
    ai1q: 'それとも既にテーマがありますか？これが漫画全体の魂になります！',
    user1: '「孤独と集中」を選びます',
    ai2: 'この漫画はどのくらいの長さを想定していますか？',
    ai2opts: [
      '短編：約3〜5幕、登攀中の重要な心理的瞬間に集中、簡潔',
      '中編：約6〜10幕、準備段階、都市観察、心理的転換を追加——より豊かな構成',
    ],
    user2: '中編、6〜10幕で',
    doneBtn: '討論完了',
  } : {
    ai1: '故事有沒有明確的「哲學主題」或「核心問題」？比如說：',
    opts: [
      '「恐懼與自由」：霍諾德為什麼選擇消除恐懼，而不是克服恐懼？兩者有什麼不同？',
      '「極限與存在」：站在死亡邊緣才能感受到真正活著，這是執念還是悟道？',
      '「孤獨與專注」：在喧囂的城市中心（101），他是全世界最孤獨也最清醒的人',
    ],
    ai1q: '或者你心中已經有一個想探討的命題？這個主題會成為整部漫畫的靈魂！',
    user1: '我選「孤獨與專注」',
    ai2: '你希望這部漫畫是哪種篇幅？',
    ai2opts: [
      '短篇：約 3～5 幕，專注呈現攀登過程中幾個關鍵心理時刻，乾淨俐落',
      '中篇：約 6～10 幕，可以加入攀登前的準備、城市觀察、攀登中的心理轉折，層次更豐富',
    ],
    user2: '我選中篇，6～10幕',
    doneBtn: '完成討論',
  };

  return (
    <div ref={ref} className={`cf-visual cf-chat ${visible ? 'is-visible' : ''}`}>
      <div className="cf-chat-header">
        <span className="cf-dot" />
        <span className="cf-mono-label">STORY</span>
        <span className="cf-line" />
      </div>

      {/* AI — theme question */}
      <div className={`cf-msg cf-msg--ai ${visible ? 'cf-in' : ''}`}>
        <div className="cf-avatar">✦</div>
        <div className="cf-bubble cf-bubble--ai">
          <p>{s.ai1}</p>
          <div className="cf-options">
            {s.opts.map((o, i) => (
              <span key={i} className={`cf-option ${i === 2 ? 'cf-option--active' : ''}`}>{o}</span>
            ))}
          </div>
          <p style={{ marginTop: 10, fontSize: 11, color: 'var(--color-bone-3)' }}>{s.ai1q}</p>
        </div>
      </div>

      {/* User picks theme */}
      <div className={`cf-msg cf-msg--user ${phase >= 1 ? 'cf-in' : ''}`}>
        <div className="cf-bubble cf-bubble--user">{s.user1}</div>
      </div>

      {/* AI — length question */}
      <div className={`cf-msg cf-msg--ai ${phase >= 2 ? 'cf-in' : ''}`}>
        <div className="cf-avatar">✦</div>
        <div className="cf-bubble cf-bubble--ai">
          <p>{s.ai2}</p>
          <div className="cf-options">
            {s.ai2opts.map((o, i) => (
              <span key={i} className={`cf-option ${i === 1 ? 'cf-option--active' : ''}`}>{o}</span>
            ))}
          </div>
        </div>
      </div>

      {/* User picks length */}
      <div className={`cf-msg cf-msg--user ${phase >= 3 ? 'cf-in' : ''}`}>
        <div className="cf-bubble cf-bubble--user">{s.user2}</div>
      </div>

      {/* Done button */}
      <div className={`cf-done-wrap ${phase >= 4 ? 'cf-in' : ''}`}>
        <span className="cf-done-btn">{s.doneBtn}</span>
      </div>
    </div>
  );
}

/* ===== Step 1c: Story Progress ===== */
export function StoryProgress({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);
  const [completedCount, setCompletedCount] = useState(0);

  const tasks = lang === 'en' ? [
    { label: 'Analyze story outline' },
    { label: 'Design character list' },
    { label: 'Design scene locations' },
    { label: 'Plan scene structure' },
    { label: 'Break down storyboard' },
  ] : lang === 'ja' ? [
    { label: 'ストーリー大綱を分析' },
    { label: 'キャラクターリスト設計' },
    { label: 'シーンロケーション設計' },
    { label: 'シーン構成を計画' },
    { label: '詳細コンテ分解' },
  ] : [
    { label: '分析故事大綱' },
    { label: '設計角色清單' },
    { label: '設計場景地點' },
    { label: '規劃場景結構' },
    { label: '拆解詳細分鏡' },
  ];

  useEffect(() => {
    if (!visible) return;
    let count = 0;
    const id = setInterval(() => {
      count++;
      if (count > 2) { clearInterval(id); return; }
      setCompletedCount(count);
    }, 1800);
    return () => clearInterval(id);
  }, [visible]);

  const progress = visible ? Math.min((completedCount + 0.5) / tasks.length * 100, 60) : 0;
  const title = lang === 'en' ? 'Generating story...' : lang === 'ja' ? 'ストーリーを生成中...' : '正在生成故事...';
  const pctLabel = lang === 'en' ? 'complete' : lang === 'ja' ? '完成' : '完成';

  return (
    <div ref={ref} className={`cf-visual cf-progress ${visible ? 'is-visible' : ''}`}>
      {/* Header */}
      <div className="cf-progress-header">
        <span className="cf-progress-spinner" />
        <span className="cf-progress-title">{title}</span>
      </div>

      {/* Progress bar */}
      <div className="cf-progress-bar-wrap">
        <div className="cf-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="cf-progress-pct">{Math.round(progress)}% {pctLabel}</div>

      {/* Task list */}
      <div className="cf-progress-tasks">
        {tasks.map((task, i) => {
          const status = i < completedCount ? 'done' : i === completedCount && visible ? 'active' : 'pending';
          return (
            <div key={i} className={`cf-progress-task cf-progress-task--${status}`}>
              <span className="cf-progress-task-label">{task.label}</span>
              <span className="cf-progress-task-status">
                {status === 'done' && <span className="cf-progress-check">✓</span>}
                {status === 'active' && <span className="cf-progress-task-spinner" />}
                {status === 'pending' && <span className="cf-progress-circle" />}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===== Step 2: Character Reveal ===== */
export function CharacterReveal({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);

  return (
    <div ref={ref} className={`cf-visual cf-gen ${visible ? 'is-visible' : ''}`}>
      {/* Character section */}
      <div className="cf-gen-section">
        <div className="cf-gen-label">
          <span className="cf-dot" />
          <span className="cf-mono-label">CHARACTER</span>
          <span className="cf-line" />
          <span className="cf-gen-status">{lang === 'en' ? 'consistency locked' : lang === 'ja' ? '一致性ロック' : '一致性鎖定'}</span>
        </div>
        <div className="cf-gen-img-wrap cf-reveal">
          <img src="/comic/char-turnaround.webp" alt="" loading="lazy" decoding="async" />
          <div className="cf-scan-line" />
        </div>
      </div>

      {/* Scene section */}
      <div className="cf-gen-section">
        <div className="cf-gen-label">
          <span className="cf-dot" />
          <span className="cf-mono-label">SCENE</span>
          <span className="cf-line" />
          <span className="cf-gen-status">3 / 3</span>
        </div>
        <div className="cf-scene-grid">
          {[
            '/comic/locations/loc-taipei101-glass.jpg',
            '/comic/locations/loc-taipei101-bamboo.jpg',
            '/comic/locations/loc-taipei101-spire.jpg',
          ].map((src, i) => (
            <div key={i} className="cf-scene-item cf-reveal" style={{ transitionDelay: `${i * 0.4}s` }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
              <div className="cf-scan-line" style={{ animationDelay: `${i * 1}s` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== Step 3: Storyboard Assemble ===== */
export function StoryboardAssemble({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);

  const panels = [
    { src: '/comic/panel-1a.webp', pos: 'center top' },
    { src: '/comic/panel-2a.webp', pos: 'center center' },
    { src: '/comic/panel-2b.webp', pos: 'right center' },
    { src: '/comic/panel-3a.webp', pos: 'center top' },
    { src: '/comic/panel-3b.webp', pos: 'left center' },
    null, // loading placeholder
  ];

  return (
    <div ref={ref} className={`cf-visual cf-board ${visible ? 'is-visible' : ''}`}>
      <div className="cf-board-header">
        <span className="cf-dot" />
        <span className="cf-mono-label">STORYBOARD · {visible ? '5 / 6' : '0 / 6'} GENERATED</span>
        <span className="cf-line" />
      </div>
      <div className="cf-board-grid">
        {panels.map((p, i) => (
          <div
            key={i}
            className={`cf-panel ${visible ? 'cf-panel-in' : ''}`}
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {p ? (
              <>
                <img src={p.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: p.pos }} />
                <span className="cf-panel-num">{String(i + 1).padStart(2, '0')}</span>
              </>
            ) : (
              <div className="cf-panel-loading">
                <div className="cf-spinner" />
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== Step 4: Publish Stack ===== */
export function PublishStack({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);
  const [topIdx, setTopIdx] = useState(0);

  const pages = [
    '/comic/publish/sengoku-1.png',
    '/comic/publish/baseball-1.png',
    '/comic/publish/sengoku-2.png',
    '/comic/publish/baseball-2.png',
    '/comic/publish/sengoku-3.png',
  ];

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setTopIdx((prev) => (prev + 1) % pages.length);
    }, 2500);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div ref={ref} className={`cf-visual cf-publish ${visible ? 'is-visible' : ''}`}>
      <div className="cf-publish-stack">
        {pages.map((src, i) => {
          const isTop = i === topIdx;
          const offset = ((i - topIdx + pages.length) % pages.length);
          return (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="cf-page"
              style={{
                zIndex: pages.length - offset,
                transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + offset)}deg) translateY(${offset * 4}px)`,
                opacity: offset > 3 ? 0.3 : 1,
                transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
          );
        })}
      </div>
      <div className="cf-publish-bar">
        <span className="cf-dot" />
        <span className="cf-mono-label">EXPORTED · {pages.length} PAGES</span>
        <span className="cf-publish-badge">✓ READY</span>
      </div>
    </div>
  );
}
