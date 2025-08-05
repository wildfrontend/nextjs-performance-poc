import { AxiosRequestConfig } from 'axios';

import { nextjs2Axios, nextjsAxios } from '@/utils/axios';

export const getNextjsProfile = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/user/profile', config);
};

export const getNextjsUserOrder = (config?: AxiosRequestConfig) => {
  return nextjs2Axios.get('/user/orders', config);
};
