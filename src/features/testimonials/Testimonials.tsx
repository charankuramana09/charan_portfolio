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
    },
    {
        name: "E-commerce Founder",
        role: "Fashion Hub",
        content: "The integration of various payment gateways and the smooth checkout flow Charan developed has boosted our conversion rates by 25%. Highly recommended.",
        stars: 5,
        avatar: "https://ui-avatars.com/api/?name=Founder&background=ec4899&color=fff"
    },
    {
        name: "Senior Architect",
        role: "Cloud Scale Solutions",
        content: "Charan's understanding of Spring Boot and Kafka is impressive. He delivered a robust messaging system that handles millions of events daily without a hitch.",
        stars: 5,
        avatar: "https://ui-avatars.com/api/?name=Architect&background=8b5cf6&color=fff"
    }
];

export default function Testimonials() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#0a0e27] transition-colors duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-500/20 shadow-sm"
                    >
                        <FiMessageCircle className="animate-pulse" /> Testimonials
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Trusted by <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Visionaries</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto relative group">
                    <div className="overflow-hidden px-2 sm:px-4 py-10 sm:py-12">
                        <motion.div
                            className="flex w-full"
                            animate={{ x: `-${index * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((t, idx) => (
                                <div key={idx} className="flex-[0_0_100%] px-2 sm:px-4">
                                    <motion.div
                                        className="bg-white dark:bg-slate-900/60 p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl dark:shadow-none hover:border-indigo-500/50 transition-colors duration-500 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-10">
                                            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                        </div>

                                        <div className="flex gap-1.5 mb-8">
                                            {[...Array(t.stars)].map((_, i) => (
                                                <FiStar key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5 drop-shadow-sm" />
                                            ))}
                                        </div>

                                        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 sm:mb-10 leading-relaxed font-medium italic">
                                            "{t.content}"
                                        </p>

                                        <div className="flex items-center gap-4 sm:gap-5">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-indigo-500/20 overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500 flex-shrink-0">
                                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">{t.name}</div>
                                                <div className="text-xs sm:text-sm text-indigo-500 dark:text-indigo-400 font-semibold tracking-wide uppercase">{t.role}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setIndex(idx)}
                                className={`h-2.5 transition-all duration-300 rounded-full ${index === idx ? 'w-10 bg-indigo-500' : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-indigo-300'}`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
