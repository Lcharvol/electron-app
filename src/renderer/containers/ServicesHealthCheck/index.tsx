import React from 'react';
import { Chip, Grid } from '@/UI';
import { Icon } from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import colors from '@/colors';

const services = [
  {
    label: 'AWS SSO',
    status: 'success',
  },
];

const ServicesHealthCheck = () => {
  return (
    <Grid container spacing={2} justifyContent="flex-end">
      {services.map((service) => (
        <Grid item>
          <Chip
            label={service.label}
            kind={service.status}
            icon={
              <Icon path={mdiCheck} size={0.7} color={colors.state.success} />
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesHealthCheck;
