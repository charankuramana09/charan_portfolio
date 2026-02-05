import React, { useRef, useState } from 'react';
import Section from './Section';
import { about } from '../data/portfolio';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { item, stagger } from '../motion/variants';
import { LightWavesBackground } from './ui/LightWavesBackground';
import charanAvatar from '../assets/charan.png';

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

// 3D Tilt Card Component
const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            // Continuous floating animation
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    boxShadow: "0 20px 60px rgba(99, 102, 241, 0.15), 0 10px 30px rgba(139, 92, 246, 0.1), 0 0 0 1px rgba(99, 102, 241, 0.05)"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-72 h-80 rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden cursor-pointer group card-3d-wrapper"
            >
                {/* Animated glow ring */}
                <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-500"
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Elements inside 3D card */}
                <div
                    style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                >
                    <motion.div
                        className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 mb-4 shadow-lg active-avatar"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(99, 102, 241, 0.3)",
                                "0 0 40px rgba(139, 92, 246, 0.5)",
                                "0 0 20px rgba(99, 102, 241, 0.3)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-2xl font-bold text-slate-900 dark:text-white overflow-hidden">
                            {/* You can replace this with an actual image */}
                            <img src={charanAvatar} alt="CK" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Charan+Kuramana&background=6366f1&color=fff' }} />
                        </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Charan Kuramana</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">Full Stack Developer</p>

                    {/* Decorative floating badges */}
                    <div
                        style={{ transform: "translateZ(30px)" }}
                        className="absolute bottom-6 flex gap-2"
                    >
                        <span className="px-3 py-1 bg-white/50 dark:bg-white/10 rounded-full text-[10px] text-slate-800 dark:text-white backdrop-blur-sm border border-slate-200 dark:border-white/5">Java</span>
                        <span className="px-3 py-1 bg-white/50 dark:bg-white/10 rounded-full text-[10px] text-slate-800 dark:text-white backdrop-blur-sm border border-slate-200 dark:border-white/5">React</span>
                    </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            </motion.div>
        </motion.div>
    );
};

export default function About() {
    return (
        <Section id="about" direction="left" className="max-w-7xl mx-auto px-4 sm:px-6 py-24 relative overflow-hidden transition-colors duration-300">
            {/* Animated Wave Background */}
            <LightWavesBackground
                colors={["#6366f1", "#8b5cf6", "#06b6d4", "#a855f7", "#0ea5e9"]}
                speed={0.8}
                intensity={0.4}
            />

            <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start relative z-10">
                {/* 3D Profile Card Section */}
                <div
                    className="lg:sticky lg:top-28 flex-shrink-0 perspective-1000 focus-ring rounded-2xl"
                    tabIndex={0}
                    role="img"
                    aria-label="Charan Kuramana - 3D Interactive Profile Card"
                >
                    <TiltCard />
                    <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-500">
                        <p className="animate-pulse">Based in Hyderabad, India 🇮🇳</p>
                    </div>
                </div>

                {/* About Content */}
                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex-1 w-full">
                    <motion.div variants={item} className="mb-8">
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 tracking-wide">
                            ABOUT ME
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Crafting Digital Experiences with <span className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Passion & Code</span>
                        </h2>
                    </motion.div>

                    {about.paragraphs.map((p, i) => (
                        <motion.p
                            variants={item}
                            key={i}
                            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6 border-l-2 border-indigo-500/20 pl-6 hover:border-indigo-500 transition-colors duration-300"
                        >
                            {p}
                        </motion.p>
                    ))}

                    {/* Animated feature cards */}
                    <motion.div
                        variants={stagger}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
                        role="list"
                    >
                        {featuredSkills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                variants={item}
                                whileHover={{ y: -5, scale: 1.02 }}
                                tabIndex={0}
                                role="listitem"
                                className="relative p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 overflow-hidden group shadow-lg dark:shadow-none transition-shadow duration-300 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-xl focus-ring"
                            >
                                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${skill.color}`} />
                                <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 bg-indigo-100 dark:bg-white/5 rounded-full blur-xl -mr-8 -mt-8" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center text-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-white/5 ring-1 ring-slate-200 dark:ring-white/10 group-hover:ring-indigo-500/50 transition-all duration-300">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white text-sm">{skill.name}</div>
                                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{skill.label}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}