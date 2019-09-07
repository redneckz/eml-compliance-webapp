import * as React from 'react';
import { API } from '../API';
import { useDataPolling } from '../modules';
import { EmergencyAudioAlertSection } from './EmergencyAudioAlertSection';

const DATA_POLLING_TIMEOUT = 60 * 1000;

export function EmergencyAudioAlertBar() {
  const fetchAudioAlerts = React.useCallback(() => API.AudioAlertResource.getAll('Alerts'), []);
  const alerts = useDataPolling(fetchAudioAlerts, DATA_POLLING_TIMEOUT);
  const [toggledAlert, setToggledAlert] = React.useState<API.AlertKind>();
  const [loading, setLoading] = React.useState<boolean>();
  const handleToggle = async (alert: API.AlertKind) => {
    setToggledAlert(alert);
    setLoading(true);
    try {
      const active = await API.toggleAudioAlert(alert);
      setToggledAlert(active ? alert : undefined);
    } finally {
      setLoading(false);
    }
  };
  return (
    <EmergencyAudioAlertSection
      toggledAlert={toggledAlert}
      alerts={alerts ? alerts.map(({ Number: kind }) => kind) : []}
      loading={loading}
      onToggle={handleToggle}
    />
  );
}
