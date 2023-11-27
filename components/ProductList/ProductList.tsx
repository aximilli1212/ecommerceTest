import { View, Text, FlatList } from 'react-native';
import styles from './ProductList.styles';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const data = [
    {
      id: '1',
      title: 'Maize Flour',
      price: 34,
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4144c92b-0558-448c-aaa1-31f475a45b9f/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png',
    },
    {
      id: '1',
      title: 'Maize Flour',
      price: 34,
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4144c92b-0558-448c-aaa1-31f475a45b9f/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png',
    },
    {
      id: '1',
      title: 'Maize Flour',
      price: 34,
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4144c92b-0558-448c-aaa1-31f475a45b9f/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png',
    },
    {
      id: '1',
      title: 'Maize Flour',
      price: 34,
      imageUrl:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4144c92b-0558-448c-aaa1-31f475a45b9f/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}></FlatList>
    </View>
  );
};

export default ProductList;
