import * as React from 'react';
import * as Domain from '../Domain';
import { useAlertManager } from '../modules';
import { DeviceResource } from '../API';

export function useDevicesProvider(): [Domain.DeviceStatus[], () => Promise<void>] {
  const showAlert = useAlertManager();
  const [devices, setDevices] = React.useState<Domain.DeviceStatus[]>([]);
  const fetchDevices = React.useCallback(async () => {
    try {
      setDevices(await DeviceResource.getAll());
    } catch (ex) {
      showAlert({ title: 'Devices Fetch', description: ex.message });
    }
  }, [setDevices, showAlert]);
  React.useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);
  return [devices, fetchDevices];
}
