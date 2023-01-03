import weatherInterface from './weatherInterface';

interface currentWeatherForecastInterface {
  windDirection: number;
  temperature: number;
  windSpeed: number;
  humidity: number;
  feelsLikeTemperature: number;
  timestamp: string;
  sunrise: string;
  sunset: string;
  uvIndex: number;
  windGusts: number;
  weather: weatherInterface;
  visibility: number;
}
export default currentWeatherForecastInterface;
