'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

import DarkModeSwitch from './dark-mode';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            size="large"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <DarkModeSwitch />
        </Toolbar>
      </AppBar>
      <Box
        paddingTop="64px"
        paddingBottom="64px"
        component="main"
        margin="0 auto"
        minHeight="100vh"
        width="1024px"
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
