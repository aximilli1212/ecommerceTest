import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import styles from './ProductDetails.styles';
import { COLORS } from '../../constants';

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
  let { item } = route.params || {
    item: {
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png',
      title: 'Nike',
      price: 450.0,
      description:
        "Here's to new beginnings between you and the pavement. Lace up the 100% recycled laces and set the pace at the start of your running journey with the plush feel of the Nike Revolution 6. We know comfort is key to a successful run, so we made sure your steps are cushioned and flexible for a soft ride. It's an evolution of a favourite, with a breathable design made with at least 20% recycled content by weight.",
    },
  };
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
            <Text style={styles.price}>$ {item.price}</Text>
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
