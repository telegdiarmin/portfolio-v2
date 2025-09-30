import { render, screen } from "@testing-library/react";

import App from "@/App";

describe("App Component", () => {
  it("should render without crashing", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("should display initial count", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /count is 0/i })
    ).toBeInTheDocument();
  });
});
