import * as React from 'react';
import { Section, SectionKind } from '../modules';

interface SectionProps {
  title?: string;
  param: string | number;
  lastAnomaly: string;
}

export function AtmosphereParamSection({ title, param, lastAnomaly }: SectionProps) {
  return (
    <Section
      title={title}
      aside={
        <div className="text-right text-xs lg:text-sm">
          <strong className="font-semibold">Last Anomaly</strong>
          <br />
          <span>{lastAnomaly}</span>
        </div>
      }
      kind={SectionKind.Secondary}
    >
      <span className="font-semibold">{param}</span>
    </Section>
  );
}
