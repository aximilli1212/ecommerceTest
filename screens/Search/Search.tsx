import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Search.styles';
import axios from 'axios';
import { API_URL, COLORS } from '../../constants';
import SearchCard from '../../components/SearchCard/SearchCard';

interface SearchResult {
  title: string;
  imageUrl: string;
  description?: string;
  price: number;
}

const Search: React.FC = () => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get<SearchResult[]>(
        `${API_URL}?title_contains=${searchKey.toLowerCase()}`,
      );
      setSearchResult(response.data);
      console.log('response', response.data);
      console.log('responseKey', searchKey);
      console.log('responseKey', `${API_URL}?title_contains=${searchKey}`);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Find your products ..."
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}>
            <Feather name="search" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require('../../assets/magSearch.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={item => item?.title}
          renderItem={({ item }) => <SearchCard item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
