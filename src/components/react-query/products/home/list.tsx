'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { useFetchProducts } from '@/apis/dummyjson/products/client';

const ProductList: React.FC = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useFetchProducts({
    params: {
      limit: 6,
    },
  });
  if (error) {
    return <div>{JSON.stringify(error, null, 4)}</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.pages?.map((group, i) => {
        // @ts-ignore
        return group.products.map((item) => {
          return (
            <div className="card bg-base-100 w-96 shadow-xl" key={item.id}>
              <figure>
                <Image
                  alt="Shoes"
                  height={300}
                  src={item.thumbnail}
                  unoptimized
                  width={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.category}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
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
