import * as React from 'react';
import * as Domain from '../Domain';
import { AudioAlertResource, toggleAudioAlert } from '../API';
import { useDataPolling, useLoader } from '../modules';
import { EmergencyAudioAlertSection } from './EmergencyAudioAlertSection';

const DATA_POLLING_TIMEOUT = 60 * 1000;

export function EmergencyAudioAlertBar() {
  const fetchAudioAlerts = React.useCallback(() => AudioAlertResource.getAll(), []);
  const alerts = useDataPolling(fetchAudioAlerts, DATA_POLLING_TIMEOUT);
  const [toggledAlert, setToggledAlert] = React.useState<Domain.AlertKind>();
  const [loading, handleToggle] = useLoader(async (alert: Domain.AlertKind) => {
    setToggledAlert(alert);
    const active = await toggleAudioAlert(alert);
    setToggledAlert(active ? alert : undefined);
  });
  return (
    <EmergencyAudioAlertSection
      toggledAlert={toggledAlert}
      alerts={alerts ? alerts.map(({ Number: kind }) => kind) : []}
      loading={loading}
      onToggle={handleToggle}
    />
  );
}
