import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { strings } from '../../data/strings';
import { config } from '../../data/config';
import { heroStats } from '../../data/profile';
import charanAvatar from '../../assets/charan.webp';
import Button from '../../shared/ui/Button';
import SocialLinks from '../../shared/ui/SocialLinks';
import AnimatedCounter from '../../shared/ui/AnimatedCounter';
import TiltCard from '../../shared/ui/TiltCard';
import SplitText from '../../shared/ui/SplitText';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function PremiumHero(): JSX.Element {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 md:pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* LEFT — copy */}
          <div className="order-2 lg:order-1">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </motion.span>

            <motion.p
              variants={item}
              className="mt-6 flex items-center gap-2 font-mono text-sm text-brand-600 dark:text-brand-300"
            >
              <Sparkles size={15} /> Hi, I&apos;m {strings.hero.name}
            </motion.p>

            <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              <SplitText text="Full Stack" delay={0.2} />{' '}
              <SplitText text="Java & React" wordClassName="gradient-text" delay={0.35} />{' '}
              <SplitText text="Developer" delay={0.6} />
            </h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {strings.hero.shortBio}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={15} className="text-brand-500" /> Hyderabad, India
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <Button as="button" onClick={() => scrollTo('contact')} aria-label={strings.common.hireMe}>
                {strings.common.hireMe}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                as="a"
                variant="ghost"
                href={config.resumeUrl}
                download="Charan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} className="text-emerald-500" />
                {strings.common.downloadCV}
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <SocialLinks />
            </motion.div>
          </div>

          {/* RIGHT — avatar + floating stat tiles */}
          <motion.div variants={item} className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <TiltCard className="relative w-full max-w-sm">
              <div className="glass-card tile-spotlight relative p-3" style={{ transform: 'translateZ(40px)' }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={charanAvatar}
                    alt={strings.about.profileAlt}
                    width={420}
                    height={525}
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        strings.hero.name
                      )}&background=6366f1&color=fff&size=420`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
                    <span className="text-sm font-semibold text-white">Charan Kuramana</span>
                    <span className="text-xs text-emerald-300">● Online</span>
                  </div>
                </div>
              </div>

              {/* floating tiles */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -left-4 top-10 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 shadow-glass dark:text-white"
                style={{ transform: 'translateZ(70px)' }}
              >
                🚀 3+ yrs experience
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="glass absolute -right-4 bottom-20 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 shadow-glass dark:text-white"
                style={{ transform: 'translateZ(70px)' }}
              >
                💻 Full Stack
              </motion.div>
            </TiltCard>
          </motion.div>
        </motion.div>

        {/* stats bar */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="glass-card tile-spotlight px-4 py-5 text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about"
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest">{strings.common.scrollDown}</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
