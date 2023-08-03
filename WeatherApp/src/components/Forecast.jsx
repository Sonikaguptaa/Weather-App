import React, { useState, useEffect } from "react";


const Forecast = ({ location }) => {

  const [forecastData, setForecastData] = useState();
  const [unit, setUnit] = useState("metric");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch forecast data");
        }

        const data = await response.json();

        setForecastData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchForecastData();
  }, [location]);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  const groupedForecast = {};
  forecastData.list.forEach((forecast) => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!groupedForecast[date]) {
      groupedForecast[date] = [];
    }
    groupedForecast[date].push(forecast);
  });

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };


  return (

    <div>

      <button onClick={toggleUnit}>
        {unit === "metric" ? "°F" : "°C"}
      </button>

      <h2 style={{ textAlign: "center", color: " #1e4174c7", backgroundColor: "rgba(22, 50, 11, 0.35)" }}> Weather Forecast for {location}</h2>
      <div className="Forcast-container">

        {Object.entries(groupedForecast).map(([date, forecasts]) => (
          <div key={date} className="forecast-day">
            <h3>Date: {date}</h3>
            {forecasts.map((forecast) => (
              <div key={forecast.dt} style={{ textAlign: "left" }}>
                {unit === "metric" ? `${Math.round(forecast.main.temp)} °C` : `${Math.round(convertToFahrenheit(forecast.main.temp))} °F`}
                <p>Time: {new Date(forecast.dt * 1000).toLocaleTimeString()}</p>
                <p>DESCR: {forecast.weather[0].description}</p>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;