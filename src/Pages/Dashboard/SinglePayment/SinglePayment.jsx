
const stripePromise = loadStripe(import.meta.env.VITE_Paymentt_Gateway_PK);
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import useCart from '../../../hook/UseCart';
import CheckoutForm from './../Payment/CheckoutForm';
const SinglePayment = () => {
    const cartItem = useLoaderData()
    console.log(cartItem);
    // const [cartItem] = usecartItem();
    // const total = cartItem.reduce((sum, item) => sum + item.price, 0);
    // console.log(total);
    console.log(cartItem.available_seats,cartItem.enrolled);
    const newSeats = cartItem.available_seats - 1;
    const newEnrolled = cartItem.enrolled + 1;
    console.log(newSeats);
    
   
        
    //const price = parseFloat(total.toFixed(2))
    const updatedClass = {
        available_seats: newSeats,
        enrolled: newEnrolled
        
       
    }

    fetch(`https://fashion-fiesta-server-production.up.railway.app/classes/${cartItem.classId}/seats`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedClass)
    })
    return (
        <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={cartItem.price} cartItem={cartItem} />
        </Elements>
      </div>
    );
};

export default SinglePayment;