import Link from "next/link";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Grid } from "@mui/material";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { FlexBox, FlexRowCenter } from "../flex-box";
import { currency } from "lib";
import productVariants from "data/product-variants";
// import ProductDescription from "components/products/ProductDescription";

// ================================================================

// ================================================================

const ProductIntro = ({
  product
}) => {
  const {
    id,
    price,
    title,
    images,
    slug,
    thumbnail,
    description,
    vendor = {}
  } = product;
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
        imgUrl: thumbnail,
        id,
        slug
      }
    });
  };

  const fullName = `${vendor.firstName} ${vendor.lastName}`;

  return <Box width="100%" sx={{ 'display': 'flex', 'flexDirection': ['column', 'row'] }}>
      <Grid sx={{'backgroundColor': 'primary.900', 'marginBottom': ['20px', '0px']}}>
        <FlexBox justifyContent="center" sx={{'padding': '20px 0px'}}>
          <LazyImage alt={title} width={700} height={700} loading="eager" objectFit="contain" src={product.images[selectedImage]} />
        </FlexBox>

        {/*<FlexBox overflow="auto">
          {images.map((url, ind) => <FlexRowCenter key={ind} width={64} height={64} minWidth={64} bgcolor="white" border="1px solid" borderRadius="10px" ml={ind === 0 ? "auto" : 0} style={{
          cursor: "pointer"
        }} onClick={handleImageClick(ind)} mr={ind === images.length - 1 ? "auto" : "10px"} borderColor={selectedImage === ind ? "primary.main" : "grey.400"}>
              <Avatar src={url} variant="square" sx={{
            height: 40
          }} />
            </FlexRowCenter>)}
        </FlexBox>*/}
      </Grid>

      <Grid item md={4} xs={12} sx={{'display': 'flex', 'flexGrow': '1', 'justifyContent': 'center', 'cursor': 'default' }}>
        <div>
          <H1 sx={{'marginBottom': ['0px', '8px']}}>{title}</H1>

          <FlexBox alignItems="center" sx={{'marinBottom': ['0px', '4px']}}>
            <Box sx={{'fontSize': '16px'}}>
              Aesthetician: <Box component="span" sx={{'fontWeight': '600', 'cursor': 'pointer'}}>{fullName}</Box>
            </Box>
          </FlexBox>

          {/*<FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating color="warn" fontSize="1.25rem" value={4} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>*/}

          {/*{productVariants.map(variant => <Box key={variant.id} mb={2}>
              <H6 mb={1}>{variant.title}</H6>

              {variant.values.map(({
            id,
            value
          }) => <Chip key={id} label={value} onClick={handleChangeVariant(variant.title, value)} sx={{
            borderRadius: "4px",
            mr: 1,
            cursor: "pointer"
          }} color={selectVariants[variant.title.toLowerCase()] === value ? "primary" : "default"} />)}
            </Box>)}*/}

          <Box pt={1} sx={{'marginBottom': ['8px', '10px']}}>
            <H2 color="primary.main" sx={{'marginBottom': ['0px', '6px']}} lineHeight="1">
              {currency(price)}
            </H2>
            <Box color="inherit">Available</Box>
          </Box>

          <Box sx={{'marginBottom': '20px'}}>
            <H3 mb={1}>Description:</H3>
            <Box sx={{'fontSize': '16px'}}>{ description }</Box>
          </Box>

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
                <Remove fontSize="small" />
              </Button>

              <H3 fontWeight="600" mx={2.5} sx={{'width': '40px', 'textAlign': 'center'}}>
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <Button size="small" sx={{
            p: 1
          }} color="primary" variant="outlined" onClick={handleCartAmountChange(cartItem?.qty + 1)}>
                <Add fontSize="small" />
              </Button>
            </FlexBox>}

          {/*<FlexBox alignItems="center" mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shops/scarlett-beauty" passHref>
              <a>
                <H6 ml={1}>Mobile Store</H6>
              </a>
            </Link>
          </FlexBox>*/}
        </div>
      </Grid>
    </Box>;
};
export default ProductIntro;