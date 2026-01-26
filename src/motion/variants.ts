export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.28 } },
  exit: { opacity: 0, transition: { duration: 0.14 } },
};

export const sectionVariant = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export const staggerSlow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.34, ease: "easeOut" } },
};

export const hover = {
  whileHover: { scale: 1.05, boxShadow: "0 12px 36px rgba(2,6,23,0.14)" },
  whileTap: { scale: 0.985 },
};

export const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.42, ease: "easeOut" } },
};

export const badgeHover = {
  whileHover: { scale: 1.06, boxShadow: "0 10px 30px rgba(2,6,23,0.12)" },
  whileTap: { scale: 0.98 },
};

export function directionVariant(
  direction = "up",
  distance = 30,
  duration = 0.42,
) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "left" || direction === "up" ? -1 : 1;
  return {
    hidden: { opacity: 0, [axis]: sign * distance },
    show: { opacity: 1, [axis]: 0, transition: { duration, ease: "easeOut" } },
  };
}

export const maskReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  show: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export const svgDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const blurFocus = {
  hidden: { filter: "blur(6px)", opacity: 0, scale: 0.992 },
  show: {
    filter: "blur(0px)",
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function parallaxVariant(distance = 12) {
  return {
    hidden: { y: 0 },
    show: {
      y: [0, -distance / 2, -distance],
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
}

export function staggerForLength(length = 20) {
  const base = 0.06;
  const extra = Math.min(Math.max(length / 100, 0), 0.12);
  return {
    hidden: {},
    show: { transition: { staggerChildren: base + extra } },
  };
}

export const morphShape = {
  hidden: {
    d: "M0 80 C40 40 80 40 120 80 L120 140 L0 140 Z",
  },
  show: {
    d: "M0 20 C30 4 90 0 120 20 L120 140 L0 140 Z",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export const pop = {
  whileHover: {
    scale: 1.03,
    y: -6,
    boxShadow: "0 20px 48px rgba(2,6,23,0.10)",
  },
  whileTap: { scale: 0.985 },
};

export const iconPulse = {
  hidden: { scale: 1 },
  hover: {
    scale: 1.08,
    rotate: [0, 6, -4, 0],
    transition: { duration: 0.45, ease: "easeInOut" },
  },
};

export const revealUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* Additional Motion.dev-inspired helpers */
export const layoutFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const springPop = {
  hidden: { scale: 0.96, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
  whileHover: {
    scale: 1.04,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export const flipIn = {
  hidden: { rotateY: -18, opacity: 0, transformPerspective: 800 },
  show: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const crossfade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
