import * as React from 'react';
import { API } from '../API';
import { useDataPolling } from '../modules';
import { HumiditySection } from './HumiditySection';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function HumidityBar() {
  const humidity = useDataPolling(API.HumidityResource.get, DATA_POLLING_TIMEOUT);
  return <HumiditySection humidity={humidity} />;
}
