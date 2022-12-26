import React from 'react';

import { Card, CardHeader, FeedbackButton, Grid } from '@/UI';

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ height: '30rem' }}>
      <Grid item xs={12}>
        <Card
          sx={{ height: '100%' }}
          header={<CardHeader action={<FeedbackButton>More</FeedbackButton>} />}
          hasHeaderDivider
        />
      </Grid>
      <Grid item xs={12} container direction="column" spacing={2}>
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
