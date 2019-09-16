import { makeIcon } from './makeIcon';
import { ReactComponent as ReportIcon } from './Report.svg';
import { ReactComponent as WarnIcon } from './Warn.svg';
import { ReactComponent as FireIcon } from './Fire.svg';
import { ReactComponent as WeatherIcon } from './Weather.svg';
import { ReactComponent as GunIcon } from './Gun.svg';
import { ReactComponent as GearIcon } from './Gear.svg';
import { ReactComponent as CrossIcon } from './Cross.svg';
import { ReactComponent as RefreshIcon } from './Refresh.svg';

export * from './makeIcon';
export const Report = makeIcon(ReportIcon);
export const Warn = makeIcon(WarnIcon);
export const Fire = makeIcon(FireIcon);
export const Weather = makeIcon(WeatherIcon);
export const Gun = makeIcon(GunIcon);
export const Gear = makeIcon(GearIcon);
export const Cross = makeIcon(CrossIcon);
export const Refresh = makeIcon(RefreshIcon);
