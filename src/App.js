import SearchBar from "./Components/SearchBar";
import { useState, React } from "react";
import FlashMessage from "./Components/Utility/FlashMessage";
import CurrentWeather from './Components/CurrentWeather'
import WeekWeather from './Components/WeekWeather'
import useCurrentWeather from "./Utils/Hooks/useCurrentWeather";
import useWeekWeather from "./Utils/Hooks/useWeekWeather";


function App() {
  const [cityName, setCityName] = useState(null)
  const {data: currentData, error: currentError, getCurrentWeather} = useCurrentWeather(cityName)
  const {data: weekData, error: werror, getWeekWeather} = useWeekWeather(cityName)


  const handleSearch = (event) => {
    event.preventDefault();
    getCurrentWeather(cityName)
    getWeekWeather(cityName)
  }

  const handleCityNameChage = (event) =>{
    setCityName(event.target.value) 
  } 

  return (
    <div>
      <div className="flex flex-col space-y-4 w-2/4 mx-auto">
        <h1 className="text-lg py-2">Weather App</h1>
        <SearchBar
          handleSearch={handleSearch}
          handleCityNameChage={handleCityNameChage}
        />
        {currentError ? <FlashMessage error={currentError}/> : null}
        <CurrentWeather weatherData={currentData}/>
        <WeekWeather weekWeatherData={weekData}/>
      </div>
    </div>

  );
}

export default App;
