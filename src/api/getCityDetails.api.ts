import getCityDetailsInterface from '../interfaces/api/responses/getCityDetailsInterface';

export interface getCityDetailsParamsInterface {
  id: string;
}

const getCityDetails = (
  options: getCityDetailsParamsInterface,
): (() => Promise<getCityDetailsInterface>) => {
  const f = async () => {
    const prom = new Promise<getCityDetailsInterface>((resolve, reject) => {
      const url = new URL(
        `https://all-the-weather.herokuapp.com/cities/${options.id}`,
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
export default getCityDetails;
