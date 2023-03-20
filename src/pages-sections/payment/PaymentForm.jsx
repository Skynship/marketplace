import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useAppContext } from "contexts/AppContext";
import { Box, Button, Divider, Grid, Radio, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as yup from "yup";
import { Formik } from "formik";
import Card1 from "components/Card1";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
const PaymentForm = () => {
  const width = useWindowSize();
  const router = useRouter();
  const isMobile = width < 769;

  const {
    state,
    dispatch
  } = useAppContext();

  const handleFormSubmit = async values => {
    const { card_no, name, exp_date, cvc } = values;

    dispatch({
      type: 'CHANGE_CREDIT_CARD',
      payload: {
        credit_card: {
          number: card_no,
          expiry_date: exp_date,
          name,
          security_code: cvc
        }
      }
    });

    // router.push("/payment");
  }

  return <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => <form onSubmit={handleSubmit}>

              <Card1 sx={{
                mb: 4
              }}>
                <Paragraph sx={{'color': '#1B263E', 'fontSize': '18px', 'fontWeight': '600'}}>Credit card details</Paragraph>
                <Divider sx={{
                  mb: 3,
                  mx: -4
                }} />
              <Box mb={3}>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <TextField fullWidth name="card_no" label="Card Number" onBlur={handleBlur} value={values.card_no} onChange={handleChange} helperText={touched.card_no && errors.card_no} />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField fullWidth name="exp_date" label="Exp Date" placeholder="MM/YY" onBlur={handleBlur} onChange={handleChange} value={values.exp_date} helperText={touched.exp_date && errors.exp_date} />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField fullWidth name="name" onBlur={handleBlur} value={values.name} label="Name on Card" onChange={handleChange} helperText={touched.name && errors.name} />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField fullWidth name="cvc" onBlur={handleBlur} value={values.cvc} label="Security Code" onChange={handleChange} helperText={touched.cvc && errors.cvc} />
                  </Grid>
                </Grid>
              </Box>
          </Card1> 
          <Grid container spacing={7}>
            <Grid item sm={6} xs={12}>
              <Link href="/checkout" passHref>
                <Button variant="outlined" color="primary" type="button" fullWidth>
                  Back to checkout details
                </Button>
              </Link>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Review Order
              </Button>
            </Grid>
          </Grid>
        </form>}
    </Formik>;
};
const initialValues = {
  card_no: "",
  name: "",
  exp_date: "",
  cvc: ""
};

const checkoutSchema = yup.object().shape({
  card_no: yup.string().required("required"),
  name: yup.string().required("required"),
  exp_date: yup.string().required("required"),
  cvc: yup.string().required("required")
});

export default PaymentForm;