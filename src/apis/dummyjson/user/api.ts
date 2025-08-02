import type { GetUserProfileResponse } from '@/types/apis/dummyjson/user';
import { dummyjsonAxios } from '@/utils/axios';

export const getUserProfile = async () => {
  const response = await dummyjsonAxios.get<GetUserProfileResponse>('/user/me');
  return response.data;
};
