// SkillCard.tsx
import React from 'react';

export interface Skill {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/60 border border-slate-700 shadow-md hover:scale-105 transition-transform duration-200" style={{ color: skill.color }}>
      <div className="text-3xl mb-2">{skill.icon}</div>
      <div className="font-semibold text-base text-slate-100 mb-1">{skill.name}</div>
    </div>
  );
};
