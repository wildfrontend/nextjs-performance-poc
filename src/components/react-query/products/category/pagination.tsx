import React, { useMemo } from 'react';

import useQueryParams from '@/hooks/global/query-params';

const ProductPagination: React.FC<{ total: number; currentTotal: number }> = ({
  total,
  currentTotal,
}) => {
  const { setQueryParams } = useQueryParams();
  const limit = 3;
  const pages = useMemo(() => Math.ceil(total / limit), [total]);
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);
  return (
    <div className="join">
      {pageNumbers.map((pageNo) => {
        const value = pageNo - 1;
        const page = Math.ceil(currentTotal / limit);
        return (
          <button
            className={`join-item btn ${page === value ? 'btn-active' : ''}`}
            key={pageNo}
            onClick={() =>
              setQueryParams({ page: value > 0 ? value : undefined })
            }
          >
            {pageNo}
          </button>
        );
      })}
    </div>
  );
};

export default ProductPagination;
