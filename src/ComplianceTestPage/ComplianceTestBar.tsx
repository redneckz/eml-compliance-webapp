import * as React from 'react';
import { runTest } from '../API';
import { useLoader, useAlertManager } from '../modules';
import { ComplianceTestSection } from './ComplianceTestSection';

export function ComplianceTestBar() {
  const showAlert = useAlertManager();
  const [inProgress, handleTest] = useLoader(async () => {
    try {
      await runTest();
    } catch (ex) {
      showAlert({ title: 'Test Failure', description: ex.message });
    }
  });
  const handleReport = React.useCallback(() => console.log('handleReport'), []);
  return <ComplianceTestSection inProgress={inProgress} onTestRun={handleTest} onReport={handleReport} />;
}
