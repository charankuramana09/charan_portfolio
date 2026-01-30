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
    const [theme, setTheme] = useState<'light' | 'dark'>(() => (typeof window !== 'undefined' && document.documentElement.classList.contains('dark')) ? 'dark' : 'light');
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

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
                <a href="#home" className="font-bold text-xl text-primary-600 dark:text-primary-400 tracking-tight">Charan</a>
                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => {
                        if (item.isRoute) {
                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className="text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors px-2 py-1 rounded"
                                >
                                    {item.label}
                                </Link>
                            );
                        } else {
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors px-2 py-1 rounded"
                                    onClick={e => {
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
                        className="ml-2 p-2 rounded-md bg-slate-100 dark:bg-slate-700 focus-ring cursor-pointer"
                    >
                        {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle navigation menu"
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
