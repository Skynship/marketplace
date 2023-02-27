import products from "data/product-database";
import bazaarReactDatabase from "data/bazaar-react-database";
import { products as furniture } from "../furniture/data";
const dbProducts = [...bazaarReactDatabase, ...products];

// all used products in the bazaar template
const productList = [...dbProducts, ...furniture];

// get unique products from prouct list
const uniqueProudcts = [...new Set(productList.map(item => item.slug))].map(item => productList.find(it => it.slug === item));

// get the all slugs
const slugs = uniqueProudcts.map(item => ({
  params: {
    slug: item.slug
  }
}));

// get product names for search
const search = uniqueProudcts.slice(0, 6).map(item => item.title);
export { uniqueProudcts, slugs, search };