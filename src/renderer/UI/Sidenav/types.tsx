import { ReactNode } from 'react';

export type RouteType = {
  disabled?: boolean;
  exact?: boolean;
  icon: ReactNode;
  label?: string;
  path: string;
  count?: number;
  onClick?: () => void;
};

export type ActionType = {
  label: string;
  icon?: string;
};
