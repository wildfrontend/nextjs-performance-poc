import Axios from 'axios';

export const dummyjsonAxios = Axios.create({
  baseURL: 'https://dummyjson.com',
});
