import React, { useMemo } from 'react';

import useQueryParams from '@/hooks/query-params';

const ProductPagination: React.FC<{ total: number; skip: number }> = ({
  total,
  skip,
}) => {
  const { setQueryParams } = useQueryParams();
  const limit = 3;
  const pages = useMemo(() => Math.ceil(total / limit), [total]);
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
  return (
    <div className="join">
      {pageNumbers.map((page) => {
        const value = page - 1;
        return (
          <button
            className={`join-item btn ${skip === value ? 'btn-active' : ''}`}
            key={page}
            onClick={() =>
              setQueryParams({ skip: value > 0 ? value : undefined })
            }
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default ProductPagination;
