import * as React from 'react';

export function useDataPolling<T>(dataProvider: () => Promise<T>, timeout: number): T | undefined {
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    let timerId: NodeJS.Timeout;
    const updateData = async () => {
      try {
        setData(await dataProvider());
      } catch (ex) {
        console.warn(ex);
      }
      timerId = setTimeout(updateData, timeout);
    };
    updateData();
    return () => clearTimeout(timerId);
  }, [setData, dataProvider, timeout]);
  return data;
}
