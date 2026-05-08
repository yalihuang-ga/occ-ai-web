import { useState } from 'react';

interface Stage {
  num: '01' | '02' | '03' | '04';
  label: string;
  en: string;
  title: string;
  desc: string;
  meta: [string, string, string];
}

interface Props {
  stages: Stage[];
  capabilitiesLabel: string;
}

/**
 * AI Comic Studio — 4-stage tabbed showcase.
 * Each stage shows a custom SVG mockup of the workflow step.
 * Tabs along the top, large interactive preview pane on the right.
 */
export default function ComicStudio({ stages, capabilitiesLabel }: Props) {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <>
      {/* Stage tabs */}
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
              {/* Active top indicator */}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 12,
                  marginBottom: 10,
                }}
              >
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
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--color-bone-3)',
                  letterSpacing: '0.05em',
                }}
              >
                {s.en}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage canvas */}
      <div
        className="mx-comic-canvas grid"
        style={{
          gridTemplateColumns: '1fr 1.4fr',
          gap: 0,
          border: '1px solid var(--bone-line)',
          borderTop: 'none',
          background: 'var(--color-ink-2)',
          minHeight: 560,
        }}
      >
        {/* Left text */}
        <div
          style={{
            padding: '56px 48px',
            borderRight: '1px solid var(--bone-line)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              fontFamily: 'var(--font-headline)',
              fontSize: 140,
              fontWeight: 700,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(244,236,220,0.06)',
              lineHeight: 1,
              letterSpacing: '-0.06em',
              pointerEvents: 'none',
            }}
          >
            {stage.num}
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="num-tag"
              style={{ marginBottom: 24, color: 'var(--color-cinnabar)' }}
            >
              {stage.en}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 44,
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-bone)',
                margin: '0 0 28px',
              }}
            >
              {stage.title}
            </h3>
            <p
              className="body-md-v2"
              style={{ marginBottom: 36, maxWidth: 420 }}
            >
              {stage.desc}
            </p>

            <div style={{ borderTop: '1px solid var(--bone-line)', paddingTop: 24 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: 'var(--color-bone-3)',
                  marginBottom: 16,
                }}
              >
                {capabilitiesLabel}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {stage.meta.map((m, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      fontSize: 13,
                      color: 'var(--color-bone-2)',
                    }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 1,
                        background: 'var(--color-cinnabar)',
                      }}
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right mockup */}
        <div
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
          {active === 0 && <MockStory />}
          {active === 1 && <MockCharacter />}
          {active === 2 && <MockStoryboard />}
          {active === 3 && <MockCanvas />}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   Stage mockups — pure SVG/CSS, no real screenshots
   ============================================================ */

function MockStory() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--color-cinnabar)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'var(--color-bone-2)',
          }}
        >
          STORY · zh-TW · FLEXIBLE
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--color-bone-3)',
          }}
        >
          9,995 pts
        </span>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div
          style={{
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
          }}
        >
          ✦
        </div>
        <div
          style={{
            background: 'rgba(244,236,220,0.04)',
            border: '1px solid var(--bone-line)',
            padding: '14px 18px',
            maxWidth: '85%',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: 'var(--color-bone)',
              lineHeight: 1.7,
              marginBottom: 8,
            }}
          >
            「無繩攀登台北 101」這個切入點很有畫面感。我會把節奏切成三幕：仰望、起步、雲層之上──
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['第一幕 · 仰望', '第二幕 · 玻璃幕牆', '第三幕 · 竹節結構', '第四幕 · 雲層之上'].map(
              (p, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 10,
                    padding: '3px 8px',
                    background: 'rgba(255,90,31,0.1)',
                    color: 'var(--color-cinnabar)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {p}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
        <div
          style={{
            background: 'var(--color-cinnabar)',
            color: 'var(--color-bone)',
            padding: '12px 16px',
            maxWidth: '70%',
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          想做一部以艾力克斯·霍諾德為主角的漫畫，他在台北 101 進行無繩自由攀登。
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 4 }}>
        <div
          style={{
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
          }}
        >
          ✦
        </div>
        <div
          style={{
            background: 'rgba(244,236,220,0.04)',
            border: '1px solid var(--bone-line)',
            padding: '14px 18px',
            maxWidth: '85%',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: 'var(--color-bone-2)',
              lineHeight: 1.7,
            }}
          >
            已草擬四幕節奏與場景設定，準備進入角色 / 場景設計階段。
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['調整第三幕高度', '加入風速旁白', '完成討論 →'].map((c, i) => (
          <span
            key={i}
            style={{
              fontSize: 11,
              padding: '8px 14px',
              border: i === 2 ? '1px solid var(--color-cinnabar)' : '1px solid var(--bone-line)',
              color: i === 2 ? 'var(--color-cinnabar)' : 'var(--color-bone-2)',
              background: 'var(--color-ink-2)',
            }}
          >
            {c}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          padding: '12px 16px',
          border: '1px solid var(--bone-line)',
          background: 'var(--color-ink-2)',
        }}
      >
        <span style={{ fontSize: 12, color: 'var(--color-bone-3)', flex: 1 }}>
          描述您的故事構想…
        </span>
        <span
          style={{
            fontSize: 11,
            color: 'var(--color-cinnabar)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.15em',
          }}
        >
          SEND ↵
        </span>
      </div>
    </div>
  );
}

function MockCharacter() {
  const sceneBoards: { src: string; tag: string; label: string }[] = [
    { src: '/comic/loc-glass.webp', tag: 'SCENE · 01', label: '玻璃幕牆' },
    { src: '/comic/loc-bamboo.webp', tag: 'SCENE · 02', label: '竹節結構' },
    { src: '/comic/loc-peak.webp', tag: 'SCENE · 03', label: '避雷針基座' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, padding: 28, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          CHARACTER + SCENE · LOCKED
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        <span
          style={{
            fontSize: 10,
            color: '#6ad08a',
            border: '1px solid rgba(106,208,138,0.3)',
            padding: '3px 8px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.15em',
          }}
        >
          ✓ GENERATED
        </span>
      </div>

      {/* Character turnaround panel */}
      <div className="comic-panel" style={{ background: 'var(--color-ink-2)', border: '1px solid var(--bone-line)' }}>
        <div className="comic-panel-head">
          <span className="comic-panel-tag">CHARACTER · 三視圖</span>
          <span className="comic-panel-meta">主角 · v3 · LOCKED</span>
        </div>
        <div className="comic-art-wrap" style={{ aspectRatio: '900 / 420' }}>
          <img
            src="/comic/char-turnaround.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="comic-art comic-art--char"
          />
          <span className="comic-art-tint" />
          <span className="comic-art-halftone" />
          <span className="comic-art-scan" />
          {/* Pose markers */}
          {[
            { left: '12%', label: 'FRONT' },
            { left: '46%', label: 'SIDE' },
            { left: '78%', label: 'BACK' },
          ].map((p) => (
            <span key={p.label} className="comic-art-marker" style={{ left: p.left }}>
              {p.label}
            </span>
          ))}
          {/* Bracket corners */}
          <span className="comic-bracket" style={{ top: 8, left: 8, borderTop: '1px solid var(--color-cinnabar)', borderLeft: '1px solid var(--color-cinnabar)' }} />
          <span className="comic-bracket" style={{ top: 8, right: 8, borderTop: '1px solid var(--color-cinnabar)', borderRight: '1px solid var(--color-cinnabar)' }} />
          <span className="comic-bracket" style={{ bottom: 8, left: 8, borderBottom: '1px solid var(--color-cinnabar)', borderLeft: '1px solid var(--color-cinnabar)' }} />
          <span className="comic-bracket" style={{ bottom: 8, right: 8, borderBottom: '1px solid var(--color-cinnabar)', borderRight: '1px solid var(--color-cinnabar)' }} />
        </div>
        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--bone-line)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', color: 'var(--color-bone-3)', marginBottom: 4 }}>
            PERSONALITY
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-bone-2)', lineHeight: 1.6 }}>
            獨行型主角。冷靜、專注，習慣以最少的裝備面對極端高度。
          </div>
        </div>
      </div>

      {/* Scene boards */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="comic-panel-tag" style={{ background: 'rgba(255,90,31,0.1)', padding: '3px 8px' }}>
            SCENE · 概念板
          </span>
          <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-bone-3)', letterSpacing: '0.15em' }}>
            3 / 3 BOARDS
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {sceneBoards.map((b) => (
            <div key={b.tag} style={{ background: 'var(--color-ink)', border: '1px solid var(--bone-line)' }}>
              <div className="comic-art-wrap" style={{ aspectRatio: '4 / 3' }}>
                <img src={b.src} alt="" loading="lazy" decoding="async" className="comic-art" />
                <span className="comic-art-tint" />
                <span className="comic-art-halftone" />
              </div>
              <div style={{ padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bone-line)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--color-cinnabar)' }}>{b.tag}</span>
                <span style={{ fontFamily: 'var(--font-serif-tc)', fontSize: 11, color: 'var(--color-bone-2)' }}>{b.label}</span>
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
        position: 'absolute',
        inset: 0,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          STORYBOARD · 9 / 9 GENERATED
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-bone-3)' }}>
          頁漫 · zh-TW
        </span>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
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
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          CANVAS EDITOR
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        {['新增頁面', '版面樣式', '匯出圖片', '下載素材'].map((b, i) => (
          <span
            key={i}
            style={{
              fontSize: 10,
              padding: '5px 10px',
              border: i === 2 ? '1px solid var(--color-cinnabar)' : '1px solid var(--bone-line)',
              color: i === 2 ? 'var(--color-cinnabar)' : 'var(--color-bone-2)',
              background: i === 2 ? 'rgba(255,90,31,0.1)' : 'transparent',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em',
            }}
          >
            {b}
          </span>
        ))}
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.6fr 0.9fr', gap: 14 }}>
        <div
          style={{
            background: '#f4ecdc',
            border: '1px solid var(--bone-line)',
            padding: 14,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 8,
              right: 12,
              fontFamily: 'var(--font-mono)',
              fontSize: 8,
              color: '#999',
              letterSpacing: '0.2em',
            }}
          >
            PAGE · 01
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gridTemplateRows: '1.1fr 0.9fr 0.9fr',
              gap: 6,
              height: '100%',
            }}
          >
            {[
              { src: '/comic/panel-1a.webp', span: 'row', pos: 'center top' },
              { src: '/comic/loc-glass.webp', span: '', pos: 'center center' },
              { src: '/comic/panel-2b.webp', span: '', pos: 'left center' },
              { src: '/comic/panel-3a.webp', span: 'col', pos: 'center top' },
            ].map((p, i) => (
              <div
                key={i}
                className="comic-art-wrap"
                style={{
                  gridRow: p.span === 'row' ? 'span 2' : undefined,
                  gridColumn: p.span === 'col' ? 'span 2' : undefined,
                  border: '1px solid #222',
                  background: '#0e0b08',
                }}
              >
                <img
                  src={p.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="comic-art"
                  style={{ objectPosition: p.pos }}
                />
                <span className="comic-art-tint" />
                <span className="comic-art-halftone" />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ border: '1px solid var(--bone-line)', padding: '14px 16px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                letterSpacing: '0.25em',
                color: 'var(--color-bone-3)',
                marginBottom: 8,
              }}
            >
              專案詳情
            </div>
            <div
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 14,
                color: 'var(--color-bone)',
                lineHeight: 1.4,
                marginBottom: 14,
              }}
            >
              絕壁之巔：<br />艾力克斯·霍諾德的 101 自由攀登
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                ['角色', '1'],
                ['場景', '3'],
                ['分鏡', '9'],
                ['頁數', '4'],
              ].map(([l, v], i) => (
                <div key={i}>
                  <div style={{ fontSize: 9, color: 'var(--color-bone-3)', letterSpacing: '0.1em', marginBottom: 2 }}>
                    {l}
                  </div>
                  <div style={{ fontFamily: 'var(--font-headline)', fontSize: 22, color: 'var(--color-bone)', lineHeight: 1 }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              border: '1px solid var(--color-cinnabar)',
              padding: '14px 16px',
              background: 'rgba(255,90,31,0.06)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                letterSpacing: '0.25em',
                color: 'var(--color-cinnabar)',
                marginBottom: 8,
              }}
            >
              分享與發布
            </div>
            <div style={{ fontSize: 11, color: 'var(--color-bone-2)', lineHeight: 1.5, marginBottom: 12 }}>
              發布後可獲得專屬連結，讓讀者一頁頁翻完你的作品。
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 12px',
                background: 'var(--color-cinnabar)',
                color: 'var(--color-bone)',
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, flex: 1 }}>發布到社群</span>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderTop: '1.5px solid currentColor',
                  borderRight: '1.5px solid currentColor',
                  transform: 'rotate(45deg)',
                  display: 'inline-block',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
