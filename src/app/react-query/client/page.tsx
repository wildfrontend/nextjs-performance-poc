'use client';

import React from 'react';

import ProductList from '@/components/react-query/products/list';

const Page: React.FC = () => {
  console.log('client');
  return <ProductList />;
};

export default Page;
