import { nextjsAxios } from "@/utils/axios";
import { AxiosRequestConfig } from "axios";

export const getNextjsProfile = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/user/profile', config);
};

export const getNextjsUserOrder = (config?: AxiosRequestConfig) => {
  return nextjsAxios.get('/user/orders', config);
};
