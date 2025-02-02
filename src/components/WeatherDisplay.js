import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Determine text color based on temperature
  const temperatureColor = temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p>
        Temperature: <span style={{ color: temperatureColor }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
