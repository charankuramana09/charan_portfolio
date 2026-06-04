import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePerformanceMode } from '../../lib/usePerformanceMode';

const techStack = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
];

const TechCard: React.FC<{ tech: { name: string; icon: string } }> = ({ tech }) => (
  <div className="group mx-2 flex h-24 w-24 shrink-0 select-none flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white/50 p-4 backdrop-blur-sm transition-colors hover:border-brand-400/40 dark:border-white/10 dark:bg-white/5 md:h-28 md:w-28">
    <img
      src={tech.icon}
      alt={tech.name}
      loading="lazy"
      draggable={false}
      className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
    />
    <span className="text-[10px] font-medium text-slate-500 transition-colors group-hover:text-brand-600 dark:text-slate-400 dark:group-hover:text-white md:text-xs">
      {tech.name}
    </span>
  </div>
);

export default function TechStack() {
  const scroller = useRef<HTMLDivElement>(null);
  const raf = useRef<number>();
  const lastInteract = useRef(0);
  const hovering = useRef(false);
  const dragging = useRef(false);
  const dragX = useRef(0);
  const dragScroll = useRef(0);
  const initialized = useRef(false);
  const { reducedMotion, lowPower } = usePerformanceMode();

  // keep scroll position within the middle copy for seamless infinite looping
  const normalize = () => {
    const el = scroller.current;
    if (!el) return;
    const third = el.scrollWidth / 3;
    if (third <= 0) return;
    if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
    else if (el.scrollLeft < third) el.scrollLeft += third;
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    let prev = performance.now();
    const auto = !(reducedMotion || lowPower);

    const step = (t: number) => {
      const dt = t - prev;
      prev = t;
      if (!initialized.current && el.scrollWidth > 0) {
        el.scrollLeft = el.scrollWidth / 3; // start in the middle copy
        initialized.current = true;
      }
      const idle = performance.now() - lastInteract.current > 1200;
      if (auto && !hovering.current && !dragging.current && idle) {
        el.scrollLeft += (dt / 16.67) * 0.55;
        normalize();
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reducedMotion, lowPower]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return; // touch uses native scrolling
    const el = scroller.current;
    if (!el) return;
    dragging.current = true;
    dragX.current = e.clientX;
    dragScroll.current = el.scrollLeft;
    lastInteract.current = performance.now();
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const el = scroller.current;
    if (!el) return;
    el.scrollLeft = dragScroll.current - (e.clientX - dragX.current);
    lastInteract.current = performance.now();
    normalize();
  };
  const endDrag = () => {
    dragging.current = false;
    lastInteract.current = performance.now();
    if (scroller.current) scroller.current.style.cursor = 'grab';
  };

  const nudge = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    lastInteract.current = performance.now();
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };

  return (
    <section aria-label="Technologies I work with" className="relative border-y border-slate-200/60 py-12 dark:border-white/5">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Tech I work with</p>

      <div className="group relative mx-auto max-w-7xl px-2 sm:px-4">
        {/* edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        {/* arrows (manual control) */}
        <button
          onClick={() => nudge(-1)}
          aria-label="Scroll technologies left"
          className="focus-ring absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 opacity-0 shadow-md backdrop-blur transition-opacity hover:text-brand-600 group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 sm:grid"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => nudge(1)}
          aria-label="Scroll technologies right"
          className="focus-ring absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 opacity-0 shadow-md backdrop-blur transition-opacity hover:text-brand-600 group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 sm:grid"
        >
          <ChevronRight size={18} />
        </button>

        <motion.div
          ref={scroller}
          className="no-scrollbar flex cursor-grab overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
          onPointerEnter={() => (hovering.current = true)}
          onPointerLeave={() => {
            hovering.current = false;
            endDrag();
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onWheel={() => (lastInteract.current = performance.now())}
          onTouchStart={() => (lastInteract.current = performance.now())}
          onScroll={normalize}
        >
          {/* three copies for seamless two-way infinite scroll */}
          {[0, 1, 2].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy !== 0}>
              {techStack.map((tech, i) => (
                <TechCard key={`${copy}-${i}`} tech={tech} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
