import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import Section, { SectionHeading } from '../../shared/ui/Section';
import RadialProgress from '../../shared/ui/RadialProgress';
import Marquee from '../../shared/ui/Marquee';
import { skillGroups, techMarquee, type SkillGroup } from '../../data/profile';

const iconMap: Record<SkillGroup['icon'], React.ReactNode> = {
  code: <Code2 size={18} />,
  server: <Server size={18} />,
  database: <Database size={18} />,
  cloud: <Cloud size={18} />,
};

const Skills: React.FC = () => {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <Section id="skills" aria-label="Technical skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technical"
        highlight="Excellence"
        subtitle="A comprehensive ecosystem of tools and technologies I use to bring complex ideas to life."
      />

      {/* segmented category switcher */}
      <div className="mt-12 flex justify-center">
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap justify-center gap-1 rounded-2xl border border-slate-200 bg-white/60 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        >
          {skillGroups.map((g, i) => {
            const isActive = i === active;
            return (
              <button
                key={g.title}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`focus-ring relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-brand-600 dark:text-slate-300'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-tab-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-brand-gradient shadow-glow"
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                  />
                )}
                <span className={isActive ? 'text-white' : 'text-brand-500'}>{iconMap[g.icon]}</span>
                <span className="hidden sm:inline">{g.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* radial skill cards for active group */}
      <AnimatePresence mode="wait">
        <motion.div
          key={group.title}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3"
        >
          {group.skills.map((s) => (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -6 }}
              className="glass-card tile-spotlight flex flex-col items-center p-6 text-center"
            >
              <RadialProgress value={s.pct} size={104} stroke={8}>
                <div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{s.pct}%</div>
                </div>
              </RadialProgress>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{s.name}</h3>
              <span className="mt-1 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-0.5 text-[11px] font-medium text-brand-600 dark:text-brand-300">
                {s.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* full tech marquee */}
      <div className="mt-14">
        <Marquee speed={32}>
          {techMarquee.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="mx-1 shrink-0 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </Section>
  );
};

export default React.memo(Skills);
