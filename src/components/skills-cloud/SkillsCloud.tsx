import "./SkillsCloud.scss";
import { SkillTag } from "./skill-tag";
import type { SkillsCloudProps } from "./skills-cloud.types";
import { getClasses } from "@/utils";

export const SkillsCloud = ({ skills, className = "" }: SkillsCloudProps) => {
  const classes = getClasses(["skills-cloud", className]);

  const skillTags = skills.map((skill, idx) => (
    <SkillTag key={idx + 1} name={skill.name} category={skill.category} />
  ));

  return <div className={classes}>{skillTags}</div>;
};
