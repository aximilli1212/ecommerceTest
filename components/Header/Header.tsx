import { TouchableOpacity, View, TextInput, Text } from 'react-native';
import React from 'react';
import styles from './Header.styles';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS, SIZES } from '../../constants';

type RootStackParamList = {
  Search: undefined;
};

type HeaderNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

const Header = () => {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt}> Find the cheapest products</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onPressIn={() => navigation.navigate('Search')}
            placeholder="Find your perfect product ..."
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="send-outline"
              size={SIZES.xLarge}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
