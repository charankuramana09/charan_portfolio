import React from 'react';
import Section from './Section';
import { about } from '../data/portfolio';
import { motion } from 'framer-motion';
import { item, stagger } from '../motion/variants';

const featuredSkills = [
    {
        name: 'Full Stack',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 7h18M3 12h18M3 17h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        color: 'linear-gradient(135deg,#6366f1,#7c3aed)',
        label: 'Java & React',
    },
    {
        name: 'Microservices',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" fill="#fff" />
            </svg>
        ),
        color: 'linear-gradient(135deg,#f472b6,#be185d)',
        label: 'API & Integration',
    },
    {
        name: 'Cloud',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 12h18M6 6v12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        color: 'linear-gradient(135deg,#06b6d4,#0891b2)',
        label: 'Docker & K8s',
    },
    {
        name: 'Zoho Creator',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="1.5" />
                <path d="M8 8h8v8H8z" fill="#fff" />
            </svg>
        ),
        color: 'linear-gradient(135deg,#10b981,#059669)',
        label: 'Low-Code Apps',
    },
];

export default function About() {
    return (
        <Section id="about" direction="left" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                {/* Profile Card (keep current image/structure) */}
                <div className="stacked-cards mx-auto md:mx-0">
                    <div className="card-back"></div>
                    <div className="card-mid"></div>
                    <div className="card-top flex flex-col items-center justify-center">
                        <div className="avatar-circle mb-4">CK</div>
                        <div className="text-center">
                            <div className="font-heading text-xl font-bold mb-1 animated-gradient-text">Charan Kuramana</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Product‑Focused Full‑Stack Engineer</div>
                        </div>
                    </div>
                </div>

                {/* About Content */}
                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex-1 w-full">
                    {/* Enhanced heading animation: animated gradient + mask reveal */}
                    <motion.h2
                        variants={item}
                        className="font-heading text-3xl md:text-4xl mb-6 animated-gradient-text mask-reveal"
                        data-text="Crafting Digital Experiences with Code"
                        style={{
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        <span className="mask-inner">Crafting Digital Experiences with Code</span>
                    </motion.h2>

                    {/* About paragraphs */}
                    {about.paragraphs.map((p, i) => (
                        <motion.p variants={item} key={i} className="text-slate-700 dark:text-slate-200 mb-4 text-lg leading-relaxed">{p}</motion.p>
                    ))}

                    {/* Animated feature cards row (breathing scale effect) - below content */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 mb-2">
                        {featuredSkills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                className="card p-4 text-center group relative"
                                style={{ transformOrigin: 'center', zIndex: 1, background: skill.color, color: '#fff', borderRadius: 18 }}
                                initial="rest"
                                whileHover="hover"
                                animate={{
                                    scale: [1, 1.08, 1],
                                    boxShadow: [
                                        '0 2px 12px rgba(0,0,0,0.10)',
                                        '0 8px 32px rgba(0,0,0,0.18)',
                                        '0 2px 12px rgba(0,0,0,0.10)'
                                    ],
                                }}
                                transition={{
                                    duration: 2.2 + i * 0.2,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'easeInOut',
                                    delay: i * 0.18,
                                }}
                            >
                                <div className="mb-2 mx-auto flex items-center justify-center" style={{ width: 64, height: 64 }}>
                                    {skill.icon}
                                </div>
                                <div className="font-semibold mt-2">{skill.name}</div>
                                <div className="text-xs text-white/80">{skill.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}