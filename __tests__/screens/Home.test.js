import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../screens/Home';

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(<HomeScreen />);

    expect(() => getByText('Hello World')).not.toThrow();
  });
});
