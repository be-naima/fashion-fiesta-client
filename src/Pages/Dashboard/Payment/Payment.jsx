import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hook/UseCart';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Paymentt_Gateway_PK);

const Payment = () => {
  const classs = useLoaderData()
    console.log(classs);
    
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(total);
    const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}/>
      </Elements>
    </div>
  );
};
export default Payment;