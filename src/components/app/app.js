import React from "react";

import Weather from "../weather/weather";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import OpenweathermapService from "../../services/openweathermap-service";
import cities from "../../data/cities";

import "./app.css";

export default class App extends React.Component {
  openweathermapService = new OpenweathermapService();

  state = {
    loading: true,
    error: false,
    currentWeather: [],
    count: 0,
    timeout: 4000
  };

  componentDidMount() {
    this.updateWeather();
    this.interval = setInterval(this.updateWeather, 5000);
  }

  weatherLoaded = weather => {
    this.setState(prevState => ({
      currentWeather: weather,
      loading: false,
      count: prevState.count >= cities.length - 1 ? 0 : prevState.count + 1
    }));
  };

  onError = err => {
    clearInterval(this.interval);
    this.setState({
      loading: false,
      error: true
    });
  };

  updateWeather = () => {
    const count = this.state.count;
    const id = cities[count]["id"];

    this.openweathermapService
      .getCurrentWeatherById(id)
      .then(this.weatherLoaded)
      .catch(this.onError);
  };

  render() {
    const { currentWeather, loading, error, count } = this.state;
    const name = cities[count]["name"];
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <Weather currentWeather={currentWeather} name={name} />
    ) : null;

    return (
      <div className="weather">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
