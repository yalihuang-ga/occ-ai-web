import { useRef, useState, useEffect } from 'react';
import { Volume2, Pause } from 'lucide-react';

interface SceneMessage {
  from: 'vh' | 'user';
  text: string;
  audio?: string;
}

export interface Scene {
  key: string;
  title: string;
  description: string;
  greeting: SceneMessage[];
  videoMp4?: string;
  videoWebm?: string;
  perceptionLabels?: string[];
}

interface Props {
  scenes: Scene[];
  imgSrc?: string;
  imgSrcSmile?: string;
  imgSrcThinking?: string;
}

let activeAudio: HTMLAudioElement | null = null;

/**
 * Toggle voice playback UI on the chat bubbles. Set to false while
 * audio assets are not yet ready (currently `public/audio/vh/*.mp3`
 * does not exist) so we don't surface a non-functional play button.
 * Flip back to true once the MP3 files are placed under public/audio/vh/.
 */
const VH_VOICE_ENABLED = false;

export default function VirtualHumanShowcase({ scenes, imgSrc, imgSrcSmile, imgSrcThinking }: Props) {
  const fallbackImages = [imgSrc, imgSrcSmile, imgSrcThinking].filter(Boolean) as string[];
  return (
    <div className="vh-scenes">
      {scenes.map((scene, idx) => (
        <SceneSection
          key={scene.key}
          scene={scene}
          reversed={idx % 2 === 1}
          fallbackImages={fallbackImages}
        />
      ))}

      <style>{`
        @keyframes vhScan {
          0% { transform: translateY(-10%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   SceneSection — alternating left/right layout per scene
   ============================================================ */
function SceneSection({
  scene,
  reversed,
  fallbackImages,
}: {
  scene: Scene;
  reversed: boolean;
  fallbackImages: string[];
}) {
  return (
    <div className={`vh-scene ${reversed ? 'vh-scene--reversed' : ''}`}>
      <div className="vh-scene-media">
        <VideoStage
          videoMp4={scene.videoMp4}
          videoWebm={scene.videoWebm}
          fallbackImages={fallbackImages}
          perceptionLabels={scene.perceptionLabels}
        />
      </div>

      <div className="vh-scene-content">
        <h3 className="vh-scene-title">{scene.title}</h3>
        <p className="vh-scene-desc">{scene.description}</p>

        <div className="vh-scene-chat">
          {scene.greeting.map((msg, i) => (
            <ChatBubble key={i} msg={msg} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ChatBubble — single message with optional audio play button
   ============================================================ */
function ChatBubble({ msg }: { msg: SceneMessage }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!msg.audio || !audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      if (activeAudio && activeAudio !== audioRef.current) {
        activeAudio.pause();
        activeAudio.currentTime = 0;
      }
      activeAudio = audioRef.current;
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div className={`vh-bubble vh-bubble--${msg.from}`}>
      <span className="vh-bubble-text">{msg.text}</span>
      {msg.from === 'vh' && msg.audio && VH_VOICE_ENABLED && (
        <>
          <button
            type="button"
            className={`vh-bubble-play ${playing ? 'is-playing' : ''}`}
            onClick={toggle}
            aria-label="Play voice"
          >
            {playing ? <Pause size={14} /> : <Volume2 size={14} />}
          </button>
          <audio
            ref={audioRef}
            src={msg.audio}
            onEnded={() => setPlaying(false)}
            preload="none"
          />
        </>
      )}
    </div>
  );
}

/* ============================================================
   VideoStage — video loop (or image fallback) + overlays
   ============================================================ */
function VideoStage({
  videoMp4,
  videoWebm,
  fallbackImages,
  perceptionLabels,
}: {
  videoMp4?: string;
  videoWebm?: string;
  fallbackImages: string[];
  perceptionLabels?: string[];
}) {
  const hasVideo = !!(videoWebm || videoMp4);
  const [activeIdx, setActiveIdx] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const images = fallbackImages;

  useEffect(() => {
    if (!hasVideo || shouldLoadVideo) return;
    const node = stageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '360px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasVideo, shouldLoadVideo]);

  if (!hasVideo) {
    setTimeout(() => {
      const id = setInterval(() => setActiveIdx((i) => (i + 1) % images.length), 3500);
      return () => clearInterval(id);
    }, 0);
  }

  return (
    <div className="vh-stage" ref={stageRef}>
      {hasVideo ? (
        <video
          className="vh-character-video"
          autoPlay={shouldLoadVideo}
          loop
          muted
          playsInline
          preload="none"
        >
          {shouldLoadVideo && videoWebm && <source src={videoWebm} type="video/webm" />}
          {shouldLoadVideo && videoMp4 && <source src={videoMp4} type="video/mp4" />}
        </video>
      ) : (
        images.map((src, i) => (
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
        ))
      )}

      {perceptionLabels && perceptionLabels.length > 0 && (
        <PerceptionLabels labels={perceptionLabels} />
      )}

      <div className="vh-scan-line" />
      <div className="vh-grid-bg" />
    </div>
  );
}

/* ============================================================
   PerceptionLabels — floating AI perception HUD overlays
   ============================================================ */
function PerceptionLabels({ labels }: { labels: string[] }) {
  const [visibleIdx, setVisibleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleIdx((i) => (i + 1) % labels.length);
    }, 2800);
    return () => clearInterval(id);
  }, [labels.length]);

  return (
    <div className="vh-perception-labels">
      <span key={visibleIdx} className="vh-perception-label">
        {labels[visibleIdx]}
      </span>
    </div>
  );
}
