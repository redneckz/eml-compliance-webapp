import * as React from 'react';
import { HumidityResource } from '../API';
import { Section, SectionKind, useDataPolling } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

const DATA_POLLING_TIMEOUT = 10 * 1000;

export function HumidityBar() {
  const humidity = useDataPolling(HumidityResource.get, DATA_POLLING_TIMEOUT);
  return (
    <Section title="Humidity" kind={SectionKind.Even}>
      <div className="flex flex-no-wrap justify-between items-center">
        <div>
          <strong className="font-bold">{humidity ? humidity.Humidity : ''}</strong>
        </div>
        <LastAnomalySection>{humidity ? humidity.LastAnomaly : ''}</LastAnomalySection>
      </div>
    </Section>
  );
}
