import { notFound } from 'next/navigation';
import React from 'react';

import { getProductBySSR } from '@/apis/dummyjson/products/api';
import ProductDetail from '@/components/react-query/products/detail/main';
import ProductProvider from '@/components/react-query/products/detail/provider';

// https://nextjs.org/docs/messages/sync-dynamic-apis
const Page: React.FC<{
  params: Promise<{ productId: string }>;
  searchParams: Promise<{
    limit?: string;
    skip?: string;
  }>;
}> = async ({ params, searchParams }) => {
  const { productId } = await params;
  try {
    const product = await getProductBySSR(productId);
    console.log(product);
    return (
      <ProductProvider product={product}>
        <ProductDetail />
      </ProductProvider>
    );
  } catch (error) {
    notFound();
  }
};

export default Page;
