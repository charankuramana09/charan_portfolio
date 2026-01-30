// SkillsGrid.tsx
import React from 'react';
import { skills } from './skills.data';
import { SkillCard } from './SkillCard';

/**
 * SkillsGrid - Grid container for skill cards
 * Usage:
 * <SkillsGrid />
 */
export const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill, i) => (
        <SkillCard key={skill.id} skill={skill} index={i} />
      ))}
    </div>
  );
};

/**
 * Installation:
 * npm install framer-motion
 *
 * Usage Example:
 * import { SkillsGrid } from './SkillsGrid';
 * <SkillsGrid />
 */
