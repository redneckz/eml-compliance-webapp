import * as React from 'react';
import * as Domain from '../../Domain';
import exitSignIconPath from './ExitSign.svg';

interface FloorPlanDeviceProps {
  device: Domain.DeviceStatus;
}

export function FloorPlanDevice({ device: { X, Y, RGB } }: FloorPlanDeviceProps) {
  return <use href={`${exitSignIconPath}#icon`} x={X} y={Y} fill={RGB} />;
}
