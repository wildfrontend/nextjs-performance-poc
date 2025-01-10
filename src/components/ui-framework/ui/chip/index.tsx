import { Stack, Typography } from '@mui/material';

import DefaultChip from './default';
import OutlinedChip from './outlined';

const ChipExample: React.FC = () => {
  return (
    <Stack spacing="16px">
      <Typography variant="h3">Default Chip</Typography>
      <DefaultChip />
      <Typography variant="h3">Outlined Chip</Typography>
      <OutlinedChip />
    </Stack>
  );
};

export default ChipExample;
