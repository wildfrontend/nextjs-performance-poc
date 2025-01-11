import { Stack } from '@mui/material';
import React from 'react';

import BasicAppbar from './basic';

const AppbarExample: React.FC = () => {
  return (
    <Stack spacing="16px">
      <BasicAppbar />
    </Stack>
  );
};

export default AppbarExample;
