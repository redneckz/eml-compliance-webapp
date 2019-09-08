import { Resource } from './Resource';
import * as Domain from '../Domain';

export const MotionResource = new Resource<Domain.MotionStatus>('/list_motion');
