import { useEffect, useRef, useState } from 'react';
import { Mic } from 'lucide-react';

type Mode = '2d' | '3d';

interface SceneMessage {
  from: 'vh' | 'user';
  text: string;
}

export interface Scene {
  key: string;
  label: string;
  tag: string;
  greeting: SceneMessage[];
  replies: string[];
  signals: string[];
}

interface Props {
  scenes: Scene[];
  imgSrc: string;
  imgSrcSmile: string;
  ui: {
    modeLabel: string;
    mode2d: string;
    mode3d: string;
    mode3dPending: string;
    sceneLabel: string;
    perceptionLabel: string;
    placeholder: string;
    sendLabel: string;
    liveLabel: string;
    placeholder3dTitle: string;
    placeholder3dBody: string;
    analysisTexts: string[];
  };
}

/**
 * Virtual-human full showcase island.
 *
 * Combines: mode toggle (2D / 3D placeholder) + scene toggle (3 B2B scenes) +
 * character display with CV overlay (scan line, landmark dots, bracket corners) +
 * chat thread + perception strip (cycling signal highlight).
 *
 * Per scene change: chat thread resets to scene's preset greeting; perception
 * signals swap; mock reply pool changes too.
 */
export default function VirtualHumanShowcase({ scenes, imgSrc, imgSrcSmile, ui }: Props) {
  const [mode, setMode] = useState<Mode>('2d');
  const [sceneIdx, setSceneIdx] = useState(0);
  const scene = scenes[sceneIdx];

  const [messages, setMessages] = useState<SceneMessage[]>(scene.greeting);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Reset chat when scene changes
  useEffect(() => {
    setMessages(scene.greeting);
    setInput('');
    setTyping(false);
  }, [sceneIdx]);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  // Perception ticker — single highlighted signal + dot
  const [tickIdx, setTickIdx] = useState(0);
  useEffect(() => {
    setTickIdx(0);
    const id = setInterval(() => setTickIdx((i) => i + 1), 1800);
    return () => clearInterval(id);
  }, [sceneIdx]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((m) => [...m, { from: 'user', text: userMsg }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = scene.replies[Math.floor(Math.random() * scene.replies.length)];
      setMessages((m) => [...m, { from: 'vh', text: reply }]);
      setTyping(false);
    }, 900);
  };

  return (
    <div className="vh-showcase">
      {/* Mode + Scene controls */}
      <div className="vh-controls">
        <div className="vh-control-group">
          <span className="vh-control-label">{ui.modeLabel}</span>
          <div className="vh-tab-row">
            <button
              type="button"
              className={`vh-tab ${mode === '2d' ? 'is-active' : ''}`}
              onClick={() => setMode('2d')}
            >
              {ui.mode2d}
            </button>
            <button
              type="button"
              className="vh-tab is-disabled"
              onClick={() => setMode('3d')}
              aria-disabled="true"
              title={ui.mode3dPending}
            >
              {ui.mode3d}
              <span className="vh-tab-badge">{ui.mode3dPending}</span>
            </button>
          </div>
        </div>

        <div className="vh-control-group">
          <span className="vh-control-label">{ui.sceneLabel}</span>
          <div className="vh-tab-row vh-scene-row">
            {scenes.map((s, i) => (
              <button
                key={s.key}
                type="button"
                className={`vh-tab ${sceneIdx === i ? 'is-active' : ''}`}
                onClick={() => setSceneIdx(i)}
              >
                {s.label}
                <span className="vh-tab-tag">{s.tag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="vh-status">
        <span>
          {ui.liveLabel} <span style={{ opacity: 0.5 }}>·</span>{' '}
          <span style={{ color: 'var(--color-cinnabar)' }}>
            {mode === '2d' ? ui.mode2d : ui.mode3d}
          </span>{' '}
          <span style={{ opacity: 0.5 }}>·</span>{' '}
          <span style={{ color: 'var(--color-gold)' }}>{scene.label}</span>
        </span>
      </div>

      {/* Main demo grid */}
      <div className="vh-grid">
        {/* Character + CV overlay */}
        <div className="vh-character-area">
          {mode === '2d' ? (
            <CharacterStage imgSrc={imgSrc} imgSrcSmile={imgSrcSmile} analysisTexts={ui.analysisTexts} />
          ) : (
            <Placeholder3D
              title={ui.placeholder3dTitle}
              body={ui.placeholder3dBody}
            />
          )}
        </div>

        {/* Chat */}
        <div className="vh-chat-area">
          <div ref={chatRef} className="vh-chat-thread">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`vh-msg vh-msg-${m.from}`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="vh-msg vh-msg-vh vh-typing">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="vh-typing-dot"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="vh-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder={ui.placeholder}
              className="vh-input"
            />
            <button
              type="button"
              className="vh-mic"
              aria-label="Voice input"
              title="Voice input (coming soon)"
            >
              <Mic size={18} strokeWidth={1.6} />
            </button>
            <button onClick={handleSend} className="vh-send">
              {ui.sendLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Perception strip */}
      <div className="vh-perception-strip">
        <span className="vh-perception-label">{ui.perceptionLabel}</span>
        <div className="vh-perception-signals">
          {scene.signals.map((s, i) => {
            const active = i === tickIdx % scene.signals.length;
            return (
              <span
                key={`${scene.key}-${i}`}
                className={`vh-signal ${active ? 'is-active' : ''}`}
              >
                <span className="vh-signal-dot" />
                {s}
              </span>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes vhTyping {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-2px); }
        }
        @keyframes vhScan {
          0% { transform: translateY(-10%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110%); opacity: 0; }
        }
        @keyframes vhPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   CharacterStage — character image + CV overlay
   ============================================================ */
function CharacterStage({ imgSrc, imgSrcSmile, analysisTexts }: { imgSrc: string; imgSrcSmile: string; analysisTexts: string[] }) {
  const [showSmile, setShowSmile] = useState(false);
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setShowSmile((v) => !v), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTextIdx((i) => (i + 1) % analysisTexts.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="vh-stage">
      {/* Bracket corners */}
      {[
        { top: 12, left: 12 },
        { top: 12, right: 12 },
        { bottom: 12, left: 12 },
        { bottom: 12, right: 12 },
      ].map((p, i) => (
        <span
          key={i}
          className="vh-bracket"
          style={{
            ...p,
            borderTop: i < 2 ? '1.5px solid var(--color-cinnabar)' : 'none',
            borderBottom: i >= 2 ? '1.5px solid var(--color-cinnabar)' : 'none',
            borderLeft: i === 0 || i === 2 ? '1.5px solid var(--color-cinnabar)' : 'none',
            borderRight: i === 1 || i === 3 ? '1.5px solid var(--color-cinnabar)' : 'none',
          }}
        />
      ))}

      {/* Character — two images crossfading */}
      <img
        src={imgSrc}
        alt="MIYAKIEN virtual human"
        className="vh-character-img"
        style={{ opacity: showSmile ? 0 : 1, transition: 'opacity 0.6s ease' }}
      />
      <img
        src={imgSrcSmile}
        alt=""
        className="vh-character-img"
        style={{
          opacity: showSmile ? 1 : 0,
          transition: 'opacity 0.6s ease',
          transform: 'translateX(-50%) scale(1.15)',
          transformOrigin: 'top center',
        }}
      />

      {/* Bottom analysis text ticker */}
      <div className="vh-analysis-ticker">
        <span className="vh-analysis-dot" />
        <span key={textIdx} className="vh-analysis-text">
          {analysisTexts[textIdx]}
        </span>
      </div>

      {/* Scan line (CSS animated) */}
      <div className="vh-scan-line" />

      {/* Subtle grid backdrop */}
      <div className="vh-grid-bg" />
    </div>
  );
}

function Placeholder3D({ title, body }: { title: string; body: string }) {
  return (
    <div className="vh-placeholder">
      {/* Wireframe cube placeholder */}
      <svg viewBox="0 0 100 100" className="vh-placeholder-svg">
        <g stroke="rgba(255,90,31,0.5)" strokeWidth="0.5" fill="none">
          <polygon points="30,30 70,30 70,70 30,70" />
          <polygon points="40,20 80,20 80,60 40,60" />
          <line x1="30" y1="30" x2="40" y2="20" />
          <line x1="70" y1="30" x2="80" y2="20" />
          <line x1="70" y1="70" x2="80" y2="60" />
          <line x1="30" y1="70" x2="40" y2="60" />
        </g>
      </svg>
      <div className="vh-placeholder-text">
        <div className="vh-placeholder-title">{title}</div>
        <div className="vh-placeholder-body">{body}</div>
      </div>
    </div>
  );
}
