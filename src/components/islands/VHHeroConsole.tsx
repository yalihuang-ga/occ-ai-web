import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  tabs: { key: string; label: string }[];
}

const palettes: Record<string, string[]> = {
  persona: [
    'radial-gradient(circle, rgba(255,90,31,0.35), rgba(255,140,60,0.1) 70%, transparent)',
    'radial-gradient(circle, rgba(255,120,50,0.4), rgba(200,80,20,0.08) 70%, transparent)',
    'radial-gradient(circle, rgba(255,90,31,0.3), rgba(255,160,80,0.1) 70%, transparent)',
  ],
  brain: [
    'radial-gradient(circle, rgba(100,80,220,0.35), rgba(140,100,255,0.1) 70%, transparent)',
    'radial-gradient(circle, rgba(130,100,255,0.4), rgba(80,60,200,0.08) 70%, transparent)',
    'radial-gradient(circle, rgba(100,80,220,0.3), rgba(160,130,255,0.1) 70%, transparent)',
  ],
  acoustics: [
    'radial-gradient(circle, rgba(30,200,180,0.35), rgba(50,220,200,0.1) 70%, transparent)',
    'radial-gradient(circle, rgba(50,220,200,0.4), rgba(20,180,160,0.08) 70%, transparent)',
    'radial-gradient(circle, rgba(30,200,180,0.3), rgba(80,240,220,0.1) 70%, transparent)',
  ],
};

const gridColors: Record<string, string> = {
  persona: 'rgba(255,90,31,0.15)',
  brain: 'rgba(130,100,255,0.15)',
  acoustics: 'rgba(50,220,200,0.15)',
};

const idlePositions = [
  { x: -160, y: 20, scale: 0.9 },
  { x: 0, y: -10, scale: 1.1 },
  { x: 160, y: 20, scale: 0.9 },
];

const convergePositions = [
  { x: -30, y: 0, scale: 0.85 },
  { x: 0, y: 0, scale: 1.05 },
  { x: 30, y: 0, scale: 0.85 },
];

const springTransition = { type: 'spring' as const, stiffness: 100, damping: 22 };

export default function VHHeroConsole({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || 'persona');
  const [hovering, setHovering] = useState(false);

  const palette = palettes[activeTab] || palettes.persona;
  const gridColor = gridColors[activeTab] || gridColors.persona;
  const positions = hovering ? convergePositions : idlePositions;

  return (
    <div className="vh-hero-console">
      <div className="vh-hero-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`vh-hero-tab ${activeTab === tab.key ? 'is-active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span
              className="vh-hero-tab-dot"
              style={{
                background:
                  tab.key === 'persona'
                    ? 'var(--color-cinnabar)'
                    : tab.key === 'brain'
                      ? '#7c5cff'
                      : '#2adcc8',
              }}
            />
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="vh-hero-canvas"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="vh-hero-orb"
            animate={{
              x: positions[i].x,
              y: positions[i].y,
              scale: positions[i].scale,
            }}
            transition={springTransition}
            style={{
              background: palette[i],
              backgroundImage: `
                linear-gradient(${gridColor} 1px, transparent 1px),
                linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          />
        ))}

        {hovering && (
          <motion.div
            className="vh-hero-converge-ring"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
}
