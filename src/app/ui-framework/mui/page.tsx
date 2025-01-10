import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

import MainLayout from '@/components/ui-framework/mui/layouts/main';
import componentSamples from '@/components/ui-framework/ui/collections';

const Page: React.FC = () => {
  return (
    <MainLayout>
      <Stack spacing="64px">
        <Typography gutterBottom variant="h1">
          Material-UI Components
        </Typography>
        {componentSamples.map(({ id, title, component, docs }) => (
          <Stack id={id} key={id} spacing="8px">
            <Grid alignItems="center" container justifyContent="space-between">
              <Typography gutterBottom variant="h2">
                {title}
              </Typography>
              <Button
                color="secondary"
                href={docs}
                rel="noreferrer"
                size="small"
                target="_blank"
                variant="outlined"
              >
                Docs
              </Button>
            </Grid>
            <Box>{component}</Box>
          </Stack>
        ))}
      </Stack>
    </MainLayout>
  );
};

export default Page;
