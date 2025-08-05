'use client';

import { Container, Typography } from '@mui/material';

import PromiseLockDemo from '@/components/promise-lock';

const Page = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography gutterBottom variant="h4">
        Promise Lock Demo
      </Typography>
      <PromiseLockDemo />
    </Container>
  );
};

export default Page;
