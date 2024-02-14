import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";

const CheckOut = () => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [cart] = UseCart();

  const totalPrice = cart?.reduce((total, item) => total + item, 0);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", {price: totalPrice })
    .then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
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
        <button
          disabled={!stripe || !clientSecret}
          type="submit"
          className="btn btn-sm my-3 bg-purple-600 text-white text-lg"
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckOut;
