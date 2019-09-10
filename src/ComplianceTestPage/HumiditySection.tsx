import * as React from 'react';
import * as Domain from '../Domain';
import { Section, SectionKind } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

export function HumiditySection({ humidity }: { humidity?: Domain.Humidity }) {
  return (
    <Section title="Humidity" kind={SectionKind.Neutral}>
      {humidity ? renderHumidity(humidity) : ''}
    </Section>
  );
}

function renderHumidity(humidity: Domain.Humidity) {
  return (
    <div className="flex flex-no-wrap justify-between items-center">
      <div>
        <strong className="font-bold">{humidity ? humidity.Humidity : ''}</strong>
      </div>
      <LastAnomalySection>{humidity ? humidity.LastAnomaly : ''}</LastAnomalySection>
    </div>
  );
}
