import { queryOptions } from '@tanstack/react-query';

import { getNextjsProfile } from './api';

export const getNextjsUserOptions = ({
  enabled,
  enabledLongpoll,
}: {
  enabled?: boolean;
  enabledLongpoll?: Boolean;
}) =>
  queryOptions({
    queryKey: ['auth', 'nextjs', 'user', enabled, enabledLongpoll],
    queryFn: async ({ signal }) => {
      const response = await getNextjsProfile({ signal });
      return response;
    },
    enabled,
    refetchInterval: enabledLongpoll ? 1_000 : undefined,
  });
