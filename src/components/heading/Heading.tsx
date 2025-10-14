import "./Heading.scss";
import type { HeadingProps } from "./heading.types";
import { getClasses } from "@/utils";

export const Heading = ({ text, size, className = "" }: HeadingProps) => {
  const fontSize = size === "large" ? "large" : "normal";
  const classes = getClasses(["heading", `heading--${fontSize}`, className]);

  return <h2 className={classes}>{text}</h2>;
};
