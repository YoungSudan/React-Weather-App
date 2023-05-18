import WeatherCard from "./Components/WeatherCard";
import SearchBar from "./Components/SearchBar";
import { useState, React } from "react";
import axios from "axios";
import FlashMessage from "./Components/FlashMessage";

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [cityName, setCityName] = useState({})
  const [error, setError] = useState(null)
  const handleCityNameChage = (event) =>{
      const name = event.target.value
      setCityName(name)
  }

  const handleSearch = (event) => {
      console.log('SEARCHING')
      event.preventDefault()
      axios.get(`http://localhost:4000/weather?city=${cityName}`)
      .then(function (response) {
          console.log("REON: ", response)
          const data = response.data.data
          const error = response.data.error

          console.log("DATA: ", data)
          setWeatherData(data)
          
          console.log("ERROR: ",error)
          setError(error)
      })
      .catch(function (error) {
          // handle error
          console.log("ERROR: ", error);
      })
  }

  return (
    <div>
      <div className="flex flex-col space-y-4 w-2/4 mx-auto">
        <h1 className="text-lg py-2">Weather App</h1>
        <SearchBar
          handleSearch={handleSearch}
          handleCityNameChage={handleCityNameChage}
        />
        {error ? <FlashMessage error={error}/> : null}
        <WeatherCard weatherData={weatherData}/>
      </div>
    </div>

  );
}

export default App;
