// Dependencies
import React from 'react';
// import { Box, Container } from "@mui/material";
// import { H1 } from "components/Typography";
// import SEO from "components/SEO";

// // Utils
// import shopifyFetch from "utils/fetchers/shopify";
// import { productsList } from "utils/queries/products";

// // Primitives
// import Countdown from 'components/primitives/Countdown';

// // Layouts
// import DropLayout from "components/layouts/dropLayout";

// // Sections
// import ProductList from "pages-sections/skyndrop/ProductList";

// // Configs
// import { COUNTDOWN_DATE } from '../src/configs/countdown';

class Marketplace extends React.PureComponent {
    render() {
        return (
            <div>im a div</div>
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
        }
    }
}

export default Marketplace;