export interface TimelineItem {
  id: string;
  title: string;
  company?: string;
  period: string;
  description: string;
  type: "work" | "education" | "project";
}

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Senior Software Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description:
      "Leading development of web applications using React and TypeScript.",
    type: "work",
  },
  {
    id: "2",
    title: "Software Developer",
    company: "Previous Company",
    period: "2021 - 2023",
    description: "Developed and maintained full-stack applications.",
    type: "work",
  },
  // Additional timeline items will be added during migration
];
