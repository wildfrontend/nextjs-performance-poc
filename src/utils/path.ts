import { compile } from 'path-to-regexp';

export const generateProductLink = (productId: string | number) => {
  return compile('/react-query/products/:productId')({
    productId: `${productId}`,
  });
};
