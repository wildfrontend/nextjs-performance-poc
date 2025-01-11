import { Stack, Typography } from '@mui/material';

import ComplexCard from './complex';
import OutlinedCard from './outlined';
import SimpleCard from './simple';

const CardExample: React.FC = () => {
  return (
    <Stack direction="row" spacing="16px">
      <Stack>
        <Typography>Simple</Typography>
        <SimpleCard />
      </Stack>
      <Stack>
        <Typography>Outlined</Typography>
        <OutlinedCard />
      </Stack>
      <Stack>
        <Typography>Complex</Typography>
        <ComplexCard />
      </Stack>
    </Stack>
  );
};

export default CardExample;
