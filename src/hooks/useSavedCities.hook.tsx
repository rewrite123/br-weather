import React, { useEffect, useState } from 'react';

const useSavedCities = (): [string[], (newCities: string[]) => void] => {
  const [savedCities, setCities] = useState<string[]>([]);

  const defaultSavedCities = [
    'F52083D2-841C-4E1A-A4C9-83827B07D8EE',
    '1B4DBE6A-EB69-4357-8BE8-1968DD9ECDF3',
    '0B66D5E5-039F-4951-A63A-2693464617CB',
    '54A0CBA3-F4F8-47B8-974C-7FCE641CAD2C',
  ];

  const setSavedCities = (newCities: string[]) => {
    setCities(newCities);
    localStorage.setItem('savedCities', JSON.stringify(newCities));
  };

  useEffect(() => {
    const fromLocal = localStorage.getItem('savedCities');
    const saved = fromLocal ? JSON.parse(fromLocal) : null;
    if (
      saved &&
      Array.isArray(saved) &&
      saved.length > 0 &&
      typeof saved[0] == 'string'
    ) {
      setCities(saved);
    } else {
      setSavedCities(defaultSavedCities);
    }
  }, []);

  return [savedCities, setSavedCities];
};
export default useSavedCities;
