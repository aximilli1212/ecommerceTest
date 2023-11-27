import { TouchableOpacity, View, Text } from 'react-native';
import style from './ProductCard.styles';
const ProductCard = () => {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <View>
          <Text>Single Product Card</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
