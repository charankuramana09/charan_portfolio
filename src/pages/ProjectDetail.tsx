import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle2, Calendar,
  Building2, Star, GitBranch, Target, Lightbulb, Layers,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projectsData';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const index = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <button onClick={() => navigate('/projects')} className="text-brand-600 hover:underline">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const prev = projectsData[(index - 1 + projectsData.length) % projectsData.length];
  const next = projectsData[(index + 1) % projectsData.length];

  return (
    <div className="relative min-h-screen pb-24 pt-28">
      <Helmet>
        <title>{project.title} — Case Study · Charan Kuramana</title>
        <meta name="description" content={project.tagline} />
      </Helmet>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="focus-ring group mb-8 inline-flex items-center gap-2 rounded-lg text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to projects
        </Link>

        {/* Title block */}
        <motion.div variants={fade} initial="hidden" animate="show">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
              {project.category}
            </span>
            <span className="text-sm text-slate-400">{project.year}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{project.tagline}</p>
        </motion.div>

        {/* Hero image */}
        {project.image && (
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="glass-card mt-10 overflow-hidden p-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[2/1] w-full rounded-2xl object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </motion.div>
        )}

        {/* Outcomes */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {project.outcomes.map((o) => (
            <div key={o.label} className="glass-card tile-spotlight px-5 py-5 text-center">
              <div className="gradient-text text-2xl font-bold">{o.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {o.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Main */}
          <div className="space-y-10 lg:col-span-2">
            <CaseBlock icon={<Target size={18} />} title="The problem">
              <p>{project.problem}</p>
            </CaseBlock>

            <CaseBlock icon={<Lightbulb size={18} />} title="My approach">
              <p>{project.approach}</p>
            </CaseBlock>

            <CaseBlock icon={<Layers size={18} />} title="Architecture & build">
              <ul className="space-y-3">
                {project.architecture.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseBlock>

            <CaseBlock icon={<CheckCircle2 size={18} />} title="Key contributions">
              <div className="grid gap-3">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                    <p className="text-slate-700 dark:text-slate-300">{h}</p>
                  </div>
                ))}
              </div>
            </CaseBlock>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass-card sticky top-24 p-6">
              <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">Project info</h3>
              <dl className="space-y-4 text-sm">
                <InfoRow icon={<Calendar size={15} />} label="Timeline" value={project.duration} />
                <InfoRow icon={<Building2 size={15} />} label="Company" value={project.company} />
                <InfoRow icon={<Target size={15} />} label="Role" value={project.role} />
              </dl>

              {(project.stars !== undefined || project.forks !== undefined) && (
                <div className="mt-5 flex items-center gap-5 border-t border-slate-200/60 pt-4 dark:border-white/5">
                  {project.stars !== undefined && (
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      <Star size={15} className="fill-yellow-400 text-yellow-400" /> {project.stars}
                    </span>
                  )}
                  {project.forks !== undefined && (
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      <GitBranch size={15} className="text-brand-500" /> {project.forks}
                    </span>
                  )}
                </div>
              )}

              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Tech stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-slate-200 bg-white/50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient bg-[length:200%_auto] px-5 py-3 font-semibold text-white transition-[background-position] duration-500 hover:bg-right"
                  >
                    Live preview <ExternalLink size={16} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-5 py-3 font-semibold text-slate-700 transition-colors hover:border-brand-400/50 dark:border-white/15 dark:bg-white/5 dark:text-white"
                  >
                    Source code <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* prev / next */}
        <div className="mt-16 grid gap-4 border-t border-slate-200/60 pt-8 dark:border-white/5 sm:grid-cols-2">
          <Link
            to={`/projects/${prev.id}`}
            className="focus-ring group glass-card flex items-center gap-3 p-5 text-left"
          >
            <ArrowLeft size={18} className="shrink-0 text-brand-500 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-xs uppercase tracking-wider text-slate-400">Previous</span>
              <span className="font-semibold text-slate-800 dark:text-white">{prev.title}</span>
            </span>
          </Link>
          <Link
            to={`/projects/${next.id}`}
            className="focus-ring group glass-card flex items-center justify-end gap-3 p-5 text-right"
          >
            <span>
              <span className="block text-xs uppercase tracking-wider text-slate-400">Next</span>
              <span className="font-semibold text-slate-800 dark:text-white">{next.title}</span>
            </span>
            <ArrowRight size={18} className="shrink-0 text-brand-500 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const CaseBlock: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="mb-4 flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
        {icon}
      </span>
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
    </div>
    <div className="leading-relaxed text-slate-600 dark:text-slate-300">{children}</div>
  </motion.section>
);

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 text-brand-500">{icon}</span>
    <div>
      <dt className="text-xs uppercase tracking-wider text-slate-400">{label}</dt>
      <dd className="font-medium text-slate-700 dark:text-slate-200">{value}</dd>
    </div>
  </div>
);
