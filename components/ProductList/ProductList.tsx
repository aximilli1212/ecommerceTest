import { View, Text } from 'react-native';
import styles from './ProductList.styles';

const ProductList = () => {
  const data = [
    {
      id: '1',
      name: 'Maize Flour',
    },
    {
      id: '2',
      name: 'Wheat Flour',
    },
  ];

  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      {/*List items with FlatList*/}
    </View>
  );
};

export default ProductList;
