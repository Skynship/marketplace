import SEO from "components/SEO";
import { Box, Container } from "@mui/material";
import DropLayout from "components/layouts/dropLayout";
import ProductList from "pages-sections/skyndrop/ProductList";
import api from "utils/__api__/fashion-shop";
// =======================================================

const FashionShop1 = props => {
  return (
    <DropLayout showTopbar={false} showNavbar={false}>
      <SEO title="Skynship drop, marketplace curated by estheticians" />
      <Box sx={{
        backgroundColor: 'theme.palette.primary.cream',
        padding: '25px 0px',
        overFlow: 'hidden',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Container sx={{ 'margin': '0rem 0rem 10rem 0rem' }}>
          <ProductList products={props.trendingItems} />
        </Container>
      </Box>
    </DropLayout>
  );
};

export const getStaticProps = async () => {
  const trendingItems = await api.getTrendingItems();
  return {
    props: {
      trendingItems
    }
  };
};
export default FashionShop1;