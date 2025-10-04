import { ProfileSection } from "./ProfileSection";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ProfileSection", () => {
  it("renders without crashing", () => {
    render(<ProfileSection />);
    expect(screen.getByText("ProfileSection")).toBeInTheDocument();
  });
});
