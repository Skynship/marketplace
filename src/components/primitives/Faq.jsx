// Dependencies
import React from 'react';
import { Box, Button } from "@mui/material";
import { H2, H3 } from "components/Typography";

import { FormattedMessage } from 'react-intl';

export default class Faq extends React.PureComponent {
    render() {
        const { labelId, items = [] } = this.props;

        return (
            <Box sx={{ 'paddingTop': '20px', 'color': '#1B263E', 'fontWeight': '700' }}>
                <Box sx={{
                    'display': 'flex',
                    'flexDirection': 'column',
                    'alignItems': 'center',
                    'justifyContent': 'center'
                }}>
                    <Box sx={{'width': ['100%', '100%', '880px'] }}>
                        <H2 sx={{'marginBottom': '40px', 'textAlign': 'center', 'fontSize': '25px'}}>
                            <FormattedMessage id={labelId} />
                        </H2>
                        <Box sx={{'display': 'flex', 'flexDirection': 'column'}}>
                            {
                                items.map(({ title, content }, idx) => {
                                    return <FaqItem key={idx} title={title} content={content} />
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
};

export class FaqItem extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    handleItemClicked = () => {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        const { title, content } = this.props;
        const { isExpanded = false } = this.state;

        return (
            <Button sx={{padding: '0px', 'width': '100%', 'display': 'flex', 'justifyContent': 'start', borderTop: '2px solid rgba(0,0,0,.1)'}} onClick={this.handleItemClicked}>
                <H3>
                    <Box sx={{ 'paddingTop': '20px', 'paddingBottom': '20px', 'textAlign': 'start' }}>
                        {title}
                    </Box>
                    <Box sx={{ 'paddingTop': '10px', 'paddingBottom': '10px', 'fontSize': '18px', 'display': isExpanded ? 'default' : 'none', 'textAlign': 'start', 'fontWeight': '500' }}>
                        {content}
                    </Box>
                </H3>
            </Button>
        );
    }
}