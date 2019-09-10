import * as React from 'react';
import * as Domain from '../Domain';
import { toggleAudioAlert } from '../API';
import { useLoader } from '../modules';
import { EmergencyAudioAlertSection } from './EmergencyAudioAlertSection';

export function EmergencyAudioAlertBar({ alerts }: { alerts: Domain.AlertKind[] }) {
  const [toggledAlert, setToggledAlert] = React.useState<Domain.AlertKind>();
  const [loading, handleToggle] = useLoader(async (alert: Domain.AlertKind) => {
    setToggledAlert(alert);
    const active = await toggleAudioAlert(alert);
    setToggledAlert(active ? alert : undefined);
  });
  return (
    <EmergencyAudioAlertSection toggledAlert={toggledAlert} alerts={alerts} loading={loading} onToggle={handleToggle} />
  );
}
