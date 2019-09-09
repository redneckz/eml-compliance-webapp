import * as React from 'react';

export function useDataPolling<T>(dataProvider: () => Promise<T>, timeout: number): T | undefined {
  const [data, setData] = React.useState<T>();
  React.useEffect(() => {
    let timerId: NodeJS.Timeout;
    const updateData = async () => {
      try {
        const data = await dataProvider();
        setData(data);
      } catch (ex) {
        console.log(ex);
      }
      timerId = setTimeout(updateData, timeout);
    };
    updateData();
    return () => clearTimeout(timerId);
  }, [dataProvider, timeout]);
  return data;
}