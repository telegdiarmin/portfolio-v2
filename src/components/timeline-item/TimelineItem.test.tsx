import { TimelineItem } from "./TimelineItem";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TimelineItem", () => {
  it("renders without crashing", () => {
    render(<TimelineItem />);
    expect(screen.getByText("TimelineItem")).toBeInTheDocument();
  });
});
