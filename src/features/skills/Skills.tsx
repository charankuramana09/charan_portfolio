import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    Database,
    Server,
    Layout,
    Cpu,
    Cloud,
    Zap,
    CheckCircle2
} from 'lucide-react';
import { strings } from '../../data/strings';
import SkillCard from './components/SkillCard';
import SkillMatrix from './components/SkillMatrix';
import CosmicWavesBackdrop from '../../shared/components/ui/CosmicWavesBackdrop';

const LIVE_SKILLS = [
    'React', 'TypeScript', 'Angular', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript',
    'Java', 'Spring Boot', 'Microservices', 'REST APIs', 'JWT Authentication', '.NET (C#)',
    'MySQL', 'Oracle', 'Cosmos DB',
    'Git & GitHub', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Zoho Creator', 'Agile / Scrum',
];

const COLORS = [
    '#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#f97316', '#a3e635',
    '#0ea5e9', '#f43f5e', '#facc15', '#14b8a6', '#eab308', '#22d3ee', '#f472b6', '#a21caf',
];

const Skills: React.FC = () => {
    const liveData = useMemo(() => {
        const highlighted = Array.from(new Set(LIVE_SKILLS)).slice(0, 10);
        return highlighted.map((s, i) => ({ label: s, color: COLORS[i % COLORS.length] }));
    }, []);

    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout size={24} aria-hidden="true" />,
            color: "#6366f1",
            skills: ['React', 'TypeScript', 'Angular', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript']
        },
        {
            title: "Backend",
            icon: <Server size={24} aria-hidden="true" />,
            color: "#10b981",
            skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'JWT Authentication', '.NET (C#)']
        },
        {
            title: "Database",
            icon: <Database size={24} aria-hidden="true" />,
            color: "#f59e0b",
            skills: ['MySQL', 'Oracle', 'Cosmos DB', 'PostgreSQL', 'Redis']
        },
        {
            title: "DevOps",
            icon: <Cloud size={24} aria-hidden="true" />,
            color: "#a855f7",
            skills: ['Git & GitHub', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Agile / Scrum']
        },
        {
            title: "Platform",
            icon: <Cpu size={24} aria-hidden="true" />,
            color: "#ef4444",
            skills: ['Zoho Creator', 'Deluge Script', 'API Integration', 'Workflows', 'Portal Dev']
        }
    ];

    return (
        <section id="skills" className="py-24 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20" aria-hidden="true">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[120px] rounded-full animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight uppercase"
                    >
                        {strings.skills.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">{strings.skills.highlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 dark:text-slate-400 text-lg font-medium"
                    >
                        {strings.skills.description}
                    </motion.p>
                </div>

                {/* Live Skills */}
                <div className="mb-20">
                    <div className="flex flex-center justify-center items-center gap-2 mb-8">
                        <Zap size={16} className="text-yellow-400 animate-pulse" aria-hidden="true" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Live Skill Matrix</span>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <SkillMatrix skills={liveData} />
                    </div>
                </div>

                {/* Main Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 auto-rows-fr items-stretch mb-24" role="list">
                    {skillCategories.map((cat, idx) => (
                        <div key={cat.title} role="listitem" className="min-w-0 h-full">
                            <SkillCard
                                title={cat.title}
                                icon={cat.icon}
                                iconColor={cat.color}
                                skills={cat.skills}
                                delay={idx * 0.1}
                                enterFrom={idx === 4 ? 'bottom' : idx % 2 === 0 ? 'left' : 'right'}
                            />
                        </div>
                    ))}
                </div>

                {/* Core Proficiencies */}
                <section className="proficiencies-section mt-10 w-full relative left-0 right-0 mx-0 sm:w-screen sm:left-1/2 sm:right-1/2 sm:-mx-[50vw]" aria-label={strings.skills.proficiencies}>
                    <div className="animated-background" aria-hidden="true">
                        <div className="wave-container">
                            <div className="wave" />
                            <div className="wave" />
                            <div className="wave" />
                        </div>

                        <div className="blob blob-1" />
                        <div className="blob blob-2" />
                        <div className="blob blob-3" />

                        <div className="hexagon-pattern">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={`hex-${i}`}
                                    className="hexagon"
                                    style={{
                                        left: `${(i * 8 + 5) % 100}%`,
                                        top: `${(i * 13 + 7) % 100}%`,
                                        animationDelay: `${(i % 6) * 0.6}s`,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="cube-container">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={`cube-${i}`}
                                    className="cube"
                                    style={{
                                        left: `${(i * 11 + 12) % 100}%`,
                                        top: `${(i * 17 + 8) % 100}%`,
                                        animationDelay: `${(i % 5) * 1.2}s`,
                                        animationDuration: `${18 + (i % 5) * 2}s`,
                                    }}
                                >
                                    {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
                                        <div key={face} className={`cube-face cube-face-${face}`} />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="ring-container">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={`ring-${i}`}
                                    className="ring"
                                    style={{
                                        left: `${(i * 23 + 10) % 100}%`,
                                        top: `${(i * 19 + 15) % 100}%`,
                                        animationDelay: `${i * 1.8}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="content-container">
                        <div className="header">
                            <div className="check-icon" aria-hidden="true" />
                            <h3 className="proficiencies-title">
                                <span className="proficiencies-title-text">{strings.skills.proficiencies}</span>
                            </h3>
                            <div className="title-underline" aria-hidden="true" />
                        </div>

                        <div className="skills-grid">
                            {[
                                { name: 'Java & Spring Boot', level: 90 },
                                { name: 'React & TypeScript', level: 85 },
                                { name: 'Microservices Architecture', level: 80 },
                                { name: 'Database Management', level: 85 },
                                { name: 'DevOps & CI/CD', level: 75 },
                                { name: 'Zoho Creator Platform', level: 95 },
                            ].map((stat, idx) => (
                                <div
                                    key={stat.name}
                                    className="skill-card"
                                    role="progressbar"
                                    aria-valuenow={stat.level}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    aria-label={`${stat.name} proficiency`}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                                        e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                                        e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.removeProperty('--mouse-x');
                                        e.currentTarget.style.removeProperty('--mouse-y');
                                    }}
                                >
                                    <div className="skill-header">
                                        <div className="skill-title">
                                            <div className="skill-name">{stat.name}</div>
                                            <div className="skill-percentage">{stat.level}%</div>
                                        </div>
                                        <div className="skill-icon" aria-hidden="true" />
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" style={{ width: `${stat.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default React.memo(Skills);
