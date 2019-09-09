import * as React from 'react';
import { AlertManager } from './modules';
import { ComplianceTestPage } from './ComplianceTestPage';

export function App() {
  return (
    <AlertManager>
      <ComplianceTestPage />
    </AlertManager>
  );
}
