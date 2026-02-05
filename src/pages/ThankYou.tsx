import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowLeft, FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0a0e27] px-4 pt-20 transition-colors duration-300">
            <div className="max-w-xl w-full text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-24 h-24 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                    <FiCheckCircle className="text-green-600 dark:text-green-400 text-5xl" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-slate-900 dark:text-white mb-4"
                >
                    Message Received!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed"
                >
                    Thanks for reaching out! I've received your message and will get back to you within 24-48 hours. Looking forward to our conversation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 font-bold"
                    >
                        <FiArrowLeft /> Back to Home
                    </button>
                    <button
                        onClick={() => navigate('/blog')}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl hover:shadow-xl transition-all font-bold"
                    >
                        Read some Blogs <FiSend className="rotate-45" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
