import { Avatar } from "./Avatar";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Avatar", () => {
  it("renders the avatar image", () => {
    render(<Avatar />);
    const image = screen.getByAltText("Profile avatar");
    expect(image).toBeInTheDocument();
  });

  it("applies correct default size class", () => {
    const { container } = render(<Avatar />);
    const avatarDiv = container.querySelector(".avatar--normal");
    expect(avatarDiv).toBeInTheDocument();
  });

  it("applies small size class when width is small", () => {
    const { container } = render(<Avatar width='small' />);
    const avatarDiv = container.querySelector(".avatar--small");
    expect(avatarDiv).toBeInTheDocument();
  });
});
