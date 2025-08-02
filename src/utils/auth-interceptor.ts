import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import useAuthStatusStore from '@/providers/auth/hook';

export const setupAuthInterceptor = (axiosInstance: AxiosInstance) => {
  // Request interceptor - 自動添加 authorization header
  axiosInstance.interceptors.request.use(
    async (config) => {
      const { getValidToken } = useAuthStatusStore.getState();

      // 只對 DummyJSON API 添加 authorization header
      if (
        config.url?.includes('/auth/') ||
        config.url?.includes('/products/') ||
        config.url?.includes('/todos/')
      ) {
        const token = await getValidToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor - 自動處理 token 過期
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config;

      // 如果是 401 錯誤且是 DummyJSON API 的請求
      if (
        (error.response?.status === 401 &&
          originalRequest?.url?.includes('/auth/')) ||
        originalRequest?.url?.includes('/products/') ||
        originalRequest?.url?.includes('/todos/')
      ) {
        const { refreshAuthToken } = useAuthStatusStore.getState();

        try {
          // 嘗試刷新 token
          const refreshSuccess = await refreshAuthToken();

          if (refreshSuccess && originalRequest) {
            // 重新獲取新的 token
            const { getValidToken } = useAuthStatusStore.getState();
            const newToken = await getValidToken();

            if (newToken && originalRequest.headers) {
              // 更新原始請求的 authorization header
              originalRequest.headers.Authorization = `Bearer ${newToken}`;

              // 重新發送原始請求
              return axiosInstance(originalRequest);
            }
          }
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          // 刷新失敗，清除 auth 狀態
          const { logout } = useAuthStatusStore.getState();
          logout();
        }
      }

      return Promise.reject(error);
    }
  );
};
