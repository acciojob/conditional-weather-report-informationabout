
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import './../styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Setting default weather data
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);
  return (
    <div>
        {/* Do not remove the main div */}
     <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
