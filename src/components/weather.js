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
    if (typeof window === "undefined") {
      return () => {
        isMounted = false;
      };
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-data: reduce)").matches
    ) {
      return () => {
        isMounted = false;
      };
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/weather?location=sydney,au`, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Weather response ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          setWeatherData(data);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        if (isMounted) {
          setError(true);
        }
      }
    };

    const scheduleFetch = (callback) => {
      if ("requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(callback, { timeout: 2000 });
        return () => window.cancelIdleCallback(idleId);
      }

      const timeoutId = window.setTimeout(callback, 0);
      return () => window.clearTimeout(timeoutId);
    };

    const cancelScheduledFetch = scheduleFetch(fetchData);

    return () => {
      isMounted = false;
      controller.abort();
      cancelScheduledFetch();
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
