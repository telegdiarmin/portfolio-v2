import { SkillsCloud } from "./SkillsCloud";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SkillsCloud", () => {
  it("renders without crashing", () => {
    render(<SkillsCloud />);
    expect(screen.getByText("SkillsCloud")).toBeInTheDocument();
  });
});
