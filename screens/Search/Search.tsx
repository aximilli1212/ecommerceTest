import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Search.styles';
import axios from 'axios';
import { API_URL, COLORS } from '../../constants';
import SearchCard from '../../components/SearchCard/SearchCard';
import { ErrorBoundary } from 'react-error-boundary';

interface SearchResult {
  title: string;
  imageUrl: string;
  description?: string;
  price: number;
}

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  // Customize the error fallback UI
  return (
    <View>
      <Text>Sorry! Something happened</Text>
      <TouchableOpacity onPress={resetErrorBoundary}>
        <Feather name="refresh-cw" size={24} color={COLORS.red} />
        <Text>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};

const Search: React.FC = () => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get<SearchResult[]>(
        `${API_URL}?title_contains=${searchKey.toLowerCase()}`,
      );
      response?.data && setSearchResult(response.data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSearchResult([])}>
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
              testID="search-button"
              style={styles.searchBtn}
              onPress={() => handleSearch()}>
              <Feather name="search" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>

        {searchResult.length === 0 ? (
          <View style={{ flex: 1 }}>
            <Image
              testID="search-image"
              source={require('../../assets/magSearch.png')}
              style={styles.searchImage}
            />
          </View>
        ) : (
          <FlatList
            data={searchResult}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <SearchCard item={item} />}
            style={{ marginHorizontal: 12 }}
          />
        )}
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default Search;
