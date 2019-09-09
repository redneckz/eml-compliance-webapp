import * as React from 'react';
import { AlertDef } from './AlertDef';

type ShowAlert = (alert: AlertDef) => void;

export const AlertManagerContext = React.createContext<ShowAlert>(() => {});

export const useAlertManager = (): ShowAlert => React.useContext(AlertManagerContext);
