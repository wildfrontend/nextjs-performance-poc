import axios, { AxiosError, AxiosHeaders, HttpStatusCode } from 'axios';
import { useEffect, useMemo } from 'react';

import { nextjs2Axios } from '@/utils/axios';

import useAuth from './auth';

type RequestBeforeFunction = Parameters<
  typeof axios.interceptors.request.use
>['0'];

type ResponseErrorFunction = Parameters<
  typeof axios.interceptors.response.use
>['1'];

const useNextjs2Interceptor = () => {
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
          await onRefreshToken({ refreshToken });

          // 拿最新 accessToken (建議存在 context/zustand/localStorage)
          const newToken = accessToken; // 改成你全局 state
          if (originalRequest && newToken) {
            (originalRequest.headers as AxiosHeaders).set(
              'Authorization',
              `Bearer ${newToken}`
            );
            // 重新發送原本的 request
            return nextjs2Axios(originalRequest);
          }
        } catch (error) {
          console.log('refresh client error');
          onLogout();
        }
      }
      // default error
      return Promise.reject(error);
    },
    [
      refreshTime,
      setRefreshTime,
      onRefreshToken,
      refreshToken,
      accessToken,
      onLogout,
    ]
  );

  useEffect(() => {
    const request = nextjs2Axios.interceptors.request.use(requestBefore);
    const response = nextjs2Axios.interceptors.response.use(
      undefined,
      responseError
    );
    return () => {
      nextjs2Axios.interceptors.request.eject(request);
      nextjs2Axios.interceptors.response.eject(response);
    };
  }, [requestBefore, responseError]);
};

export default useNextjs2Interceptor;
