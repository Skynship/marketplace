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
// import MiniCart from "components/MiniCart";
import Logo from "components/primitives/Logo";
import { /* FlexBetween, */ FlexBox } from "components/flex-box";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";

// styled component
// export const HeaderWrapper = styled(Box)(({
//   theme
// }) => ({
//   zIndex: 3,
//   width: "100%",
//   height: ['64px', '80px', '80px'],
//   transition: "height 250ms ease-in-out",
//   background: 'transparent'
// }));
// const StyledContainer = styled(Container)({
//   gap: 2,
//   height: "100%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between"
// });

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
  // const theme = useTheme();
  // const {
  //   state
  // } = useAppContext();
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [sidenavOpen, setSidenavOpen] = useState(false);
  // // const downMd = useMediaQuery(theme.breakpoints.down(1150));
  // // const toggleDialog = () => setDialogOpen(!dialogOpen);
  // const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  // // FOR SMALLER DEVICE
  // if (downMd) {
  //   const ICON_STYLE = {
  //     fontSize: 20
  //   };

  //   return <Box className={clsx(className)} sx={{
  //     zIndex: 3,
  //     width: "100%",
  //     height: ['64px', '80px', '80px'],
  //     transition: "height 250ms ease-in-out",
  //     background: 'transparent',
  //     position: isAbsolute ? 'absolute' : 'relative'
  //   }}>
  //       <StyledContainer>
  //         <FlexBetween width="100%">
  //           {
  //             isLogoShown ? (
  //               <Link href="/">
  //                 <Logo />
  //               </Link>
  //             ) : null
  //           }

  //           {/* RIGHT CONTENT - LOGIN, CART, SEARCH BUTTON */}
  //           <FlexBox justifyContent="end" flex={1}>
  //             {
  //               isCartShown ? (
  //                 <>
  //                 <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{
  //                   zIndex: 9999
  //                 }}>
  //                   <MiniCart toggleSidenav={toggleSidenav} />
  //                 </Drawer>
  //                   <Box onClick={toggleSidenav} component={IconButton} sx={{'backgroundColor': '#f5f6f1'}}>
  //                     <Badge badgeContent={state.cart.items.length} color="primary">
  //                       <Icon.CartBag sx={ICON_STYLE} />
  //                     </Badge>
  //                   </Box>
  //                 </>
  //               ) : null
  //             }
  //           </FlexBox>
  //         </FlexBetween>
  //         { rightChildren }
  //       </StyledContainer>
  //     </Box>;
  // }

  return null;
};

export default Header;