import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {

const [city,setcity]=useState("")

const[weather,setweather]=useState("")
const[temp,settemp]=useState("")
const[desc,setdes]=useState("")

function handleChange(event)
{
  setcity(event.target.value)
}

function getWeather()
{
  var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df14698302c317d5c47af0b81eb1f580&units=metric`)

  weatherData.then(function(key)
  {
    console.log(key.data)
    setweather(key.data.weather[0].main)
    setdes(key.data.weather[0].description)
    settemp(key.data.main.temp)
  }
)
}
  
  return (
    <div className='bg-black p-20'> 
        <div className='bg-green-400 p-10 rounded-md'>
          <h1 className='text-2xl font-medium'>Weather Report</h1>
          <p>I can give a weather report about your city !</p>
          <input type='text'
           className='mt-2 border border-black rounded p-1' 
           placeholder='Enter your City Name'
           onChange={handleChange}
           ></input> <br/>
          <button onClick={getWeather} className='bg-black px-4 py-2 mt-2 text-white rounded-md'>Get Report</button>

          <div className='mt-3'>
            <p><b>Weather: {weather}</b></p>
             <p><b>Temperature: {temp}</b></p>
              <p><b>Description: {desc}</b></p>
            </div>
        </div>
    </div>
  )
}

export default Weather