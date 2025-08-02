import { mutationOptions, queryOptions } from '@tanstack/react-query';

import {
  LoginUserRequest,
  RefreshTokenRequest,
} from '@/types/apis/dummyjson/auth';

import { getAuthUser, loginAuth, postAuthResources, refreshToken } from './api';

export const loginAuthOptions = mutationOptions({
  mutationKey: ['auth', 'login'],
  mutationFn: async (data: LoginUserRequest) => {
    const response = await loginAuth(data);
    return response;
  },
});

export const refreshTokenOptions = mutationOptions({
  mutationKey: ['auth', 'refresh'],
  mutationFn: async (data: RefreshTokenRequest) => {
    const response = await refreshToken(data);
    return response;
  },
});

export const getAuthUserOptions = queryOptions({
  queryKey: ['auth', 'user'],
  queryFn: async ({ signal }) => {
    const response = await getAuthUser({ signal });
    return response;
  },
});

export const postAuthResourcesOptions = mutationOptions({
  mutationKey: ['auth', 'resources'],
  mutationFn: async (data: any) => {
    const response = await postAuthResources();
    return response;
  },
});
