import React from 'react'
import Section from './Section'
import { motion, useAnimation, useInView } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
    // Animation variants
    const sectionTitle = {
        hidden: { opacity: 0, y: -32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    const timelineLine = {
        hidden: { scaleY: 0 },
        show: { scaleY: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
    };
    const cardLeft = {
        hidden: { opacity: 0, x: -64 },
        show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    const cardRight = {
        hidden: { opacity: 0, x: 64 },
        show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    // Gradient dot style
    const dotStyle = {
        background: 'linear-gradient(135deg,#6366f1,#10b981,#06b6d4,#f59e42)',
        boxShadow: '0 0 0 6px rgba(16,185,129,0.10)',
    };

    return (
        <Section id="experience" direction="left" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
                <motion.div variants={sectionTitle} className="text-center mb-10">
                    <div className="text-sm text-primary-600 tracking-wider mb-1">Experience</div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold glitch" data-text="My Professional Journey">My Professional Journey</h2>
                    <p className="text-slate-400 dark:text-slate-400 mt-2">Building enterprise solutions and growing as a developer</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline vertical line */}
                    <motion.div
                        variants={timelineLine}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-emerald-400 to-cyan-400 opacity-80 transform -translate-x-1/2 origin-top"
                        style={{ borderRadius: 8 }}
                    />

                    <div className="space-y-16">
                        {experience.map((exp, idx) => {
                            const sideLeft = idx % 2 === 0;
                            const cardAnim = sideLeft ? cardLeft : cardRight;
                            return (
                                <div key={exp.company} className="relative flex flex-col md:flex-row md:items-center md:justify-between">
                                    {/* Card left */}
                                    <div className={`md:w-1/2 flex ${sideLeft ? 'justify-end' : 'justify-start'} md:pr-8 md:pl-0`}>
                                        {sideLeft && (
                                            <motion.div
                                                variants={cardAnim}
                                                initial="hidden"
                                                whileInView="show"
                                                viewport={{ once: true, amount: 0.2 }}
                                                whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.18)' }}
                                                className="card bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 shadow-lg transition-all duration-300 max-w-md w-full border border-slate-700 hover:border-emerald-400"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-semibold text-white text-lg">{exp.company}</div>
                                                        <div className="text-sm text-primary-400 font-medium">{exp.role}</div>
                                                        <div className="text-xs text-slate-400 mt-1">{exp.duration} • Hyderabad, Telangana</div>
                                                    </div>
                                                </div>
                                                <ul className="mt-3 list-disc list-inside text-sm text-slate-300 dark:text-slate-200">
                                                    {exp.bullets.slice(0, 5).map((b, i) => <li key={i}>{b}</li>)}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 transform -translate-x-1/2 z-10">
                                        <span className="w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 block" style={dotStyle}></span>
                                    </div>

                                    {/* Card right */}
                                    <div className={`md:w-1/2 flex ${sideLeft ? 'justify-start' : 'justify-end'} md:pl-8 md:pr-0 mt-8 md:mt-0`}>
                                        {!sideLeft && (
                                            <motion.div
                                                variants={cardAnim}
                                                initial="hidden"
                                                whileInView="show"
                                                viewport={{ once: true, amount: 0.2 }}
                                                whileHover={{ y: -6, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.18)' }}
                                                className="card bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 shadow-lg transition-all duration-300 max-w-md w-full border border-slate-700 hover:border-emerald-400"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-semibold text-white text-lg">{exp.company}</div>
                                                        <div className="text-sm text-primary-400 font-medium">{exp.role}</div>
                                                        <div className="text-xs text-slate-400 mt-1">{exp.duration} • Hyderabad, Telangana</div>
                                                    </div>
                                                </div>
                                                <ul className="mt-3 list-disc list-inside text-sm text-slate-300 dark:text-slate-200">
                                                    {exp.bullets.slice(0, 5).map((b, i) => <li key={i}>{b}</li>)}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
