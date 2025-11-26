import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState("")
  const [temp, setTemp] = useState("")
  const [desc, setDesc] = useState("")
  const [humidity, setHumidity] = useState("")
  const [wind, setWind] = useState("")
  const [feels, setFeels] = useState("")

  function handleChange(event) {
    setCity(event.target.value)
   
  }

  function getWeather() {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df14698302c317d5c47af0b81eb1f580&units=metric`)
      .then(res => {
        setWeather(res.data.weather[0].main)
        setDesc(res.data.weather[0].description)
        setTemp(res.data.main.temp)
        setHumidity(res.data.main.humidity)
        setWind(res.data.wind.speed)
        setFeels(res.data.main.feels_like)
        
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm border border-gray-200">

        <h1 className="text-2xl font-bold text-gray-900 text-center">
          🌤 Weather Report
        </h1>
        <p className="text-gray-500 text-center text-sm mt-1">
          Real-time Weather for Your City
        </p>

        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">City Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter any city"
            onChange={handleChange}
          />

          <button
            onClick={getWeather}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium mt-3 hover:bg-blue-700 transition"
          >
            Search
          </button>
          
        </div>

        {(weather || temp || desc) && (
          <div className="mt-6 space-y-3">
            
     
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center">
              <p className="text-xl font-semibold text-gray-800">{city.toUpperCase()}</p>
              <p className="text-gray-700 capitalize">{desc}</p>
              <p className="text-3xl font-bold text-blue-700 mt-1">
                {temp}°C
              </p>
            </div>

        
            <div className="grid grid-cols-2 gap-3 text-gray-700 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg border">
                <p className="font-medium">Feels Like</p>
                <span className="text-gray-900">{feels}°C</span>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border">
                <p className="font-medium">Humidity</p>
                <span className="text-gray-900">{humidity}%</span>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border col-span-2">
                <p className="font-medium">Wind Speed</p>
                <span className="text-gray-900">{wind} m/s</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default Weather
