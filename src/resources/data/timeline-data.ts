export type TimelineDataType = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  type: "work" | "education";
};

export const timelineData: TimelineDataType[] = [
  {
    id: "1",
    title: "Senior Software Developer",
    organization: "Tech Company",
    location: "Budapest",
    startDate: "2023-01-01",
    endDate: "Present",
    description:
      "Leading development of web applications using React and TypeScript.",
    type: "work",
  },
  {
    id: "2",
    title: "Software Developer",
    organization: "Previous Company",
    location: "Budapest",
    startDate: "2021-01-01",
    endDate: "2023-01-01",
    description: "Developed and maintained full-stack applications.",
    type: "work",
  },
  // Additional timeline items will be added during migration
];
