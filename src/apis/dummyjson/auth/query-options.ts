import { mutationOptions, queryOptions } from '@tanstack/react-query';

import { getAuthUser, postAuthResources } from './api';

export const getAuthUserOptions = (enabled?: boolean) =>
  queryOptions({
    queryKey: ['auth', 'user', enabled],
    queryFn: async ({ signal }) => {
      const response = await getAuthUser({ signal });
      return response;
    },
    enabled,
  });

export const postAuthResourcesOptions = mutationOptions({
  mutationKey: ['auth', 'resources'],
  mutationFn: async (data: any) => {
    const response = await postAuthResources();
    return response;
  },
});
