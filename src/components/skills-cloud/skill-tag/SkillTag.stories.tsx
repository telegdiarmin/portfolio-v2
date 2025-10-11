import { SkillTag } from "./SkillTag";
import type { SkillTagProps } from "./skill-tag.types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SkillTag> = {
  title: "Components/SkillsCloud/SkillTag",
  component: SkillTag,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "react",
    category: "technology",
  } satisfies SkillTagProps,
};

export const Language: Story = {
  args: {
    name: "english",
    category: "language",
  } satisfies SkillTagProps,
};
