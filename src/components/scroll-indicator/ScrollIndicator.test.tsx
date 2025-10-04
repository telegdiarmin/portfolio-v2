import { ScrollIndicator } from "./ScrollIndicator";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("ScrollIndicator", () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders the scroll indicator", () => {
    const { container } = render(<ScrollIndicator />);
    const indicator = container.querySelector(".scroll-indicator");
    expect(indicator).toBeInTheDocument();
  });

  it("renders the expand_more icon", () => {
    render(<ScrollIndicator />);
    const icon = screen.getByText("expand_more");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("material-icons");
  });

  it("has the correct icon class", () => {
    render(<ScrollIndicator />);
    const icon = screen.getByText("expand_more");
    expect(icon).toHaveClass("scroll-indicator__icon");
  });

  it("calls scrollIntoView when clicked", async () => {
    const user = userEvent.setup();
    const mockElement = document.createElement("div");
    mockElement.id = "about";
    document.body.appendChild(mockElement);

    const { container } = render(<ScrollIndicator />);
    const indicator = container.querySelector(".scroll-indicator");

    await user.click(indicator!);

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    document.body.removeChild(mockElement);
  });

  it("scrolls to custom target when targetSelector is provided", async () => {
    const user = userEvent.setup();
    const mockElement = document.createElement("div");
    mockElement.id = "custom-section";
    document.body.appendChild(mockElement);

    const { container } = render(
      <ScrollIndicator targetSelector='#custom-section' />
    );
    const indicator = container.querySelector(".scroll-indicator");

    await user.click(indicator!);

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    document.body.removeChild(mockElement);
  });
});
