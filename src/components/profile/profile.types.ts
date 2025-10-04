import type { JSX } from "react";

import type { ProfileData } from "@/resources/data/profile-data";

export type ProfileProps = {
  data: ProfileData;
  children?: JSX.Element;
};
