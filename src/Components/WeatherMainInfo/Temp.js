import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';

function Temp({weatherData}) {
  return (
    <figure class="flex flex-col items-center text-center p-8  bg-white border-b border-gray-200  md:border-r dark:bg-gray-800 dark:border-gray-700">
        <p className='text-7xl'> {`${weatherData.main.temp}`}&#176; </p> 
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
        <div>
            <p>{weatherData.weather[0].description}</p>
            <p>{`${weatherData.name}, ${weatherData.sys.country}`}</p>
        </div>
    </figure>
  )
}

export default Temp