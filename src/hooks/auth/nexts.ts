import axios, { AxiosError, AxiosHeaders, HttpStatusCode } from 'axios';
import { useEffect, useMemo } from 'react';

import useAuth from './auth';
import { nextjsAxios } from '@/utils/axios';

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
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        console.log('Unauthorized', error);
        try {
          if ((refreshTime ?? 0) > 1) {
            throw 'over retry time';
          }
          setRefreshTime((state) => (state ?? 0) + 1);
          await onRefreshToken({ refreshToken, expiresInMins: 1 });
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
    const request = nextjsAxios.interceptors.request.use(requestBefore);
    const response = nextjsAxios.interceptors.response.use(undefined, responseError);
    return () => {
      nextjsAxios.interceptors.request.eject(request);
      nextjsAxios.interceptors.response.eject(response);
    };
  }, [requestBefore, responseError]);
};

export default useNextjsInterceptor;
