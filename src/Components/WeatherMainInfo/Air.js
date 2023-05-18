import React from 'react'
import WaterDropIcon from '@mui/icons-material/WaterDrop';

function Air({weatherData}) {
  return (
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">  
      <WaterDropIcon sx={{ fontSize: 60 }}/>
      <p>{`Pressure: ${weatherData.main.pressure}`}</p>
      <p>{`Humidity: ${weatherData.main.humidity}`}</p>
      <p>{`Visibility: ${weatherData.visibility}`}</p>
  </figure>
  )
}

export default Air