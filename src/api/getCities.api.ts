import getCitiesInterface from '../interfaces/api/responses/getCitiesInterface';

export interface getCitiesParamsInterface {
  page: number;
  per?: number;
  query?: string;
}

const getCities = (
  options: getCitiesParamsInterface,
): (() => Promise<getCitiesInterface>) => {
  const f = async () => {
    const prom = new Promise<getCitiesInterface>((resolve, reject) => {
      const url = new URL('https://all-the-weather.herokuapp.com/cities');
      url.searchParams.append('page', `${options.page}`);
      if (options.per != undefined) {
        url.searchParams.append('per', `${options.per}`);
      }
      if (options.query != undefined) {
        url.searchParams.append('query', options.query);
      }
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
export default getCities;
