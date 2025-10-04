import { SkillTag } from "./SkillTag";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SkillTag", () => {
  it("renders without crashing", () => {
    render(<SkillTag />);
    expect(screen.getByText("SkillTag")).toBeInTheDocument();
  });
});
