import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Search, Home, User, Code2, FolderGit2, Briefcase, Award, Quote, Mail,
  FileText, Github, Linkedin, Sun, Moon, BookOpen, Copy, ArrowRight, Sparkles,
} from 'lucide-react';
import { config } from '../../data/config';

interface Command {
  id: string;
  label: string;
  group: 'Navigate' | 'Pages' | 'Actions';
  icon: React.ReactNode;
  keywords?: string;
  perform: () => void;
}

export const openCommandPalette = () => window.dispatchEvent(new Event('open-command-palette'));

const CommandPalette: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
  }, []);

  const goSection = useCallback(
    (id: string) => {
      close();
      const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(scroll, 350);
      } else {
        scroll();
      }
    },
    [close, navigate]
  );

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    close();
  }, [close]);

  const commands = useMemo<Command[]>(
    () => [
      { id: 'home', label: 'Home', group: 'Navigate', icon: <Home size={16} />, perform: () => goSection('home') },
      { id: 'about', label: 'About', group: 'Navigate', icon: <User size={16} />, perform: () => goSection('about') },
      { id: 'skills', label: 'Skills', group: 'Navigate', icon: <Code2 size={16} />, perform: () => goSection('skills') },
      { id: 'services', label: 'Services', group: 'Navigate', icon: <Sparkles size={16} />, keywords: 'help hire work', perform: () => goSection('services') },
      { id: 'projects-sec', label: 'Projects', group: 'Navigate', icon: <FolderGit2 size={16} />, perform: () => goSection('projects') },
      { id: 'experience', label: 'Experience', group: 'Navigate', icon: <Briefcase size={16} />, perform: () => goSection('experience') },
      { id: 'certifications', label: 'Certifications', group: 'Navigate', icon: <Award size={16} />, perform: () => goSection('certifications') },
      { id: 'testimonials', label: 'Testimonials', group: 'Navigate', icon: <Quote size={16} />, perform: () => goSection('testimonials') },
      { id: 'contact', label: 'Contact', group: 'Navigate', icon: <Mail size={16} />, perform: () => goSection('contact') },
      { id: 'projects-page', label: 'All Projects', group: 'Pages', icon: <FolderGit2 size={16} />, keywords: 'work case study', perform: () => { close(); navigate('/projects'); } },
      { id: 'blog-page', label: 'Blog', group: 'Pages', icon: <BookOpen size={16} />, keywords: 'articles writing', perform: () => { close(); navigate('/blog'); } },
      { id: 'resume', label: 'Download Résumé / CV', group: 'Actions', icon: <FileText size={16} />, keywords: 'cv pdf', perform: () => { window.open(config.resumeUrl, '_blank'); close(); } },
      { id: 'copy-email', label: 'Copy email address', group: 'Actions', icon: <Copy size={16} />, keywords: 'mail contact', perform: () => { navigator.clipboard?.writeText(config.contact.email); close(); } },
      { id: 'github', label: 'Open GitHub', group: 'Actions', icon: <Github size={16} />, perform: () => { window.open(config.social.github, '_blank'); close(); } },
      { id: 'linkedin', label: 'Open LinkedIn', group: 'Actions', icon: <Linkedin size={16} />, perform: () => { window.open(config.social.linkedin, '_blank'); close(); } },
      { id: 'theme', label: 'Toggle light / dark theme', group: 'Actions', icon: document.documentElement.classList.contains('dark') ? <Sun size={16} /> : <Moon size={16} />, keywords: 'dark light mode', perform: toggleTheme },
    ],
    [goSection, navigate, close, toggleTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => (c.label + ' ' + (c.keywords || '') + ' ' + c.group).toLowerCase().includes(q));
  }, [commands, query]);

  // global hotkeys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') close();
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 40);
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      filtered[active]?.perform();
    }
  };

  let runningIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={close} aria-hidden="true" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-glass-lg backdrop-blur-2xl dark:border-white/10 dark:bg-ink-soft/90"
            onKeyDown={onListKey}
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3.5 dark:border-white/10">
              <Search size={18} className="text-slate-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 outline-none dark:text-white"
              />
              <kbd className="hidden rounded-md border border-slate-200 px-1.5 py-0.5 text-[10px] text-slate-400 dark:border-white/10 sm:block">
                ESC
              </kbd>
            </div>

            <div className="max-h-[52vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-slate-500">No results found.</p>
              )}
              {(['Navigate', 'Pages', 'Actions'] as const).map((group) => {
                const groupItems = filtered.filter((c) => c.group === group);
                if (!groupItems.length) return null;
                return (
                  <div key={group} className="mb-1">
                    <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {group}
                    </p>
                    {groupItems.map((c) => {
                      runningIndex += 1;
                      const idx = runningIndex;
                      const isActive = idx === active;
                      return (
                        <button
                          key={c.id}
                          onMouseEnter={() => setActive(idx)}
                          onClick={c.perform}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                            isActive
                              ? 'bg-brand-500/15 text-brand-700 dark:text-white'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span className={isActive ? 'text-brand-600 dark:text-brand-300' : 'text-slate-400'}>
                            {c.icon}
                          </span>
                          <span className="flex-1">{c.label}</span>
                          {isActive && <ArrowRight size={14} className="text-brand-500" />}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
