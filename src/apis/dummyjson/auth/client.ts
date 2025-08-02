import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getAuthUserOptions,
  loginAuthOptions,
  postAuthResourcesOptions,
  refreshTokenOptions,
} from './query-options';

export const useLoginAuth = () => {
  const mutation = useMutation(loginAuthOptions);
  return mutation;
};

export const useRefreshToken = () => {
  const mutation = useMutation(refreshTokenOptions);
  return mutation;
};

export const useFetchAuthUser = () => {
  const query = useQuery(getAuthUserOptions);
  return query;
};

export const usePostAuthResources = () => {
  const mutation = useMutation(postAuthResourcesOptions);
  return mutation;
};
