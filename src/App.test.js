import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/String Calculator/i);
  expect(headingElement).toBeInTheDocument();
});

