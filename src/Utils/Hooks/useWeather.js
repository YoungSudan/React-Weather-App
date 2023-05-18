import axios from 'axios'

export function  useWeather(city){
  axios.get(`http://localhost:4000/weather?city=${city}`)
    .then(function (response) {
        const data = response.data
        console.log("DATA: ", data)
        return {
            "error": false,
            "data": data
        }
    })
    .catch(function (error) {
        // handle error
        console.log("ERROR: ", error);
        return {
            "error": error,
            "data": null 
        }
    })
};