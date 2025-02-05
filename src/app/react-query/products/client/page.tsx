import React from 'react';

import ProductCategory from '@/components/react-query/products/navigation/category';
import ProductList from '@/components/react-query/products/home/list';

const Page: React.FC = () => {
  console.log('client');
  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <ProductCategory />
      <div className="divider"></div>
      <ProductList />
    </div>
  );
};

export default Page;
