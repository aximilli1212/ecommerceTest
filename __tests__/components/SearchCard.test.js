import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';

import SearchCard from '../../components/SearchCard/SearchCard';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('SearchCard', () => {
  it('renders correctly', () => {
    const item = {
      imageUrl: 'image1.jpg',
      title: 'Product 1',
      price: 10,
    };

    const { getByText } = render(<SearchCard item={item} />);

    expect(getByText('Product 1')).toBeTruthy();
    expect(getByText('€10')).toBeTruthy();
  });

  it('navigates to ProductDetails with correct parameters when pressed', () => {
    const item = {
      imageUrl: 'image1.jpg',
      title: 'Product 1',
      price: 10,
    };

    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByText } = render(<SearchCard item={item} />);

    fireEvent.press(getByText('Product 1'));

    expect(mockNavigate).toHaveBeenCalledWith('ProductDetails', { item });
  });
});
