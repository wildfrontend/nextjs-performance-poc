import { Box, Stack } from '@mui/material';

import Earth3D from '@/components/earth-texture';
import EarthCanvasDocs from '@/components/earth-texture/doc';

const Page: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          bgcolor: 'black',
        }}
      >
        <Earth3D />
      </Box>
      <EarthCanvasDocs />
    </Stack>
  );
};

export default Page;
