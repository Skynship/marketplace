import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Grid } from "@mui/material";
import Stepper from "components/Stepper";
import ShopLayout1 from "./ShopLayout1";

const CheckoutNavLayout = ({
  children,
  omitShopLayout = false,
  SX = {}
}) => {
  const [selectedStep, setSelectedStep] = useState(0);
  const router = useRouter();
  const {
    pathname
  } = router;
  const handleStepChange = step => {
    switch (step) {
      case 0:
        router.push("/checkout");
        break;
      case 1:
        router.push("/payment");
        break;
      case 2:
        router.push("/summary");
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    switch (pathname) {
      case "/checkout":
        setSelectedStep(1);
        break;
      case "/payment":
        setSelectedStep(2);
        break;
      case "/summary":
        setSelectedStep(3);
        break;
      default:
        break;
    }
  }, [pathname]);

  const layoutChildren = (
    <Container sx={{
      ...SX,
      my: 4
    }}>
      <Box mb={3} display={{
        sm: "block",
        xs: "none"
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stepper stepperList={stepperList} selectedStep={selectedStep} onChange={handleStepChange} />
          </Grid>
        </Grid>
      </Box>

      {children}
    </Container>
  );

  if (omitShopLayout) {
    return layoutChildren;
  }

  return <ShopLayout1>
    {layoutChildren}
    </ShopLayout1>;
};

const stepperList = [{
  title: "Details",
  disabled: false
}, {
  title: "Payment",
  disabled: false
}, {
  title: "Summary",
  disabled: true
}];

export default CheckoutNavLayout;