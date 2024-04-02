import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export function Galleries() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>Here are your galleries</Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
}
