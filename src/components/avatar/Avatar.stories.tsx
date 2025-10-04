import { Avatar } from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    width: {
      control: "select",
      options: ["small", "normal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: "normal",
  },
};

export const Small: Story = {
  args: {
    width: "small",
  },
};
