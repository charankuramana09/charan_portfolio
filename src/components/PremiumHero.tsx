import React from 'react'
import { motion } from 'framer-motion'
import { StarfieldBackground } from './StarfieldBackground';

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

export default function PremiumHero(): JSX.Element {
  return (
    <StarfieldBackground>
      <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
        <div className="gradient-border rounded-3xl p-1 mx-4 md:mx-0">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-xl rounded-3xl p-10 items-center"
          >
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <motion.span variants={item} className="inline-flex w-fit items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm mb-4">
                <span className="text-emerald-400">●</span>
                <span className="freelance-type"> Open to Freelance</span>
              </motion.span>

              <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Full Stack{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Developer</span>
              </motion.h1>

              <motion.p variants={item} className="mt-4 text-slate-300 max-w-lg leading-relaxed">
                Building scalable, secure, and user-focused web applications using Java, Spring Boot, Microservices, React, and cloud-native tools.
              </motion.p>

              <motion.div variants={item} className="mt-6 flex items-center gap-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hire-glow-btn">
                  <span className="btn-inner">Hire Me →</span>
                </motion.button>

                <a href="/projects">
                  <button className="px-6 py-3 rounded-xl border border-white/20 text-white liquid-btn">
                    <span className="btn-text">View Projects</span>
                  </button>
                </a>
              </motion.div>
            </div>

            {/* RIGHT CARD */}
            <div className="rotating-ring rounded-2xl">
              <motion.div
                className="rotating-inner bg-slate-900 rounded-2xl p-6 shadow-2xl transform-gpu"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                  boxShadow: [
                    '0 8px 24px rgba(255,255,255,0)',
                    '0 28px 64px rgba(255,255,255,0.45)',
                    '0 8px 24px rgba(255,255,255,0)'
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                whileHover={{ rotateX: 4, rotateY: -4 }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/src/assets/charan.png"
                    alt="Charan avatar"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full ring-4 ring-white/60 object-cover"
                  />

                  <div>
                    <p className="text-slate-300 text-sm">I build scalable, secure, and user-focused web applications.</p>
                    <p className="mt-2 text-xs text-slate-400">Java • Spring Boot • React • Microservices • Cloud-native</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </StarfieldBackground>
  )
}
