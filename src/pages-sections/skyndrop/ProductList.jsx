import { Grid } from "@mui/material";
import MainCard from "components/product-cards/MainCard";
// =============================================================

const STAGGER_PX = 50;

const ProductList = ({ products }) => {
  return <Grid sx={{ 'display': 'flex', 'justifyContent': 'center' }} container spacing={4}>
      <Grid item container md={12} xs={16} spacing={2}>
        {
          products.map(({ title, slug, price, thumbnail }, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <Grid key={idx} item md={3} xs={12} sx={{
                'marginTop': isEven ? `${STAGGER_PX}px` : '0px',
                'paddingBottom': '20px',
                'paddingRight': '16px',
                '&:hover': {
                  color: 'white !important',
                  backgroundColor: '#FF2F17',
                }
              }}>
                <MainCard hideReview hideFavoriteIcon hidePrice id={title} slug={slug} title={title} price={price} imgUrl={thumbnail} />
              </Grid>
            );
          })
        }
      </Grid>
    </Grid>;
};

export default ProductList;