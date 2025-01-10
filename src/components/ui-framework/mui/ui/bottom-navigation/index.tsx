import { Stack } from '@mui/material';
import React from 'react';

import BasicBottomNavigation from './basic';

const BottomNavigationExample: React.FC = () => {
  return (
    <Stack spacing="16px">
      <BasicBottomNavigation />
    </Stack>
  );
};

export default BottomNavigationExample;
