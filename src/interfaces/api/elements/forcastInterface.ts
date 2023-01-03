import feelsLikeTemperaturesInterface from './feelsLikeTemperaturesInterface';
import temperaturesInterface from './temperaturesInterface';
import weatherInterface from './weatherInterface';

interface forcastInterface {
  windDirection: number;
  windSpeed: number;
  humidity: number;
  timestamp: string;
  temperatures: temperaturesInterface;
  sunrise: string;
  precipitationChance: number;
  sunset: string;
  uvIndex: number;
  windGusts: number;
  weather: weatherInterface;
  moonset: string;
  feelsLikeTemperatures: feelsLikeTemperaturesInterface;
  moonrise: string;
}
export default forcastInterface;
