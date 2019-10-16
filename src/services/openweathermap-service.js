export default class OpenweathermapService {
  _apiKey = "e0626fea1c8ef56a95318d91df9910cf";
  _apiBase = `https://api.openweathermap.org/data/2.5/weather?APPID=${this._apiKey}`;

  getCurrentWeatherById = async id => {
    const res = await fetch(`${this._apiBase}&id=${id}&units=metric`);

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status} status`);
    }

    const { weather, wind, main } = await res.json();

    return {
      temp: Math.abs(Math.round(main.temp)),
      tempSign: +main.temp > 0 ? "+" : "-",
      icon: `http://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`,
      humidity: main.humidity,
      windSpeed: Math.round(wind.speed),
      pressure: Math.round(main.pressure)
    };
  };
}
