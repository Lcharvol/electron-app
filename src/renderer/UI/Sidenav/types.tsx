import { ReactNode } from 'react';

export type RouteType = {
  disabled?: boolean;
  exact?: boolean;
  icon?: ReactNode;
  label?: string;
  path: string;
  count?: number;
};

export type ActionType = {
  label: string;
  icon?: string;
};
