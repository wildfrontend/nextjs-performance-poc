import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';

import { getProductsOptions } from '@/apis/dummyjson/products/query-options';
import ProductList from '@/components/react-query/products/home/list';
import ProductCategory from '@/components/react-query/products/navigation/category';
import { getQueryClient } from '@/utils/react-query';

// https://nextjs.org/docs/messages/sync-dynamic-apis
const Page: React.FC<{
  searchParams: Promise<{
    limit?: string;
  }>;
}> = async ({ searchParams }) => {
  const queryClient = getQueryClient();
  const { limit } = await searchParams;
  await Promise.all([
    queryClient.prefetchQuery(
      getProductsOptions({
        limit: limit ?? 6,
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
