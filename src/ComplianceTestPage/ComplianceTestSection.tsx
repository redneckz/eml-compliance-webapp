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
      <div className="table border-collapse">
        <div className="table-cell align-top pr-2">
          <Button kind={ButtonKind.Primary} disabled={inProgress} onClick={onTestRun}>
            <Icon.Refresh className={['mr-1', 'w-5 h-5', inProgress ? 'loader' : ''].filter(Boolean).join(' ')} />
            <span className="font-semibold align-middle">TEST</span>
          </Button>
        </div>
        <div className="table-cell align-top">
          <Button kind={ButtonKind.Secondary} disabled={inProgress} onClick={onReport}>
            <Icon.Report className="mr-1 w-5 h-5" />
            <span className="font-semibold align-middle">REPORT</span>
          </Button>
        </div>
      </div>
    </Section>
  );
}
