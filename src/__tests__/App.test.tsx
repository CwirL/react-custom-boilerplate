import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('should work', () => {
  render(<App />);
  screen.debug();
});
