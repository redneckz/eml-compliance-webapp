import * as React from 'react';

export function useDataPolling<T>(dataProvider: () => Promise<T>, timeout: number): T | undefined {
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    const updateData = async () => {
      const data = await dataProvider();
      setData(data);
    };
    updateData();
    const timerId = setInterval(updateData, timeout);
    return () => clearInterval(timerId);
  }, [dataProvider, timeout]);
  return data;
}
