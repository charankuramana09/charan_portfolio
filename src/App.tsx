import React, { Suspense, lazy } from 'react'
import Navbar from './shared/components/Navbar'
import PremiumHero from './features/hero/PremiumHero';
import Footer from './shared/components/Footer';
import ScrollToTop from './shared/components/ScrollToTop';
import PageLoader from './shared/components/PageLoader';
import ErrorBoundary from './shared/components/ErrorBoundary';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

// Home sections render eagerly so the page paints in one pass (no spinner waterfall).
import TechStack from './features/techstack/TechStack';
import About from './features/about/About';
import Skills from './features/skills/Skills';
import Services from './features/services/Services';
import Projects from './features/projects/Projects';
import CertificationsLearning from './features/certifications/CertificationsLearning';
import Experience from './features/experience/Experience';
import Testimonials from './features/testimonials/Testimonials';
import AuroraBackground from './shared/ui/AuroraBackground';
import CommandPalette from './shared/ui/CommandPalette';

// Code-split: heavy below-the-fold section (EmailJS + DOMPurify) and secondary routes.
const Contact = lazy(() => import('./features/contact/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Lightweight, non-blocking placeholder used while a code-split chunk loads. */
const SectionSkeleton = () => (
    <div className="mx-auto my-20 h-64 w-full max-w-3xl animate-pulse rounded-3xl bg-slate-200/50 dark:bg-white/5" aria-hidden="true" />
);

export default function App() {
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname !== '/' || !location.hash) return;

        const id = location.hash.replace('#', '');
        if (!id) return;

        let attempts = 0;
        const maxAttempts = 8;

        const scrollToSection = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
            attempts += 1;
            if (attempts < maxAttempts) setTimeout(scrollToSection, 150);
        };

        scrollToSection();
    }, [location.pathname, location.hash]);

    return (
        <ErrorBoundary>
            <div className="min-h-screen">
                <AuroraBackground />
                <CommandPalette />
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-2xl focus:outline-none transition-all"
                >
                    Skip to Content
                </a>
                <Navbar />
                <ScrollToTop />
                <AnimatePresence mode="wait" initial={false}>
                    <motion.main
                        id="main-content"
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <Routes location={location}>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <PremiumHero />
                                        <TechStack />
                                        <About />
                                        <Skills />
                                        <Services />
                                        <Projects />
                                        <Experience />
                                        <CertificationsLearning />
                                        <Testimonials />
                                        <Suspense fallback={<SectionSkeleton />}>
                                            <Contact />
                                        </Suspense>
                                    </>
                                }
                            />
                            <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
                            <Route path="/blog/:slug" element={<Suspense fallback={<PageLoader />}><BlogPost /></Suspense>} />
                            <Route path="/projects" element={<Suspense fallback={<PageLoader />}><ProjectsPage /></Suspense>} />
                            <Route path="/projects/:id" element={<Suspense fallback={<PageLoader />}><ProjectDetail /></Suspense>} />
                            <Route path="/thank-you" element={<Suspense fallback={<PageLoader />}><ThankYou /></Suspense>} />
                            <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
                        </Routes>
                    </motion.main>
                </AnimatePresence>
                <Footer />
                <Analytics />
            </div>
        </ErrorBoundary>
    );
}
