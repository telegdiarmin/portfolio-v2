import { useRef } from "react";

import { ScrollIndicator } from "./ScrollIndicator";
import type { ScrollIndicatorProps } from "./scroll-indicator.types";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

const ScrollIndicatorWithMockRef = (
  props: Omit<ScrollIndicatorProps, "targetRef">
) => {
  const mockRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ScrollIndicator {...props} targetRef={mockRef} />
      <div ref={mockRef} data-testid='scroll-target'>
        Target Section
      </div>
    </>
  );
};

describe("ScrollIndicator", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  it("renders the scroll indicator", () => {
    const { container } = render(<ScrollIndicatorWithMockRef />);
    const indicator = container.querySelector(".scroll-indicator");
    expect(indicator).toBeInTheDocument();
  });

  it("renders the expand_more icon", () => {
    render(<ScrollIndicatorWithMockRef />);
    const icon = screen.getByText("expand_more");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("material-icons");
  });

  it("has the correct icon class", () => {
    render(<ScrollIndicatorWithMockRef />);
    const icon = screen.getByText("expand_more");
    expect(icon).toHaveClass("scroll-indicator__icon");
  });

  it("renders the target element", () => {
    render(<ScrollIndicatorWithMockRef />);
    const target = screen.getByTestId("scroll-target");
    expect(target).toBeInTheDocument();
  });

  it("calls scrollIntoView when clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<ScrollIndicatorWithMockRef />);
    const indicator = container.querySelector(".scroll-indicator");
    const target = screen.getByTestId("scroll-target");

    await user.click(indicator!);

    expect(target.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("applies custom className when provided", () => {
    const { container } = render(
      <ScrollIndicatorWithMockRef className='custom-class' />
    );
    const indicator = container.querySelector(".scroll-indicator");
    expect(indicator).toHaveClass("scroll-indicator");
    expect(indicator).toHaveClass("custom-class");
  });
});
