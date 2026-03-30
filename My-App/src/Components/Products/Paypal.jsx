import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "USD"
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}

        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: (amount || 1).toString(),
                },
              },
            ],
          });
        }}

        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("SUCCESS:", details);
            onSuccess(details);
          });
        }}

        onError={(err) => {
          console.log("PAYPAL ERROR:", err);
          alert("Payment failed");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;