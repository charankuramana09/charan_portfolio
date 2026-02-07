import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { hero } from '../data/portfolio'
import { sectionVariant, item, hover, maskReveal, svgDraw, blurFocus, parallaxVariant, staggerForLength, morphShape } from '../motion/variants'
import BackgroundGradient from '../shared/components/ui/background-gradient'
import StarfieldBackground from '../shared/components/StarfieldBackground';
import charanAvatar from '../assets/charan.png';

export default function Hero() {
    const { scrollY } = useScroll()
    const scaleHeader = useTransform(scrollY, [0, 420], [1, 0.98])
    const textOpacity = useTransform(scrollY, [0, 420], [1, 0.6])
    const parallaxText = useTransform(scrollY, [0, 600], [0, -10])

    const cardRef = useRef<HTMLDivElement | null>(null)
    const [cardStyle, setCardStyle] = useState({ rotateX: 0, rotateY: 0 })

    const ctaRef = useRef<HTMLAnchorElement | null>(null)

    const titleLen = hero.title.length || 20
    const staggerVariant = staggerForLength(titleLen)

    function handleCardMove(e: React.MouseEvent) {
        if (!cardRef.current) return
        const r = cardRef.current.getBoundingClientRect()
        const px = (e.clientX - (r.left + r.width / 2)) / r.width
        const py = (e.clientY - (r.top + r.height / 2)) / r.height
        const rotateY = px * 3 // small tilt
        const rotateX = -py * 3
        setCardStyle({ rotateX, rotateY })
    }

    function resetCard() { setCardStyle({ rotateX: 0, rotateY: 0 }) }

    function handleCTAMove(e: React.MouseEvent) {
        const el = ctaRef.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) / 8
        const dy = (e.clientY - (r.top + r.height / 2)) / 12
        const inner = el.querySelector('.magnetic-inner') as HTMLElement
        if (inner) inner.style.transform = `translate(${dx}px, ${dy}px)`
    }

    function resetCTA() {
        const inner = ctaRef.current?.querySelector('.magnetic-inner') as HTMLElement
        if (inner) inner.style.transform = ''
    }

    const titleParts = hero.title.split(' ')
    const namePart = titleParts.slice(0, 2).join(' ')
    const rest = titleParts.slice(2).join(' ')

    return (
        <StarfieldBackground>
            <motion.header
                className="relative overflow-hidden pt-20 md:pt-24"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={sectionVariant}
                style={{ scale: scaleHeader }}
            >


                <BackgroundGradient containerClassName="w-full px-0 md:px-0 py-14 relative z-10" className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 w-full max-w-[1600px] mx-auto px-4 md:px-12">
                        {/* Left: Text and Socials */}
                        <motion.div variants={staggerVariant} className="flex-1 flex flex-col justify-center space-y-5 md:pr-16 md:items-start items-center text-center md:text-left">
                            <motion.div variants={item} className="inline-flex items-center gap-3" style={{ opacity: textOpacity }}>
                                <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-white/10 text-primary-700 dark:text-white text-sm">
                                    <span className="text-type">Product‑Focused Full‑Stack</span>
                                </span>
                                <span className="badge-freelance" aria-live="polite">
                                    <span className="dot" aria-hidden></span>
                                    Open to freelance
                                </span>
                            </motion.div>

                            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold leading-tight transition-colors mb-2" style={{ y: parallaxText, opacity: textOpacity }}>
                                <span className="block bg-gradient-to-r from-primary-500 via-accent-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-move">
                                    Full Stack
                                </span>
                                <span className="block text-slate-800 dark:text-white font-bold mt-1">
                                    Java & React Developer
                                </span>
                                <motion.svg className="svg-underline mt-4 mx-0 sm:mx-auto" viewBox="0 0 120 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path d="M6 8c22-6 44-6 108 0" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" variants={svgDraw} initial="hidden" animate="show" />
                                </motion.svg>
                            </motion.h1>

                            <motion.p variants={item} className="text-lg text-slate-700 dark:text-white max-w-2xl transition-colors group-hover:text-white">{hero.subtitle}</motion.p>

                            <motion.p variants={item} className="text-slate-600 dark:text-slate-200 max-w-2xl transition-colors group-hover:text-slate-100">{hero.shortBio}</motion.p>

                            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
                                <motion.a
                                    ref={ctaRef}
                                    onMouseMove={handleCTAMove}
                                    onMouseLeave={resetCTA}
                                    href="#contact"
                                    className="btn-3d magnetic"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="btn-inner magnetic-inner px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full cta-ring inline-flex items-center gap-3">
                                        <span>Hire Me</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </motion.a>


                                <a href="/projects" className="btn-3d">
                                    <span className="btn-inner px-5 py-3 border rounded-lg text-slate-700 dark:text-white">View Projects</span>
                                </a>

                                <a href="/resume.pdf" className="btn-3d">
                                    <span className="btn-inner px-4 py-2 text-sm text-slate-700 dark:text-white">Download Resume</span>
                                </a>
                            </motion.div>

                            <motion.div variants={item} className="flex flex-row justify-center md:justify-start gap-3 mt-6">
                                <a href="https://github.com/" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 dark:bg-white/10 text-primary-700 dark:text-white shadow-md hover:scale-110 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.11-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.16-1.19 3.16-1.19.63 1.63.23 2.83.11 3.13.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.4-5.25 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .3.21.66.8.55C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-11.5-11.5z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 dark:bg-white/10 text-primary-700 dark:text-white shadow-md hover:scale-110 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.52V24H.24V8.5zM8.98 8.5h4.34v2.06h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.84V24h-4.52v-7.16c0-1.71-.03-3.91-2.38-3.91-2.38 0-2.74 1.86-2.74 3.79V24H8.98V8.5z" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right: Avatar with circular background */}
                        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 min-w-[320px]">
                            <motion.div
                                ref={cardRef}
                                layoutId="profile-card"
                                variants={item}
                                className="relative flex items-center justify-center rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72"
                                onMouseMove={handleCardMove}
                                onMouseLeave={resetCard}
                                // removed continuous float animation (caused intermittent hide)
                                initial={{ opacity: 1 }}
                                whileHover={{ rotate: 2, y: -6, boxShadow: '0 28px 64px rgba(255,255,255,0.85), 0 20px 80px rgba(2,6,23,0.18)' }}
                                style={{ rotateX: cardStyle.rotateX, rotateY: cardStyle.rotateY, transformStyle: 'preserve-3d', perspective: 1000, transition: 'box-shadow 220ms ease, transform 220ms ease' }}
                            >
                                <img
                                    src={charanAvatar}
                                    alt="Fullstack Java"
                                    className="w-full h-full object-cover rounded-full ring-8 ring-white/70 dark:ring-slate-800/70"
                                    style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 0 28px 8px rgba(255,255,255,0.6)', transition: 'box-shadow 220ms ease, transform 220ms ease' }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </BackgroundGradient>
                {/* Morphing SVG to next section */}
                <motion.div className="w-full -mb-1" aria-hidden>
                    <motion.svg viewBox="0 0 120 140" preserveAspectRatio="none" className="w-full h-14 block">
                        <motion.path fill="#fff" d="M0 80 C40 40 80 40 120 80 L120 140 L0 140 Z" variants={morphShape} initial="hidden" whileInView="show" viewport={{ once: true }} />
                    </motion.svg>
                </motion.div>
            </motion.header>
        </StarfieldBackground>
    )
}
