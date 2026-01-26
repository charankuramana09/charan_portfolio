import React from 'react'
import Navbar from './components/Navbar'
import PremiumHero from './components/PremiumHero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import LayoutShuffleDemo from './components/LayoutShuffleDemo'
import CardsDemoPage from './components/CardsDemoPage'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AnimatePresence, motion } from 'framer-motion'
import { pageTransition } from './motion/variants'

export default function App() {
    return (
        <AnimatePresence mode="wait">
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="min-h-screen">
                <Navbar />
                <main>
                    <PremiumHero />
                    <About />
                    <Skills />
                    <Projects />

                    <Certifications />

                    <CardsDemoPage />
                    <Experience />
                    <Contact />
                </main>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}
