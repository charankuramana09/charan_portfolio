import React from 'react'
import { motion } from 'framer-motion'

function IconGitHub() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 2.89-.39c.98.01 1.98.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" fill="currentColor" />
        </svg>
    )
}

function IconLinkedIn() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.36 8h4.28V24H.36zM8.5 8h4.11v2.16h.06c.57-1.08 1.97-2.16 4.05-2.16C22.4 8 24 10.19 24 14.17V24h-4.28v-8.02c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.09-3.07 4.24V24H8.5V8z" fill="currentColor" />
        </svg>
    )
}

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="mt-12 bg-gradient-to-r from-white/60 to-slate-50 dark:from-slate-900 dark:to-slate-800 py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div>
                    <div className="text-lg font-semibold">Charan Kuramana</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">Product-focused Full-Stack Engineer crafting performant web experiences.</div>
                    <div className="mt-4 flex items-center gap-3">
                        <a href="mailto:charankuramana143@gmail.com" className="text-sm text-slate-700 dark:text-slate-200 hover:underline">charankuramana143@gmail.com</a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="font-semibold">Quick Links</div>
                    <nav className="flex flex-col text-sm text-slate-600 dark:text-slate-300">
                        <a href="#projects" className="py-1 hover:underline">Projects</a>
                        <a href="#skills" className="py-1 hover:underline">Skills</a>
                        <a href="#experience" className="py-1 hover:underline">Experience</a>
                        <a href="#contact" className="py-1 hover:underline">Contact</a>
                    </nav>
                </div>

                <div className="flex flex-col items-start md:items-end">
                    <div className="font-semibold">Connect</div>
                    <div className="flex items-center gap-3 mt-2">
                        <motion.a whileHover={{ y: -3 }} href="https://github.com/" aria-label="GitHub" className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                            <IconGitHub />
                        </motion.a>
                        <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/" aria-label="LinkedIn" className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                            <IconLinkedIn />
                        </motion.a>
                        <motion.button whileHover={{ scale: 1.02 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="ml-2 text-sm text-slate-600 dark:text-slate-300">Back to top</motion.button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-8 border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                <div>© {year} Charan Kuramana — Built with React, Vite & Tailwind</div>
                <div className="flex items-center gap-4">
                    <a href="/privacy" className="hover:underline">Privacy</a>
                    <a href="/terms" className="hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    )
}
