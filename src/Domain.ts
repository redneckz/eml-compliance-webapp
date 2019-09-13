export interface DeviceStatus {
  X: number;
  Y: number;
  RGB: string;
}

export interface TestParams {
  WaitTime: number;
}

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

export interface MotionStatus {
  Area: number;
  Motion: number;
}

export interface Humidity {
  Humidity: string;
  LastAnomaly: string;
}

export interface Temperature {
  Temperature: string;
  LastAnomaly: string;
}
