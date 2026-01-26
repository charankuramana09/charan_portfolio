import React from 'react'
import Section from './Section'
import { about } from '../data/portfolio'
import { motion } from 'framer-motion'
import { item, stagger } from '../motion/variants'
import InteractiveCard from './InteractiveCard'
import CardDemo from './ui/cards-demo-3'

export default function About() {
    return (
        <Section id="about" direction="left" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex items-center justify-center relative">
                    {/* background demo card (subtle, pointer-events-none) */}
                    <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
                        <CardDemo />
                    </div>
                    <div>
                        {/* Interactive 3D card */}
                        <InteractiveCard className="max-w-sm" width={340} height={340} maxRotate={4} translateMultiplier={18} perspective={900}>
                            <div className="flex flex-col items-center justify-center h-full p-6">
                                <div className="avatar-circle">CK</div>
                                <div className="mt-4 text-center">
                                    <div className="font-heading text-lg font-bold">Charan Kuramana</div>
                                    <div className="text-sm text-slate-500 mt-1">Product‑Focused Full‑Stack Engineer</div>
                                </div>
                            </div>
                        </InteractiveCard>
                    </div>
                </div>

                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <motion.h2 variants={item} className="font-heading text-3xl md:text-4xl mb-4">Crafting Digital Experiences with Code</motion.h2>
                    {about.paragraphs.map((p, i) => (
                        <motion.p variants={item} key={i} className="text-slate-700 dark:text-slate-200 mb-4">{p}</motion.p>
                    ))}
                    <motion.p variants={item} className="text-sm text-slate-500 mb-6"><strong className="text-slate-700">Location:</strong> {about.location}</motion.p>

                    <motion.div variants={item} className="grid sm:grid-cols-3 gap-8">
                        {/* Full Stack Card */}
                        <motion.div
                            className="card p-4 text-center group relative"
                            style={{ transformOrigin: 'center', zIndex: 1 }}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        >
                            <motion.div
                                className="mb-2 mx-auto"
                                style={{ width: 64, height: 64, display: 'grid', placeItems: 'center', position: 'relative' }}
                                animate={{
                                    scale: [1, 1.12, 1.12, 1, 1],
                                    rotate: [0, 0, 10, 10, 0],
                                    borderRadius: ["16px", "16px", "28px", "28px", "16px"],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            >
                                <div style={{ width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,#6366f1,#7c3aed)', color: '#fff', zIndex: 2, borderRadius: '16px', boxShadow: '0 2px 12px rgba(99,102,241,0.10)' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M3 7h18M3 12h18M3 17h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.div>
                            <div className="font-semibold mt-2">Full Stack</div>
                            <div className="text-xs text-slate-500">Java & React</div>
                        </motion.div>

                        {/* Databases Card */}
                        <motion.div
                            className="card p-4 text-center group relative"
                            style={{ transformOrigin: 'center', zIndex: 1 }}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        >
                            <motion.div
                                className="mb-2 mx-auto"
                                style={{ width: 64, height: 64, display: 'grid', placeItems: 'center', position: 'relative' }}
                                animate={{
                                    scale: [1, 1.12, 1.12, 1, 1],
                                    rotate: [0, 0, 8, 8, 0],
                                    borderRadius: ["16px", "16px", "28px", "28px", "16px"],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            >
                                <div style={{ width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,#10b981,#059669)', color: '#fff', zIndex: 2, borderRadius: '16px', boxShadow: '0 2px 12px rgba(16,185,129,0.10)' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M12 2v20M5 8h14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.div>
                            <div className="font-semibold mt-2">Databases</div>
                            <div className="text-xs text-slate-500">MySQL & Oracle</div>
                        </motion.div>

                        {/* Cloud Card */}
                        <motion.div
                            className="card p-4 text-center group relative"
                            style={{ transformOrigin: 'center', zIndex: 1 }}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        >
                            <motion.div
                                className="mb-2 mx-auto"
                                style={{ width: 64, height: 64, display: 'grid', placeItems: 'center', position: 'relative' }}
                                animate={{
                                    scale: [1, 1.12, 1.12, 1, 1],
                                    rotate: [0, 0, 6, 6, 0],
                                    borderRadius: ["16px", "16px", "28px", "28px", "16px"],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            >
                                <div style={{ width: 56, height: 56, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,#06b6d4,#0891b2)', color: '#fff', zIndex: 2, borderRadius: '16px', boxShadow: '0 2px 12px rgba(6,182,212,0.10)' }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M3 12h18M6 6v12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.div>
                            <div className="font-semibold mt-2">Cloud</div>
                            <div className="text-xs text-slate-500">Docker & K8s</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    )
}
