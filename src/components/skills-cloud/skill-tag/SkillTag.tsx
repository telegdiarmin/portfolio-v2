import "./SkillTag.scss";
import type { SkillTagProps } from "./skill-tag.types";
import { SkillCategoriesEnum } from "@/resources/data/skills-data";
import { getClasses } from "@/utils";

export const SkillTag = ({ name, category, className = "" }: SkillTagProps) => {
  const variant: string =
    category === SkillCategoriesEnum.TECHNOLOGY ? "technology"
    : category === SkillCategoriesEnum.TOOL ? "tool"
    : "language";
  const classes = getClasses(["skill-tag", `skill-tag--${variant}`, className]);

  return (
    <div className={classes}>
      <span>{name.toUpperCase()}</span>
    </div>
  );
};
