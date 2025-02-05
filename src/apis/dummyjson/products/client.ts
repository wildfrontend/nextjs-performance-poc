import { useQuery } from '@tanstack/react-query';

import { GetProductsQueryParams } from '@/types/apis/products';

import { getProductsOptions } from './query-options';

// https://dummyjson.com/docs/products#products-all

export const useFetchProducts = (props?: {
  params?: GetProductsQueryParams;
}) => {
  const query = useQuery(getProductsOptions(props?.params));
  return query;
};
