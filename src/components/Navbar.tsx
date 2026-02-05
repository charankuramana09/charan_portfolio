import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '/projects', isRoute: true },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '/blog', isRoute: true },
];

export default function Navbar() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Check localStorage first, then system preference
        const saved = localStorage.getItem('theme');
        if (saved) return saved as 'light' | 'dark';

        // Check system preference
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Save to localStorage and apply to document
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    // Track active section for highlighting
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

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [location.pathname]);

    const [konami, setKonami] = useState(false);

    useEffect(() => {
        const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let currentIndex = 0;

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === code[currentIndex]) {
                currentIndex++;
                if (currentIndex === code.length) {
                    setKonami(true);
                    currentIndex = 0;
                    document.body.classList.add('party-mode');
                    setTimeout(() => {
                        document.body.classList.remove('party-mode');
                        setKonami(false);
                    }, 10000);
                }
            } else {
                currentIndex = 0;
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a
                    href="#home"
                    className="font-bold text-xl text-primary-600 dark:text-primary-400 tracking-tight focus-ring"
                    aria-label="Charan Portfolio - Home"
                >
                    Charan
                </a>
                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center" aria-label="Main Navigation">
                    {navItems.map((item) => {
                        const isActive = location.pathname === '/' && !item.isRoute && activeSection === item.href.replace('#', '');
                        const isActivePage = item.isRoute && location.pathname === item.href;

                        if (item.isRoute) {
                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={`text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors px-2 py-1 rounded relative focus-ring ${isActivePage ? 'text-primary-600 dark:text-primary-400' : ''
                                        }`}
                                >
                                    {item.label}
                                    {isActivePage && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                                        />
                                    )}
                                </Link>
                            );
                        } else {
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors px-2 py-1 rounded relative focus-ring ${isActive ? 'text-primary-600 dark:text-primary-400' : ''
                                        }`}
                                    onClick={e => {
                                        if (location.pathname !== '/') {
                                            e.preventDefault();
                                            navigate('/' + item.href);
                                        }
                                    }}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                                        />
                                    )}
                                </a>
                            );
                        }
                    })}
                    <button
                        aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
                        aria-pressed={theme === 'dark'}
                        onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                        className="ml-2 p-2 rounded-md bg-slate-100 dark:bg-slate-700 focus-ring cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                        {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded focus-ring"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileOpen(false)}
                aria-hidden={!mobileOpen}
            />
            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 w-64 h-full z-50 bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
            >
                <div className="flex flex-col h-full p-6 gap-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg text-primary-600 dark:text-primary-400">Menu</span>
                        <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => {
                            if (item.isRoute) {
                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className="text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-lg transition-colors px-2 py-1 rounded"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            } else {
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-lg transition-colors px-2 py-1 rounded"
                                        onClick={e => {
                                            setMobileOpen(false);
                                            if (location.pathname !== '/') {
                                                e.preventDefault();
                                                navigate('/' + item.href);
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                );
                            }
                        })}
                        <button
                            aria-label="Toggle theme"
                            aria-pressed={theme === 'dark'}
                            onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                            className="mt-4 p-2 rounded-md bg-slate-100 dark:bg-slate-700 focus-ring cursor-pointer self-start"
                        >
                            {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
