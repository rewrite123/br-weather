import getCityForecastInterface from '../interfaces/api/responses/getCityForcastInterface';

export interface getCityForecastParamsInterface {
  id: string;
}

const getCityForecast = (
  options: getCityForecastParamsInterface,
): (() => Promise<getCityForecastInterface>) => {
  const f = async () => {
    const prom = new Promise<getCityForecastInterface>((resolve, reject) => {
      const url = new URL(
        `https://all-the-weather.herokuapp.com/cities/${options.id}/forecast`,
      );
      fetch(url.toString())
        .then((rawCRes) => {
          if (rawCRes.status == 200) {
            return rawCRes.json();
          } else {
            reject(`Failed: ${rawCRes.status}`);
          }
        })
        .then((rawCities) => {
          resolve(rawCities);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return await prom;
  };
  return f;
};
export default getCityForecast;
