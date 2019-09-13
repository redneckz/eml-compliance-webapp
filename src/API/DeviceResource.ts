import { Resource } from './Resource';
import * as Domain from '../Domain';

export const DeviceResource = new Resource<Domain.DeviceStatus>('/list_devices', 'Devices');

const TestService = new Resource<Domain.TestParams>('/run_test');

export async function runTest(): Promise<Domain.TestParams> {
  return await TestService.post();
}
