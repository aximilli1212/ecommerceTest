import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './ProductCard.styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
const ProductCard = ({ item }) => {
  const navigation = useNavigation();

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
