import React, { HTMLProps, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import getCityDetails from '../../api/getCityDetails.api';
import StylingPropsInterface from '../../interfaces/StylingPropsInterface';
import cityItemInterface from '../../interfaces/api/elements/cityItemInterface';

import { TrashIcon } from '../Icons/Common';
import defaultCityBgImg from '../../assets/defaultCityBg.jpg';
import getCityForecast from '../../api/getCityForecast.api';

export interface CityOverviewPropsInterface extends StylingPropsInterface {
  city: cityItemInterface;
}

const CityOverview = (props: CityOverviewPropsInterface) => {
  const cityForecastQuery = useQuery(
    ['cityForecast', props.city.id],
    getCityForecast({ id: props.city.id }),
  );

  useEffect(() => {
    console.log('cityDetailsQuery.data');
    console.log(cityForecastQuery.data);
  }, [cityForecastQuery.data]);

  return (
    <div
      className={`brw-city-ov ${props.className || ''}`.trim()} // Add any provided classnames to brw-CityOverview
      style={{
        backgroundImage:
          cityForecastQuery?.data?.city.images != null &&
          cityForecastQuery.data.city.images.length > 0
            ? `url(${cityForecastQuery.data.city.images[0]})`
            : `url(${defaultCityBgImg})`,
        ...(props.style || undefined),
      }}
    >
      <div className="brw-city-ov-top">
        <button className="brw-city-ov-top-radar br-btn br-primary-color br-pill">
          Local Radar
        </button>
        <button className="brw-city-ov-top-trash br-btn br-primary-color br-circle">
          <TrashIcon />
        </button>
      </div>
      <div className="brw-city-ov-bot">
        <div className="brw-city-ov-bot-deg">
          {Number(cityForecastQuery.data?.forecast.current.temperature).toFixed(
            0,
          )}
          &deg;
        </div>
        <div>
          <p>{cityForecastQuery.data?.forecast.current.weather.description}</p>
          <p>
            Feels like{' '}
            {Number(
              cityForecastQuery.data?.forecast.current.feelsLikeTemperature,
            ).toFixed(0)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CityOverview;
