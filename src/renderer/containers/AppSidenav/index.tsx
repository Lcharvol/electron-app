import {
  mdiAccountGroupOutline,
  mdiCalendarBlankOutline,
  mdiFolderOpenOutline,
  mdiMessageOutline,
  mdiShieldAccountOutline,
} from '@mdi/js';
import React from 'react';

import { constantRoutes } from '@/constants';
import { Sidenav } from '@/UI';

import UserHeader from '../UserHeader';

interface AppSidenavProps {
  user: UserProps;
  isSmall?: boolean;
}

const routes = [
  {
    label: 'Overview',
    icon: mdiShieldAccountOutline,
    path: constantRoutes.HOME,
    exact: true,
  },
  {
    label: 'Projects',
    icon: mdiFolderOpenOutline,
    path: constantRoutes.PROJECTS,
  },
  {
    label: 'Messages',
    icon: mdiMessageOutline,
    path: '',
  },
  {
    label: 'Team Members',
    icon: mdiAccountGroupOutline,
    path: '',
  },
  {
    label: 'Calendar',
    icon: mdiCalendarBlankOutline,
    path: '',
  },
];

const AppSidenav = ({ user, isSmall = false }: AppSidenavProps) => {
  return (
    <Sidenav
      routes={routes}
      isSmall={isSmall}
      topNode={<UserHeader user={user} hasDivider isSmall={isSmall} />}
    />
  );
};

export default AppSidenav;
