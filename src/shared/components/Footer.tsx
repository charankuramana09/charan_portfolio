import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowUp, Mail, ChevronRight, MessageCircle, Briefcase } from 'lucide-react';
import { config } from '../../data/config'
import { strings } from '../../data/strings'

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    const quickLinks = [
        { href: '#projects', label: strings.navigation.projects },
        { href: '#skills', label: strings.navigation.skills },
        { href: '#experience', label: strings.navigation.experience },
        { href: '#contact', label: strings.navigation.contact },
    ];

    const socialLinks = [
        { href: config.social.github, icon: <Github size={22} />, label: "GitHub", color: "hover:text-slate-900 dark:hover:text-white" },
        { href: config.social.linkedin, icon: <Linkedin size={22} />, label: "LinkedIn", color: "hover:text-[#0077b5]" },
        { href: config.social.instagram, icon: <Instagram size={22} />, label: "Instagram", color: "hover:text-[#e4405f]" },
        { href: config.social.whatsapp, icon: <MessageCircle size={22} />, label: "WhatsApp", color: "hover:text-[#25D366]" },
        { href: config.social.naukri, icon: <Briefcase size={22} />, label: "Naukri", color: "hover:text-[#1f77d0]" },
    ];

    return (
        <footer className="relative z-10 bg-slate-50 dark:bg-slate-900/60 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 overflow-hidden mt-20 transition-colors duration-300">
            {/* Animated gradient line at top */}
            <div className="absolute top-0 left-0 w-full h-0.5" aria-hidden="true">
                <motion.div
                    className="w-full h-full bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-[length:200%_100%]"
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{ backgroundPosition: '200% 50%' }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                />
            </div>

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -top-40 left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-400/20 dark:bg-indigo-400 opacity-20 dark:opacity-10 blur-3xl animate-[floatSlow_20s_ease-in-out_infinite]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-36 right-[10%] w-[350px] h-[350px] rounded-full bg-purple-500/20 dark:bg-purple-500 opacity-20 dark:opacity-10 blur-3xl animate-[floatSlow_25s_ease-in-out_5s_infinite]" aria-hidden="true" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-10 mb-12">
                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="text-3xl font-bold bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent mb-4 inline-block animate-[float_4s_ease-in-out_infinite]">
                            {strings.hero.name}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-[15px]">
                            Product-focused Full-Stack Engineer crafting performant web experiences with modern technologies and best practices.
                        </p>
                        <a
                            href={`mailto:${config.contact.email}`}
                            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-[15px] px-5 py-3 bg-indigo-50 dark:bg-indigo-400/10 border border-indigo-100 dark:border-indigo-400/20 rounded-xl transition-all duration-300 relative overflow-hidden hover:bg-indigo-100 dark:hover:bg-indigo-400/20 hover:border-indigo-200 dark:hover:border-indigo-400/40 hover:text-indigo-700 dark:hover:text-white focus-ring"
                        >
                            <Mail size={18} aria-hidden="true" />
                            <span>{config.contact.email}</span>
                        </a>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-slate-800 dark:text-slate-200 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-10 h-1 rounded bg-gradient-to-r from-indigo-400 to-purple-500 animate-pulse" aria-hidden="true" />
                        </h3>
                        <ul className="list-none space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="relative inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[15px] transition-all duration-300 hover:text-indigo-600 dark:hover:text-white pl-0 group focus-ring rounded"
                                    >
                                        <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" aria-hidden="true" />
                                        <span className="relative z-10">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <h3 className="text-base font-bold uppercase tracking-wider mb-6 text-slate-800 dark:text-slate-200 relative inline-block">
                            Connect
                            <span className="absolute -bottom-2 left-0 w-10 h-1 rounded bg-gradient-to-r from-indigo-400 to-purple-500 animate-pulse" aria-hidden="true" />
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    whileHover={{ y: -8, rotate: 5 }}
                                    href={link.href}
                                    className={`w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 transition-all duration-400 hover:bg-slate-50 dark:hover:bg-white/10 ${link.color} focus-ring`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                        <motion.button
                            whileHover={{ y: -3, scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-slate-600 dark:text-slate-400 text-[14px] transition-all duration-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 hover:border-indigo-400/30 hover:text-indigo-600 dark:hover:text-white focus-ring"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            aria-label={strings.footer.backToTop}
                        >
                            <ArrowUp size={18} aria-hidden="true" />
                            {strings.footer.backToTop}
                        </motion.button>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-5 text-slate-500 dark:text-slate-500 text-[14px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p>
                        © {year} {strings.hero.name} — Built with <span className="text-indigo-500 dark:text-indigo-400 font-semibold">React, Vite &amp; Tailwind</span>
                    </p>
                    <nav className="flex gap-6" aria-label="Footer Legal Links">
                        <a href="#privacy" className="relative text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 focus-ring rounded px-1">Privacy</a>
                        <a href="#terms" className="relative text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 focus-ring rounded px-1">Terms</a>
                    </nav>
                </motion.div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
