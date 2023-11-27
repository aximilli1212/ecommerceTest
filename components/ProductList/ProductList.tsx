import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './ProductList.styles';
import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import { COLORS, SIZES } from '../../constants';

const ProductList = () => {
  const { data, loading, error } = useFetch();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
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
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item }) => <ProductCard item={item} />}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}></FlatList>
  );
};

export default ProductList;
