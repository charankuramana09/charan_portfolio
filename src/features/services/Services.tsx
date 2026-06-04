import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Bot, Cloud, ArrowUpRight, Check } from 'lucide-react';
import Section, { SectionHeading } from '../../shared/ui/Section';
import { StaggerGroup, staggerItem } from '../../shared/ui/Reveal';
import BentoTile from '../../shared/ui/BentoTile';

const services = [
  {
    icon: <Layout size={22} />,
    accent: 'from-brand-500 to-violet-500',
    title: 'Web Applications',
    desc: 'End-to-end, responsive web apps with React, TypeScript & Spring Boot — fast, accessible and built to scale.',
    points: ['React + Spring Boot', 'Responsive & accessible UI', 'Auth, dashboards, CRUD'],
  },
  {
    icon: <Server size={22} />,
    accent: 'from-violet-500 to-accent-400',
    title: 'APIs & Microservices',
    desc: 'Robust REST APIs and microservice architectures with secure auth, clean contracts and reliable data flow.',
    points: ['REST APIs & Swagger', 'Microservices & gateways', 'JWT / role-based security'],
  },
  {
    icon: <Bot size={22} />,
    accent: 'from-accent-400 to-emerald-400',
    title: 'AI Integrations',
    desc: 'LLM-powered chat, assistants and automation wired safely into your product with the right guardrails.',
    points: ['Chatbots & assistants', 'LLM orchestration', 'Prompting & guardrails'],
  },
  {
    icon: <Cloud size={22} />,
    accent: 'from-emerald-400 to-brand-500',
    title: 'Cloud & DevOps',
    desc: 'Containerised, CI/CD-driven deployments on Azure so every change ships predictably and safely.',
    points: ['Docker & containers', 'CI/CD pipelines', 'Azure deployment'],
  },
];

const Services: React.FC = () => {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Section id="services" aria-label="Services">
      <SectionHeading
        eyebrow="Services"
        title="How I can"
        highlight="help"
        subtitle="From a single feature to a full product — here's where I can move the needle for you."
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <motion.div key={s.title} variants={staggerItem}>
            <BentoTile className="group flex h-full flex-col">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                {s.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Check size={14} className="text-brand-500" /> {p}
                  </li>
                ))}
              </ul>
            </BentoTile>
          </motion.div>
        ))}
      </StaggerGroup>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <p className="text-slate-600 dark:text-slate-400">Have something specific in mind?</p>
        <button
          onClick={scrollToContact}
          className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-brand-gradient bg-[length:200%_auto] px-6 py-3 font-semibold text-white shadow-glow transition-[background-position] duration-500 hover:bg-right"
        >
          Let&apos;s talk
          <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </Section>
  );
};

export default React.memo(Services);
