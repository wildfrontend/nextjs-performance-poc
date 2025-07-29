import { RefreshTokenRequest, RefreshTokenResponse } from '@/types/apis/dummyjson/auth';
import { dummyjsonAxios } from '@/utils/axios';

export const refreshToken = async (data?: RefreshTokenRequest) => {
  const response = await dummyjsonAxios.post<RefreshTokenResponse>('/refresh', data);
  return response.data;
};

