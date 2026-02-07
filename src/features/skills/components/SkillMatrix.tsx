import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const shuffle = <T,>(arr: T[]): T[] => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

interface SkillMatrixProps {
    skills: { label: string; color: string }[];
}

const SkillMatrix: React.FC<SkillMatrixProps> = ({ skills }) => {
    const [live, setLive] = useState(skills);

    useEffect(() => {
        const id = setInterval(() => {
            setLive((prev) => shuffle(prev));
        }, 3000);
        return () => clearInterval(id);
    }, []);

    return (
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
    );
};

export default React.memo(SkillMatrix);
