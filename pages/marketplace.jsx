// Dependencies
import React from 'react';
import { Box, Container } from "@mui/material";
import { H1 } from "components/Typography";
import SEO from "components/SEO";

// Utils
import shopifyFetch from "utils/fetchers/shopify";
import { productsList } from "utils/queries/products";

// Primitives
import Countdown from 'components/primitives/Countdown';

// Layouts
import DropLayout from "components/layouts/dropLayout";

// Sections
// import ProductList from "pages-sections/skyndrop/ProductList";

// Configs
import { COUNTDOWN_DATE } from '../src/configs/countdown';

class Marketplace extends React.PureComponent {
    render() {
        const { products = [] } = this.props;

        const marketplace = (
            <DropLayout showTopbar={false} showNavbar={false}>
              <SEO title="Skynship drop, marketplace curated by estheticians" />
              <Box sx={{
                backgroundColor: 'theme.palette.primary.cream',
                overFlow: 'hidden',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Container sx={{ 'margin': '0px !important', 'padding': '0px !important' }}>
                  <ProductList products={products} />
                </Container>
              </Box>
            </DropLayout>
        );

        if (!COUNTDOWN_DATE) {
            return marketplace;
        }

        return (
            <Box sx={{
                'display': 'flex',
                'flexDirection': 'column',
                'height': '100%',
                'minHeight': '100vh'
            }}>
                <DropLayout showNavbar={false} showTopbar={false} isCartShown={false}>
                    <Box sx={{
                        'height': '100%',
                        'display': 'flex',
                        'backgroundColor': '#f5f6f1',
                        'padding': '24px 0px 40px 0px'
                    }}>
                        <Box sx={{'display': 'flex', 'flexDirection': 'column', 'flexGrow': 1}}>
                            <Box sx={{
                                'color': '#1B263E',
                                'fontSize': '18px',
                                'fontWeight': '600',
                                'display': 'flex',
                                'flexDirection': 'column',
                                'justifyContent': 'center',
                                'alignItems': 'center',
                                'flexGrow': 1,
                                'marginTop': '18px'
                            }}>
                                <H1 sx={{'position': 'relative', 'textAlign': 'center', 'zIndex': '1'}}>
                                    A curated skincare marketplace, from the best estheticians out there.
                                    <Box sx={{
                                        'position': 'absolute',
                                        'backgroundColor': '#FF2F17',
                                        'width': ['60%', '45%'],
                                        'height': '150px',
                                        'zIndex': '-1',
                                        'top': '-20px',
                                        'left': ['30%', '15%']
                                    }} />
                                </H1>
                                <Box sx={{'zIndex': '10'}}>
                                    <Countdown releaseDateStr={COUNTDOWN_DATE} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </DropLayout>
            </Box>
        );
    }
}

export const getServerSideProps = async (context) => {
    // const { data, errors } = await shopifyFetch({
    //     query: productsList
    // });
    console.log('i am in here');

    return {
        props: {
            // products: data?.products?.edges || []
        },
    }
}

export default Marketplace;