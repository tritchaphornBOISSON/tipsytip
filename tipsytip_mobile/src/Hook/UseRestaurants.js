import { useEffect, useState } from 'react';
import api from '../api/ApiConfig';
//custom hook
export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchApi = async (searchTerm, searchLocation) => {
    try {
      const response = await api.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: searchLocation,
          
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('restaurant', 'Lyon');
  }, []);

  return [searchApi, restaurants, errMessage];
};
