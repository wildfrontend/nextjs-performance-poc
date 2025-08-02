import { Mutex } from 'async-mutex';
import { create } from 'zustand';

interface AuthState {
  isAuth: boolean;
  isAuthLoading: boolean;
  accessToken?: string;
  refreshToken?: string;
  tokenMutex: Mutex;
  updateAuthorization: (
    accessToken: string,
    refreshToken: string,
    user?: any
  ) => void;
  toggleAuthLoading: (isAuthLoading: boolean) => void;
  logout: () => void;
  getValidToken: () => Promise<string | null>;
  acquireTokenLock: () => Promise<() => void>;
}

export const useAuth = () => {
  const {
    isAuth,
    isAuthLoading,
    accessToken,
    refreshToken,
    logout,
    getValidToken,
    acquireTokenLock,
    updateAuthorization,
    toggleAuthLoading,
  } = useAuthStatusStore();

  return {
    // State
    isAuth,
    isAuthLoading,
    accessToken,
    refreshToken,
    // Actions
    logout,
    getValidToken,
    acquireTokenLock,
    updateAuthorization,
    toggleAuthLoading,
  };
};

const useAuthStatusStore = create<AuthState>((set, get) => ({
  isAuth: false,
  isAuthLoading: false,
  accessToken: undefined,
  refreshToken: undefined,
  tokenMutex: new Mutex(),

  updateAuthorization: (accessToken: string, refreshToken: string) => {
    console.log('updateAuthorization', {
      accessToken,
      refreshToken,
    });
    return set({ isAuth: !!accessToken, accessToken, refreshToken });
  },

  toggleAuthLoading: (isAuthLoading: boolean) => {
    console.log('toggleAuthLoading', isAuthLoading);
    return set({ isAuthLoading });
  },

  logout: () => {
    set({
      isAuth: false,
      accessToken: undefined,
      refreshToken: undefined,
    });
  },

  getValidToken: async () => {
    const { tokenMutex, accessToken } = get();

    // 如果沒有 token，直接返回 null
    if (!accessToken) {
      return null;
    }

    // 檢查 token 是否過期（這裡可以加入 JWT 解碼檢查）
    // 簡單的檢查：如果 token 存在就認為有效
    // 實際應用中應該檢查 JWT 的 exp 欄位

    return await tokenMutex.runExclusive(async () => {
      // 再次檢查 token 是否存在（可能在等待期間被其他請求清除）
      const currentToken = get().accessToken;
      if (!currentToken) {
        return null;
      }
      // 這裡可以加入更詳細的 token 有效性檢查
      // 例如檢查 JWT 的過期時間
      return currentToken;
    });
  },

  acquireTokenLock: async () => {
    const { tokenMutex } = get();
    console.log('locking...')
    const release = await tokenMutex.acquire();
    console.log('release')
    return release;
  },
}));

export default useAuthStatusStore;
