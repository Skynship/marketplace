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
    <CheckoutNavLayout omitShopLayout>
      <Container sx={{
        my: 4
      }}>
        <Grid container flexWrap="wrap-reverse" spacing={3}>
          <Grid item lg={8} md={8} xs={12}>
            <PaymentForm />
          </Grid>

          <Grid item lg={4} md={4} xs={12}>
            <PaymentSummary />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{'position': 'absolute', 'left': '0px', 'bottom': '0px', 'width': '100%'}}>
        <DropFooter />
      </Box>
    </CheckoutNavLayout>
  </>;
};

export default Checkout;
