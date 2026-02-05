import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Container animation with stagger
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

// Item animation
const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

// Title animation with gradient shift
const titleAnimation = {
    animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: {
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
        },
    },
}

// Skill item animation
const skillItemVariant = {
    hidden: { opacity: 0, x: -15 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

export default function Certifications() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Certifications data with enhanced structure
    const certifications = [
        {
            title: 'Project Management Skills Upgrade',
            icon: '🔒',
            iconColor: 'bg-gradient-to-br from-purple-600 to-purple-800',
            provider: 'W. James',
            hours: '45 hrs',
            badge: 'Ongoing',
            badgeColor: 'bg-gradient-to-br from-purple-600 to-purple-800',
            description: 'Specialized in agile vs lean Scrum methodologies and hybrid forms, with hands-on training in advanced leadership strategies for modern project execution.',
            skills: [
                'Fundamentals of Project Management',
                'Project Lifecycle: Initiation, Planning, Execution, Monitoring & Closure',
                'Agile & Scrum Mastery in AI Project Management',
                'MS Excel for Project Planning & Tracking'
            ],
            progress: '75%',
            modules: '12/16',
            link: '#'
        },
        {
            title: 'Microservices Architecture',
            icon: '📊',
            iconColor: 'bg-gradient-to-br from-green-600 to-teal-600',
            provider: 'Cloud Academy',
            hours: '32 hrs',
            badge: 'Ongoing',
            badgeColor: 'bg-gradient-to-br from-green-600 to-teal-600',
            description: 'Applied new skills to real projects, contributing to robust, scalable applications at large-scale environments.',
            skills: [
                'Microservices architecture, service discovery, API gateway',
                'Building scalable, resilient services',
                'Containerization & Orchestration',
                'API Management & Documentation'
            ],
            progress: '60%',
            modules: '8/14',
            link: '#'
        },
        {
            title: 'Full Stack Java Developer Training',
            icon: '☕',
            iconColor: 'bg-gradient-to-br from-orange-500 to-amber-600',
            provider: 'IT Vedic Technologies',
            hours: '720 hrs',
            badge: 'Completed',
            badgeColor: 'bg-gradient-to-br from-green-600 to-teal-600',
            description: 'Hands-on experience building server-side SPA and robust backends, ready to contribute to real-world projects.',
            skills: [
                'Java, Spring Boot, HTML, CSS, JavaScript',
                'Developed 3 full-fledged Banking Applications',
                'Database Design & Optimization',
                'Deployment & DevOps Practices'
            ],
            progress: '✓',
            modules: 'Passed',
            link: '#'
        },
    ]

    // Handle mouse movement for card rotation effect
    const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
        const card = e.currentTarget as HTMLElement
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        card.style.transition = 'none'
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`
    }

    const handleMouseLeave = (e: React.MouseEvent) => {
        const card = e.currentTarget as HTMLElement
        card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)'
    }

    return (
        <section id="certifications" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden py-20">
            {/* Animated gradient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header - Keep as is */}
                <div className="text-center mb-20">
                    <motion.h2
                        variants={titleAnimation}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-pink-300 bg-clip-text text-transparent"
                        style={{
                            backgroundSize: '200% 200%',
                        }}
                    >
                        Certifications & Learnings
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg text-slate-300 max-w-2xl mx-auto"
                    >
                        A journey of continuous growth, skill development, and professional excellence
                    </motion.p>
                </div>

                {/* Cards Grid - Horizontal layout */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="certifications-grid mb-16"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
                        gap: '40px',
                    }}
                >
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            variants={item}
                            custom={idx}
                            onMouseMove={(e) => handleMouseMove(e, idx)}
                            onMouseLeave={handleMouseLeave}
                            className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden hover:shadow-[0_30px_60px_rgba(102,126,234,0.3)]"
                            style={{
                                willChange: 'transform',
                            }}
                        >
                            {/* Gradient border on hover - positioned with z-index */}
                            <div className="absolute -inset-[2px] bg-gradient-to-br from-purple-600 via-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />

                            {/* Radial glow effect on hover */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full group-hover:w-[600px] group-hover:h-[600px] transition-all duration-600 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
                                }}
                            />

                            <div className="relative z-10">
                                {/* Card Header */}
                                <motion.div
                                    className="flex items-start gap-4 mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                        className={`${cert.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative overflow-hidden`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5" />
                                        <span className="relative z-10">{cert.icon}</span>
                                    </motion.div>

                                    <div className="flex-1">
                                        <motion.h3
                                            variants={skillItemVariant}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 }}
                                            className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors"
                                        >
                                            {cert.title}
                                        </motion.h3>
                                        <motion.div
                                            variants={skillItemVariant}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="flex items-center gap-3 mt-2 text-sm text-slate-400"
                                        >
                                            <span>{cert.provider} • {cert.hours}</span>
                                            <motion.span
                                                whileHover={{ scale: 1.05 }}
                                                className={`${cert.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}
                                            >
                                                {cert.badge}
                                            </motion.span>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.p
                                    variants={skillItemVariant}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.25 }}
                                    className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors"
                                >
                                    {cert.description}
                                </motion.p>

                                {/* Skills List */}
                                <motion.ul
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    transition={{ delay: 0.3 }}
                                    className="space-y-2 mb-8"
                                >
                                    {cert.skills.map((skill, skillIdx) => (
                                        <motion.li
                                            key={skillIdx}
                                            variants={skillItemVariant}
                                            className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-slate-100 transition-all"
                                        >
                                            <motion.span
                                                className="text-purple-400 mt-1 flex-shrink-0"
                                                whileHover={{ rotate: 180 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                ✦
                                            </motion.span>
                                            <span>{skill}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Footer Stats and Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10"
                                >
                                    <div className="flex gap-6">
                                        <div>
                                            <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Progress</div>
                                            <div className="text-lg font-bold text-white">{cert.progress}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                                                {cert.badge === 'Completed' ? 'Assessment' : 'Modules'}
                                            </div>
                                            <div className="text-lg font-bold text-white">{cert.modules}</div>
                                        </div>
                                    </div>

                                    <motion.a
                                        href={cert.link}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative px-6 py-2 rounded-lg font-semibold text-white overflow-hidden group/btn bg-gradient-to-r from-purple-600 to-purple-800 hover:shadow-lg hover:shadow-purple-600/50 transition-all w-full sm:w-auto text-center"
                                    >
                                        <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors" />
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            View Certificate
                                            <motion.span
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </span>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-12 py-4 rounded-2xl font-semibold text-white border-2 border-purple-500/50 hover:border-purple-400 transition-all overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Want to see more of my learning journey?
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
