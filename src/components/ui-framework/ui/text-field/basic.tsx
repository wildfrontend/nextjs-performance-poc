import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const BasicTextFileds: React.FC = () => {
  return (
    <Box
      autoComplete="off"
      component="form"
      noValidate
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <div>
        <TextField
          defaultValue="Hello World"
          id="outlined-required"
          label="Required"
          required
        />
        <TextField
          defaultValue="Hello World"
          disabled
          id="outlined-disabled"
          label="Disabled"
        />
        <TextField
          autoComplete="current-password"
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <TextField
          InputProps={{
            readOnly: true,
          }}
          defaultValue="Hello World"
          id="outlined-read-only-input"
          label="Read Only"
        />
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          id="outlined-number"
          label="Number"
          type="number"
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          defaultValue="Default Value"
          helperText="Some important text"
          id="outlined-helperText"
          label="Helper text"
        />
        <TextField
          defaultValue="Default Value"
          error
          helperText="Some important text"
          id="outlined-helperText"
          label="Helper text"
        />
      </div>
      <div>
        <TextField
          defaultValue="Hello World"
          id="filled-required"
          label="Required"
          required
          variant="filled"
        />
        <TextField
          defaultValue="Hello World"
          disabled
          id="filled-disabled"
          label="Disabled"
          variant="filled"
        />
        <TextField
          autoComplete="current-password"
          id="filled-password-input"
          label="Password"
          type="password"
          variant="filled"
        />
        <TextField
          InputProps={{
            readOnly: true,
          }}
          defaultValue="Hello World"
          id="filled-read-only-input"
          label="Read Only"
          variant="filled"
        />
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          id="filled-number"
          label="Number"
          type="number"
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          defaultValue="Default Value"
          helperText="Some important text"
          id="filled-helperText"
          label="Helper text"
          variant="filled"
        />
        <TextField
          defaultValue="Default Value"
          error
          helperText="Some important text"
          id="filled-helperText"
          label="Helper text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          defaultValue="Hello World"
          id="standard-required"
          label="Required"
          required
          variant="standard"
        />
        <TextField
          defaultValue="Hello World"
          disabled
          id="standard-disabled"
          label="Disabled"
          variant="standard"
        />
        <TextField
          autoComplete="current-password"
          id="standard-password-input"
          label="Password"
          type="password"
          variant="standard"
        />
        <TextField
          InputProps={{
            readOnly: true,
          }}
          defaultValue="Hello World"
          id="standard-read-only-input"
          label="Read Only"
          variant="standard"
        />
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          id="standard-number"
          label="Number"
          type="number"
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          defaultValue="Default Value"
          helperText="Some important text"
          id="standard-helperText"
          label="Helper text"
          variant="standard"
        />
      </div>
    </Box>
  );
};

export default BasicTextFileds;
