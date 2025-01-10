'use client';

import AddIcon from '@mui/icons-material/Add';
import MailIcon from '@mui/icons-material/Mail';
import RemoveIcon from '@mui/icons-material/Remove';
import { Badge, ButtonGroup, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import * as React from 'react';

export default function BasicBadge() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Stack direction="row">
          <Badge badgeContent={count} color="success">
            <MailIcon />
          </Badge>
          <Badge badgeContent={count} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={count} color="secondary">
            <MailIcon />
          </Badge>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </Stack>
      </div>
      <div>
        <Badge color="success" invisible={invisible} variant="dot">
          <MailIcon />
        </Badge>
        <Badge color="error" invisible={invisible} variant="dot">
          <MailIcon />
        </Badge>
        <Badge color="secondary" invisible={invisible} variant="dot">
          <MailIcon />
        </Badge>
        <FormControlLabel
          control={
            <Switch checked={!invisible} onChange={handleBadgeVisibility} />
          }
          label="Show Badge"
          sx={{ color: 'text.primary' }}
        />
      </div>
    </Box>
  );
}
