from enum import Enum
from fastapi import FastAPI
from weather_dashboard import WeatherDashboard
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dashboard_object = WeatherDashboard()
dashboard_object.create_bucket_if_not_exists()

class UnitsOption(str, Enum):
    standard = "standard"
    metric = "metric"
    imperial = "imperial"

@app.get("/current-weather/")
async def get_current_weather_by_city_name(city_name: str, units: UnitsOption): 
    units = units.name
    weather_data = dashboard_object.fetch_weather(city_name, units)
    print(weather_data)
    if weather_data:
        data = {
            'temp' : weather_data['main']['temp'],
            'feels_like' : weather_data['main']['feels_like'],
            'humidity' : weather_data['main']['humidity'],
            'description' : weather_data['weather'][0]['description'],
            'name' : weather_data['name']
        }
        success = dashboard_object.save_to_s3(weather_data, city_name, False)
        if success:
            print(f"Weather data for {city_name} saved to S3!")
    else:
        print(f"Failed to fetch weather data for {city_name}")
        return None
    return data

@app.get("/forecast-weather/")
async def get_forecast_weather(city_name: str, units: UnitsOption):
    units = units.name
    weather_forecast_data = dashboard_object.fetch_weather_forecast(city_name, units)
    data = []
    if weather_forecast_data:
        for item in weather_forecast_data['list']:
            data_item = {
                'temp' : item['main']['temp'],
                'feels_like' : item['main']['feels_like'],
                'humidity' : item['main']['humidity'],
                'description' : item['weather'][0]['description'],
                'datetime':  item['dt_txt']
            }
            data.append(data_item)
    return data