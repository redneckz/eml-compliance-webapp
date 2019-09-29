import * as React from 'react';
import { AudioAlertResource, HumidityResource, TemperatureResource } from '../API';
import { useDataPolling } from '../modules';
import { ComplianceTestPageLayout } from './ComplianceTestPageLayout';
import { ComplianceTestBar } from './ComplianceTestBar';
import { ComplianceTestProgress } from './ComplianceTestProgress';
import { EmergencyAudioAlertBar } from './EmergencyAudioAlertBar';
import { SecurityAndMotionBar } from './SecurityAndMotionBar';
import { FloorPlan } from './FloorPlan';
import { AtmosphereParamSection } from './AtmosphereParamSection';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function ComplianceTestPage() {
  const alerts = useDataPolling(AudioAlertResource.getAll, DATA_POLLING_TIMEOUT);
  const humidity = useDataPolling(HumidityResource.get, DATA_POLLING_TIMEOUT);
  const temperature = useDataPolling(TemperatureResource.get, DATA_POLLING_TIMEOUT);
  return (
    <ComplianceTestPageLayout
      testBar={<ComplianceTestBar />}
      testProgress={<ComplianceTestProgress />}
      alertBar={
        alerts && alerts.length ? (
          <EmergencyAudioAlertBar alerts={(alerts || []).map(({ Number: kind }) => kind)} />
        ) : null
      }
      motionBar={<SecurityAndMotionBar />}
      floorPlan={<FloorPlan />}
      humidityBar={
        humidity ? (
          <AtmosphereParamSection title="Humidity" param={humidity.Humidity} lastAnomaly={humidity.LastAnomaly} />
        ) : null
      }
      temperatureBar={
        temperature ? (
          <AtmosphereParamSection
            title="Temperature"
            param={temperature.Temperature}
            lastAnomaly={temperature.LastAnomaly}
          />
        ) : null
      }
    />
  );
}
