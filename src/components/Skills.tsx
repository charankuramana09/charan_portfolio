import React, { useEffect, useMemo, useState } from 'react'
import Section from './Section'
import { motion } from 'framer-motion'
import { skillsCategories } from '../data/portfolio'
import { item, pop, iconPulse } from '../motion/variants'

const Icon: React.FC<{ name: string }> = ({ name }) => {
    const key = name.toLowerCase()
    switch (true) {
        case /react/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                    <g stroke="#61DAFB" strokeWidth="1" strokeLinecap="round">
                        <ellipse cx="12" cy="12" rx="6" ry="2.2" transform="rotate(30 12 12)" />
                        <ellipse cx="12" cy="12" rx="6" ry="2.2" transform="rotate(-30 12 12)" />
                        <ellipse cx="12" cy="12" rx="6" ry="2.2" transform="rotate(90 12 12)" />
                    </g>
                </svg>
            )
        case /typescript|ts/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect width="20" height="14" x="2" y="5" rx="2" fill="#3178C6" />
                    <text x="12" y="15" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle">TS</text>
                </svg>
            )
        case /angular/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2l9 4v6c0 6-4 10-9 10s-9-4-9-10V6l9-4z" fill="#DD0031" />
                    <path d="M8 14l1.5-4h5L17 14" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case /tailwind/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M2 15c6-4 10-2 14 0 4 2 6-2 6-2" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            )
        case /html/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3z" fill="#E34F26" />
                    <path d="M12 17.8V6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            )
        case /css/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3z" fill="#1572B6" />
                </svg>
            )
        case /javascript|js/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
                    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700">JS</text>
                </svg>
            )
        case /java/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M8 4s3 1 4 0c1-1 0-2 0-2s4 1 4 3c0 2-2 3-5 4" stroke="#007396" strokeWidth="1.2" fill="none" />
                </svg>
            )
        case /spring/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="#6DB33F" strokeWidth="1.2" fill="none" />
                </svg>
            )
        case /docker/.test(key):
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="7" width="18" height="10" rx="2" fill="#2496ED" />
                </svg>
            )
        default:
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="#94A3B8" strokeWidth="1.2" fill="none" />
                </svg>
            )
    }
}

function Pill({ children, icon }: { children: React.ReactNode; icon?: string }) {
    return (
        <motion.span className="pill inline-flex items-center bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full text-sm mr-2 mb-2 gap-2" whileHover={pop.whileHover} whileTap={pop.whileTap}>
            {icon ? (
                <motion.span className="icon-bg w-5 h-5 flex items-center justify-center text-xs" variants={iconPulse} initial="hidden" whileHover="hover">
                    <Icon name={icon} />
                </motion.span>
            ) : null}
            <span>{children}</span>
        </motion.span>
    )
}

export default function Skills() {
    // build a flat list of highlighted skills for the live demo grid
    const highlighted = useMemo(() => {
        const all = skillsCategories.flatMap((c) => c.items)
        // pick unique and first 8 to show
        return Array.from(new Set(all)).slice(0, 8)
    }, [])

    const COLORS = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#f97316', '#a3e635']

    const [live, setLive] = useState(() => highlighted.map((s, i) => ({ id: i, label: s, color: COLORS[i % COLORS.length] })))

    useEffect(() => {
        const shuffle = <T,>(arr: T[]) => {
            const a = arr.slice()
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                    ;[a[i], a[j]] = [a[j], a[i]]
            }
            return a
        }

        const id = setInterval(() => {
            setLive((prev) => shuffle(prev))
        }, 1000)
        return () => clearInterval(id)
    }, [])
    return (
        <Section id="skills" direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
            <div className="text-center mb-8">
                <div className="text-sm text-primary-600">My Skills</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Technologies I Work With</h2>
                <p className="text-slate-600 mt-2">A comprehensive toolkit for building modern, scalable web applications</p>
            </div>

            <div className="mb-6">
                <div className="text-sm text-slate-500 mb-3">Live Skills Grid</div>
                <motion.ul className="flex flex-wrap gap-4" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {live.map((it) => (
                        <motion.li key={it.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 28 }} style={{ width: 140, height: 72 }} className="rounded-lg overflow-hidden" whileHover={{ scale: 1.03 }}>
                            <div className="w-full h-full flex items-center justify-center text-white font-semibold" style={{ background: it.color }}>{it.label}</div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsCategories.map((cat) => (
                    <motion.div key={cat.title} variants={item} className="card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                                <Icon name={cat.title} />
                            </div>
                            <div>
                                <div className="font-semibold">{cat.title}</div>
                            </div>
                        </div>

                        <div className="pt-1">
                            {cat.items.map((it) => <Pill key={it} icon={it}>{it}</Pill>)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
