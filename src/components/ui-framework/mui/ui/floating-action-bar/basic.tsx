import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import * as React from 'react';

export default function BasicFloatingActionBar() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab aria-label="add" color="primary">
        <AddIcon />
      </Fab>
      <Fab aria-label="edit" color="secondary">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab aria-label="like" disabled>
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
