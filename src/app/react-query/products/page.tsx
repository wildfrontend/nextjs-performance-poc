import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';

import { getProductsOptions } from '@/apis/dummyjson/products/query-options';
import ProductList from '@/components/react-query/products/home/list';
import ProductCategory from '@/components/react-query/products/navigation/category';
import { getQueryClient } from '@/utils/react-query';

const Page: React.FC = async () => {
  console.log('infinite');
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchInfiniteQuery(
      getProductsOptions({
        limit: 6,
      })
    ),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-[1280px] mx-auto px-4">
        <ProductCategory />
        <div className="divider"></div>
        <ProductList />
      </div>{' '}
    </HydrationBoundary>
  );
};

export default Page;
