import { AxiosRequestConfig } from 'axios';

import { nextjsAxios } from '@/utils/axios';

export const getProtected = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/api/protected', config);
};
