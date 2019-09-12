import * as React from 'react';
import * as Domain from '../../Domain';
import { loadFloorPlan } from '../../API';
import { useDataProvider } from '../../modules';
import { FloorPlanDevice } from './FloorPlanDevice';

interface FloorPlanProps {
  devices: Domain.DeviceStatus[];
}

const DEV_SIZE_K = 10;

export function FloorPlan({ devices }: FloorPlanProps) {
  const [floorPlan] = useDataProvider(loadFloorPlan);
  const deviceSize = floorPlan ? Math.ceil(Math.min(floorPlan.w, floorPlan.h) / DEV_SIZE_K) : undefined;
  return floorPlan ? (
    <svg viewBox={`0 0 ${floorPlan.w} ${floorPlan.h}`} className="w-full">
      <image href={floorPlan.dataURL} x="0" y="0" />
      {devices.map(dev => (
        <FloorPlanDevice key={`${dev.X}${dev.Y}`} device={dev} size={deviceSize} />
      ))}
    </svg>
  ) : null;
}
