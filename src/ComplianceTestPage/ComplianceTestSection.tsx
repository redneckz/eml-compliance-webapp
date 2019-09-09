import * as React from 'react';
import { Icon, Section, SectionKind, Button, ButtonKind } from '../modules';

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
          <Icon.Gear className={['mr-2', 'w-4 h-4', inProgress ? 'loader' : ''].filter(Boolean).join(' ')} />
          Test
        </Button>
        <Button kind={ButtonKind.Emp} disabled={inProgress} onClick={onReport}>
          <Icon.Report className="mr-2 w-4 h-4" />
          Report
        </Button>
      </div>
    </Section>
  );
}
