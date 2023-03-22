import { Divider, Box } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween } from "components/flex-box";
import { Paragraph } from "components/Typography";
import { currency } from "lib";
const OrderSummary = (props) => {
  const { contact = {}, shipping_address = {}, billing_address = {}, credit_card = {} } = props;
  const { address, country } = shipping_address;
  const { address: bill_address, country: billing_country } = billing_address;
  const { number = '' } = credit_card;
  const { email_address } = contact;
  console.log(props);

  return <Card1>
      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Contact:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          {email_address}
        </Paragraph>
      </FlexBetween>
      <Divider sx={{ mb: 3, mx: -4 }} />

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Ship to:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1} textAlign="right">
          <Box>{country}</Box>
          <Box sx={{'fontWeight': '500', 'fontSize': '14px'}}>{address}</Box>
        </Paragraph>
      </FlexBetween>
      <Divider sx={{ mb: 3, mx: -4 }} />

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Billing Address:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1} textAlign="right">
          <Box>{billing_country}</Box>
          <Box sx={{'fontWeight': '500', 'fontSize': '14px'}}>{bill_address}</Box>
        </Paragraph>
      </FlexBetween>
      <Divider sx={{ mb: 3, mx: -4 }} />

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Payment:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1} sx={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'flex-end'}}>
          <span>Ending with: {number.substr(-4)}</span>
          <Box component="span" sx={{'fontWeight': '500', 'fontSize': '14px'}}>{bill_address}</Box>
        </Paragraph>
      </FlexBetween>
    </Card1>;
};
export default OrderSummary;