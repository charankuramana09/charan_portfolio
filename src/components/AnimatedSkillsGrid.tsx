
import React from 'react';
import { animatedSkills } from './animatedSkills.data';

interface AnimatedSkillCardProps {
    category: { id: number; name: string; icon: string; color: string };
}

const colorClassMap: Record<string, string> = {
    'frontend': 'bg-blue-500 text-white',
    'backend': 'bg-green-500 text-white',
    'database': 'bg-yellow-500 text-black',
    'devops': 'bg-purple-500 text-white',
    'tools': 'bg-pink-500 text-white',
};

const AnimatedSkillCard: React.FC<AnimatedSkillCardProps> = ({ category }) => {
    return (
        <div className="rounded-2xl shadow-lg bg-slate-800/70 p-6 flex flex-col items-center mb-6 animate-fadeInUp">
            <div className="mb-4 text-xl font-bold text-white tracking-wide uppercase">
                <span>{category.name}</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium shadow transition-all duration-300 bg-slate-600 text-white`}
                    style={{ animationDelay: `0.1s` }}
                >
                    <span className="mr-2 w-2 h-2 rounded-full bg-white/40"></span>
                    {category.icon} {category.name}
                </span>
            </div>
        </div>
    );
};


interface AnimatedSkillsGridProps {
    categories?: { id: number; name: string; icon: string; color: string }[];
}

export const AnimatedSkillsGrid: React.FC<AnimatedSkillsGridProps> = ({ categories }) => {
    const data = categories || animatedSkills;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {data.map((category) => (
                <AnimatedSkillCard key={category.id} category={category} />
            ))}
        </div>
    );
};

export default AnimatedSkillsGrid;
