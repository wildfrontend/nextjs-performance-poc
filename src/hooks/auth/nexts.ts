import axios, { AxiosError, AxiosHeaders, HttpStatusCode } from 'axios';
import { useEffect, useMemo } from 'react';

import { nextjsAxios } from '@/utils/axios';

import useAuth from './auth';

type RequestBeforeFunction = Parameters<
  typeof axios.interceptors.request.use
>['0'];

type ResponseErrorFunction = Parameters<
  typeof axios.interceptors.response.use
>['1'];

const useNextjsInterceptor = () => {
  const {
    accessToken,
    refreshToken,
    onLogout,
    onRefreshToken,
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
        console.log('NextJS API Unauthorized', error);
        try {
          // 這裡等待 token 刷新
          await onRefreshToken({ refreshToken });

          // *** 關鍵：帶著新 accessToken 重送原本的 request ***
          // 取得最新 accessToken
          // 注意：用 useAuth() 可能會抓到舊的值，建議設計 onRefreshToken 回傳新 token，或用 context/ref 管理最新 accessToken

          const newToken = accessToken; // or 你的全局 state
          if (originalRequest && newToken) {
            (originalRequest.headers as AxiosHeaders).set(
              'Authorization',
              `Bearer ${newToken}`
            );
            // 用 nextjsAxios 重新發送
            return nextjsAxios(originalRequest);
          }
        } catch (error) {
          console.log('NextJS refresh client error');
          onLogout();
        }
      }
      // default error
      return Promise.reject(error);
    },
    [onRefreshToken, refreshToken, accessToken, onLogout]
  );

  useEffect(() => {
    const request = nextjsAxios.interceptors.request.use(requestBefore);
    const response = nextjsAxios.interceptors.response.use(
      undefined,
      responseError
    );
    return () => {
      nextjsAxios.interceptors.request.eject(request);
      nextjsAxios.interceptors.response.eject(response);
    };
  }, [requestBefore, responseError]);
};

export default useNextjsInterceptor;
