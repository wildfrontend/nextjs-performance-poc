
import {
  LoginNextjsApiRequest,
  LoginNextjsApiResponse,
  RefreshNextjsTokenRequest,
  RefreshNextjsTokenResponse,
} from '@/types/apis/nextjs/auth';
import { nextjsAxios } from '@/utils/axios';

export const loginNextjsApi = (data: LoginNextjsApiRequest) => {
  return nextjsAxios.post<LoginNextjsApiResponse>('/auth/access-token', data);
};

export const refreshNextjsApi = (data: RefreshNextjsTokenRequest) => {
  return nextjsAxios.post<RefreshNextjsTokenResponse>(
    '/auth/refresh-token',
    data
  );
};
