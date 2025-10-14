import type { ProfileDataType } from "@/resources/data/profile-data";

export interface ProfileProps {
  data: ProfileDataType;
  children: React.ReactNode;
}
