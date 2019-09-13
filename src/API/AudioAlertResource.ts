import { Resource } from './Resource';
import * as Domain from '../Domain';

export const AudioAlertResource = new Resource<Domain.AudioAlert>('list_alerts', 'Alerts');

const AudioAlertService = new Resource<{
  Alert: Domain.AlertKind;
  Status: Domain.AudioAlertStatus;
}>('alert');

export async function toggleAudioAlert(alert?: Domain.AlertKind): Promise<boolean> {
  const status = await AudioAlertService.post(`${alert || 0}`);
  return status.Status === Domain.AudioAlertStatus.Active;
}
