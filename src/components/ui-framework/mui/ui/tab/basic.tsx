'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneIcon from '@mui/icons-material/Phone';
import { TabContext, TabPanel } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';

const BasicTabs: React.FC = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <TabList
            aria-label="lab API tabs example"
            indicatorColor="secondary"
            onChange={handleChange}
          >
            <Tab icon={<PhoneIcon />} label="Resent" value="1" />
            <Tab icon={<FavoriteIcon />} label="Favourite" value="2" />
            <Tab icon={<PersonPinIcon />} label="Nearby" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default BasicTabs;
