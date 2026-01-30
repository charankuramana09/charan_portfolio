import React from 'react'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
}

export default function Certifications() {
    // Example certifications data
    const certifications = [
        {
            title: 'Project Management Skills Upgrade',
            org: 'Udemy',
            date: '2026',
            badge: './src/assets/udemy.png',
            link: 'https://www.udemy.com/course/project-management/',
            description: (
                <>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-center">Continuous Learning Journey</div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 mb-2 list-disc list-inside text-left">
                        <li>Fundamentals of Project Management</li>
                        <li>Project Lifecycle: Initiation, Planning, Execution, Monitoring & Control, Closure</li>
                        <li>Agile & Scrum, Waterfall, AI in Project Management</li>
                        <li>MS Excel for Project Planning & Tracking</li>
                    </ul>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-left">Strengthened my ability to plan, track, communicate, and adapt between Agile and Waterfall, leveraging AI tools for better decision-making.</div>
                </>
            )
        },
        {
            title: 'Microservices Architecture',
            org: 'Udemy',
            date: '2025',
            badge: './src/assets/udemy.png',
            link: 'https://www.udemy.com/course/microservices-with-spring-boot/',
            description: (
                <>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-center">iSign Tech | Continuous Upskilling</div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 mb-2 list-disc list-inside text-left">
                        <li>Microservices architecture, service discovery, API gateways</li>
                        <li>Building scalable, robust systems</li>
                    </ul>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-left">Applied new skills to real projects, contributing to robust, scalable applications at iSign Tech.</div>
                </>
            )
        },
        {
            title: 'Full Stack Java Developer Training',
            org: 'Sathya Technologies, Hyderabad',
            date: '2022 – 2023',
            badge: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
            link: 'https://www.sathyatechnologies.com/',
            description: (
                <>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-center">Aug 2022 – Feb 2023</div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 mb-2 list-disc list-inside text-left">
                        <li>Java, Spring Boot, HTML, CSS, JavaScript</li>
                        <li>Developed a full-fledged Banking Application:</li>
                        <ul className="ml-4">
                            <li>User Registration & Login</li>
                            <li>Deposit & Withdrawal</li>
                            <li>Funds Transfer</li>
                            <li>Account Closure</li>
                        </ul>
                    </ul>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-left">Hands-on experience building responsive UIs and robust backends, ready to contribute to real-world projects.</div>
                </>
            )
        },
    ];

    return (
        <section id="certifications" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-900 overflow-hidden py-20">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative z-10 max-w-5xl w-full flex flex-col items-center bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-10 mx-4 shadow-xl"
            >
                <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                    Certifications & Learning
                </motion.h2>
                <motion.div variants={container} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.a
                            key={cert.title}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={item}
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.18)' }}
                            className="group flex flex-col items-center bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-emerald-400"
                        >
                            <img src={cert.badge} alt={cert.title + ' badge'} className="w-20 h-20 object-contain mb-4 rounded-full border-4 border-emerald-100 dark:border-emerald-900 group-hover:scale-110 transition-transform duration-300" />
                            <div className="font-semibold text-lg text-slate-800 dark:text-slate-100 text-center mb-1 group-hover:text-emerald-500">
                                {cert.title}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 text-center">{cert.org}</div>
                            <div className="text-xs text-slate-400 dark:text-slate-500 mb-2 text-center">{cert.date}</div>
                            {cert.description && <div className="w-full mt-2">{cert.description}</div>}
                            <span className="inline-block mt-auto text-emerald-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">View Credential →</span>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
