import { create } from 'zustand';

interface AuthState {
  isAuth: boolean;
  isRefreshing: boolean;
  accessToken?: string;
  refreshToken?: string;
  updateAuthorization: (props: {
    accessToken: string;
    refreshToken: string;
  }) => void;
  logout: () => void;
  toggleRefreshLoading: (loading: boolean) => void;
}

const useAuthStatusStore = create<AuthState>((set, get) => ({
  isAuth: false,
  isRefreshing: false,
  accessToken: undefined,
  refreshToken: undefined,
  updateAuthorization: ({ accessToken, refreshToken }) => {
    console.log('updateAuthorization', {
      accessToken,
      refreshToken,
    });
    return set({ isAuth: !!accessToken, accessToken, refreshToken });
  },
  logout: () => {
    set({
      isAuth: false,
      isRefreshing: false,
      accessToken: undefined,
      refreshToken: undefined,
    });
  },
  toggleRefreshLoading: (loading: boolean) => {
    console.log('toggleRefreshLoading', loading);
    return set({ isRefreshing: loading });
  },
}));

export default useAuthStatusStore;
