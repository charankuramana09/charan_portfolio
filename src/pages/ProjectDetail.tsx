import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle, FiCalendar, FiMapPin, FiStar, FiGitBranch } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import { Helmet } from 'react-helmet-async';

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => navigate('/projects')} className="text-indigo-600 hover:underline">
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pt-32 pb-20">
            <Helmet>
                <title>{project.title} — Project Showcase</title>
                <meta name="description" content={project.description} />
            </Helmet>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-12 group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                                {project.description}
                            </p>

                            {project.image && (
                                <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl border border-slate-200 dark:border-white/5">
                                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                                </div>
                            )}

                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Key Contributions & Highlights</h2>
                            <div className="grid gap-4 mb-16">
                                {project.highlights.map((h, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                                        <FiCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                                        <p className="text-slate-700 dark:text-slate-300">{h}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/20"
                        >
                            <h3 className="text-lg font-bold mb-6 text-indigo-900 dark:text-indigo-100">Project Info</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <FiCalendar className="text-indigo-500" />
                                    <div>
                                        <div className="text-xs uppercase tracking-wider font-bold opacity-50">Timeline</div>
                                        <div className="text-sm font-medium">{project.duration}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <FiMapPin className="text-indigo-500" />
                                    <div>
                                        <div className="text-xs uppercase tracking-wider font-bold opacity-50">Client/Company</div>
                                        <div className="text-sm font-medium">{project.company}</div>
                                    </div>
                                </div>

                                {(project.stars !== undefined || project.forks !== undefined) && (
                                    <div className="flex items-center gap-6 pt-2">
                                        {project.stars !== undefined && (
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <FiStar className="text-yellow-500 fill-yellow-500/20" />
                                                <span className="text-sm font-bold">{project.stars} Stars</span>
                                            </div>
                                        )}
                                        {project.forks !== undefined && (
                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <FiGitBranch className="text-indigo-500" />
                                                <span className="text-sm font-bold">{project.forks} Forks</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-8 border-t border-indigo-200 dark:border-indigo-500/20">
                                <h4 className="text-xs uppercase tracking-wider font-bold text-indigo-900/50 dark:text-indigo-100/50 mb-4">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map(s => (
                                        <span key={s} className="px-3 py-1 rounded-lg bg-white dark:bg-white/10 text-xs font-medium text-indigo-700 dark:text-indigo-300 shadow-sm">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                {project.website && (
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25"
                                    >
                                        Live Preview <FiExternalLink />
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-black transition-all"
                                    >
                                        Source Code <FiGithub />
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg">
                            <h3 className="text-lg font-bold mb-4">Need a similar solution?</h3>
                            <p className="text-sm text-slate-500 mb-6">I'm available for new opportunities and freelance collaborations.</p>
                            <Link to="/" className="text-indigo-600 font-bold hover:underline">Get in touch →</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
