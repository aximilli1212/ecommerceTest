import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import styles from './ProductList.styles';
import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import { COLORS, SIZES } from '../../constants';
import { useState } from 'react';

const ProductList = () => {
  const { data, loading, error, refetch } = useFetch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          testID="loading"
          size={SIZES.xLarge}
          color={COLORS.primary}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error fetching products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        refreshControl={
          <RefreshControl
            testID="refresh"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}></FlatList>
    </View>
  );
};

export default ProductList;
