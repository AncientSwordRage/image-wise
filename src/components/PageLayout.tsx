/// <reference types="vite-plugin-svgr/client" />
import React, { ReactNode } from 'react';
import {
  AppBar, Box, Button, IconButton, Toolbar, Typography, SvgIcon, Paper,
} from '@mui/material';
import AppLogo from '../assets/appLogo.svg?react';
import '../app.css';

interface PageLayoutProps {
  page: ReactNode;
}

function PageLayout({ page }: PageLayoutProps) {
  const pages = ['gallery'];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0, flexGrow: 0 }}
            >
              <SvgIcon component={AppLogo} inheritViewBox aria-hidden="true" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Image-Wise
            </Typography>
            {pages.map((eachPage) => (<Button key={eachPage} href={`/${eachPage}`} color="inherit">{eachPage}</Button>))}
          </Toolbar>
        </AppBar>
      </Box>
      {page}
      <Paper
        sx={{
          marginTop: 'calc(10% + 60px)',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
        component="footer"
        square
        variant="outlined"
      >
        Placeholder Footer
      </Paper>
    </>
  );
}

export default PageLayout;
