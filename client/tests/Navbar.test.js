import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar'; // Update this path to the actual path of your Navbar component

test('renders Navbar component without crashing', () => {
  render(<Navbar />);
});