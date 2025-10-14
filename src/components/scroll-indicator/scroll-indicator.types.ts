import type { RefObject } from "react";

export interface ScrollIndicatorProps {
  targetRef: RefObject<HTMLElement | null>;
  className?: string;
}
