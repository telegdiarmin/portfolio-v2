import { Avatar } from "../avatar";
import { Profile } from "./Profile";
import type { ProfileProps } from "./profile.types";
import { profileData } from "@/resources/data/profile-data";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: <Avatar />,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: profileData,
  } satisfies ProfileProps,
};

export const CustomData: Story = {
  args: {
    data: {
      name: "John Doe",
      title: "Frontend Developer",
      bio: "A passionate developer with a love for creating beautiful user interfaces. Experienced in React, TypeScript, and modern web technologies.",
      email: "john.doe@example.com",
    },
  },
};
