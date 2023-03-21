import { Grid, Container, Box } from "@mui/material";
import { useAppContext } from "contexts/AppContext";
import PaymentSummary from "pages-sections/payment/PaymentSummary";
import OrderSummary from "pages-sections/orders/OrderSummary";
import CheckoutNavLayout from "components/layouts/CheckoutNavLayout";
import Stepper from "components/Stepper";
import { DropFooter } from "components/footer";
import Header from "components/header/Header";

const Checkout = () => {
  const { state } = useAppContext();
  const { payment = {} } = state;

  return <>
    <Header />
    <CheckoutNavLayout omitShopLayout>
      <Container sx={{ my: 4 }}>
        <Box sx={{ my: 4 }}>
          <OrderSummary {...payment} />
        </Box>
        <PaymentSummary />
      </Container>
      <Box sx={{'position': 'absolute', 'left': '0px', 'bottom': '0px', 'width': '100%'}}>
        <DropFooter />
      </Box>
    </CheckoutNavLayout>
  </>;
};

export default Checkout;
