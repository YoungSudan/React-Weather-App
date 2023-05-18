import { React  } from "react";
import WeatherMainInfo from "./WeatherMainInfo";
import WeatherInfo from "./WeatherInfo";
const WeatherCard = ({weatherData}) => {
    return (
        <div>
            <WeatherMainInfo weatherData={weatherData}/>
        </div>
    )
}

export default WeatherCard