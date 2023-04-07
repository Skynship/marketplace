import shopifyFetch from 'utils/fetchers/shopify';
import { productsList } from 'utils/queries/products';

export async function getAllProducts() {
  return await shopifyFetch({
    query: productsList
  });
};