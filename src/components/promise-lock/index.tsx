'use client';

import { Stack } from '@mui/material';

import { AuthStateCard } from './auth-state';
import AxiosInterceptor from './axios';
import { LoginForm } from './login-form';
import { OrdersCard } from './orders';
import { ProfileStatusCard } from './profile-state';

const PromiseLockDemo = () => {
  return (
    <>
      <AxiosInterceptor />
      <Stack spacing={4}>
        <LoginForm />
        <AuthStateCard />
        <ProfileStatusCard />
        <OrdersCard />
      </Stack>
    </>
  );
};

export default PromiseLockDemo;
