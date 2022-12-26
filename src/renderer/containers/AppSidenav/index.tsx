import {
  mdiFolderOpenOutline,
  mdiCogOutline,
  mdiShieldAccountOutline,
  mdiLogout,
} from '@mdi/js';
import React from 'react';

import { constantRoutes } from '@/constants';
import { Sidenav } from '@/UI';
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
    label: 'Projects',
    icon: mdiFolderOpenOutline,
    path: constantRoutes.PROJECTS,
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
      actions={actions}
    />
  );
};

export default AppSidenav;
