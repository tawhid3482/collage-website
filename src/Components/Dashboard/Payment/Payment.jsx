import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripePromise = loadStripe("");
  return (
    <div>
      <div className="text-center">
        <SectionTitle title={"Pay your fee"}></SectionTitle>
      </div>
      <div className="">
        <Elements stripe={stripePromise}>
          {/* <CheckoutForm /> */}
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
