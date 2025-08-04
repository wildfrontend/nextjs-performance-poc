'use client';

import { Stack } from '@mui/material';

import useAuth from '@/hooks/auth/auth';

import AxiosInterceptor from './axios';
import { ConcurrentApiTestCard } from './concurent-test';
import { LoginForm } from './login-form';

// import { OrdersCard } from './orders';
// import { ProfileStatusCard } from './profile-state';

const PromiseLockDemo = () => {
  const { accessToken } = useAuth();
  return (
    <>
      <AxiosInterceptor />
      <Stack spacing={4}>
        <LoginForm />
        {accessToken && <ConcurrentApiTestCard />}
        {/* <ProfileStatusCard />
        <OrdersCard /> */}
      </Stack>
    </>
  );
};

export default PromiseLockDemo;
