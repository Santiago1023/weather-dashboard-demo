## DevOps Challenge: Day 1 (Weather Dashboard)

### Project Overview
This is a project that allow you interact with an interface web, extract data from an API call, and store it in AWS S3 bucket.

**Tools:**
- External API (OpenWeather API)
- Cloud service (AWS S3)
- FastAPI (Python)
- NextJS

**Architecture**
This is an application to view the current and forecast weather, its backend is deployed in Render, and its frontend is deployed in Vercel, and store metadata in AWS S3.
![architecture.png](/imagenes/architecture.png)

### Project Structure
weather-dashboard-demo/ -> main directory
|---backend/ -> fastapi app
|------src/
|---------_init_.py
|---------main.py -> contain the routes and the app creation
|---------weather_dashboard.py -> fetch the data
|---------requirements.txt -> packages required
|---------README.md -> steps to run the backend

|---frontend/ -> nextjs app
|------app/
|---------layout.tsx -> layout to all pages
|---------page.tsx -> homepage
|---------global.css
|---------components/
|------------SideBar.tsx -> render a sidebar
|---------current-weather/
|------------page.tsx -> render the information of current weather
|---------weather-forecast/
|------------page.tsx -> render the information of forecast weather
|------README.md -> steps to run the frontend

|---CHALLENGE-README.md -> tutor explanation
|---MANUAL.AWS-README.md ->steps to setup manually the AWS configuration
|---README.md -> overview of the project


### What I Learned

- AWS S3 bucket creation and management by code.
- Deploy of the entire application.
- Basic communication between a frontend and backend deployed with AWS s3.

### Links
[Frontend - Vercel](https://weather-dashboard-demo-phi.vercel.app/ "Frontend - Vercel")
[Backend - Render](https://weather-dashboard-demo.onrender.com "Backend - Render")


#### With love and grateful to people who creates these projects:
[Day 1 explanation](https://www.youtube.com/watch?v=A95XBJFOqjw "Day 1")

[Original code](https://github.com/ShaeInTheCloud/30days-weather-dashboard/tree/main "original code")

[DevOps Challenges info](https://www.linkedin.com/posts/deshae-lyda_30-day-devops-challenge-day-1-devopsallstarschallenge-activity-7282060035038359552-yUpd?utm_source=share&utm_medium=member_desktop "DevOps Challenges info")


