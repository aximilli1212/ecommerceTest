import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import styles from './ProductDetails.styles';
import { COLORS } from '../../constants';
import { PRODUCT } from '../../constants/app';

type RootStackParamList = {
  ProductDetails: {
    item: {
      imageUrl: string;
      title: string;
      price: number;
      description: string;
    };
  };
};

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

const ProductDetails = () => {
  const route = useRoute<ProductDetailsRouteProp>();
  const { item } = route.params || PRODUCT;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          testID="back-button"
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}></Image>

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>€ {item.price}</Text>
          </View>
        </View>
      </View>

      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.descText}>{item.description}</Text>
      </View>

      <View style={styles.cartRow}>
        <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
          <Text style={styles.cartTitle}> Buy Now </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.addCartBtn}>
          <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
