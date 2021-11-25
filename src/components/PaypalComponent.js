import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PaypalComponent() {
  const MyCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "100",
          },
        },
      ],
    });
  };

  const MyOnApprove = (data, actions) => {
    console.log(data);
    return actions.order.capture();
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => MyCreateOrder(data, actions)}
      onApprove={(data, actions) => MyOnApprove(data, actions)}
    />
  );
}
