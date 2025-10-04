import { Typewriter } from "./Typewriter";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Typewriter", () => {
  it("renders with provided text", () => {
    render(<Typewriter text='Typewriter' />);
    expect(screen.getByText("Typewriter")).toBeInTheDocument();
  });
});
