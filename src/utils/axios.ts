import Axios from 'axios';

export const dummyjsonAxios = Axios.create({
  baseURL: 'https://dummyjson.com',
});

export const nextjsAxios = Axios.create({
  baseURL: '/api',
});
