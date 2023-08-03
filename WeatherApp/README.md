
# Exact Weather 

The Weather App is a React application that allows users to get weather information for different cities using data from the OpenWeather API. Additionally, it displays the current time for each city using the WorldTime API.

### Features:
Search for weather by city name Get weather data for multiple cities Display temperature in both Celsius or Fahrenheit View current time.
 ### Dependencies The Weather App requires the following dependencies:

### Tool used:
CSS, Java Script, React.js, JSX

### React:
 A JavaScript library for building user interfaces.
### React Router DOM:
 For handling routing in the application.
### fatch: 
For making API requests to the OpenWeather and WorldTime APIs.
To install the required dependencies, run the following command:

Install the dependencies using npm install.
Run the application using npm start.

#### 1- npm create vite@latest WeatherApp
#### 2- Choose Vite and javaScript from options
#### 3-cd WeatherApp
#### 4- npm install
#### 5- npm run dev

The application will be accessible at http://localhost:5173/.

### OpenWeather API Key: 
Sign up on the OpenWeather website (https://openweathermap.org/) to get your API key. Replace YOUR_OPENWEATHER_API_KEY in the code with your actual API key. Add your OpenWeather API key to the code.

### Time API:
The Time component fetches and displays the current time for each city using the WorldTime API ("http://worldtimeapi.org/api/ip").You can get the WorldTime API data without an API key, as it doesn't require authentication.

### Components:
#### Weather:
The main Weather component is responsible for fetching and displaying weather data from the OpenWeather API. It allows users to search for weather by city name and displays weather information for multiple cities.

#### MajorCity:
The MajorCity component is a separate component that displays weather information for major cities, such as New York, Denver, Paris, Antarctica and New Delhi. It also uses data from the OpenWeather API.

### Summery:
This is one stop Weather solution to see the weather of major cities along with the option to search the weather of any city around Globe







