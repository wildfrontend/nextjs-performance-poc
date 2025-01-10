import { Stack } from '@mui/material';
import React from 'react';

import BasicBadge from './basic';

const BadgeExample: React.FC = () => {
  return (
    <Stack spacing="16px">
      <BasicBadge />
    </Stack>
  );
};

export default BadgeExample;
