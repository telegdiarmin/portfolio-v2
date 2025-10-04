import { ScrollIndicator } from "./ScrollIndicator";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ScrollIndicator", () => {
  it("renders without crashing", () => {
    render(<ScrollIndicator />);
    expect(screen.getByText("ScrollIndicator")).toBeInTheDocument();
  });
});
