import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { FiBriefcase, FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function ResumeTimeline() {
    return (
        <div className="py-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-16 text-center">Career Journey</h3>
            <div className="relative max-w-4xl mx-auto px-4">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

                <div className="space-y-16">
                    {experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Marker */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 dark:bg-indigo-600 border-4 border-indigo-500 dark:border-slate-900 flex items-center justify-center z-10 shadow-lg">
                                <FiBriefcase className="text-white text-xs" />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all group">
                                    <div className={`flex flex-col mb-4 ${idx % 2 === 0 ? '' : 'md:items-end'}`}>
                                        <span className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 flex items-center gap-2">
                                            <FiCalendar /> {exp.duration}
                                        </span>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                                            {exp.role}
                                        </h4>
                                        <p className="text-indigo-500 dark:text-yellow-400 font-medium">{exp.company}</p>
                                    </div>
                                    <ul className={`space-y-3 ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                                        {exp.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Spacer for MD screens */}
                            <div className="hidden md:block w-[10%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
