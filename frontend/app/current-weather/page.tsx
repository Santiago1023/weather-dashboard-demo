'use client';
import { useState } from "react";
import axios from "axios";
import { MdSend } from "react-icons/md";
import { toast } from "react-toastify";

export default function CurrentWeather() {
    const [isCity, setIsCity] = useState("");
    const [loading, setLoading] = useState(false);

    const [temp, setTemp] = useState("");
    const [name, setName] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [humidity, setHumidity] = useState("");
    const [description, setDescription] = useState("");

    async function handleGetCurrent(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isCity.trim()) {
            toast.error("City name is required")
          return;
        }
        setLoading(true);
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/current-weather/`, {
            params: {
              city_name: isCity,
              units: "metric",
            },
          });
        
          if (response.data && response.data.temp) {
            const { temp, feels_like, humidity, description, name } = response.data;
            setTemp(temp);
            setFeelsLike(feels_like);
            setHumidity(humidity);
            setDescription(description);
            setName(name);
          } else {
            toast.error("City Not Found. Please try again.");
          }
        } catch (error) {
          toast.error("Try with another city or check the API configuration");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    return (
      <div className="flex flex-col items-center w-full gap-8 py-10">
        <h1 className="text-2xl font-bold text-blue-700">Current Weather</h1>
  
        <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleGetCurrent} className="flex gap-2 mb-4">
            <input
              className="flex-1 border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              value={isCity}
              onChange={(e) => setIsCity(e.target.value)}
              type="text"
              placeholder="Type a city..."
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition duration-200"
            >
              <MdSend size={20} />
            </button>
          </form>
  
          {/* Loader */}
          {loading && <p className="text-center text-blue-500 animate-pulse">Loading...</p>}
  
          {/* Datos del clima */}
          {!loading && name && (
            <div className="p-4 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-blue-700">{`Weather in ${name}`}</h2>
              <p className="text-gray-700">{`Temperature: ${temp}°C`}</p>
              <p className="text-gray-700">{`Feels like: ${feelsLike}°C`}</p>
              <p className="text-gray-700">{`Humidity: ${humidity}%`}</p>
              <p className="text-gray-700">{`Conditions: ${description}`}</p>
            </div>
          )}
        </div>
      </div>
    );
}