import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePerformanceMode } from '../../lib/usePerformanceMode';

/** 3D tilt-on-hover wrapper with a moving light spotlight. Reduced-motion safe. */
const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  max?: number;
}> = ({ children, className = '', max = 8 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion, lowPower } = usePerformanceMode();
  const disabled = reducedMotion || lowPower;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={
        disabled
          ? undefined
          : { rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 1000 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
