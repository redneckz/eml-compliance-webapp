import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Domain from '../../Domain';
import { FloorPlanDevice } from './FloorPlanDevice';
import { ReactComponent as FloorPlanMock } from './floorPlanMock.svg';

interface FloorPlanProps extends React.SVGAttributes<SVGElement> {
  devices: Domain.DeviceStatus[];
}

export function FloorPlan({ devices, ...rest }: FloorPlanProps) {
  const floorPlanEl = React.useRef<SVGSVGElement>(null);
  return (
    <>
      {floorPlanEl.current
        ? ReactDOM.createPortal(renderDevices(devices), floorPlanEl.current.getElementById('devices-group'))
        : null}
      <FloorPlanMock ref={floorPlanEl} className="w-full" preserveAspectRatio="xMidYMin" {...rest} />
    </>
  );
}

function renderDevices(devices: Domain.DeviceStatus[]) {
  return devices.map(dev => <FloorPlanDevice key={`${dev.X}${dev.Y}`} {...dev} />);
}
