import React from 'react';
import Link from "next/link";
import { Grid, Box } from "@mui/material";
import MainCard from "components/product-cards/MainCard";
// =============================================================

const STAGGER_PX = 80;

const getPriceAmount = (price = {}) => {
  return price?.priceRange?.minVariantPrice?.amount;
};

const getFirstImage = (images = {}) => {
  return images?.edges[0]?.node?.src;
};

const ProductList = ({ products }) => {
  const productsComponents = products.map(({ node = {} }, idx) => {
    const { title, price = {}, images = {}, handle: slug } = node;
    const isEven = idx % 2 === 0;

    return (
      <Link href={`/product/${slug}`} key={idx}>
        <Grid item md={3} xs={12} sx={{
          'cursor': 'pointer',
          'marginTop': isEven ? ['0px', `${STAGGER_PX}px`] : '0px',
          'width': '300px',
          'minHeight': isEven ? ['200px', '400px', '92vh'] : 'auto',
          'maxHeight': isEven ? 'auto' : ['auto', 'auto', '92vh'],
          'padding': ['20px 0px', '20px 0px', '0px 30px 20px 30px'],
          'display': 'flex',
          'alignItems': ['center', 'flex-end'],
          'justifyContent': 'center',
          '&:hover': {
            'color': ['inherit !important', 'inherit !important', 'white !important'],
            'backgroundColor': ['inherit', 'inherit', '#FF2F17'],
          }
        }}>
          <MainCard hideReview hideFavoriteIcon hidePrice id={title} slug={slug} title={title} price={getPriceAmount(price)} imgUrl={getFirstImage(images)} />
        </Grid>
      </Link>
    );
  });

  return (
    <React.Fragment>
      <Grid sx={{ 'display': ['none', 'flex'], 'justifyContent': 'center' }} container spacing={4}>
        <Grid item container md={12} xs={16} spacing={2}>
          { productsComponents}
        </Grid>
      </Grid>
      <Box sx={{'display': ['block', 'none']}}>{productsComponents}</Box>
    </React.Fragment>
  );
};

export default ProductList;