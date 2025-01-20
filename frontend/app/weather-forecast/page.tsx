'use client';
import { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import axios from "axios";
import { MdSend } from "react-icons/md";

interface Items {
  temp: string;
  feels_like: string;
  humidity: string;
  description: string;
  datetime: number;
}

export default function WeatherForecast() {
  const [isClient, setIsClient] = useState(false);
  const [isCity, setIsCity] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Placeholder data for the initial empty state
  const placeholderData = [
    { datetime: "Loading...", temp: 0, feels_like: 0 },
    { datetime: "Loading...", temp: 0, feels_like: 0 },
    { datetime: "Loading...", temp: 0, feels_like: 0 },
    { datetime: "Loading...", temp: 0, feels_like: 0 },
    { datetime: "Loading...", temp: 0, feels_like: 0 },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  async function handleGetForecast(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isCity.trim()) {
      setError("City name is required.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/forecast-weather/`, {
        params: {
          city_name: isCity,
          units: "metric",
        },
      });

      setForecastData(
        response.data.map((item: Items) => ({
          datetime: new Date(item.datetime).toLocaleString(),
          temp: item.temp,
          feels_like: item.feels_like,
        }))
      );
    } catch (error) {
      setError("Failed to fetch weather forecast.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (!isClient) return null;

  return (
    <div className='flex flex-col items-center mx-8'>
    
      <h1 className="text-2xl font-bold text-blue-700">Forecast Weather</h1>
      <div className="p-4 w-full shadow-lg m-8 rounded-lg bg-white ">
        <form onSubmit={handleGetForecast} className="flex items-center justify-center gap-2 mb-4 ">
          <input
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={isCity}
            onChange={(e) => setIsCity(e.target.value)}
            type="text"
            placeholder="Enter a city name"
            required
          />
          <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition duration-200"
          >
            <MdSend size={20} />
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={forecastData.length > 0 ? forecastData : placeholderData}>
              <defs>
                <linearGradient id="tempColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="feelsLikeColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="datetime"
                tick={{ fontSize: 12 }}
                angle={-15}
                textAnchor="end"
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="temp"
                stroke="#8884d8"
                fill="url(#tempColor)"
                name="Temperature (°C)"
                opacity={forecastData.length > 0 ? 1 : 0.3} // Reduce opacity for placeholder
              />
              <Area
                type="monotone"
                dataKey="feels_like"
                stroke="#82ca9d"
                fill="url(#feelsLikeColor)"
                name="Feels Like (°C)"
                opacity={forecastData.length > 0 ? 1 : 0.3} // Reduce opacity for placeholder
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}