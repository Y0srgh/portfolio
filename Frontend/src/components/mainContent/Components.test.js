import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Components from './Components';

test('renders the Components component', () => {
  const { container } = render(<Components />);
  expect(container).toBeInTheDocument(); 
});
