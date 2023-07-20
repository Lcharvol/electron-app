import React from 'react';
import useAuth from '@/contexts/auth';
import { IconButton, Avatar, Menu, Typography, Divider } from '@/UI';
import { Icon } from '@mdi/react';
import { useTranslation } from 'react-i18next';
import { mdiLogout, mdiCog } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import { constantRoutes } from '@/constants';

const UserDropDown = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const items = [
    {
      render: () => (
        <>
          <Icon path={mdiCog} size={1} />
          <Typography>{t('Settings')}</Typography>
        </>
      ),
      onClick: () => navigate(constantRoutes.SETTINGS),
    },
    {
      render: () => (
        <>
          <Icon path={mdiLogout} size={1} />
          <Typography>{t('Logout')}</Typography>
        </>
      ),
      onClick: () => logout(),
    },
  ];
  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar src={user?.profilePictureUrl} sx={{ width: 30, height: 30 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        items={items}
        onClose={handleClose}
        onClick={handleClose}
      />
    </div>
  );
};

export default UserDropDown;
