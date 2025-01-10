'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';

export default function BasicBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      value={value}
    >
      <BottomNavigationAction icon={<RestoreIcon />} label="Recents" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Favorites" />
      <BottomNavigationAction icon={<LocationOnIcon />} label="Nearby" />
    </BottomNavigation>
  );
}
