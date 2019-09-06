import { Resource } from './Resource';

const API_URL: string = process.env.API_URL || 'http://server.jabiliot.com';

interface Humidity {
  Humidity: string;
  LastAnomaly: string;
}

interface Temperature {
  Temperature: string;
  LastAnomaly: string;
}

export const HumidityResource = new Resource<Humidity>(`${API_URL}/list_humidity`);
export const TemperatureResource = new Resource<Temperature>(`${API_URL}/list_temp`);
