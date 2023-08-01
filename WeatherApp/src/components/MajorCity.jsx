import React, { useState, useEffect } from "react";


const MajorCity = () => {
  const [cities, setCities] = useState(["New York", "Denver", "Paris", "New Delhi", "Antarctica"]);
  const [weatherData, setWeatherData] = useState([]);

  const apiKey = "7ce4269d73bd6a588305aa8c08d78a17";

  useEffect(() => {
    const fetchData = async () => {
      const weatherDataPromises = cities.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        );
        const data = await response.json();
        return data;
      });

      const allWeatherData = await Promise.all(weatherDataPromises);
      setWeatherData(allWeatherData);
    };

    fetchData();
  }, [cities, apiKey]);
  return (
    <div className="major-cities">
      {weatherData.map((data, index) => (
        <div key={index} className="city-weather">
          <h2 style={{ color: " #22325b", paddingBottom: "10px", textAlign: "center" }}>{cities[index]}</h2>
          <div>Temp: {Math.round(data.main.temp)}°F</div>
          <div>Weather: {data.weather[0].main}</div>
        </div>
      ))}
    </div>
  );
};

export default MajorCity;