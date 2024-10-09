import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "./calculator";

test("calculates the sum of numbers", () => {
  render(<Calculator />);
  const input = screen.getByPlaceholderText(/Enter numbers/i);
  const button = screen.getByText(/Calculate/i);

  fireEvent.change(input, { target: { value: "1,2,3" } });
  fireEvent.click(button);

  expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
});

test("shows an error message for negative numbers", () => {
  render(<Calculator />);
  const input = screen.getByPlaceholderText(/Enter numbers/i);
  const button = screen.getByText(/Calculate/i);

  fireEvent.change(input, { target: { value: "1,-2,3,-4" } });
  fireEvent.click(button);

  expect(screen.getByText(/Negative numbers not allowed/i)).toBeInTheDocument();
});
