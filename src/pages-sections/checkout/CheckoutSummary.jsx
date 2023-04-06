import { Button, Divider, TextField, Typography } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween } from "components/flex-box";
import { useAppContext } from "contexts/AppContext";
import { currency } from "lib";
const CheckoutSummary = () => {
  const { state } = useAppContext();
  const cartList = state.cart.items;

  const subtotalAmount = cartList.reduce((acc, { price, qty }) => acc + (price * qty), 0);
  const shippingAmount = 0;
  const taxesAmount = 0;

  const totalAmount = subtotalAmount + shippingAmount + taxesAmount;

  return <Card1>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Subtotal:</Typography>
        <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          {currency(subtotalAmount)}
        </Typography>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Typography color="grey.600">Shipping:</Typography>
        <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          {currency(shippingAmount)}
        </Typography>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Typography color="grey.600">Tax:</Typography>
        <Typography fontSize="18px" fontWeight="600" lineHeight="1">
          {currency(taxesAmount)}
        </Typography>
      </FlexBetween>

      <Divider sx={{
        mb: "1rem"
      }} />

      <Typography fontSize="25px" fontWeight="600" lineHeight="1" textAlign="right" mb={3}>
        {currency(totalAmount)}
      </Typography>

      {/*<TextField placeholder="Voucher" variant="outlined" size="small" fullWidth />
      <Button variant="outlined" color="primary" fullWidth sx={{
        mt: "1rem",
        mb: "30px"
      }}>
        Apply Voucher
      </Button>*/}
    </Card1>;
};
export default CheckoutSummary;