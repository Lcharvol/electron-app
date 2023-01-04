import React from 'react';

import { Card, Grid } from '@/UI';

const Home = () => {
  return (
    <Grid container spacing={4} sx={{ height: '30rem' }}>
      <Grid item xs={12}>
        <Card sx={{ height: '100%' }} variant="filled" hasHeaderDivider />
      </Grid>
      <Grid item xs={12} container direction="column" spacing={4}>
        <Grid item>
          <Card sx={{ height: '20rem' }} />
        </Grid>
        <Grid item>
          <Card sx={{ height: '20rem' }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
