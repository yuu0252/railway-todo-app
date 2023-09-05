import { render, screen } from '@testing-library/react';
import App from './App';

/* eslint no-undef: 0 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  /* eslint no-undef: 0 */
  expect(linkElement).toBeInTheDocument();
});
