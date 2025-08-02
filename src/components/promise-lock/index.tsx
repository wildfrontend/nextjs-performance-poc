'use client';

import { Stack } from '@mui/material';

import { AuthStatusCard } from './auth-state';
import { FeatureIntroCard, TestStepsCard } from './intor';
import { LoginForm } from './login-form';

const PromiseLockDemo = () => {
  return (
    <Stack spacing={4}>
      <LoginForm />
      <AuthStatusCard />
      <FeatureIntroCard />
      <TestStepsCard />
    </Stack>
  );
};

export default PromiseLockDemo;
