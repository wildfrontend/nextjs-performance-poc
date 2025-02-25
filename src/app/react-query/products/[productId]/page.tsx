import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import React from 'react';

import {
  getProductOptions,
  getProductsByCategoryOptions,
} from '@/apis/dummyjson/products/query-options';
import CategoryProductList from '@/components/react-query/products/category/list';
import ProductCategory from '@/components/react-query/products/navigation/category';
import { getQueryClient } from '@/utils/react-query';

// https://nextjs.org/docs/messages/sync-dynamic-apis
const Page: React.FC<{
  params: Promise<{ productId: string }>;
  searchParams: Promise<{
    limit?: string;
    skip?: string;
  }>;
}> = async ({ params, searchParams }) => {
  const queryClient = getQueryClient();
  const { productId } = await params;
  await Promise.all([queryClient.prefetchQuery(getProductOptions(productId))]);
  console.log(dehydrate(queryClient).queries);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="max-w-[1280px] mx-auto px-4">
        Product Id :{productId}
        <pre>
          {JSON.stringify(dehydrate(queryClient).queries, null, 2)}
        </pre>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
