import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
