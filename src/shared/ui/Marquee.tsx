import React from 'react';

/** Infinite horizontal marquee. Duplicates children once for a seamless loop. */
const Marquee: React.FC<{
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number; // seconds per loop
}> = ({ children, className = '', reverse = false, speed = 32 }) => (
  <div className={`marquee-mask group overflow-hidden ${className}`}>
    <div
      className="marquee-track gap-4 group-hover:[animation-play-state:paused]"
      style={{
        animationDuration: `${speed}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      {children}
      {children}
    </div>
  </div>
);

export default Marquee;
