import * as React from 'react';
import { runTest } from '../API';
import { useAlertManager, useTimer } from '../modules';
import { ComplianceTestSection } from './ComplianceTestSection';

const RUN_REPORT_URL = process.env.RUN_REPORT_URL || 'http://server.jabiliot.com/run_report';

export function ComplianceTestBar({ onTestSuccess }: { onTestSuccess: () => any }) {
  const showAlert = useAlertManager();
  const [relativeTime, startTestTimer] = useTimer(onTestSuccess);
  const testProgress = relativeTime && relativeTime * 100;
  const run = React.useCallback(() => {
    try {
      startTestTimer(runTestInTime());
    } catch (ex) {
      showAlert({ title: 'Test Failure', description: ex.message });
    }
  }, [startTestTimer, showAlert]);
  const handleReport = React.useCallback(() => {
    window.open(RUN_REPORT_URL, 'ComplianceTestReport');
  }, []);
  return <ComplianceTestSection progress={testProgress} onTestRun={run} onReport={handleReport} />;
}

async function runTestInTime(): Promise<number> {
  const { WaitTime } = await runTest();
  return WaitTime * 1000;
}
