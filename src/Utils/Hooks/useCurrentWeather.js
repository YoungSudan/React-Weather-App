import { useState, useCallback } from 'react';
import axios from 'axios';

const useCurrentWeather= () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getCurrentWeather = useCallback((cityName) => {
    axios.get(`http://localhost:4000/weather?city=${cityName}`)
        .then(function (response) {
            const data = response.data
            setData(data)
            setError(null)
        })
        .catch(function (error) {
            setData(null)
            setError(error.response.data)
        })
  }, []);

  return {data, error, getCurrentWeather };
};

export default useCurrentWeather;