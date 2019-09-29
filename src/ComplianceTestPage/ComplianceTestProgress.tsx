import * as React from 'react';
import { ComplianceTestAction } from './ComplianceTestAction';
import { ProgressBar, useDispatcher } from '../modules';

interface TestProgressState {
  waitTime?: number;
}

const DEFAULT_STATE: TestProgressState = {};

function testProgressReducer(state: TestProgressState, action: ComplianceTestAction): TestProgressState {
  switch (action.type) {
    case '@test/await':
      return { waitTime: action.payload };
    case '@test/done':
      return DEFAULT_STATE;
    default:
      return state;
  }
}

export function ComplianceTestProgress() {
  const [state, dispatch] = React.useReducer(testProgressReducer, DEFAULT_STATE);
  const { waitTime } = state;
  useDispatcher(state, dispatch);
  return <ProgressBar waitTime={waitTime} />;
}
