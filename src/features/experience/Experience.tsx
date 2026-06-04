import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Code, Settings, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionHeading } from '../../shared/ui/Section';
import TiltCard from '../../shared/ui/TiltCard';
import { experience } from '../../data/portfolio';

const getIcon = (company: string) => {
  const c = company.toLowerCase();
  if (c.includes('isign')) return <Briefcase size={24} />;
  if (c.includes('sathya')) return <Code size={24} />;
  if (c.includes('ataritech')) return <Settings size={24} />;
  return <Briefcase size={24} />;
};

const ExperienceCard: React.FC<{ exp: any; index: number; isLeft: boolean }> = ({ exp, index, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`relative mb-10 flex w-full ${isLeft ? 'lg:justify-start lg:pr-14' : 'lg:justify-end lg:pl-14'}`}
  >
    {/* timeline dot */}
    <div className="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[var(--bg)] bg-brand-gradient lg:left-1/2 lg:h-5 lg:w-5" />

    <TiltCard max={5} className="w-full pl-12 lg:w-[46%] lg:pl-0">
      <div className="glass-card tile-spotlight group p-6 md:p-8">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            {getIcon(exp.company)}
          </span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {exp.companyUrl ? (
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-300">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="font-medium text-brand-600 dark:text-brand-300">{exp.role}</span>
              {exp.employmentType && (
                <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-brand-600 dark:text-brand-300">
                  {exp.employmentType}
                </span>
              )}
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {exp.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {exp.location || 'Hyderabad, India'}
              </span>
            </div>
          </div>
        </div>

        <ul className="space-y-2.5">
          {exp.bullets.map((b: string, i: number) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
              {b}
            </li>
          ))}
        </ul>

        {exp.skills?.length ? (
          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200/60 pt-4 dark:border-white/5">
            {exp.skills.map((s: string) => (
              <span
                key={s}
                className="rounded-md border border-slate-200 bg-white/50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        ) : null}

        {index === 0 && (
          <Link
            to="/blog"
            className="focus-ring group/link mt-5 inline-flex items-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-500/15 dark:text-brand-300"
          >
            Read related blog
            <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
          </Link>
        )}
      </div>
    </TiltCard>
  </motion.div>
);

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 65%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <Section id="experience" aria-label="Professional experience">
      <SectionHeading eyebrow="Career" title="Professional" highlight="Experience" />

      <div ref={timelineRef} className="relative mt-16">
        {/* timeline track + scroll-drawn fill */}
        <div className="absolute bottom-0 left-4 top-0 w-0.5 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true">
          <div className="absolute inset-0 rounded-full bg-slate-200 dark:bg-white/10" />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute inset-0 rounded-full bg-brand-gradient"
          />
        </div>
        <div className="flex flex-col">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </Section>
  );
}
