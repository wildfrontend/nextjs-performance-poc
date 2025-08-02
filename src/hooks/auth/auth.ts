import { useLocalStorageState, useRequest } from 'ahooks';
import { Mutex } from 'async-mutex';

import { loginAuth, refreshAuthToken } from '@/apis/dummyjson/auth/api';
import useAuthStatusStore from '@/providers/auth/hook';

const mutex = new Mutex();

let refreshPromise: ReturnType<typeof refreshAuthToken> | null = null;

type RefreshTokenRequest = Parameters<typeof refreshAuthToken>['0'];

async function refreshAuthTokenWithLock(args: RefreshTokenRequest) {
  // 若有正在進行中的 promise，就直接回傳它
  if (refreshPromise) return refreshPromise;

  refreshPromise = mutex.runExclusive(async () => {
    try {
      return await refreshAuthToken(args);
    } finally {
      // 無論成功失敗都要重設
      refreshPromise = null;
    }
  });
  return refreshPromise;
}

const useAuth = () => {
  const {
    isAuth,
    isRefreshing,
    accessToken,
    refreshToken,
    updateAuthorization,
    logout,
    toggleRefreshLoading,
  } = useAuthStatusStore();

  const [refreshTime, setRefreshTime] = useLocalStorageState(
    'auth-refresh-time',
    {
      defaultValue: 0,
    }
  );

  const { loading: isAuthorizing, run: onLogin } = useRequest(loginAuth, {
    manual: true,
    onSuccess: (res) => {
      updateAuthorization({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });
    },
  });

  const { runAsync: onRefreshToken } = useRequest(refreshAuthTokenWithLock, {
    manual: true,
    onBefore: () => {
      toggleRefreshLoading(true);
    },
    onSuccess: (res) => {
      updateAuthorization({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });
    },
    onFinally: () => {
      toggleRefreshLoading(false);
    },
  });

  return {
    isAuth,
    isRefreshing,
    isAuthorizing,
    accessToken,
    refreshToken,
    refreshTime,
    onLogin,
    onLogout: logout,
    onRefreshToken,
    setRefreshTime,
  };
};

export default useAuth;
