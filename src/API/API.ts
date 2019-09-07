import { Resource } from './Resource';

const API_URL: string = process.env.API_URL || 'http://server.jabiliot.com';

export interface Humidity {
  Humidity: string;
  LastAnomaly: string;
}

export const HumidityResource = new Resource<Humidity>(`${API_URL}/list_humidity`);

export interface Temperature {
  Temperature: string;
  LastAnomaly: string;
}

export const TemperatureResource = new Resource<Temperature>(`${API_URL}/list_temp`);

export enum AlertKind {
  Weather = 1,
  Fire = 2,
  Shooter = 3
}

export interface AudioAlert {
  Number: AlertKind;
  Text: string;
}

export enum AudioAlertStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export interface AudioAlertStatusResp {
  Alert: AlertKind;
  Status: AudioAlertStatus;
}

export const AudioAlertResource = new Resource<AudioAlert>(`${API_URL}/list_alerts`);

export async function toggleAudioAlert(alert?: AlertKind): Promise<boolean> {
  const resp = await fetch(`${API_URL}/alert?${alert || 0}`, { method: 'POST' });
  const status: AudioAlertStatusResp = await resp.json();
  return status.Status === AudioAlertStatus.Active;
}
