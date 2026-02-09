import React from 'react';
import { brandSkills } from '../skills.data';

interface SkillCardProps {
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    skills: string[];
    delay?: number;
    enterFrom?: 'left' | 'right' | 'bottom';
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, iconColor, skills }) => {
    return (
        <div className="relative bg-white dark:bg-slate-900/40 rounded-3xl p-6 border border-slate-200 dark:border-white/5 overflow-hidden h-full w-full min-w-0 shadow-lg dark:shadow-none">
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: `${iconColor}20`, color: iconColor }}
                    >
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => {
                        const brand = brandSkills.find((s: any) => s.name === skill);
                        const color = brand?.color || '#94a3b8';

                        return (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-full text-xs font-semibold border bg-slate-50 dark:bg-slate-800/50"
                                style={{
                                    borderColor: `${color}30`,
                                    color: color,
                                    borderWidth: '1px'
                                }}
                            >
                                {skill}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default React.memo(SkillCard);
