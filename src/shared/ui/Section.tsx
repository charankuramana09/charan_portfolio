import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SplitText from './SplitText';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

/** Consistent section header: eyebrow chip → kinetic title (+ gradient highlight) → animated underline → subtitle. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const wordCount = title.split(' ').length;
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
          {eyebrow}
        </motion.span>
      )}

      <h2 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
        <SplitText text={title} />
        {highlight && (
          <>
            {' '}
            <SplitText text={highlight} wordClassName="gradient-text" delay={wordCount * 0.05} />
          </>
        )}
      </h2>

      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className={`mt-5 block h-1 w-24 rounded-full bg-brand-gradient ${align === 'center' ? 'mx-auto' : ''}`}
        style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
      />

      {subtitle && (
        <Reveal delay={0.15}>
          <p className={`mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  'aria-label'?: string;
}

/** Standard section shell with consistent vertical rhythm + max width. */
const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  containerClassName = '',
  ...rest
}) => (
  <section
    id={id}
    className={`relative py-20 sm:py-28 ${className}`}
    aria-label={rest['aria-label']}
  >
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
      {children}
    </div>
  </section>
);

export default Section;
