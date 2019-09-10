import * as React from 'react';
import { AudioAlertResource } from '../API';
import { useDataPolling } from '../modules';
import { ComplianceTestPageLayout } from './ComplianceTestPageLayout';
import { ComplianceTestBar } from './ComplianceTestBar';
import { EmergencyAudioAlertBar } from './EmergencyAudioAlertBar';
import { SecurityAndMotionBar } from './SecurityAndMotionBar';
import { FloorPlan } from './FloorPlan';
import { HumidityBar } from './HumidityBar';
import { TemperatureBar } from './TemperatureBar';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function ComplianceTestPage() {
  const alerts = useDataPolling(AudioAlertResource.getAll, DATA_POLLING_TIMEOUT);
  return (
    <ComplianceTestPageLayout
      testBar={<ComplianceTestBar />}
      alertBar={
        alerts && alerts.length ? (
          <EmergencyAudioAlertBar alerts={(alerts || []).map(({ Number: kind }) => kind)} />
        ) : null
      }
      motionBar={<SecurityAndMotionBar />}
      floorPlan={<FloorPlan />}
      humidityBar={<HumidityBar />}
      temperatureBar={<TemperatureBar />}
    />
  );
}
