import { useRequest } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

import useAuth from '@/hooks/auth/auth';
import { nextjsAxios } from '@/utils/axios';

export const getProtected = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/protected', config);
};

export const getTestAuth = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/test-auth', config);
};

export const getTestAuthExpired = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/test-auth-expired', config);
};

export function useFetchProtected() {
  const { isAuth } = useAuth();
  // 你可以傳 config 或直接不傳
  const query = useRequest(getProtected, {
    ready: isAuth,
  });
  return { ...query, isAuth };
}

export function useFetchTestAuth() {
  const { isAuth } = useAuth();
  const query = useRequest(getTestAuth, {
    ready: isAuth,
  });
  return { ...query, isAuth };
}

export function useFetchTestAuthExpired() {
  const { isAuth } = useAuth();
  const query = useRequest(getTestAuthExpired, {
    ready: isAuth,
  });
  return { ...query, isAuth };
}
