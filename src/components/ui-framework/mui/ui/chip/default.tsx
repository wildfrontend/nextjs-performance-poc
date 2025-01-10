'use client';

import DoneIcon from '@mui/icons-material/Done';
import { Box, Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import * as React from 'react';

export default function DefaultChip() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('Delete');
  };

  return (
    <Box>
      <Grid container spacing="16px">
        <Grid size={3}>
          <Chip label="Basic" />
        </Grid>
        <Grid size={3}>
          <Chip disabled label="Basic" />
        </Grid>
        <Grid size={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Clickable"
            onClick={handleClick}
          />
        </Grid>
        <Grid size={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="deletable"
            onDelete={handleDelete}
          />
        </Grid>
        <Grid size={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Chickable deletable"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Grid>
        <Grid size={3}>
          <Chip
            deleteIcon={<DoneIcon />}
            label="Custom delete icon"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Grid>
        <Grid size={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="primary"
            deleteIcon={<DoneIcon />}
            label="Primary clickable"
            onClick={handleClick}
          />
        </Grid>
        <Grid size={3}>
          <Chip
            color="primary"
            label="Delete primary"
            onDelete={handleDelete}
          />
        </Grid>
        <Grid size={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="secondary"
            label="Delete secondary"
            onDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
