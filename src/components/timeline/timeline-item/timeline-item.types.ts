import type { TimelineDataType } from "@/resources/data/timeline-data";

export interface TimelineItemProps extends TimelineDataType {
  side: "left" | "right";
  className?: string;
}
