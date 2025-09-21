import React, { useState, useEffect } from "react";

const WeatherIcon = ({ iconCode, label }) => {
  const iconUrl = `/weatherIcons/${iconCode}.svg`;
  return <img src={iconUrl} alt={label} className="weatherpic" />;
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(`/weather.json`, {
          cache: "reload",
        });

        if (!response.ok) {
          throw new Error(`Weather response ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          setWeatherData(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(true);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (error || !weatherData) {
    return <span aria-label="Weather not available">—</span>;
  }

  return (
    <WeatherIcon iconCode={weatherData.icon} label={weatherData.label} />
  );
};

export default Weather;
