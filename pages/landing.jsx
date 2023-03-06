// Dependencies
import React from 'react';
import { Box } from "@mui/material";
import { H1, H2 } from "components/Typography";

import Faq from 'components/primitives/Faq';
import ShopLayout1 from "components/layouts/ShopLayout1";

// Configs
import { FAQ_ITEMS } from '../src/configs/faq';

export default class Marketplace extends React.PureComponent {
    render() {
        return (
            <Box sx={{
                'display': 'flex',
                'flexDirection': 'column',
                'height': '100%'
            }}>
                <ShopLayout1 isCartShown={false} sxSectionAfterSticky={{
                    'flexGrow': '1',
                    'padding': ['24px 20px', '24px 0px 40px 0px']
                }}>
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
                                        'top': '-60px',
                                        'left': ['30%', '10%']
                                    }} />
                                </H1>
                                <H2 sx={{
                                	'color': '#595959',
                                	'fontWeight': '500',
                                	'fontSize': ['18px', '20px', '25px'],
                                	'marginTop': '20px',
                                	'textAlign': 'center'
                                }}>
                                	Skynship is a discovery platform for optimal skin health and self acceptance
                                </H2>
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