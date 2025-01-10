'use client';

import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const BasicSlider: React.FC = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <Box sx={{ width: 200 }}>
      <Typography>Volumn</Typography>
      <Stack alignItems="center" direction="row" spacing={2} sx={{ mb: 1 }}>
        <VolumeDown />
        <Slider
          aria-label="Volume"
          onChange={handleChange}
          size="small"
          value={value}
        />
        <VolumeUp />
      </Stack>
      <Typography>Disabled slider</Typography>
      <Slider disabled onChange={handleChange} size="small" value={value} />
      <Typography>Always visible</Typography>
      <Slider
        aria-label="Custom marks"
        getAriaValueText={valuetext}
        marks={marks}
        onChange={handleChange}
        step={10}
        value={value}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default BasicSlider;
