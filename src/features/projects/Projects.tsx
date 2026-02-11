import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Star, Code, Zap, Database, Cloud, Sparkles } from 'lucide-react';
import { projects as portfolioProjects } from '../../data/portfolio';

const EnhancedProjects = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [starredProjects, setStarredProjects] = useState<{ [key: number]: boolean }>({});

    const gradientMap: { [key: number]: string } = {
        0: 'from-purple-500 to-indigo-600',
        1: 'from-blue-500 to-cyan-600',
        2: 'from-violet-500 to-purple-600',
        3: 'from-indigo-500 to-blue-600'
    };

    const iconSequence = [Database, Cloud, Zap, Code];

    const projects = portfolioProjects.map((p, i) => ({
        id: i + 1,
        title: p.title,
        description: p.desc,
        gradient: gradientMap[i % 4],
        icon: iconSequence[i % 4],
        tags: p.tech,
        github: p.github,
        demo: p.demo,
        stars: 10 + (i * 7) // Mock stars or fetch from API later
    }));

    const toggleStar = (id: number) => {
        setStarredProjects(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Split into 2 rows, 2 cards per row
    const projectRows = [projects.slice(0, 2), projects.slice(2, 4)];

    return (
        <section id="projects" className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-4 overflow-hidden relative transition-colors duration-300">
            {/* Advanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs with continuous animation */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl animate-float-slow"></div>
                </div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Header Section */}
                <div className="text-center mb-20 relative">
                    {/* Decorative elements */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse"></div>
                    <div className="inline-block mb-6 relative group">
                        {/* Animated border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 animate-gradient-xy"></div>
                        <span className="relative flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-300 tracking-widest uppercase bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                            Projects
                            <Sparkles className="w-4 h-4 animate-spin-slow-reverse" />
                        </span>
                    </div>
                    {/* Main Heading with advanced effects */}
                    <div className="relative flex flex-col items-center gap-6 mb-6">
                        <div className="relative">
                            {/* Glow effect behind text */}
                            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-20 dark:opacity-30 animate-pulse-slow"></div>
                            <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black dark:text-white text-slate-900">
                                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 animate-gradient-x">
                                    Featured Work
                                </span>
                            </h2>
                        </div>


                    </div>
                    <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed relative">
                        A curated selection of projects showcasing my expertise in{' '}
                        <span className="text-purple-600 dark:text-purple-400 font-semibold animate-text-shine">full-stack development</span>
                        {' '}and{' '}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold animate-text-shine-delayed">modern architecture</span>
                    </p>
                </div>

                {/* Projects Grid: 2 rows, 2 cards per row */}
                <div className="grid grid-rows-2 gap-8">
                    {projectRows.map((row, rowIdx) => (
                        <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {row.map((project, index) => {
                                const IconComponent = project.icon;
                                const isStarred = starredProjects[project.id];
                                return (
                                    <div
                                        key={project.id}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredCard(project.id)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        style={{
                                            animation: `slideUp 0.85s ease-out ${(rowIdx * 2 + index) * 0.22}s both`
                                        }}
                                    >
                                        {/* Continuous rotating border */}
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500 animate-gradient-xy`}></div>
                                        {/* Main Card */}
                                        <div className="relative bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col shadow-lg dark:shadow-2xl hover:shadow-purple-500/10">
                                            {/* Animated corner accents */}
                                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-tl-2xl transition-all duration-500"></div>
                                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-br-2xl transition-all duration-500"></div>
                                            {/* Card Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`relative p-3 rounded-xl bg-gradient-to-r ${project.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                                    <IconComponent className="w-6 h-6 text-white animate-icon-float" />
                                                    {/* Icon glow */}
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                                                </div>
                                                <div className="flex gap-2">
                                                    {/* Star Button with animation */}
                                                    <button
                                                        onClick={() => toggleStar(project.id)}
                                                        className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 focus-ring ${isStarred
                                                            ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 animate-bounce-subtle'
                                                            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-yellow-500 dark:hover:text-yellow-400'
                                                            }`}
                                                        aria-label={isStarred ? "Remove star from project" : "Star this project"}
                                                        title={isStarred ? "Unstar" : "Star this project"}
                                                    >
                                                        <Star className={`w-4 h-4 transition-transform duration-300 ${isStarred ? 'fill-current scale-110' : ''}`} />
                                                    </button>
                                                    {/* Menu Button */}
                                                    <button
                                                        onClick={() => {
                                                            if (project.demo && project.demo !== '#') {
                                                                window.open(project.demo, '_blank', 'noopener,noreferrer');
                                                            }
                                                        }}
                                                        className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110 focus-ring ${project.demo && project.demo !== '#' ? 'hover:rotate-6' : 'opacity-60 cursor-not-allowed'}`}
                                                        aria-label="Open live demo"
                                                        title={project.demo && project.demo !== '#' ? 'Open live demo' : 'Demo not available'}
                                                    >
                                                        <ExternalLink className="w-4 h-4 animate-icon-float" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Project Title & Description */}
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                                                {project.description}
                                            </p>
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-white dark:hover:bg-slate-700/80 transition-all duration-300 cursor-default transform hover:-translate-y-1"
                                                        style={{
                                                            animation: hoveredCard === project.id ? `tagFloat 0.6s ease-out ${idx * 0.1}s both` : 'none'
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {/* Action Buttons */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                                <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm group/stars">
                                                    <Star className="w-4 h-4 group-hover/stars:text-yellow-500 dark:group-hover/stars:text-yellow-400 group-hover/stars:fill-current transition-all duration-300" />
                                                    <span className="font-semibold">{project.stars + (isStarred ? 1 : 0)}</span>
                                                </div>
                                                <div className="flex gap-3">
                                                    {/* GitHub Button */}
                                                    <button
                                                        onClick={() => window.open(project.github, '_blank')}
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group/btn transform hover:scale-105 focus-ring"
                                                        aria-label={`View ${project.title} source code on GitHub`}
                                                        title="View source code"
                                                    >
                                                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                                                        <span className="text-sm font-medium">Code</span>
                                                    </button>
                                                    {/* Live Demo Button with pulse */}
                                                    <button
                                                        onClick={() => {
                                                            window.location.href = `/projects`;
                                                        }}
                                                        className={`relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn transform hover:scale-105 overflow-hidden focus-ring`}
                                                        aria-label="View projects page"
                                                        title="View projects"
                                                    >
                                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                                                        <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                                                        <span className="text-sm font-medium relative z-10">View</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            {/* Animations moved to src/styles/index.css for performance */}
        </section >
    );
};

export default EnhancedProjects;
