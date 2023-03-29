import { Box } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import HoverBox from "components/HoverBox";
import { H4 } from "components/Typography";
import BazaarRating from "components/BazaarRating";
import { FlexBetween, FlexBox } from "components/flex-box";
import { calculateDiscount, currency } from "lib";

// ===========================================================

// ===========================================================

const MainCard = ({
  id,
  slug,
  title,
  description,
  price,
  imgUrl,
  rating,
  off,
  hideReview,
  hideFavoriteIcon,
  hidePrice
}) => {
  return <Box sx={{ 'display': 'flex', 'alignItems': 'center', 'flexDirection': 'column' }}>
      <Box sx={{'display': 'flex', 'justifyContent': 'flex-end'}}>
        <Box component="img" src={imgUrl} sx={{'width': ['200px', '100%'], 'mx': 'auto'}} height="auto" alt={title} mx="auto" />
      </Box>
      <FlexBetween sx={{ 'width': '100%' }}>
        <Box mt="1rem" sx={{ 'width': '100%' }}>
          <H4 whiteSpace="normal !important" overflow="auto !important" textOverflow="initial !important" wordwrap="break-word" textAlign="center" fontWeight="600" fontSize="14px" mb={0.5} title={title} ellipsis>
            {title}
          </H4>
          {!hideReview && <BazaarRating value={rating} color="warn" readOnly />}

          {
            hidePrice ? null : (
              <FlexBox alignItems="center">
                {
                  off ? (
                    <Box pr={1} fontWeight="600" color="primary.main">
                      {calculateDiscount(price, off)}
                    </Box>
                  ) : null
                }
                <Box color="grey.600" fontWeight="600">
                  {currency(price)}
                </Box>
              </FlexBox>
            )
          }
        </Box>

        {!hideFavoriteIcon && <FavoriteBorder fontSize="small" color="secondary" sx={{
          opacity: 0.5,
          m: "1rem"
        }} />}
      </FlexBetween>
    </Box>;
};
export default MainCard;