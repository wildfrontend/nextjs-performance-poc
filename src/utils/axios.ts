import Axios from 'axios';
import { setupAuthInterceptor } from './auth-interceptor';

export const dummyjsonAxios = Axios.create({
  baseURL: 'https://dummyjson.com',
});

// 設置 auth interceptor
setupAuthInterceptor(dummyjsonAxios);
