'use client';

import PromiseLockDemo from '@/components/promise-lock';
import { Container, Typography } from '@mui/material';


const Page = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography gutterBottom variant="h4">
        Promise Lock Demo
      </Typography>
      <PromiseLockDemo/>
    </Container>
  );
};

export default Page;
