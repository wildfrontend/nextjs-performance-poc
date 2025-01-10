import { Stack, Typography } from '@mui/material';
import React from 'react';

import ContainedButtons from './contain';
import CustomVariantButtons from './custom';
import IconAndLabelButtons from './icon';
import OutLinedButtons from './outline';
import TextButtons from './text';

const ButtonsExample: React.FC = () => {
  return (
    <Stack spacing="16px">
      <Typography>Contained Buttons</Typography>
      <ContainedButtons />
      <Typography>Text Buttons</Typography>
      <TextButtons />
      <Typography>Outlined Buttons</Typography>
      <OutLinedButtons />
      <Typography>Buttons with icons and label</Typography>
      <IconAndLabelButtons />
      <Typography>Custom varianet Buttons </Typography>
      <CustomVariantButtons />
    </Stack>
  );
};

export default ButtonsExample;
