import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect } from 'react';

interface HudItem {
  label: string;
  value: string;
}

interface Props {
  mixSrc: string;
  alt: string;
  hudItems: HudItem[];
}

export default function VHDigitalPersonaHero({ mixSrc, alt, hudItems }: Props) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 26 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 26 });
  const figureX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const figureY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const hudX = useTransform(smoothX, [-1, 1], [16, -16]);
  const hudY = useTransform(smoothY, [-1, 1], [10, -10]);

  useEffect(() => {
    let raf = 0;
    let nextX = 0;
    let nextY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      nextX = event.clientX / window.innerWidth * 2 - 1;
      nextY = event.clientY / window.innerHeight * 2 - 1;

      if (!raf) {
        raf = window.requestAnimationFrame(() => {
          pointerX.set(nextX);
          pointerY.set(nextY);
          raf = 0;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [pointerX, pointerY]);

  return (
    <div className="vh-digital" aria-label={alt}>
      <motion.div className="vh-digital-aura" style={{ x: hudX, y: hudY }} />

      <motion.div className="vh-digital-figure" style={{ x: figureX, y: figureY }}>
        <motion.img
          className="vh-digital-img vh-digital-img--mix"
          src={mixSrc}
          alt={alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          animate={{
            opacity: [0.96, 1, 0.98, 1, 0.97],
          }}
          transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="vh-digital-scan"
          aria-hidden="true"
          animate={{ x: ['-42%', '46%', '-22%'], opacity: [0.18, 0.72, 0.28] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div className="vh-digital-hud vh-digital-hud--top" style={{ x: hudX, y: hudY }}>
        <span className="vh-digital-live-dot" />
        LIVE DATA
      </motion.div>

      <motion.div className="vh-digital-hud-list" style={{ x: hudX, y: hudY }}>
        {hudItems.map((item, index) => (
          <motion.div
            className="vh-digital-hud-card"
            key={item.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.16, duration: 0.55, ease: 'easeOut' }}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
