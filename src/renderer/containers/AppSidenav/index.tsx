import {
  mdiApps,
  mdiCogOutline,
  mdiShieldAccountOutline,
  mdiLogout,
} from '@mdi/js';
import React from 'react';

import { constantRoutes } from '@/constants';
import { Sidenav, Card } from '@/UI';
import useAuth from '@/contexts/auth';
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
    label: 'ReviewApp',
    icon: mdiApps,
    path: constantRoutes.REVIEW_APP,
  },
  {
    label: 'Settings',
    icon: mdiCogOutline,
    path: constantRoutes.SETTINGS,
  },
];

const AppSidenav = ({ user, isSmall = false }: AppSidenavProps) => {
  const { logout } = useAuth();

  const actions = [
    {
      label: 'Exit',
      icon: mdiLogout,
      onClick: () => logout(),
    },
  ];
  return (
    <Sidenav
      routes={routes}
      isSmall={isSmall}
      topNode={<UserHeader user={user} hasDivider isSmall={isSmall} />}
      body={<Card variant="filled" />}
      actions={actions}
    />
  );
};

export default AppSidenav;
