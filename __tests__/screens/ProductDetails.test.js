import React from 'react';
import ProductDetails from '../../screens/ProductDetails/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';

describe('ProductDetails', () => {
  it('renders product details', async () => {
    const route = {
      params: {
        item: {
          title: 'Nike',
          price: 9.99,
        },
      },
    };

    const component = (
      <NavigationContainer>
        <ProductDetails />
      </NavigationContainer>
    );

    //Add tests : TODO: Add tests
  });

  it('calls navigation on back button press', () => {
    const navigation = {
      goBack: jest.fn(),
    };

    const component = (
      <NavigationContainer>
        <ProductDetails navigation={navigation} />
      </NavigationContainer>
    );
    console.log(component);
  });
});
