import React, { useState } from "react";
import { Button, TextField, Box, Tooltip } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import Card1 from "components/Card1";

const SubscribeForm = () => {
	const [ isSubscribed, setIsSubscribed ] = useState(false);
	const [ isSubscriptionAttempted, setIsSubscriptionAttempted ] = useState(false);

	const handleFormSubmit = async values => {
		// 3. Send a request to our API with the user's email address.
		const res = await fetch('/api/subscribeNewsletter', {
		    body: JSON.stringify({ email: values.landing_subscription_email }),
		    headers: { 'Content-Type': 'application/json' },
		    method: 'POST'
		});

		const { error } = await res.json();

		if (error) {
		    return setIsSubscribed(false);
		}

		if (!isSubscriptionAttempted) {
			setIsSubscriptionAttempted(true);
		}

		setIsSubscribed(true);
	};

	return <Formik initialValues={{ "landing_subscription_email": "" }} validationSchema={subscribeSchema} onSubmit={handleFormSubmit}>
		{({
		  values,
		  errors,
		  touched,
		  handleChange,
		  handleBlur,
		  handleSubmit,
		  setFieldValue
		}) => <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
      		<Box sx={{'display': 'flex', 'flexDirection': ['column', 'row']}}>
				<TextField fullWidth type="email"
			    	onBlur={handleBlur}
					name="landing_subscription_email"
			    	label="Email Address"
			    	onChange={handleChange}
			    	value={isSubscribed ? "" : values.shipping_email}
			    	error={!!touched.shipping_email && !!errors.shipping_email}
			    	helperText={touched.shipping_email && errors.shipping_email}
			    />
					<Tooltip open={isSubscriptionAttempted} arrow title={isSubscribed ? "Thanks for subscribing!" : "Something unexpected happened, please try again"} placement="bottom">
				    <Button type="submit" onClick={handleFormSubmit} variant="contained" color="primary" disabled={isSubscribed} fullWidth sx={{'marginLeft': ['0px', '25px'], 'marginTop': ['20px', '0px']}}>
				      Subscribe
				    </Button>
        		</Tooltip>
           </Box>
    	</form>}
    </Formik>;
};

// uncomment these fields below for from validation
const subscribeSchema = yup.object().shape({
  landing_subscription_email: yup.string().email("invalid email").required("required")
});

export default SubscribeForm;