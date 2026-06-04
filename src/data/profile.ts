/**
 * Derived/presentational profile content for the redesigned portfolio.
 * Source-of-truth content (experience, projects, blog) still lives in portfolio.ts / projectsData.ts.
 */

export const githubUsername = 'charankuramana09';

/** Headline stats shown in the hero + about bento. */
export const heroStats: { label: string; value: number; suffix?: string }[] = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Shipped', value: 12, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Certifications', value: 6, suffix: '+' },
];

/** "Now" — what Charan is actively doing. Keep this fresh; it signals momentum. */
export const now = {
  updated: 'June 2026',
  items: [
    {
      emoji: '🏗️',
      title: 'Building',
      text: 'Scaling the XACT POS microservices platform on Azure Container Apps.',
    },
    {
      emoji: '📚',
      title: 'Learning',
      text: 'Kubernetes operators, event-driven design with Kafka, and system design.',
    },
    {
      emoji: '✍️',
      title: 'Writing',
      text: 'A hands-on series on Dockerizing Spring Boot and integrating Razorpay.',
    },
    {
      emoji: '🎯',
      title: 'Goal',
      text: 'Open to senior full-stack & backend-leaning roles and freelance builds.',
    },
  ],
};

export type Proficiency = 'Expert' | 'Advanced' | 'Proficient' | 'Familiar';

export interface SkillGroup {
  title: string;
  icon: 'code' | 'server' | 'database' | 'cloud';
  accent: string; // tailwind gradient classes
  skills: { name: string; level: Proficiency; pct: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    accent: 'from-brand-500 to-violet-500',
    skills: [
      { name: 'React.js', level: 'Advanced', pct: 90 },
      { name: 'TypeScript', level: 'Advanced', pct: 85 },
      { name: 'Tailwind CSS', level: 'Expert', pct: 92 },
      { name: 'Angular', level: 'Proficient', pct: 75 },
      { name: 'JavaScript', level: 'Advanced', pct: 88 },
      { name: 'HTML & CSS', level: 'Expert', pct: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    accent: 'from-violet-500 to-accent-400',
    skills: [
      { name: 'Java', level: 'Advanced', pct: 90 },
      { name: 'Spring Boot', level: 'Advanced', pct: 88 },
      { name: 'Microservices', level: 'Advanced', pct: 82 },
      { name: 'REST APIs', level: 'Expert', pct: 92 },
      { name: 'Spring Security / JWT', level: 'Advanced', pct: 84 },
      { name: '.NET (C#)', level: 'Proficient', pct: 70 },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    accent: 'from-accent-400 to-emerald-400',
    skills: [
      { name: 'MySQL', level: 'Advanced', pct: 86 },
      { name: 'PostgreSQL', level: 'Proficient', pct: 78 },
      { name: 'Oracle', level: 'Proficient', pct: 72 },
      { name: 'Cosmos DB', level: 'Familiar', pct: 60 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'cloud',
    accent: 'from-emerald-400 to-brand-500',
    skills: [
      { name: 'Docker', level: 'Advanced', pct: 82 },
      { name: 'Azure', level: 'Proficient', pct: 76 },
      { name: 'CI/CD Pipelines', level: 'Proficient', pct: 74 },
      { name: 'Kubernetes', level: 'Familiar', pct: 62 },
      { name: 'Git & GitHub', level: 'Expert', pct: 94 },
      { name: 'Kafka', level: 'Familiar', pct: 60 },
    ],
  },
];

/** Curated GitHub highlights — shown instead of raw (often-zero) follower/star counts. */
export const githubFeatured: {
  name: string;
  desc: string;
  language: string;
  langColor: string;
  tag: string;
}[] = [
  {
    name: 'react-portfolio',
    desc: 'This portfolio — React, TypeScript, Tailwind & Framer Motion.',
    language: 'TypeScript',
    langColor: 'bg-blue-500',
    tag: 'React',
  },
  {
    name: 'springboot-mvc-suite',
    desc: 'Spring Boot MVC + REST APIs with JWT security and MySQL.',
    language: 'Java',
    langColor: 'bg-orange-500',
    tag: 'Spring Boot',
  },
  {
    name: 'ai-chat-assistant',
    desc: 'Conversational AI assistant integrating an LLM for smart replies.',
    language: 'Python',
    langColor: 'bg-emerald-500',
    tag: 'AI',
  },
];

/** Curated language mix for the GitHub tile (proficiency-weighted). */
export const githubLanguages: { name: string; pct: number; color: string }[] = [
  { name: 'Java', pct: 90, color: 'bg-orange-500' },
  { name: 'JavaScript / TS', pct: 82, color: 'bg-blue-500' },
  { name: 'HTML / CSS', pct: 70, color: 'bg-rose-500' },
  { name: 'Python', pct: 55, color: 'bg-emerald-500' },
];

/** Flat tech list for the hero marquee. */
export const techMarquee = [
  'Java', 'Spring Boot', 'React', 'TypeScript', 'Microservices', 'Docker',
  'Azure', 'PostgreSQL', 'Kubernetes', 'Tailwind CSS', 'REST APIs', 'Kafka',
  'JWT', 'Angular', 'MySQL', 'CI/CD',
];
