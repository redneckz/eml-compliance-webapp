import * as React from 'react';
import * as Domain from '../../Domain';

const DEVICE_ICON_PATH =
  'M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z';
const DEVICE_ICON_W = 12;
const DEVICE_ICON_SCALE = (DEVICE_ICON_W / 24).toFixed(1);

export function FloorPlanDevice({ X, Y, RGB }: Domain.DeviceStatus) {
  return (
    <path
      transform={`matrix(${DEVICE_ICON_SCALE} 0 0 ${DEVICE_ICON_SCALE} ${X} ${Y})`}
      x={X}
      y={Y}
      fill={RGB}
      d={DEVICE_ICON_PATH}
    />
  );
}
