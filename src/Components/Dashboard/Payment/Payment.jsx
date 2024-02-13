import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
  return (
    <div>
      <div className="text-center">
        <SectionTitle title={"Pay your fee"}></SectionTitle>
      </div>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckOut />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
