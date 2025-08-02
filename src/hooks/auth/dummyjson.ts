import axios, { AxiosError, AxiosHeaders, HttpStatusCode } from 'axios';
import { useEffect, useMemo } from 'react';

import { dummyjsonAxios } from '@/utils/axios';

import useAuth from './auth';

type RequestBeforeFunction = Parameters<
  typeof axios.interceptors.request.use
>['0'];

type ResponseErrorFunction = Parameters<
  typeof axios.interceptors.response.use
>['1'];

const useDummyjsonInterceptor = () => {
  const {
    accessToken,
    refreshToken,
    refreshTime,
    onLogout,
    onRefreshToken,
    setRefreshTime,
  } = useAuth();

  const requestBefore: RequestBeforeFunction = useMemo(
    () => async (config) => {
      if (config.headers) {
        if (accessToken) {
          (config.headers as AxiosHeaders).set(
            'Authorization',
            `Bearer ${accessToken}`
          );
        }
      }
      return config;
    },
    [accessToken]
  );

  const responseError: ResponseErrorFunction = useMemo(
    () => async (error: AxiosError<any>) => {
      const originalRequest = error.config;
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        console.log('Unauthorized', error);
        try {
          if ((refreshTime ?? 0) > 1) {
            throw 'over retry time';
          }
          setRefreshTime((state) => (state ?? 0) + 1);

          // 嘗試刷新 token
          await onRefreshToken({ refreshToken, expiresInMins: 1 });

          // 拿最新 accessToken (建議存在 context/zustand/localStorage)
          const newToken = window.localStorage.getItem('accessToken'); // 改成你全局 state
          if (originalRequest && newToken) {
            (originalRequest.headers as AxiosHeaders).set(
              'Authorization',
              `Bearer ${newToken}`
            );
            // 重新發送原本的 request
            return dummyjsonAxios(originalRequest);
          }
        } catch (error) {
          console.log('refresh client error');
          onLogout();
        }
      }
      // default error
      return Promise.reject(error);
    },
    [refreshTime, setRefreshTime, onRefreshToken, refreshToken, onLogout]
  );

  useEffect(() => {
    const request = dummyjsonAxios.interceptors.request.use(requestBefore);
    const response = dummyjsonAxios.interceptors.response.use(
      undefined,
      responseError
    );
    return () => {
      dummyjsonAxios.interceptors.request.eject(request);
      dummyjsonAxios.interceptors.response.eject(response);
    };
  }, [requestBefore, responseError]);
};

export default useDummyjsonInterceptor;
