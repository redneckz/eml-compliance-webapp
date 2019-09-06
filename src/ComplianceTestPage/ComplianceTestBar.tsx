import * as React from 'react';
import { Section, SectionKind, Button, ButtonKind, IconButton, IconButtonKind, IconPath } from '../modules';

export function ComplianceTestBar() {
  const handleTest = React.useCallback(() => console.log('handleTest'), []);
  const handleRunReport = React.useCallback(() => console.log('handleRunReport'), []);
  return (
    <Section title="Compliance" kind={SectionKind.Emp}>
      <div className="flex flex-no-wrap justify-between items-center">
        <Button kind={ButtonKind.Emp} onClick={handleTest}>
          Test
        </Button>
        <IconButton kind={IconButtonKind.Emp} w={32} path={IconPath.Report} onClick={handleRunReport} />
      </div>
    </Section>
  );
}
