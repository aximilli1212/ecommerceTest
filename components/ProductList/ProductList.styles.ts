import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: SIZES.small,
    marginBottom: SIZES.xxLarge,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  separator: {
    height: 16,
  },
});

export default styles;
