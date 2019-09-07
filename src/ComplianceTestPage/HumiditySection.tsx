import * as React from 'react';
import { API } from '../API';
import { Section, SectionKind } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

export function HumiditySection({ humidity }: { humidity?: API.Humidity }) {
  return (
    <Section title="Humidity" kind={SectionKind.Even}>
      {humidity ? renderHumidity(humidity) : ''}
    </Section>
  );
}

function renderHumidity(humidity: API.Humidity) {
  return (
    <div className="flex flex-no-wrap justify-between items-center">
      <div>
        <strong className="font-bold">{humidity ? humidity.Humidity : ''}</strong>
      </div>
      <LastAnomalySection>{humidity ? humidity.LastAnomaly : ''}</LastAnomalySection>
    </div>
  );
}
