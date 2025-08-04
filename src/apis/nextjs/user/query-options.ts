import { queryOptions } from '@tanstack/react-query';

import { getNextjsProfile } from './api';

export const getNextjsUserOptions = (enabled?: boolean) =>
  queryOptions({
    queryKey: ['auth', 'nextjs', 'user', enabled],
    queryFn: async ({ signal }) => {
      const response = await getNextjsProfile({ signal });
      return response;
    },
    enabled,
  });
