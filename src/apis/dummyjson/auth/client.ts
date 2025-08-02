import { useMutation, useQuery } from '@tanstack/react-query';
import { useAuth } from '@/providers/auth/useAuth';

import {
  getAuthUserOptions,
  loginAuthOptions,
  postAuthResourcesOptions,
  refreshTokenOptions,
} from './query-options';

export const useLoginAuth = () => {
  const { isAuthLoading } = useAuth();
  const mutation = useMutation(loginAuthOptions);
  return {
    ...mutation,
    isAuthLoading, // 使用 auth provider 的 loading 狀態
  };
};

export const useRefreshToken = () => {
  const { isAuthLoading } = useAuth();
  const mutation = useMutation(refreshTokenOptions);
  
  return {
    ...mutation,
    isAuthLoading, // 使用 auth provider 的 loading 狀態
  };
};

export const useFetchAuthUser = () => {
  const query = useQuery(getAuthUserOptions);
  return query;
};

export const usePostAuthResources = () => {
  const mutation = useMutation(postAuthResourcesOptions);
  return mutation;
};
