import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

import { GetProductsQueryParams } from '@/types/apis/dummyjson/products';
import { dummyjsonAxios } from '@/utils/axios';

export const getProductsOptions = (params?: GetProductsQueryParams) =>
  infiniteQueryOptions({
    queryKey: ['products', params],
    queryFn: async ({ pageParam, signal }) => {
      const response = await dummyjsonAxios.get('/products', {
        params: {
          limit: params?.limit,
          skip: z.coerce.number().default(0).parse(params?.limit) * pageParam,
        },
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
  params?: {
    page?: string | number | null;
  }
) =>
  queryOptions({
    queryKey: ['products', category, params],
    queryFn: async ({ signal }) => {
      const limit = 3;
      const response = await dummyjsonAxios.get(
        `/products/category/${category}`,
        {
          params: {
            limit,
            skip: z.coerce.number().default(0).parse(params?.page) * limit,
          },
          signal,
        }
      );
      return response.data;
    },
  });

export const getProductStoriesByCategoryOptions = (
  category: string,
  params?: GetProductsQueryParams
) =>
  infiniteQueryOptions({
    queryKey: ['products', 'stories', category, params],
    queryFn: async ({ pageParam, signal }) => {
      const response = await dummyjsonAxios.get(
        `/products/category/${category}`,
        {
          params: { limit: 3, skip: pageParam * 3 },
          signal,
        }
      );
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

export const getProductCategoriesOptions = () =>
  queryOptions({
    queryKey: ['products', 'categories'],
    queryFn: async ({ signal }) => {
      const response = await dummyjsonAxios.get('/products/categories', {
        signal,
      });
      return response.data;
    },
  });

export const getProductOptions = (productId: string | number) =>
  queryOptions({
    queryKey: ['products', 'detail', productId],
    queryFn: async ({ signal }) => {
      const response = await dummyjsonAxios.get(`/products/${productId}`, {
        signal,
      });
      return response.data;
    },
  });
