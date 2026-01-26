import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import { item as itemVariant, staggerSlow, pop } from '../motion/variants'
import Section from './Section'
import { AnimatePresence } from 'framer-motion'

export default function Projects() {
    return (
        <Section id="projects" direction="right" className="max-w-5xl mx-auto px-6 py-12">
            <div className="text-center mb-8">
                <div className="text-sm text-primary-600">Projects</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Featured Work</h2>
                <p className="text-slate-600 mt-2">A selection of projects showcasing my skills and experience</p>
            </div>

            <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerSlow}>
                <AnimatePresence>
                    {projects.map((p, i) => (
                        <motion.article layout key={p.title} custom={i} variants={itemVariant} whileHover={pop.whileHover} whileTap={pop.whileTap} className="card p-6 hover:shadow-xl transition-transform">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <rect width="14" height="10" x="5" y="7" rx="2" stroke="currentColor" strokeWidth="1.2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{p.title}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <a href={p.github} className="text-primary-500 text-sm" aria-label="github">🔗</a>
                                    <a href={p.demo} className="text-slate-500 text-sm" aria-label="demo">⤴</a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">{t}</span>)}
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="text-center mt-8">
                <a href="#" className="btn-3d">
                    <span className="btn-inner px-6 py-2 bg-white dark:bg-slate-800 rounded-full border">View More on GitHub</span>
                </a>
            </div>
        </Section>
    )
}
