import React from 'react'

function DailyWeather({dayWeatherData}) {
  return (
    <div class="text-center mb-0 flex items-center justify-center flex-col">
        <span class="block my-1">{dayWeatherData.dt_txt}</span>
        <img src={`https://openweathermap.org/img/wn/${dayWeatherData.weather[0].icon}@2x.png`} alt='Icon for days weather'/>
        <span class="block my-1">{dayWeatherData.main.temp}&deg;</span>
    </div>

  )
}

export default DailyWeather