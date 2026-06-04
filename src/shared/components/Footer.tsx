import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Command, ArrowRight, Linkedin, MapPin } from 'lucide-react';
import { config } from '../../data/config';
import { strings } from '../../data/strings';
import SocialLinks from '../ui/SocialLinks';
import { openCommandPalette } from '../ui/CommandPalette';

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  // base-aware so hash links work under the /charan_portfolio/ subpath
  const base = import.meta.env.BASE_URL;
  const explore = [
    { href: `${base}#about`, label: strings.navigation.about },
    { href: `${base}#skills`, label: strings.navigation.skills },
    { href: `${base}#services`, label: strings.navigation.services },
    { href: `${base}#experience`, label: strings.navigation.experience },
    { href: `${base}#contact`, label: strings.navigation.contact },
  ];

  const more = [
    { to: '/projects', label: strings.navigation.projects },
    { to: '/blog', label: strings.navigation.blog },
  ];

  return (
    <footer className="relative z-10 mt-24 overflow-hidden border-t border-slate-200 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-ink-soft/50">
      <div className="absolute left-0 top-0 h-px w-full bg-brand-gradient bg-[length:200%_auto] animate-gradientpan" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA band */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-500/10 via-violet-500/10 to-accent-400/10 p-8 dark:border-white/10 md:p-10 mt-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Have a project in mind? <span className="gradient-text">Let&apos;s build it.</span>
              </h2>
              <p className="mt-2 max-w-md text-slate-600 dark:text-slate-400">
                Open to full-time roles and freelance collaborations — usually replying within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToContact}
                className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-brand-gradient bg-[length:200%_auto] px-6 py-3 font-semibold text-white shadow-glow transition-[background-position] duration-500 hover:bg-right"
              >
                Get in touch <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-[#0a66c2] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0958a8]"
              >
                <Linkedin size={17} /> Follow my posts
              </a>
            </div>
          </div>
        </div>

        {/* columns */}
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="gradient-text text-2xl font-bold">
              {strings.hero.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Full-Stack Java &amp; React developer building scalable, user-focused web applications.
            </p>
            <a
              href={`mailto:${config.contact.email}`}
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-brand-600 hover:underline dark:text-brand-300"
            >
              <Mail size={15} /> {config.contact.email}
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={15} className="text-brand-500" /> Hyderabad, India
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Explore</h3>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="focus-ring rounded text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">More</h3>
            <ul className="space-y-3">
              {more.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="focus-ring rounded text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={config.resumeUrl} target="_blank" rel="noopener noreferrer" className="focus-ring rounded text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-white">
                  Résumé
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Connect</h3>
            <SocialLinks />
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={openCommandPalette}
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-sm text-slate-600 transition-colors hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <Command size={14} /> Menu
                <kbd className="rounded bg-slate-100 px-1.5 text-[10px] dark:bg-white/10">⌘K</kbd>
              </button>
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label={strings.footer.backToTop}
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-sm text-slate-600 transition-colors hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <ArrowUp size={14} /> Top
              </motion.button>
            </div>
          </div>
        </div>

        {/* watermark name */}
        <div className="relative select-none overflow-hidden" aria-hidden="true">
          <div className="bg-gradient-to-b from-slate-900/[0.06] to-transparent bg-clip-text text-center text-[18vw] font-black leading-none tracking-tighter text-transparent dark:from-white/[0.05]">
            CHARAN
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200/60 py-8 text-sm text-slate-500 dark:border-white/5 md:flex-row">
          <p>
            © {year} {strings.hero.name} — Built with{' '}
            <span className="font-semibold text-brand-600 dark:text-brand-300">React, Vite &amp; Tailwind</span>
          </p>
          <p className="text-xs text-slate-400">Designed &amp; developed by {strings.hero.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
