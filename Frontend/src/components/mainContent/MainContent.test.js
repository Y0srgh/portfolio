import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainContent from './MainContent';

test('renders the MainContent component', () => {
  const { container } = render(<MainContent />);
  expect(container).toBeInTheDocument(); 
});
