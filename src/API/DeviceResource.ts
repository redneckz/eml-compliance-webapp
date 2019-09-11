import { Resource } from './Resource';
import { delay } from './delay';
import * as Domain from '../Domain';

export const DeviceResource = new Resource<Domain.DeviceStatus>('/list_devices', 'Devices');

const TestService = new Resource<{ 'Wait Time': number }>('/run_test');

export async function runTest(): Promise<void> {
  const { 'Wait Time': timeout } = await TestService.post();
  await delay((timeout || 5) * 1000);
}
