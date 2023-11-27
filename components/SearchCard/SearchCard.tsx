import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import styles from './SearchCard.style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Item {
  imageUrl: string;
  title: string;
  price: number;
  description?: string;
}

interface SearchCardProps {
  item: Item;
}

type RootStackParamList = {
  ProductDetails: { item: Item };
};

type ProductCardNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const SearchCard: React.FC<SearchCardProps> = ({ item }) => {
  const navigation = useNavigation<ProductCardNavigationProp>();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('ProductDetails', { item })}>
        <View style={styles.image}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.price}>€{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCard;
