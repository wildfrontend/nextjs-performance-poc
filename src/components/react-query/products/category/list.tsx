'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useFetchProductsByCategory } from '@/apis/dummyjson/products/client';
import useQueryParams from '@/hooks/query-params';

import ProductPagination from '../navigation/pagination';

const CategoryProductList: React.FC = () => {
  const params = useParams<{ category: string }>();
  const { urlSearchParams } = useQueryParams();
  const { data, isFetching, error } = useFetchProductsByCategory({
    category: params.category,
    params: {
      limit: urlSearchParams.get('limit') ?? 3,
      skip: urlSearchParams.get('skip') ?? undefined,
    },
  });
  if (isFetching) {
    return <div>Loadings...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error, null, 4)}</div>;
  }
  if (data?.data?.length === 0) {
    return <div>Empty</div>;
  }
  let preloadImg = 0;
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        {/* @ts-ignore */}
        {data?.products.map((item, i) => {
          preloadImg++;
          return (
            <div className="card bg-base-100 w-96 shadow-xl" key={item.id}>
              <figure>
                <Image
                  alt="Shoes"
                  height={300}
                  loading={preloadImg <= 3 ? 'eager' : 'lazy'}
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
        })}
      </div>
      <div className="flex justfiy-center">
        <ProductPagination skip={data.skip} total={data.total} />
      </div>
    </div>
  );
};

export default CategoryProductList;
