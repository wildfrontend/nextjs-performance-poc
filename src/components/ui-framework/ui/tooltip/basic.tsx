import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

const BasicTooltip: React.FC = () => {
  return (
    <>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add">
        <Fab aria-label="add" color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default BasicTooltip;
