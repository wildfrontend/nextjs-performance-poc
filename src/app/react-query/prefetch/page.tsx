import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';

import { getProductsOptions } from '@/apis/dummyjson/products/query-options';
import ProductCategory from '@/components/react-query/products/category';
import ProductList from '@/components/react-query/products/list';
import { getQueryClient } from '@/utils/react-query';

type PathParams = {};

const Page: React.FC<{
  searchParams: {
    limit?: string;
    category?: string;
  };
}> = async ({ searchParams }) => {
  console.log('prefetch');
  const queryClient = getQueryClient();
  const { limit, category } = await searchParams;
  console.log(limit, category)
  await Promise.all([
    queryClient.prefetchQuery(
      getProductsOptions({
        limit,
        category,
      })
    ),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-[1280px] mx-auto px-4">
        <ProductCategory />
        <div className="divider"></div>
        <ProductList />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
