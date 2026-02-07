import React from 'react';
import { motion } from 'framer-motion';
import { item } from '../../../motion/variants';

interface FeaturedSkillCardProps {
    name: string;
    icon: React.ReactNode;
    color: string;
    label: string;
}

const FeaturedSkillCard: React.FC<FeaturedSkillCardProps> = ({ name, icon, color, label }) => {
    return (
        <motion.div
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            tabIndex={0}
            role="listitem"
            className="relative p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 overflow-hidden group shadow-xl hover:shadow-2xl dark:shadow-none transition-all duration-300 dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] focus-ring"
        >
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${color}`} aria-hidden="true" />
            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-white/5 rounded-full blur-xl -mr-8 -mt-8" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-white/5 ring-1 ring-slate-200 dark:ring-white/10 group-hover:ring-indigo-500/50 transition-all duration-300">
                    {icon}
                </div>
                <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{name}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{label}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default React.memo(FeaturedSkillCard);
