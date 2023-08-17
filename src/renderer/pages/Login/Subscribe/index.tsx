import React from 'react';
import { Grid, Button, PageLayout } from '@/UI';

const Subscribe = ({ goToPreviousStep }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button onClick={goToPreviousStep}>Go back</Button>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
