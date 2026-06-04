import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, GitBranch } from 'lucide-react';
import { githubFeatured, githubLanguages } from '../../../data/profile';
import { config } from '../../../data/config';

const tagColor: Record<string, string> = {
  React: 'border-blue-400/30 bg-blue-500/10 text-blue-600 dark:text-blue-300',
  'Spring Boot': 'border-emerald-400/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
  AI: 'border-violet-400/30 bg-violet-500/10 text-violet-600 dark:text-violet-300',
};

const GitHubStatsCard: React.FC = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github size={18} className="text-slate-800 dark:text-white" />
          <span className="font-semibold text-slate-900 dark:text-white">GitHub Highlights</span>
        </div>
        <a
          href={config.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300"
        >
          @charankuramana09 <ArrowUpRight size={13} />
        </a>
      </div>

      {/* featured repos */}
      <div className="grid gap-2.5 sm:grid-cols-3">
        {githubFeatured.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="focus-ring group flex flex-col rounded-xl border border-slate-200 bg-white/50 p-3 transition-colors hover:border-brand-400/40 dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tagColor[repo.tag] || 'border-slate-300 text-slate-500'}`}>
                {repo.tag}
              </span>
              <GitBranch size={13} className="text-slate-400 transition-colors group-hover:text-brand-500" />
            </div>
            <span className="truncate font-mono text-xs font-semibold text-slate-800 dark:text-slate-100">{repo.name}</span>
            <span className="mt-1 line-clamp-2 text-[11px] leading-snug text-slate-500 dark:text-slate-400">{repo.desc}</span>
            <span className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400">
              <span className={`h-2 w-2 rounded-full ${repo.langColor}`} /> {repo.language}
            </span>
          </motion.a>
        ))}
      </div>

      {/* language mix */}
      <div className="mt-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Most used languages
        </p>
        <div className="space-y-2">
          {githubLanguages.map((l) => (
            <div key={l.name} className="flex items-center gap-2">
              <span className="w-24 shrink-0 text-xs text-slate-600 dark:text-slate-300">{l.name}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/5">
                <motion.div
                  className={`h-full rounded-full ${l.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStatsCard;
