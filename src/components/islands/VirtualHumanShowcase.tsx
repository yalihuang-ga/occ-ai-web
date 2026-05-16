import { useEffect, useRef, useState } from 'react';
import { Volume2, Pause } from 'lucide-react';

interface SceneMessage {
  from: 'vh' | 'user';
  text: string;
  audio?: string;
}

export interface Scene {
  key: string;
  label: string;
  tag: string;
  greeting: SceneMessage[];
  signals: string[];
}

interface Props {
  scenes: Scene[];
  imgSrc: string;
  imgSrcSmile: string;
  imgSrcThinking: string;
  ui: {
    perceptionLabel: string;
    placeholder3dTitle: string;
    placeholder3dBody: string;
    analysisTexts: string[];
  };
}

let activeAudio: HTMLAudioElement | null = null;

export default function VirtualHumanShowcase({ scenes, imgSrc, imgSrcSmile, imgSrcThinking, ui }: Props) {
  return (
    <div className="vh-cards">
      {scenes.map((scene) => (
        <SceneCard
          key={scene.key}
          scene={scene}
          imgSrc={imgSrc}
          imgSrcSmile={imgSrcSmile}
          imgSrcThinking={imgSrcThinking}
          analysisTexts={ui.analysisTexts}
          perceptionLabel={ui.perceptionLabel}
        />
      ))}

      <Placeholder3DCard
        title={ui.placeholder3dTitle}
        body={ui.placeholder3dBody}
      />

      <style>{`
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
   SceneCard — one full card per scenario
   ============================================================ */
function SceneCard({
  scene,
  imgSrc,
  imgSrcSmile,
  imgSrcThinking,
  analysisTexts,
  perceptionLabel,
}: {
  scene: Scene;
  imgSrc: string;
  imgSrcSmile: string;
  imgSrcThinking: string;
  analysisTexts: string[];
  perceptionLabel: string;
}) {
  const [tickIdx, setTickIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTickIdx((i) => i + 1), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="vh-card">
      <div className="vh-card-header">
        <span className="vh-card-tag">{scene.tag}</span>
        <span className="vh-card-label">{scene.label}</span>
      </div>

      <CharacterStage
        imgSrc={imgSrc}
        imgSrcSmile={imgSrcSmile}
        imgSrcThinking={imgSrcThinking}
        analysisTexts={analysisTexts}
      />

      <div className="vh-card-chat">
        {scene.greeting.map((msg, i) => (
          <div key={i} className={`vh-msg vh-msg-${msg.from}`}>
            <span className="vh-msg-text">{msg.text}</span>
            {msg.from === 'vh' && (
              <AudioPlayButton src={msg.audio || ''} />
            )}
          </div>
        ))}
      </div>

      <div className="vh-card-signals">
        <span className="vh-signal-label">{perceptionLabel}</span>
        <div className="vh-signal-list">
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
    </div>
  );
}

/* ============================================================
   AudioPlayButton — play/pause a single audio clip
   ============================================================ */
function AudioPlayButton({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!src || !audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      if (activeAudio && activeAudio !== audioRef.current) {
        activeAudio.pause();
        activeAudio.currentTime = 0;
      }
      activeAudio = audioRef.current;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <button
      type="button"
      className={`vh-audio-btn ${!src ? 'is-disabled' : ''} ${playing ? 'is-playing' : ''}`}
      onClick={toggle}
      disabled={!src}
      aria-label="Play voice"
    >
      <audio
        ref={audioRef}
        src={src || undefined}
        onEnded={() => setPlaying(false)}
        preload="none"
      />
      {playing ? <Pause size={14} /> : <Volume2 size={14} />}
    </button>
  );
}

/* ============================================================
   CharacterStage — character image + CV overlay
   ============================================================ */
function CharacterStage({
  imgSrc,
  imgSrcSmile,
  imgSrcThinking,
  analysisTexts,
}: {
  imgSrc: string;
  imgSrcSmile: string;
  imgSrcThinking: string;
  analysisTexts: string[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [textIdx, setTextIdx] = useState(0);
  const images = [imgSrc, imgSrcSmile, imgSrcThinking];

  useEffect(() => {
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTextIdx((i) => (i + 1) % analysisTexts.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="vh-stage">
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

      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? 'MIYAKIEN virtual human' : ''}
          className="vh-character-img"
          style={{
            opacity: activeIdx === i ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />
      ))}

      <div className="vh-analysis-ticker">
        <span className="vh-analysis-dot" />
        <span key={textIdx} className="vh-analysis-text">
          {analysisTexts[textIdx]}
        </span>
      </div>

      <div className="vh-scan-line" />
      <div className="vh-grid-bg" />
    </div>
  );
}

/* ============================================================
   Placeholder3DCard — coming soon placeholder
   ============================================================ */
function Placeholder3DCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="vh-card vh-card-3d">
      <div className="vh-card-header">
        <span className="vh-card-tag">3D</span>
        <span className="vh-card-label">{title}</span>
      </div>
      <div className="vh-placeholder">
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
        <p className="vh-placeholder-body">{body}</p>
      </div>
    </div>
  );
}
