import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import Search from '../../screens/Search/Search';

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
    const { queryByTestId } = render(
      <NavigationContainer>
        <Search />
      </NavigationContainer>,
    );

    expect(queryByTestId('search-image')).toBeTruthy();
  });

  it('Correctly displays search results', async () => {
    const mockResponse = [
      {
        title: 'Product 1',
        imageUrl: 'image1.jpg',
        description: 'Description 1',
        price: 10,
      },
      {
        title: 'Product 2',
        imageUrl: 'image2.jpg',
        description: 'Description 2',
        price: 20,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockResponse });

    const { getByPlaceholderText, getByTestId, getByText } = render(
      <NavigationContainer>
        <Search />
      </NavigationContainer>,
    );

    const searchInput = getByPlaceholderText('Find your products ...');
    const searchButton = getByTestId('search-button');

    fireEvent.changeText(searchInput, 'product');
    fireEvent.press(searchButton);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('product'),
      );
      expect(getByText('Product 1')).toBeTruthy();
    });
  });

  it('should throw an error', async () => {
    const mockError = new Error('Network error');

    axios.get.mockRejectedValueOnce(mockError);

    await expect(axios.get('url')).rejects.toThrow('Network error');
  });
});
