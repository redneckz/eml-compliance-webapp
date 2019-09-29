import * as Domain from '../Domain';

export type ComplianceTestAction =
  | { type: '@test/run' }
  | { type: '@test/await'; payload: number }
  | { type: '@test/done'; payload?: Domain.DeviceStatus[]; error?: true };
