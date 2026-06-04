import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section, { SectionHeading } from '../../shared/ui/Section';
import { StaggerGroup } from '../../shared/ui/Reveal';
import ProjectCard from './components/ProjectCard';
import { projectsData } from '../../data/projectsData';

const Projects: React.FC = () => {
  // Featured first, then fill — show the 3 strongest on the home page.
  const featured = [...projectsData].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).slice(0, 3);

  return (
    <Section id="projects" aria-label="Featured projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured"
        highlight="Work"
        subtitle="A curated selection of real products I've shipped — each links to a full case study."
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </StaggerGroup>

      <div className="mt-12 flex justify-center">
        <Link
          to="/projects"
          className="focus-ring group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-6 py-3 font-semibold text-slate-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-600 dark:border-white/15 dark:bg-white/5 dark:text-white"
        >
          View all projects
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  );
};

export default React.memo(Projects);
