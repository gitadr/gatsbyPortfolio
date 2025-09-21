const WEATHER_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

let cachedResponse = null;
let cacheTimestamp = 0;

export default async function handler(req, res) {
  const location = req.query.location || "sydney,au";
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  if (!apiKey) {
    res.status(500).json({ error: "Weather API key is not configured." });
    return;
  }

  const now = Date.now();
  if (cachedResponse && now - cacheTimestamp < WEATHER_CACHE_TTL) {
    res.status(200).json(cachedResponse);
    return;
  }

  try {
    const params = new URLSearchParams({ q: location, appid: apiKey, units: "metric" });
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Weather request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data.weather) || data.weather.length === 0) {
      throw new Error("Weather response missing weather array");
    }

    const weather = data.weather[0];
    const result = {
      icon: weather.icon,
      label: weather.description,
      temperature: data.main?.temp,
      location: data.name,
    };

    cachedResponse = result;
    cacheTimestamp = now;

    res.status(200).json(result);
  } catch (error) {
    console.error("Weather function error", error);
    res.status(502).json({ error: "Unable to fetch weather" });
  }
}
