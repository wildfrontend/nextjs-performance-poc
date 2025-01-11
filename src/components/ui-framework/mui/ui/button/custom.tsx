import { PlusOneOutlined } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import * as React from 'react';

export default function CustomVariantButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary" size="circle" variant="contained">
        <PlusOneOutlined />
      </Button>
    </Stack>
  );
}
