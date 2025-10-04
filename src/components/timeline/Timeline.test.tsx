import { Timeline } from "./Timeline";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Timeline", () => {
  it("renders without crashing", () => {
    render(<Timeline />);
    expect(screen.getByText("Timeline")).toBeInTheDocument();
  });
});
