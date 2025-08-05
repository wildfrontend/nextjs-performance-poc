import { useQuery } from '@tanstack/react-query';
import { useRequest } from 'ahooks';

import useAuthStatusStore from '@/providers/auth/hook';

import { getNextjsUserOrder } from './api';
import { getNextjsUserOptions } from './query-options';

export const useFetchNextjsUser = ({
  enabledLongpoll,
}: {
  enabledLongpoll?: boolean;
}) => {
  const { isAuth } = useAuthStatusStore();
  const query = useQuery(
    getNextjsUserOptions({ enabled: isAuth, enabledLongpoll })
  );
  return { ...query, isAuth };
};

export const useFetchUserOrder = () => {
  // 如果你的 API 沒參數，可以這樣直接用
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
