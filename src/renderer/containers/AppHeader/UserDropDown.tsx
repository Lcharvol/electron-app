import React from 'react';
import { useTranslation } from 'react-i18next';
import { mdiLogout, mdiCog } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import { IconButton, Avatar, Menu, Typography, Stack } from '@/UI';
import useAuth from '@/contexts/auth';
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
        <Stack direction="row" spacing={2}>
          <Avatar />
          <Stack>
            <Typography>Lucas Charvolin</Typography>
            <Typography variant="caption">charvolin0@gmail.com</Typography>
          </Stack>
        </Stack>
      ),
    },
    {
      render: () => (
        <Typography variant="subtitle2">{t('Settings')}</Typography>
      ),
      iconPath: mdiCog,
      onClick: () => navigate(constantRoutes.SETTINGS),
    },
    {
      render: () => <Typography variant="subtitle2">{t('Logout')}</Typography>,
      iconPath: mdiLogout,
      onClick: () => logout(),
    },
  ];
  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="small"
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
