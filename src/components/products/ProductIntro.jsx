import Link from "next/link";
import { useState, Fragment } from "react";
// import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Grid } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H4, H6 } from "components/Typography";
import { SubNav } from "components/primitives/SubNav";
import { useAppContext } from "contexts/AppContext";
import { FlexBox, FlexRowCenter } from "../flex-box";
import { currency } from "lib";
import productVariants from "data/product-variants";
// import ProductDescription from "components/products/ProductDescription";

const getMinVariantPrice = (priceRange = {}) => {
  return priceRange?.minVariantPrice?.amount || '-';
};

const getImageSrc = (imageEdges = {}, selectedImageIdx) => {
  return (imageEdges?.edges || [])[selectedImageIdx]?.node?.src;
};

const ProductIntro = ({
  product
}) => {
  const {
    id,
    priceRange = {},
    title,
    images: imageEdges,
    handle: slug,
    thumbnail,
    description,
    vendor,
    tags = []
  } = product;

  // RETRIEVE INDIVIDUAL FIELDS
  const price = getMinVariantPrice(priceRange);
  const fullName = vendor;

  const {
    state,
    dispatch
  } = useAppContext();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectVariants, setSelectVariants] = useState({
    option: "option 1",
    type: "type 1"
  });

  // HANDLE CHAMGE TYPE AND OPTIONS
  const handleChangeVariant = (variantName, value) => () => {
    setSelectVariants(state => ({
      ...state,
      [variantName.toLowerCase()]: value
    }));
  };

  // CHECK PRODUCT EXIST OR NOT IN THE CART
  const cartItem = state.cart.items.find(item => item.id === id);

  // HANDLE SELECT IMAGE
  const handleImageClick = ind => () => setSelectedImage(ind);

  // HANDLE CHANGE CART
  const handleCartAmountChange = amount => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        price,
        qty: amount,
        name: title,
        imgUrl: getImageSrc(imageEdges, selectedImage),
        id,
        slug
      }
    });
  };

  return <Box width="100%" sx={{ 'display': 'flex', 'flexDirection': ['column', 'row'] }}>
      <Grid sx={{'backgroundColor': 'primary.900', 'marginBottom': ['20px', '0px'], 'display': 'flex', 'alignItems': 'center', 'padding': ['20px 0px', '0px 40px']}}>
        <FlexBox sx={{'padding': '20px 0px', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
          <Box sx={{ 'padding': '10px 0px' }}>
            <SubNav items={[
              {
                text: 'Shop All',
                href: '/marketplace'
              },
              {
                text: 'Products'
              },
              {
                text: title // ,
                // href: `/product/${slug}`
              }
            ]} />
          </Box>
          <LazyImage alt={title} width={500} height={500} loading="eager" objectFit="contain" src={getImageSrc(imageEdges, selectedImage)} />
        </FlexBox>
      </Grid>

      <Grid item md={4} xs={12} sx={{'display': 'flex', 'flexGrow': '1', 'justifyContent': 'center', 'cursor': 'default', 'padding': ['0px 20px', '0px'] }}>
        <Box sx={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
          <Box sx={{'width': ['100%', '50%']}}>
            <H1 sx={{'marginBottom': ['0px', '8px']}}>{title.toUpperCase()}</H1>

            <FlexBox sx={{'marginBottom': ['0px', '4px'], 'display': 'flex', 'flexWrap': 'wrap'}}>
              <Box sx={{'fontSize': '16px'}}>
                Aesthetician: <Link href={`/esthetician/${vendor.split(' ').join('-').toLowerCase()}`}><Box component="span" sx={{'fontWeight': '600', 'cursor': 'pointer'}}>{vendor}</Box></Link>
              </Box>
            </FlexBox>
            <Box pt={1} sx={{'marginBottom': ['8px', '10px']}}>
              <H2 color="primary.main" sx={{'marginBottom': ['0px', '6px']}} lineHeight="1">
                {currency(price)}
              </H2>
              <Box color="inherit">Available</Box>
            </Box>

            <FlexBox sx={{'marginBottom': ['8px', '10px']}}>
              {tags.map((tag, idx) => {
                return <Box key={idx} sx={{'fontSize': '16px', 'fontWeight': '600'}}>{tag} &nbsp;</Box>
              })}
            </FlexBox>

            <Box sx={{'marginBottom': '20px'}}>
              <H3 mb={1}>Description:</H3>
              <Box sx={{'fontSize': '16px'}}>{ description }</Box>
            </Box>

            <Box sx={{'display': 'flex', 'justifyContent': 'center'}}>
              {!cartItem?.qty ? <Button color="primary" variant="contained" onClick={handleCartAmountChange(1)} sx={{
                mb: 4.5,
                px: "1.75rem",
                height: 40
              }}>
                  Add to Cart
                </Button> : <FlexBox alignItems="center" mb={4.5}>
                  <Button size="small" sx={{
                p: 1
              }} color="primary" variant="outlined" onClick={handleCartAmountChange(cartItem?.qty - 1)}>
                    {/*<Remove fontSize="small" />*/}
                  </Button>

                  <H3 fontWeight="600" mx={2.5} sx={{'width': '40px', 'textAlign': 'center'}}>
                    {cartItem?.qty.toString().padStart(2, "0")}
                  </H3>

                  <Button size="small" sx={{
                p: 1
              }} color="primary" variant="outlined" onClick={handleCartAmountChange(cartItem?.qty + 1)}>
                    {/*<Add fontSize="small" />*/}
                  </Button>
                </FlexBox>}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>;
};

export default ProductIntro;