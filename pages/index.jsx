// Dependencies
import React from 'react';
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { H1, H2, H3 } from "components/Typography";
import * as yup from "yup";

import Faq from 'components/primitives/Faq';
import SubscribeForm from "components/primitives/SubscribeForm";
import ShopLayout1 from "components/layouts/ShopLayout1";

// Configs
import { FAQ_ITEMS } from '../src/configs/faq';

export default class Marketplace extends React.PureComponent {
    render() {
		const rightNavItem = (
			<Link href="/marketplace" passHref>
				<Button type="button" variant="outlined" color="primary" sx={{'padding': ['7px 25px', '10px 25px'], 'backgroundColor': 'transparent !important'}}>
			      Shop
			    </Button>
		    </Link>
		);

        return (
            <Box sx={{
                'display': 'flex',
                'flexDirection': 'column',
                'height': '100%'
            }}>
                <ShopLayout1 isLogoShown={false} isCartShown={false} sxSectionAfterSticky={{
                    'flexGrow': '1'
                }} rightChildren={rightNavItem}>
                    <Box sx={{
                        'height': '100vh',
                        'display': 'flex',
                        'backgroundColor': '#f5f6f1',
                        'backgroundRepeat': 'no-repeat',
                        'filter': 'contrast(100%)',
                        'backgroundSize': 'cover',
                        'backgroundImage': 'url(https://res.cloudinary.com/bytesizedpieces/image/upload/v1678836417/Skynship/DTS_Skin_Deep_Daniel_Faro%CC%80_4260_rv34om.jpg)'
                    }}>
                        <Box sx={{'display': 'flex', 'flexDirection': 'column', 'flexGrow': 1, 'padding': '24px 20px'}}>
                            <Box sx={{
                                'color': '#1B263E',
                                'fontWeight': '700',
                                'display': 'flex',
                                'flexDirection': 'column',
                                'justifyContent': 'center',
                                'alignItems': 'center',
                                'flexGrow': 1
                            }}>
                                <H1 sx={{
                                    'color': '#FF2F17',
                                    'cursor': 'default',
                                    'fontSize': ['70px', '140px', '240px'],
                                    'fontWeight': '900'

                                }}>
                                    Skynship
                                </H1>
                                <H2 sx={{
                                	'position': 'relative',
                                	'textAlign': 'center',
                                	'zIndex': '1',
                                    'fontSize': ['22px', '35px', '40px'],
                                    'color': '#1B263E',
                                    'width': ['100%', '80%'],
                                    'cursor': 'default',
                                    'fontWeight': '600',
                                    'marginBottom': ['60px', '0px']
                                }}>
                                    Skin health begins with knowledge
                                </H2>
                                <H3 sx={{
                                    'color': '#1B263E',
                                    'display': ['none', 'block', 'block'],
                                    'fontWeight': ['700', '600', '600'],
                                    'fontSize': ['18px', '25px'],
                                    'marginTop': '20px',
                                    'marginBottom': ['60px', '80px'],
                                    'textAlign': 'center',
                                    'width': ['100%', '50%', '40%', '30%'],
                                    'cursor': 'default'
                                }}>
                                    We are a mindful skin platform on a mission to help you understand your outer shell, and optimize your care regimen.
                                </H3>
								<Box sx={{'width': ['100%', '100%', '43%']}}>
									<SubscribeForm />
								</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{'paddingBottom': '50px', 'padding': '24px 20px' }}>
                    	<Faq labelId="FAQ" items={FAQ_ITEMS} />
                    </Box>
                </ShopLayout1>
            </Box>
        );
    }
}

// uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  shipping_email: yup.string().email("invalid email").required("required")
});