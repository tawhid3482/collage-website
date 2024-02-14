import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOut = () => {
  const [error,setError]=useState()
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if(card == null){
        return
    }
    const {error,paymentMethod}= await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
        console.log('payment error',error)
        setError(error.message)
    }else{
        console.log('payment method',paymentMethod)
        setError('')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          id="my-card"
          onChange={""}
          options={{
            iconStyle: "solid",
            style: {
              base: {
                iconColor: "#c4f0ff",
                color: "#444444",
                fontSize: "16px",
              },
              invalid: {
                iconColor: "#990000",
                color: "#990000",
              },
            },
          }}
        />
         <button disabled={!stripe} type="submit" className="btn btn-sm my-3 bg-purple-600 text-white text-lg">
          Pay
          </button>
          <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckOut;
