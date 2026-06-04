import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { projectsData, projectCategories } from '../data/projectsData';
import ProjectCard from '../features/projects/components/ProjectCard';
import { SectionHeading } from '../shared/ui/Section';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projectsData : projectsData.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="relative min-h-screen pb-24 pt-28">
      <Helmet>
        <title>Projects — Charan Kuramana</title>
        <meta
          name="description"
          content="Case studies of full-stack, microservices and frontend projects shipped by Charan Kuramana."
        />
      </Helmet>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="focus-ring group mb-10 inline-flex items-center gap-2 rounded-lg text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back home
        </Link>

        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title="All"
          highlight="Projects"
          subtitle="Real products across full-stack, microservices and frontend work — filter by focus area."
        />

        {/* filter pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'text-slate-600 hover:text-brand-600 dark:text-slate-300'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-gradient shadow-glow"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {!active && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-slate-200 bg-white/50 dark:border-white/10 dark:bg-white/5" />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
