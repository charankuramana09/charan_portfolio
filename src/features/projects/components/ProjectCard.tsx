import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Star } from 'lucide-react';
import type { Project } from '../../../data/projectsData';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/** Request a right-sized image from Unsplash (cards render ~400px wide, not 1200). */
const thumb = (url?: string) =>
  url ? url.replace(/w=\d+/, 'w=640').replace(/q=\d+/, 'q=70') : url;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -6 }}
      className="group glass-card tile-spotlight flex flex-col overflow-hidden"
    >
      {/* compact, consistent image */}
      <Link to={`/projects/${project.id}`} className="focus-ring block" aria-label={`${project.title} case study`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.image && (
            <img
              src={thumb(project.image)}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-slate-900/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {project.category}
          </span>
          {project.featured && (
            <span className="absolute right-3 top-3 rounded-full border border-amber-300/40 bg-amber-400/20 px-2.5 py-1 text-[11px] font-semibold text-amber-100 backdrop-blur-md">
              ★ Featured
            </span>
          )}
        </div>
      </Link>

      {/* content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold leading-snug text-slate-900 dark:text-white">{project.title}</h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {project.year} · {project.role}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Star size={13} className="fill-amber-400 text-amber-400" /> {project.stars ?? 0}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.skills.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-md border border-slate-200 bg-white/50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {s}
            </span>
          ))}
          {project.skills.length > 4 && (
            <span className="px-1 text-[11px] text-slate-400">+{project.skills.length - 4}</span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200/60 pt-4 dark:border-white/5">
          <Link
            to={`/projects/${project.id}`}
            className="focus-ring inline-flex items-center gap-1 rounded-lg text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300"
          >
            Case study
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
              aria-label={`Open ${project.title} live site`}
            >
              Live <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
