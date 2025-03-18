'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useFetchProductStoriesByCategory } from '@/apis/dummyjson/products/client';

import ProductStory from './item';

const ProductList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useFetchProductStoriesByCategory({
    category,
    params: {
      limit: 3,
    },
  });
  if (error) {
    return <div>{JSON.stringify(error, null, 4)}</div>;
  }
  return (
    <div className="container flex flex-col">
      {data?.pages?.map((group, i) => {
        return group.products.map((item) => {
          return <ProductStory key={item.id} product={item} />;
        });
      })}
      <div>
        <button
          className={clsx('btn', { 'btn-disabled': !hasNextPage })}
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => hasNextPage && fetchNextPage()}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  );
};

export default ProductList;
