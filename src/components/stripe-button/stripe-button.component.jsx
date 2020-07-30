import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HAcBBDQms1s5IbJSEKKpYwf6lBQl3bhY3Gv7Ghjk0Ib8iJqP1EjbHqaVAgLQU5SZf7jSdpPbpFtsnVnMae9rKby00ORTnwema';

  const onToken = (token) => {
    console.log(token);
    alert('Payment succesusful');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
