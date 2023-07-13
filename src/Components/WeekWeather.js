import React from 'react'
import DailyWeather from './DailyWeather'

const WeekWeather = ({weekWeatherData}) => {
  return (
    <div className='dark:bg-gray-600 rounded-lg text-white'>
        <div class="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span class="inline-block px-3"><small>Forecast</small></span></div>
        <div class="px-6 py-6 relative ">
            <div class="text-center justify-between items-center flex">
              {
                weekWeatherData ?  weekWeatherData.list.map((day) => {
                  return <DailyWeather dayWeatherData={day}/>
                }) : null
              }
            </div>
        </div>
    </div>
  )
}

export default WeekWeather