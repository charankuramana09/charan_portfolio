import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiStar } from 'react-icons/fi';

const testimonials = [
    {
        name: "Sasidhar G.",
        role: "Client — Sri Sports Events",
        content: "Charan transformed our vision into a high-performance sports portal. His technical expertise in responsive design and fast load times made a huge difference.",
        stars: 5,
        avatar: "https://ui-avatars.com/api/?name=Sasidhar&background=6366f1&color=fff"
    },
    {
        name: "Technical Lead",
        role: "iSign Technologies",
        content: "A proactive developer who excels at microservices architecture. His work on the POS system was critical to the project's success and reliability.",
        stars: 5,
        avatar: "https://ui-avatars.com/api/?name=Lead&background=10b981&color=fff"
    },
    {
        name: "Medical Clinic Director",
        role: "Vernon Medical Clinic",
        content: "The appointment system Charan built significantly reduced our administrative overhead. Intuitive, secure, and exactly what we needed.",
        stars: 5,
        avatar: "https://ui-avatars.com/api/?name=Director&background=f59e0b&color=fff"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#0a0e27] transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-500/20"
                    >
                        <FiMessageCircle /> Testimonials
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
                    >
                        What people say about my work
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, i) => (
                                    <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 italic">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-indigo-500/30 overflow-hidden">
                                    <img src={t.avatar} alt={t.name} />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
