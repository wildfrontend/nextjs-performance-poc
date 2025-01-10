import { Button, Stack } from '@mui/material';
import * as React from 'react';

export default function OutLinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">Primary</Button>
      <Button disabled variant="outlined">
        Disabled
      </Button>
      <Button href="#outlined-buttons" variant="outlined">
        Link
      </Button>
      <Button color="secondary" variant="outlined">
        Secondary
      </Button>
      <Button color="secondary" disabled variant="outlined">
        Disabled
      </Button>
      <Button color="secondary" href="#outlined-buttons" variant="outlined">
        Link
      </Button>
    </Stack>
  );
}
