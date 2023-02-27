import { Box } from "@mui/material";
import { H3 } from "components/Typography";

// ======================================================

// ======================================================

const ProductDescription = ({
  descriptions = []
}) => {
  return <Box>
      <H3 mb={2}>Description:</H3>
      <Box>
        {/*{
          descriptions.map(({ labelId, value }) => {
            <span>{labelId}: {value}<br /></span>
          })
        }*/}
        Brand: Beats <br />
        Model: S450 <br />
        Wireless Bluetooth Headset <br />
        FM Frequency Response: 87.5 – 108 MHz <br />
        Feature: FM Radio, Card Supported (Micro SD / TF) <br />
        Made in China <br />
      </Box>
    </Box>;
};
export default ProductDescription;