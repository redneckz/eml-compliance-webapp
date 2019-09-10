import * as React from 'react';
import { ReactComponent as FloorPlanMock } from './floorPlanMock.svg';

interface FloorPlanProps extends React.SVGAttributes<SVGElement> {}

export function FloorPlan(props: FloorPlanProps) {
  return <FloorPlanMock className="w-full" preserveAspectRatio="xMidYMin" {...props} />;
}
