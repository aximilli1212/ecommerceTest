import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './ProductCard.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
type Product = {
  imageUrl: string;
  title: string;
  price: number;
};

type ProductCardProps = {
  item: Product;
};

type RootStackParamList = {
  ProductDetails: { item: Product };
  // Add other routes here
};

type ProductCardNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const navigation = useNavigation<ProductCardNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', { item })}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
