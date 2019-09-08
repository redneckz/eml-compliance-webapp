import * as React from 'react';
import { runTest } from '../API';
import { useLoader } from '../modules';
import { ComplianceTestSection } from './ComplianceTestSection';

export function ComplianceTestBar() {
  const [inProgress, handleTest] = useLoader(runTest);
  const handleReport = React.useCallback(() => console.log('handleReport'), []);
  return <ComplianceTestSection inProgress={inProgress} onTestRun={handleTest} onReport={handleReport} />;
}
