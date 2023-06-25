import React, { useState, useEffect } from "react";

const WeatherIcon = ({ iconCode }) => {
  const iconUrl = `https://moonlit-syrniki-859c57.netlify.app/images/${iconCode}.svg`;
  return <img src={iconUrl} alt="weather icon" className="weatherpic" />;
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location] = useState("sydney,au");

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "a5becc76a1f3a9d0cb979a2581dea53c";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    };
    fetchData();
  }, [location]);

  return (
    <div>
      {weatherData ? (
        <WeatherIcon iconCode={weatherData.weather[0].icon} />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Weather;
