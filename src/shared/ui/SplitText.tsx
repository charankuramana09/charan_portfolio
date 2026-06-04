import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  /** Tailwind classes applied to each word (e.g. gradient-text). */
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: 'span' | 'h1' | 'h2';
}

/**
 * Animates each word rising up from behind a clipping mask.
 * Accessible: the full string is exposed via aria-label and words are aria-hidden.
 */
const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.05,
  once = true,
  as = 'span',
}) => {
  const words = text.split(' ');
  const Wrapper = as as any;

  return (
    <Wrapper className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.06em' }}>
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: '115%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, amount: 0.5 }}
            transition={{ delay: delay + i * stagger, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
};

export default SplitText;
