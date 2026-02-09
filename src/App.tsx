import React, { Suspense, lazy } from 'react'
import Navbar from './shared/components/Navbar'
import PremiumHero from './features/hero/PremiumHero';
import Footer from './shared/components/Footer';
import ScrollToTop from './shared/components/ScrollToTop';
import PageLoader from './shared/components/PageLoader';
import ErrorBoundary from './shared/components/ErrorBoundary';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

// Lazy load pages for better performance
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load home sections for better performance
const TechStack = lazy(() => import('./features/techstack/TechStack'));
const About = lazy(() => import('./features/about/About'));
const Skills = lazy(() => import('./features/skills/Skills'));
const Projects = lazy(() => import('./features/projects/Projects'));
const CertificationsLearning = lazy(() => import('./features/certifications/CertificationsLearning'));
const Experience = lazy(() => import('./features/experience/Experience'));
const Testimonials = lazy(() => import('./features/testimonials/Testimonials'));
const Contact = lazy(() => import('./features/contact/Contact'));
import CursorTrail from './shared/components/CursorTrail';

export default function App() {
    const location = useLocation();
    const [showInitialLoader, setShowInitialLoader] = React.useState(true);

    // Performance Monitoring
    React.useEffect(() => {
        if ('connection' in navigator && (navigator as any).connection.saveData) {
            console.log('Low power mode / Save data enabled. Reducing animations.');
        }
    }, []);

    React.useEffect(() => {
        if (typeof window === 'undefined') return;

        const hasShown = sessionStorage.getItem('initialLoaderShown');
        if (hasShown) {
            setShowInitialLoader(false);
            return;
        }

        sessionStorage.setItem('initialLoaderShown', 'true');

        let didCancel = false;
        const minDelay = 900;
        const start = performance.now();

        const finish = () => {
            const elapsed = performance.now() - start;
            const remaining = Math.max(0, minDelay - elapsed);
            window.setTimeout(() => {
                if (!didCancel) setShowInitialLoader(false);
            }, remaining);
        };

        if (document.readyState === 'complete') {
            finish();
        } else {
            window.addEventListener('load', finish, { once: true });
        }

        return () => {
            didCancel = true;
            window.removeEventListener('load', finish);
        };
    }, []);

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
            if (attempts < maxAttempts) {
                setTimeout(scrollToSection, 150);
            }
        };

        scrollToSection();
    }, [location.pathname, location.hash]);

    return (
        <ErrorBoundary>
            {showInitialLoader ? (
                <PageLoader />
            ) : (
                <div className="min-h-screen">
                    <CursorTrail />
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
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Suspense fallback={<PageLoader />}>
                                <Routes location={location}>
                                    <Route path="/" element={
                                        <>
                                            <PremiumHero />
                                            <Suspense fallback={<div className="h-40 flex items-center justify-center"><PageLoader /></div>}>
                                                <TechStack />
                                                <About />
                                                <Skills />
                                                <Projects />
                                                <Experience />
                                                <CertificationsLearning />
                                                <Testimonials />
                                                <Contact />
                                            </Suspense>
                                        </>
                                    } />
                                    <Route path="/blog" element={<Blog />} />
                                    <Route path="/blog/:slug" element={<BlogPost />} />
                                    <Route path="/projects" element={<ProjectsPage />} />
                                    <Route path="/projects/:id" element={<ProjectDetail />} />
                                    <Route path="/thank-you" element={<ThankYou />} />
                                    <Route path="/charan_portfolio/*" element={<Navigate to="/#home" replace />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Suspense>
                        </motion.main>
                    </AnimatePresence>
                    <Footer />
                    <Analytics />
                </div>
            )}
        </ErrorBoundary>
    );
}
