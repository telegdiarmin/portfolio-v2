import { Profile } from "./Profile";
import type { ProfileDataType } from "@/resources/data/profile-data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const mockProfileData: ProfileDataType = {
  name: "John Doe",
  title: "Software Engineer",
  bio: "A passionate developer with expertise in modern web technologies.",
  email: "john.doe@example.com",
};

const MockAvatar = () => {
  return <span>Avatar</span>;
};

describe("ProfileSection", () => {
  it("displays the name as title", () => {
    render(
      <Profile data={mockProfileData}>
        <MockAvatar />
      </Profile>
    );
    const title = screen.getByText("John Doe", { exact: false });
    expect(title).toBeInTheDocument();
  });

  it("displays an avatar component", () => {
    render(
      <Profile data={mockProfileData}>
        <MockAvatar />
      </Profile>
    );
    const mockAvatar = screen.getByText("Avatar");
    expect(mockAvatar).toBeInTheDocument();
  });

  it("displays the Profile subtitle", () => {
    render(
      <Profile data={mockProfileData}>
        <MockAvatar />
      </Profile>
    );
    const subtitle = screen.getByText("Profile");
    expect(subtitle).toBeInTheDocument();
  });

  it("displays the bio text", () => {
    render(
      <Profile data={mockProfileData}>
        <MockAvatar />
      </Profile>
    );
    const bio = screen.getByText(/A passionate developer with expertise/);
    expect(bio).toBeInTheDocument();
  });

  it("renders the email link with correct href", () => {
    render(
      <Profile data={mockProfileData}>
        <MockAvatar />
      </Profile>
    );
    const link = screen.getByRole("link", { name: /reach out to me/i });
    expect(link).toHaveAttribute("href", "mailto:john.doe@example.com");
  });

  it("has the correct link styling class", () => {
    render(
      <Profile data={mockProfileData}>
        <MockAvatar />
      </Profile>
    );
    const link = screen.getByRole("link", { name: /reach out to me/i });
    expect(link).toHaveClass("profile__link");
  });
});
