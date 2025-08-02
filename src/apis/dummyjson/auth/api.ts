import { AxiosRequestConfig } from 'axios';

import type {
  GetAuthResourcesResponse,
  GetUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
} from '@/types/apis/dummyjson/auth';
import { dummyjsonAxios } from '@/utils/axios';

export const refreshToken = async (data?: RefreshTokenRequest) => {
  const response = await dummyjsonAxios.post<RefreshTokenResponse>(
    '/auth/refresh',
    data
  );
  return response.data;
};

export const loginAuth = async (data?: LoginUserRequest) => {
  const response = await dummyjsonAxios.post<LoginUserResponse>(
    '/auth/login',
    data
  );
  return response.data;
};

export const getAuthUser = async (config: AxiosRequestConfig) => {
  const response = await dummyjsonAxios.get<GetUserResponse>('/auth/me', {
    signal: config.signal,
  });
  return response.data;
};

export const postAuthResources = async () => {
  const response =
    await dummyjsonAxios.post<GetAuthResourcesResponse>('/auth/RESOURCE');
  return response.data;
};
