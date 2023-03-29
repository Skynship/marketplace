import { Divider } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween } from "components/flex-box";
import { Paragraph } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { currency } from "lib";

const PaymentSummary = () => {
  const { state } = useAppContext();
  const cartList = state.cart.items;

  const subtotalAmount = cartList.reduce((acc, { price, qty }) => acc + (price * qty), 0);
  const shippingAmount = 0;
  const taxesAmount = 0;

  const totalAmount = subtotalAmount + shippingAmount + taxesAmount;

  return <Card1>
      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Subtotal:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          {currency(subtotalAmount)}
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Shipping:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          {currency(shippingAmount)}
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Tax:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          {currency(taxesAmount)}
        </Paragraph>
      </FlexBetween>
  
      <Divider sx={{
        mb: 2
      }} />

      <Paragraph fontSize={25} fontWeight={600} lineHeight={1} textAlign="right">
        {currency(totalAmount)}
      </Paragraph>
    </Card1>;
};
export default PaymentSummary;