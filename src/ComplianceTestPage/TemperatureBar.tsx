import * as React from 'react';
import { API } from '../API';
import { useDataPolling } from '../modules';
import { TemperatureSection } from './TemperatureSection';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function TemperatureBar() {
  const temperature = useDataPolling(API.TemperatureResource.get, DATA_POLLING_TIMEOUT);
  return <TemperatureSection temperature={temperature} />;
}
