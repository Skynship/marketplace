import Link from "next/link";
import { Box } from "@mui/material";
import { H4 } from "components/Typography";
import { Fragment } from "react";

export const SubNav = ({ items = [] }) => {
  return (
    <Box sx={{'display': 'flex', 'alignItems': 'center', 'color': 'white !important' }}>
      {
        items.map(({ text, href }, idx) => {
          const textComp = <H4 key={idx} sx={{
            'maxWidth': ['160px', '220px'],
            'overflow': 'hidden',
            'whiteSpace': 'nowrap',
            'textOverflow': 'ellipsis',
            'padding': '0px 10px',
            'cursor': href ? 'pointer' : 'default',
            'fontWeight': href ? '800 !important' : '600 !important'
          }}>
            {text}
          </H4>;

          const isLast = idx === items.length - 1;
          return href ? (
            <Fragment key={idx}>
              <Link href={href}>
                {textComp}
              </Link>
              { !isLast ? `/` : null }
            </Fragment>
          ) : (
            <Fragment key={idx}>
              {textComp}
              { !isLast ? `/` : null }
            </Fragment>
          );
        })
      }
    </Box>
  );
};