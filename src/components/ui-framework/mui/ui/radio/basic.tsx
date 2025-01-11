import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';

const BasicRadio: React.FC = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel control={<Radio />} label="Female" value="female" />
        <FormControlLabel control={<Radio />} label="Male" value="male" />
        <FormControlLabel control={<Radio />} label="Other" value="other" />
        <FormControlLabel
          control={<Radio />}
          disabled
          label="other"
          value="disabled"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default BasicRadio;
