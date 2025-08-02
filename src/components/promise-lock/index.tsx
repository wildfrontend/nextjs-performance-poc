'use client';

import { Stack } from '@mui/material';

import { AuthStatusCard } from './auth-state';
import AxiosInterceptor from './axios';
import { FeatureIntroCard, TestStepsCard } from './intor';
import { LoginForm } from './login-form';
import { ProtectedStatusCard } from './nextjs-state';

const PromiseLockDemo = () => {
  return (
    <>
      <AxiosInterceptor />
      <Stack spacing={4}>
        <LoginForm />
        <AuthStatusCard />
        <ProtectedStatusCard/>
        <FeatureIntroCard />
        <TestStepsCard />
      </Stack>
    </>
  );
};

export default PromiseLockDemo;
