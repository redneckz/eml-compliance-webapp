import { Resource } from './Resource';
import * as Domain from '../Domain';

export const TemperatureResource = new Resource<Domain.Temperature>('/list_temp');
