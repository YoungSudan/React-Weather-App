import { useState, useEffect } from 'react';
const API_KEY = process.env.WEATHER_API_KEY

const useGeoApi = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
        const response = await fetch(url);
        const jsonData = await response.json();

        if (response.ok) {
          setData(jsonData);
          setError(null);
        } else {
          setError(jsonData.message);
        }
      } catch (error) {
        setError('An error occurred while fetching the data.');
      }
    };

    fetchData();
  }, [city]);

  return { data, error };
};

export default useGeoApi;