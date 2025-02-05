import { useQuery } from '@tanstack/react-query';

import { GetProductsQueryParams } from '@/types/apis/products';

import {
  getProductsByCategoryOptions,
  getProductsOptions,
} from './query-options';

// https://dummyjson.com/docs/products#products-all

export const useFetchProducts = (props?: {
  params?: GetProductsQueryParams;
}) => {
  const query = useQuery(getProductsOptions(props?.params));
  console.log(props);
  return query;
};

export const useFetchProductsByCategory = (props: {
  category: string;
  params?: GetProductsQueryParams;
}) => {
  const query = useQuery(
    getProductsByCategoryOptions(props.category, props?.params)
  );
  return query;
};
