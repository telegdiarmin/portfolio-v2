import { Dropdown } from "./Dropdown";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Dropdown", () => {
  it("renders without crashing", () => {
    render(<Dropdown />);
    expect(screen.getByText("Dropdown")).toBeInTheDocument();
  });
});
