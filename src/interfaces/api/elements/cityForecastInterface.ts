import currentWeatherForecastInterface from './currentWeatherForecastInterface';
import forcastInterface from './forcastInterface';
import hourlyWeatherForecastInterface from './hourlyWeatherForecastInterface';
import upcomingWeatherForecastInterface from './upcomingWeatherForecastInterface';

interface cityForecastInterface {
  daily: forcastInterface[];
  current: currentWeatherForecastInterface;
  upcoming: upcomingWeatherForecastInterface[];
  hourly: hourlyWeatherForecastInterface[];
}
export default cityForecastInterface;
