import { useState } from "react";
import { useRouter } from "next/router";
import { Box, styled } from "@mui/material";
import { H2 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductIntro from "components/products/ProductIntro";
import ProductReview from "components/products/ProductReview";
import api from "utils/__api__/products";

// ===============================================================

// ===============================================================

const ProductDetails = props => {
  const {
    product
  } = props;
  const router = useRouter();

  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <ShopLayout1>
      <Box sx={{
        my: 0,
        maxWidth: '100% !important',
        padding: '15px 0px 0px 0px !important'
      }}>
        {/* PRODUCT DETAILS INFO AREA */}
        {product ? <ProductIntro product={product} /> : <H2>Loading...</H2>}
      </Box>
    </ShopLayout1>;
};

export const getStaticPaths = async () => {
  const paths = await api.getSlugs();
  return {
    paths: paths,
    //indicates that no page needs be created at build time
    fallback: "blocking" // indicates the type of fallback
  };
};

export const getStaticProps = async ({
  params
}) => {
  const product = await api.getProduct(params.slug);

  return {
    props: {
      product
    }
  };
};
export default ProductDetails;