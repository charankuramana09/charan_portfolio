import React from 'react';

/**
 * The single signature background for the whole site.
 * Soft animated aurora blobs over a faint dot-grid. GPU-cheap, reduced-motion safe
 * (the CSS `prefers-reduced-motion` rule freezes the animation globally).
 */
const AuroraBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark" />

      {/* aurora blobs */}
      <div className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full bg-brand-500/20 dark:bg-brand-500/25 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-32 h-[38rem] w-[38rem] rounded-full bg-violet-500/20 dark:bg-violet-500/20 blur-[120px] animate-aurora"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-accent-400/15 dark:bg-accent-400/15 blur-[120px] animate-aurora"
        style={{ animationDelay: '-12s' }}
      />

      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(99,102,241,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 100% 60% at 50% 0%, #000 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 60% at 50% 0%, #000 30%, transparent 75%)',
        }}
      />
    </div>
  );
};

export default React.memo(AuroraBackground);
