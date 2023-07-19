import { useState, useCallback } from 'react';
import axios from 'axios';

const useWeekWeather= () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getWeekWeather = useCallback((cityName) => {
    axios.get(`http://localhost:4000/week?city=${cityName}`)
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

  return {data, error, getWeekWeather};
};

export default useWeekWeather;