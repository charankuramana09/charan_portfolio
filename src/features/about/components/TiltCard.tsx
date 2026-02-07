import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import charanAvatar from '../../../assets/charan.png';
import { strings } from '../../../data/strings';

const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    boxShadow: "0 20px 60px rgba(99, 102, 241, 0.15), 0 10px 30px rgba(139, 92, 246, 0.1), 0 0 0 1px rgba(99, 102, 241, 0.05)"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-72 h-80 rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden cursor-pointer group card-3d-wrapper"
            >
                <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-500"
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div
                    style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                >
                    <motion.div
                        className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 mb-4 shadow-lg active-avatar"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(99, 102, 241, 0.3)",
                                "0 0 40px rgba(139, 92, 246, 0.5)",
                                "0 0 20px rgba(99, 102, 241, 0.3)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-2xl font-bold text-slate-900 dark:text-white overflow-hidden">
                            <img
                                src={charanAvatar}
                                alt={strings.hero.name}
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(strings.hero.name)}&background=6366f1&color=fff` }}
                            />
                        </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{strings.hero.name}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">{strings.hero.title}</p>

                    <div
                        style={{ transform: "translateZ(30px)" }}
                        className="absolute bottom-6 flex gap-2"
                    >
                        <span className="px-3 py-1 bg-white/50 dark:bg-white/10 rounded-full text-[10px] text-slate-800 dark:text-white backdrop-blur-sm border border-slate-200 dark:border-white/5">Java</span>
                        <span className="px-3 py-1 bg-white/50 dark:bg-white/10 rounded-full text-[10px] text-slate-800 dark:text-white backdrop-blur-sm border border-slate-200 dark:border-white/5">React</span>
                    </div>
                </div>

                <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
            </motion.div>
        </motion.div>
    );
};

export default React.memo(TiltCard);
