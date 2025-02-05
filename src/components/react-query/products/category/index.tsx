import React from 'react';

import CategoryItem from './item';

const ProductCategory: React.FC = async () => {
  try {
    const categories = await fetch(
      'https://dummyjson.com/products/categories'
    ).then((res) => res.json());
    return (
      <ul className="menu menu-horizontal bg-base-200">
        {/* @ts-ignore */}
        {categories.map((item) => {
          return <CategoryItem key={item.slug} item={item} />;
        })}
      </ul>
    );
  } catch (error) {
    console.log('fetch categories failed:', error);
    return <></>;
  }
};

export default ProductCategory;
