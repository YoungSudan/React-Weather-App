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
  

  const handleCityChange = newValue => {
    setCityName(newValue);
    getCurrentWeather(newValue.label)
    getWeekWeather(newValue.label)
  };

  return (
    <div>
      <div className="flex flex-col space-y-4 w-2/4 mx-auto">
        <h1 className="text-lg py-2">Weather App</h1>
        <SearchBar
          cityName={cityName}
          setCityName={setCityName}
          handleCityChange={handleCityChange}
        />
        {currentError ? <FlashMessage error={currentError}/> : null}
        <CurrentWeather weatherData={currentData}/>
        <WeekWeather weekWeatherData={weekData}/>
      </div>
    </div>

  );
}

export default App;
