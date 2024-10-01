import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

test('renders the Sidebar component', () => {
  const { container } = render(<Sidebar />);
  expect(container).toBeInTheDocument(); 
});
