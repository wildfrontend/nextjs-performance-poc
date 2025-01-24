import { queryOptions } from '@tanstack/react-query';

import { GetProductsQueryParams } from '@/types/apis/products';
import axios from '@/utils/axios';

export const getProductsOptions = (params?: GetProductsQueryParams) =>
  queryOptions({
    queryKey: ['products', params],
    queryFn: async ({ signal }) => {
      console.log('products,');
      const response = await axios.get('/products', { params, signal });
      return response.data;
    },
  });

export const getProductCategoriesOptions = () =>
  queryOptions({
    queryKey: ['products', 'categories'],
    queryFn: async ({ signal }) => {
      const response = await axios.get('/products/categories', { signal });
      return response.data;
    },
  });
