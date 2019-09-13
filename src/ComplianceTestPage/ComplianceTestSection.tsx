import * as React from 'react';
import { Icon, Section, SectionKind, Button, ButtonKind, ProgressBar } from '../modules';

interface TestSectionProps {
  progress?: number;
  onTestRun: () => any;
  onReport: () => any;
}

export function ComplianceTestSection({ progress, onTestRun, onReport }: TestSectionProps) {
  const inProgress = progress !== undefined && progress < 100;
  return (
    <Section className="relative" title="Compliance" kind={SectionKind.Primary}>
      {inProgress ? (
        <div className="absolute inset-x-0" style={{ top: 'calc(100% + 1px)' }}>
          <ProgressBar now={progress} />
        </div>
      ) : null}
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
