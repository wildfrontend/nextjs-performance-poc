import Link from 'next/link';
import { compile } from 'path-to-regexp';
import React from 'react';

const ProductCategory: React.FC = async () => {
  try {
    const categories = await fetch(
      'https://dummyjson.com/products/categories'
    ).then((res) => res.json());
    return (
      <ul className="menu menu-horizontal bg-base-200">
        {/* @ts-ignore */}
        {categories.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={compile('/react-query/products/categories/:category')({
                  category: item.slug,
                })}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  } catch (error) {
    console.log('fetch categories failed:', error);
    return <></>;
  }
};

export default ProductCategory;
