import "./Button.scss";
import type { ButtonProps } from "./button.types";
import { getClasses } from "@/utils";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) => {
  const classes = getClasses([
    "button",
    `button--${variant}`,
    `button--${size}`,
    className,
  ]);

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  );
};
