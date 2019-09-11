import * as React from 'react';
import { useAlertManager } from './AlertManager';

export function useDataPolling<T>(dataProvider: () => Promise<T>, timeout: number): T | undefined {
  const showAlert = useAlertManager();
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    let timerId: NodeJS.Timeout;
    const updateData = async () => {
      try {
        setData(await dataProvider());
      } catch (ex) {
        showAlert({ title: 'Fetch Failure', description: ex.message });
        console.warn(ex);
      }
      timerId = setTimeout(updateData, timeout);
    };
    updateData();
    return () => clearTimeout(timerId);
  }, [setData, dataProvider, timeout, showAlert]);
  return data;
}
