import { ScrollIndicator } from "./ScrollIndicator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollIndicator> = {
  title: "Components/ScrollIndicator",
  component: ScrollIndicator,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    targetSelector: {
      control: "text",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomTarget: Story = {
  args: {
    targetSelector: "#footer",
    icon: "south",
  },
};
