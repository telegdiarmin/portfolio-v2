import { SkillTag } from "./SkillTag";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SkillTag", () => {
  it("renders without crashing", () => {
    const mockName = "JavaScript";
    const mockCategory = "technology";

    render(<SkillTag name={mockName} category={mockCategory} />);

    expect(screen.getByText(mockName.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(mockName.toUpperCase()).parentElement).toHaveClass(
      "skill-tag--technology"
    );
  });
});
