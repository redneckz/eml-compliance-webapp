import { Resource } from './Resource';
import { delay } from './delay';
import * as Domain from '../Domain';

export const DeviceResource = new Resource<Domain.DeviceStatus>('/list_devices', 'Devices');

const TestService = new Resource<{ WaitTime: number }>('/run_test');

export async function runTest(): Promise<void> {
  const { WaitTime } = await TestService.post();
  await delay((WaitTime || 5) * 1000);
}
