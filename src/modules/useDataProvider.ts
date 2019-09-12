import * as React from 'react';
import { useAlertManager } from '../modules';

export function useDataProvider<D>(dataProvider: () => Promise<D>): [D | undefined, () => Promise<void>] {
  const showAlert = useAlertManager();
  const [data, setData] = React.useState<D>();
  const fetchData = React.useCallback(async () => {
    try {
      setData(await dataProvider());
    } catch (ex) {
      console.warn(ex);
      showAlert({ title: 'Data Fetch', description: ex.message });
    }
  }, [dataProvider, setData, showAlert]);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return [data, fetchData];
}
