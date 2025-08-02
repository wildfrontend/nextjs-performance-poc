import { useCallback } from 'react';
import useAuthStatusStore from './hook';

export const useAuth = () => {
  const {
    isAuth,
    isAuthLoading,
    accessToken,
    refreshToken,
    user,
    logout,
    getValidToken,
    acquireTokenLock,
    updateAuthorization,
    toggleAuthLoading,
  } = useAuthStatusStore();

  const getToken = useCallback(async () => {
    return await getValidToken();
  }, [getValidToken]);

  const acquireLock = useCallback(async () => {
    return await acquireTokenLock();
  }, [acquireTokenLock]);

  return {
    // State
    isAuth,
    isAuthLoading,
    accessToken,
    refreshToken,
    user,
    
    // Actions
    logout,
    getToken,
    acquireLock,
    updateAuthorization,
    toggleAuthLoading,
  };
}; 