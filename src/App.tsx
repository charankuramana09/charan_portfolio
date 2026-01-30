import React from 'react'
import Navbar from './components/Navbar'
import PremiumHero from './components/PremiumHero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CertificationsLearning from './components/CertificationsLearning';
import LayoutShuffleDemo from './components/LayoutShuffleDemo';
import CardsDemoPage from './components/CardsDemoPage';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import ProjectsPage from './pages/Projects';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
    const location = useLocation();
    return (
        <div className="min-h-screen">
            <Navbar />
            <AnimatePresence mode="wait" initial={false}>
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Routes location={location}>
                        <Route path="/" element={
                            <>
                                <PremiumHero />
                                <About />
                                <Skills />
                                <Projects />
                                {/* <Certifications /> */}
                                <CertificationsLearning />
                                {/* <CardsDemoPage /> */}
                                <Experience />
                                <Contact />
                            </>
                        } />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                    </Routes>
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}
