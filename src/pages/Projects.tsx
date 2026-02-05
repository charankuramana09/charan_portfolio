import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';
import BackgroundBeams from '../components/ui/BackgroundBeams';

const stats = [
    { number: '5', label: 'Projects Delivered' },
    { number: '15+', label: 'Technologies' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
];

export default function ProjectsPage() {
    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0e27] text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
            <Helmet>
                <title>Projects — Charan Kuramana | Enterprise & Open Source</title>
                <meta name="description" content="Explore my portfolio of enterprise applications, POS systems, and open-source projects built with Java, React, and Spring Boot." />
                <meta property="og:title" content="Projects — Charan Kuramana | Professional Portfolio" />
                <meta property="og:description" content="A showcase of full-stack engineering excellence and scalable web architectures." />
                <meta property="og:url" content="https://charankuramana.me/projects" />
            </Helmet>
            {/* Animated Background */}
            <div className="pointer-events-none fixed inset-0 z-0 opacity-10 dark:opacity-30">
                <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-gradient-to-br from-indigo-600/80 to-transparent top-[-100px] left-[-100px] animate-[float_20s_ease-in-out_infinite]" />
                <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-gradient-to-br from-purple-600/80 to-transparent bottom-[-150px] right-[-150px] animate-[float_20s_ease-in-out_10s_infinite]" />
            </div>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50"
                style={{ width: '100%', scaleX: 0, transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
            />

            <main className="container max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Hero/Header */}
                <header className="pt-24 pb-10 text-center relative overflow-hidden">
                    {/* Background Beams inside the hero container */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <BackgroundBeams className="text-indigo-500/20" />
                    </div>

                    <div className="relative z-10">
                        <motion.h1
                            className="font-display text-4xl md:text-6xl font-extrabold bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-slate-100 dark:to-indigo-300 bg-clip-text text-transparent mb-4 tracking-tight"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Project Portfolio
                        </motion.h1>
                        <div className="divider w-20 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto my-6 animate-pulse rounded-full" />
                        <motion.p
                            className="subtitle text-lg text-slate-600 dark:text-slate-400 font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Full-Stack Development • Healthcare • Microservices • Cloud Solutions
                        </motion.p>
                    </div>
                </header>

                {/* Stats Section */}
                <section className="stats grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 my-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            className="stat-card bg-white dark:bg-gradient-to-br dark:from-[#151934] dark:to-[#1a1f3a] p-8 rounded-xl border border-slate-200 dark:border-white/5 text-center relative overflow-hidden shadow-lg dark:shadow-none transition-all duration-300"
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                        >
                            <div className="stat-number text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">{stat.number}</div>
                            <div className="stat-label text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </section>

                {/* Projects Grid */}
                <section className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                    {projectsData.map((project, idx) => (
                        <motion.article
                            className="project-card bg-white dark:bg-[#151934] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-lg hover:shadow-xl dark:shadow-none hover:-translate-y-2 transition-all duration-300 relative flex flex-col group"
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
                        >
                            <Link to={`/projects/${project.id}`} className="flex flex-col flex-1 h-full">
                                <div className="project-header p-8 bg-slate-50 dark:bg-gradient-to-br dark:from-[#1a1f3a] dark:to-[#151934] relative overflow-hidden border-b border-slate-100 dark:border-white/5">
                                    <span className="project-duration inline-block bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 px-4 py-1 rounded-full text-xs font-medium border border-indigo-200 dark:border-indigo-500 mb-4">
                                        {project.duration}
                                    </span>
                                    <h2 className="project-title font-display text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="project-company text-indigo-600 dark:text-yellow-400 text-sm font-medium">{project.company}</p>
                                </div>
                                <div className="project-body p-8 flex-1 flex flex-col">
                                    <p className="project-description text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <ul className="project-highlights list-none mb-4">
                                        {project.highlights.slice(0, 3).map((h, i) => (
                                            <li key={i} className="relative pl-6 text-slate-500 dark:text-slate-400 text-sm mb-1 line-clamp-1">
                                                <span className="absolute left-0 text-indigo-500 dark:text-indigo-300 font-bold">▹</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="skills-container flex flex-wrap gap-2 pt-4 mt-auto border-t border-slate-100 dark:border-white/5">
                                        {project.skills.slice(0, 4).map((skill) => (
                                            <span
                                                key={skill}
                                                className="skill-tag bg-slate-100 dark:bg-indigo-500/15 text-slate-600 dark:text-indigo-300 px-3 py-1 rounded-md text-xs font-medium border border-slate-200 dark:border-indigo-500/30 hover:bg-white dark:hover:bg-indigo-500/30 hover:border-indigo-200 dark:hover:border-indigo-500 transition-all duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {project.skills.length > 4 && (
                                            <span className="text-xs text-slate-400 self-center">+{project.skills.length - 4} more</span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </section>

                {/* Footer for this page only (not global) */}
                <footer className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-white/5">
                    <p>
                        Crafted with <span className="heart text-red-500 animate-pulse">♥</span> by a passionate developer
                    </p>
                    <p className="mt-2 opacity-70">Transforming ideas into elegant solutions</p>
                </footer>
            </main>
        </div>
    );
}
