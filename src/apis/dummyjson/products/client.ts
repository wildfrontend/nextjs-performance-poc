import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { GetProductsQueryParams } from '@/types/apis/dummyjson/products';

import {
  getProductStoriesByCategoryOptions,
  getProductsByCategoryOptions,
  getProductsOptions,
} from './query-options';

// https://dummyjson.com/docs/products#products-all

export const useFetchProducts = (props?: {
  params?: GetProductsQueryParams;
}) => {
  const query = useInfiniteQuery(getProductsOptions(props?.params));
  return query;
};

export const useFetchProductsByCategory = (props: {
  category: string;
  params?: {
    page?: string;
  };
}) => {
  const query = useQuery(
    getProductsByCategoryOptions(props.category, props?.params)
  );
  return query;
};

export const useFetchProductStoriesByCategory = (props: {
  category: string;
  params?: GetProductsQueryParams;
}) => {
  const query = useInfiniteQuery(
    getProductStoriesByCategoryOptions(props.category, props.params)
  );
  return query;
};
