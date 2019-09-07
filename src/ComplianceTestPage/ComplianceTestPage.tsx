import * as React from 'react';
import { ComplianceTestPageLayout } from './ComplianceTestPageLayout';
import { ComplianceTestBar } from './ComplianceTestBar';
import { EmergencyAudioAlertBar } from './EmergencyAudioAlertBar';
import { SecurityAndMotionBar } from './SecurityAndMotionBar';
import { FloorPlan } from './FloorPlan';
import { HumidityBar } from './HumidityBar';
import { TemperatureBar } from './TemperatureBar';

export function ComplianceTestPage() {
  return (
    <ComplianceTestPageLayout
      testBar={<ComplianceTestBar />}
      alertBar={<EmergencyAudioAlertBar />}
      motionBar={<SecurityAndMotionBar />}
      floorPlan={<FloorPlan h="calc(100vh - 5 * 3rem - 2px)" preserveAspectRatio="xMidYMin" />}
      humidityBar={<HumidityBar />}
      temperatureBar={<TemperatureBar />}
    />
  );
}
