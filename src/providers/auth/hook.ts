import { create } from 'zustand';
import { Mutex } from 'async-mutex';

interface AuthState {
  isAuth: boolean;
  isAuthLoading: boolean;
  accessToken?: string;
  refreshToken?: string;
  user?: any;
  tokenMutex: Mutex;
  updateAuthorization: (accessToken: string, refreshToken: string, user?: any) => void;
  toggleAuthLoading: (isAuthLoading: boolean) => void;
  logout: () => void;
  getValidToken: () => Promise<string | null>;
  acquireTokenLock: () => Promise<() => void>;
}

const useAuthStatusStore = create<AuthState>((set, get) => ({
  isAuth: false,
  isAuthLoading: false,
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
  tokenMutex: new Mutex(),
  
  updateAuthorization: (accessToken: string, refreshToken: string, user?: any) => {
    console.log('updateAuthorization', { accessToken: accessToken?.substring(0, 20) + '...', refreshToken: refreshToken?.substring(0, 20) + '...' });
    return set({ isAuth: !!accessToken, accessToken, refreshToken, user });
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
      user: undefined,
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
    const release = await tokenMutex.acquire();
    return release;
  },
}));

export default useAuthStatusStore;
