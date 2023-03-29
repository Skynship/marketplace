import shopifyFetch from 'utils/fetchers/shopify';
import { getProductByHandle as buildProductByHandle } from 'utils/queries/products';

export async function getProductByHandle(handle) {
  return await shopifyFetch({
    query: buildProductByHandle(handle)
  });
};