import { Stack } from '@mui/material';
import React from 'react';

import ToggleButtons from './basic';

const ToggleButtonsExample: React.FC = () => {
  return (
    <Stack direction="row" spacing="16px">
      <ToggleButtons />
    </Stack>
  );
};

export default ToggleButtonsExample;
