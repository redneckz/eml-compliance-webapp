import * as React from 'react';
import * as Domain from '../Domain';
import { Section, SectionKind } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

export function TemperatureSection({ temperature: { Temperature, LastAnomaly } }: { temperature: Domain.Temperature }) {
  return (
    <Section title="Temperature" kind={SectionKind.Secondary}>
      <div className="flex flex-no-wrap justify-between items-center">
        <strong className="font-semibold">{Temperature}</strong>
        <LastAnomalySection>{LastAnomaly}</LastAnomalySection>
      </div>
    </Section>
  );
}
