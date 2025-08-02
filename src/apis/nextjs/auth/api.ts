import { useRequest } from 'ahooks';
import { AxiosRequestConfig } from 'axios';

import useAuth from '@/hooks/auth/auth';
import { nextjsAxios } from '@/utils/axios';

export const getProtected = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/api/protected', config);
};

export function useFetchProtected() {
  const { isAuth } = useAuth();
  // 你可以傳 config 或直接不傳
  const query = useRequest(getProtected, {
    ready: isAuth,
  });
  return { ...query, isAuth };
}
