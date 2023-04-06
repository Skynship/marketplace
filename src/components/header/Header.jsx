import Link from "next/link";
import { Fragment, useState } from "react";
import { Badge, Box, Drawer /*, Button, styled, Dialog */ } from "@mui/material";
import Container from "@mui/material/Container";
// import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
// import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
// import Icon from "components/icons";
// import { useAppContext } from "contexts/AppContext";
import MiniCart from "components/MiniCart";
import Logo from "components/primitives/Logo";
import { /* FlexBetween, */ FlexBox } from "components/flex-box";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";

const Header = ({
  isAbsolute = false,
  isLogoShown = true,
  isCartShown = true,
  className,
  searchInput,
  rightChildren = []
}) => {
  // const theme = useTheme();
  // const { state = {} } = useAppContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  return <Box className={clsx(className)} sx={{
      zIndex: 3,
      width: "100%",
      height: ['64px', '80px', '80px'],
      transition: "height 250ms ease-in-out",
      background: 'transparent',
      position: isAbsolute ? 'absolute' : 'relative'
    }}>
      <Container sx={{
        gap: 2,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: isLogoShown ? 'space-between' : 'flex-end'
      }}>
        {/* LEFT CONTENT - LOGO AND CATEGORY */}
        {
          isLogoShown ? (
            <FlexBox mr={2} minWidth="170px" alignItems="center">
              <Link href="/">
                <Logo />
              </Link>
            </FlexBox>
          ) : null
        }
        {/* LOGIN AND CART BUTTON */}
        <FlexBox gap={1.5} alignItems="center">
          {
            isCartShown ? (
              <Badge badgeContent={0} color="primary">
                <Box p={1.25} bgcolor="grey.200" component={IconButton} onClick={toggleSidenav}>
                  <ShoppingBagOutlined />
                </Box>
              </Badge>
            ) : null
          }
          { rightChildren }
        </FlexBox>

        {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
        <Fragment>
          {
            isCartShown ? (
              <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{
                zIndex: 9999
              }}>
                <MiniCart toggleSidenav={toggleSidenav} />
              </Drawer>
            ) : null
          }
        </Fragment>
      </Container>
    </Box>;
};

export default Header;