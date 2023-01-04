import { ReactNode } from 'react';

export type SettingType = {
  label: string;
  description: string;
  action?: () => ReactNode;
};
