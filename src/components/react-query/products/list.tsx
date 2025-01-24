'use client';

import { useFetchProducts } from '@/apis/dummyjson/products/client';
import useQueryParams from '@/hooks/query-params';

const ProductList: React.FC = () => {
  const { urlSearchParams } = useQueryParams();
  const { data, isFetching, error } = useFetchProducts({
    params: {
      limit: urlSearchParams.get('limit') ?? undefined,
      category: urlSearchParams.get('category') ?? undefined,
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
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default ProductList;
