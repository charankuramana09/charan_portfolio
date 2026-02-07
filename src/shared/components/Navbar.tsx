import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { strings } from '../../data/strings';

const Navbar: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved as 'light' | 'dark';
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = useMemo(() => ({
        sections: [
            { label: strings.navigation.home, href: '#home' },
            { label: strings.navigation.about, href: '#about' },
            { label: strings.navigation.skills, href: '#skills' },
            { label: strings.navigation.experience, href: '#experience' },
            { label: strings.navigation.certifications, href: '#certifications' },
            { label: strings.navigation.contact, href: '#contact' },
        ],
        pages: [
            { label: strings.navigation.projects, href: '/projects' },
            { label: strings.navigation.blog, href: '/blog' },
        ]
    }), []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: [0.5],
                rootMargin: '-100px 0px -50% 0px'
            }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [location.pathname]);

    const scrollToTop = useCallback((e: React.MouseEvent) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location.pathname]);

    const handleSectionNav = useCallback((href: string, e?: React.MouseEvent) => {
        if (location.pathname === '/') {
            e?.preventDefault();
            const id = href.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.location.hash = href;
            }
            return;
        }

        e?.preventDefault();
        navigate('/' + href);
    }, [location.pathname, navigate]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, []);

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`} role="navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a
                    href="#home"
                    className="font-black text-2xl tracking-tighter text-indigo-600 dark:text-white uppercase transition-transform hover:scale-105 focus-ring rounded px-2"
                    aria-label="Charan Portfolio - Home"
                    onClick={scrollToTop}
                >
                    Charan<span className="text-indigo-500">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-2">
                    <div className="flex bg-slate-100/50 dark:bg-white/5 backdrop-blur-md p-1 rounded-full border border-slate-200/50 dark:border-white/10 ring-1 ring-black/5" role="menubar">
                        {navItems.sections.map((item) => {
                            const isActive = location.pathname === '/' && activeSection === item.href.replace('#', '');
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    role="menuitem"
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative focus-ring ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'}`}
                                    onClick={(e) => handleSectionNav(item.href, e)}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-bg"
                                            className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-lg shadow-indigo-500/30"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            aria-hidden="true"
                                        />
                                    )}
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>

                    <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-4" aria-hidden="true" />

                    <div className="flex gap-2">
                        {navItems.pages.map((item) => {
                            const isActivePage = location.pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 border focus-ring ${isActivePage ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-white'}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <button
                        aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
                        onClick={toggleTheme}
                        className="ml-4 p-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-slate-200 dark:border-white/10 focus-ring"
                    >
                        {theme === 'light' ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="flex lg:hidden items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white focus-ring"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
                    </button>
                    <button
                        className="p-2 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 focus-ring"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-[80%] max-w-sm h-full z-[70] bg-white dark:bg-slate-900 shadow-2xl p-8 flex flex-col"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Navigation Menu"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <span className="font-black text-2xl tracking-tighter text-indigo-600 dark:text-white">{strings.navigation.menu}</span>
                                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full bg-slate-100 dark:bg-white/10 focus-ring" aria-label="Close menu">
                                    <X size={24} aria-hidden="true" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2">Navigation</p>
                                    <div className="flex flex-col space-y-2">
                                        {navItems.sections.map((item) => (
                                            <a
                                                key={item.href}
                                                href={item.href}
                                                className="block text-2xl font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors pl-2 border-l-2 border-transparent hover:border-indigo-600 py-1"
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    handleSectionNav(item.href);
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2">Pages</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {navItems.pages.map((item) => (
                                            <Link
                                                key={item.href}
                                                to={item.href}
                                                className="px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 text-center font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 focus-ring"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-8 border-t border-slate-200 dark:border-white/10 opacity-60 text-center text-xs">
                                © {new Date().getFullYear()} {strings.hero.name}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default React.memo(Navbar);
