// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://www.stripe.com/docs/payments/integration-builder

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "./StripePayment.css";
import { Alert } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import { createSubscriptionPlan } from "apis/routes/profile";
import { UserContext } from "providers/UserProvider";
import axios from "axios";
import { getProfileDetails } from "apis/routes/profile";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [email, setEmail] = useState("");

  const location = useLocation();
  const history = useHistory();
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    if (user) {
      getProfileDetails(user.auth_token).then(({ profile_details }) => {
        setEmail(profile_details.email);
      });
    }
  });

  React.useEffect(() => {
    if (!location.state) {
      history.replace("/auth/pricing");
      return <></>;
    }
    if (!user) {
      history.replace("/auth/login");
    }
    if (!stripe || !elements) {
      setProcessing(true);
    } else {
      setProcessing(false);
    }
  });

  const { price_id, price } = location.state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (error) {
      elements.getElement("card").focus();
      return;
    }
    if (cardComplete) setProcessing(true);

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: { email },
    });

    if (payload.error) {
      setError(payload.error);
    } else {
      const response = await createSubscriptionPlan(user.auth_token, {
        payment_method_id: payload.paymentMethod.id,
        price_id,
      });
      if (response.message === "Plan Subscribed Successfully") {
        setPaymentComplete(true);
      } else if (response[1].status === "incomplete") {
        const response = await axios({
          url: "https://api.stripe.com/v1/payment_intents",
          method: "get",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
          },
          data: {
            amount: price,
            currency: "eur",
            payment_method: payload.paymentMethod,
          },
        });

        const result = await stripe.confirmCardPayment(
          response.data.data[0].client_secret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: { email },
            },
          }
        );

        if (result.error) {
          alert(result.error.message);
        } else {
          setPaymentComplete(true);
        }
      }
    }
    setProcessing(false);
  };

  return paymentComplete ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Paiement réussi
      </div>
    </div>
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Email"
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>

      {error && (
        <Alert style={{ margin: "0 15px 20px" }} color="danger">
          {error.message}
        </Alert>
      )}

      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        S'abonner - € {price}
      </SubmitButton>
    </form>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export const StripePayment = () => {
  return (
    <div
      className="content"
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Elements stripe={stripePromise} options={{ locale: "fr" }}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
