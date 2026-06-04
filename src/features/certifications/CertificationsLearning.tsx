import React from 'react';
import { BookOpen, TrendingUp, Server, Coffee, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Section, { SectionHeading } from '../../shared/ui/Section';
import { StaggerGroup } from '../../shared/ui/Reveal';
import BentoTile from '../../shared/ui/BentoTile';

const flipItem: Variants = {
  hidden: { opacity: 0, rotateX: -28, y: 40, transformPerspective: 900 },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const certifications = [
  {
    id: 1,
    title: 'Project Management Skills Upgrade',
    provider: 'Udemy',
    year: '2026',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-500',
    skills: ['Agile & Scrum', 'Project Lifecycle', 'Risk Management', 'Stakeholder Comm.'],
    description:
      'Mastering the art of delivering value through structured yet flexible project management methodologies.',
  },
  {
    id: 2,
    title: 'Microservices Architecture',
    provider: 'Udemy',
    year: '2025',
    icon: Server,
    gradient: 'from-brand-500 to-accent-400',
    skills: ['Service Discovery', 'API Gateway', 'Event-Driven', 'Scalability'],
    description: 'Designing resilient distributed systems to handle high-scale enterprise requirements.',
  },
  {
    id: 3,
    title: 'Full Stack Java Developer',
    provider: 'Sathya Technologies',
    year: '2023',
    icon: Coffee,
    gradient: 'from-orange-500 to-red-500',
    skills: ['Java', 'Spring Boot', 'React', 'MySQL', 'Hibernate'],
    description: 'Intensive bootcamp covering the complete software development lifecycle with hands-on projects.',
  },
];

const CertificationsLearning: React.FC = () => {
  return (
    <Section id="certifications" aria-label="Certifications and learning">
      <SectionHeading
        eyebrow="Achievements"
        title="Certifications &"
        highlight="Learning"
        subtitle="Validating expertise through rigorous training and continuous professional development."
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" gap={0.12}>
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <motion.div key={cert.id} variants={flipItem} style={{ transformStyle: 'preserve-3d' }}>
              <BentoTile className="flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${cert.gradient} text-white shadow-glow`}>
                    <Icon size={26} />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <BookOpen size={14} /> {cert.provider}
                </div>

                <p className="mt-4 flex-grow border-l-2 border-slate-200 pl-4 text-sm leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-400">
                  {cert.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-slate-200 bg-white/50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1.5 border-t border-slate-200/60 pt-4 text-xs font-medium text-emerald-600 dark:border-white/5 dark:text-emerald-400">
                  <CheckCircle2 size={14} /> Verified
                </div>
              </BentoTile>
            </motion.div>
          );
        })}
      </StaggerGroup>
    </Section>
  );
};

export default React.memo(CertificationsLearning);
