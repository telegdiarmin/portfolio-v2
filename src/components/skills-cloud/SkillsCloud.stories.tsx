import { SkillsCloud } from "./SkillsCloud";
import type { SkillsCloudProps } from "./skills-cloud.types";
import type { SkillDataType } from "@/resources/data/skills-data";
import type { Meta, StoryObj } from "@storybook/react";

const skills: SkillDataType[] = [
  { name: "JavaScript", category: "technology" },
  { name: "TypeScript", category: "technology" },
  { name: "React", category: "technology" },
  { name: "Node.js", category: "technology" },
  { name: "GraphQL", category: "technology" },
  { name: "CLI", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Jest", category: "tool" },
  { name: "Webpack", category: "tool" },
  { name: "English", category: "language" },
  { name: "Spanish", category: "language" },
  { name: "French", category: "language" },
  { name: "German", category: "language" },
];

const meta: Meta<typeof SkillsCloud> = {
  title: "Components/SkillsCloud",
  component: SkillsCloud,
  parameters: {
    layout: "centered",
  },
  args: {
    skills,
  } satisfies SkillsCloudProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
