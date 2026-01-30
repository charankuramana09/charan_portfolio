

import React, { useState, useEffect } from 'react';
import { ExternalLink, MoreVertical, Github, Eye, Star, Code, Zap, Database, Cloud, Sparkles } from 'lucide-react';

const EnhancedProjects = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [starredProjects, setStarredProjects] = useState<{ [key: number]: boolean }>({});
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Employee Management System',
            description: 'A comprehensive system for managing employee data, roles, and departments with authentication and CRUD operations.',
            gradient: 'from-purple-500 to-indigo-600',
            icon: Database,
            tags: ['Spring Boot', 'REST APIs', 'MySQL', 'Bootstrap'],
            github: '#',
            demo: '#',
            stars: 24
        },
        {
            id: 2,
            title: 'Enterprise Web Application',
            description: 'Scalable web application with microservices architecture, JWT authentication, and real-time processing.',
            gradient: 'from-blue-500 to-cyan-600',
            icon: Cloud,
            tags: ['Java', 'React', 'Microservices', 'Docker'],
            github: '#',
            demo: '#',
            stars: 31
        },
        {
            id: 3,
            title: 'Industrial UI Dashboard',
            description: 'WPF desktop application with real-time machine interaction and monitoring for industrial use.',
            gradient: 'from-violet-500 to-purple-600',
            icon: Zap,
            tags: ['C#', 'WPF', '.NET', 'SQL Server'],
            github: '#',
            demo: '#',
            stars: 18
        },
        {
            id: 4,
            title: 'API Integration Platform',
            description: 'RESTful API platform enabling seamless integration between services with comprehensive documentation.',
            gradient: 'from-indigo-500 to-blue-600',
            icon: Code,
            tags: ['Spring Boot', 'Swagger', 'JWT', 'Oracle'],
            github: '#',
            demo: '#',
            stars: 27
        }
    ];

    const toggleStar = (id: number) => {
        setStarredProjects(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Split into 2 rows, 2 cards per row
    const projectRows = [projects.slice(0, 2), projects.slice(2, 4)];

    return (
        <div className="min-h-screen bg-slate-950 py-20 px-4 overflow-hidden relative">
            {/* Advanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs with continuous animation */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float-slow"></div>
                </div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                {/* Animated gradient mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 animate-gradient-shift"></div>
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 10}s`
                        }}
                    ></div>
                ))}
                {/* Mouse follower gradient */}
                <div
                    className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        transform: 'translate(-50%, -50%)'
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Header Section */}
                <div className="text-center mb-20 relative">
                    {/* Decorative elements */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse"></div>
                    <div className="inline-block mb-6 relative group">
                        {/* Animated border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 animate-gradient-xy"></div>
                        <span className="relative flex items-center gap-2 text-sm font-semibold text-purple-300 tracking-widest uppercase bg-slate-900/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                            Projects
                            <Sparkles className="w-4 h-4 animate-spin-slow-reverse" />
                        </span>
                    </div>
                    {/* Main Heading with advanced effects */}
                    <div className="relative inline-block mb-6">
                        {/* Glow effect behind text */}
                        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-30 animate-pulse-slow"></div>
                        <h2 className="relative text-6xl md:text-7xl lg:text-8xl font-black mb-2">
                            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 animate-gradient-x">
                                Featured Work
                            </span>
                        </h2>
                        {/* Animated underline */}
                        <div className="relative h-1 mt-4 mx-auto max-w-md overflow-hidden rounded-full bg-slate-800">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-shimmer"></div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed relative">
                        A curated selection of projects showcasing my expertise in{' '}
                        <span className="text-purple-400 font-semibold animate-text-shine">full-stack development</span>
                        {' '}and{' '}
                        <span className="text-blue-400 font-semibold animate-text-shine-delayed">modern architecture</span>
                    </p>
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/20 rounded-tl-3xl animate-border-glow"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-blue-500/20 rounded-tr-3xl animate-border-glow-delayed"></div>
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
                                            animation: `slideUp 0.6s ease-out ${(rowIdx * 2 + index) * 0.15}s both`
                                        }}
                                    >
                                        {/* Continuous rotating border */}
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500 animate-gradient-xy`}></div>
                                        {/* Main Card */}
                                        <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 h-full flex flex-col shadow-2xl hover:shadow-purple-500/10">
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
                                                        className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${isStarred
                                                                ? 'bg-yellow-500/20 text-yellow-400 animate-bounce-subtle'
                                                                : 'bg-slate-800/80 text-gray-400 hover:bg-slate-700 hover:text-yellow-400'
                                                            }`}
                                                        title={isStarred ? "Unstar" : "Star this project"}
                                                    >
                                                        <Star className={`w-4 h-4 transition-transform duration-300 ${isStarred ? 'fill-current scale-110' : ''}`} />
                                                    </button>
                                                    {/* Menu Button */}
                                                    <button className="p-2 rounded-lg bg-slate-800/80 text-gray-400 hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Project Title & Description */}
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                                {project.description}
                                            </p>
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 text-gray-300 border border-slate-700/50 hover:border-purple-500/50 hover:text-purple-300 hover:bg-slate-700/80 transition-all duration-300 cursor-default transform hover:-translate-y-1"
                                                        style={{
                                                            animation: hoveredCard === project.id ? `tagFloat 0.6s ease-out ${idx * 0.1}s both` : 'none'
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            {/* Action Buttons */}
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                                                <div className="flex items-center gap-2 text-gray-400 text-sm group/stars">
                                                    <Star className="w-4 h-4 group-hover/stars:text-yellow-400 group-hover/stars:fill-current transition-all duration-300" />
                                                    <span className="font-semibold">{project.stars + (isStarred ? 1 : 0)}</span>
                                                </div>
                                                <div className="flex gap-3">
                                                    {/* GitHub Button */}
                                                    <button
                                                        onClick={() => window.open(project.github, '_blank')}
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/80 text-gray-300 hover:bg-slate-700 hover:text-white transition-all duration-300 group/btn transform hover:scale-105"
                                                        title="View source code"
                                                    >
                                                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                                                        <span className="text-sm font-medium">Code</span>
                                                    </button>
                                                    {/* Live Demo Button with pulse */}
                                                    <button
                                                        onClick={() => window.open(project.demo, '_blank')}
                                                        className={`relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn transform hover:scale-105 overflow-hidden`}
                                                        title="View live demo"
                                                    >
                                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                                                        <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                                                        <span className="text-sm font-medium relative z-10">Demo</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Hover overlay effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                                            {/* Scanning line effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
                                                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan"></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-16">
                    <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            View All Projects
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                    </button>
                </div>
            </div>
            {/* Animations and styles are injected inline for this section */}
            <style>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-30px, 30px) scale(1.1); }
                    66% { transform: translate(20px, -20px) scale(0.9); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(15px, 15px) scale(1.05); }
                }
                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 25s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 30s ease-in-out infinite;
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes gradient-xy {
                    0%, 100% { background-position: 0% 0%; }
                    25% { background-position: 100% 0%; }
                    50% { background-position: 100% 100%; }
                    75% { background-position: 0% 100%; }
                }
                @keyframes gradient-shift {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.2; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                .animate-gradient-xy {
                    background-size: 200% 200%;
                    animation: gradient-xy 6s ease infinite;
                }
                .animate-gradient-shift {
                    animation: gradient-shift 10s ease-in-out infinite;
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s ease-in-out infinite;
                }
                @keyframes particle {
                    0%, 100% { 
                        transform: translate(0, 0) scale(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                        transform: translate(0, 0) scale(1);
                    }
                    90% {
                        opacity: 1;
                    }
                    100% { 
                        transform: translate(var(--tx, 100px), var(--ty, -100px)) scale(0);
                        opacity: 0;
                    }
                }
                .animate-particle {
                    --tx: ${Math.random() * 200 - 100}px;
                    --ty: ${Math.random() * 200 - 100}px;
                    animation: particle 15s ease-in-out infinite;
                }
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(400%); }
                }
                .animate-scan {
                    animation: scan 3s ease-in-out infinite;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 8s linear infinite;
                }
                @keyframes text-shine {
                    0%, 100% { opacity: 1; filter: brightness(1); }
                    50% { opacity: 1; filter: brightness(1.3); }
                }
                .animate-text-shine {
                    animation: text-shine 2s ease-in-out infinite;
                }
                .animate-text-shine-delayed {
                    animation: text-shine 2s ease-in-out 0.5s infinite;
                }
                @keyframes border-glow {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.5; }
                }
                .animate-border-glow {
                    animation: border-glow 3s ease-in-out infinite;
                }
                .animate-border-glow-delayed {
                    animation: border-glow 3s ease-in-out 1s infinite;
                }
                @keyframes icon-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-icon-float {
                    animation: icon-float 2s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-2px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 1s ease-in-out infinite;
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes tagFloat {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-6px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default EnhancedProjects;

function spawnParticles(el: Element) {
    try {
        const wrapper = el.closest('.github-cta') as HTMLElement | null
        if (!wrapper) return
        const layer = wrapper.querySelector('.particle-layer') as HTMLElement
        if (!layer) return

        const count = 18
        const particles: HTMLElement[] = []
        for (let i = 0; i < count; i++) {
            const p = document.createElement('span')
            p.className = 'gh-particle'
            // random angle and radius
            const angle = Math.random() * Math.PI * 2
            const radius = 26 + Math.random() * 40
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            p.style.left = `calc(50% + ${x}px)`
            p.style.top = `calc(50% + ${y}px)`
            p.style.width = `${4 + Math.random() * 6}px`
            p.style.height = p.style.width
            p.style.opacity = `${0.6 + Math.random() * 0.4}`
            layer.appendChild(p)
            particles.push(p)

            // trigger orbit animation then rush to center
            // stagger timings
            const orbitDuration = 900 + Math.random() * 600
            p.style.animation = `gh-orbit ${orbitDuration}ms linear forwards ${i * 20}ms, gh-rush 600ms cubic-bezier(.2,.9,.3,1) forwards ${orbitDuration + i * 20}ms`
        }

        // cleanup
        setTimeout(() => {
            particles.forEach((p) => p.remove())
        }, 2500)
    } catch (err) {
        // ignore
    }
}
