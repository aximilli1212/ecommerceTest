import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import Search from '../../screens/Search/Search';

// Mock axios module to simulate API calls
jest.mock('axios');

describe('Search component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <NavigationContainer>
        <Search />
      </NavigationContainer>,
    );

    const searchInput = getByPlaceholderText('Find your products ...');
    const searchButton = getByTestId('search-button');

    expect(searchInput).toBeTruthy();
    expect(searchButton).toBeTruthy();
  });

  it('displays image when no search results', () => {
    const { queryByTestId } = render(<Search />);

    expect(queryByTestId('search-image')).toBeTruthy();
  });

  it('Displays error message if an error is thrown', async () => {
    const mockResponse = [
      {
        bad: 'Product',
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockResponse });

    const { getByPlaceholderText, getByTestId, getByText } = render(<Search />);

    const searchInput = getByPlaceholderText('Find your products ...');
    const searchButton = getByTestId('search-button');

    fireEvent.changeText(searchInput, 'product');
    fireEvent.press(searchButton);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('product'),
      );
      expect(getByText('Try again')).toBeTruthy();
    });
  });
});
