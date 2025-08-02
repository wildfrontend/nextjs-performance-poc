import { mutationOptions, queryOptions } from '@tanstack/react-query';
import useAuthStatusStore from '@/providers/auth/hook';

import {
  LoginUserRequest,
  RefreshTokenRequest,
} from '@/types/apis/dummyjson/auth';

import { getAuthUser, loginAuth, postAuthResources, refreshToken } from './api';

export const loginAuthOptions = mutationOptions({
  mutationKey: ['auth', 'login'],
  mutationFn: async (data: LoginUserRequest) => {
    const { acquireTokenLock, updateAuthorization, toggleAuthLoading } = useAuthStatusStore.getState();
    
    // 獲取 token lock，確保並發請求不會衝突
    const release = await acquireTokenLock();
    
    try {
      toggleAuthLoading(true);
      const response = await loginAuth(data);
      
      if (response.accessToken) {
        // 更新 auth 狀態
        updateAuthorization(response.accessToken, response.refreshToken || '', response);
      }
      
      return response;
    } finally {
      toggleAuthLoading(false);
      release(); // 釋放 lock
    }
  },
});

export const refreshTokenOptions = mutationOptions({
  mutationKey: ['auth', 'refresh'],
  mutationFn: async (data: RefreshTokenRequest) => {
    const { acquireTokenLock, updateAuthorization, toggleAuthLoading, logout } = useAuthStatusStore.getState();
    
    // 獲取 token lock，確保並發請求不會衝突
    const release = await acquireTokenLock();
    
    try {
      toggleAuthLoading(true);
      const response = await refreshToken(data);
      
      if (response.accessToken) {
        // 更新 auth 狀態
        updateAuthorization(response.accessToken, response.refreshToken || data.refreshToken || '');
      } else {
        // 刷新失敗，清除 auth 狀態
        logout();
      }
      
      return response;
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      throw error;
    } finally {
      toggleAuthLoading(false);
      release(); // 釋放 lock
    }
  },
});

export const getAuthUserOptions = queryOptions({
  queryKey: ['auth', 'user'],
  queryFn: async ({ signal }) => {
    const response = await getAuthUser({ signal });
    return response;
  },
});

export const postAuthResourcesOptions = mutationOptions({
  mutationKey: ['auth', 'resources'],
  mutationFn: async (data: any) => {
    const response = await postAuthResources();
    return response;
  },
});
