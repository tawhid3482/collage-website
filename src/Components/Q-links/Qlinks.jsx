import { FaLink } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Qlinks = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-8 h-screen">
        <div className="space-y-3 w-1/3 p-5">
          <img
            src="https://thumbs.dreamstime.com/b/donate-money-vector-illustration-charity-donation-concept-hand-putting-banknote-box-eps-143816912.jpg"
            className="w-96 h-60 border-green-500 border-2"
            alt=""
          />
          <p className="text-3xl font-bold">Donation helps us</p>
          <p className="w-96">
            The Campaign for the Kingster University is the
            <span className="font-bold">
              largest fundraising campaign in history
            </span>
            . With a historic $1 billion goal, the campaign is expanding U of
            T’s global leadership capacity.
          </p>
          <button className="btn bg-green-600 text-white w-56">
            Become a Donar
          </button>
        </div>
        <div className="space-y-3 w-1/3 text-center">
            <div className="flex justify-center items-center">
            <TfiEmail className="text-9xl text-green-600 "></TfiEmail>

            </div>
          <p className="text-3xl font-bold text-center">
            Subscribe To Newsletter
          </p>
          <p className="text-center">Get updates to news & events</p>
          <p className="text-center mt-5 ">
            The Campaign for the Kingster University is the largest fundraising
            campaign in history. With a historic
          </p>
          <input
            type="text"
            placeholder="Your Email Address"
            className="p-3 bg-gray-300 w-60"
          />
          <br />
          <button className="btn bg-green-600 text-white w-60">
            Become a Donar
          </button>
        </div>
        <div className="w-1/3 p-8  h-[420px] bg-gray-900">
          <div className="flex items-center gap-4">
            <FaLink className="text-3xl text-white"></FaLink>
            <span className="text-3xl font-bold text-white">Quick Links</span>
          </div>
          <div className="grid grid-cols-1 space-y-2  p-5">
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">
              Alumni & Donors
            </Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">Athletic Calendar</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">All Kingster’s Events</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">Partnership & Out Reach</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">
              Alumni & Donors
            </Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">Athletic Calendar</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">All Kingster’s Events</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-green-600">Partnership & Out Reach</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qlinks;
