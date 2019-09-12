import * as React from 'react';
import { AudioAlertResource, HumidityResource, TemperatureResource } from '../API';
import { useDataPolling } from '../modules';
import { ComplianceTestPageLayout } from './ComplianceTestPageLayout';
import { ComplianceTestBar } from './ComplianceTestBar';
import { EmergencyAudioAlertBar } from './EmergencyAudioAlertBar';
import { SecurityAndMotionBar } from './SecurityAndMotionBar';
import { FloorPlan } from './FloorPlan';
import { HumiditySection } from './HumiditySection';
import { TemperatureSection } from './TemperatureSection';
import { useDevicesProvider } from './useDevicesProvider';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function ComplianceTestPage() {
  const [devices, fetchDevices] = useDevicesProvider();
  const alerts = useDataPolling(AudioAlertResource.getAll, DATA_POLLING_TIMEOUT);
  const humidity = useDataPolling(HumidityResource.get, DATA_POLLING_TIMEOUT);
  const temperature = useDataPolling(TemperatureResource.get, DATA_POLLING_TIMEOUT);
  return (
    <ComplianceTestPageLayout
      testBar={<ComplianceTestBar onTestSuccess={fetchDevices} />}
      alertBar={
        alerts && alerts.length ? (
          <EmergencyAudioAlertBar alerts={(alerts || []).map(({ Number: kind }) => kind)} />
        ) : null
      }
      motionBar={<SecurityAndMotionBar />}
      floorPlan={<FloorPlan devices={devices || []} />}
      humidityBar={humidity ? <HumiditySection humidity={humidity} /> : null}
      temperatureBar={temperature ? <TemperatureSection temperature={temperature} /> : null}
    />
  );
}
