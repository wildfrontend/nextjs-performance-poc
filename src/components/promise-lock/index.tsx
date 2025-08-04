'use client';

import { Stack } from '@mui/material';

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
        <ProfileStatusCard />
        <OrdersCard />
      </Stack>
    </>
  );
};

export default PromiseLockDemo;
