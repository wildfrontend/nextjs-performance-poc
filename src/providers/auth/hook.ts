import { create } from 'zustand';

const useAuthStatusStore = create((set) => ({
  isAuth: false,
  isAuthLoading: false,
  accessToken: undefined,
  refreshToken: undefined,
  updateAuthorization: (accessToken: string, refreshToken: string) => {
    console.log(accessToken, refreshToken);
    return set({ isAuth: !!accessToken, accessToken, refreshToken });
  },
  toggleAuthLoading: (isAuthLoading: boolean) => {
    console.log('toggleAuthLoading', isAuthLoading);
    return set({ isAuthLoading });
  },
}));

export default useAuthStatusStore;
