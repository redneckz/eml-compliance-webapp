import { useDataProvider } from '../modules';
import { DeviceResource } from '../API';

export const useDevicesProvider = () => useDataProvider(DeviceResource.getAll);
