import { useQuery } from '@tanstack/react-query';

import { getAuthUserOptions } from './query-options';

export const useFetchAuthUser = () => {
  const query = useQuery(getAuthUserOptions);
  return query;
};
