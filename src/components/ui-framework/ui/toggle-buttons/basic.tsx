'use client';

import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      aria-label="text alignment"
      exclusive
      onChange={handleAlignment}
      value={alignment}
    >
      <ToggleButton aria-label="left aligned" value="left">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton aria-label="centered" value="center">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton aria-label="right aligned" value="right">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton aria-label="justified" disabled value="justify">
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
