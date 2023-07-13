import React from 'react'
import Skeleton from './Utility/Skeleton'
import { Temp,Time,Air,Wind } from './WeatherComponents'

function CurrentWeather({weatherData}) {
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

export default CurrentWeather