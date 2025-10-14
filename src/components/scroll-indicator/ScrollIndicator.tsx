import "./ScrollIndicator.scss";
import type { ScrollIndicatorProps } from "./scroll-indicator.types";
import { getClasses } from "@/utils";

export const ScrollIndicator = ({
  targetRef,
  className = "",
}: ScrollIndicatorProps) => {
  const handleClick = () => {
    const target = targetRef?.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const classes = getClasses(["scroll-indicator", className]);

  return (
    <div className={classes} onClick={handleClick}>
      <i className='scroll-indicator__icon material-icons'>{"expand_more"}</i>
    </div>
  );
};
