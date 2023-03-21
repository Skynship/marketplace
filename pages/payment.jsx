import { Grid, Container, Box } from "@mui/material";
import PaymentForm from "pages-sections/payment/PaymentForm";
import PaymentSummary from "pages-sections/payment/PaymentSummary";
import CheckoutNavLayout from "components/layouts/CheckoutNavLayout";
import Stepper from "components/Stepper";
import { DropFooter } from "components/footer";
import Header from "components/header/Header";
const Checkout = () => {
  return <>
    <Header />
    <CheckoutNavLayout SX={{'padding': '0px !important', 'margin': '0px !important', 'display': 'flex', 'flexDirection': 'column', 'margin': '0 auto !important' }} omitShopLayout>
      <Box sx={{
        my: [0, 4, 4],
        px: '24px',
        flexGrow: '1'
      }}>
        <Grid container flexWrap="wrap-reverse" spacing={3} sx={{'paddingLeft': ['0px', '0px', '24px'], 'paddingRight': ['0px', '0px', '24px']}}>
          <Grid item lg={8} md={8} xs={12}>
            <PaymentForm />
          </Grid>

          <Grid item lg={4} md={4} xs={12}>
            <PaymentSummary />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{'position': ['flex', 'flex', 'absolute'], 'left': '0px', 'bottom': '0px', 'width': '100%'}}>
        <DropFooter />
      </Box>
    </CheckoutNavLayout>
  </>;
};

export default Checkout;
