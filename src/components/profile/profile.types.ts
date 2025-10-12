import type { JSX } from "react";

import type { ProfileDataType } from "@/resources/data/profile-data";

export type ProfileProps = {
  data: ProfileDataType;
  children?: JSX.Element;
};
