import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css"

const Weather = () => {
const [city,setCity]=useState("");
const[weather,setWeather]=useState();

const handleCityChange = (e) => {
  setCity(e.target.value);

}

const fetchWeather= async () =>
{
  try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`d7b55bb185ddf78cda99081f7e97f22c`}`)
 setWeather(response);
  }
  catch(error){
    console.log("error fetching weather",error);

  }

}
console.log(weather,'weather');

const handleClick=()=>
{

 fetchWeather();
 
}


  return (
    <div className="weather-container">
        <input type="text" className="input-text" placeholder="enter your city name...." value={city} 
        onChange={handleCityChange}/>
      <button onClick={handleClick} className="weather-button">Get Weather</button>
    
 {weather && <>
  <div className="weather-info">
    <h2 className="city">{weather.data.name}, {weather.data.sys.country}</h2>
    <p className="temp">{Math.round(weather.data.main.temp - 273.15)}°C feels like
      {Math.round(weather.data.main.feels_like - 273.15)}°C</p>
    <p className="humidity">Humidity: {weather.data.main.humidity}%
    </p>
    <p className="desc">{weather.data.weather[0].description}</p>
   </div>
   </>}

    </div>
  )
}

export default Weather;
