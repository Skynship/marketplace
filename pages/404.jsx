import Link from "next/link";
import { Box, Button } from "@mui/material";
import { H1 } from "components/Typography";
import { useRouter } from "next/router";
import SEO from "components/SEO";
import BazaarImage from "components/BazaarImage";
import { FlexBox, FlexRowCenter } from "components/flex-box";
const Error404 = () => {
  const router = useRouter();
  const handleGoBack = () => router.back();
  return <FlexRowCenter px={2} minHeight="100vh" flexDirection="column">
      <SEO title="Nothing found" />
      {/*<BazaarImage src="/assets/images/illustrations/404.svg" sx={{
        display: "block",
        maxWidth: 320,
        width: "100%",
        mb: 3
      }} />*/}
      <Box sx={{'position': 'relative'}}>
        <H1 sx={{
          'textAlign': 'center',
          'zIndex': '1',
          'fontSize': ['120px', '150px'],
          'color': '#1B263E'
        }}>
          404
        </H1>
        <Box sx={{
          'position': 'absolute',
          'backgroundColor': '#FF2F17',
          'width': ['200px', '350px'],
          'height': ['120px', '150px'],
          'zIndex': '-1',
          'top': '-50px',
          'left': ['30%', '35%', '45%']
        }} />
      </Box>

      <FlexBox flexWrap="wrap">
        <Button variant="outlined" color="primary" sx={{
          m: 1
        }} onClick={handleGoBack}>
          Go Back
        </Button>

        <Link href="/" passHref legacyBehavior>
          <Button variant="contained" color="primary" sx={{
            m: 1
          }}>
            <span>Home</span>
          </Button>
        </Link>
      </FlexBox>
    </FlexRowCenter>;
};
export default Error404;