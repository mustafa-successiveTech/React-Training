import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter"; // use relative path

describe("Counter Component", () => {
  test("renders with initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText(/Count/i)).toBeInTheDocument("Count : 0");
  });

  test('increments the count when "+" button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count/i)).toBeInTheDocument("Count : 1");
  });

  test("does not decrement below 0", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count/i)).toBeInTheDocument("Count : 0");
  });

  test("decrements the count after increment", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    fireEvent.click(incrementButton); // count = 1
    fireEvent.click(decrementButton); // count = 0
    expect(screen.getByText(/Count/i)).toBeInTheDocument("Count : 0");
  });
});
