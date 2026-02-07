import React from 'react'
import { motion } from 'framer-motion'
import StarfieldBackground from '../../shared/components/StarfieldBackground';
import { FileText, ArrowRight } from 'lucide-react';
import { hero } from '../../data/portfolio';
import { strings } from '../../data/strings';
import { config } from '../../data/config';
import charanAvatar from '../../assets/charan.png';
import HeroSocials from './components/HeroSocials';

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
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleWords = strings.hero.title.split(' ');

  return (
    <StarfieldBackground>
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-20 md:pt-0">
        <div className="gradient-border rounded-3xl p-1 mx-4 md:mx-0 w-full max-w-6xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 items-center shadow-2xl dark:shadow-none border border-slate-200 dark:border-white/10"
          >
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <motion.span variants={item} className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm mb-6 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for opportunities
              </motion.span>

              <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                {titleWords.map((word, i) => (
                  <span key={i} className={i >= 2 ? "bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>

              <motion.p variants={item} className="text-slate-700 dark:text-slate-300 text-lg max-w-lg leading-relaxed mb-8">
                {strings.hero.shortBio}
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-10">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="hire-glow-btn group relative px-7 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient-fast rounded-xl text-white font-bold shadow-xl shadow-indigo-500/20 overflow-hidden border border-white/10 w-fit whitespace-nowrap min-w-[160px] min-h-[52px] focus-ring"
                  aria-label={strings.common.hireMe}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl" />
                  <span className="relative flex items-center justify-center gap-2 z-10 tracking-wide">
                    {strings.common.hireMe} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>

                <a
                  href={config.resumeUrl}
                  download="Charan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-xl"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-xl border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 backdrop-blur-sm text-slate-700 dark:text-white font-bold hover:border-indigo-400/40 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg dark:shadow-black/20 min-w-[170px]"
                  >
                    <FileText size={18} className="text-emerald-500 dark:text-emerald-400" />
                    <span>{strings.common.downloadCV}</span>
                  </motion.button>
                </a>
              </motion.div>

              <HeroSocials variants={item} />
            </div>

            {/* RIGHT CARD */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-slate-300 dark:border-slate-700"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-slate-200 dark:border-slate-800"
                />

                {/* Profile Card */}
                <motion.div
                  className="absolute inset-0 m-auto w-64 h-auto bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 relative group">
                    <img
                      src={charanAvatar}
                      alt={strings.hero.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(strings.hero.name)}&background=6366f1&color=fff&size=256`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">Hello there! 👋</span>
                    </div>
                  </div>
                  <div className="space-y-2" aria-hidden="true">
                    <div className="h-2 w-1/3 bg-indigo-500/50 rounded-full" />
                    <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  </div>
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -right-4 top-10 bg-white/80 dark:bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 shadow-lg text-xs text-slate-800 dark:text-white font-medium flex items-center gap-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>🚀</span> 3+ Years Exp
                </motion.div>

                <motion.div
                  className="absolute -left-8 bottom-20 bg-white/80 dark:bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 shadow-lg text-xs text-slate-800 dark:text-white font-medium flex items-center gap-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span>💻</span> Full Stack
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </StarfieldBackground>
  )
}

