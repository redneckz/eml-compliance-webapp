import * as React from 'react';

export function useLoader<L extends Function>(loader: L): [boolean, L] {
  const [loading, setLoading] = React.useState<boolean>();
  const load = async (...args: any[]) => {
    setLoading(true);
    try {
      await loader(...args);
    } finally {
      setLoading(false);
    }
  };
  return [loading || false, load as any];
}
