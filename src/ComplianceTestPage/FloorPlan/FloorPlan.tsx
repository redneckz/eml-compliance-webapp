import * as React from 'react';
import * as Domain from '../../Domain';
import { loadFloorPlan } from '../../API';
import { useDataProvider } from '../../modules';
import { FloorPlanDevice } from './FloorPlanDevice';

interface FloorPlanProps {
  devices: Domain.DeviceStatus[];
}

export function FloorPlan({ devices }: FloorPlanProps) {
  const [floorPlan] = useDataProvider(loadFloorPlan);
  return floorPlan ? (
    <svg viewBox={`0 0 ${floorPlan.w} ${floorPlan.h}`} className="w-full">
      <image href={floorPlan.dataURL} x="0" y="0" width={floorPlan.w} height={floorPlan.h} />
      {devices.map(dev => (
        <FloorPlanDevice key={`${dev.X}${dev.Y}`} device={dev} />
      ))}
    </svg>
  ) : null;
}
