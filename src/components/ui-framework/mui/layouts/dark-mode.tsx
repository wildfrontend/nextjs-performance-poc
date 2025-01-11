'use client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useColorScheme } from '@mui/material';

const DarkModeSwitch: React.FC = () => {
  const { mode, setMode, systemMode } = useColorScheme();
  return (
    <IconButton
      aria-label="menu"
      color="inherit"
      edge="start"
      onClick={() => {
        if (systemMode === 'dark' || mode === 'dark') {
          setMode('light');
        }
        if (systemMode === 'light' || mode === 'light') {
          setMode('dark');
        }
      }}
      size="large"
    >
      {systemMode === 'dark' || mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default DarkModeSwitch;
