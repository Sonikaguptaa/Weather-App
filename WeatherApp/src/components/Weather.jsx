import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { addLocation } from "../mySlice";
import "./Weather.css";

const Weather = ({ item }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [currentTime, setCurrentTime] = useState("");
  const [unit, setUnit] = useState("imperial");

  const dispatch = useDispatch();

  const apiKey = "7ce4269d73bd6a588305aa8c08d78a17";
  const lang = "en";
  const city = "My_City";

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&lang=${lang}&appid=${apiKey}`;

  const getData = async (evt) => {
    if (evt.key === "Enter") {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const result = await response.json();
        setWeather(result);
        console.log(result);
        setQuery("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((response) => response.json())
      .then((data) => {
        const localTime = new Date(data.utc_datetime);
        setCurrentTime(localTime);
      })
      .catch((error) => {
        console.error("Error fetching current time:", error);
      });
  }, []);

  const timeBuilder = (t) => {
    let timeString = "";
    let hrs = t.getUTCHours();
    let mins = t.getUTCMinutes();

    if (mins < 10) {
      mins = `0${mins}`;
    }

    if (hrs === 12) {
      timeString = `12:${mins} PM`;
    } else if (hrs > 12) {
      timeString = `${hrs - 12}:${mins} PM`;
    } else if (hrs === 0) {
      timeString = `12:${mins} AM`;
    } else {
      timeString = `${hrs}:${mins} AM`;
    }

    return timeString;
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "imperial" ? "metric" : "imperial"));
  };

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}: ${minutes < 10 ? "0" : ""}${minutes}`;
    return formattedTime;
  };

  const dateBuilder = (d, timezone) => {
    const currentTime = new Date(d.getTime() + timezone * 1000); // Convert UTC time to local time
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[currentTime.getDay()];
    let date = currentTime.getDate();
    let month = months[currentTime.getMonth()];
    let year = currentTime.getFullYear();

    return `${day} ${date} ${month} ${year} ${timeBuilder(currentTime)} `;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 80
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Your City weather"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={getData}
          />
        </div>

        {typeof weather.main !== "undefined" && (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
                {/* <li>
                  <button onClick={() => dispatch(addLocation())}>
                    Add To Favorite
                  </button>
                </li> */}
              </div>

              <div className="date">
                {dateBuilder(new Date(), weather.timezone)}
              </div>
            </div>

            <div className="weather-box">
              <div className="temp">
                {unit === "imperial"
                  ? `${Math.round(weather.main.temp)} °F`
                  : `${Math.round(convertToCelsius(weather.main.temp))} °C`}
              </div>
              <button
                style={{ fontSize: "20px", position: "absolute" }}
                onClick={toggleUnit}
              >
                {unit === "imperial" ? "°C" : "°F"}
              </button>
              <div className="weather">{weather.weather[0].main}</div>
              <div id="weatherCard">
                <div className="feels_like">
                  Feels-Like: {Math.round(weather.main.feels_like)}°F
                </div>
                <div className="Max">
                  ⬆️Max: {Math.round(weather.main.temp_max)}°F
                </div>
                <div className="Min">
                  ⬇️Min: {Math.round(weather.main.temp_min)}°F
                </div>

                <div className="lat">lat: {Math.round(weather.coord.lat)}</div>

                <div className="lon">lon: {Math.round(weather.coord.lon)}</div>

                <div className="humidity">
                  💧Humidity: {weather.main.humidity}%
                </div>

                <div className="visibility">
                  Visibility: {weather.visibility}ft
                </div>

                <div className="wind">≊Wind Speed: {weather.wind.speed}mph</div>

                <div className="sunrise">
                  🌅SunRise: {formatTime(weather.sys.sunrise)} AM
                </div>
                <div className="sunset">
                  🌇SunSet: {formatTime(weather.sys.sunset)} PM
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Weather;
