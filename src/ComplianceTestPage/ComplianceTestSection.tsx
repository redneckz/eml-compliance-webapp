import * as React from 'react';
import { Icon, Section, SectionKind, Button, ButtonKind } from '../modules';

interface TestSectionProps {
  inProgress?: boolean;
  onTestRun: () => any;
  onReport: () => any;
}

export function ComplianceTestSection({ inProgress, onTestRun, onReport }: TestSectionProps) {
  return (
    <Section title="Compliance" kind={SectionKind.Primary}>
      <div className="flex flex-no-wrap items-center">
        <Button className="mr-2" kind={ButtonKind.Primary} disabled={inProgress} onClick={onTestRun}>
          <Icon.Refresh className={['mr-1', 'w-4 h-4', inProgress ? 'loader' : ''].filter(Boolean).join(' ')} />
          <span className="font-semibold">TEST</span>
        </Button>
        <Button kind={ButtonKind.Secondary} disabled={inProgress} onClick={onReport}>
          <Icon.Report className="mr-1 w-4 h-4" />
          <span className="font-semibold">REPORT</span>
        </Button>
      </div>
    </Section>
  );
}
