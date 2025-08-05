import { useQuery } from '@tanstack/react-query';
import { useRequest } from 'ahooks';

import useAuthStatusStore from '@/providers/auth/hook';

import { getNextjsUserOrder } from './api';
import { getNextjsUserOptions } from './query-options';

export const useFetchNextjsUser = () => {
  const { isAuth } = useAuthStatusStore();
  const query = useQuery(getNextjsUserOptions({ enabled: isAuth }));
  return { ...query, isAuth };
};

export const useFetchUserOrder = () => {
  const { isAuth } = useAuthStatusStore();
  const { data, error, loading, run, refresh, mutate } = useRequest(
    () => getNextjsUserOrder(),
    {
      ready: isAuth,
      pollingInterval: 1_000,
    }
  );
  return { data, error, loading, run, refresh, mutate, isAuth };
};
