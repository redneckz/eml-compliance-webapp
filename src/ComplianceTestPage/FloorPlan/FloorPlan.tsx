import * as React from 'react';
import { ReactComponent as FloorPlanMock } from './floorPlanMock.svg';

interface FloorPlanProps {
  w?: string;
  h?: string;
  preserveAspectRatio?: string;
}

export function FloorPlan({ w = '100%', h = 'auto', preserveAspectRatio }: FloorPlanProps) {
  return <FloorPlanMock preserveAspectRatio={preserveAspectRatio} style={{ width: w, height: h }} />;
}
