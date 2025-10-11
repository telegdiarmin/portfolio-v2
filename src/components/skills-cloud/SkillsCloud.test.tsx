import { SkillsCloud } from "./SkillsCloud";
import type { SkillType } from "@/resources/data/skills-data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SkillsCloud", () => {
  const mockData: SkillType[] = [
    { name: "JavaScript", category: "technology" },
    { name: "TypeScript", category: "technology" },
    { name: "React", category: "technology" },
  ];
  it("renders without crashing", () => {
    render(<SkillsCloud skills={mockData} />);
    expect(screen.getByText("JAVASCRIPT")).toBeInTheDocument();
    expect(screen.getByText("TYPESCRIPT")).toBeInTheDocument();
    expect(screen.getByText("REACT")).toBeInTheDocument();
  });
});
