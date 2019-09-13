import * as React from 'react';
import { ProgressDef } from './ProgressDef';

type ShowProgress = (def: ProgressDef) => void;

export const ProgressManagerContext = React.createContext<ShowProgress>(() => {});

export const useProgressManager = (): ShowProgress => React.useContext(ProgressManagerContext);
