import React from 'react'


const WeatherInfo = () => {
  return (
    <div className='dark:bg-gray-600 rounded-lg text-white'>
        <div class="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span class="inline-block px-3"><small>Forecast</small></span></div>
        <div class="px-6 py-6 relative ">
            <div class="text-center justify-between items-center flex">
                <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Sun</span><img src="https://i.imgur.com/ffgW9JQ.png" class="block w-8 h-8"/><span class="block my-1">38.3&deg;</span></div>
                <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" class="block w-8 h-8"/><span class="block my-1">39.9&deg;</span></div>
                <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" class="block w-8 h-8"/><span class="block my-1">40.1&deg;</span></div>
                <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/ffgW9JQ.png" class="block w-8 h-8"/><span class="block my-1">41.5&deg;</span></div>
                <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/ffgW9JQ.png" class="block w-8 h-8"/><span class="block my-1">40.1&deg;</span></div>
                <div class="text-center mb-0 flex items-center justify-center flex-col"><span class="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" class="block w-8 h-8"/><span class="block my-1">38&deg;</span></div>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo