import React from 'react'
import { motion } from 'framer-motion'


function IconGitHub() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function IconLinkedIn() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function IconArrowUp() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18} aria-hidden>
            <polyline points="18 15 12 9 6 15" />
        </svg>
    );
}

function IconMail() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18} aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
        </svg>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="relative z-10 bg-slate-900/60 backdrop-blur-xl border-t border-white/10 overflow-hidden mt-20">
            {/* Animated gradient line at top */}
            <div className="absolute top-0 left-0 w-full h-0.5">
                <motion.div
                    className="w-full h-full bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-[length:200%_100%]"
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{ backgroundPosition: '200% 50%' }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                />
            </div>

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -top-40 left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-400 opacity-10 blur-3xl animate-[floatSlow_20s_ease-in-out_infinite]" />
            <div className="pointer-events-none absolute -bottom-36 right-[10%] w-[350px] h-[350px] rounded-full bg-purple-500 opacity-10 blur-3xl animate-[floatSlow_25s_ease-in-out_5s_infinite]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-10 mb-12 footer-content">
                    {/* About Section */}
                    <motion.div
                        className="footer-about"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="footer-logo text-3xl font-bold bg-gradient-to-tr from-white to-indigo-400 bg-clip-text text-transparent mb-4 inline-block animate-[float_4s_ease-in-out_infinite]">
                            Charan Kuramana
                        </div>
                        <p className="footer-description text-slate-400 leading-relaxed mb-6 text-[15px]">
                            Product-focused Full-Stack Engineer crafting performant web experiences with modern technologies and best practices.
                        </p>
                        <a
                            href="mailto:charankuramana143@gmail.com"
                            className="footer-email inline-flex items-center gap-2 text-indigo-400 text-[15px] px-5 py-3 bg-indigo-400/10 border border-indigo-400/20 rounded-xl transition-all duration-300 relative overflow-hidden hover:bg-indigo-400/20 hover:border-indigo-400/40 hover:text-white"
                            onClick={() => {
                                // Analytics event could go here
                            }}
                        >
                            <IconMail />
                            <span>charankuramana143@gmail.com</span>
                        </a>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="footer-links"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h3 className="footer-section-title text-base font-bold uppercase tracking-wider mb-6 text-slate-200 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-10 h-1 rounded bg-gradient-to-r from-indigo-400 to-purple-500 animate-pulse" />
                        </h3>
                        <ul className="footer-nav list-none">
                            {[
                                { href: '#projects', label: 'Projects' },
                                { href: '#skills', label: 'Skills' },
                                { href: '#experience', label: 'Experience' },
                                { href: '#contact', label: 'Contact' },
                            ].map((item) => (
                                <li key={item.href} className="mb-3">
                                    <a
                                        href={item.href}
                                        className="relative inline-flex items-center gap-2 text-slate-400 text-[15px] transition-all duration-300 hover:text-white pl-0 group"
                                    >
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                                        <svg className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
                                        <span className="relative z-10">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        className="footer-connect"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <h3 className="footer-section-title text-base font-bold uppercase tracking-wider mb-6 text-slate-200 relative inline-block">
                            Connect
                            <span className="absolute -bottom-2 left-0 w-10 h-1 rounded bg-gradient-to-r from-indigo-400 to-purple-500 animate-pulse" />
                        </h3>
                        <div className="social-links flex gap-3 mb-6">
                            <motion.a
                                whileHover={{ y: -8, rotate: 5 }}
                                href="https://github.com"
                                className="social-link w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-400 transition-all duration-400 relative overflow-hidden"
                                target="_blank"
                                aria-label="GitHub"
                            >
                                <IconGitHub />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -8, rotate: -5 }}
                                href="https://linkedin.com"
                                className="social-link w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-400 transition-all duration-400 relative overflow-hidden"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <IconLinkedIn />
                            </motion.a>
                        </div>
                        <motion.button
                            whileHover={{ y: -3, scale: 1.05 }}
                            className="back-to-top inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 text-[14px] transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-indigo-400/30 hover:text-white"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            aria-label="Back to top"
                        >
                            <IconArrowUp />
                            Back to top
                        </motion.button>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    className="footer-bottom pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5 text-slate-500 text-[14px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p className="footer-copyright">
                        © {year} Charan Kuramana — Built with <span className="footer-tech text-indigo-400 font-semibold">React, Vite &amp; Tailwind</span>
                    </p>
                    <div className="footer-secondary-links flex gap-6">
                        <a href="#privacy" className="relative text-slate-500 hover:text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full">Privacy</a>
                        <a href="#terms" className="relative text-slate-500 hover:text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full">Terms</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
