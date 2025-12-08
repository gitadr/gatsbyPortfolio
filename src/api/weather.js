const WEATHER_CACHE_TTL = 10 * 60 * 1000; // 10 minutes
const DEFAULT_LOCATION = "sydney,au";
const ALLOWED_LOCATIONS = new Set([DEFAULT_LOCATION]);

const cache = new Map();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const requestedLocation = (req.query.location || DEFAULT_LOCATION).toLowerCase();
  const location = ALLOWED_LOCATIONS.has(requestedLocation)
    ? requestedLocation
    : DEFAULT_LOCATION;
  const apiKey = process.env.OPEN_WEATHER_API_KEY;

  if (!apiKey) {
    res.status(500).json({ error: "Weather API key is not configured." });
    return;
  }

  const now = Date.now();
  const cachedEntry = cache.get(location);
  if (cachedEntry && now - cachedEntry.timestamp < WEATHER_CACHE_TTL) {
    res.status(200).json(cachedEntry.payload);
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

    cache.set(location, { payload: result, timestamp: now });

    res.status(200).json(result);
  } catch (error) {
    console.error("Weather function error", error);
    res.status(502).json({ error: "Unable to fetch weather" });
  }
}
