import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ProductList from '../../components/ProductList/ProductList';
import useFetch from '../../hooks/useFetch';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../../hooks/useFetch');

describe('ProductList', () => {
  it('renders loading state', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: jest.fn(),
    });

    const { getByTestId } = render(<ProductList />);

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders error state', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: 'Error fetching products',
      refetch: jest.fn(),
    });

    const { getByText } = render(<ProductList />);

    expect(getByText('Error fetching products')).toBeTruthy();
  });

  it('renders data after fetch', async () => {
    const mockRefetch = jest.fn();
    useFetch.mockReturnValue({
      data: [
        {
          title: 'Product 1',
          imageUrl: 'image1.jpg',
          price: 10,
        },
        {
          title: 'Product 2',
          imageUrl: 'image2.jpg',
          price: 20,
        },
      ],
      loading: false,
      error: null,
      refetch: mockRefetch,
    });

    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <ProductList />
      </NavigationContainer>,
    );

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('Product 2')).toBeTruthy();
  });
});
