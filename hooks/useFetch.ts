import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
}

const useFetch = (): {
  data: Product[];
  loading: boolean;
  error: any;
  refetch: () => void;
  oneProduct: Product | null;
} => {
  const [oneProduct, setOneProduct] = useState<Product | null>(null);
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Product[]>(API_URL);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOne = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Product>(`${API_URL}/1`);
      setOneProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOne();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchProducts();
  };

  return { data, loading, error, refetch, oneProduct };
};

export default useFetch;
