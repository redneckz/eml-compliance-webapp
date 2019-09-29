import * as React from 'react';
import * as Domain from '../../Domain';
import { loadFloorPlan } from '../../API';
import { useDataProvider, useDispatcher } from '../../modules';
import { ComplianceTestAction } from '../ComplianceTestAction';
import { FloorPlanDevice } from './FloorPlanDevice';

const DEFAULT_STATE: Domain.DeviceStatus[] = [];

function floorPlanReducer(state: Domain.DeviceStatus[], action: ComplianceTestAction): Domain.DeviceStatus[] {
  return action.type === '@test/done' && action.payload ? action.payload : state;
}

export function FloorPlan() {
  const [floorPlan] = useDataProvider(loadFloorPlan);
  const [devices, dispatch] = React.useReducer(floorPlanReducer, DEFAULT_STATE);
  useDispatcher(devices, dispatch);
  return floorPlan ? (
    <svg viewBox={`0 0 ${floorPlan.w} ${floorPlan.h}`} className="w-full">
      <image href={floorPlan.dataURL} x="0" y="0" width={floorPlan.w} height={floorPlan.h} />
      {devices.map(dev => (
        <FloorPlanDevice key={`${dev.X}${dev.Y}`} device={dev} />
      ))}
    </svg>
  ) : null;
}
