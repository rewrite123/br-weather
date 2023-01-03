import React, { useEffect, useState } from 'react';

import { useQueries } from 'react-query';
import getCities from '../../api/getCities.api';

import useSavedCities from '../../hooks/useSavedCities.hook';

import BRWTitle from '../../components/BRWTitle/BRWTitle';
import Carousel from '../../components/Carousel/Carousel';
import CityOverview from '../../components/CityOverview/CityOverview';
import Switch from '../../components/Switch/Switch';
import getCityForecast from '../../api/getCityForecast.api';

const Home = () => {
  // page >= 1
  const [page, setPage] = useState<number>(1);

  // farenheight | celcius measurements
  const [degType, setDegType] = useState<'f' | 'c'>('f');

  const [savedCities] = useSavedCities();

  const forecastQueries = useQueries(
    savedCities.map((cityId) => {
      return {
        queryKey: ['cityForecast', cityId],
        queryFn: getCityForecast({ id: cityId }),
      };
    }),
  );

  useEffect(() => {
    // console.log('forecastQueries');
    // console.log(forecastQueries.map((city) => city.data));
  }, [forecastQueries]);

  return (
    <div className="brw-home">
      <div className="brw-home-ctn">
        <div className="brw-home-ctn-card br-card">
          <div className="brw-home-ctn-card-header">
            <BRWTitle className="brw-home-ctn-card-header-title" />
            <Switch
              defaultSelected={degType == 'f' ? 0 : 1} // f:0, c:1
              switches={[
                // I could use a onClick on this instead of onSelect, but for two items not neccessary
                <span className="brw-home-ctn-card-header-deg-switch-el">
                  F&deg;
                </span>,
                <span className="brw-home-ctn-card-header-deg-switch-el">
                  C&deg;
                </span>,
              ]}
              onSelect={(selectedIndex) => {
                if (selectedIndex == 0) {
                  setDegType('f');
                } else {
                  setDegType('c');
                }
              }}
              className="brw-home-ctn-card-header-deg-switch"
            />
          </div>
        </div>
      </div>
      <div className="brw-home-loc">
        <Carousel
          pageTitles={
            forecastQueries.map((cityForecast) => {
              return `${cityForecast.data?.city.name} ${
                cityForecast.data?.city.regionCode
                  ? `, ${cityForecast.data?.city.regionCode}`
                  : ''
              }`;
            }) || []
          }
          pages={[
            ...(forecastQueries.map((cityForecast, cityIndex) => {
              return (
                <CityOverview
                  key={cityIndex}
                  cityForecast={cityForecast.data}
                  className="brw-home-loc-slide"
                />
              );
            }) || []),
          ]}
          className="brw-home-loc-slides"
        />
      </div>
    </div>
  );
};

export default Home;
