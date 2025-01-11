import { Stack, Typography } from '@mui/material';

import CircularProgressItem from './circular';
import LinearProgressItem from './linear';

const ProgressExample: React.FC = () => {
  return (
    <Stack spacing="16px">
      <Typography>Circular</Typography>
      <CircularProgressItem />
      <Typography>Linear</Typography>
      <LinearProgressItem />
    </Stack>
  );
};

export default ProgressExample;
