import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';

import { getProductStoriesByCategoryOptions } from '@/apis/dummyjson/products/query-options';
import ProductList from '@/components/react-query/products/stories/list';
import { getQueryClient } from '@/utils/react-query';

const Page: React.FC<{
  params: Promise<{ category: string }>;
}> = async ({ params }) => {
  const queryClient = getQueryClient();
  const { category } = await params;

  await Promise.all([
    queryClient.prefetchInfiniteQuery(
      getProductStoriesByCategoryOptions(category, {
        limit: 3,
      })
    ),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <ProductList />
      </div>
    </HydrationBoundary>
  );
};

export default Page;
