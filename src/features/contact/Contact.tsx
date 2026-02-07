import React from 'react';
import { motion } from 'framer-motion';
import { strings } from '../../data/strings';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="max-w-[1400px] mx-auto px-4 py-20 relative overflow-hidden" aria-labelledby="contact-heading">
            {/* Background decorations */}
            <div className="hidden md:block fixed w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-400 rounded-full blur-[100px] opacity-20 dark:opacity-10 top-[10%] left-[5%] z-[-1] animate-[floatSlow_25s_ease-in-out_infinite] pointer-events-none" aria-hidden="true" />
            <div className="hidden md:block fixed w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-500 rounded-full blur-[100px] opacity-20 dark:opacity-10 bottom-[10%] right-[5%] z-[-1] animate-[floatSlow_20s_ease-in-out_infinite_reverse] pointer-events-none" aria-hidden="true" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h1 id="contact-heading" className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent mb-4">
                    {strings.contact.title}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    {strings.contact.subtitle}
                </p>
            </motion.div>

            {/* Contact Wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
};

export default React.memo(Contact);
