import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePerformanceMode } from '../../lib/usePerformanceMode';

/**
 * Wraps children so they're gently pulled toward the cursor on hover.
 * Disabled automatically when the user prefers reduced motion / low-power.
 */
const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; className?: string }> = ({
  children,
  strength = 0.35,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion, lowPower } = usePerformanceMode();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const disabled = reducedMotion || lowPower;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: disabled ? 0 : springX, y: disabled ? 0 : springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
