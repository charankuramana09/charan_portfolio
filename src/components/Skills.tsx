
import React, { useEffect, useMemo, useState } from 'react';
import AnimatedSkillsGrid from './AnimatedSkillsGrid';
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

const Skills: React.FC = () => {
    const highlighted = useMemo(() => {
        return Array.from(new Set(LIVE_SKILLS)).slice(0, 10);
    }, []);
    const [live, setLive] = useState(() => highlighted.map((s, i) => ({ id: i, label: s, color: COLORS[i % COLORS.length] })));

    useEffect(() => {
        const id = setInterval(() => {
            setLive((prev) => shuffle(prev));
        }, 1200);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="skills" className="py-16 md:py-24 bg-slate-950 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-100 mb-10 tracking-tight">
                    Skills
                </h2>
                {/* Live animated skills grid */}
                <div className="mb-10">
                    <div className="text-center text-slate-400 text-base mb-2">Live Skills</div>
                    <ul className="flex flex-wrap justify-center gap-4">
                        {live.map((it) => (
                            <li
                                key={it.id}
                                style={{ background: it.color, transition: 'background 0.4s, transform 0.3s', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                                className="rounded-lg px-5 py-3 text-white font-semibold text-base hover:scale-105 hover:shadow-lg duration-300 cursor-pointer select-none"
                            >
                                {it.label}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 5 animated skill cards row */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-6xl mx-auto">
                    {/* Frontend Card */}
                    <div className="card bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-400/10 relative overflow-hidden transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="card-header flex items-center gap-4 mb-6 relative z-10">
                            <div className="icon-wrapper w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center animate-pulse relative overflow-hidden">
                                <div className="icon w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="card-title text-slate-100 text-xl font-semibold">Frontend</h2>
                        </div>
                        <div className="skills-list flex flex-wrap gap-3 relative z-10">
                            {[
                                'React',
                                'TypeScript',
                                'Angular',
                                'Tailwind CSS',
                                'HTML',
                                'CSS',
                                'JavaScript',
                            ].map((name, idx) => {
                                const brand = brandSkills.find(s => s.name === name);
                                const color = brand?.color || '#6366f1';
                                return (
                                    <span
                                        key={name}
                                        className="skill-tag flex items-center gap-2 font-medium px-3 py-1 rounded-md transition-all duration-300 transform hover:scale-105 shadow group cursor-pointer"
                                        style={{
                                            background: color + '20',
                                            border: `1px solid ${color}30`,
                                            color,
                                            animationDelay: `${0.1 + idx * 0.05}s`,
                                            animationName: 'floatIn',
                                            animationFillMode: 'backwards',
                                        }}
                                    >
                                        <span
                                            className="skill-icon w-4 h-4 rounded transition-transform duration-300"
                                            style={{
                                                background: color,
                                                animation: 'rotate 4s linear infinite',
                                            }}
                                        ></span>
                                        {name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    {/* Backend Card */}
                    <div className="card bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-400/10 relative overflow-hidden transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="card-header flex items-center gap-4 mb-6 relative z-10">
                            <div className="icon-wrapper w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center animate-pulse relative overflow-hidden">
                                <div className="icon w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="card-title text-slate-100 text-xl font-semibold">Backend</h2>
                        </div>
                        <div className="skills-list flex flex-wrap gap-3 relative z-10">
                            {[
                                'Java',
                                'Spring Boot',
                                'Microservices',
                                'REST APIs',
                                'JWT Authentication',
                                '.NET (C#)',
                            ].map((name, idx) => {
                                const brand = brandSkills.find(s => s.name === name);
                                const color = brand?.color || '#6366f1';
                                return (
                                    <span
                                        key={name}
                                        className="skill-tag flex items-center gap-2 font-medium px-3 py-1 rounded-md transition-all duration-300 transform hover:scale-105 shadow group cursor-pointer"
                                        style={{
                                            background: color + '20',
                                            border: `1px solid ${color}30`,
                                            color,
                                            animationDelay: `${0.1 + idx * 0.05}s`,
                                            animationName: 'floatIn',
                                            animationFillMode: 'backwards',
                                        }}
                                    >
                                        <span
                                            className="skill-icon w-4 h-4 rounded transition-transform duration-300"
                                            style={{
                                                background: color,
                                                animation: 'rotate 4s linear infinite',
                                            }}
                                        ></span>
                                        {name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    {/* Database Card */}
                    <div className="card bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-400/10 relative overflow-hidden transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="card-header flex items-center gap-4 mb-6 relative z-10">
                            <div className="icon-wrapper w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center animate-pulse relative overflow-hidden">
                                <div className="icon w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="card-title text-slate-100 text-xl font-semibold">Database</h2>
                        </div>
                        <div className="skills-list flex flex-wrap gap-3 relative z-10">
                            {[
                                'MySQL',
                                'Oracle',
                                'Cosmos DB',
                            ].map((name, idx) => {
                                const brand = brandSkills.find(s => s.name === name);
                                const color = brand?.color || '#6366f1';
                                return (
                                    <span
                                        key={name}
                                        className="skill-tag flex items-center gap-2 font-medium px-3 py-1 rounded-md transition-all duration-300 transform hover:scale-105 shadow group cursor-pointer"
                                        style={{
                                            background: color + '20',
                                            border: `1px solid ${color}30`,
                                            color,
                                            animationDelay: `${0.1 + idx * 0.05}s`,
                                            animationName: 'floatIn',
                                            animationFillMode: 'backwards',
                                        }}
                                    >
                                        <span
                                            className="skill-icon w-4 h-4 rounded transition-transform duration-300"
                                            style={{
                                                background: color,
                                                animation: 'rotate 4s linear infinite',
                                            }}
                                        ></span>
                                        {name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    {/* DevOps & Tools Card */}
                    <div className="card bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-400/10 relative overflow-hidden transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="card-header flex items-center gap-4 mb-6 relative z-10">
                            <div className="icon-wrapper w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center animate-pulse relative overflow-hidden">
                                <div className="icon w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="card-title text-slate-100 text-xl font-semibold">DevOps & Tools</h2>
                        </div>
                        <div className="skills-list flex flex-wrap gap-3 relative z-10">
                            {[
                                'Git & GitHub',
                                'Docker',
                                'Kubernetes',
                                'CI/CD Pipelines',
                                'Zoho Creator',
                                'Agile / Scrum',
                            ].map((name, idx) => {
                                const brand = brandSkills.find(s => s.name === name);
                                const color = brand?.color || '#6366f1';
                                return (
                                    <span
                                        key={name}
                                        className="skill-tag flex items-center gap-2 font-medium px-3 py-1 rounded-md transition-all duration-300 transform hover:scale-105 shadow group cursor-pointer"
                                        style={{
                                            background: color + '20',
                                            border: `1px solid ${color}30`,
                                            color,
                                            animationDelay: `${0.1 + idx * 0.05}s`,
                                            animationName: 'floatIn',
                                            animationFillMode: 'backwards',
                                        }}
                                    >
                                        <span
                                            className="skill-icon w-4 h-4 rounded transition-transform duration-300"
                                            style={{
                                                background: color,
                                                animation: 'rotate 4s linear infinite',
                                            }}
                                        ></span>
                                        {name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    {/* Zoho Creator Card */}
                    <div className="card bg-slate-800/80 backdrop-blur rounded-2xl p-6 border border-slate-400/10 relative overflow-hidden transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="card-header flex items-center gap-4 mb-6 relative z-10">
                            <div className="icon-wrapper w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center animate-pulse relative overflow-hidden">
                                <div className="icon w-6 h-6 bg-white rounded-md"></div>
                            </div>
                            <h2 className="card-title text-slate-100 text-xl font-semibold">Zoho Creator</h2>
                        </div>
                        <div className="skills-list flex flex-wrap gap-3 relative z-10">
                            {[
                                'Forms',
                                'Pages',
                                'Workflows',
                                'Html snippets',
                                'Widgets',
                                'Custom API',
                                'Portal users',
                            ].map((name, idx) => {
                                const brand = brandSkills.find(s => s.name === name);
                                const color = brand?.color || '#6366f1';
                                return (
                                    <span
                                        key={name}
                                        className="skill-tag flex items-center gap-2 font-medium px-3 py-1 rounded-md transition-all duration-300 transform hover:scale-105 shadow group cursor-pointer"
                                        style={{
                                            background: color + '20',
                                            border: `1px solid ${color}30`,
                                            color,
                                            animationDelay: `${0.1 + idx * 0.05}s`,
                                            animationName: 'floatIn',
                                            animationFillMode: 'backwards',
                                        }}
                                    >
                                        <span
                                            className="skill-icon w-4 h-4 rounded transition-transform duration-300"
                                            style={{
                                                background: color,
                                                animation: 'rotate 4s linear infinite',
                                            }}
                                        ></span>
                                        {name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
