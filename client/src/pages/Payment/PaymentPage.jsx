import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './payment.css';
import Navbar from '../../components/Navbar/Navbar'

const PaymentPage = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <>
      <Navbar />
      <div className='paymentContainer'>
        <h2>Payment Page</h2>
        <StripeCheckout
          token={onToken}
          stripeKey=""
          amount={1000}
          name="Jacket"
          description=""
          image="https://your-image-url.com/logo.png"
          currency="USD"
          allowRememberMe={false}
        />
      </div>
    </>
  );
};

export default PaymentPage;
