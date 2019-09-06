import * as React from 'react';
import { TemperatureResource } from '../API';
import { Section, SectionKind, useDataPolling } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function TemperatureBar() {
  const temperature = useDataPolling(TemperatureResource.get, DATA_POLLING_TIMEOUT);
  return (
    <Section title="Temperature" kind={SectionKind.Misc}>
      <div className="flex flex-no-wrap justify-between items-center">
        <div>
          <strong className="font-bold">{temperature ? temperature.Temperature : ''}</strong>
        </div>
        <LastAnomalySection>{temperature ? temperature.LastAnomaly : ''}</LastAnomalySection>
      </div>
    </Section>
  );
}
