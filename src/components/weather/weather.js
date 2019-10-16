import React from "react";

import "./weather.css";

// icons
import DropIcon from "../../icons/Drop";
import PressureIcon from "../../icons/Pressure";
import WindIcon from "../../icons/Wind";

const Weather = ({ currentWeather, name }) => {
  const {
    temp,
    icon,
    humidity,
    windSpeed,
    pressure,
    tempSign
  } = currentWeather;

  return (
    <React.Fragment>
      <header className="weather__header">
        <h2 className="weather__title">{name}</h2>
      </header>
      <div className="weather__temp">
        <div>
          <span className="weather__temp-sign">{tempSign}</span>
          {temp}
          <sup className="weather__temp-measure">°C</sup>
        </div>
        <div className="weather__icon">
          <img src={icon} alt="weather icon" />
        </div>
      </div>
      <ul className="weather__list">
        <li>
          <DropIcon width={15} height={15} /> {humidity}%
        </li>
        <li>
          <WindIcon width={15} height={15} /> {windSpeed} м/с
        </li>
        <li>
          <PressureIcon width={15} height={15} /> {pressure} мм рт. ст.
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Weather;
