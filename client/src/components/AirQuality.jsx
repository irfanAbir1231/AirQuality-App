// client/src/components/AirQuality.jsx

import React from 'react';

function AirQuality({ city }) {
  const [weatherData, setWeatherData] = React.useState(null);

  React.useEffect(() => {
    if (!city) return;

    const fetchWeatherData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}?city=${city}`);
      const data = await response.json();

      if (data.success !== false) {
        setWeatherData(data);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!weatherData) return null;

  return (
    <div>
      <h3>Weather in {weatherData.location.name}, {weatherData.location.country}</h3>
      <p>Temperature: {weatherData.current.temperature}°C</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
      <p>Weather: {weatherData.current.weather_descriptions[0]}</p>
      <img
        src={weatherData.current.weather_icons[0]}
        alt="Weather Icon"
        style={{ width: '50px', height: '50px' }}
      />
      <p>Wind Speed: {weatherData.current.wind_speed} km/h</p>
    </div>
  );
}

export default AirQuality;
