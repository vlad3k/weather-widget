import React from "react";

import "./weather.css";

const Weather = ({ currentWeather }) => {
  const { name, weather, wind, main } = currentWeather;
  console.log(main);
  const currentTemp =
    +main.temp > 0 ? `+${Math.round(main.temp)}` : Math.round(main.temp);
  return (
    <div className="weather">
      <header className="weather__header">
        <h2 className="weather__title">{name}</h2>
      </header>
      <div className="weather__temp">
        <div>
          {currentTemp}
          <span>
            <sup></sup>
          </span>
        </div>
        <div className="weather__icon">
          <img
            src={`http://openweathermap.org/img/wn/${
              weather[0]["icon"]
            }@2x.png`}
            alt=""
          />
        </div>
      </div>
      <ul className="weather__list">
        <li>
          <span>icon </span>
          {main.humidity}%
        </li>
        <li>
          <span>icon </span> {Math.round(wind.speed)} м/с
        </li>
        <li>
          <span>icon </span> {Math.round(main.pressure)} мм рт. ст.
        </li>
      </ul>
    </div>
  );
};

export default Weather;
