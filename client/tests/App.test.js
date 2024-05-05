import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import axios from 'axios';

jest.mock('axios');

describe('App component', () => {
  test('renders navbar and home page by default', async () => {
    render(<App />, { wrapper: MemoryRouter });

    // Check if navbar is rendered
    const navbarElement = screen.getByText('Navbar');
    expect(navbarElement).toBeInTheDocument();

    // Check if home page is rendered by default
    const homeElement = screen.getByText('Home Page');
    expect(homeElement).toBeInTheDocument();
  });

  test('redirects to login page for private routes when not authenticated', async () => {
    // Mock authentication middleware to return false
    jest.spyOn(require('./middleware/authMiddleware'), 'authMiddleware').mockReturnValue(false);

    render(<App />, { wrapper: MemoryRouter });

    // Check if redirected to login page for private routes
    await waitFor(() => {
      const loginElement = screen.getByText('Login Page');
      expect(loginElement).toBeInTheDocument();
    });
  });

  test('renders private routes when authenticated', async () => {
    // Mock authentication middleware to return true
    jest.spyOn(require('./middleware/authMiddleware'), 'authMiddleware').mockReturnValue(true);

    render(<App />, { wrapper: MemoryRouter });

    // Check if private routes are rendered when authenticated
    await waitFor(() => {
      const apodElement = screen.getByText('APOD Page');
      const marsRoverElement = screen.getByText('Mars Rover Page');
      const photosElement = screen.getByText('Photos Page');

      expect(apodElement).toBeInTheDocument();
      expect(marsRoverElement).toBeInTheDocument();
      expect(photosElement).toBeInTheDocument();
    });
  });
});
