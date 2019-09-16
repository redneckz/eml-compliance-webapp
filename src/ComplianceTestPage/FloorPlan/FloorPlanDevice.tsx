import * as React from 'react';
import * as Domain from '../../Domain';

const DEVICE_ICON_PATH =
  'M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z';
const DEVICE_ICON_W = 24;

interface FloorPlanDeviceProps {
  device: Domain.DeviceStatus;
  size?: number;
}

export function FloorPlanDevice({ device: { X, Y, RGB }, size }: FloorPlanDeviceProps) {
  const scale = size ? (size / DEVICE_ICON_W).toFixed(1) : 1;
  return <path transform={`matrix(${scale} 0 0 ${scale} ${X} ${Y})`} x={X} y={Y} fill={RGB} d={DEVICE_ICON_PATH} />;
}
