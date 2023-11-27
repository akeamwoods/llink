import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card Component", () => {
  it("renders the title and author", () => {
    render(<Card title="Post title" author="John Doe" avatar="avatar.jpg" />);

    expect(screen.getByText("Post title")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders the description when provided", () => {
    render(
      <Card
        title="Post title"
        author="John Doe"
        avatar="avatar.jpg"
        description="description text"
      />
    );

    expect(screen.getByText("description text")).toBeInTheDocument();
  });
});
