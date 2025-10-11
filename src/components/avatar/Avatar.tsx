import "./Avatar.scss";
import type { AvatarProps } from "./avatar.types";
import { getClasses } from "@/utils";

export const Avatar = ({ width = "normal", className = "" }: AvatarProps) => {
  const classes = getClasses(["avatar", `avatar--${width}`, className]);

  return (
    <div className={classes}>
      <img
        src='/profile-picture.jpg'
        alt='Profile avatar'
        className='avatar__image'
        draggable={false}
      />
    </div>
  );
};
