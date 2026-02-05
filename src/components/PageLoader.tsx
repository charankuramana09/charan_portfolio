import React from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4"
            >
                {/* Spinner */}
                <div className="relative">
                    <motion.div
                        className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 rounded-full"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                    />
                    <motion.div
                        className="absolute inset-0 w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </div>

                {/* Loading Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-400 font-medium"
                >
                    Loading...
                </motion.p>
            </motion.div>
        </div>
    );
}
