import * as React from 'react';
import { runTest } from '../API';
import { useLoader, useAlertManager } from '../modules';
import { ComplianceTestSection } from './ComplianceTestSection';

const RUN_REPORT_URL = process.env.RUN_REPORT_URL || 'http://server.jabiliot.com/run_report';

export function ComplianceTestBar() {
  const showAlert = useAlertManager();
  const [inProgress, handleTest] = useLoader(async () => {
    try {
      await runTest();
    } catch (ex) {
      showAlert({ title: 'Test Failure', description: ex.message });
    }
  });
  const handleReport = React.useCallback(() => {
    window.open(RUN_REPORT_URL, 'ComplianceTestReport');
  }, []);
  return <ComplianceTestSection inProgress={inProgress} onTestRun={handleTest} onReport={handleReport} />;
}
