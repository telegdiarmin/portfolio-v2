import { useRef } from "react";

import { ScrollIndicator } from "./ScrollIndicator";
import type { Meta, StoryObj } from "@storybook/react";

const Wrapper = () => {
  const mockRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ScrollIndicator targetRef={mockRef} />
      </div>
      <div
        ref={mockRef}
        style={{
          marginTop: "100vh",
          padding: "2rem",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Target Section (scroll to see effect)
      </div>
    </>
  );
};

const meta: Meta<typeof ScrollIndicator> = {
  title: "Components/ScrollIndicator",
  component: ScrollIndicator,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollIndicator>;

export const Default: Story = {
  render: () => <Wrapper />,
};
