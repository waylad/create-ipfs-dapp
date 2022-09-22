import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ipfs', () => {
  render(<App />);
  const linkElement = screen.getByText(/ipfs/i);
  expect(linkElement).toBeInTheDocument();
});
