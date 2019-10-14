export default class OpenweathermapService {
  _apiKey = "e0626fea1c8ef56a95318d91df9910cf";
  _apiBase = `https://api.openweathermap.org/data/2.5/weather?APPID=${this._apiKey}`;

  getCurrentWeatherByCityName = async cityName => {
    const weather = await fetch(`${this._apiBase}&q=${cityName}&units=metric`);
    return weather.json();
  };
}
