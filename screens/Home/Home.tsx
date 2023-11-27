import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Home.styles';

import React from 'react';
import ProductList from '../../components/ProductList/ProductList';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={styles.headText}>My Product List</Text>
        </View>
        <ScrollView>
          {/*Search here*/}
          {/*ProductList here */}
          <ProductList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
