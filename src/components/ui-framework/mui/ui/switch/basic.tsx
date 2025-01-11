'use client';

import { FormControlLabel, FormGroup, Switch } from '@mui/material';

const BasicSwitch: React.FC = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch color="primary" defaultChecked />}
        label="primary"
      />
      <FormControlLabel
        control={<Switch color="secondary" defaultChecked />}
        label="secondary"
      />
      <FormControlLabel
        control={<Switch color="warning" defaultChecked />}
        label="warning"
      />
      <FormControlLabel control={<Switch />} disabled label="disabled" />
    </FormGroup>
  );
};

export default BasicSwitch;
