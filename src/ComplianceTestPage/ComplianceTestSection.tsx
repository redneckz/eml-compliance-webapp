import * as React from 'react';
import { Section, SectionKind, Button, ButtonKind } from '../modules';
import { GearIcon, ReportIcon } from '../icons';

interface TestSectionProps {
  inProgress?: boolean;
  onTestRun: () => any;
  onReport: () => any;
}

export function ComplianceTestSection({ inProgress, onTestRun, onReport }: TestSectionProps) {
  return (
    <Section title="Compliance" kind={SectionKind.Emp}>
      <div className="flex flex-no-wrap items-center">
        <Button className="mr-4" kind={ButtonKind.Emp} disabled={inProgress} onClick={onTestRun}>
          <GearIcon className={['mr-2', 'w-4 h-4', inProgress ? 'loader' : ''].filter(Boolean).join(' ')} />
          Test
        </Button>
        <Button kind={ButtonKind.Emp} disabled={inProgress} onClick={onReport}>
          <ReportIcon className="mr-2 w-4 h-4" />
          Report
        </Button>
      </div>
    </Section>
  );
}
