import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
    expect(() => getByText('Product List')).not.toThrow();
  });
});
