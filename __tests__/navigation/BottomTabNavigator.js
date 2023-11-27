import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../../navigation/BottomTabNavigator';

describe('BottomTabNavigator', () => {
  it('renders the Home tab by default', () => {
    const { getByText } = render(
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>,
    );

    expect(getByText('Home')).toBeTruthy();
  });
});
