'use client';

import DoneIcon from '@mui/icons-material/Done';
import { Box, Chip, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';

export default function OutlinedChip() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.log('Delete');
  };

  return (
    <Box>
      <Grid container spacing="16px">
        <Grid item xs={3}>
          <Chip label="Basic" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <Chip disabled label="Basic" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Clickable"
            onClick={handleClick}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="deletable"
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Chickable deletable"
            onClick={handleClick}
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Chip
            deleteIcon={<DoneIcon />}
            label="Custom delete icon"
            onClick={handleClick}
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="primary"
            deleteIcon={<DoneIcon />}
            label="Primary clickable"
            onClick={handleClick}
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="primary"
            deleteIcon={<DoneIcon />}
            label="Primary clickable"
            onClick={handleClick}
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Chip
            color="primary"
            label="Delete primary"
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="secondary"
            label="Delete secondary"
            onDelete={handleDelete}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
