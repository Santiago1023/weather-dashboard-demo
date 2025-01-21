## DevOps Challenge: Day 1 (Weather Dashboard)

### Project Overview
This is a project based on a serie of devops challenges, the explanation was how to use python to interact with AWS and I complement the code with the creation of FastAPI backend and a NextJS Frontend.
The project allows you to interact with a web interface, extract data from an API call, visualize the information and store it in AWS S3 bucket.

**Tools:**
- External API (OpenWeather API)
- Cloud service (AWS S3)
- FastAPI (Python)
- NextJS

**Architecture**
This is an application to view the current and forecast weather. Its backend is deployed on Render, and its frontend is deployed on Vercel, and metadata is store in AWS S3.
![architecture.png](/imagenes/architecture.png)

### Project Structure
```
weather-dashboard-demo/ # Main directory
├── backend/ # FastAPI app
│ ├── src/ # Source files
│ │ ├── init.py # App initialization
│ │ ├── main.py # Contains routes and app creation
│ │ ├── weather_dashboard.py # Fetch weather data
│ ├── requirements.txt # Dependencies
│ └── README.md # Steps to run the backend 
├── frontend/ # Next.js app
│ ├── app/ # App core
│ │ ├── layout.tsx # Layout for all pages
│ │ ├── page.tsx # Homepage
│ │ ├── global.css # Global styles
│ │ ├── components/ # Reusable components
│ │ │ └── SideBar.tsx # Sidebar component
│ │ ├── current-weather/ # Current weather section
│ │ │ └── page.tsx # Render current weather information
│ │ ├── weather-forecast/ # Weather forecast section
│ │ │ └── page.tsx # Render forecast weather information
│ └── README.md # Steps to run the frontend
├── CHALLENGE-README.md # Tutor explanation
├── MANUAL.AWS-README.md # Steps to manually set up AWS configuration
└── README.md # Overview of the project
```


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


