import React, { useMemo } from 'react';
import Section from '../../shared/components/Section';
import { about } from '../../data/portfolio';
import { strings } from '../../data/strings';
import { motion } from 'framer-motion';
import { Layers, Network, Cloud, Boxes } from 'lucide-react';
import { item, stagger } from '../../motion/variants';
import { LightWavesBackground } from '../../shared/components/ui/LightWavesBackground';
import TiltCard from './components/TiltCard';
import FeaturedSkillCard from './components/FeaturedSkillCard';

const About: React.FC = () => {
    const featuredSkills = useMemo(() => [
        {
            name: 'Full Stack',
            icon: (
                <motion.span
                    className="inline-flex"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <Layers size={22} aria-hidden="true" />
                </motion.span>
            ),
            color: 'from-[#6366f1] to-[#7c3aed]',
            label: 'Java & React',
        },
        {
            name: 'Microservices',
            icon: (
                <motion.span
                    className="inline-flex"
                    animate={{ rotate: [0, 6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <Network size={22} aria-hidden="true" />
                </motion.span>
            ),
            color: 'from-[#f472b6] to-[#be185d]',
            label: 'API & Integration',
        },
        {
            name: 'Cloud',
            icon: (
                <motion.span
                    className="inline-flex"
                    animate={{ y: [0, -2, 0], x: [0, 2, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <Cloud size={22} aria-hidden="true" />
                </motion.span>
            ),
            color: 'from-[#06b6d4] to-[#0891b2]',
            label: 'Docker & K8s',
        },
        {
            name: 'Zoho Creator',
            icon: (
                <motion.span
                    className="inline-flex"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <Boxes size={22} aria-hidden="true" />
                </motion.span>
            ),
            color: 'from-[#10b981] to-[#059669]',
            label: 'Low-Code Apps',
        },
    ], []);

    return (
        <Section id="about" direction="left" className="w-full py-28 sm:py-32 relative overflow-hidden transition-colors duration-300" aria-label="About Me">
            <div className="absolute inset-0 w-full h-full" aria-hidden="true">
                <LightWavesBackground
                    className="w-full h-full"
                    colors={["#6366f1", "#8b5cf6", "#06b6d4", "#a855f7", "#0ea5e9"]}
                    speed={0.8}
                    intensity={0.4}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start relative z-10">
                    <div
                        className="lg:sticky lg:top-28 flex-shrink-0 perspective-1000 focus-ring rounded-2xl"
                        tabIndex={0}
                        role="img"
                        aria-label={strings.about.profileAlt}
                    >
                        <TiltCard />
                        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-500">
                            <p className="opacity-80">Based in {about.location} 🇮🇳</p>
                        </div>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex-1 w-full"
                    >
                        <motion.div variants={item} className="mb-8">
                            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 tracking-wide">
                                {strings.about.title.toUpperCase()} {strings.about.subtitle.toUpperCase()}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                <span className="text-shimmer">Crafting Digital Experiences with Passion & Code</span>
                            </h2>
                        </motion.div>

                        {about.paragraphs.map((p, i) => (
                            <motion.p
                                variants={item}
                                key={i}
                                className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6 border-l-2 border-indigo-500/20 pl-6 hover:border-indigo-500 transition-colors duration-300"
                            >
                                {p}
                            </motion.p>
                        ))}

                        <motion.div
                            variants={stagger}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
                            role="list"
                            aria-label={strings.about.featuredSkills}
                        >
                            {featuredSkills.map((skill) => (
                                <FeaturedSkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                    color={skill.color}
                                    label={skill.label}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default React.memo(About);
