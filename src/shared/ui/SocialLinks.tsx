import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, Briefcase } from 'lucide-react';
import { config } from '../../data/config';

interface Item {
  href: string;
  label: string;
  icon: React.ReactNode;
  hover: string; // tailwind hover text color class (static so it survives purge)
}

const items: Item[] = [
  { href: config.social.github, label: 'GitHub', icon: <Github size={20} />, hover: 'hover:text-slate-900 dark:hover:text-white' },
  { href: config.social.linkedin, label: 'LinkedIn', icon: <Linkedin size={20} />, hover: 'hover:text-[#0a66c2]' },
  { href: config.social.instagram, label: 'Instagram', icon: <Instagram size={20} />, hover: 'hover:text-[#e4405f]' },
  { href: config.social.whatsapp, label: 'WhatsApp', icon: <MessageCircle size={20} />, hover: 'hover:text-[#25d366]' },
  { href: config.social.naukri, label: 'Naukri', icon: <Briefcase size={20} />, hover: 'hover:text-brand-500' },
];

const SocialLinks: React.FC<{ className?: string; size?: 'sm' | 'md' }> = ({ className = '', size = 'md' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {items.map((it) => (
      <motion.a
        key={it.label}
        href={it.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={it.label}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        className={`focus-ring grid place-items-center rounded-xl border border-slate-200 bg-white/60 text-slate-500 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-400 ${it.hover} ${
          size === 'md' ? 'h-11 w-11' : 'h-9 w-9'
        }`}
      >
        {it.icon}
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
