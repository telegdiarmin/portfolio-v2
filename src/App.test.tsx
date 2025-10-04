import App from "@/App";
import { render, screen } from "@testing-library/react";

describe("App Component", () => {
  it("should render without crashing", () => {
    render(<App />);
  });

  it("should display portfolio components", () => {
    render(<App />);
    expect(screen.getByText("Welcome to my portfolio")).toBeInTheDocument();
  });
});
