import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import APOD from '../src/pages/APOD';

jest.mock('axios');

describe('APOD component', () => {
  test('renders without crashing', () => {
    render(<APOD />);
  });

  test('displays fetched data correctly', async () => {
    const mockData = {
      url: 'mock-image-url',
      title: 'Mock Title',
      date: '2024-05-05',
      explanation: 'Mock explanation',
      copyright: 'Mock Author'
    };

    axios.get.mockResolvedValueOnce({ data: mockData });

    const { getByAltText, getByText } = render(<APOD />);

    // Wait for the API call to resolve
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Check if the image and details are displayed correctly
    expect(getByAltText('APOD')).toBeInTheDocument();
    expect(getByText('Mock Title')).toBeInTheDocument();
    expect(getByText('2024-05-05')).toBeInTheDocument();
    expect(getByText('Mock Author')).toBeInTheDocument();
    expect(getByText('Mock explanation')).toBeInTheDocument();
  });

  test('toggles details correctly', async () => {
    const mockData = {
      url: 'mock-image-url',
      title: 'Mock Title',
      date: '2024-05-05',
      explanation: 'Mock explanation',
      copyright: 'Mock Author'
    };

    axios.get.mockResolvedValueOnce({ data: mockData });

    const { getByText, queryByText } = render(<APOD />);

    // Wait for the API call to resolve
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    // Check if the details are initially hidden
    expect(queryByText('Mock Title')).not.toBeInTheDocument();
    expect(queryByText('2024-05-05')).not.toBeInTheDocument();
    expect(queryByText('Mock Author')).not.toBeInTheDocument();
    expect(queryByText('Mock explanation')).not.toBeInTheDocument();

    // Click the "Open Details" button
    fireEvent.click(getByText('Open Details'));

    // Check if the details are displayed after clicking the button
    expect(getByText('Mock Title')).toBeInTheDocument();
    expect(getByText('2024-05-05')).toBeInTheDocument();
    expect(getByText('Mock Author')).toBeInTheDocument();
    expect(getByText('Mock explanation')).toBeInTheDocument();

    // Click the "Close Details" button
    fireEvent.click(getByText('Close Details'));

    // Check if the details are hidden again after clicking the button
    expect(queryByText('Mock Title')).not.toBeInTheDocument();
    expect(queryByText('2024-05-05')).not.toBeInTheDocument();
    expect(queryByText('Mock Author')).not.toBeInTheDocument();
    expect(queryByText('Mock explanation')).not.toBeInTheDocument();
  });
});
