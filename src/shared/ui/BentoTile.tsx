import React from 'react';
import { motion, type Variants } from 'framer-motion';

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * A single bento grid cell: glass surface + spotlight border on hover + entrance reveal.
 * Place inside a CSS grid and use `className` for col/row spans.
 */
const BentoTile: React.FC<{
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  as?: 'div' | 'a';
  href?: string;
  [key: string]: any;
}> = ({ children, className = '', interactive = true, ...rest }) => (
  <motion.div
    variants={tileVariants}
    whileHover={interactive ? { y: -4 } : undefined}
    className={`glass-card tile-spotlight overflow-hidden p-6 sm:p-7 ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
);

export default BentoTile;
