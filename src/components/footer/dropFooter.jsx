import Link from "next/link";
import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import Logo from 'components/primitives/Logo';
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import Twitter from "components/icons/Twitter";
import TikTok from "components/icons/TikTok";
import Instagram from "components/icons/Instagram";

// styled component
const StyledLink = styled("span")(({
  theme
}) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[900],
  "&:hover": {
    color: theme.palette.grey[700]
  }
}));

const DropFooter = () => {
  const isDev = process.env.HOST === 'dev';
  let hostname = isDev ? 'http://localhost:3000/' : 'https://skynship.com/';

  return <footer>
      <Box bgcolor="#fffff9">
        <Container sx={{
          p: "1rem",
          color: "black"
        }}>
          <Box overflow="hidden" sx={{ 'justifyContent': 'space-between' }}>
            <Grid>
              <Grid sx={{'padding': '30px 0px'}} item lg={4} md={8} sm={8} xs={12}>
                <Link href="/">
                  <Logo isDark />
                </Link>
              </Grid>

              <Box sx={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'flexGrow': 1 }}>
                <Grid item lg={4} md={8} sm={8} xs={14} sx={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': ['start', 'center'], 'marginRight': '30px' }}>
                  <Box sx={{'whiteSpace': 'nowrap'}} fontSize="18px" fontWeight="600" mb={1.5} lineHeight="1" color="black">
                    About Us
                  </Box>

                  <Box sx={{'textAlign': 'center'}}>
                    {aboutLinks.map((item, ind) => <a href={`${hostname}${item.url}`} key={ind}>
                        <StyledLink>{item.title}</StyledLink>
                      </a>)}
                  </Box>
                </Grid>

                <Grid item lg={5} md={8} sm={8} xs={14} sx={{
                  color: 'grey.900',
                  cursor: 'default'
                }}>
                  <Box fontSize="18px" fontWeight="600" mb={1.5} lineHeight="1" color="black">
                    Contact Us
                  </Box>

                  <Box py={0.6} >
                    5005 Stoney Creek Rd, Culver City, CA, LA, 90230, United States 
                  </Box>

                  <Box py={0.6}>
                    Email: skynship1@gmail.com
                  </Box>

                  <FlexBox className="flex" mx={-0.625}>
                    {iconList.map((item, ind) => <a href={item.url} target="_blank" rel="noreferrer noopenner" key={ind}>
                        <IconButton sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)"
                        }}>
                          <item.icon fontSize="inherit" sx={{
                            color: "black"
                          }} />
                        </IconButton>
                      </a>)}
                  </FlexBox>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>;
};
const aboutLinks = [
  {
    title: 'Terms & Conditions',
    url: 'legal/terms_and_conditions.html'
  }, {
    title: "Privacy Policy",
    url: 'legal/privacy_policy.html'
  }
];
const iconList = [{
  icon: TikTok,
  url: "https://www.tiktok.com/@skynship"
},
// {
//   icon: Twitter,
//   url: "https://twitter.com/skynship"
// },
{
  icon: Instagram,
  url: "https://www.instagram.com/skyn.ship/"
}];
export default DropFooter;