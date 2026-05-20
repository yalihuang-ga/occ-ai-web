import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  // phase 0: enlarged input with typing effect
  // phase 1: send clicked, shrink into chat
  // phase 2: AI 1 appears
  // phase 3: User 2 appears
  // phase 4: AI 2 appears
  const [typedLen, setTypedLen] = useState(0);
  const [sendClicked, setSendClicked] = useState(false);

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
    sendLabel: lang === 'en' ? 'SEND' : lang === 'ja' ? 'SEND' : 'SEND',
  };

  useEffect(() => {
    if (!visible) return;
    const fullLen = s.user1.length;
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTypedLen(i);
      if (i >= fullLen) clearInterval(typeInterval);
    }, 30);
    const typeDone = fullLen * 30;
    const tSend = setTimeout(() => {
      setSendClicked(true);
      document.dispatchEvent(new CustomEvent('cf:card1-done'));
    }, typeDone + 600);
    const t1 = setTimeout(() => setPhase(1), typeDone + 1200);
    const t2 = setTimeout(() => setPhase(2), typeDone + 2400);
    const t3 = setTimeout(() => setPhase(3), typeDone + 4200);
    const t4 = setTimeout(() => setPhase(4), typeDone + 5700);
    return () => { clearInterval(typeInterval); clearTimeout(tSend); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [visible]);

  return (
    <div ref={ref} className={`cf-visual cf-chat ${visible ? 'is-visible' : ''}`}>
      {/* Enlarged intro — typing input UI */}
      <div className={`cf-intro-overlay ${phase >= 1 ? 'cf-intro-shrunk' : ''} ${visible ? 'cf-in' : ''}`}>
        <div className="cf-intro-input-wrap">
          <div className="cf-intro-input">
            <span className="cf-intro-typed">{s.user1.slice(0, typedLen)}</span>
            {typedLen < s.user1.length && <span className="cf-intro-cursor" />}
          </div>
          <button className={`cf-intro-send-btn ${typedLen >= s.user1.length ? 'cf-intro-send-btn--show' : ''} ${sendClicked ? 'cf-intro-send-btn--active' : ''}`}>
            {s.sendLabel} ↵
          </button>
        </div>
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
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const handler = () => setActivated(true);
    document.addEventListener('cf:card1-done', handler);
    return () => document.removeEventListener('cf:card1-done', handler);
  }, []);

  useEffect(() => {
    if (!activated) return;
    const t1 = setTimeout(() => setPhase(1), 1000);
    const t2 = setTimeout(() => setPhase(2), 2800);
    const t3 = setTimeout(() => setPhase(3), 4200);
    const t4 = setTimeout(() => {
      setPhase(4);
      document.dispatchEvent(new CustomEvent('cf:card2-done'));
    }, 5800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [activated]);

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
    <div ref={ref} className={`cf-visual cf-chat ${activated ? 'cf-visual--ready' : 'cf-visual--pending'}`}>
      <div className="cf-chat-header">
        <span className="cf-dot" />
        <span className="cf-mono-label">STORY</span>
        <span className="cf-line" />
      </div>

      {/* AI — theme question */}
      <div className={`cf-msg cf-msg--ai ${activated ? 'cf-in' : ''}`}>
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
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const handler = () => setActivated(true);
    document.addEventListener('cf:card2-done', handler);
    return () => document.removeEventListener('cf:card2-done', handler);
  }, []);

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
    if (!activated) return;
    let count = 0;
    const id = setInterval(() => {
      count++;
      if (count >= tasks.length) { clearInterval(id); return; }
      setCompletedCount(count);
    }, 1800);
    return () => clearInterval(id);
  }, [activated]);

  const progress = activated ? Math.min(((completedCount + 0.5) / tasks.length) * 100, 100) : 0;
  const title = lang === 'en' ? 'Generating story...' : lang === 'ja' ? 'ストーリーを生成中...' : '正在生成故事...';
  const pctLabel = lang === 'en' ? 'complete' : lang === 'ja' ? '完成' : '完成';

  return (
    <div ref={ref} className={`cf-visual cf-progress ${activated ? 'cf-visual--ready' : 'cf-visual--pending'}`}>
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
          const status = i < completedCount ? 'done' : i === completedCount && activated ? 'active' : 'pending';
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

/* ===== Step 2: Character Card ===== */
export function CharacterCard({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);

  return (
    <div ref={ref} className={`cf-visual cf-gen ${visible ? 'is-visible' : ''}`}>
      <div className="cf-gen-section">
        <div className="cf-gen-label">
          <span className="cf-dot" />
          <span className="cf-mono-label">CHARACTER</span>
          <span className="cf-line" />
          <span className="cf-gen-status">{lang === 'en' ? 'consistency locked' : lang === 'ja' ? '一致性ロック' : '一致性鎖定'}</span>
        </div>
        <div className="cf-gen-img-wrap cf-reveal">
          <img src="/comic/char-turnaround.webp" alt="" loading="lazy" decoding="async" style={{ objectPosition: 'center top' }} />
          <div className="cf-scan-line" />
        </div>
      </div>
    </div>
  );
}

/* ===== Step 2: Scene Card ===== */
export function SceneCard({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);

  const scenes = [
    { src: '/comic/locations/loc-taipei101-glass.webp', label: lang === 'en' ? 'Taipei 101 Upper Floors' : lang === 'ja' ? '台北101 高層階' : '台北101高層' },
    { src: '/comic/locations/loc-taipei101-bamboo.webp', label: lang === 'en' ? 'Taipei 101 Lower Exterior' : lang === 'ja' ? '台北101 外壁低層' : '台北101外牆低層' },
    { src: '/comic/locations/loc-taipei101-spire.webp', label: lang === 'en' ? 'Taipei 101 Rooftop Spire' : lang === 'ja' ? '台北101 頂上プラットフォーム' : '台北101頂端平台' },
  ];

  return (
    <div ref={ref} className={`cf-visual cf-gen ${visible ? 'is-visible' : ''}`}>
      <div className="cf-gen-section">
        <div className="cf-gen-label">
          <span className="cf-dot" />
          <span className="cf-mono-label">SCENE</span>
          <span className="cf-line" />
          <span className="cf-gen-status">3 / 3</span>
        </div>
        <div className="cf-scene-grid cf-scene-grid--full">
          {scenes.map((scene, i) => (
            <div key={i} className="cf-scene-item cf-reveal" style={{ transitionDelay: `${i * 0.4}s` }}>
              <img src={scene.src} alt="" loading="lazy" decoding="async" />
              <div className="cf-scan-line" style={{ animationDelay: `${i * 1}s` }} />
              <span className="cf-scene-caption">{scene.label}</span>
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
  const [generatedCount, setGeneratedCount] = useState(0);

  const panels = [
    { src: '/comic/panel-1a.webp', pos: 'center top' },
    { src: '/comic/panel-2a.webp', pos: 'center center' },
    { src: '/comic/panel-2b.webp', pos: 'right center' },
    { src: '/comic/panel-s2-3.webp', pos: 'center center' },
    { src: '/comic/panel-s3-1.webp', pos: 'center top' },
    { src: '/comic/panel-s3-2.webp', pos: 'center center' },
  ];

  useEffect(() => {
    if (!visible) return;
    let count = 0;
    const id = setInterval(() => {
      count++;
      setGeneratedCount(count);
      if (count >= panels.length) clearInterval(id);
    }, 800);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div ref={ref} className={`cf-visual cf-board ${visible ? 'is-visible' : ''}`}>
      <div className="cf-board-header">
        <span className="cf-dot" />
        <span className="cf-mono-label">STORYBOARD · {generatedCount} / {panels.length} GENERATED</span>
        <span className="cf-line" />
      </div>
      <div className="cf-board-grid">
        {panels.map((p, i) => (
          <div
            key={i}
            className={`cf-panel ${i < generatedCount ? 'cf-panel-in' : ''}`}
          >
            {i < generatedCount ? (
              <>
                <img src={p.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: p.pos }} />
                <span className="cf-panel-num">{String(i + 1).padStart(2, '0')}</span>
              </>
            ) : i === generatedCount && visible ? (
              <div className="cf-panel-loading">
                <div className="cf-spinner" />
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
            ) : (
              <div className="cf-panel-empty">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== Step 3b: Storyboard Edit — inpaint + translate + ratio change demo ===== */
type EditPhase =
  | 'idle'
  | 'typing-1'
  | 'sending-1'
  | 'processing-1'
  | 'fixed'
  | 'typing-2'
  | 'sending-2'
  | 'processing-2'
  | 'translated'
  | 'typing-3'
  | 'sending-3'
  | 'processing-3'
  | 'done';

export function StoryboardEdit({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.25);
  const [phase, setPhase] = useState<EditPhase>('idle');
  const [cycleKey, setCycleKey] = useState(0);
  const [typed, setTyped] = useState('');

  const copy = lang === 'en'
    ? {
        header: 'STORYBOARD · EDIT',
        cmd1: 'Remove the extra leg',
        cmd2: 'Translate this page into Japanese',
        cmd3: 'Change aspect ratio to 3:4',
        placeholder: 'Describe your edit…',
        send: 'SEND ↵',
        badge: {
          idle: 'EDIT',
          processing1: 'AI INPAINTING',
          fixed: 'FIXED ✓',
          processing2: 'ZH → JP',
          translated: 'JP ✓',
          processing3: '9:16 → 3:4',
          done: '3:4 ✓',
        },
        tools: ['SELECT', 'BRUSH', 'TEXT', 'TRANSLATE'],
      }
    : lang === 'ja'
    ? {
        header: 'STORYBOARD · EDIT',
        cmd1: '余分な脚を削除',
        cmd2: 'このページを日本語に翻訳',
        cmd3: 'アスペクト比を3:4に変更',
        placeholder: '編集内容を入力…',
        send: 'SEND ↵',
        badge: {
          idle: 'EDIT',
          processing1: 'AI 修復中',
          fixed: 'FIXED ✓',
          processing2: 'ZH → JP',
          translated: 'JP ✓',
          processing3: '9:16 → 3:4',
          done: '3:4 ✓',
        },
        tools: ['SELECT', 'BRUSH', 'TEXT', 'TRANSLATE'],
      }
    : {
        header: 'STORYBOARD · EDIT',
        cmd1: '移除多餘的腳',
        cmd2: '將整頁翻譯成日文',
        cmd3: '將比例改為 3:4',
        placeholder: '描述你的編輯…',
        send: 'SEND ↵',
        badge: {
          idle: 'EDIT',
          processing1: 'AI 修圖中',
          fixed: 'FIXED ✓',
          processing2: 'ZH → JP',
          translated: 'JP ✓',
          processing3: '9:16 → 3:4',
          done: '3:4 ✓',
        },
        tools: ['SELECT', 'BRUSH', 'TEXT', 'TRANSLATE'],
      };

  useEffect(() => {
    if (!visible) return;
    setPhase('idle');
    setTyped('');

    const timers: number[] = [];
    const schedule = (delay: number, fn: () => void) => {
      timers.push(window.setTimeout(fn, delay));
    };

    const typewrite = (text: string, startAt: number, charMs = 55) => {
      for (let i = 1; i <= text.length; i++) {
        schedule(startAt + i * charMs, () => setTyped(text.slice(0, i)));
      }
      return startAt + text.length * charMs;
    };

    // --- Phase 1: remove extra leg ---
    const typing1Start = 600;
    schedule(typing1Start, () => {
      setPhase('typing-1');
      setTyped('');
    });
    const typing1End = typewrite(copy.cmd1, typing1Start, 55);

    schedule(typing1End + 400, () => setPhase('sending-1'));
    schedule(typing1End + 1000, () => setPhase('processing-1'));
    schedule(typing1End + 2800, () => setPhase('fixed'));

    // --- Phase 2: translate to JP ---
    const typing2Start = typing1End + 4400;
    schedule(typing2Start, () => {
      setPhase('typing-2');
      setTyped('');
    });
    const typing2End = typewrite(copy.cmd2, typing2Start, 50);

    schedule(typing2End + 400, () => setPhase('sending-2'));
    schedule(typing2End + 1000, () => setPhase('processing-2'));
    schedule(typing2End + 2800, () => setPhase('translated'));

    // --- Phase 3: change aspect ratio ---
    const typing3Start = typing2End + 4400;
    schedule(typing3Start, () => {
      setPhase('typing-3');
      setTyped('');
    });
    const typing3End = typewrite(copy.cmd3, typing3Start, 50);

    schedule(typing3End + 400, () => setPhase('sending-3'));
    schedule(typing3End + 1000, () => setPhase('processing-3'));
    schedule(typing3End + 2800, () => setPhase('done'));

    // Restart the loop after holding the final state.
    schedule(typing3End + 5200, () => setCycleKey((k) => k + 1));

    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  }, [visible, cycleKey, copy.cmd1, copy.cmd2, copy.cmd3]);

  const showOriginal = ['idle', 'typing-1', 'sending-1', 'processing-1'].includes(phase);
  const showFixed = ['fixed', 'typing-2', 'sending-2', 'processing-2'].includes(phase);
  const showTranslated = ['translated', 'typing-3', 'sending-3', 'processing-3'].includes(phase);
  const showRatioChanged = phase === 'done';
  const processing = phase === 'processing-1' || phase === 'processing-2' || phase === 'processing-3';
  const sending = phase === 'sending-1' || phase === 'sending-2' || phase === 'sending-3';

  const activeTool: number = (() => {
    if (['idle', 'typing-1', 'sending-1', 'processing-1', 'fixed'].includes(phase)) return 1; // brush
    if (['typing-2', 'sending-2', 'processing-2', 'translated'].includes(phase)) return 3; // translate
    return 0; // select for ratio
  })();

  const badgeLabel = (() => {
    switch (phase) {
      case 'idle':
      case 'typing-1':
      case 'sending-1':
        return copy.badge.idle;
      case 'processing-1':
        return copy.badge.processing1;
      case 'fixed':
        return copy.badge.fixed;
      case 'typing-2':
      case 'sending-2':
        return copy.badge.idle;
      case 'processing-2':
        return copy.badge.processing2;
      case 'translated':
        return copy.badge.translated;
      case 'typing-3':
      case 'sending-3':
        return copy.badge.idle;
      case 'processing-3':
        return copy.badge.processing3;
      case 'done':
        return copy.badge.done;
    }
  })();

  const badgeTone =
    phase === 'fixed' || phase === 'translated' || phase === 'done'
      ? 'ok'
      : processing
      ? 'busy'
      : 'idle';

  const processingLabel = (() => {
    if (phase === 'processing-1') return copy.badge.processing1;
    if (phase === 'processing-2') return copy.badge.processing2;
    if (phase === 'processing-3') return copy.badge.processing3;
    return '';
  })();

  return (
    <div
      ref={ref}
      className={`cf-visual cf-board-edit ${visible ? 'is-visible' : ''}`}
      data-phase={phase}
    >
      <div className="cf-edit-header">
        <span className="cf-dot" />
        <span className="cf-mono-label">{copy.header}</span>
        <span className="cf-line" />
        <span className={`cf-edit-badge cf-edit-badge--${badgeTone}`}>{badgeLabel}</span>
      </div>

      <div className="cf-edit-stage">
        <img
          src="/comic/edit/original.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className={`cf-edit-img ${showOriginal ? 'cf-edit-img--show' : ''}`}
        />
        <img
          src="/comic/edit/fixed-zhtw.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className={`cf-edit-img ${showFixed ? 'cf-edit-img--show' : ''}`}
        />
        <img
          src="/comic/edit/translated-jp.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className={`cf-edit-img ${showTranslated ? 'cf-edit-img--show' : ''}`}
        />
        <img
          src="/comic/edit/ratio-changed.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className={`cf-edit-img ${showRatioChanged ? 'cf-edit-img--show' : ''}`}
        />

        {/* Processing overlay */}
        <div className={`cf-edit-mask ${processing ? 'cf-edit-mask--on' : ''}`}>
          <div className="cf-edit-mask-scan" />
          <div className="cf-edit-mask-pill">
            <span className="cf-spinner cf-spinner--sm" />
            <span>{processingLabel}</span>
          </div>
        </div>
      </div>

      <div className="cf-edit-toolbar">
        {copy.tools.map((label, i) => (
          <span
            key={label}
            className={`cf-edit-tool ${i === activeTool ? 'cf-edit-tool--active' : ''}`}
            data-tool={label.toLowerCase()}
          >
            {i === 0 && (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4 L4 20 L10 14 L13 21 L16 19 L13 13 L20 13 Z" />
              </svg>
            )}
            {i === 1 && (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21 C 6 18, 10 14, 14 10" />
                <path d="M14 10 L 18 6 L 21 9 L 17 13 Z" />
              </svg>
            )}
            {i === 2 && (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6 H 20" />
                <path d="M12 6 V 20" />
                <path d="M9 20 H 15" />
              </svg>
            )}
            {i === 3 && (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5 H 11" />
                <path d="M7.5 5 V 7" />
                <path d="M4 9 C 6 13, 9 15, 11 16" />
                <path d="M11 9 C 9 13, 6 15, 4 16" />
                <path d="M13 20 L 17 10 L 21 20" />
                <path d="M14.5 17 H 19.5" />
              </svg>
            )}
          </span>
        ))}
      </div>

      <div className={`cf-edit-cmd ${sending ? 'cf-edit-cmd--flash' : ''}`}>
        <span className="cf-edit-cmd-text">
          {typed || <span className="cf-edit-cmd-placeholder">{copy.placeholder}</span>}
          {(phase === 'typing-1' || phase === 'typing-2' || phase === 'typing-3') && <span className="cf-edit-cmd-cursor" />}
        </span>
        <span className={`cf-edit-cmd-send ${sending ? 'cf-edit-cmd-send--active' : ''}`}>{copy.send}</span>
      </div>
    </div>
  );
}

/* ===== Step 4: Publish Stack ===== */
export function PublishStack({ lang }: VisualProps) {
  const { ref, visible } = useInView(0.2);
  const [flippedCount, setFlippedCount] = useState(0);
  const [coverIdx, setCoverIdx] = useState(0);

  const panels = [
    '/comic/publish/sengoku-1.webp',
    '/comic/publish/sengoku-2.webp',
    '/comic/publish/sengoku-3.webp',
    '/comic/publish/baseball-1.webp',
    '/comic/publish/baseball-2.webp',
    '/comic/publish/baseball-3.webp',
  ];

  const covers = [
    '/comic/covers/cover_101.webp',
    '/comic/covers/cover_baseball.webp',
    '/comic/covers/cover_blackcat.webp',
    '/comic/covers/cover_guoya.webp',
    '/comic/covers/cover_lovely.webp',
    '/comic/covers/cover_senkoku.webp',
    '/comic/covers/cover_space.webp',
    '/comic/covers/cover_wuxia.webp',
  ];

  const pages = [...panels, covers[coverIdx]];
  const lastIdx = pages.length - 1;

  useEffect(() => {
    if (!visible) return;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const advance = () => {
      if (cancelled) return;
      setFlippedCount((prev) => {
        if (prev >= lastIdx) {
          timer = setTimeout(() => {
            if (!cancelled) {
              setCoverIdx((ci) => (ci + 1) % covers.length);
              setFlippedCount(0);
            }
          }, 3000);
          return prev;
        }
        const next = prev + 1;
        const delay = next === lastIdx ? 3000 : 600;
        timer = setTimeout(advance, delay);
        return next;
      });
    };
    timer = setTimeout(advance, 600);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [visible, flippedCount === 0]);

  return (
    <div ref={ref} className={`cf-visual cf-publish ${visible ? 'is-visible' : ''}`}>
      <AnimatePresence>
        {pages.map((src, i) => {
          if (i < flippedCount) return null;
          return (
            <motion.img
              key={`${src}-${i}-${coverIdx}`}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="cf-page"
              style={{ zIndex: pages.length - i }}
              initial={false}
              exit={{
                rotateX: -110,
                y: -200,
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
