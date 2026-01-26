import React from 'react'
import Section from './Section'
import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import { timelineItem } from '../motion/variants'

export default function Experience() {
    return (
        <Section id="experience" direction="left" className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <div className="text-center mb-8">
                <div className="text-sm text-primary-600">Experience</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">My Professional Journey</h2>
                <p className="text-slate-600 mt-2">Building enterprise solutions and growing as a developer</p>
            </div>

            <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2" />

                <div className="space-y-12">
                    {experience.map((exp, idx) => {
                        const sideLeft = idx % 2 === 0
                        return (
                            <motion.div key={exp.company} variants={timelineItem} className="relative md:flex md:items-start md:justify-between">
                                <div className={`md:w-1/2 ${sideLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                                    {sideLeft && (
                                        <div className="card inline-block text-left md:ml-auto">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="font-semibold">{exp.company}</div>
                                                    <div className="text-sm text-primary-600">{exp.role}</div>
                                                    <div className="text-xs text-slate-500 mt-1">{exp.duration} • Hyderabad, Telangana</div>
                                                </div>
                                            </div>
                                            <ul className="mt-3 list-disc list-inside text-sm text-slate-700 dark:text-slate-200">
                                                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* center dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
                                    <div className="hidden md:block timeline-dot-pulse" aria-hidden />
                                    <div className="md:hidden w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white dark:ring-slate-800" aria-hidden />
                                </div>

                                <div className={`md:w-1/2 ${sideLeft ? 'md:pl-8' : 'md:pr-8 md:text-left'}`}>
                                    {!sideLeft && (
                                        <div className="card inline-block text-left md:mr-auto">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="font-semibold">{exp.company}</div>
                                                    <div className="text-sm text-primary-600">{exp.role}</div>
                                                    <div className="text-xs text-slate-500 mt-1">{exp.duration}</div>
                                                </div>
                                            </div>
                                            <ul className="mt-3 list-disc list-inside text-sm text-slate-700 dark:text-slate-200">
                                                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}
