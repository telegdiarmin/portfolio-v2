import { TimelineItem } from "./TimelineItem";
import type { TimelineItemProps } from "./timeline-item.types";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TimelineItem", () => {
  const mockProps: TimelineItemProps = {
    id: "1",
    title: "Test Title",
    organization: "Test Organization",
    location: "Test Location",
    startDate: "2024-01-15",
    endDate: "2024-01-20",
    description: "Test Description",
    type: "work",
    side: "left",
  };
  it("renders without crashing", () => {
    render(<TimelineItem {...mockProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
