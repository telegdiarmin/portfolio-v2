import type { FC } from "react";

import "./Typewriter.scss";
import type { TypewriterProps } from "./typewriter.types";

export const Typewriter: FC<TypewriterProps> = ({ text }) => {
  return <div>{text}</div>;
};
