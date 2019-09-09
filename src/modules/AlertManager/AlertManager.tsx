import * as React from 'react';
import { AlertManagerContext } from './AlertManagerContext';
import { Alert } from './Alert';
import { AlertDef } from './AlertDef';
import { clearTimeout } from 'timers';

interface AlertManagerProps extends JSX.ElementChildrenAttribute {
  timeout?: number;
}

const DEFAULT_TIMEOUT = 10 * 1000;

export function AlertManager({ timeout = DEFAULT_TIMEOUT, children }: AlertManagerProps) {
  const [alertDef, setAlertDef] = React.useState<AlertDef>();
  const [active, setActive] = React.useState(false);
  const timerId = React.useRef<NodeJS.Timeout>();
  const handleClose = React.useCallback(() => setActive(false), []);
  const showAlert = React.useCallback(
    (newAlertDef: AlertDef): void => {
      setAlertDef(newAlertDef);
      setActive(true);
      if (timerId.current) clearTimeout(timerId.current);
      timerId.current = setTimeout(handleClose, timeout);
    },
    [timeout, handleClose]
  );
  return (
    <AlertManagerContext.Provider value={showAlert}>
      {alertDef ? (
        <div
          className={[
            'trans fixed h-12 md:h-8 px-12 md:px-24 inset-x-0',
            active ? 'bottom-0' : '-bottom-12 md:-bottom-8'
          ].join(' ')}
        >
          <Alert title={alertDef.title} description={alertDef.description} onClose={handleClose} />
        </div>
      ) : null}
      {children}
    </AlertManagerContext.Provider>
  );
}
