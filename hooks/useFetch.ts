import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

const useFetch = () => {
  const [oneProduct, setOneProduct] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
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
      const response = await axios.get(`${API_URL}/1`);
      setData(response.data);
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
