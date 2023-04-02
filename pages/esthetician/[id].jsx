import { useState } from "react";
import { useRouter } from "next/router";
import LazyImage from "components/LazyImage";
import { Box, styled, Grid } from "@mui/material";
import { H1, H2, H3 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { FlexBox } from "components/flex-box";
import { SubNav } from "components/primitives/SubNav";

const ESTHETICIANS_BY_VENDOR = {
  neubiome: {
    name: 'Lela J. Han',
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1678836188/Skynship/DTS_Skin_Deep_Daniel_Faro%CC%80_4253_enefus.jpg',
    description: 'Probiotic skincare powered by science, curated from the highest quality bioferment and plant-based clean ingredients to heal dryness and restore radiance.'
  },
  topicals: {
    name: 'Jessie Pinkman',
    imgSrc: 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1678732018/Skynship/photo-1580491934306-acf5f6886d90_hjwwl5.jpg',
    description: 'Topicals offers skin care products for skin conditions such as eczema and hyperpigmentation.'
  }
};

const Esthetician = props => {
  const { query } = useRouter();
  const { id } = query;

  if (!id) {
    return null;
  }

  const vendor = id;
  const { name, imgSrc, description } = ESTHETICIANS_BY_VENDOR[id] || {};

  return <ShopLayout1 sxSectionAfterSticky={{'display': 'flex', 'flexDirection': 'column', 'flexGrow': '1'}}>
      <Box sx={{
        my: 0,
        maxWidth: '100% !important',
        padding: '15px 0px 0px 0px !important',
        display: 'flex',
        flexGrow: '1'
      }}>
        <Box width="100%" sx={{ 'display': 'flex', 'flexDirection': ['column', 'row'] }}>
          <Grid sx={{'backgroundColor': 'primary.900', 'marginBottom': ['20px', '0px'], 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'padding': ['20px 0px', '0px 40px']}}>
            <FlexBox justifyContent="center" sx={{'padding': '20px 0px', 'display': ['none', 'block']}}>
              <Box sx={{ 'padding': '10px 0px', 'display': 'flex', 'justifyContent': 'center' }}>
                <SubNav items={[
                  {
                    text: 'Shop All',
                    href: '/marketplace'
                  },
                  {
                    text: 'Estheticians'
                  },
                  {
                    text: name,
                    href: `/esthetician/${id}`
                  }
                ]} />
              </Box>
              <LazyImage alt={vendor} width={500} height={500} loading="eager" borderRadius="50%" objectFit="cover" src={imgSrc} />
            </FlexBox>
            <FlexBox sx={{'padding': '20px 0px', 'display': ['block', 'none'], 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
              <Box sx={{ 'padding': '10px 0px', 'display': 'flex', 'justifyContent': 'center' }}>
                <SubNav items={[
                  {
                    text: 'Shop All',
                    href: '/marketplace'
                  },
                  {
                    text: 'Estheticians'
                  },
                  {
                    text: name,
                    href: `/esthetician/${id}`
                  }
                ]} />
              </Box>
              <LazyImage alt={vendor} width={300} height={300} loading="eager" borderRadius="50%" objectFit="cover" src={imgSrc} />
            </FlexBox>
          </Grid>

          <Grid item md={4} xs={12} sx={{'display': 'flex', 'flexGrow': '1', 'justifyContent': 'center', 'cursor': 'default', 'padding': ['0px 20px', '0px'] }}>
            <Box sx={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}}>
              <Box sx={{'width': ['100%', '70%']}}>
                <H1 sx={{'marginBottom': ['0px', '8px']}}>{vendor.toUpperCase()}</H1>
                <FlexBox sx={{'margin': ['10px 0px', '8px 0px'], 'display': 'flex', 'flexWrap': 'wrap'}}>
                  <Box sx={{'fontSize': '16px'}}>
                    Aesthetician: <Box component="span" sx={{'fontWeight': '600'}}>{name}</Box>
                  </Box>
                </FlexBox>

                <Box sx={{'marginBottom': '20px'}}>
                  <H3 mb={1}>Description:</H3>
                  <Box sx={{'fontSize': '16px'}}>{ description }</Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </ShopLayout1>;
};

export default Esthetician;