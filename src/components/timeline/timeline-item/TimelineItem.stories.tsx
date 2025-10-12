import { TimelineItem } from "./TimelineItem";
import type { TimelineItemProps } from "./timeline-item.types";
import type { TimelineDataType } from "@/resources/data/timeline-data";
import type { Meta, StoryObj } from "@storybook/react";

const data: TimelineDataType = {
  title: "Software Engineer",
  organization: "Tech Company",
  startDate: "2020-01-01",
  endDate: "2022-12-31",
  id: "1",
  type: "work",
  location: "Remote",
  description: "Working on various web applications using modern technologies.",
};

const meta: Meta<typeof TimelineItem> = {
  title: "Components/Timeline/TimelineItem",
  component: TimelineItem,
  parameters: {
    layout: "centered",
  },
  args: {
    ...data,
    side: "left",
  } satisfies TimelineItemProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Right: Story = {
  args: {
    ...data,
    side: "right",
  } satisfies TimelineItemProps,
};

export const NoEndDate: Story = {
  args: {
    endDate: undefined,
  },
};
