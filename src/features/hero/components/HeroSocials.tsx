import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { config } from '../../../data/config';
import { strings } from '../../../data/strings';

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    activeColor?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, activeColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-[${activeColor || '#6366f1'}] transition-all transform hover:scale-125 focus-ring rounded p-1`}
        style={{ color: 'inherit' }}
        aria-label={label}
    >
        {icon}
    </a>
);

const HeroSocials: React.FC<{ variants: any }> = ({ variants }) => {
    return (
        <motion.div variants={variants} className="flex flex-wrap items-center gap-5 text-slate-500 dark:text-slate-400">
            <SocialLink
                href={config.social.linkedin}
                icon={<Linkedin size={22} />}
                label="Follow on LinkedIn"
                activeColor="#0077b5"
            />
            <SocialLink
                href={config.social.github}
                icon={<Github size={22} />}
                label="Follow on GitHub"
            />
            <SocialLink
                href={config.social.instagram}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                label="Follow on Instagram"
                activeColor="#e4405f"
            />
            <SocialLink
                href={config.social.whatsapp}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>}
                label="Chat on WhatsApp"
                activeColor="#25d366"
            />
            <SocialLink
                href={config.social.naukri}
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>}
                label="Profile on Naukri"
                activeColor="#4a90e2"
            />
            <div className="h-px w-8 bg-slate-300 dark:bg-slate-700/50 hidden sm:block" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase opacity-60">{strings.common.connect}</span>
        </motion.div>
    );
};

export default React.memo(HeroSocials);
