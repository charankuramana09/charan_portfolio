import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Section, { SectionHeading } from '../../shared/ui/Section';

const testimonials = [
  {
    name: 'Akhil K.',
    role: 'Client — Sri Sports Events',
    content:
      'Charan transformed our vision into a high-performance sports portal. His technical expertise in responsive design and fast load times made a huge difference.',
    stars: 5,
    avatar: 'https://ui-avatars.com/api/?name=Akhil+K&background=6366f1&color=fff',
  },
  {
    name: 'David',
    role: 'Founder — chatNconnect',
    content:
      'Charan built the conversational AI experience for our chatbot therapist. The flows feel natural, the responses are fast, and the whole platform is rock solid. Exactly the partner we hoped for.',
    stars: 5,
    avatar: 'https://ui-avatars.com/api/?name=David&background=8b5cf6&color=fff',
  },
  {
    name: 'Sam',
    role: 'OMT — Mobility & Technologies',
    content:
      'Charan delivered a clean, scalable platform for our mobility services. Thoughtful architecture, solid APIs, and an interface our users genuinely enjoy. Highly recommended.',
    stars: 5,
    avatar: 'https://ui-avatars.com/api/?name=Sam&background=22d3ee&color=fff',
  },
  {
    name: 'Medical Clinic Director',
    role: 'Vernon Medical Clinic',
    content:
      'The appointment system Charan built significantly reduced our administrative overhead. Intuitive, secure, and exactly what we needed.',
    stars: 5,
    avatar: 'https://ui-avatars.com/api/?name=Clinic+Director&background=10b981&color=fff',
  },
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const t = testimonials[index];

  const select = (i: number) => setIndex(i);
  const next = () => setIndex((p) => (p + 1) % testimonials.length);

  return (
    <Section id="testimonials" aria-label="Testimonials">
      <SectionHeading eyebrow="Testimonials" title="Trusted by" highlight="Visionaries" />

      <div
        className="mt-14 grid gap-5 lg:grid-cols-[1fr_22rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
          if (e.key === 'ArrowRight') next();
        }}
      >
        {/* Active testimonial */}
        <div className="glass-card tile-spotlight relative flex min-h-[20rem] flex-col p-8 md:p-10">
          <Quote className="absolute right-7 top-7 h-14 w-14 text-brand-500/12" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 flex-col"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="flex-1 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 md:text-xl">
                “{t.content}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={52}
                  height={52}
                  loading="lazy"
                  className="h-12 w-12 rounded-2xl border border-brand-500/20"
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-sm font-semibold text-brand-600 dark:text-brand-300">{t.role}</div>
                </div>
                <span className="ml-auto font-mono text-sm text-slate-400">
                  {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* autoplay progress (drives advance on completion; pauses on hover) */}
          <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/5">
            <div
              key={index}
              onAnimationEnd={() => !paused && next()}
              style={{ animationPlayState: paused ? 'paused' : 'running' }}
              className="h-full rounded-full bg-brand-gradient animate-progressbar"
            />
          </div>
        </div>

        {/* People selector */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar lg:flex-col lg:overflow-visible">
          {testimonials.map((p, i) => {
            const active = i === index;
            return (
              <button
                key={p.name}
                onClick={() => select(i)}
                aria-label={`Show testimonial from ${p.name}`}
                aria-pressed={active}
                className={`focus-ring flex min-w-[15rem] flex-shrink-0 items-center gap-3 rounded-2xl border p-3 text-left transition-all lg:min-w-0 lg:flex-shrink ${
                  active
                    ? 'border-brand-400/50 bg-brand-500/10 shadow-glow'
                    : 'border-slate-200 bg-white/50 hover:border-brand-300 dark:border-white/10 dark:bg-white/5'
                }`}
              >
                <img
                  src={p.avatar}
                  alt={p.name}
                  width={44}
                  height={44}
                  loading="lazy"
                  className={`h-11 w-11 rounded-xl border ${active ? 'border-brand-400' : 'border-transparent'}`}
                />
                <div className="min-w-0">
                  <div className={`truncate text-sm font-semibold ${active ? 'text-brand-700 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                    {p.name}
                  </div>
                  <div className="truncate text-xs text-slate-500 dark:text-slate-400">{p.role}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
