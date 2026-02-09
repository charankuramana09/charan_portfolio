import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { config } from '../../../data/config';
import { strings } from '../../../data/strings';

const ContactInfoItem: React.FC<{
    href?: string;
    icon: React.ReactNode;
    label: string;
    value: string;
}> = ({ href, icon, label, value }) => {
    const content = (
        <>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                {icon}
            </span>
            <span className="flex-1 text-left min-w-0">
                <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase mb-1 tracking-wider">{label}</span>
                <span className="block text-sm sm:text-base text-slate-900 dark:text-white font-medium break-words sm:break-normal break-all">
                    {value}
                </span>
            </span>
        </>
    );

    const className = "flex items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-5 mb-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl w-full";

    if (href) {
        return (
            <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} className={className}>
                {content}
            </a>
        );
    }

    return (
        <div className={className}>
            {content}
        </div>
    );
};

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/80 dark:bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 dark:border-white/10 overflow-hidden shadow-lg dark:shadow-none h-full"
        >
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full bg-[radial-gradient(circle,rgba(102,126,234,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(102,126,234,0.1)_0%,transparent_70%)] animate-[spin_20s_linear_infinite]" aria-hidden="true" />
            <div className="relative z-10 w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white">Get in Touch</h2>

                <div className="flex flex-col w-full">
                    <ContactInfoItem
                        href={`mailto:${config.contact.email}`}
                        icon={<Mail size={24} />}
                        label={strings.contact.emailLabel}
                        value={config.contact.email}
                    />
                    <ContactInfoItem
                        href={config.social.linkedin}
                        icon={<Linkedin size={24} />}
                        label={strings.contact.linkedinLabel}
                        value="Connect with me"
                    />
                    <ContactInfoItem
                        icon={<MapPin size={24} />}
                        label="Location"
                        value="Hyderabad, India"
                    />
                </div>

                <div className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-4 sm:px-6 py-3 sm:py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Open to full-time & freelance opportunities
                </div>
            </div>
        </motion.div>
    );
};

export default React.memo(ContactInfo);
