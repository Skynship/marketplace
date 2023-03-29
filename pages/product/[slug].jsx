import { useState } from "react";
import { useRouter } from "next/router";
import { Box, styled } from "@mui/material";
import { H2 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductIntro from "components/products/ProductIntro";
// import ProductReview from "components/products/ProductReview";

// Utils
import shopifyFetch from "utils/fetchers/shopify";
import { getProductByHandle } from "utils/queries/products";

const ProductDetails = props => {
  const { product } = props;
  const router = useRouter();

  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <ShopLayout1 sxSectionAfterSticky={{'display': 'flex', 'flexDirection': 'column', 'flexGrow': '1'}}>
      <Box sx={{
        my: 0,
        maxWidth: '100% !important',
        padding: '15px 0px 0px 0px !important',
        display: 'flex',
        flexGrow: '1'
      }}>
        {/* PRODUCT DETAILS INFO AREA */}
        {product ? <ProductIntro product={product} /> : <H2>Loading...</H2>}
      </Box>
    </ShopLayout1>;
};

export async function getServerSideProps(context) {
    const { params = {} } = context;
    const { slug } = params;

    const { data, errors } = await shopifyFetch({
      query: getProductByHandle(slug)
    });

    return {
        props: {
            product: data?.product || {}
        }
    }
}

export default ProductDetails;