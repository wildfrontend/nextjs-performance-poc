import { useQuery } from '@tanstack/react-query';
import { useRequest } from 'ahooks';

import useAuthStatusStore from '@/providers/auth/hook';

import { getNextjsUserOrder } from './api';
import { getNextjsUserOptions } from './query-options';

export const useFetchNextjsUser = () => {
  const { isAuth } = useAuthStatusStore();
  const query = useQuery(getNextjsUserOptions(isAuth));
  return { ...query, isAuth };
};

export const useFetchUserOrder = () => {
  // 如果你的 API 沒參數，可以這樣直接用
  const { isAuth } = useAuthStatusStore();
  const { data, error, loading, run, refresh, mutate } = useRequest(
    () => getNextjsUserOrder(),
    {
      ready: isAuth,
    }
  );

  return { data, error, loading, run, refresh, mutate, isAuth };
};
