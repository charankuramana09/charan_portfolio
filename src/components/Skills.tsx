import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import {
    Code2,
    Database,
    Server,
    Layout,
    Cpu,
    Cloud,
    Settings,
    Zap,
    CheckCircle2
} from 'lucide-react';
import { skills as brandSkills } from './skills.data';

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

const shuffle = <T,>(arr: T[]): T[] => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

interface SkillCardProps {
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    skills: string[];
    delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, iconColor, skills, delay = 0 }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-slate-900/40 backdrop-blur-sm rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden h-full"
        >
            {/* Spotlight Effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${iconColor}15, transparent 40%)`,
                }}
            />

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ backgroundColor: `${iconColor}20`, color: iconColor }}
                    >
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => {
                        const brand = brandSkills.find(s => s.name === skill);
                        const color = brand?.color || '#94a3b8';

                        return (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: delay + (idx * 0.05) }}
                                className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105 cursor-default bg-slate-800/50"
                                style={{
                                    borderColor: `${color}30`,
                                    color: color,
                                    borderWidth: '1px'
                                }}
                            >
                                {skill}
                            </motion.span>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Glow */}
            <div
                className="absolute -bottom-24 -right-24 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: iconColor }}
            />
        </motion.div>
    );
};

const Skills: React.FC = () => {
    const highlighted = useMemo(() => {
        return Array.from(new Set(LIVE_SKILLS)).slice(0, 10);
    }, []);
    const [live, setLive] = useState(() => highlighted.map((s, i) => ({ id: i, label: s, color: COLORS[i % COLORS.length] })));

    useEffect(() => {
        const id = setInterval(() => {
            setLive((prev) => shuffle(prev));
        }, 3000); // Slower shuffle for better readability
        return () => clearInterval(id);
    }, []);

    const skillCategories = [
        {
            title: "Frontend",
            icon: <Layout size={24} />,
            color: "#6366f1",
            skills: ['React', 'TypeScript', 'Angular', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript']
        },
        {
            title: "Backend",
            icon: <Server size={24} />,
            color: "#10b981",
            skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'JWT Authentication', '.NET (C#)']
        },
        {
            title: "Database",
            icon: <Database size={24} />,
            color: "#f59e0b",
            skills: ['MySQL', 'Oracle', 'Cosmos DB', 'PostgreSQL', 'Redis']
        },
        {
            title: "DevOps",
            icon: <Cloud size={24} />,
            color: "#a855f7",
            skills: ['Git & GitHub', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Agile / Scrum']
        },
        {
            title: "Platform",
            icon: <Cpu size={24} />,
            color: "#ef4444",
            skills: ['Zoho Creator', 'Deluge Script', 'API Integration', 'Workflows', 'Portal Dev']
        }
    ];

    return (
        <section id="skills" className="py-24 relative bg-slate-950 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[120px] rounded-full animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        A comprehensive ecosystem of tools and technologies I use to bring complex ideas to life.
                    </motion.p>
                </div>

                {/* Live Skills - Smoother layout transitions */}
                <div className="mb-20">
                    <div className="flex flex-center justify-center items-center gap-2 mb-8">
                        <Zap size={16} className="text-yellow-400 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Live Skill Matrix</span>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <LayoutGroup>
                            <motion.ul layout className="flex flex-wrap justify-center gap-3">
                                <AnimatePresence mode="popLayout">
                                    {live.map((it) => (
                                        <motion.li
                                            key={it.label}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            style={{
                                                backgroundColor: `${it.color}20`,
                                                borderColor: `${it.color}40`,
                                                color: it.color
                                            }}
                                            className="px-5 py-2 rounded-xl font-bold text-sm border shadow-lg shadow-black/20 group cursor-default"
                                        >
                                            <span className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: it.color }} />
                                                {it.label}
                                            </span>
                                        </motion.li>
                                    ))}
                                </AnimatePresence>
                            </motion.ul>
                        </LayoutGroup>
                    </div>
                </div>

                {/* Main Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
                    {skillCategories.map((cat, idx) => (
                        <SkillCard
                            key={cat.title}
                            title={cat.title}
                            icon={cat.icon}
                            iconColor={cat.color}
                            skills={cat.skills}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>

                {/* Core Proficiencies */}
                <div className="max-w-5xl mx-auto pt-16 border-t border-white/5">
                    <div className="flex flex-col items-center mb-16">
                        <CheckCircle2 size={32} className="text-emerald-500 mb-4" />
                        <h3 className="text-2xl font-bold text-white uppercase tracking-widest text-center">Core Proficiencies</h3>
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {[
                            { name: 'Java & Spring Boot', level: 90, color: '#f89820' },
                            { name: 'React & TypeScript', level: 85, color: '#61dafb' },
                            { name: 'Microservices Architecture', level: 80, color: '#10b981' },
                            { name: 'Database Management', level: 85, color: '#336791' },
                            { name: 'DevOps & CI/CD', level: 75, color: '#a855f7' },
                            { name: 'Zoho Creator Platform', level: 95, color: '#ef4444' },
                        ].map((stat, idx) => (
                            <div key={stat.name} className="relative group">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-slate-300 font-bold text-sm tracking-wide group-hover:text-white transition-colors">
                                        {stat.name}
                                    </span>
                                    <span className="text-slate-500 text-xs font-mono bg-slate-900 px-2 py-0.5 rounded border border-white/5">
                                        {stat.level}%
                                    </span>
                                </div>
                                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 p-[1px]">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${stat.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: idx * 0.1 }}
                                        className="h-full rounded-full relative"
                                        style={{ backgroundColor: stat.color }}
                                    >
                                        <motion.div
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        />
                                    </motion.div>
                                </div>
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute -inset-2 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-xl blur-lg"
                                    style={{ backgroundColor: stat.color }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
