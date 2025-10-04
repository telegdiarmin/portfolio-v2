import { Avatar } from "./Avatar";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Avatar", () => {
  it("renders without crashing", () => {
    render(<Avatar />);
    expect(screen.getByText("Avatar")).toBeInTheDocument();
  });
});
