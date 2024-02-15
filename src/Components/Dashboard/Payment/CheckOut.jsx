import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCart from "../../../Hooks/UseCart";
import AuthHook from "../../../Hooks/AuthHook";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = AuthHook();
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, settransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [cart, refetch] = UseCart();
  const totalPrice = cart?.reduce((total, item) => total + item.fee, 0);
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { fee: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
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
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirmEroor khau");
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        settransactionId(paymentIntent.id);
      }
      // now save to the database
      const payment = {
        email: user.email,
        fee: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
        cartIds: cart?.map((item) => item._id),
        status: "pending",
      };
      const res = await axiosSecure.post("/payments", payment);
      console.log("payment save", res.data);
      refetch();
      if (res.data?.paymentResults?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Payment successfully done",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/dashboard/paymentHistory");
      }
    }
  };

  return (
    <div>
      <div className="">
        <p className="text-xl font-bold text-purple-600 text-right ml-10 my-4">
          Your Fee: <span className="text-pink-500">${totalPrice}</span>
        </p>
      </div>

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
        {transactionId && (
          <p className="text-green-500">Your Transaction Id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckOut;
