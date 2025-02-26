'use client';

import ProductContent from './content';
import { useProductDetail } from './provider';

const ProductDetail: React.FC = () => {
  const { product } = useProductDetail();
  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <ProductContent product={product} />
    </div>
  );
};

export default ProductDetail;
