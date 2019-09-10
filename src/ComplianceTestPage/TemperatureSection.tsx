import * as React from 'react';
import * as Domain from '../Domain';
import { Section, SectionKind } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

export function TemperatureSection({ temperature }: { temperature?: Domain.Temperature }) {
  return (
    <Section title="Temperature" kind={SectionKind.Neutral}>
      {temperature ? renderTemperature(temperature) : ''}
    </Section>
  );
}

function renderTemperature(temperature: Domain.Temperature) {
  return (
    <div className="flex flex-no-wrap justify-between items-center">
      <div>
        <strong className="font-bold">{temperature.Temperature}</strong>
      </div>
      <LastAnomalySection>{temperature.LastAnomaly}</LastAnomalySection>
    </div>
  );
}
