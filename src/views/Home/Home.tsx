import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import getCities from '../../api/getCities.api';

import BRWTitle from '../../components/BRWTitle/BRWTitle';
import Carousel from '../../components/Carousel/Carousel';
import CityOverview from '../../components/CityOverview/CityOverview';
import Switch from '../../components/Switch/Switch';

const Home = () => {
  // page >= 1
  const [page, setPage] = useState<number>(1);

  // farenheight | celcius measurements
  const [degType, setDegType] = useState<'f' | 'c'>('f');

  const citiesQuery = useQuery('cities', getCities({ page }));

  useEffect(() => {
    console.log('citiesQuery.data');
    console.log(citiesQuery.data);
  }, [citiesQuery.data]);

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
            citiesQuery.data?.items.map((city) => {
              return `${city.name} ${
                city.regionCode ? `, ${city.regionCode}` : ''
              }`;
            }) || []
          }
          pages={[
            ...(citiesQuery.data?.items.map((city, cityIndex) => {
              return (
                <CityOverview
                  key={cityIndex}
                  city={city}
                  className="brw-home-loc-slide"
                />
              );
            }) || []),
          ]}
          className="brw-home-loc-slides"
        />
      </div>
      {citiesQuery.data?.items.length}
      {citiesQuery.status}
    </div>
  );
};

export default Home;
