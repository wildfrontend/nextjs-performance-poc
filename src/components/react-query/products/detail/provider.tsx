'use client';

import { PropsWithChildren, createContext, useContext } from 'react';

import { Product } from '@/types/pages/products';

const ProductContext = createContext<any>(undefined);

const ProductProvider: React.FC<PropsWithChildren<{ product: Product }>> = ({
  children,
  product,
}) => {
  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

// 3. 提供 Hook 讓其他元件存取
export const useProductDetail = () => {
  return useContext<{ product: Product }>(ProductContext);
};

export default ProductProvider;
