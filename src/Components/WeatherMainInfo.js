import React from 'react'
import * as data from '../Utils/testData.json'
import Skeleton from './Skeleton';
import Temp from './WeatherMainInfo/Temp';
import Wind from './WeatherMainInfo/Wind';
import Air from './WeatherMainInfo/Air';
import Time from './WeatherMainInfo/Time';

function WeatherMainInfo({weatherData}) {
    console.log("weatherData: ", weatherData)
  return (
    <div>
        <div class="grid mb-8 border border-gray-200 text-black shadow-sm dark:border-gray-700  md:grid-cols-2">
            {weatherData ? <Temp weatherData={weatherData}/> : <Skeleton/>}
            {weatherData ? <Wind weatherData={weatherData}/> : <Skeleton/>}
            {weatherData ? <Air weatherData={weatherData}/> : <Skeleton/>}
            {weatherData ? <Time weatherData={weatherData}/> : <Skeleton/>}

        </div>
    </div>
  )
}

export default WeatherMainInfo