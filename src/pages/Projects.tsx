import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'KEYP Healthcare Management',
        company: 'iSignTech',
        duration: 'Oct 2025 - Jan 2026',
        description:
            'Comprehensive healthcare application built on monolithic architecture supporting clinical and administrative workflows with secure data handling.',
        highlights: [
            'Developed backend modules with Spring Boot, Spring MVC, and RESTful APIs',
            'Implemented patient management, appointments, and medical records',
            'Built responsive UI with React.js and Tailwind CSS',
            'Deployed on Microsoft Azure with CI/CD pipelines',
            'Followed Agile methodology with cross-functional collaboration',
        ],
        skills: [
            'Java',
            'Spring Boot 3.x',
            'Spring Security',
            'React.js',
            'Tailwind CSS',
            'REST APIs',
            'JWT',
            'Azure',
            'CI/CD',
            'Agile',
        ],
    },
    {
        title: 'XACT Point of Sale System',
        company: 'iSignTech',
        duration: 'Apr 2025 - Oct 2025',
        description:
            'End-to-end POS application using microservices architecture for high scalability, featuring real-time data processing and seamless service communication.',
        highlights: [
            'Designed microservices architecture with Spring Boot and Hibernate',
            'Implemented billing, inventory management, and order processing',
            'Developed high-performance UI with React.js and Tailwind CSS',
            'Integrated JWT authentication and role-based access control',
            'Deployed on Azure with CI/CD pipelines and cloud configuration',
            'Led team management, code reviews, and mentoring',
        ],
        skills: [
            'Microservices',
            'Spring Boot 3.x',
            'Hibernate',
            'React.js',
            'PostgreSQL',
            'JWT',
            'Azure',
            'REST APIs',
            'Team Management',
        ],
    },
    {
        title: 'Smart Hostel Management',
        company: 'iSignTech',
        duration: 'Nov 2024 - Mar 2025',
        description:

            "End-to-end hostel management system leveraging Zoho Creator's low-code platform with custom workflows and real-time analytics dashboards.",
        highlights: [
            'Implemented admin and user modules for hostel operations',
            'Built dynamic UI components with HTML snippets and widgets',
            'Automated business processes with custom workflows',
            'Enabled real-time insights through Zoho BI & Analytics',
            'Managed bookings, expenses, and comprehensive reporting',
        ],
        skills: [
            'Zoho Creator',
            'Zoho Analytics',
            'JavaScript',
            'HTML',
            'API Integration',
            'JWT',
            'Workflows',
        ],
    },
    {
        title: 'Sports Events Website',
        company: 'iSignTech • srisportsevents.com',
        duration: 'Oct 2024 - Dec 2024',
        description:
            'Fully responsive and dynamic sports events website featuring intuitive navigation, engaging UI layouts, and mobile-first design approach.',
        highlights: [
            'Designed with mobile-first approach for seamless cross-device experience',
            'Implemented event listings and contact sections',
            'Added smooth scrolling interactions and animations',
            'Ensured cross-browser compatibility and optimized performance',
        ],
        skills: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Bootstrap',
            'Responsive Design',
            'Performance Optimization',
        ],
        website: 'https://srisportsevents.com',
    },
    {
        title: 'Vernon Medical Clinic',
        company: 'iSignTech',
        duration: 'Jul 2024 - Oct 2024',
        description:
            'Comprehensive website and online appointment system enhancing patient access to healthcare services with responsive design and intuitive interface.',
        highlights: [
            'Led development of patient-facing healthcare platform',
            'Integrated online visit capabilities and chronic care management',
            'Implemented intuitive appointment scheduling system',
            'Addressed cross-browser compatibility for uniform experience',
            'Streamlined processes reducing administrative workload',
        ],
        skills: [
            'AngularJS',
            'Bootstrap',
            'PHP',
            'jQuery',
            'JavaScript',
            'Figma',
            'Agile',
        ],
    },
];

const stats = [
    { number: '5', label: 'Projects Delivered' },
    { number: '15+', label: 'Technologies' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
];

export default function ProjectsPage() {
    return (
        <div className="relative min-h-screen bg-[#0a0e27] text-slate-100 overflow-x-hidden">
            {/* Animated Background */}
            <div className="pointer-events-none fixed inset-0 z-0 opacity-30">
                <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-gradient-to-br from-indigo-600/80 to-transparent top-[-100px] left-[-100px] animate-[float_20s_ease-in-out_infinite]" />
                <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-gradient-to-br from-purple-600/80 to-transparent bottom-[-150px] right-[-150px] animate-[float_20s_ease-in-out_10s_infinite]" />
            </div>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50"
                style={{ width: '100%', scaleX: 0, transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
            />

            <main className="container max-w-[1400px] mx-auto px-4 relative z-10">
                {/* Hero/Header */}
                <header className="pt-16 pb-10 text-center">
                    <motion.h1
                        className="font-display text-4xl md:text-6xl font-extrabold bg-gradient-to-tr from-slate-100 to-indigo-300 bg-clip-text text-transparent mb-4 tracking-tight"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Project Portfolio
                    </motion.h1>
                    <div className="divider w-20 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto my-6 animate-pulse rounded-full" />
                    <motion.p
                        className="subtitle text-lg text-slate-400 font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Full-Stack Development • Healthcare • Microservices • Cloud Solutions
                    </motion.p>
                </header>

                {/* Stats Section */}
                <section className="stats grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 my-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            className="stat-card bg-gradient-to-br from-[#151934] to-[#1a1f3a] p-8 rounded-xl border border-white/5 text-center relative overflow-hidden"
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                        >
                            <div className="stat-number text-3xl font-bold text-indigo-300 mb-2">{stat.number}</div>
                            <div className="stat-label text-xs uppercase tracking-wider text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </section>

                {/* Projects Grid */}
                <section className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, idx) => (
                        <motion.article
                            className="project-card bg-[#151934] rounded-2xl border border-white/5 overflow-hidden shadow-lg relative flex flex-col"
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
                        >
                            <div className="project-header p-8 bg-gradient-to-br from-[#1a1f3a] to-[#151934] relative overflow-hidden">
                                <span className="project-duration inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-xs font-medium border border-indigo-500 mb-4">
                                    {project.duration}
                                </span>
                                <h2 className="project-title font-display text-2xl font-bold text-slate-100 mb-1">
                                    {project.title}
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-indigo-400 hover:underline text-base align-middle"
                                            aria-label="Visit project website"
                                        >
                                            ↗
                                        </a>
                                    )}
                                </h2>
                                <p className="project-company text-yellow-400 text-sm font-medium">{project.company}</p>
                            </div>
                            <div className="project-body p-8 flex-1 flex flex-col">
                                <p className="project-description text-slate-400 text-sm mb-4">{project.description}</p>
                                <ul className="project-highlights list-none mb-4">
                                    {project.highlights.map((h, i) => (
                                        <li key={i} className="relative pl-6 text-slate-400 text-sm mb-1">
                                            <span className="absolute left-0 text-indigo-300 font-bold">▹</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <div className="skills-container flex flex-wrap gap-2 pt-4 mt-auto border-t border-white/5">
                                    {project.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="skill-tag bg-indigo-500/15 text-indigo-300 px-3 py-1 rounded-md text-xs font-medium border border-indigo-500/30 hover:bg-indigo-500/30 hover:border-indigo-500 transition-all duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </section>

                {/* Footer for this page only (not global) */}
                <footer className="text-center py-12 text-slate-400 text-sm border-t border-white/5">
                    <p>
                        Crafted with <span className="heart text-red-500 animate-pulse">♥</span> by a passionate developer
                    </p>
                    <p className="mt-2 opacity-70">Transforming ideas into elegant solutions</p>
                </footer>
            </main>
        </div>
    );
}
