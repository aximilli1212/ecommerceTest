import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Home.styles';

import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={styles.headText}>Product List</Text>
        </View>
        <Header />
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
