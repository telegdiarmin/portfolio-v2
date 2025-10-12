import { Timeline } from "./Timeline";
import type { TimelineProps } from "./timeline.types";
import type { TimelineDataType } from "@/resources/data/timeline-data";
import type { Meta, StoryObj } from "@storybook/react";

const sampleData: TimelineDataType[] = [
  {
    id: "1",
    title: "Started New Job",
    organization: "Tech Corp",
    location: "Remote",
    startDate: "2024-01-15",
    description: "Joined as a Senior Frontend Developer at Tech Corp",
    type: "work",
  },
  {
    id: "2",
    title: "Bootcamp",
    organization: "Coding Monkeys",
    location: "Budapest",
    startDate: "2023-08-01",
    endDate: "2024-01-15",
    description:
      "Completed a full-stack web development bootcamp focusing on MERN stack.",
    type: "education",
  },
];

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleData,
  } satisfies TimelineProps,
};
