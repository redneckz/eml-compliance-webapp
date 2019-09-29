import * as React from 'react';
import { runTest, DeviceResource } from '../API';
import { delay, useAlertManager, useDispatcher } from '../modules';
import { ComplianceTestAction } from './ComplianceTestAction';
import { ComplianceTestSection } from './ComplianceTestSection';

const RUN_REPORT_URL = process.env.RUN_REPORT_URL || 'http://server.jabiliot.com/run_report';

interface TestBarState {
  inProgress?: boolean;
}

const DEFAULT_STATE: TestBarState = {};

function testBarReducer(state: TestBarState, { type }: ComplianceTestAction): TestBarState {
  switch (type) {
    case '@test/run':
      return { inProgress: true };
    case '@test/done':
      return DEFAULT_STATE;
    default:
      return state;
  }
}

export function ComplianceTestBar() {
  const [state, dispatch] = React.useReducer(testBarReducer, DEFAULT_STATE);
  const { inProgress } = state;
  const dispatcher = useDispatcher(state, dispatch);
  const showAlert = useAlertManager();
  const handleRun = React.useCallback(async () => {
    try {
      dispatcher({ type: '@test/run' });
      const { WaitTime } = await runTest();
      dispatcher({ type: '@test/await', payload: WaitTime });
      await delay(WaitTime * 1000);
      const devices = await DeviceResource.getAll();
      dispatcher({ type: '@test/done', payload: devices });
    } catch (ex) {
      dispatcher({ type: '@test/done', error: true });
      showAlert({ title: 'Test Failure', description: ex.message });
    }
  }, [dispatcher, showAlert]);
  const handleReport = React.useCallback(() => {
    window.open(RUN_REPORT_URL, 'ComplianceTestReport');
  }, []);
  return <ComplianceTestSection inProgress={inProgress} onTestRun={handleRun} onReport={handleReport} />;
}
