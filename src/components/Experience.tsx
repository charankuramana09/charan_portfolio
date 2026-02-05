import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Briefcase, Code, Settings, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Link } from 'react-router-dom';

// floating orbs background component
const FloatingOrbs = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] blur-[80px] opacity-10 dark:opacity-20"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#f093fb] to-[#f5576c] blur-[80px] opacity-10 dark:opacity-20"
            />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#4facfe] to-[#00f2fe] blur-[80px] opacity-10 dark:opacity-20 transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
};

// 3D Tilt Card Component
const ExperienceCard = ({ exp, index, isLeft }: { exp: any, index: number, isLeft: boolean }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX - width / 2;
        const yPct = mouseY - height / 2;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const getIcon = (company: string) => {
        if (company.toLowerCase().includes('isign')) return <Briefcase size={28} />;
        if (company.toLowerCase().includes('sathya')) return <Code size={28} />;
        if (company.toLowerCase().includes('ataritech')) return <Settings size={28} />;
        return <Briefcase size={28} />;
    };

    const getGradientClass = (idx: number) => {
        const gradients = [
            'from-[#667eea] to-[#764ba2]',
            'from-[#f093fb] to-[#f5576c]',
            'from-[#4facfe] to-[#00f2fe]'
        ];
        return gradients[idx % gradients.length];
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex w-full mb-16 relative ${isLeft ? 'justify-start lg:pr-14' : 'justify-end lg:pl-14'} lg:flex-row`}
        >
            {/* Timeline Dot */}
            <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-slate-50 dark:border-[#0a0e27] bg-gradient-to-br from-[#667eea] to-[#764ba2] z-10 shadow-[0_0_0_4px_rgba(102,126,234,0.3)] transition-colors duration-300" />

            {/* Mobile Timeline Line alignment fix */}
            <div className="lg:hidden absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-slate-50 dark:border-[#0a0e27] bg-gradient-to-br from-[#667eea] to-[#764ba2] z-10 transition-colors duration-300" />

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full lg:w-[45%] pl-12 lg:pl-0 perspective-1000 group focus-ring rounded-3xl"
                tabIndex={0}
                role="article"
                aria-label={`Experience at ${exp.company} as ${exp.role}`}
            >
                <div className="relative bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 overflow-hidden shadow-lg dark:shadow-2xl">
                    {/* Hover Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Header */}
                    <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradientClass(index)} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                            {getIcon(exp.company)}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-[#a78bfa] dark:group-hover:from-white dark:group-hover:to-[#a78bfa] transition-all">
                                {exp.company}
                            </h3>
                            <div className="text-indigo-600 dark:text-[#a78bfa] font-medium text-lg mb-2 relative inline-block">
                                {exp.role}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] group-hover:w-full transition-all duration-300" />
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} aria-hidden="true" />
                                    <span>{exp.duration}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={14} aria-hidden="true" />
                                    <span>Hyderabad, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                            <div className={`h-4 w-1 bg-gradient-to-b ${getGradientClass(index)} rounded-full`} />
                            Key Responsibilities
                        </div>
                        <ul className="space-y-3">
                            {exp.bullets.map((bullet: string, i: number) => (
                                <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed group/item transition-all duration-300 hover:translate-x-2">
                                    <span className="text-[#667eea] font-bold mt-0.5" aria-hidden="true">→</span>
                                    <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog Link */}
                    <Link to="/blog" className="relative z-10 mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-50 dark:bg-[#a78bfa]/10 border border-indigo-100 dark:border-[#a78bfa]/20 text-indigo-600 dark:text-[#a78bfa] font-medium text-sm hover:bg-indigo-100 dark:hover:bg-[#a78bfa]/20 hover:text-indigo-700 dark:hover:text-white hover:pl-8 transition-all duration-300 group/link focus-ring">
                        <span>Read related blog</span>
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Experience() {
    return (
        <section id="experience" className="relative min-h-screen py-24 bg-slate-50 dark:bg-[#0a0e27] overflow-hidden transition-colors duration-300">
            <FloatingOrbs />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block relative"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                            Professional <span className="bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent">Experience</span>
                        </h2>
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#667eea] to-transparent" />
                    </motion.div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#667eea]/50 to-transparent transform -translate-x-1/2" />

                    {/* Left Line (Mobile) */}
                    <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#667eea]/50 to-transparent" />

                    <div className="flex flex-col">
                        {experience.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                exp={exp}
                                index={index}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
