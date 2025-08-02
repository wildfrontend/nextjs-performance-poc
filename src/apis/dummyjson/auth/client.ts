import { useQuery } from '@tanstack/react-query';

import useAuthStatusStore from '@/providers/auth/hook';

import { getAuthUserOptions } from './query-options';

export const useFetchAuthUser = () => {
  const { isAuth } = useAuthStatusStore();
  const query = useQuery(getAuthUserOptions(isAuth));
  return { ...query, isAuth };
};
