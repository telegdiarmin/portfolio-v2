import { Heading } from "./Heading";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Heading", () => {
  it("renders without crashing", () => {
    const mockText = "Title";
    render(<Heading text={mockText} size={"large"} />);
    expect(screen.getByText(mockText)).toBeTruthy();
  });
});
