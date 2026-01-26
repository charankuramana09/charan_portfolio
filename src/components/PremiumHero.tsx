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

export default function PremiumHero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-xl rounded-3xl p-10"
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <motion.span variants={item} className="inline-flex w-fit items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm mb-4">
            ● Open to Freelance
          </motion.span>

          <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Full Stack{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Developer</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-slate-300 max-w-lg leading-relaxed">
            Building scalable, secure, and user-focused web applications using Java, Spring Boot, Microservices, React, and cloud-native tools.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-medium shadow-lg">
              Hire Me →
            </motion.button>

            <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 rounded-xl border border-white/20 text-white">
              View Projects
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            // subtle slow float
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ rotateX: 4, rotateY: -4 }}
          className="bg-slate-900 rounded-2xl p-6 shadow-2xl transform-gpu"
        >
          <p className="text-slate-300 text-sm">I build scalable, secure, and user-focused web applications.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
