import { Stack, Typography } from '@mui/material';

import BasicMenu from './basic';

const MenuExample: React.FC = () => {
  return (
    <Stack spacing="16px">
      <Typography>Basic Menu</Typography>
      <BasicMenu />
    </Stack>
  );
};

export default MenuExample;
