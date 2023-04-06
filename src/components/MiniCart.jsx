import Link from "next/link";
import { Avatar, Box, Button, Divider, IconButton /*, useTheme */ } from "@mui/material";
// import { Add, Clear, Close, Remove } from "@mui/icons-material";
import LazyImage from "components/LazyImage";
import { FlexBetween, FlexBox } from "components/flex-box";
import { H5, Paragraph, Tiny } from "components/Typography";
import CartBag from "components/icons/CartBag";
import { useAppContext } from "contexts/AppContext";
import { currency } from "lib";

const MiniCart = ({
  toggleSidenav
}) => {
  // const {
  //   palette
  // } = useTheme();

  const {
    state,
    dispatch
  } = useAppContext();

  const cartList = state.cart.items;

  const handleCartAmountChange = (amount, product) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        ...product,
        qty: amount
      }
    });
  };

  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
  };

  return null;
};
export default MiniCart;