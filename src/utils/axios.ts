import Axios from 'axios';

export const dummyjsonAxios = Axios.create({
  baseURL: 'https://dummyjson.com',
  withCredentials: true,
});

export const nextjsAxios = Axios.create({
  withCredentials: true,
});
