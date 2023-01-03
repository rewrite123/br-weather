import weatherInterface from './weatherInterface';

interface hourlyWeatherForecastInterface {
  visibility: number;
  humidity: number;
  windGusts: number;
  feelsLikeTemperature: number;
  windDirection: number;
  temperature: number;
  weather: weatherInterface;
  precipitationChance: number;
  timestamp: string;
  windSpeed: number;
  uvIndex: number;
}
export default hourlyWeatherForecastInterface;
