import React from "react";
import OpenweathermapService from "../../services/openweathermap-service";

import "./app.css";
import Weather from "../weather/weather";
import Spinner from "../spinner/spinner";

export default class App extends React.Component {
  openweathermapService = new OpenweathermapService();

  state = {
    loading: true,
    error: false,
    currentWeather: []
  };

  componentDidMount() {
    this.updateWeather("London");
  }

  weatherLoaded = weather => {
    this.setState({
      currentWeather: weather,
      loading: false
    });
  };

  updateWeather = cityName => {
    this.openweathermapService
      .getCurrentWeatherByCityName(cityName)
      .then(this.weatherLoaded);
  };

  render() {
    const { currentWeather, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <p>Error</p> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <Weather currentWeather={currentWeather} />
    ) : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
