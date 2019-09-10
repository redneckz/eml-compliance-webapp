import * as React from 'react';
import * as Domain from '../Domain';
import { Section, SectionKind } from '../modules';
import { LastAnomalySection } from './LastAnomalySection';

export function HumiditySection({ humidity: { Humidity, LastAnomaly } }: { humidity: Domain.Humidity }) {
  return (
    <Section title="Humidity" kind={SectionKind.Secondary}>
      <div className="flex flex-no-wrap justify-between items-center">
        <strong className="font-semibold">{Humidity}</strong>
        <LastAnomalySection>{LastAnomaly}</LastAnomalySection>
      </div>
    </Section>
  );
}
