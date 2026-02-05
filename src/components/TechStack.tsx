import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
];

const TechCard = ({ tech }: { tech: typeof techStack[0] }) => (
    <motion.div
        whileHover={{
            scale: 1.1,
            y: -5,
            filter: "brightness(1.2)",
            boxShadow: "0 20px 30px -10px rgba(99, 102, 241, 0.3)"
        }}
        className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 backdrop-blur-sm p-4 flex flex-col items-center justify-center gap-3 group cursor-pointer overflow-hidden shadow-sm dark:shadow-none"
    >
        {/* Background Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

        {/* Icon */}
        <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain drop-shadow-md" loading="lazy" />
        </div>

        {/* Name Label */}
        <span className="relative z-10 text-[10px] md:text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors duration-300">
            {tech.name}
        </span>

        {/* Border Glow */}
        <div className="absolute inset-0 border border-transparent group-hover:border-indigo-500/30 rounded-2xl transition-all duration-500" />
    </motion.div>
);

export default function TechStack() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden relative border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/5 via-slate-50 to-slate-50 dark:from-indigo-900/10 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

            <div className="flex flex-col">
                {/* Single Row: Left to Right then Right to Left */}
                <div className="flex relative items-center overflow-hidden">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 60, // Slower for better visibility
                            ease: "linear",
                            repeatType: "reverse" // Moves back and forth
                        }}
                        style={{ width: "fit-content", display: "flex" }}
                    >
                        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                            <TechCard key={`tech-${index}`} tech={tech} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
