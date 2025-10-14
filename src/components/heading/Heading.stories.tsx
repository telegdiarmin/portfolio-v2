import { Heading } from "./Heading";
import type { HeadingProps } from "./heading.types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Default Heading",
    size: "large",
  } satisfies HeadingProps,
};

export const NormalSize: Story = {
  args: {
    text: "Normal Heading",
    size: "normal",
  } satisfies HeadingProps,
};
