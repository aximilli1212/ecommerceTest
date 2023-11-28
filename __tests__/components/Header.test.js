import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header/Header';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Header', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Header />);

    expect(getByText('Find the cheapest products')).toBeTruthy();
    expect(getByPlaceholderText('Find your perfect product ...')).toBeTruthy();
  });

  it('navigates to Search when TextInput is pressed', () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByPlaceholderText } = render(<Header />);

    fireEvent(
      getByPlaceholderText('Find your perfect product ...'),
      'onPressIn',
    );

    expect(mockNavigate).toHaveBeenCalledWith('Search');
  });
});
