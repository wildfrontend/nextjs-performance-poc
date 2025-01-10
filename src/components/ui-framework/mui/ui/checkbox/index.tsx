'use client';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';

const CheckboxExample: React.FC = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} name="gilad" onChange={handleChange} />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} name="jason" onChange={handleChange} />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                name="antoine"
                onChange={handleChange}
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        component="fieldset"
        error={error}
        required
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} name="gilad" onChange={handleChange} />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} name="jason" onChange={handleChange} />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                name="antoine"
                onChange={handleChange}
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default CheckboxExample;
