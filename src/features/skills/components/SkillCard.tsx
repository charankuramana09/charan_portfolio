import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { brandSkills } from '../skills.data';

interface SkillCardProps {
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    skills: string[];
    delay?: number;
    enterFrom?: 'left' | 'right' | 'bottom';
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, iconColor, skills, delay = 0, enterFrom = 'bottom' }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const initialPosition = enterFrom === 'left'
        ? { opacity: 0, x: -40, y: 0 }
        : enterFrom === 'right'
            ? { opacity: 0, x: 40, y: 0 }
            : { opacity: 0, x: 0, y: 30 };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={initialPosition}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay, ease: 'easeOut' }}
            onMouseMove={handleMouseMove}
            className="group relative bg-white dark:bg-slate-900/40 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden h-full w-full min-w-0 shadow-lg dark:shadow-none"
        >
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
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight text-type">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => {
                        const brand = brandSkills.find((s: any) => s.name === skill);
                        const color = brand?.color || '#94a3b8';

                        return (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: delay + (idx * 0.05) }}
                                className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105 cursor-default bg-slate-50 dark:bg-slate-800/50"
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

            <div
                className="absolute -bottom-24 -right-24 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: iconColor }}
            />
        </motion.div>
    );
};

export default React.memo(SkillCard);
