import React from 'react'
import AirIcon from '@mui/icons-material/Air';

function Wind({weatherData}) {
  return (
    <figure class="text-slate-50 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <AirIcon sx={{ fontSize: 60 }}/>
      <p>{`Speed: ${weatherData.wind.speed}`}</p>
      <p>{`Degree: ${weatherData.wind.deg}`}</p>
  </figure>
  )
}

export default Wind