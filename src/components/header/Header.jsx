import Link from "next/link";
import { Fragment, useState } from "react";
import { Badge, Box, Button, Dialog, Drawer, styled } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Clear, KeyboardArrowDown, PersonOutline } from "@mui/icons-material";
import clsx from "clsx";
import Icon from "components/icons";
import { layoutConstant } from "utils/constants";
import Login from "pages-sections/sessions/Login";
import { useAppContext } from "contexts/AppContext";
import Logo from "components/primitives/Logo";
import MiniCart from "components/MiniCart";
import Category from "components/icons/Category";
import { Paragraph } from "components/Typography";
import MobileMenu from "components/navbar/MobileMenu";
import { FlexBetween, FlexBox } from "components/flex-box";
import CategoryMenu from "components/categories/CategoryMenu";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";

// styled component
export const HeaderWrapper = styled(Box)(({
  theme
}) => ({
  zIndex: 3,
  width: "100%",
  height: ['64px', '80px', '80px'],
  transition: "height 250ms ease-in-out",
  background: 'transparent'
}));
const StyledContainer = styled(Container)({
  gap: 2,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

// ==============================================================

// ==============================================================

const Header = ({
  isAbsolute = false,
  isLogoShown = true,
  isCartShown = true,
  className,
  searchInput,
  rightChildren = []
}) => {
  const theme = useTheme();
  const {
    state
  } = useAppContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  // const [searchBarOpen, setSearchBarOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));
  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
  // const toggleSearchBar = () => setSearchBarOpen(!searchBarOpen);

  // LOGIN AND MINICART DRAWER
  const DIALOG_DRAWER = <Fragment>
      <Dialog scroll="body" open={dialogOpen} fullWidth={isMobile} onClose={toggleDialog} sx={{
        zIndex: 9999
      }}>
        <Login />
      </Dialog>

      {
        isCartShown ? (
          <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{
            zIndex: 9999
          }}>
            <MiniCart toggleSidenav={toggleSidenav} />
          </Drawer>
        ) : null
      }
    </Fragment>;

  // FOR SMALLER DEVICE
  if (downMd) {
    const ICON_STYLE = {
      fontSize: 20
    };

    return <Box className={clsx(className)} sx={{
      zIndex: 3,
      width: "100%",
      height: ['64px', '80px', '80px'],
      transition: "height 250ms ease-in-out",
      background: 'transparent',
      position: isAbsolute ? 'absolute' : 'relative'
    }}>
        <StyledContainer>
          <FlexBetween width="100%">
            {/* LEFT CONTENT - NAVIGATION ICON BUTTON */}
            {/*<Box flex={1}>
              <MobileMenu />
            </Box>*/}

            {/* MIDDLE CONTENT - LOGO */}
            {
              isLogoShown ? (
                <Link href="/">
                  <Logo />
                </Link>
              ) : null
            }

            {/* RIGHT CONTENT - LOGIN, CART, SEARCH BUTTON */}
            <FlexBox justifyContent="end" flex={1}>
              {/*<Box component={IconButton} onClick={toggleSearchBar}>
                <Icon.Search sx={ICON_STYLE} />
              </Box>

              <Box component={IconButton} onClick={toggleDialog}>
                <Icon.User sx={ICON_STYLE} />
              </Box>*/}

              {
                isCartShown ? (
                  <>
                  <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{
                    zIndex: 9999
                  }}>
                    <MiniCart toggleSidenav={toggleSidenav} />
                  </Drawer>
                    <Box onClick={toggleSidenav} component={IconButton} sx={{'backgroundColor': '#f5f6f1'}}>
                      <Badge badgeContent={state.cart.items.length} color="primary">
                        <Icon.CartBag sx={ICON_STYLE} />
                      </Badge>
                    </Box>
                  </>
                ) : null
              }
            </FlexBox>
          </FlexBetween>
          { rightChildren }
        </StyledContainer>
      </Box>;
  }

  return <Box className={clsx(className)} sx={{
      zIndex: 3,
      width: "100%",
      height: ['64px', '80px', '80px'],
      transition: "height 250ms ease-in-out",
      background: 'transparent',
      position: isAbsolute ? 'absolute' : 'relative'
    }}>
      <StyledContainer>
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

        {/* SEARCH FORM */}
        <FlexBox justifyContent="center" flex="1 1 0">
          {searchInput}
        </FlexBox>

        {/* LOGIN AND CART BUTTON */}
        <FlexBox gap={1.5} alignItems="center">
          {/*<Box component={IconButton} p={1.25} bgcolor="grey.200" onClick={toggleDialog}>
            <PersonOutline />
          </Box>*/}

          {
            isCartShown ? (
              <Badge badgeContent={state.cart.items.length} color="primary">
                <Box p={1.25} bgcolor="grey.200" component={IconButton} onClick={toggleSidenav}>
                  <ShoppingBagOutlined />
                </Box>
              </Badge>
            ) : null
          }
          { rightChildren }
        </FlexBox>

        {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
        {DIALOG_DRAWER}
      </StyledContainer>
    </Box>;
};
export default Header;