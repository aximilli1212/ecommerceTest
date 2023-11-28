import React from 'react';
import ProductDetails from '../../screens/ProductDetails/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('ProductDetails', () => {
  it('renders correctly', () => {
    const item = {
      imageUrl: 'image1.jpg',
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
    };

    useRoute.mockReturnValue({
      params: {
        item,
      },
    });

    const { getByText } = render(<ProductDetails />);

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('€ 10')).toBeTruthy();
    expect(getByText('Description 1')).toBeTruthy();
  });

  it('navigates back when back button is pressed', () => {
    const mockGoBack = jest.fn();
    useNavigation.mockReturnValue({
      goBack: mockGoBack,
    });

    const { getByTestId } = render(<ProductDetails />);

    fireEvent.press(getByTestId('back-button'));

    expect(mockGoBack).toHaveBeenCalled();
  });
});
