'use client';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

const BasicSelect: React.FC = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl disabled sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select
          id="demo-simple-select-disabled"
          label="Age"
          labelId="demo-simple-select-disabled-label"
          onChange={handleChange}
          value={age}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select
          id="demo-simple-select-error"
          label="Age"
          labelId="demo-simple-select-error-label"
          onChange={handleChange}
          renderValue={(value) => `⚠️  - ${value}`}
          value={age}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
          id="demo-simple-select-readonly"
          inputProps={{ readOnly: true }}
          label="Age"
          labelId="demo-simple-select-readonly-label"
          onChange={handleChange}
          value={age}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          id="demo-simple-select-required"
          label="Age *"
          labelId="demo-simple-select-required-label"
          onChange={handleChange}
          value={age}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          id="demo-simple-select-standard"
          label="Age"
          labelId="demo-simple-select-standard-label"
          onChange={handleChange}
          value={age}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default BasicSelect;
