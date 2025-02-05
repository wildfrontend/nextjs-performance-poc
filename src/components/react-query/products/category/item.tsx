'use client';

import React from 'react';

import useQueryParams from '@/hooks/query-params';

const CategoryItem: React.FC<{
  item: { slug: string; name: string; url: string };
}> = ({ item }) => {
  const { setQueryParams } = useQueryParams<{ category: string }>();
  return (
    <li>
      <button
        onClick={() => {
          setQueryParams({ category: item.slug });
        }}
      >
        {item.name}
      </button>
    </li>
  );
};

export default CategoryItem;
