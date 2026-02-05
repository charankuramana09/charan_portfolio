import React from 'react';
import { Award, Calendar, BookOpen, ExternalLink, TrendingUp, Code, Server, Coffee, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import { Ripple } from './ui/Ripple';

const CertificationsLearning = () => {
    const certifications = [
        {
            id: 1,
            title: 'Project Management Skills Upgrade',
            provider: 'Udemy',
            year: '2026',
            timeline: 'Continuous',
            icon: TrendingUp,
            gradient: 'from-emerald-500 to-teal-600',
            bgGlow: 'bg-emerald-500/10',
            skills: ['Agile & Scrum', 'Project Lifecycle', 'Risk Management', 'Stakeholder Comm.'],
            description: 'Mastering the art of delivering value through structured yet flexible project management methodologies.'
        },
        {
            id: 2,
            title: 'Microservices Architecture',
            provider: 'Udemy',
            year: '2025',
            timeline: 'Ongoing',
            icon: Server,
            gradient: 'from-cyan-500 to-blue-600',
            bgGlow: 'bg-cyan-500/10',
            skills: ['Service Discovery', 'API Gateway', 'Event-Driven', 'Scalability'],
            description: 'Designing resilient distributed systems to handle high-scale enterprise requirements.'
        },
        {
            id: 3,
            title: 'Full Stack Java Developer',
            provider: 'Sathya Technologies',
            year: '2023',
            timeline: '6 Months',
            icon: Coffee,
            gradient: 'from-orange-500 to-red-600',
            bgGlow: 'bg-orange-500/10',
            skills: ['Java', 'Spring Boot', 'React', 'MySQL', 'Hibernate'],
            description: 'Intensive bootcamp covering the complete software development lifecycle with hands-on projects.'
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 relative overflow-hidden transition-colors duration-300">
            {/* Background Ripple */}
            <Ripple mainCircleSize={300} mainCircleOpacity={0.2} numCircles={8} className="text-indigo-200 dark:text-indigo-900/30" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 mb-6 backdrop-blur-md"
                    >
                        <Trophy size={16} className="text-yellow-600 dark:text-yellow-500" />
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">Achievements</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Certifications & <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">Learning</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Validating expertise through rigorous training and continuous professional development.
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className={`group relative bg-white/90 dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl p-1 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 h-full shadow-lg dark:shadow-none`}
                            >
                                {/* Hover Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>

                                <div className="relative h-full bg-white/95 dark:bg-slate-900/80 rounded-[22px] p-8 flex flex-col overflow-hidden">
                                    {/* Top Decor */}
                                    <div className={`absolute -right-10 -top-10 w-40 h-40 ${cert.bgGlow} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out opacity-50 dark:opacity-100`}></div>

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                            <Icon size={28} />
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300">
                                            {cert.year}
                                        </span>
                                    </div>

                                    {/* Title & Provider */}
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-cyan-600 dark:group-hover:from-white dark:group-hover:to-slate-400 transition-all">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                                        <BookOpen size={14} />
                                        {cert.provider}
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-slate-200 dark:border-white/5 pl-4 group-hover:border-indigo-400 dark:group-hover:border-white/20 transition-colors">
                                        {cert.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {cert.skills.slice(0, 3).map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 group-hover:border-indigo-200 dark:group-hover:border-white/20 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                        {cert.skills.length > 3 && (
                                            <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400">
                                                +{cert.skills.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Area (Hidden but ready for interactions) */}
                                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs text-slate-500 font-mono">VERIFIED</span>
                                        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                                            <ExternalLink size={16} className="text-slate-400 dark:text-slate-300" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <button className="group relative px-8 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-full font-medium hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative flex items-center gap-2">
                            View All Certifications <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

// Extracted from Lucide since we can't import ArrowRight in the same import statement if it wasn't there
function ArrowRight({ size = 24, className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
        </svg>
    );
}

export default CertificationsLearning;
