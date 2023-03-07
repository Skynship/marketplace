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
				<Button type="button" variant="outlined" color="primary" sx={{'padding': ['7px 25px', '10px 25px']}}>
			      Marketplace
			    </Button>
		    </Link>
		);

        return (
            <Box sx={{
                'display': 'flex',
                'flexDirection': 'column',
                'height': '100%'
            }}>
                <ShopLayout1 isCartShown={false} sxSectionAfterSticky={{
                    'flexGrow': '1',
                    'padding': ['24px 20px', '24px 20px', '24px 0px 40px 0px']
                }} rightChildren={rightNavItem}>
                    <Box sx={{
                        'height': '90vh',
                        'display': 'flex',
                        'backgroundColor': '#f5f6f1'
                    }}>
                        <Box sx={{'display': 'flex', 'flexDirection': 'column', 'flexGrow': 1}}>
                            <Box sx={{
                                'color': '#1B263E',
                                'fontWeight': '700',
                                'display': 'flex',
                                'flexDirection': 'column',
                                'justifyContent': 'center',
                                'alignItems': 'center',
                                'flexGrow': 1,
                                'marginTop': '18px'
                            }}>
                                <H1 sx={{
                                	'position': 'relative',
                                	'textAlign': 'center',
                                	'zIndex': '1',
                                	'fontSize': ['30px', '40px', '50px']
                                }}>
                               		<Box component='span'>
	                                    We’re on a mission to change our <br />
	                                    <Box component='span' sx={{ 'color': '#FF2F17' }}> relationship with our skin.</Box>
                                    </Box>
                                    <Box sx={{
                                        'position': 'absolute',
                                        'backgroundColor': '#FF2F17',
                                        'width': ['60%', '45%'],
                                        'height': '150px',
                                        'zIndex': '-1',
                                        'top': '-80px',
                                        'left': ['30%', '10%']
                                    }} />
                                </H1>
                                <H2 sx={{
                                	'color': '#595959',
                                	'fontWeight': '500',
                                	'fontSize': ['18px', '20px', '25px'],
                                	'marginTop': '20px',
									'marginBottom': ['60px', '80px'],
									'textAlign': 'center'
                                }}>
                                	Skynship is a discovery platform for optimal skin health and self acceptance
                                </H2>
								<Box sx={{'width': ['100%', '100%', '43%']}}>
									<SubscribeForm />
								</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{'paddingBottom': '50px' }}>
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