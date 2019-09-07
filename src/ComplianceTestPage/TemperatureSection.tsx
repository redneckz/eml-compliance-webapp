import * as React from 'react';
import { API } from '../API';
import { Section, SectionKind } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

export function TemperatureSection({ temperature }: { temperature?: API.Temperature }) {
  return (
    <Section title="Temperature" kind={SectionKind.Misc}>
      {temperature ? renderTemperature(temperature) : ''}
    </Section>
  );
}

function renderTemperature(temperature: API.Temperature) {
  return (
    <div className="flex flex-no-wrap justify-between items-center">
      <div>
        <strong className="font-bold">{temperature.Temperature}</strong>
      </div>
      <LastAnomalySection>{temperature.LastAnomaly}</LastAnomalySection>
    </div>
  );
}
