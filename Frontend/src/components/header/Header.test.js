import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('renders the Header component', () => {
  const { container } = render(<Header />);
  expect(container).toBeInTheDocument(); 
});
