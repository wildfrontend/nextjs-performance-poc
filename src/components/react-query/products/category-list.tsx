'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useFetchProductsByCategory } from '@/apis/dummyjson/products/client';
import useQueryParams from '@/hooks/query-params';

const CategoryProductList: React.FC = () => {
  const params = useParams<{ category: string }>();
  const { urlSearchParams } = useQueryParams();
  const { data, isFetching, error } = useFetchProductsByCategory({
    category: params.category,
    params: {
      limit: urlSearchParams.get('limit') ?? undefined,
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
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* @ts-ignore */}
      {data?.products.map((item, i) => {
        return (
          <div className="card bg-base-100 w-96 shadow-xl" key={item.id}>
            <figure>
              <Image
                alt="Shoes"
                height={300}
                src={item.thumbnail}
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
  );
};

export default CategoryProductList;
