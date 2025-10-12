import "./TimelineItem.scss";
import type { TimelineItemProps } from "./timeline-item.types";
import { getClasses } from "@/utils";

export const TimelineItem = ({
  className = "",
  side,
  ...props
}: TimelineItemProps) => {
  const classes = getClasses([
    "timeline-item",
    `timeline-item--${side}`,
    className,
  ]);

  const startDate = new Date(props.startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const endDate =
    props.endDate ?
      new Date(props.endDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "PRESENT";

  return (
    <div className={classes}>
      <div className='timeline-item__content'>
        <h3 className='timeline-item__title'>
          <span>{props.title}</span>
          <span className='timeline-item__divider'> @ </span>
          <span>{props.organization}</span>
        </h3>
        <h4 className='timeline-item__date'>
          <span>{startDate.toUpperCase()}</span>
          <span className='timeline-item__divider'> - </span>
          <span>{endDate.toUpperCase()}</span>
        </h4>
        <p className='timeline-item__description'>{props.description}</p>
      </div>
    </div>
  );
};
