// Dependencies
import React from 'react';
import { Box } from "@mui/material";
import { H1 } from "components/Typography";

import Countdown from 'components/primitives/Countdown';
import ShopLayout1 from "components/layouts/ShopLayout1";

export default class Marketplace extends React.PureComponent {
    render() {
        return (
            <Box sx={{
                'display': 'flex',
                'flexDirection': 'column',
                'height': '100%',
                'minHeight': '100vh'
            }}>
                <ShopLayout1 isCartShown={false} sxSectionAfterSticky={{
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'flexGrow': '1'
                }}>
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
                                        backgroundColor: '#FF2F17',
                                        'width': ['60%', '45%'],
                                        'height': '150px',
                                        'zIndex': '-1',
                                        'top': '-20px',
                                        'left': ['30%', '15%']
                                    }} />
                                </H1>
                                <Box sx={{'zIndex': '10'}}>
                                    <Countdown releaseDateStr="March 17, 2023" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </ShopLayout1>
            </Box>
        );
    }
}