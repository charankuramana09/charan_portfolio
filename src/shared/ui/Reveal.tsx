import React from 'react';
import { motion, type Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  distance?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'li' | 'span';
  /** Add a blur-in effect (cinematic focus pull). */
  blur?: boolean;
  /** Add a slight scale-up effect. */
  scale?: boolean;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

/** Scroll-into-view reveal. The shared motion primitive used across all sections. */
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance,
  once = true,
  as = 'div',
  blur = false,
  scale = false,
}) => {
  const off = offsets[direction];
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: off.x ? (distance ?? off.x) * Math.sign(off.x) : 0,
      y: off.y ? (distance ?? off.y) * Math.sign(off.y) : 0,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      scale: scale ? 0.94 : 1,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
};

/** Stagger container — pair with <Reveal> children that use variants `staggerItem`. */
export const StaggerGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  gap?: number;
  once?: boolean;
}> = ({ children, className, gap = 0.08, once = true }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, amount: 0.15 }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
  >
    {children}
  </motion.div>
);

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default Reveal;
