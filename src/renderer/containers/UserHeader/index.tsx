import React from 'react';

import { Avatar, Divider, Grid, Typography } from '@/UI';

interface UserHeaderProps {
  user: UserProps;
  hasDivider?: boolean;
  isSmall?: boolean;
}

const UserHeader = ({
  user,
  hasDivider = false,
  isSmall = false,
}: UserHeaderProps) => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid
        item
        xs={isSmall ? 12 : 3}
        alignItems="center"
        justifyContent="center"
      >
        <Avatar src={user.profilePictureUrl} variant="circular">
          {!user.profilePictureUrl && user.firstName}
        </Avatar>
      </Grid>
      {!isSmall && (
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>
                {user.firstName} {user.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" weight="light">
                {user.function}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {hasDivider && (
        <Grid item xs={12}>
          <Divider />
        </Grid>
      )}
    </Grid>
  );
};

export default UserHeader;
