import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';

import { getProductsByCategoryOptions } from '@/apis/dummyjson/products/query-options';
import CategoryProductList from '@/components/react-query/products/category/list';
import { getQueryClient } from '@/utils/react-query';

// https://nextjs.org/docs/messages/sync-dynamic-apis
const Page: React.FC<{
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    limit?: string;
    skip?: string;
  }>;
}> = async ({ params, searchParams }) => {
  const queryClient = getQueryClient();
  const { category } = await params;
  const { limit, skip } = await searchParams;

  await Promise.all([
    queryClient.prefetchQuery(
      getProductsByCategoryOptions(category, {
        limit: limit ?? 3,
        skip,
      })
    ),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-[1280px] mx-auto px-4">
        <CategoryProductList />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
