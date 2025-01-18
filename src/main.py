from enum import Enum
from fastapi import FastAPI
from weather_dashboard import WeatherDashboard

app = FastAPI()

class CityName(str, Enum):
    London = "London"
    Paris = "Paris"
    New_York = "New York"
    Philadelphia = "Philadelphia"
    Seattle = "Seattle"

class UnitsOption(str, Enum):
    standard = "standard"
    metric = "metric"
    imperial = "imperial"

@app.get("/current-weather/")
async def get_current_weather_by_city_name(city_name: CityName, units: UnitsOption): 
    city_name = city_name.name
    units = units.name

    dashboard_object = WeatherDashboard()
    dashboard_object.create_bucket_if_not_exists()
    weather_data = dashboard_object.fetch_weather(city_name, units)
    
    if weather_data:
        temp = weather_data['main']['temp']
        feels_like = weather_data['main']['feels_like']
        humidity = weather_data['main']['humidity']
        description = weather_data['weather'][0]['description']
        
        print(f"Temperature: {temp}°F")
        print(f"Feels like: {feels_like}°F")
        print(f"Humidity: {humidity}%")
        print(f"Conditions: {description}")
        success = dashboard_object.save_to_s3(weather_data, city_name)
        if success:
            print(f"Weather data for {city_name} saved to S3!")
    else:
        print(f"Failed to fetch weather data for {city_name}")

    print(weather_data)
    return {'city_name': city_name}