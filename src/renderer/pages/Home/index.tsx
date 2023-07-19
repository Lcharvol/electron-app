import React from 'react';

import {
  CardMedia,
  Card,
  Grid,
  Typography,
  Button,
  Charts,
  CardHeader,
} from '@/UI';
import { Icon } from '@mdi/react';
import { mdiChartLineVariant } from '@mdi/js';
import colors from '@/colors';

const Home = () => {
  return (
    <Grid container spacing={4} sx={{ height: '30rem' }}>
      <Grid item xs={12}>
        <Card
          sx={{ position: 'relative' }}
          variant="filled"
          hasHeaderDivider
          actions={<Button variant="outlined-white">Upgrade</Button>}
        >
          <Typography variant="h4" fontWeight="medium" color="white">
            Upgrade your plan
          </Typography>
          <Typography variant="subtitle2" color="white">
            Switch to a commercial plan to access advanced features & technical
            support.
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: 200, position: 'absolute', top: 0, right: 0 }}
            image="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Picture.png"
          />
        </Card>
      </Grid>
      {/* <Grid item xs={12} container direction="column" spacing={4}>
        <Grid item>
          <Card
            sx={{ height: '20rem' }}
            header={
              <CardHeader
                title="My accounts"
                icon={
                  <Icon path={mdiChartLineVariant} color={colors.blue.normal} />
                }
              />
            }
          >
            <Charts.Areas width={1100} height={250} />
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ height: '20rem' }} />
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Home;
