import { Timeline } from "./Timeline";
import type { TimelineDataType } from "@/resources/data/timeline-data";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Timeline", () => {
  const mockData: TimelineDataType[] = [
    {
      id: "1",
      title: "Test Title",
      organization: "Test Organization",
      location: "Test Location",
      startDate: "2024-01-15",
      endDate: "2024-01-20",
      description: "Test Description",
      type: "work",
    },
  ];
  it("renders without crashing", () => {
    render(<Timeline data={mockData} />);
    expect(screen.getByText("Test Organization")).toBeInTheDocument();
  });
});
