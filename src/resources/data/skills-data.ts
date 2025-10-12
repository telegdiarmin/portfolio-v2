export const SkillCategoriesEnum = {
  TECHNOLOGY: "technology",
  TOOL: "tool",
  LANGUAGE: "language",
} as const;

type SkillCategoryType =
  (typeof SkillCategoriesEnum)[keyof typeof SkillCategoriesEnum];

export type SkillDataType = {
  name: string;
  category: SkillCategoryType;
};

export const skillsData: SkillDataType[] = [
  { name: "React", category: "technology" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Node.js", category: "technology" },
  { name: "CSS/SCSS", category: "technology" },
  { name: "Git", category: "tool" },
  // Additional skills will be added during migration
];
