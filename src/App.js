import SearchBar from "./Components/SearchBar";
import { useState, React } from "react";
import axios from "axios";
import FlashMessage from "./Components/Utility/FlashMessage";
import CurrentWeather from './Components/CurrentWeather'
import WeekWeather from './Components/WeekWeather'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [weekData, setweekData] = useState(null)

  const [cityName, setCityName] = useState({})
  const [error, setError] = useState(null)
  const handleCityNameChage = (event) =>{
      setCityName(event.target.value)
  }


  const getWeekWeather = () => {
    axios.get(`http://localhost:4000/week?city=${cityName}`)
      .then(function (response) {
          const data = response.data.data
          setweekData(data)
      })
      .catch(function (error) {
          // handle error
          //const error = response.data.error
          setError(error)
      })
  }

  const getCurrentWeather = () => {
    axios.get(`http://localhost:4000/weather?city=${cityName}`)
      .then(function (response) {
          const data = response.data.data
          setWeatherData(data)
      })
      .catch(function (error) {
          // handle error
          //const error = response.data.error
          setError(error)
      })
  }

  const handleSearch = (event) => {
      event.preventDefault()
      getCurrentWeather()
      getWeekWeather()
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
        <CurrentWeather weatherData={weatherData}/>
        <WeekWeather weekWeatherData={weekData}/>
      </div>
    </div>

  );
}

export default App;
