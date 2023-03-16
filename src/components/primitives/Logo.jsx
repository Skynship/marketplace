// Dependencies
import React from 'react';
import Link from 'next/link';
import { Box } from "@mui/material";

export default class Logo extends React.PureComponent {
  render() {
    const { isDark = false } = this.props;

    return (
      <Link href="/">
        <Box component="span" sx={{
          color: isDark ? '#1B263E' : 'primary.900',
          fontSize: ['20px', '22px', '24px'],
          fontWeight: 900,
          cursor: 'pointer'
        }}>
          Skynship
        </Box>
      </Link>
    );
  }
};