import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';

import { GetProductsQueryParams } from '@/types/apis/products';
import axios from '@/utils/axios';

export const getProductsOptions = (params?: GetProductsQueryParams) =>
  infiniteQueryOptions({
    queryKey: ['products', params],
    queryFn: async ({ pageParam, signal }) => {
      console.log('products,', { pageParam });
      const response = await axios.get('/products', {
        params: { limit: 6, skip: pageParam },
        signal,
      });
      return response.data;
    },
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => {
      const value = firstPage.skip - 1;
      return value < 0 ? 0 : value;
    },
    getNextPageParam: (lastPage) => {
      const totalPage = Math.ceil(lastPage.total / lastPage.limit);
      const value = lastPage.skip + 1;
      return value < totalPage ? value : totalPage;
    },
  });

export const getProductsByCategoryOptions = (
  category: string,
  params?: GetProductsQueryParams
) =>
  queryOptions({
    queryKey: ['products', category, params],
    queryFn: async ({ signal }) => {
      console.log('products,', category);
      const response = await axios.get(`/products/category/${category}`, {
        params,
        signal,
      });
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

export const getProductOptions = (productId: string | number) =>
  queryOptions({
    queryKey: ['products', 'detail', productId],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/products/${productId}`, { signal });
      return response.data;
    },
  });
