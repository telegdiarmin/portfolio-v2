export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const skillsData: Skill[] = [
  { name: 'React', category: 'frontend', level: 'advanced' },
  { name: 'TypeScript', category: 'languages', level: 'advanced' },
  { name: 'JavaScript', category: 'languages', level: 'expert' },
  { name: 'Node.js', category: 'backend', level: 'intermediate' },
  { name: 'CSS/SCSS', category: 'frontend', level: 'advanced' },
  { name: 'Git', category: 'tools', level: 'advanced' }
  // Additional skills will be added during migration
];