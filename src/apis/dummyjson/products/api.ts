import { Product } from '@/types/pages/products';
import axios from '@/utils/axios';

export const getProduct = async (productId: string | number) => {
  const response = await axios.get<Product>(`/products/${productId}`);
  return response.data;
};

export const getProductBySSR = async (productId: string | number) => {
  const response = await axios.get<Product>(`/products/${productId}`);
  return response.data;
};
