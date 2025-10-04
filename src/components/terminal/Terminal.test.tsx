import { Terminal } from "./Terminal";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Terminal", () => {
  it("renders without crashing", () => {
    render(<Terminal />);
    expect(screen.getByText("Terminal")).toBeInTheDocument();
  });
});
