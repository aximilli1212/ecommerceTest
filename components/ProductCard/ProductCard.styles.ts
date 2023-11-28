import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 153,
    height: 220,
    marginEnd: 12,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 140,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  price: {
    fontFamily: 'regular',
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
});

export default styles;
