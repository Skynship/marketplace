import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useAppContext } from "contexts/AppContext";
import { Box, Button, Divider, Grid, Radio, TextField, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as yup from "yup";
import { Formik } from "formik";
import Card1 from "components/Card1";
import { FlexBox } from "components/flex-box";
import useWindowSize from "hooks/useWindowSize";

const MIN_CREDIT_CARD_LENGTH = 12;
const MAX_CREDIT_CARD_LENGTH = 19;
const PaymentForm = () => {
  const width = useWindowSize();
  const router = useRouter();
  const isMobile = width < 769;

  const {
    state,
    dispatch
  } = useAppContext();

// Much of logic inspired by: https://github.com/riosdanny/react-cc-validation/blob/master/src/App.js#L49-L72
  const validate = (values = {}) => {
    const { card_no: cardNumber, exp_date: expiryDate, cvc: security_code } = values;
    const errors = {};

    // Security code needs to be either 3 or 4
    if (security_code && (security_code.length < 3 || security_code.length > 4)) {
      errors.cvc = 'Security code is invalid';
    }

    if (expiryDate && expiryDate.length !== 4) {
      errors.exp_date = 'Expiry date is invalid';
    }

    if (cardNumber) {
      let sum = 0;
      let temp = 0;
      let cardNumberCopy = cardNumber;
      let checkDigit = parseInt(cardNumber.slice(-1));
      let parity = cardNumberCopy.length % 2;

      for (let i = 0; i <= cardNumberCopy.length - 2; i++) {
        if (i % 2 === parity) {
          temp = (+cardNumberCopy[i]) * 2;
        }
        else {
          temp = (+cardNumberCopy[i]);
        }

        if (temp > 9) {
          temp -= 9;
        }

        sum += temp;
      }

      const isCardNumberBetweenMinAndMaxLength = cardNumber.length > MIN_CREDIT_CARD_LENGTH && cardNumber.length < MAX_CREDIT_CARD_LENGTH;
      if (isCardNumberBetweenMinAndMaxLength && (sum + checkDigit) % 10 !== 0) {
        errors.card_no = 'Card entry is invalid';
      }
    }

    return errors;
  };

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

    router.push("/summary");
  }

  return <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validate={validate} validationSchema={checkoutSchema}>
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
                <Typography fontWeight="600" mb={2}>
                  Credit card details
                </Typography>
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
          <Grid container spacing={7} sx={{'marginTop': ['0px', '40px']}}>
            <Grid item sm={6} xs={12} sx={{'paddingTop': ['0px !important', '24px', '30px'], 'marginTop': ['50px', '0px' , '0px']}}>
              <Link href="/checkout" passHref>
                <Button variant="outlined" color="primary" type="button" fullWidth>
                  Back to checkout details
                </Button>
              </Link>
            </Grid>
            <Grid item sm={6} xs={12} sx={{'paddingTop': ['0px !important', '24px', '30px'], 'margin': ['20px 0px', '0px' , '0px']}}>
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