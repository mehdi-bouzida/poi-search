import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const Title = screen.getByText(/Search Points of interest in the UK/i);
  expect(Title).toBeInTheDocument();
});
