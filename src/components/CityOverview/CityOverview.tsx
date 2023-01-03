import React, { HTMLProps, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import getCityDetails from '../../api/getCityDetails.api';
import StylingPropsInterface from '../../interfaces/StylingPropsInterface';
import cityItemInterface from '../../interfaces/api/elements/cityItemInterface';

import { TrashIcon } from '../Icons/Common';
import defaultCityBgImg from '../../assets/defaultCityBg.jpg';
import getCityForecast from '../../api/getCityForecast.api';
import getCityForecastInterface from '../../interfaces/api/responses/getCityForcastInterface';

export interface CityOverviewPropsInterface extends StylingPropsInterface {
  cityForecast?: getCityForecastInterface;
  cityId?: string;
}

const CityOverview = (props: CityOverviewPropsInterface) => {
  const [cityForecast, setCityForecast] =
    useState<getCityForecastInterface | null>(null);

  const cityOverviewRef = useRef<HTMLDivElement>(null);

  const cityForecastQuery =
    props.cityForecast == undefined && props.cityId != undefined
      ? useQuery(
          ['cityForecast', props.cityId],
          getCityForecast({ id: props.cityId }),
        )
      : undefined;

  useEffect(() => {
    if (props.cityForecast) {
      setCityForecast(props.cityForecast);
    } else if (props.cityId && cityForecastQuery?.data) {
      setCityForecast(cityForecastQuery.data);
    }
  }, [props, cityForecastQuery?.data]);

  if (cityForecast != null) {
    return (
      <div
        ref={cityOverviewRef}
        className={`brw-city-ov ${props.className || ''}`.trim()} // Add any provided classnames to brw-CityOverview
        style={{
          backgroundImage:
            cityForecast.city.images != null &&
            cityForecast.city.images.length > 0
              ? `url(${cityForecast.city.images[0]})`
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
            {Number(cityForecast.forecast.current.temperature).toFixed(0)}
            &deg;
          </div>
          <div>
            <p>{cityForecast.forecast.current.weather.description}</p>
            <p>
              Feels like{' '}
              {Number(
                cityForecast.forecast.current.feelsLikeTemperature,
              ).toFixed(0)}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default CityOverview;
