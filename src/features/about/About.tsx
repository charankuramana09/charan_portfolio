import React from 'react';
import { MapPin, Mail, Briefcase, Download, Coffee, Zap, Heart, Linkedin, ArrowUpRight } from 'lucide-react';
import Section, { SectionHeading } from '../../shared/ui/Section';
import { StaggerGroup } from '../../shared/ui/Reveal';
import { motion, type Variants } from 'framer-motion';
import BentoTile from '../../shared/ui/BentoTile';
import GitHubStatsCard from './components/GitHubStatsCard';
import { about } from '../../data/portfolio';
import { now } from '../../data/profile';
import { config } from '../../data/config';

const aboutItem: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const values = [
  { icon: <Zap size={18} />, label: 'Ships fast, breaks little', accent: 'from-brand-500 to-violet-500' },
  { icon: <Heart size={18} />, label: 'User-focused engineering', accent: 'from-rose-500 to-pink-500' },
  { icon: <Coffee size={18} />, label: 'Lifelong learner', accent: 'from-amber-500 to-orange-500' },
];

const About: React.FC = () => {
  return (
    <Section id="about" aria-label="About Charan">
      <SectionHeading eyebrow="About" title="A bit" highlight="about me" subtitle={about.location} />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(0,auto)]">
        {/* Bio */}
        <motion.div variants={aboutItem} className="md:col-span-2">
          <BentoTile className="h-full">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Who I am</h3>
            <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {values.map((v) => (
                <motion.div
                  key={v.label}
                  whileHover={{ y: -4 }}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white/60 p-3 dark:border-white/10 dark:bg-white/5"
                >
                  <span
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${v.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]`}
                  />
                  <span className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br ${v.accent} text-white shadow-glow`}>
                    {v.icon}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">{v.label}</span>
                </motion.div>
              ))}
            </div>
          </BentoTile>
        </motion.div>

        {/* Quick facts / availability */}
        <motion.div variants={aboutItem}>
          <BentoTile className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quick facts</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin size={16} className="text-brand-500" /> {about.location}
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Briefcase size={16} className="text-brand-500" /> Full Stack Developer @ iSign Tech
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Mail size={16} className="text-brand-500" />
                  <a href={`mailto:${config.contact.email}`} className="break-all hover:text-brand-600 dark:hover:text-brand-300">
                    {config.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </div>
            <a
              href={config.resumeUrl}
              download="Charan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient bg-[length:200%_auto] px-4 py-2.5 text-sm font-semibold text-white transition-[background-position] duration-500 hover:bg-right"
            >
              <Download size={15} /> Download CV
            </a>
          </BentoTile>
        </motion.div>

        {/* Now / Currently */}
        <motion.div variants={aboutItem}>
          <BentoTile className="h-full">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Now <span className="text-brand-500">●</span>
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-slate-400">{now.updated}</span>
            </div>
            <ul className="space-y-4">
              {now.items.map((it) => (
                <li key={it.title} className="flex gap-3">
                  <span className="text-lg leading-none">{it.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{it.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{it.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </BentoTile>
        </motion.div>

        {/* GitHub stats */}
        <motion.div variants={aboutItem} className="md:col-span-2">
          <BentoTile className="h-full">
            <GitHubStatsCard />
          </BentoTile>
        </motion.div>

        {/* LinkedIn — posting activity */}
        <motion.div variants={aboutItem} className="md:col-span-3">
          <BentoTile interactive={false} className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-[#0a66c2] text-white shadow-lg">
                <Linkedin size={24} />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">I post regularly on LinkedIn</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Project posters, build logs and dev tips — follow along for what I&apos;m shipping.
                </p>
              </div>
            </div>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-[#0a66c2] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#0958a8]"
            >
              Follow on LinkedIn
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </BentoTile>
        </motion.div>
      </StaggerGroup>
    </Section>
  );
};

export default React.memo(About);
