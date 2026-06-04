import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

type Variant = 'primary' | 'ghost';

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
}

const styles: Record<Variant, string> = {
  primary:
    'group relative overflow-hidden rounded-xl bg-brand-gradient bg-[length:200%_auto] px-7 py-3.5 font-semibold text-white shadow-glow transition-[background-position] duration-500 hover:bg-right',
  ghost:
    'group relative rounded-xl border border-slate-200 bg-white/70 px-7 py-3.5 font-semibold text-slate-700 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/50 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-white',
};

type ButtonProps = BaseProps &
  (
    | ({ as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: 'a' } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  );

/** Primary CTA / ghost button with optional magnetic pull and a sheen on hover. */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  magnetic = true,
  as = 'button',
  ...rest
}) => {
  const inner = (
    <motion.span whileTap={{ scale: 0.96 }} className="inline-block">
      {React.createElement(
        as,
        { className: `focus-ring inline-flex items-center justify-center gap-2 ${styles[variant]} ${className}`, ...rest },
        <>
          {variant === 'primary' && (
            <span className="pointer-events-none absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
          )}
          <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </>
      )}
    </motion.span>
  );

  return magnetic ? <Magnetic strength={0.25}>{inner}</Magnetic> : inner;
};

export default Button;
