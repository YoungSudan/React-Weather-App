import React from 'react'
import moment from 'moment';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Time({weatherData}) {
  const convertTimezoneToWords = (timezone) =>{
    const timezoneInMinutes = timezone / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
    return currTime
    // 10:10 PM
  }

  const convertUnixToTime = (unix) =>{
    const time = new Date(unix * 1000).toLocaleTimeString("en-US")
    return time 
  }
  return (
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200  dark:bg-gray-800 dark:border-gray-700">  
      <WbSunnyIcon sx={{ fontSize: 60 }}/>
      <p>{`Sunrise: ${convertUnixToTime(weatherData.sys.sunrise)}`}</p>
      <p>{`Sunset: ${convertUnixToTime(weatherData.sys.sunset)}`}</p>
      <p>{`Local Time: ${convertTimezoneToWords(weatherData.timezone)}`}</p>
  </figure>
  )
}

export default Time