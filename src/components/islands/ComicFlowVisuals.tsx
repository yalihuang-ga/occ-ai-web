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

  useEffect(() => {
    if (!visible) return;
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
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
      <div className="cf-chat-header">
        <span className="cf-dot" />
        <span className="cf-mono-label">STORY</span>
        <span className="cf-line" />
      </div>

      {/* User 1 — always visible once triggered */}
      <div className={`cf-msg cf-msg--user ${phase >= 0 && visible ? 'cf-in' : ''}`}>
        <div className="cf-bubble cf-bubble--user">{s.user1}</div>
      </div>

      {/* AI 1 */}
      <div className={`cf-msg cf-msg--ai ${phase >= 1 ? 'cf-in' : ''}`}>
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
      <div className={`cf-msg cf-msg--user ${phase >= 2 ? 'cf-in' : ''}`}>
        <div className="cf-bubble cf-bubble--user">{s.user2}</div>
      </div>

      {/* AI 2 */}
      <div className={`cf-msg cf-msg--ai ${phase >= 3 ? 'cf-in' : ''}`}>
        <div className="cf-avatar">✦</div>
        <div className="cf-bubble cf-bubble--ai">
          <p>{s.ai2}</p>
        </div>
      </div>

      {/* Typing indicator (shows between phases) */}
      {visible && phase < 3 && (
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
