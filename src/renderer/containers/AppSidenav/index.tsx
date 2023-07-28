import {
  mdiWalletOutline,
  mdiCogOutline,
  mdiShieldAccountOutline,
  mdiChartDonut,
} from '@mdi/js';

import { useTranslation } from 'react-i18next';
import { constantRoutes } from '@/constants';
import { Sidenav, Card, CardMedia } from '@/UI';
import UserHeader from '../UserHeader';

interface AppSidenavProps {
  user: UserProps;
  isSmall?: boolean;
}

const AppSidenav = ({ user, isSmall = false }: AppSidenavProps) => {
  const { t } = useTranslation();

  const routes = [
    {
      label: t('Overview'),
      icon: mdiShieldAccountOutline,
      path: constantRoutes.HOME,
      exact: true,
    },
    {
      label: t('Wallet'),
      icon: mdiWalletOutline,
      path: constantRoutes.REVIEW_APP,
    },
    {
      label: t('Accounts'),
      icon: mdiChartDonut,
      path: constantRoutes.ACCOUNTS,
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
      // body={
      //   !isSmall && (
      //     <Card variant="filled">
      //       <CardMedia
      //         component="img"
      //         src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG.png"
      //       />
      //     </Card>
      //   )
      // }
    />
  );
};

export default AppSidenav;
