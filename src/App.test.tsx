import { render, screen } from "@testing-library/react";

import App from "@/App";

describe("App Component", () => {
  it("should render without crashing", () => {
    render(<App />);
    expect(screen.getByText("Armin Telegdi")).toBeInTheDocument();
  });

  it("should display portfolio components", () => {
    render(<App />);
    expect(screen.getByText("Welcome to my portfolio")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Software Developer")).toBeInTheDocument();
  });
});
