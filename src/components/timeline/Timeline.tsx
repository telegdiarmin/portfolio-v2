import "./Timeline.scss";
import { TimelineItem } from "./timeline-item";
import type { TimelineProps } from "./timeline.types";
import { getClasses } from "@/utils";

export const Timeline = ({
  data: timelineData,
  className = "",
}: TimelineProps) => {
  const classes = getClasses(["timeline", className]);

  const timelineItems = timelineData.map((item, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    return <TimelineItem key={item.id} side={side} {...item} />;
  });

  return <div className={classes}>{timelineItems}</div>;
};
