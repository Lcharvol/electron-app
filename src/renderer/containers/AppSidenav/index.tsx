import {
  mdiApps,
  mdiCogOutline,
  mdiShieldAccountOutline,
  mdiLogout,
} from '@mdi/js';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { constantRoutes } from '@/constants';
import { Sidenav, Card, CardMedia } from '@/UI';
import useAuth from '@/contexts/auth';
import UserHeader from '../UserHeader';

interface AppSidenavProps {
  user: UserProps;
  isSmall?: boolean;
}

const AppSidenav = ({ user, isSmall = false }: AppSidenavProps) => {
  const { t } = useTranslation();
  const { logout } = useAuth();

  const actions = [
    {
      label: 'Exit',
      icon: mdiLogout,
      onClick: () => logout(),
    },
  ];

  const routes = [
    {
      label: t('Overview'),
      icon: mdiShieldAccountOutline,
      path: constantRoutes.HOME,
      exact: true,
    },
    {
      label: t('Wallet'),
      icon: mdiApps,
      path: constantRoutes.REVIEW_APP,
    },
    {
      label: t('Settings'),
      icon: mdiCogOutline,
      path: constantRoutes.SETTINGS,
    },
  ];

  return (
    <Sidenav
      routes={routes}
      isSmall={isSmall}
      topNode={<UserHeader user={user} hasDivider isSmall={isSmall} />}
      body={
        <Card variant="filled">
          <CardMedia
            component="img"
            src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG.png"
          />
        </Card>
      }
      actions={actions}
    />
  );
};

export default AppSidenav;
