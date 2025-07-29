import { Product } from '@/types/pages/products';
import { dummyjsonAxios } from '@/utils/axios';

export const getProduct = async (productId: string | number) => {
  const response = await dummyjsonAxios.get<Product>(`/products/${productId}`);
  return response.data;
};

export const getProductBySSR = async (productId: string | number) => {
  const response = await dummyjsonAxios.get<Product>(`/products/${productId}`);
  return response.data;
};
