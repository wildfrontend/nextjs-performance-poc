import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack } from '@mui/material';
import * as React from 'react';

export default function IconAndLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button startIcon={<DeleteIcon />} variant="outlined">
        Delete
      </Button>
      <Button endIcon={<SendIcon />} variant="contained">
        Send
      </Button>
    </Stack>
  );
}
