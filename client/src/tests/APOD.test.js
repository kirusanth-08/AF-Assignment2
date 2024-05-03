import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import APOD from '../components/APOD';

jest.mock('axios');

describe('APOD component', () => {
  test('renders without crashing', async () => {
    render(<APOD />);
    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());
  });

  test('displays image and details after fetching data', async () => {
    const mockData = {
      title: 'Test APOD',
      date: '2024-05-03',
      explanation: 'Test explanation',
      url: 'https://example.com/image.jpg',
      copyright: 'Test author'
    };
    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<APOD />);
    await waitFor(() => expect(screen.getByAltText('APOD')).toBeInTheDocument());
    expect(screen.getByText('Title: Test APOD')).toBeInTheDocument();
    expect(screen.getByText('Date: 2024-05-03')).toBeInTheDocument();
    expect(screen.getByText('Author: Test author')).toBeInTheDocument();
    expect(screen.getByText('Description: Test explanation')).toBeInTheDocument();
  });

  test('toggles detail view when button is clicked', async () => {
    const mockData = {
      title: 'Test APOD',
      date: '2024-05-03',
      explanation: 'Test explanation',
      url: 'https://example.com/image.jpg',
      copyright: 'Test author'
    };
    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<APOD />);
    await waitFor(() => expect(screen.getByAltText('APOD')).toBeInTheDocument());

    fireEvent.click(screen.getByText('Open Details'));
    expect(screen.getByText('Close Details')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Close Details'));
    expect(screen.getByText('Open Details')).toBeInTheDocument();
  });
});
