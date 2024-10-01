import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarIcon from './SidebarIcon';

test('renders the SidebarIcon component', () => {
  const { container } = render(<SidebarIcon />);
  expect(container).toBeInTheDocument(); 
});
